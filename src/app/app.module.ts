import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './pages/home/home.component';  
import { SharedModule } from './shared/shared.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { TimeagoModule } from 'ngx-timeago';  
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    SharedModule,
    HttpClientModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage 
    AngularFireAnalyticsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TimeagoModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
