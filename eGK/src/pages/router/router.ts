import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CryptoControllerPage} from "../crypto-controller/crypto-controller";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-router',
  templateUrl: 'router.html',
})
export class RouterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (location.hash) {
      let fragment = location.hash.substring(1);
      let baseUrl = location.href.split("#")[0];
      window.history.replaceState("", document.title, baseUrl)
      this.navCtrl.setRoot(CryptoControllerPage, {fragment: fragment});
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }

}
