import { Component, Input, OnInit } from '@angular/core';
import { SQLiteService } from '../services/SQLite.service';
import { ToastController } from '@ionic/angular';
import * as $ from 'jquery'

@Component({
  selector: 'app-route-settings',
  templateUrl: './route-settings.component.html',
  styleUrls: ['./route-settings.component.scss']
})
export class RouteSettingsComponent implements OnInit {
  @Input() routeId !: string;
  @Input() routeData !: any;
  @Input() numberOfPeople !: number;
  @Input() date !: string;
  @Input() startingTime !: string;
  @Input() userUuid !: string;

  star !: string;

  constructor(
    private db: SQLiteService,
    private toast: ToastController
  ) {
  }

  ngOnInit(): void {
    this.setFavouriteIcon();
  }

  async setFavouriteIcon(){
    console.log("se ejecuta");
    await this.db.getFavRoute(this.routeId).forEach(foundRoute => {
      if (foundRoute === "true") {
        $('#starIcon').text('grade'); 
      } else {
        $('#starIcon').text('star_border');
      }

      $('#starIcon').click(function(){
        $(this).text(($(this).text() === 'star_border') ? 'grade' : 'star_border');
      });


    });


  }

  saveFavourite() {
    this.db.addFavSwitch(
      this.routeId,
      this.userUuid,
      JSON.stringify(this.routeData)
    );

    if($('#starIcon').text() === 'star_border'){
      this.showToast("Added route to favourites"); 
    }
    else{
      this.showToast("Deleted route from favourites"); 
    }
  }

  async showToast(message: string){
    let toast = await this.toast.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }
}
