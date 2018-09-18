import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GatewayConnectorProvider} from "../../providers/gateway-connector/gateway-connector";
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";

@Component({
  selector: 'page-crypto-controller',
  templateUrl: 'crypto-controller.html',
})
export class CryptoControllerPage {

  rawData: string;
  fragment: string;
  baseUrl: string;
  log: string;
  egk: Egk;

  constructor(private gateway: GatewayConnectorProvider,
              private store: TransientStoreProvider,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.log = "";
  }

  ionViewDidLoad() {
    this.fragment = this.navParams.get('fragment');
    this.gateway.get(this.fragment).subscribe((data: CipherObject) => {
      this.rawData = data.data;
      this.egk = JSON.parse(data.data);
      console.log(this.egk);
    });
  }

}
