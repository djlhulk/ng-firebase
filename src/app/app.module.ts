import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


// Initialize Firebase
 const firebaseConfig  = {
    apiKey: "AIzaSyBGzKICh35a2MrV66iVxVVrAf-Fv1xU7hk",
    authDomain: "activity-ng.firebaseapp.com",
    databaseURL: "https://activity-ng.firebaseio.com",
    storageBucket: ""
  };

// Initialize Firebase Auth
  const firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
