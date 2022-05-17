import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FirestoreService} from "../services/firestore/firestore.service";



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

  routeParams = this.route.snapshot.params['routeId'];
  routeIdFromRoute !: string;
  routeData : any;


  constructor(private route: ActivatedRoute, private firestoreService: FirestoreService) {
    
  }


  ngOnInit(): void {
    this.firestoreService.getRoute(this.routeParams).subscribe(route => {
      this.routeData = route.payload.data();
    })
  }




}
