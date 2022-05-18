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

  constructor(
    private db: SQLiteService,
  ) {}

  ngOnInit(): void {
    $("span").click(function(){
      $(this).text(($(this).text() == 'star_border') ? 'grade' : 'star_border');    
    }); 
    
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchRoutes().subscribe(item => {
          console.log(item);
        })
      }
    });
  }

  saveFavourite() {
    this.db.addFavSwitch(
      this.routeId,
      "uuid",
      JSON.stringify(this.routeData)
    )                                   
  }
}
