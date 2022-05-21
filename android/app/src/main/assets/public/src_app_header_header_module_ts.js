"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_header_header_module_ts"],{

/***/ 1174:
/*!*************************************************!*\
  !*** ./src/app/header/header-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPageRoutingModule": () => (/* binding */ HeaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.page */ 2267);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.page */ 6825);
/* harmony import */ var _header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.page */ 7281);






const routes = [
    {
        path: '',
        component: _header_page__WEBPACK_IMPORTED_MODULE_2__.HeaderPage
    },
    {
        path: 'home',
        component: _home_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'login',
        component: _login_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage
    }
];
let HeaderPageRoutingModule = class HeaderPageRoutingModule {
};
HeaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], HeaderPageRoutingModule);



/***/ }),

/***/ 677:
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPageModule": () => (/* binding */ HeaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-routing.module */ 1174);






let HeaderPageModule = class HeaderPageModule {
};
HeaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderPageRoutingModule
        ],
        declarations: []
    })
], HeaderPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_header_header_module_ts.js.map