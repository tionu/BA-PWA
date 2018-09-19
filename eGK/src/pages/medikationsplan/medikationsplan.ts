import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";
import {ScannerPage} from "../scanner/scanner";

@Component({
  selector: 'page-medikationsplan',
  templateUrl: 'medikationsplan.html',
})
export class MedikationsplanPage {

  medikationsplan: MedikationsPlan;
  error: string;

  constructor(private store: TransientStoreProvider, public navCtrl: NavController, public navParams: NavParams) {
    if (store.egk && store.egk.medikationsplan) {
      this.medikationsplan = store.egk.medikationsplan;
    } else {
      this.error = "Keine Daten vorhanden.";
    }
  }

  ionViewDidLoad() {
    console.log(this.medikationsplan);
  }

  gotoScanner() {
    this.navCtrl.push(ScannerPage);
  }

}
