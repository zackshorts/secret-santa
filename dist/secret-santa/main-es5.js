(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/main.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-body\">\n  <h1>secret santa</h1>\n  <mat-card class=\"main-grid\">\n    <form [formGroup]=\"nameForm\" class=\"contact-form\">\n      <span>\n        <mat-form-field>\n          <input formControlName=\"name\" matInput placeholder=\"Name\" [(ngModel)]=\"inputName\" required>\n          <mat-error *ngIf=\"nameForm.get('name').hasError('required')\">\n            Name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"email\" matInput placeholder=\"Email\" [(ngModel)]=\"inputEmail\" required>\n          <mat-error *ngIf=\"nameForm.get('email').hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </span>\n      <span>\n        <mat-form-field>\n          <input formControlName=\"spouseName\" matInput placeholder=\"Spouse Name\" [(ngModel)]=\"spouseName\">\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"spouseEmail\" matInput placeholder=\"Spouse Email\" [(ngModel)]=\"spouseEmail\">\n          <mat-error *ngIf=\"nameForm.get('spouseEmail').hasError('email')\">\n            Email is <strong>incorrect</strong>\n          </mat-error>\n        </mat-form-field>\n      </span>\n      <div mat-dialog-actions class=\"action-buttons\">\n        <button mat-raised-button color=\"accent\" (click)=\"submitAllNames()\" [disabled]=\"this.participants.length < 4\"><mat-icon>check</mat-icon> Submit all names</button>\n        <button mat-raised-button color=\"primary\" (click)=\"addParticipant(this.inputName, this.inputEmail, this.spouseName, this.spouseEmail)\" [disabled]=\"!nameForm.valid\"><mat-icon>add</mat-icon> Add Name</button>\n      </div>    \n      <img class=\"grinch\" src=\"../../../assets/grinch.png\"/>\n    </form>\n    <div class=\"participant-list\">\n      <div>\n        <p>Participants:</p>\n        <ul>\n          <li class=\"participants\" *ngFor=\"let p of participants\">{{p.name | uppercase}}</li>\n        </ul>\n        </div>\n    </div>\n  </mat-card>\n  <div class=\"hide\" id='content'>\n      <h2>Secret Santa {{this.year}}</h2>\n      <div *ngFor=\"let pair of pairedParticipants\">\n        <p>{{pair.giver.name}} gives to {{pair.receiver.name}}</p>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");




