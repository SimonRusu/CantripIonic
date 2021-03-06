import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HeaderPage } from './header/header.page';
import { HeaderLoginPage } from './header-login/header-login.page';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";


import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';



AngularFireModule.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent, HeaderPage, HeaderLoginPage],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireStorageModule],
  providers: [
    SQLite,
    SQLitePorter,
    { provide: BUCKET, useValue: 'cantrip-3c78d.appspot.com' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
