import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { updateProfile } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
  }

  async singUp(email: string, password: string, fullName: string,) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(resp => {
      resp.user.updateProfile({
        displayName: fullName,
      });
    })
      .catch(error => {
        console.log("Something went wrong in register: ", error.message);

      })

  }

  async singIn(email: string, password: string): Promise<boolean> {
    let succesfully !: boolean;
    await this.angularFireAuth.signInWithEmailAndPassword(email, password).then(() => {
      succesfully = true;
    })
      .catch((error) => {
        console.log("Something went wrong in login: ", error.message);
        succesfully = false;
      })
    return succesfully;
  }

  SignOut() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }

  async checkEmailExists(email: string): Promise<boolean> {
    let exists !: boolean;
    await this.angularFireAuth.fetchSignInMethodsForEmail(email).then(user => {
      if (user.length > 0) {
        exists = true;
      } else {
        exists = false;
      }
    })
    return exists;
  }

  async checkLoggedIn(): Promise<boolean> {
    let logged !: boolean;
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        console.log('here is your user data');
        localStorage.setItem('user', JSON.stringify(userResponse));

        console.log(userResponse);
        logged = true;
      } else {
        localStorage.setItem('user', "false");
        logged = false;
      }
    });
    return logged;
  }
  userDetails() {
    return this.angularFireAuth.user;
  }

}
