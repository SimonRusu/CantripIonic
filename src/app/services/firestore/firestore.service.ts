import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
//import { Route } from 'src/app/route-page/route-page.component';
import {
  query,
  collection,
  where,
  documentId,
  getDocs
} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {



  constructor(private firestore: AngularFirestore) { }


  public createRoute(data: {
    routeName: string,
    activites: { activityId: number },
    dateAvailability: { date: string },
    numberOfPeople: number,
    price: number,
    publishDate: string,
    startTime: string
  }) {
    return this.firestore.collection('predefinedRoutes').add(data);
  }

  public createContactForm(form: {
    email: string,
    firstName: string,
    lastName: string,
    messageText: string,
    phoneNumber: number | null,
  }) {
    return this.firestore.collection('contactForms').add(form);
  }


  public getRoute(documentId: string) {
    return this.firestore.collection('predefinedRoutes').doc(documentId).snapshotChanges();
  }

  public getActivitiesById(ids: []) {
    return this.firestore.collection('routeActivities', ref => ref.where(documentId(), "in", ids)).valueChanges();
  }

  public getActivity(documentId: string) {
    return this.firestore.collection('routeActivities').doc(documentId).snapshotChanges();
  }

  public getRoutes() {
    return this.firestore.collection('predefinedRoutes').snapshotChanges();

  }

}