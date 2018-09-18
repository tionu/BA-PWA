import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TransientStoreProvider} from "../../providers/transient-store/transient-store";

@Component({
  selector: 'page-medikationsplan',
  templateUrl: 'medikationsplan.html',
})
export class MedikationsplanPage {

  constructor(private store: TransientStoreProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedikationsplanPage');
  }

}
