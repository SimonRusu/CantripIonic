import { Component, OnInit } from '@angular/core';
import { FireAuthService } from './services/firestore/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  logged !: boolean;
  constructor(private fireAuth: FireAuthService) { }
  ngOnInit(): void {
    this.checkLoggedIn();
  }
  async checkLoggedIn() {
    await this.fireAuth.userDetails().forEach((user) => {
      if (user) {
        this.logged = true;
      } else {
        this.logged = false;
      }
      return;
    });
  }
}