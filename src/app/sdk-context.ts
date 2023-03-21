import {TweedFrontendSDK} from "@paytweed/frontend-sdk"

export class SDKContext {
    constructor() {
      this.tweedSdk = TweedFrontendSDK.setup({
        sendMessageToBackend: async (message) => {
          const response = await fetch("http://localhost:3010/message", {
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          });
          const { answer } = await response.json();
          return answer;
        },
        defaultBlockchainIds: ["ethereumGoerli", "tezosGhost", "polygonMumbai"],
      })
    }
    tweedSdk: any;
  }