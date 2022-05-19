import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FireAuthService} from "../services/firestore/fire-auth.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  passwordForm: FormGroup;
  public email: string;

  constructor(private router: Router, private fireAuth: FireAuthService, private toastCtrl: ToastController) {
    const data = this.router.getCurrentNavigation()?.extras.state as { email: string };
    this.email = data.email;
  }

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
    })
  }

  checkPassword() {
    this.fireAuth.singIn(this.email, this.passwordForm.value.password).then((succesfully) => {
      if (succesfully) {
        this.navigateTo('home');
      } else {
        this.dontMatchToast();
      }
    }).catch(error => {
      this.dontMatchToast();
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
  async dontMatchToast(){
    const toast = await this.toastCtrl.create({
      message: 'Email and password do not match. Please, try again!',
      duration: 3000
    });
    toast.present();
  }

}
