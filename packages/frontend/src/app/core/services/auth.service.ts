import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { UserCredential } from '@firebase/auth-types';
import { AngularFirestore } from '@angular/fire/firestore'
import firebase from 'firebase/app';
// Need to be able to use auth providers on "firebase"
import 'firebase/auth'
import SimpleCrypto from "simple-crypto-js"
import { RegistrationForm } from 'src/app/modules/auth/register/models/RegistrationForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTO_SIGN_IN_KEY = 'autoSignIn'

  constructor(
    private afAuth: AngularFireAuth,
    private afs:AngularFirestore,
  ) {
     
  }

  get user$() {
    // allows all users because unverified users are immediately logged out
    return this.afAuth.authState
  }

  public signOut() {
    this.afAuth.signOut()
  }

  public async signInEmail(email: string, password: string): Promise<UserCredential> {
    let attempt:firebase.auth.UserCredential
    try {
      attempt = await this.afAuth.signInWithEmailAndPassword(email, password)
    } catch(e) {
      throw this.errorCode(e)
    }
    if(!attempt.user.emailVerified) {
      this.signOut()
      throw 'Please verify your email'
    }
    return attempt
  }

  public async register(pages:typeof RegistrationForm): Promise<void> {

    let { email, password, name } = pages[0].form.value
    email = `${email}@calpoly.edu`

    let filteredKeys = new Set(['password', 'confirmPassword', 'name', 'profileImage', 'originalImage'])
    let additionalDetails = pages
    .map(page => Object.keys(page.form.value)
    .reduce((acc,key) => {
      if(!filteredKeys.has(key)) {
        acc[key] = page.form.value[key]
      }
      return acc
    },{}))
    .reduce((acc,curr) => ({...acc,...curr}),{})

    let attempt:firebase.auth.UserCredential
    try {
      attempt = await this.afAuth.createUserWithEmailAndPassword(email, password)
    } catch(e) {
      throw this.errorCode(e)
    }
    await attempt.user.updateProfile({
      displayName:name
    })
    this.afs.collection('users').doc(attempt.user.uid).set(additionalDetails, {merge:true})

    // Set autologin key on confirmation link
    const key = SimpleCrypto.generateRandom()
    const crypto = new SimpleCrypto(key)
    localStorage.setItem(this.AUTO_SIGN_IN_KEY,JSON.stringify({
      email,
      password:crypto.encrypt(password),
      restorePoint:'portal'
    }))
    // Get host this way since it is easier than checking if I need port and for http vs https
    let host = window.location.toString().match(/[^\/]+\/\/[^\/]+\//)[0]
    let url = new URL(host)
    url.searchParams.append('key',key)
    await attempt.user.sendEmailVerification({
      url: url.toString()
    })
    this.signOut()
  }

  public async verifyEmailLogIn(key:string) {
    const data = localStorage.getItem(this.AUTO_SIGN_IN_KEY)
    if(!data) {
      console.error('Could not auto log in. Missing local storage data')
      return
    }
    const crypto = new SimpleCrypto(key)
    const userData = JSON.parse(data)
    const decryptPassword = crypto.decrypt(userData.password)
    try{
      await this.signInEmail(userData.email, decryptPassword as string)
      localStorage.removeItem(this.AUTO_SIGN_IN_KEY)
    } catch(e) {
      console.error(e)
    }
  }

  private errorCode(error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'This email is already in use'
      case 'auth/invalid-email':
        return 'This email is not a valid email'
      case 'auth/operation-not-allowed':
        return 'This is not a valid way to register, contact the website admin'
      case 'auth/weak-password':
        return 'Choose a stronger password'
      case 'auth/wrong-password':
        return 'Wrong password'
      case 'auth/user-not-found':
        return 'This email isn\'t registered'
      case 'auth/user-disabled':
        return 'Your account has been disabled'
      default:
        return 'something went wrong'
    } 
  }

}