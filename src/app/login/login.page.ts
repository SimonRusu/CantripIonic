import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FireAuthService} from "../services/firestore/fire-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private fireAuth: FireAuthService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    });
  }

  async checkEmail() {
    this.fireAuth.checkEmailExists(this.loginForm.value.email).then((exists) => {
      if (exists) {
        this.navigateTo('password');
      } else {
        this.navigateTo('register');
      }
    });


  }

  navigateTo(route: string): void {
    this.router.navigate([route], { state: { email: this.loginForm.value.email } });
  }

}
