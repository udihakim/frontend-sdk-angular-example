import { Component, OnInit } from '@angular/core';
import { SDKContext } from "./sdk-context";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: SDKContext }
  ]
})

export class AppComponent implements OnInit {
  constructor(public context: SDKContext) {}

  async ngOnInit() {
    const getAddresses = async () => {
      const addresses = await this.context.tweedSdk.wallet.getAddresses()
      console.log(addresses)
    }
    await this.context.tweedSdk.wallet.create({callbacks: {onSuccess: getAddresses}})
  }


}

