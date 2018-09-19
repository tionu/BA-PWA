import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GatewayConnectorProvider} from "../../providers/gateway-connector/gateway-connector";
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";
import {StammdatenPage} from "../stammdaten/stammdaten";
import {ScannerPage} from "../scanner/scanner";
import {decode} from "base64-arraybuffer";
import {TextDecoder} from "text-encoding-utf-8";

@Component({
  selector: 'page-crypto-controller',
  templateUrl: 'crypto-controller.html',
})
export class CryptoControllerPage {

  log: string;
  error: string;

  constructor(private gateway: GatewayConnectorProvider,
              private store: TransientStoreProvider,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.log = "";
  }

  ionViewDidLoad() {
    let fragment = this.navParams.get('fragment');
    let uuid: string = fragment.substring(0, 36);
    let key64: string = fragment.substring(36);

    this.gateway.get(uuid).subscribe((response: CipherObject) => {
      if (!response.ciphertext || !response.nonce) {
        this.error = "Daten konnten nicht geladen werden.";
      } else {
        this.decrypt(decode(response.ciphertext), decode(response.nonce), decode(key64));
      }
    });
  }

  decrypt(cipherText: ArrayBuffer, nonce: ArrayBuffer, key: ArrayBuffer) {
    window.crypto.subtle.importKey(
      "raw", key, {name: "AES-GCM",}, false, ["decrypt"])
      .then(secretKey => {
        crypto.subtle.decrypt({name: "aes-gcm", iv: nonce}, secretKey, cipherText).then(plainText => {
          this.store.egk = JSON.parse(TextDecoder('UTF-8').decode(new Uint8Array(plainText)));
          this.navCtrl.setRoot(StammdatenPage);
        })
      });
  }

  gotoScanner() {
    this.navCtrl.push(ScannerPage);
  }

}
