import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore/firestore.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  predefinedRoutes: Observable<any>;
  constructor(private firestoreService: FirestoreService) {

  }

  ngOnInit(): void {
    this.getRoutes();

  }



  getRoutes() {
    this.predefinedRoutes = this.firestoreService.getRoutes()
  }


}


