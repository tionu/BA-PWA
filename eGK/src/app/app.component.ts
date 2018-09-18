import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';

import {HomePage} from '../pages/home/home';
import {ScannerPage} from "../pages/scanner/scanner";
import {StammdatenPage} from "../pages/stammdaten/stammdaten";
import {MedikationsplanPage} from "../pages/medikationsplan/medikationsplan";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Start', component: HomePage},
      {title: 'QR scannen...', component: ScannerPage},
      {title: 'Stammdaten', component: StammdatenPage},
      {title: 'Medikationsplan', component: MedikationsplanPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
