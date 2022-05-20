import { Component, OnInit } from '@angular/core';
import {RouteSQLite} from '../models/route';
import { Observable } from 'rxjs';
import { SQLiteService } from '../services/SQLite.service';
import {FireAuthService} from "../services/firestore/fire-auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  favRoutes: RouteSQLite[];
  uid: string;

  constructor(private router: Router,
    private db: SQLiteService,
    private fireAuth: FireAuthService,
    private toastCtrl: ToastController,
    private route: ActivatedRoute
      ) { 

    
  }

  ngOnInit() {
    this.checkUserStatus();
    
    this.route.queryParams.subscribe(param =>{
      this.uid = param.prop});
    
    this.db.getFavRoutesByUser(this.uid)

    this.db.fetchRoutes().subscribe(item => {
      this.favRoutes = item;
    })
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


