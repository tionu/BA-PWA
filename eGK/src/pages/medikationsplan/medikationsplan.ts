import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";
import {ScannerPage} from "../scanner/scanner";

@Component({
  selector: 'page-medikationsplan',
  templateUrl: 'medikationsplan.html',
})
export class MedikationsplanPage {

  plan: MedikationsPlan;
  error: string;
  einnahmeTrenner = "|";

  constructor(private store: TransientStoreProvider, public navCtrl: NavController, public navParams: NavParams) {
    if (this.store.egk && store.egk.medikationsplan) {
      this.plan = store.egk.medikationsplan;
    } else {
      this.error = "Keine Daten vorhanden.";
    }
  }

  ionViewDidLoad() {
  }

  gotoScanner() {
    this.navCtrl.push(ScannerPage);
  }


  isMedikation(item: any): item is Medikation {
    return item && ('pharmazentralnummer' in item);
  }

  isRezeptur(item: any): item is Rezeptur {
    return item && ('freitext' in item) && ('zusatzzeile' in item);
  }

  isFreitextzeile(item: any): item is Freitextzeile {
    return item && ('freitext' in item);
  }

}
