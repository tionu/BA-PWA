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
import {HttpClientModule} from "@angular/common/http";
import {CryptoControllerPage} from "../pages/crypto-controller/crypto-controller";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScannerPage,
    StammdatenPage,
    MedikationsplanPage,
    CryptoControllerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScannerPage,
    StammdatenPage,
    MedikationsplanPage,
    CryptoControllerPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GatewayConnectorProvider,
    TransientStoreProvider,
  ]
})
export class AppModule {
}
