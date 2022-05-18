"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_route_route_module_ts"],{

/***/ 2761:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component.html?ngResource */ 5838);
/* harmony import */ var _map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss?ngResource */ 782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let MapComponent = class MapComponent {
    constructor() { }
    ngOnInit() { }
};
MapComponent.ctorParameters = () => [];
MapComponent.propDecorators = {
    routeImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-map',
        template: _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



/***/ }),

/***/ 9833:
/*!************************************************************!*\
  !*** ./src/app/route-settings/route-settings.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteSettingsComponent": () => (/* binding */ RouteSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _route_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-settings.component.html?ngResource */ 3735);
/* harmony import */ var _route_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-settings.component.scss?ngResource */ 5993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_SQLite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/SQLite.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let RouteSettingsComponent = class RouteSettingsComponent {
    constructor(db, toast) {
        this.db = db;
        this.toast = toast;
    }
    ngOnInit() {
        this.db.dbState().subscribe((res) => {
            if (res) {
                this.db.fetchRoutes().subscribe(item => {
                });
            }
        });
    }
    storeData() {
        this.db.addFavRoute(this.routeId, this.routeData);
    }
};
RouteSettingsComponent.ctorParameters = () => [
    { type: _services_SQLite_service__WEBPACK_IMPORTED_MODULE_2__.SQLiteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
RouteSettingsComponent.propDecorators = {
    routeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    routeData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    numberOfPeople: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    startingTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
RouteSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-route-settings',
        template: _route_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_route_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RouteSettingsComponent);



/***/ }),

/***/ 847:
/*!***********************************************!*\
  !*** ./src/app/route/route-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutePageRoutingModule": () => (/* binding */ RoutePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.page */ 2825);




const routes = [
    {
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_0__.RoutePage
    }
];
let RoutePageRoutingModule = class RoutePageRoutingModule {
};
RoutePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoutePageRoutingModule);



/***/ }),

/***/ 4631:
/*!***************************************!*\
  !*** ./src/app/route/route.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutePageModule": () => (/* binding */ RoutePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _route_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-routing.module */ 847);
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.page */ 2825);
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timetable/timetable.component */ 3445);
/* harmony import */ var _route_settings_route_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-settings/route-settings.component */ 9833);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map/map.component */ 2761);










let RoutePageModule = class RoutePageModule {
};
RoutePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _route_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutePageRoutingModule
        ],
        declarations: [_route_page__WEBPACK_IMPORTED_MODULE_1__.RoutePage, _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_2__.TimetableComponent, _route_settings_route_settings_component__WEBPACK_IMPORTED_MODULE_3__.RouteSettingsComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent]
    })
], RoutePageModule);



/***/ }),

/***/ 2825:
/*!*************************************!*\
  !*** ./src/app/route/route.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutePage": () => (/* binding */ RoutePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _route_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.page.html?ngResource */ 439);
/* harmony import */ var _route_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.page.scss?ngResource */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ 5616);






let RoutePage = class RoutePage {
    constructor(route, firestoreService) {
        this.route = route;
        this.firestoreService = firestoreService;
        this.routeParams = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.firestoreService.getRoute(this.routeParams).subscribe(route => {
            this.routeData = route.payload.data();
            this.routeId = route.payload.id;
        });
    }
};
RoutePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService }
];
RoutePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-route',
        template: _route_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_route_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoutePage);



/***/ }),

/***/ 5830:
/*!********************************************!*\
  !*** ./src/app/services/SQLite.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLiteService": () => (/* binding */ SQLiteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 2820);





let SQLiteService = class SQLiteService {
    constructor(platform, sqlite) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.routeList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.isDbReady = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'favouriteRoutes.db',
                location: 'default'
            })
                .then((db) => {
                this.storage = db;
                this.createTableFavRoutes();
            });
        });
    }
    createTableFavRoutes() {
        var sql = 'create table IF NOT EXISTS favRoutes(id INTEGER PRIMARY KEY AUTOINCREMENT,routeId TEXT, route TEXT)';
        this.storage.executeSql(sql, [])
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
    fetchRoutes() {
        return this.routeList.asObservable();
    }
    getFavRoutes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.storage.executeSql('SELECT * FROM favRoutes', []).then(res => {
                let route = [];
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        console.log(res.rows.item(i).id);
                    }
                }
                this.routeList.next(route);
            });
        });
    }
    // Add
    addFavRoute(routeId, route) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let data = [routeId, route];
            console.log(data, "data");
            return this.storage.executeSql('INSERT INTO favRoutes (routeId, route) VALUES (?, ?)', data)
                .then(_ => {
                this.getFavRoutes();
            });
        });
    }
    // Delete
    deleteFavRoute(routeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.storage.executeSql('DELETE FROM favRoutes WHERE routeId = ?', [routeId])
                .then(_ => {
                this.getFavRoutes();
            });
        });
    }
};
SQLiteService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
SQLiteService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SQLiteService);



