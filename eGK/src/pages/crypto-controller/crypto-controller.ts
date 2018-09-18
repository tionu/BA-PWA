import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GatewayConnectorProvider} from "../../providers/gateway-connector/gateway-connector";
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";

@Component({
  selector: 'page-crypto-controller',
  templateUrl: 'crypto-controller.html',
})
export class CryptoControllerPage {

  constructor(private gateway: GatewayConnectorProvider,
              private store: TransientStoreProvider,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
