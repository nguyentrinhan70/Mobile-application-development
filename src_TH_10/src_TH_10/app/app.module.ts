import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CameraPage } from '../pages/camera/camera';
import { MapPage } from '../pages/map/map';

import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../providers/data';
import { Server } from '../providers/server';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CameraPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CameraPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    Camera,
    Geolocation,
    Server,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