/***/ }),

/***/ 5616:
/*!*********************************************************!*\
  !*** ./src/app/services/firestore/firestore.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirestoreService": () => (/* binding */ FirestoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 1866);



//import { Route } from 'src/app/route-page/route-page.component';

let FirestoreService = class FirestoreService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    createRoute(data) {
        return this.firestore.collection('predefinedRoutes').add(data);
    }
    createContactForm(form) {
        return this.firestore.collection('contactForms').add(form);
    }
    getRoute(documentId) {
        return this.firestore.collection('predefinedRoutes').doc(documentId).snapshotChanges();
    }
    getActivitiesById(ids) {
        return this.firestore.collection('routeActivities', ref => ref.where((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.documentId)(), "in", ids)).valueChanges();
    }
    getActivity(documentId) {
        return this.firestore.collection('routeActivities').doc(documentId).snapshotChanges();
    }
    getRoutes() {
        return this.firestore.collection('predefinedRoutes').snapshotChanges();
    }
};
FirestoreService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore }
];
FirestoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FirestoreService);



/***/ }),

/***/ 3445:
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetableComponent": () => (/* binding */ TimetableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _timetable_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable.component.html?ngResource */ 9720);
/* harmony import */ var _timetable_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.component.scss?ngResource */ 1755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ 5616);





let TimetableComponent = class TimetableComponent {
    //  subject = new Subject<Array<any>>();
    // displayActivities = new Observable<Array<any>>();
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
        this.activities = [];
        this.displayActivities = [];
    }
    ngOnInit() {
        this.getActivitiesData();
    }
    getActivitiesData() {
        this.activities = this.routeActivities;
        let selectedTime = '';
        let startActivity = this.startActivityTime;
        for (let activity of this.activities) {
            let findHour = false;
            for (let actualTime of activity.timeAvailability) {
                console.log(actualTime, "actividad");
                console.log(startActivity, "startActivity");
                if (this.hourToInt(actualTime) >= this.hourToInt(startActivity)) {
                    selectedTime = actualTime;
                    startActivity = this.intToHour(this.hourToInt(actualTime) + activity.timeDuration);
                    findHour = true;
                    break;
                }
            }
            if (findHour) {
                this.displayActivities.push({
                    name: activity.name,
                    selectedTime: selectedTime,
                    finishActivity: startActivity
                });
                findHour = false;
            }
        }
    }
    hourToInt(hour) {
        return parseInt(hour.split(":")[0]);
    }
    intToHour(hourInt) {
        return hourInt + ":00";
    }
};
TimetableComponent.ctorParameters = () => [
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService }
];
TimetableComponent.propDecorators = {
    routeActivities: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    startActivityTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TimetableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timetable',
        template: _timetable_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_timetable_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimetableComponent);



/***/ }),

