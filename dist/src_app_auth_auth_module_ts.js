"use strict";
(self["webpackChunkmean"] = self["webpackChunkmean"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8146);


const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
            },
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full',
            },
        ],
    },
];
const AuthRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes);


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8146);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 1378);






let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__.AuthRoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule],
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    })
], AuthModule);



/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent),
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 5639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var _app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/http.service */ 4691);
/* harmony import */ var _app_shared_services_api_urls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/api-urls.service */ 101);
/* harmony import */ var _app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/auth.service */ 8915);









/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid);
    }
}
let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authService, apiService, apiUrls) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.apiService = apiService;
        this.apiUrls = apiUrls;
        // otpForm: FormGroup;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.letterSpacing = false;
        // convenience getter for easy access to form fields
        this.isOTP = false;
        this.matcher = new MyErrorStateMatcher();
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[6-9]\\d{9}')]),
            firstOtp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$")]),
            secondOtp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$")]),
            thirdOtp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$")]),
            fourthOtp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$")]),
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }
    onSubmit(obj) {
        localStorage.clear();
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.logIn(obj.phoneNumber, obj.otp).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe((data) => {
            if (data) {
                this.loggedUserDetails = data;
                this.router.navigate([this.returnUrl]);
            }
        }, (error) => {
            this.error = error.message;
            this.submitted = true;
        });
    }
    move(e, s, t, f) {
        let length = t.value.length;
        let maxlength = t.getAttribute('maxlength');
        if (length == maxlength) {
            if (f != "") {
                f.focus();
            }
        }
        if (e.key === 'Backspace') {
            if (s != "") {
                s.focus();
            }
        }
        if (this.loginForm.value.firstOtp && this.loginForm.value.secondOtp && this.loginForm.value.thirdOtp && this.loginForm.value.fourthOtp) {
            let otp = this.loginForm.value.firstOtp + this.loginForm.value.secondOtp + this.loginForm.value.thirdOtp + this.loginForm.value.fourthOtp;
            this.onSubmit({ phoneNumber: this.loginForm.value.phoneNumber, otp: otp });
        }
    }
    sendOtp() {
        this.letterSpacing = !!this.loginForm.value.phoneNumber;
        if (this.loginForm.value.phoneNumber && this.loginForm.value.phoneNumber.length === 10) {
            this.apiService.get(this.apiUrls.sendOtp + this.loginForm.value.phoneNumber).subscribe((res) => {
                if (res) {
                    this.isOTP = true;
                }
            }, error => {
                this.error = error.message;
            });
        }
        else {
            this.error = '';
        }
    }
    backToPhoneNumber() {
        this.isOTP = false;
        this.loginForm.reset();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService },
    { type: _app_shared_services_api_urls_service__WEBPACK_IMPORTED_MODULE_2__.ApiUrlsService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], LoginComponent);



/***/ }),

/***/ 4691:
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_shared_services_api_urls_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api-urls.service */ 101);




let HttpService = class HttpService {
    constructor(_httpClient, apiUrls) {
        this._httpClient = _httpClient;
        this.apiUrls = apiUrls;
    }
    getAll(subUrl, data) {
        return this._httpClient.post(this.apiUrls.mainUrl + subUrl, data);
    }
    get(subUrl) {
        return this._httpClient.get(this.apiUrls.mainUrl + subUrl);
    }
    update(subUrl, data) {
        return this._httpClient.put(this.apiUrls.mainUrl + subUrl, data);
    }
    delete(subUrl) {
        return this._httpClient.delete(this.apiUrls.mainUrl + subUrl);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _app_shared_services_api_urls_service__WEBPACK_IMPORTED_MODULE_0__.ApiUrlsService }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], HttpService);



/***/ }),

