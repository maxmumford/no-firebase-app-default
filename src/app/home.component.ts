import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

import * as firebase from "firebase";
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  encapsulation: ViewEncapsulation.None // applies app.component.scss to the whole page
})
export class HomeComponent {

  private user;

  constructor(
    private router: Router,
    private angularFire: AngularFire
   ) { }

  ngOnInit(){

    this.angularFire.auth.subscribe(user => {
      console.log(user);
      this.user = user;
    });

  }

  login(email, password){
    return this.angularFire.auth.login({
      email: email,
      password: password
    }, 
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  createUser(email, password){
    this.angularFire.auth.createUser({email: email, password: password})
      .then(success => {
        console.log('user created, you have been logged in');
      });
  }

  logout(){
    this.angularFire.auth.logout();
  }

  randomiseDisplayName(){
    firebase.auth().currentUser.updateProfile({
      displayName: "Random display name: " + Math.random().toString(36).substring(7),
      photoURL: ""
    }).then(something => {
      console.log('update done successfully: ', something, firebase.auth().currentUser);
    }, error => {
      console.log('failed to update: ', error);
    });
  }

}
