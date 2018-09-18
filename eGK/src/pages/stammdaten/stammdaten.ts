import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";

@Component({
  selector: 'page-stammdaten',
  templateUrl: 'stammdaten.html',
})
export class StammdatenPage {

  constructor(private store: TransientStoreProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
