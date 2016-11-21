import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Initialize Firebase
  export const firebaseConfig  = {
    apiKey: "AIzaSyBGzKICh35a2MrV66iVxVVrAf-Fv1xU7hk",
    authDomain: "activity-ng.firebaseapp.com",
    databaseURL: "https://activity-ng.firebaseio.com",
    storageBucket: ""
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