/***/ 1866:
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractUserDataWriter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.AbstractUserDataWriter),
/* harmony export */   "Bytes": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Bytes),
/* harmony export */   "CACHE_SIZE_UNLIMITED": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CACHE_SIZE_UNLIMITED),
/* harmony export */   "CollectionReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CollectionReference),
/* harmony export */   "DocumentReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentReference),
/* harmony export */   "DocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentSnapshot),
/* harmony export */   "FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldPath),
/* harmony export */   "FieldValue": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldValue),
/* harmony export */   "Firestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore),
/* harmony export */   "FirestoreError": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FirestoreError),
/* harmony export */   "GeoPoint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.GeoPoint),
/* harmony export */   "LoadBundleTask": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.LoadBundleTask),
/* harmony export */   "Query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Query),
/* harmony export */   "QueryConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryConstraint),
/* harmony export */   "QueryDocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryDocumentSnapshot),
/* harmony export */   "QuerySnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QuerySnapshot),
/* harmony export */   "SnapshotMetadata": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.SnapshotMetadata),
/* harmony export */   "Timestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Timestamp),
/* harmony export */   "Transaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Transaction),
/* harmony export */   "WriteBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.WriteBatch),
/* harmony export */   "_DatabaseId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DatabaseId),
/* harmony export */   "_DocumentKey": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DocumentKey),
/* harmony export */   "_EmptyAppCheckTokenProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAppCheckTokenProvider),
/* harmony export */   "_EmptyAuthCredentialsProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAuthCredentialsProvider),
/* harmony export */   "_FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._FieldPath),
/* harmony export */   "_cast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._cast),
/* harmony export */   "_debugAssert": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._debugAssert),
/* harmony export */   "_isBase64Available": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._isBase64Available),
/* harmony export */   "_logWarn": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._logWarn),
/* harmony export */   "_setIndexConfiguration": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._setIndexConfiguration),
/* harmony export */   "_validateIsNotUsedTogether": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._validateIsNotUsedTogether),
/* harmony export */   "addDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove),
/* harmony export */   "arrayUnion": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion),
/* harmony export */   "clearIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.clearIndexedDbPersistence),
/* harmony export */   "collection": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection),
/* harmony export */   "collectionGroup": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collectionGroup),
/* harmony export */   "connectFirestoreEmulator": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.connectFirestoreEmulator),
/* harmony export */   "deleteDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc),
/* harmony export */   "deleteField": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteField),
/* harmony export */   "disableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.disableNetwork),
/* harmony export */   "doc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc),
/* harmony export */   "documentId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.documentId),
/* harmony export */   "enableIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableIndexedDbPersistence),
/* harmony export */   "enableMultiTabIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableMultiTabIndexedDbPersistence),
/* harmony export */   "enableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableNetwork),
/* harmony export */   "endAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endAt),
/* harmony export */   "endBefore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endBefore),
/* harmony export */   "ensureFirestoreConfigured": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.ensureFirestoreConfigured),
/* harmony export */   "executeWrite": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.executeWrite),
/* harmony export */   "getDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc),
/* harmony export */   "getDocFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromCache),
/* harmony export */   "getDocFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromServer),
/* harmony export */   "getDocs": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs),
/* harmony export */   "getDocsFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromCache),
/* harmony export */   "getDocsFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromServer),
/* harmony export */   "getFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore),
/* harmony export */   "increment": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment),
/* harmony export */   "initializeFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.initializeFirestore),
/* harmony export */   "limit": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limit),
/* harmony export */   "limitToLast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limitToLast),
/* harmony export */   "loadBundle": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.loadBundle),
/* harmony export */   "namedQuery": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.namedQuery),
/* harmony export */   "onSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot),
/* harmony export */   "onSnapshotsInSync": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshotsInSync),
/* harmony export */   "orderBy": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.orderBy),
/* harmony export */   "query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query),
/* harmony export */   "queryEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.queryEqual),
/* harmony export */   "refEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.refEqual),
/* harmony export */   "runTransaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.runTransaction),
/* harmony export */   "serverTimestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp),
/* harmony export */   "setDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setLogLevel),
/* harmony export */   "snapshotEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.snapshotEqual),
/* harmony export */   "startAfter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAfter),
/* harmony export */   "startAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAt),
/* harmony export */   "terminate": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.terminate),
/* harmony export */   "updateDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc),
/* harmony export */   "waitForPendingWrites": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.waitForPendingWrites),
/* harmony export */   "where": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where),
/* harmony export */   "writeBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)
/* harmony export */ });
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ 7448);



/***/ }),

