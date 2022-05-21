"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_favourite_favourite_module_ts"],{

/***/ 8124:
/*!************************************************************!*\
  !*** ./src/app/card-favourite/card-favourite.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardFavouriteComponent": () => (/* binding */ CardFavouriteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _card_favourite_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-favourite.component.html?ngResource */ 7032);
/* harmony import */ var _card_favourite_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-favourite.component.scss?ngResource */ 2982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_SQLite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/SQLite.service */ 5830);






let CardFavouriteComponent = class CardFavouriteComponent {
    constructor(db, toast) {
        this.db = db;
        this.toast = toast;
    }
    ngOnInit() { }
    deleteFavourite() {
        this.db.deleteFavRoute(this.routeId).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toast.create({
                message: 'Ruta eliminada de favoritos',
                duration: 1000
            });
            toast.present();
        }));
    }
};
CardFavouriteComponent.ctorParameters = () => [
    { type: _services_SQLite_service__WEBPACK_IMPORTED_MODULE_2__.SQLiteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
CardFavouriteComponent.propDecorators = {
    numberOfPeople: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    thumbnailPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    routeName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    routeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CardFavouriteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-card-favourite',
        template: _card_favourite_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_card_favourite_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardFavouriteComponent);



/***/ }),

/***/ 6077:
/*!*******************************************************!*\
  !*** ./src/app/favourite/favourite-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePageRoutingModule": () => (/* binding */ FavouritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite.page */ 1471);




const routes = [
    {
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_0__.FavouritePage
    }
];
let FavouritePageRoutingModule = class FavouritePageRoutingModule {
};
FavouritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouritePageRoutingModule);



/***/ }),

/***/ 1814:
/*!***********************************************!*\
  !*** ./src/app/favourite/favourite.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePageModule": () => (/* binding */ FavouritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite-routing.module */ 6077);
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite.page */ 1471);
/* harmony import */ var _card_favourite_card_favourite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-favourite/card-favourite.component */ 8124);








let FavouritePageModule = class FavouritePageModule {
};
FavouritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favourite_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritePageRoutingModule
        ],
        declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_1__.FavouritePage, _card_favourite_card_favourite_component__WEBPACK_IMPORTED_MODULE_2__.CardFavouriteComponent]
    })
], FavouritePageModule);



/***/ }),

/***/ 2982:
/*!*************************************************************************!*\
  !*** ./src/app/card-favourite/card-favourite.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".route-info {\n  display: flex;\n  justify-content: space-evenly;\n  align-self: end;\n}\n\n.outstanding-routes-img {\n  margin-top: 0;\n  width: 90%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n\n.user-icon {\n  width: 1rem;\n  height: auto;\n  margin-left: 0.5rem;\n}\n\n#favourite-container {\n  display: flex;\n  place-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  margin-left: 2rem;\n  margin-bottom: 1rem;\n}\n\n.headerContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headerContainer > p {\n  margin-left: 3rem;\n}\n\n#starIcon {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZmF2b3VyaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESiIsImZpbGUiOiJjYXJkLWZhdm91cml0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3V0ZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLm91dHN0YW5kaW5nLXJvdXRlcy1pbWcge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlci1pY29uIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuI2Zhdm91cml0ZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzcmVtIDtcbiAgICBoZWlnaHQ6IDNyZW0gO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cblxuXG4uaGVhZGVyQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlckNvbnRhaW5lcj5we1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuXG4jc3Rhckljb257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";

/***/ }),

/***/ 7032:
/*!*************************************************************************!*\
  !*** ./src/app/card-favourite/card-favourite.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <article class=\"cardCanTrip\">\n\n    <div class=\"headerContainer\">\n      <p>{{routeName}}</p>\n      <div class=\"input_overlay\" id=\"favourite-container\"> \n        <span (click)=\"deleteFavourite();\" class=\"material-icons md-36\" id=\"starIcon\">grade</span>\n      </div>\n    </div>\n    \n    <img [routerLink]=\"['/route/', routeId]\" routerLinkActive=\"active\" class=\"outstanding-routes-img\" [src]=\"thumbnailPath\" alt=\"\">\n    <div class=\"route-info\">\n      <p> {{numberOfPeople}}<img class=\"user-icon\" src=\"assets/media/user-icon.png\"></p>\n      <p>{{price}}</p>\n    </div>\n\n  </article>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_favourite_favourite_module_ts.js.map