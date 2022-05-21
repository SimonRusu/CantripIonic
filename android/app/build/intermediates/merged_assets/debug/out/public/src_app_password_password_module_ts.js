"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_password_password_module_ts"],{

/***/ 4074:
/*!*****************************************************!*\
  !*** ./src/app/password/password-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageRoutingModule": () => (/* binding */ PasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.page */ 1769);




const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_0__.PasswordPage
    }
];
let PasswordPageRoutingModule = class PasswordPageRoutingModule {
};
PasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordPageRoutingModule);



/***/ }),

/***/ 2896:
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageModule": () => (/* binding */ PasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-routing.module */ 4074);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page */ 1769);







let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_1__.PasswordPage]
    })
], PasswordPageModule);



/***/ }),

/***/ 1769:
/*!*******************************************!*\
  !*** ./src/app/password/password.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.page.html?ngResource */ 202);
/* harmony import */ var _password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page.scss?ngResource */ 8880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_firestore_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/fire-auth.service */ 6055);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let PasswordPage = class PasswordPage {
    constructor(router, fireAuth, toastCtrl) {
        var _a;
        this.router = router;
        this.fireAuth = fireAuth;
        this.toastCtrl = toastCtrl;
        const data = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        this.email = data.email;
    }
    ngOnInit() {
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    checkPassword() {
        this.fireAuth.singIn(this.email, this.passwordForm.value.password).then((succesfully) => {
            if (succesfully) {
                this.navigateTo('home');
            }
            else {
                this.dontMatchToast();
            }
        }).catch(error => {
            this.dontMatchToast();
        });
    }
    navigateTo(route) {
        this.router.navigate([route]).then(() => {
            window.location.reload();
        });
    }
    dontMatchToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Email and password do not match. Please, try again!',
                duration: 3000
            });
            toast.present();
        });
    }
};
PasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_firestore_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__.FireAuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
PasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-password',
        template: _password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordPage);



/***/ }),

/***/ 8880:
/*!********************************************************!*\
  !*** ./src/app/password/password.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".formContainer > div > ion-button {\n  width: 10rem;\n  height: 3rem;\n}\n\nform > .input_overlay {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoicGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1Db250YWluZXIgPiBkaXYgPiBpb24tYnV0dG9ue1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogM3JlbTtcbn1cblxuZm9ybSA+IC5pbnB1dF9vdmVybGF5e1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 202:
/*!********************************************************!*\
  !*** ./src/app/password/password.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"col-md-3 col-sm-6  mx-auto\">\n  <h1 class=\"text-center mt-5 mb-5\">Login into your account!</h1>\n\n\n  <div class=\"text-center h6 mb-3\">Welcome back: {{email}}</div>\n  <form class=\"formContainer\" [formGroup]=\"passwordForm\"  novalidate (ngSubmit)=\"checkPassword()\">\n\n    <ion-input type=\"password\" name=\"passwordLogin\" class=\"input_overlay validation-text\" placeholder=\"enter your password\" formControlName=\"password\"\n           [class.valid]=\"passwordForm.get('password')?.valid &&\n        (passwordForm.get('password')?.dirty || passwordForm.get('password')?.touched)\"\n           [class.invalid]=\"passwordForm.get('password')?.invalid &&\n        (passwordForm.get('password')?.dirty || passwordForm.get('password')?.touched)\"></ion-input>\n\n    <div class=\"\" *ngIf=\"passwordForm.get('password')?.invalid &&\n            passwordForm.get('password')?.errors &&\n            (passwordForm.get('password')?.dirty || passwordForm.get('password')?.touched)\">\n\n      <small class=\"text-danger\"\n             *ngIf=\"passwordForm.get('password')?.hasError('required')\">\n        Enter a password\n      </small>\n    </div>\n\n    <div class=\"w-100 mb-4\"></div>\n\n    <div class=\"text-center\">\n      <ion-button type=\"submit\" class=\"btn btn-primary\" value=\"Continue\"[disabled]=\"!(passwordForm.valid && passwordForm.dirty)\" disabled>Login</ion-button>\n    </div>\n  </form>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_password_password_module_ts.js.map