import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
  updatedEmail: string;
  updatedName: string;

  constructor(public fireAuth: FireAuthService) {
  }

  ngOnInit(): void {
    this.profileData = this.fireAuth.userDetails();
  }

  openImageDialog(): void {
    /* const dialogRef = this.dialog.open(ImageSelectorModalComponent,
       {
         panelClass: "image-selector-dialog-container",
       });*/
  }

  openSuccessDialog(): void {
    /*this.dialog.open(AlertModalComponent,
      {
        data: {
          dialogTitle: "Your name has been changed",
          dialogText: "you can log in now with " + this.updatedEmail,
          dialogIcon: "task_alt",
          dialogIconColor: "green"
        }
      });*/
  }

  openDismissDialog(error: string): void {
    /*this.dialog.open(AlertModalComponent,
       {
         data: {
           dialogTitle: "The operation could not be satisfied",
           dialogText: error,
           dialogIcon: "cancel",
           dialogIconColor: "red"
         }
       });*/
  }


  editName(): void {
    this.fireAuth.userDetails();
    /*this.fireAuth.getCurrentUser().subscribe(user => {
      user.updateEmail(this.updatedEmail).then(() => {
        this.openSuccessDialog();
      })
        .catch((err: any) => {
          this.openDismissDialog(err);
        }

        )
    })*/
  }

  logout() {
    this.fireAuth.SignOut();
  }

}


