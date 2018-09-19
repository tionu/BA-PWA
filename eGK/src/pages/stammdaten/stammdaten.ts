import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";
import {ScannerPage} from "../scanner/scanner";
import {Tools} from "../../tools/tools";

@Component({
  selector: 'page-stammdaten',
  templateUrl: 'stammdaten.html',
})
export class StammdatenPage {

  versicherter: EgkPatient;
  anrede: string;
  geburtstag: string;
  error: string;

  constructor(private store: TransientStoreProvider, public navCtrl: NavController, public navParams: NavParams) {
    if (store.egk && store.egk.versicherter) {
      this.versicherter = this.store.egk.versicherter;
    } else {
      this.error = "Keine Daten vorhanden.";
    }
  }

  ionViewDidLoad() {
    if (!this.versicherter) {
      return;
    }
    if (this.versicherter.sex == "FEMALE") {
      this.anrede = "Frau ";
    } else if (this.versicherter.sex == "MALE") {
      this.anrede = "Herr ";
    }

    if (this.versicherter.birthday) {
      this.geburtstag = Tools.formatDate(this.versicherter.birthday);
    }
  }

  gotoScanner() {
    this.navCtrl.push(ScannerPage);
  }

}