/***/ 782:
/*!***************************************************!*\
  !*** ./src/app/map/map.component.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "#map-image {\n  width: 40rem;\n  height: auto;\n  border-radius: 2rem;\n}\n\n@media (max-width: 967px) {\n  #map-image {\n    width: 30rem;\n  }\n}\n\n@media (max-width: 578px) {\n  #map-image {\n    width: 20rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksWUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFlBQUE7RUFBTjtBQUNGIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAtaW1hZ2V7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk2N3B4KXtcclxuICAgICNtYXAtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1NzhweCl7XHJcbiAgICAjbWFwLWltYWdle1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5993:
/*!*************************************************************************!*\
  !*** ./src/app/route-settings/route-settings.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".route-settings-container {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(4, fit-content(25%));\n  place-items: center;\n  margin-left: 2rem;\n}\n\n#people-selector-container {\n  display: flex;\n  place-items: center;\n  justify-content: center;\n  width: 10rem;\n  height: 3.5rem;\n}\n\n#favourite-container {\n  display: flex;\n  place-items: center;\n  justify-content: center;\n  width: 5rem;\n  height: 3.5rem;\n  margin-left: 2rem;\n  cursor: pointer;\n}\n\n#people-selector-container > p {\n  font-size: 1.5rem;\n  margin-top: 0.7rem;\n}\n\n#people-selector-container > img {\n  width: 1.5rem;\n  height: auto;\n}\n\n.route-page-arrow {\n  display: grid;\n  margin-left: 0.5rem;\n  border: none;\n  background-color: white;\n}\n\n#arrow-number-people-image-up {\n  transform: rotate(90deg);\n  width: 1rem;\n  height: auto;\n}\n\n#arrow-number-people-image-down {\n  transform: rotate(-90deg);\n  width: 1rem;\n  height: auto;\n}\n\n.datetime-selector-container {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  width: 13rem !important;\n  height: 3.5rem !important;\n  margin-left: 2rem;\n}\n\n.datetime-selector-container > p {\n  font-size: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n.datetime-selector-container > img {\n  width: 1.5rem;\n  height: auto;\n}\n\n@media (max-width: 967px) {\n  #route-template {\n    grid-template-columns: repeat(1, 100%);\n  }\n\n  #map-container {\n    grid-row: 1;\n    margin-bottom: 2em;\n  }\n\n  .cart-btn {\n    position: relative;\n    float: none;\n    justify-self: center;\n    margin-right: unset;\n    margin-top: 3rem;\n  }\n\n  .activity-duration {\n    width: 22vw;\n    padding-left: 5vw;\n  }\n\n  #timetable {\n    width: 40rem;\n  }\n\n  .route-settings-container {\n    margin-left: unset;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .input_overlay {\n    margin-top: 1rem;\n    width: 15rem !important;\n    margin-left: unset;\n  }\n\n  .people-selector-container {\n    justify-content: center !important;\n    place-items: center;\n  }\n\n  #favourite-container {\n    margin-left: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUVJO0lBQ0ksc0NBQUE7RUFDTjs7RUFHRTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQUFOOztFQUdFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBQU47O0VBR0U7SUFDSSxXQUFBO0lBQ0EsaUJBQUE7RUFBTjs7RUFJRTtJQUVJLFlBQUE7RUFGTjs7RUFLRTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFGTjs7RUFPRTtJQUNJLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQUpOOztFQU9FO0lBQ0ksa0NBQUE7SUFDQSxtQkFBQTtFQUpOOztFQU9FO0lBQ0ksa0JBQUE7RUFKTjtBQUNGIiwiZmlsZSI6InJvdXRlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdXRlLXNldHRpbmdzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgZml0LWNvbnRlbnQoMjUlKSk7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbiNwZW9wbGUtc2VsZWN0b3ItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMHJlbSA7XHJcbiAgICBoZWlnaHQ6IDMuNXJlbSA7XHJcbn1cclxuXHJcbiNmYXZvdXJpdGUtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtIDtcclxuICAgIGhlaWdodDogMy41cmVtIDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcGVvcGxlLXNlbGVjdG9yLWNvbnRhaW5lciA+IHB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcclxufVxyXG5cclxuI3Blb3BsZS1zZWxlY3Rvci1jb250YWluZXIgPiBpbWd7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm91dGUtcGFnZS1hcnJvd3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNhcnJvdy1udW1iZXItcGVvcGxlLWltYWdlLXVwe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuI2Fycm93LW51bWJlci1wZW9wbGUtaW1hZ2UtZG93bntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmRhdGV0aW1lLXNlbGVjdG9yLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTNyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMy41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmRhdGV0aW1lLXNlbGVjdG9yLWNvbnRhaW5lciA+IHB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6MC41cmVtO1xyXG59XHJcblxyXG4uZGF0ZXRpbWUtc2VsZWN0b3ItY29udGFpbmVyID4gaW1ne1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XHJcblxyXG4gICAgI3JvdXRlLXRlbXBsYXRle1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDEwMCUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICNtYXAtY29udGFpbmVye1xyXG4gICAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LWJ0bntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6bm9uZTtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2aXR5LWR1cmF0aW9ue1xyXG4gICAgICAgIHdpZHRoOiAyMnZ3O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDo1dnc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICN0aW1ldGFibGV7XHJcblxyXG4gICAgICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucm91dGUtc2V0dGluZ3MtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRfb3ZlcmxheXtcclxuICAgICAgICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgICAgICAgd2lkdGg6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6dW5zZXRcclxuICAgIH1cclxuXHJcbiAgICAucGVvcGxlLXNlbGVjdG9yLWNvbnRhaW5lcntcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgI2Zhdm91cml0ZS1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 7473:
/*!**************************************************!*\
  !*** ./src/app/route/route.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".cart-btn {\n  float: right;\n  border: none;\n  border-radius: 50%;\n  width: 6rem;\n  height: 6rem;\n  background-color: #00B4D8;\n  margin-top: 1rem;\n  justify-self: center;\n  align-self: center;\n}\n\n#cart-img {\n  width: 3rem;\n  height: auto;\n}\n\n.route-container {\n  display: grid;\n  grid-template-columns: repeat(2, 45%);\n  place-items: center;\n  margin-top: 3rem;\n  position: relative;\n  margin-bottom: 10rem;\n  padding-left: 2.5rem;\n}\n\n.map-button-container {\n  display: grid;\n  grid-template-columns: repeat(1, 100%);\n}\n\napp-map {\n  padding-left: 1rem;\n}\n\n@media (max-width: 1339px) {\n  .route-container {\n    padding-left: unset;\n    grid-template-columns: repeat(1, 100%);\n  }\n\n  .map-button-container {\n    grid-row: 1;\n    margin-bottom: 2em;\n    padding-left: unset;\n  }\n\n  .cart-btn {\n    position: relative;\n    float: none;\n    justify-self: center;\n    margin-right: unset;\n    margin-top: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLHNDQUFBO0VBQU47O0VBRUU7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUNOOztFQUVFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJyb3V0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcnQtYnRue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNnJlbTtcclxuICAgIGhlaWdodDogNnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEI0RDg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjYXJ0LWltZ3tcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnJvdXRlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0NSUpO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG59XHJcblxyXG4ubWFwLWJ1dHRvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTAwJSk7XHJcbn1cclxuYXBwLW1hcHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMzlweCkge1xyXG4gICAgLnJvdXRlLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDEwMCUpO1xyXG4gICAgfVxyXG4gICAgLm1hcC1idXR0b24tY29udGFpbmVye1xyXG4gICAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtYnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1755:
/*!***************************************************************!*\
  !*** ./src/app/timetable/timetable.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "#timetable {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  height: 30rem;\n  width: 30rem;\n  border-radius: 2rem;\n  text-align: center;\n  padding-top: 2rem;\n  overflow: scroll;\n  overflow-x: hidden;\n  margin-top: 2rem;\n  margin-left: 2rem;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n\n::-webkit-scrollbar {\n  display: none;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n.exact-hour-container {\n  display: grid;\n}\n\n.exact-hour {\n  background-color: #ffcb69;\n  border-radius: 1rem;\n  width: 5rem;\n  padding: 0.8rem;\n  justify-self: center;\n  text-align: center;\n}\n\n.activity-container {\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  place-items: center;\n  margin: 2rem 0;\n}\n\n.activity-duration {\n  width: 17vw;\n  padding-left: 3vw;\n}\n\n.delete-btn {\n  border: none;\n  background-color: white;\n}\n\n@media (max-width: 575px) {\n  #timetable {\n    width: 20rem;\n    margin-left: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBLGdEQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7QUFHNUI7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBQ0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoidGltZXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpbWV0YWJsZXtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIFxyXG59XHJcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxuICB9XHJcblxyXG4uZXhhY3QtaG91ci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uZXhhY3QtaG91cntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNiNjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2aXR5LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA2MCUgMjAlO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG59XHJcblxyXG4uYWN0aXZpdHktZHVyYXRpb257XHJcbiAgICB3aWR0aDogMTd2dztcclxuICAgIHBhZGRpbmctbGVmdDozdnc7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAjdGltZXRhYmxle1xyXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 5838:
/*!***************************************************!*\
  !*** ./src/app/map/map.component.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<section id=\"map-container\">\r\n  <img [src]=\"routeImage\" id=\"map-image\">\r\n</section>";

/***/ }),

