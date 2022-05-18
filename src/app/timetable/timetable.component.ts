import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { FirestoreService } from '../services/firestore/firestore.service';
import {
  query,
  collection,
  where,
  documentId,
  getDocs
} from "firebase/firestore";


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  @Input() routeActivities : any;
  @Input() startActivityTime : string;
  
  activities :Array<any> = [];
  displayActivities : Array<any> =[];

  constructor(private firestoreService: FirestoreService) {
  }
    ngOnInit(): void {
      this.getActivitiesData();
    }

    getActivitiesData(): void{
        this.activities = this.routeActivities;
        let selectedTime = '';
        let startActivity = this.startActivityTime;

        for(let activity of this.activities){
          let findHour = false;
          
          for(let actualTime of activity.timeAvailability){
            if(this.hourToInt(actualTime) >= this.hourToInt(startActivity)){
              selectedTime = actualTime;
              startActivity = this.intToHour(this.hourToInt(actualTime)+activity.timeDuration);
              findHour = true;
              break;
            }
          }

          if(findHour){
            this.displayActivities.push(
              {
                name: activity.name,
                selectedTime: selectedTime,
                finishActivity: startActivity
              });
              findHour = false;
          }
        }
    }


    hourToInt(hour: string): number {
      return parseInt(hour.split(":")[0]);
    }

    intToHour(hourInt: number): string {
      return hourInt + ":00";
    }
}
