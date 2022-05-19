import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//import { ToastController } from "@ionic/angular";
import { FireAuthService } from '../services/firestore/fire-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileData = new Observable<any>();
  predefinedData = new Observable<any>();
  subject = new Subject<any>();
  updatedName: string;


  constructor(public fireAuth: FireAuthService/*, private toastCtrl: ToastController*/) {
  }

  ngOnInit(): void {
    this.profileData = this.fireAuth.userDetails();
    this.profileData.subscribe(user => {
      user.updateProfile({
        displayName: "Maria"
      });
      //this.openToast();
    })
  }

  /*openImageDialog(): void {
    const dialogRef = this.dialog.open(ImageSelectorModalComponent,
       {
         panelClass: "image-selector-dialog-container",
       });
  }*/

  /*async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Changed name successfully!',
      duration: 3000
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastCtrl.create({
      message: 'There was an error changing the name. Try it again later.',
      duration: 3000
    });
    toast.present();

  }*/


  editName(): void {
    this.profileData.subscribe(user => {
      user.updateProfile({
        displayName: this.updatedName
      });
      //this.openToast();
    })

  }

  logout() {
    this.fireAuth.SignOut();
  }

}


