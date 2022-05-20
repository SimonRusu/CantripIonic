import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Route, RouteSQLite } from '../models/route';
import { JsonPipe } from '@angular/common';
import { FireAuthService } from './firestore/fire-auth.service';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private storage: SQLiteObject;
  routeList = new BehaviorSubject([]);
  foundRoute = new BehaviorSubject('');
  user : User;

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private fireAuth: FireAuthService

  ) {

    this.getUser();

    
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'favouriteRoutes.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.createTableFavRoutes();
      })
    });
  }

  

  createTableFavRoutes(): void{
    var sql = 'create table IF NOT EXISTS favRoutes(id INTEGER PRIMARY KEY AUTOINCREMENT, routeId TEXT, uuid TEXT, route TEXT)';
    this.storage.executeSql(sql,[])
      .then(() => {
        console.log("Tabla de favoritos creada satisfactoriamente.");
      })
      .catch(e => {
        console.log(e);
      });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchRoutes(): Observable<RouteSQLite[]> {
    return this.routeList.asObservable();
  }

  async getFavRoutes(){
    return this.storage.executeSql('SELECT * FROM favRoutes', []).then(res => {
      let route: RouteSQLite[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          route.push({
            routeId: res.rows.item(i).routeId,
            uuid: "uuid",
            route: JSON.parse(res.rows.item(i).route)
          })

        }
      }
      this.routeList.next(route);
      this.routeList.subscribe(obj => console.log(obj)).unsubscribe();
    });
  }

   getFavRoute(routeId: string): Observable<string>{
    this.foundRoute = new BehaviorSubject('');
    this.storage.executeSql('SELECT * FROM favRoutes where routeId = ? and uuid = ?', [routeId, this.user.uid]).then(res => {
      if (res.rows.length > 0) {
        this.foundRoute.next('true');
      }
      else{
        this.foundRoute.next('false');
      }
    });

    return this.foundRoute.asObservable();
  }

  async getFavRoutesByUser(uuid: string){
    return this.storage.executeSql('SELECT * FROM favRoutes where uuid = ?', [uuid]).then(res => {
      let route: RouteSQLite[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          route.push({
            routeId: res.rows.item(i).routeId,
            uuid: "uuid",
            route: JSON.parse(res.rows.item(i).route)
          })
        }
      }
      this.routeList.next(route);
    });
  }

  // Add
  async addFavRoute(routeId:string, uuid:string, route:string) {
    let data = [routeId, uuid, route];

    return this.storage.executeSql('INSERT INTO favRoutes (routeId, uuid, route) VALUES (?, ?, ?)', data)
    .then(_ => {
      this.getFavRoutesByUser(this.user.uid);
    });
  }

  // Delete
  async deleteFavRoute(routeId:string) {
    console.log(this.user.uid, "DELETEADO");
    return this.storage.executeSql('DELETE FROM favRoutes WHERE routeId = ? and uuid = ?', [routeId,this.user.uid])
    .then(_ => {

      this.getFavRoutesByUser(this.user.uid);
    });
  }

  //Add or delete
  async addFavSwitch(routeId:string, uuid:string, route:string){
    this.getFavRoute(routeId).subscribe(exists =>{
      if(exists == 'false'){
        this.addFavRoute(routeId, uuid, route);
      }
      else{
        this.deleteFavRoute(routeId);
      }
    })
  }

  async getUser(){
    await this.fireAuth.userDetails().forEach(user => {
      this.user = user;
      return;
    });
  }
}

