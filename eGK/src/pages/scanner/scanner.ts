import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";
import {CryptoControllerPage} from "../crypto-controller/crypto-controller";

declare var QRReader;

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})

export class ScannerPage {

  log: string;

  constructor(private persistence: TransientStoreProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.log = "";
  }

  ionViewDidLoad() {
    this.scan();
  }

  private scan() {
    QRReader.scan((error, result) => {
      this.stopScan()
      if (error) {
        this.log += "<br>QRReader: " + error;
        this.navCtrl.setRoot(CryptoControllerPage, {fragment: "92542168-3174-407b-90ba-aec0686842be"});
      } else {
        let path = <string> result;
        let fragment: string;
        let urlParts = path.split("#", 2);
        if (urlParts && urlParts.length > 1) {
          fragment = urlParts[1];
          this.navCtrl.setRoot(CryptoControllerPage, {fragment: fragment});
        } else {
          this.log += "<br>QR invalid: " + path;
        }
      }
    });
  }

  private stopScan() {
    if (QRReader.videoTag && QRReader.videoTag.srcObject) {
      QRReader.videoTag.srcObject.getTracks().forEach(track => track.stop());
      QRReader.videoTag.srcObject = null;
    }
    QRReader.active = false;
  }

}
