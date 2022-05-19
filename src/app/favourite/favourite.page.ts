import { Component, OnInit } from '@angular/core';
import {RouteSQLite} from '../models/route';
import { Observable } from 'rxjs';
import { SQLiteService } from '../services/SQLite.service';
import {FireAuthService} from "../services/firestore/fire-auth.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  favRoutes: RouteSQLite[];

  constructor(private router: Router, private db: SQLiteService, private fireAuth: FireAuthService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.checkUserStatus();
    this.db.fetchRoutes().subscribe(item => {
      this.favRoutes = item;
    })

    for(let i of this.favRoutes){
      console.log(i.route.routeName);
    }
  }

  async checkUserStatus(){
    await this.fireAuth.userDetails().forEach((user) => {
      if(!user){
        this.notLogged();
      }
    });
  }
  async notLogged(){
    const toast = await this.toastCtrl.create({
      message: 'You are not logged in!',
      duration: 3000
    });
    toast.present().then(() => {
      this.router.navigate(['/home']);
    });
  }
}


