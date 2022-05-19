import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SQLiteService } from '../services/SQLite.service';

@Component({
  selector: 'app-card-favourite',
  templateUrl: './card-favourite.component.html',
  styleUrls: ['./card-favourite.component.scss'],
})

export class CardFavouriteComponent implements OnInit {
  @Input() numberOfPeople !: number;
  @Input() price !: number;
  @Input() thumbnailPath !: string;
  @Input() routeName !: string;
  @Input() routeId !: string;

  constructor(public db: SQLiteService, public toast: ToastController) { }

  ngOnInit() {}


  deleteFavourite(){
    this.db.deleteFavRoute(this.routeId).then(async(res) => {
      let toast = await this.toast.create({
        message: 'Ruta eliminada de favoritos',
        duration: 1000
      });
      toast.present();      
    })
  }

}