/***/ 3735:
/*!*************************************************************************!*\
  !*** ./src/app/route-settings/route-settings.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"route-settings-container\">\r\n  <div class=\"input_overlay\" id=\"people-selector-container\"> \r\n      <p>{{numberOfPeople}}</p><img class=\"user-icon\" src=\"assets/media/user-icon.png\"/> \r\n      <div id=\"arrows-selector\"> \r\n          <button class=\"route-page-arrow\"><img src=\"assets/media/pagination/ios-arrow-left.svg\" id=\"arrow-number-people-image-up\"/></button> \r\n          <button class=\"route-page-arrow\"><img src=\"assets/media/pagination/ios-arrow-left.svg\" id=\"arrow-number-people-image-down\"/></button> \r\n      </div> \r\n  </div>     \r\n  <div class=\"input_overlay datetime-selector-container\"> \r\n      <img class=\"user-icon\" src=\"assets/media/calendar-icon.png\"><p>{{date}}</p> \r\n  </div> \r\n  <div class=\"input_overlay datetime-selector-container \"> \r\n      <img class=\"user-icon\" src=\"assets/media/clock-icon.png\"><p>{{startingTime}}</p> \r\n  </div> \r\n\r\n  <div class=\"input_overlay\" id=\"favourite-container\"> \r\n    <span (click)=\"storeData();\" class=\"material-icons md-36\">star_border</span>\r\n</div>\r\n</section>\r\n";

/***/ }),

