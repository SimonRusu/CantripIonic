"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 3963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 3963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_firestore_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/fire-auth.service */ 6055);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let RegisterPage = class RegisterPage {
    constructor(router, fireAuth, toastCtrl) {
        var _a;
        this.router = router;
        this.fireAuth = fireAuth;
        this.toastCtrl = toastCtrl;
        this.checkPasswords = (group) => {
            var _a, _b;
            let pass = (_a = group.get('password')) === null || _a === void 0 ? void 0 : _a.value;
            let confirmPass = (_b = group.get('confirmPassword')) === null || _b === void 0 ? void 0 : _b.value;
            return pass === confirmPass ? null : { notSame: true };
        };
        const data = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        this.email = data.email;
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.:,#_()\/]).{8,}$')]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        }, { validators: this.checkPasswords });
    }
    registerUser() {
        console.log(this.email);
        console.log(this.registerForm.value.password);
        this.fireAuth.singUp(this.email, this.registerForm.value.password, this.registerForm.value.fullName).then(() => {
            this.openToast().then(() => {
                this.navigateTo('home');
            });
        }).catch((error) => {
            this.errorToast();
        });
    }
    navigateTo(route) {
        this.router.navigate([route]).then(() => {
            window.location.reload();
        });
    }
    openToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Thanks for registering!',
                duration: 3000
            });
            toast.present();
        });
    }
    errorToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'There was an error in the registration process!',
                duration: 3000
            });
            toast.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_firestore_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__.FireAuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".formContainer > div > ion-button {\n  width: 10rem;\n  height: 3rem;\n}\n\nform > .input_overlay {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1Db250YWluZXIgPiBkaXYgPiBpb24tYnV0dG9ue1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogM3JlbTtcbn1cblxuZm9ybSA+IC5pbnB1dF9vdmVybGF5e1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"col-md-3 col-sm-6  mx-auto\">\n\n  <h1 class=\" text-center mt-5 mb-5\">Join Us!</h1>\n\n\n  <form class=\"formContainer\" [formGroup]=\"registerForm\" novalidate (ngSubmit)=\"registerUser()\">\n\n    <ion-input type=\"text\" name=\"nameSurname\" class=\"input_overlay validation-text\" placeholder=\"enter your full name\"\n      formControlName=\"fullName\">\n\n\n    </ion-input>\n\n    <ion-input type=\"password\" name=\"passwordLogin\" class=\"input_overlay validation-text\"\n      placeholder=\"enter your password\" formControlName=\"password\" [class.valid]=\"registerForm.get('password')?.valid &&\n              (registerForm.get('password')?.dirty || registerForm.get('password')?.touched)\" [class.invalid]=\"registerForm.get('password')?.invalid &&\n              (registerForm.get('password')?.dirty || registerForm.get('password')?.touched)\"></ion-input>\n\n    <div *ngIf=\"registerForm.get('password')?.invalid &&\n                  registerForm.get('password')?.errors &&\n                  (registerForm.get('password')?.dirty || registerForm.get('password')?.touched)\">\n\n      <small class=\"text-danger\" *ngIf=\"registerForm.get('password')?.hasError('required')\">\n        Enter a password\n      </small>\n\n      <small class=\"text-danger\" *ngIf=\"registerForm.get('password')?.hasError('pattern')\">\n        Password must contain at least one number,\n        one uppercase and lowercase letter,\n        one special character and at least 8 or more characters.\n\n      </small>\n    </div>\n\n    <div class=\"w-100 mb-4\"></div>\n\n    <ion-input type=\"password\" name=\"passwordLogin\" class=\"input_overlay validation-text\"\n      placeholder=\"repeat your password\" formControlName=\"confirmPassword\" [class.valid]=\"registerForm.get('confirmPassword')?.valid && registerForm.get('password')?.valid &&\n                  (registerForm.get('confirmPassword')?.dirty || registerForm.get('confirmPassword')?.touched)\"\n      [class.invalid]=\"registerForm.hasError('notSame') && registerForm.get('confirmPassword')?.dirty\"></ion-input>\n    <div>\n      <small class=\"text-danger\" *ngIf=\"registerForm.hasError('notSame') && registerForm.get('confirmPassword')?.dirty\">\n        Passwords do not match\n      </small>\n    </div>\n\n    <br>\n    <div class=\"text-center\">\n      <ion-button type=\"submit\" class=\"btn btn-primary\" value=\"Continue\"\n        [disabled]=\"!(registerForm.valid && registerForm.dirty)\" disabled>Register</ion-button>\n    </div>\n\n  </form>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map