var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], },
    { path: '**', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFDQUFxQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'secret-santa';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-body {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(200deg, rgb(255, 255, 255) 50%, rgb(175, 14, 16) 50%);}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  text-align: right;\n  padding: 25px;\n  font-size: 4rem;\n  color: #388E3C ;\n}\n\n.main-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 25px;\n}\n\n.participants:nth-of-type(even){\n  color:  rgb(175, 14, 16);\n}\n\n.participants:nth-of-type(odd){\n  color:#388E3C;\n}\n\n.participant-list {\n  border-radius: 5px;\n  font-size: 2rem;\n  overflow: scroll;\n}\n\n.participant-list div {\n  margin: 15px;\n}\n\nspan {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-card {\n  padding-top: 25px;\n  margin: 0 auto;\n  width: 80%;\n  height: 75vh;\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22) !important;\n}\n\nmat-form-field {\n  width: 40%;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\nbutton {\n  float: right;\n  margin-right: 35px;\n}\n\n.theme-picker {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n}\n\n.red-green {\n  margin-left: 10px;\n  height: 20px;\n  width: 60px;\n  background: linear-gradient(270deg, rgb(10, 70, 10) 50%, rgb(175, 14, 16) 50%);\n  border-radius: 3px;\n}\n\n.hide {\n  display: none;\n}\n\n.grinch {\n  position: absolute;\n  bottom: 0;\n  width: auto;\n  height: 60%;\n  left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUZBQWlGLENBQUM7O0FBRXBGO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlGQUFpRjtBQUNuRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEVBQThFO0VBQzlFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgcmdiKDI1NSwgMjU1LCAyNTUpIDUwJSwgcmdiKDE3NSwgMTQsIDE2KSA1MCUpO31cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBjb2xvcjogIzM4OEUzQyA7XG59XG5cbi5tYWluLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAyNXB4O1xufVxuXG4ucGFydGljaXBhbnRzOm50aC1vZi10eXBlKGV2ZW4pe1xuICBjb2xvcjogIHJnYigxNzUsIDE0LCAxNik7XG59XG5cbi5wYXJ0aWNpcGFudHM6bnRoLW9mLXR5cGUob2RkKXtcbiAgY29sb3I6IzM4OEUzQztcbn1cblxuLnBhcnRpY2lwYW50LWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnBhcnRpY2lwYW50LWxpc3QgZGl2IHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5zcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwwLDAsMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwwLDAsMC4yMikgIWltcG9ydGFudDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cblxuLnRoZW1lLXBpY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xufVxuXG4ucmVkLWdyZWVuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYigxMCwgNzAsIDEwKSA1MCUsIHJnYigxNzUsIDE0LCAxNikgNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncmluY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjAlO1xuICBsZWZ0OiAxNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







var MainComponent = /** @class */ (function () {
    function MainComponent(http, snackBar, dialog) {
        this.http = http;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.participants = [];
        this.shuffledParticipants = [];
        this.pairedParticipants = [];
        this.inputName = null;
        this.inputEmail = null;
        this.spouseName = null;
        this.spouseEmail = null;
        this.nameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.inputName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            spouseName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.spouseName),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.inputEmail, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            spouseEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.spouseEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email)
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        this.year = new Date().getFullYear();
    };
    MainComponent.prototype.addParticipant = function (name, email, spouseName, spouseEmail) {
        if (spouseName !== null && spouseEmail !== null) {
            this.participants.push({
                name: name,
                email: email,
                spouseName: spouseName
            });
            this.participants.push({
                name: spouseName,
                email: spouseEmail,
                spouseName: name
            });
        }
        else {
            this.participants.push({
                name: name,
                email: email,
            });
        }
        this.nameForm.reset();
    };
    MainComponent.prototype.makePairs = function () {
        for (var i = 0; i < this.participants.length; i++) {
            if (i !== this.participants.length - 1) {
                this.pairedParticipants.push({
                    giver: this.shuffledParticipants[i],
                    receiver: this.shuffledParticipants[i + 1]
                });
            }
            else {
                this.pairedParticipants.push({
                    giver: this.shuffledParticipants[i],
                    receiver: this.shuffledParticipants[0]
                });
            }
        }
    };
    MainComponent.prototype.shuffle = function (participantArray) {
        var currentIndex = participantArray.length;
        var temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = participantArray[currentIndex];
            participantArray[currentIndex] = participantArray[randomIndex];
            participantArray[randomIndex] = temporaryValue;
        }
        return participantArray;
    };
    MainComponent.prototype.savePdf = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(jquery__WEBPACK_IMPORTED_MODULE_6__('#content').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save("secret-santa-" + this.year + ".pdf");
    };
    MainComponent.prototype.submitAllNames = function () {
        var _this = this;
        var scope = this;
        this.shuffledParticipants = this.shuffle(this.participants);
        this.verifyPairs();
        this.makePairs();
        this.pairedParticipants.forEach(function (participant) {
            _this.sendEmail(participant);
        });
        setTimeout(function () {
            scope.savePdf();
        }, 500);
        scope.nameForm.reset();
        scope.participants = [];
        this.snackBar.open('Emails sent and pdf downloaded.', "Dismiss", {
            duration: 6000,
            panelClass: 'center'
        });
    };
    MainComponent.prototype.verifyPairs = function () {
        var pairedCorrectly = false;
        for (var i = 0; i < this.shuffledParticipants.length; i++) {
            if (i !== this.shuffledParticipants.length - 1) {
                if (this.shuffledParticipants[i].spouseName ===
                    this.shuffledParticipants[i + 1].name ||
                    this.shuffledParticipants[i].name ===
                        this.shuffledParticipants[i + 1].spouseName) {
                    i = -1;
                    this.shuffle(this.shuffledParticipants);
                    continue;
                }
            }
            else {
                if (this.shuffledParticipants[i].spouseName ===
                    this.shuffledParticipants[0].name ||
                    this.shuffledParticipants[i].name ===
                        this.shuffledParticipants[0].spouseName) {
                    i = -1;
                    this.shuffle(this.shuffledParticipants);
                    continue;
                }
            }
        }
    };
    MainComponent.prototype.sendEmail = function (emailObject) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json",
            Accept: "*/*"
        });
        var options = { headers: headers };
        var body = {
            to: emailObject.giver.email,
            message: emailObject.giver.name + ",\n\nThank you for participating in Secret Santa this year! You will have the chance to give a gift to " + emailObject.receiver.name + ". Please spend around $10-20 and make the gift meaningful. \n\nMerry Christmas!"
        };
        return this.http
            .post("https://zacharyshorts-emailserver.herokuapp.com/sendsantaemail", body, options)
            .subscribe();
    };
    MainComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-main",
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/ZKS 2TB SSD/Documents/Projects/secret-santa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map