/***/ 5639:
/*!************************************************************!*\
  !*** ./src/app/auth/login/login.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!--<div class=\"container\">-->\n<div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill fxLayoutAlign=\"space-around center\">\n  <div fxFlex=\"60\" class=\"sec1\" fxFlex.xs=\"60\" fxFlexAlign=\"auto\">\n    <!--        IMAGE-->\n    <img src=\"https://png.pngtree.com/png-clipart/20201104/ourmid/pngtree-cartoon-truck-delivery-elements-png-image_2383380.jpg\" style=\"max-width: 100%\">\n  </div>\n  <div fxFlex=\"40\" class=\"sec2\" fxFlexAlign=\"auto\">\n    <form class=\"login-form\" [formGroup]=\"loginForm\">\n      <!-- Phone number -->\n      <div *ngIf=\"!isOTP\">\n        <h1>Welcome</h1>\n        <p>With a valid number, you can access delivery, other services</p>\n<!--        <mat-form-field floatLabel=\"always\" class=\"cus-mat-full-width\" appearance=\"outline\">-->\n<!--          <input matInput placeholder=\"Enter mobile number\" [errorStateMatcher]=\"matcher\" formControlName=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" onlyNumber maxlength=\"10\" (ngModelChange)=\"sendOtp()\" [ngStyle]=\"{'letter-spacing': letterSpacing ? '0.5rem' : ''}\">-->\n<!--          <span matTextPrefix>+91&nbsp;</span>-->\n<!--          <mat-error *ngIf=\"loginForm.get('phoneNumber')?.hasError('required')\">-->\n<!--            Mobile number is <strong>required</strong>-->\n<!--          </mat-error>-->\n<!--          <mat-error *ngIf=\"!loginForm.get('phoneNumber')?.hasError('required') && loginForm.get('phoneNumber')?.hasError('pattern')\">-->\n<!--            Please enter valid number-->\n<!--          </mat-error>-->\n<!--        </mat-form-field>-->\n        <mat-form-field class=\"cus-mat-full-width\" appearance=\"outline\" floatLabel=\"always\">\n<!--          <input matInput type=\"text\" placeholder=\"0\" />-->\n          <input matInput placeholder=\"Enter mobile number\" [errorStateMatcher]=\"matcher\" formControlName=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" onlyNumber maxlength=\"10\" (ngModelChange)=\"sendOtp()\" [ngStyle]=\"{'letter-spacing': letterSpacing ? '0.5rem' : ''}\">\n          <span *ngIf=\"letterSpacing\" matPrefix style=\"border-right: 1px solid rgba(0,0,0,.12); margin: 0 10px 0 0; padding: 0 4px 0 0;font-weight: 600\">+91&nbsp;</span>\n          <mat-error *ngIf=\"loginForm.get('phoneNumber')?.hasError('required')\">\n            Mobile number is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"!loginForm.get('phoneNumber')?.hasError('required') && loginForm.get('phoneNumber')?.hasError('pattern')\">\n            Please enter valid number\n          </mat-error>\n        </mat-form-field>\n        <span *ngIf=\"error\" style=\"color: #f44336;\">{{error}}</span>\n      </div>\n      <div  *ngIf=\"isOTP\">\n        <h1>Enter OTP</h1>\n        <p>Enter the one time password, received <br> on +91 {{loginForm.get('phoneNumber')?.value}}        <i (click)=\"backToPhoneNumber()\"><b>[edit]</b></i></p>\n        <div class=\"otp_sect\">\n          <input type=\"text\" maxlength=\"1\" formControlName=\"firstOtp\" onlyNumber #firstText (keyup)=\"move($event, '', firstText, secondText)\" />\n          <input type=\"text\" maxlength=\"1\" formControlName=\"secondOtp\" onlyNumber #secondText (keyup)=\"move($event, firstText, secondText, thirdText)\" />\n          <input type=\"text\" maxlength=\"1\" formControlName=\"thirdOtp\" onlyNumber #thirdText (keyup)=\"move($event, secondText, thirdText, fourthText)\" />\n          <input type=\"text\" maxlength=\"1\" formControlName=\"fourthOtp\" onlyNumber #fourthText (keyup)=\"move($event, thirdText, fourthText, '')\" />\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map