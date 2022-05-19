import { Component, OnInit } from '@angular/core';
import { RouteSQLite } from '../models/route';
import { Observable } from 'rxjs';
import { SQLiteService } from '../services/SQLite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  favRoutes: RouteSQLite[];

  constructor(private db: SQLiteService) { }

  ngOnInit() {
    
    this.db.fetchRoutes().subscribe(item => {
      this.favRoutes = item;
    })

    for(let i of this.favRoutes){
      console.log(i.route.routeName);
    }
  }

}
