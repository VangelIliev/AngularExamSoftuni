import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth){}
  async signIn(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }
  async signUp(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }
  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}