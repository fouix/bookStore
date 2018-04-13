import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var config = {
      apiKey: "AIzaSyCYZuXJprXWXOXh9XpvZ0o8K3XTLOnN44U",
      authDomain: "bookstore-13db0.firebaseapp.com",
      databaseURL: "https://bookstore-13db0.firebaseio.com",
      projectId: "bookstore-13db0",
      storageBucket: "bookstore-13db0.appspot.com",
      messagingSenderId: "946882021273"
    };
    firebase.initializeApp(config);
  }
}
