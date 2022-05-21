"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_header-login_header-login_module_ts"],{

/***/ 6063:
/*!*************************************************************!*\
  !*** ./src/app/header-login/header-login-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLoginPageRoutingModule": () => (/* binding */ HeaderLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.page */ 2267);
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/profile.page */ 2919);
/* harmony import */ var _favourite_favourite_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favourite/favourite.page */ 1471);
/* harmony import */ var _header_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-login.page */ 2360);







const routes = [
    {
        path: '',
        component: _header_login_page__WEBPACK_IMPORTED_MODULE_3__.HeaderLoginPage
    },
    {
        path: 'profile',
        component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage
    },
    {
        path: 'home',
        component: _home_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'favoritos',
        component: _favourite_favourite_page__WEBPACK_IMPORTED_MODULE_2__.FavouritePage
    }
];
let HeaderLoginPageRoutingModule = class HeaderLoginPageRoutingModule {
};
HeaderLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], HeaderLoginPageRoutingModule);



/***/ }),

/***/ 4013:
/*!*****************************************************!*\
  !*** ./src/app/header-login/header-login.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLoginPageModule": () => (/* binding */ HeaderLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _header_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-login-routing.module */ 6063);
/* harmony import */ var _header_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-login.page */ 2360);







let HeaderLoginPageModule = class HeaderLoginPageModule {
};
HeaderLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _header_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderLoginPageRoutingModule
        ],
        declarations: [_header_login_page__WEBPACK_IMPORTED_MODULE_1__.HeaderLoginPage]
    })
], HeaderLoginPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_header-login_header-login_module_ts.js.map