/***/ 439:
/*!**************************************************!*\
  !*** ./src/app/route/route.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "  <div *ngIf=\"routeData; else empty\">\r\n    <h1 class=\"text-center\">{{routeData.routeName}}</h1>\r\n    <app-route-settings [routeId]=\"routeId\" [routeData]=\"routeData\" [numberOfPeople]=\"routeData.numberOfPeople\" [date]=\"routeData.dateAvailability[0]\" [startingTime]=\"routeData.startTime\"></app-route-settings>\r\n    <div class=\"route-container\">\r\n      <app-timetable [routeActivities]=\"routeData.activities\" [startActivityTime]=\"routeData.startTime\"></app-timetable>\r\n    <div class=\"map-button-container\">\r\n      <app-map [routeImage]=\"routeData.thumbnailPath\"></app-map>\r\n      <button class=\"cart-btn\"><img src=\"../assets/media/shoppingcart-icon.png\" id=\"cart-img\"></button>\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #empty>\r\n<h1 class=\"text-center\">Route Name</h1>\r\n    <app-route-settings [numberOfPeople]=\"0\" [date]=\"'19/04/2022'\" [startingTime]=\"'10:00'\"></app-route-settings>\r\n    <div class=\"route-container\">\r\n      <app-timetable [routeActivities]=\"[]\" [startActivityTime]=\"'10:00'\"></app-timetable>\r\n      <div class=\"map-button-container\">\r\n        <app-map></app-map>\r\n        <button class=\"cart-btn\"><img src=\"../assets/media/shoppingcart-icon.png\" id=\"cart-img\"></button>\r\n      </div>\r\n    </div>\r\n  \r\n\r\n\r\n<div class=\"w-100 footer-margin\"></div>";

/***/ }),

/***/ 9720:
/*!***************************************************************!*\
  !*** ./src/app/timetable/timetable.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<section id=\"timetable\">\r\n  <div *ngFor=\"let activity of displayActivities\">\r\n          <div class=\"exact-hour-container\">\r\n              <p class=\"exact-hour\" >{{activity.selectedTime}}</p>\r\n          </div>\r\n\r\n         <div class=\"activity-container\">\r\n              <p class=\"activity-duration\">{{activity.selectedTime}}-{{activity.finishActivity}}</p><p>{{activity.name}}</p><button class=\"delete-btn\">X</button>\r\n          </div>\r\n  </div>\r\n</section> ";

/***/ })

}]);
//# sourceMappingURL=src_app_route_route_module_ts.js.map