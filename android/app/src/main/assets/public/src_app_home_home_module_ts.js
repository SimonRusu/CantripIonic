"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6214:
/*!**************************************************!*\
  !*** ./src/app/card-home/card-home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardHomeComponent": () => (/* binding */ CardHomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _card_home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-home.component.html?ngResource */ 7201);
/* harmony import */ var _card_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-home.component.scss?ngResource */ 9859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CardHomeComponent = class CardHomeComponent {
    constructor() { }
    ngOnInit() { }
};
CardHomeComponent.ctorParameters = () => [];
CardHomeComponent.propDecorators = {
    numberOfPeople: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    thumbnailPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    routeName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    routeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CardHomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-card-home',
        template: _card_home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_card_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardHomeComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _card_home_card_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-home/card-home.component */ 6214);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _card_home_card_home_component__WEBPACK_IMPORTED_MODULE_2__.CardHomeComponent]
    })
], HomePageModule);



/***/ }),

/***/ 9859:
/*!***************************************************************!*\
  !*** ./src/app/card-home/card-home.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".route-info {\n  display: flex;\n  justify-content: space-evenly;\n  align-self: end;\n}\n\n.outstanding-routes-img {\n  margin-top: 0;\n  width: 90%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n\n.user-icon {\n  width: 1rem;\n  height: auto;\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiY2FyZC1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdXRlLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG4ub3V0c3RhbmRpbmctcm91dGVzLWltZyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyLWljb24ge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xufSJdfQ== */";

/***/ }),

/***/ 7201:
/*!***************************************************************!*\
  !*** ./src/app/card-home/card-home.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <!--[routerLink]=\"['/route-page', routeId]\"-->\n  <article class=\"cardCanTrip\">\n\n    <p>{{routeName}}</p>\n    <img class=\"outstanding-routes-img\" [src]=\"thumbnailPath\" alt=\"\">\n    <div class=\"route-info\">\n      <p> {{numberOfPeople}}<img class=\"user-icon\" src=\"assets/media/user-icon.png\"></p>\n      <p>{{price}}€</p>\n    </div>\n\n  </article>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map