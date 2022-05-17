import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FireAuthService} from "../services/firestore/fire-auth.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  public email: string;

  constructor(private router: Router, private fireAuth: FireAuthService, private toastCtrl: ToastController) {
    const data = this.router.getCurrentNavigation()?.extras.state as {email: string};
    this.email = data.email;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      password: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.:,#_()\/]).{8,}$')]),

      confirmPassword: new FormControl('', [Validators.required])
    }, {validators:this.checkPasswords});

  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  registerUser(): void{
    console.log(this.email);
    console.log(this.registerForm.value.password);
    this.fireAuth.singUp(this.email, this.registerForm.value.password).then(() => {
      this.openToast();

    }).catch((error) => {
      this.errorToast();

    });

  }

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Thanks for registering!',
      duration: 3000
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastCtrl.create({
      message: 'There was an error in the registration process!',
      duration: 3000
    });
    toast.present();

  }

}
