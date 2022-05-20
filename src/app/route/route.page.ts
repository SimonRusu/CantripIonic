import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import {FirestoreService} from "../services/firestore/firestore.service";
import {FireAuthService} from "../services/firestore/fire-auth.service";
import { Observable } from 'rxjs';



export interface Route {
  routeId: number;
  routeName: string;
  numberOfPeople: number;
  price: number;
  thumbnailPath: string;
  dateAvailability: string[];
  publishDate: string;
  activities: number[];
  startTime: string
}

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})


export class RoutePage implements OnInit {

  routeParams = this.activatedRoute.snapshot.params["id"];
  routeId !: string;
  routeData !: any;
  user !: any;
  routeObs : Observable<any>;


  constructor(private activatedRoute: ActivatedRoute, private firestoreService: FirestoreService, private fireAuth: FireAuthService) {
  }

  ngOnInit(): void {
    
    this.getRoute();
    this.getUser();

  }

  async getRoute(){
    await this.firestoreService.getRoute(this.routeParams).subscribe(route => {
      this.routeData = route.payload.data();
      this.routeId = route.payload.id;
    })
    
  }

  async getUser(){
    await this.fireAuth.userDetails().forEach(user => {
      this.user = user;
      return;
    });
  }

}
