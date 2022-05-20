import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { FireAuthService } from '../services/firestore/fire-auth.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.page.html',
  styleUrls: ['./header-login.page.scss'],
})
export class HeaderLoginPage implements OnInit {

  user: User;
  
  constructor(public fireAuth: FireAuthService) { }

  
  ngOnInit() {
    this.getUser();
  }

  async getUser(){
    this.fireAuth.userDetails().subscribe(user => {
      this.user = user;
    });
  }



}
