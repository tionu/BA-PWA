import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ScannerPage} from "../pages/scanner/scanner";
import {StammdatenPage} from "../pages/stammdaten/stammdaten";
import {MedikationsplanPage} from "../pages/medikationsplan/medikationsplan";
import {GatewayConnectorProvider} from '../providers/gateway-connector/gateway-connector';
import {TransientStoreProvider} from '../providers/transient-store/transient-store';
import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScannerPage,
    StammdatenPage,
    MedikationsplanPage
  ],
  imports: [
    BrowserModule,
    HttpClient,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScannerPage,
    StammdatenPage,
    MedikationsplanPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GatewayConnectorProvider,
    TransientStoreProvider,
  ]
})
export class AppModule {
}
