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
  ) {
  }

  ngOnInit(): void {
    this.setFavouriteIcon();
  }

  async setFavouriteIcon(){
    console.log("se ejecuta");
    await this.db.getFavRoute(this.routeId).forEach(foundRoute => {
      if (foundRoute === "true") {
        console.log("favorita");
        $('#starIcon').text('grade');
      } else {
        $('#starIcon').text('star_border');
      }

      $('#starIcon').click(function(){
        $(this).text(($(this).text() === 'star_border') ? 'grade' : 'star_border');
      });
      return;
    });


  }

  saveFavourite() {
    console.log(this.userUuid);
    this.db.addFavSwitch(
      this.routeId,
      this.userUuid,
      JSON.stringify(this.routeData)
    );
  }
}
