import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastController } from "@ionic/angular";
import { FireAuthService } from '../services/firestore/fire-auth.service';
import { FileUpload } from '../models/FileUpload';
import { FileUploadService } from '../services/file-upload.service';

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
  fullname: string;
  selectedFile: File;
  fileUpload: FileUpload;

  constructor(public fireAuth: FireAuthService, private toastCtrl: ToastController, private uploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.profileData = this.fireAuth.userDetails();
    this.profileData.subscribe((user) => {
      this.fullname = user.displayName;
    });
  }

  onUpload(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {

      const file: File | null = this.selectedFile;

      if (file) {
        this.fileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.fileUpload);
        this.profileData.subscribe((user) => {
          console.log(user.photoURL);
        })

      }
    }
  }

  async openToast() {
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

  }


  editName(): void {
    this.profileData.subscribe(user => {
      user.updateProfile({
        displayName: this.updatedName
      });
      this.openToast();
      this.fullname = '';
    })
  }

  logout() {
    this.fireAuth.SignOut();
  }

}


