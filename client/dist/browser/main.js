(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _app_components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _app_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addpost/addpost.component */ "./src/app/components/addpost/addpost.component.ts");
/* harmony import */ var _components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/viewpost/viewpost.component */ "./src/app/components/viewpost/viewpost.component.ts");
/* harmony import */ var _components_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/editpost/editpost.component */ "./src/app/components/editpost/editpost.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_editaccount_editaccount_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/editaccount/editaccount.component */ "./src/app/components/editaccount/editaccount.component.ts");
/* harmony import */ var _components_viewaccount_viewaccount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/viewaccount/viewaccount.component */ "./src/app/components/viewaccount/viewaccount.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'about', component: _app_components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'auth/login', component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'auth/register', component: _app_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'posts/add', component: _components_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_7__["AddpostComponent"] },
    { path: 'posts/view/:id', component: _components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_8__["ViewpostComponent"] },
    { path: 'posts/edit/:id', component: _components_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_9__["EditpostComponent"] },
    { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"] },
    { path: 'account/edit', component: _components_editaccount_editaccount_component__WEBPACK_IMPORTED_MODULE_11__["EditaccountComponent"] },
    { path: 'account/view/:username', component: _components_viewaccount_viewaccount_component__WEBPACK_IMPORTED_MODULE_12__["ViewaccountComponent"] },
    { path: '**', component: _app_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'app-root' }),
                _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"],
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/lib/src/index.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_ckeditor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/addpost/addpost.component */ "./src/app/components/addpost/addpost.component.ts");
/* harmony import */ var _components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/viewpost/viewpost.component */ "./src/app/components/viewpost/viewpost.component.ts");
/* harmony import */ var _components_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/editpost/editpost.component */ "./src/app/components/editpost/editpost.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_editaccount_editaccount_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/editaccount/editaccount.component */ "./src/app/components/editaccount/editaccount.component.ts");
/* harmony import */ var _components_viewaccount_viewaccount_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/viewaccount/viewaccount.component */ "./src/app/components/viewaccount/viewaccount.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_14__["AddpostComponent"],
                _components_viewpost_viewpost_component__WEBPACK_IMPORTED_MODULE_15__["ViewpostComponent"],
                _components_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_16__["EditpostComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_17__["AccountComponent"],
                _components_editaccount_editaccount_component__WEBPACK_IMPORTED_MODULE_18__["EditaccountComponent"],
                _components_viewaccount_viewaccount_component__WEBPACK_IMPORTED_MODULE_19__["ViewaccountComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"],
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_0__["CKEditorModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    border-radius: 20px;\r\n}\r\n\r\n.header{\r\n    text-align: center;\r\n    font-family: pacifico;\r\n    padding-top:2%;\r\n}\r\n\r\n.sub-header{\r\n    font-family: pacifico;\r\n    padding-top:4%;\r\n    margin-left:5%;\r\n}\r\n\r\n.card-body{\r\n    font-size: 20px !important;\r\n}\r\n\r\nul{\r\n    font-size: 20px !important;\r\n}\r\n\r\n.container{\r\n    margin-bottom: 5%;\r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container top-buffer\">\n  <div class=\"card card-block bg-faded\">\n      <div class=\"header\">\n        <h1>About TechFeed</h1>\n        <hr>\n      </div>\n      <p class=\"card-body\">\n        TechFeed is a website created as an easy to use hub for interesting developments in technology.\n        It aims to inform, interest and integrate people in a variety of technology related fields.\n        I hope TechFeed can be a useful resource and be enjoyed by many.\n      </p>\n\n      <h1 class=\"sub-header\">Technology Categories</h1><hr>\n      <p class=\"card-body\">\n        TechFeed has a variety of categories to inform readers of the type of post they\n        will expect before deciding to view. We encourage users to use these categories across\n        many fields, ranging from programming to business in the tech world.\n      </p>\n\n      <ul>\n        <li>Software</li>\n        <li>Web</li>\n        <li>Mobile</li>\n        <li>Machine Learning</li>\n        <li>Robotics</li>\n        <li>Tech News</li>\n        <li>Other</li>\n      </ul>\n\n      <h1 class=\"sub-header\">Post Guidlines</h1><hr>\n      <p class=\"card-body\">\n        Posts should be interesting and original, with correct facts and genuine content, they should have\n        suitable, SFW imagery. Posts should have correctly selected categories and have suitable titles, relevent\n        to the post.\n\n        Any breaches of these conditions will cause posts to be taken down or even account bans in extreme cases.\n      </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css"), __webpack_require__(/*! ../global.css */ "./src/app/components/global.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/account/account.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    margin-top:2%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.box-header{\r\n    margin-top: 2%;\r\n    text-align: center;\r\n    font-family: Pacifico;\r\n}\r\n\r\n.card{\r\n    border-radius: 20px;\r\n}\r\n\r\n.text-box{\r\n    border-radius: 20px;\r\n    font-size: 20px;\r\n    height: 5%;\r\n}\r\n\r\n.label{\r\n    display:inline-block;\r\n    margin-right:10px;\r\n    font-family: Pacifico;\r\n    font-size: 30px;\r\n}\r\n\r\n.value{\r\n    font-family: Verdana;\r\n    display:inline-block;\r\n    border: 0.5px solid #E9E9E9;\r\n    background: rgb(251, 251, 251);\r\n    border-radius: 20px;\r\n    width:100%;\r\n    padding:10px;\r\n}\r\n\r\n.btns{\r\n    margin-bottom: 1%;\r\n    margin-right: 1%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.btns button{\r\n    margin-right: 1%;\r\n}\r\n\r\n.form-buffer{\r\n    margin-top: 5%;\r\n}\r\n\r\n.post{\r\n    background-color:white;\r\n    border-radius: 10px;\r\n    margin-bottom: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.post-title{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n.post-image{\r\n    max-height:300px;\r\n    max-width: 100%;\r\n    display:block; \r\n    height: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.post-info{\r\n    font-style: italic;\r\n    display: flex; \r\n    justify-content: flex-end;\r\n    margin-top: 5px;\r\n}\r\n\r\n.author{\r\n    margin-right:20px;\r\n}\r\n\r\n.date{\r\n    margin-right:20px;\r\n}\r\n\r\n.category button{\r\n    border-radius: 20px;\r\n    font-size: calc(.4em + .5vw);\r\n    margin-right:5px;\r\n    margin-left:5px;\r\n    font-family: Verdana;\r\n    pointer-events:none;\r\n}\r\n\r\n.categories{\r\n    margin-bottom: 1%;\r\n    margin-left: 8%;\r\n    margin-bottom:2%;\r\n}\r\n\r\n.bottom{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/account/account.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container box\">\n  <div class=\"card\">\n    <h1 class=\"box-header\">Account</h1>\n    <hr />\n    <div class=\"card-body\">\n      <div class=\"info\">\n        <h4 class=\"label\"> Username: </h4>\n        <h5 class=\"username value\">{{ CurrentUser.username }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Email: </h4>\n        <h5 class=\"email value\">{{ CurrentUser.email }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Fullname: </h4>\n        <h5 class=\"fullname value\">{{ CurrentUser.fullname }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Creation: </h4>\n        <h5 class=\"created value\">{{ CurrentUser.created }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Posts: </h4>\n        <h5 class=\"posts value\">{{ CurrentUser.posts }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Total Votes: </h4>\n        <h5 class=\"votes value\">{{ CurrentUser.votes }}</h5>\n      </div>\n    </div>\n\n    <div class=\"btns\">\n      <button class=\"btn btn-info\" (click)=\"edit()\">Edit Account</button>\n      <button class=\"btn btn-danger\" (click)=\"delete()\">Delete Account</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"container box\" *ngIf=\"posts.length > 0\">\n  <div class=\"cd\">\n    <h1 class=\"box-header\">My Posts</h1>\n    <hr />\n  </div>\n\n  <div *ngFor=\"let post of posts\">\n      <div class=\"post\">\n        <a href=\"/posts/view/{{ post._id }}\">\n          <h1 class=\"post-title\">{{ post.title }}</h1>\n        </a>\n        <hr />\n        <a href=\"/posts/view/{{ post._id }}\">\n          <div class=\"image\">\n            <img *ngIf=\"post.postimage != 'noimage'\" src=\"{{ post.postimage }}\" class=\"post-image\">\n            <img *ngIf=\"post.postimage == 'noimage'\" src=\"../../../assets/noimage.png\" class=\"post-image\">\n          </div>\n        </a>\n        <hr />\n\n        <div class=\"bottom\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"categories btn-group\" *ngIf=\"!mobile() && post.categories.length > 0\">\n                <div class=\"category\" *ngFor=\"let category of post.categories\">\n                  <!-- Software -->\n                  <div class=\"row\">\n                    <div class=\"col-md-4 col-lg-2\">\n                      <button class=\"btn btn-primary\" *ngIf=\"category == 'cb_software'\"> Software </button>\n                    </div>\n                  </div>\n                  <!-- Web -->\n                  <button class=\"btn btn-success\" *ngIf=\"category == 'cb_web'\"> Web </button>\n                  <!-- Machine Learning -->\n                  <button class=\"btn btn-info\" *ngIf=\"category == 'cb_machinelearning'\"> Machine Learning </button>\n                  <!-- Robotics -->\n                  <button class=\"btn btn-danger\" *ngIf=\"category == 'cb_robotics'\"> Robotics </button>\n                  <!-- Mobile -->\n                  <button class=\"btn btn-warning\" *ngIf=\"category == 'cb_mobile'\"> Mobile </button>\n                  <!-- Tech News -->\n                  <button class=\"btn btn-light\" *ngIf=\"category == 'cb_technews'\"> Tech News </button>\n                  <!-- Other -->\n                  <button class=\"btn btn-dark\" *ngIf=\"category == 'cb_other'\"> Other </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"post-info\">\n              <div class=\"author\">\n                Written by: <a href=\"/account\">{{post.author}}</a>\n              </div>\n              <div class=\"date\">\n                {{ post.created }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    function AccountComponent(authService, postService) {
        var _this = this;
        this.authService = authService;
        this.postService = postService;
        this.CurrentUser = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.posts = {};
        authService.isAuthenticated().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            if (response.authenticated) {
                _this.CurrentUser.username = response.username;
                _this.CurrentUser.email = response.email;
                _this.CurrentUser.fullname = response.fullname;
                _this.CurrentUser.posts = response.posts;
                _this.CurrentUser.votes = response.votes;
                _this.CurrentUser.created = response.created;
                _this.CurrentUser.id = response.id;
            }
            else {
                window.location.href = "/auth/login";
            }
            authService.setPostCount(_this.CurrentUser).subscribe(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                if (response.success) {
                    _this.CurrentUser.posts = response.postcount;
                }
            });
            authService.setVoteCount(_this.CurrentUser).subscribe(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                if (response.success) {
                    _this.CurrentUser.votes = response.votecount;
                }
            });
            postService.getPostsByUser(_this.CurrentUser.username.toString()).subscribe(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                _this.posts = response;
            }, function (err) {
                console.log(err);
                throw err;
            });
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    AccountComponent.prototype.delete = function () {
        if (confirm("Are you sure to delete your account?")) {
            this.authService.delete(this.CurrentUser).subscribe(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                if (response.success) {
                    alert(response.message);
                    window.location.href = "/";
                }
            }, function (err) {
                console.log(err);
                throw err;
            });
        }
    };
    AccountComponent.prototype.edit = function () {
        window.location.href = "/account/edit";
    };
    AccountComponent.prototype.mobile = function () {
        if (window.innerWidth <= 992) {
            return true;
        }
        return false;
    };
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/components/addpost/addpost.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/addpost/addpost.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    margin-top:2%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.box-header{\r\n    margin-top: 2%;\r\n    text-align: center;\r\n    font-family: Pacifico;\r\n}\r\n\r\n.card{\r\n    border-radius: 20px;\r\n}\r\n\r\n.text-box{\r\n    border-radius: 20px;\r\n    font-size: 20px;\r\n    height: 5%;\r\n}\r\n\r\n.label{\r\n    font-family: Pacifico;\r\n    font-size: 30px;\r\n}\r\n\r\n.category{\r\n    margin-right:5px;\r\n    margin-left:5px;\r\n    display: inline;\r\n}\r\n\r\n.category input{\r\n    margin-left:6px;\r\n}\r\n\r\n.submit{\r\n    float: right;\r\n}\r\n\r\n.form-buffer{\r\n    margin-top: 5%;\r\n}\r\n\r\n.validation{\r\n    color:red;\r\n}\r\n\r\n.validation hr{\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid red;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n}"

/***/ }),

/***/ "./src/app/components/addpost/addpost.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/addpost/addpost.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container box\">\n    <div class=\"card\">\n        <h1 class=\"box-header\">Make a Post</h1>\n        <hr />\n        <div class=\"card-body\">\n            <form #postForm=\"ngForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"addPost(postForm, $event)\">\n                <div class=\"form-group\">\n                    <h4 class=\"label\"> Title </h4>\n                    <hr />\n                    <input type=\"text\" class=\"form-control text-box\" name=\"title\" id=\"password\" placeholder=\"Title\"\n                        ngModel>\n\n                    <div class=\"validation\" *ngIf=\"titleMsg\">\n                        <hr>\n                        <p id=\"title-message\">{{ titleMsg }}</p>\n                    </div>\n                </div>\n                <div class=\"form-group form-buffer\">\n                    <h4 class=\"label\"> Body </h4>\n                    <hr />\n                    <ck-editor name=\"editor\" name=\"body\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\" ngModel></ck-editor>\n\n                    <div class=\"validation\" *ngIf=\"bodyMsg\">\n                        <hr>\n                        <p id=\"body-message\">{{ bodyMsg }}</p>\n                    </div>\n                </div>\n                <div class=\"form-group form-buffer\">\n                    <h4 class=\"label\"> Categories </h4>\n                    <hr />\n                    <!-- Software --->\n                    <div class=\"category\">\n                        <button class=\"btn btn-primary\" (click)=\"changeCheck('cb_software')\">Software</button>\n                        <input type=\"checkbox\" name=\"cb_software\" [checked]=\"cb_software\" (change)=\"cb_software = !cb_software\">\n                    </div>\n\n                    <!-- Web -->\n                    <div class=\"category\">\n                        <button class=\"btn btn-success\" (click)=\"changeCheck('cb_web')\"> Web </button>\n                        <input type=\"checkbox\" name=\"cb_web\" [checked]=\"cb_web\" (change)=\"cb_web = !cb_web\">\n                    </div>\n\n                    <!-- Machine Learning -->\n                    <div class=\"category\">\n                        <button class=\"btn btn-info\" (click)=\"changeCheck('cb_machinelearning')\"> Machine Learning\n                        </button>\n                        <input type=\"checkbox\" name=\"cb_machinelearning\" [checked]=\"cb_machinelearning\" (change)=\"cb_machinelearning = !cb_machinelearning\">\n                    </div>\n\n                    <!-- Robotics -->\n                    <div class=\"category\">\n                        <button class=\"btn btn-danger\" (click)=\"changeCheck('cb_robotics')\"> Robotics </button>\n                        <input type=\"checkbox\" name=\"cb_robotics\" [checked]=\"cb_robotics\" (change)=\"cb_robotics = !cb_robotics\">\n                    </div>\n\n                    <!-- Mobile -->\n                    <div class=\"category\">\n                        <button class=\"btn btn-warning\" (click)=\"changeCheck('cb_mobile')\"> Mobile </button>\n                        <input type=\"checkbox\" name=\"cb_mobile\" [checked]=\"cb_mobile\" (change)=\"cb_mobile = !cb_mobile\">\n                    </div>\n\n                    <!-- Tech News -->\n                    <div class=\"category\">\n                        <button class=\"btn btn-light\" (click)=\"changeCheck('cb_technews')\"> Tech News </button>\n                        <input type=\"checkbox\" name=\"cb_technews\" [checked]=\"cb_technews\" (change)=\"cb_technews = !cb_technews\">\n                    </div>\n\n                    <!-- Other -->\n                    <div class=\"category\">\n                        <button class=\"btn btn-dark\" (click)=\"changeCheck('cb_other')\"> Other </button>\n                        <input type=\"checkbox\" name=\"cb_other\" [checked]=\"cb_other\" (change)=\"cb_other = !cb_other\">\n                    </div>\n\n                    <div class=\"form-group form-buffer\">\n                        <h4 class=\"label\"> Cover Image </h4>\n                        <hr />\n                        <input type=\"file\" name=\"postimage\" accept=\"image/x-png,image/jpeg\" (change)=\"checkFileType(postimage); setFile($event)\"\n                            #postimage ngModel>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-info submit\">\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/addpost/addpost.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/addpost/addpost.component.ts ***!
  \*********************************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddpostComponent = /** @class */ (function () {
    function AddpostComponent(postService, authService) {
        var _this = this;
        this.postService = postService;
        this.authService = authService;
        this.CurrentUser = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.cb_machinelearning = false;
        this.cb_mobile = false;
        this.cb_other = false;
        this.cb_robotics = false;
        this.cb_software = false;
        this.cb_technews = false;
        this.cb_web = false;
        this.authService.isAuthenticated().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            if (response.authenticated == true) {
                _this.CurrentUser.username = response.username;
                _this.CurrentUser.email = response.email;
                _this.CurrentUser.fullname = response.fullname;
                _this.CurrentUser.created = response.created;
            }
            else {
                window.location.replace("/auth/login");
            }
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    AddpostComponent.prototype.addPost = function (form, event) {
        event.preventDefault();
        this.clearMessages();
        if (this.validateInput(form.value)) {
            var fd = new FormData();
            if (this.postImage) {
                fd.append('postimage', this.postImage, this.postImage.name);
            }
            else {
                fd.append('postimage', 'noimage');
            }
            fd.append('title', form.value.title);
            fd.append('body', form.value.body);
            fd.append('author', this.CurrentUser.username.toString());
            fd.append('cb_machinelearning', this.cb_machinelearning.toString());
            fd.append('cb_mobile', this.cb_mobile.toString());
            fd.append('cb_other', this.cb_other.toString());
            fd.append('cb_robotics', this.cb_robotics.toString());
            fd.append('cb_software', this.cb_software.toString());
            fd.append('cb_technews', this.cb_technews.toString());
            fd.append('cb_web', this.cb_web.toString());
            this.postService.addPost(fd);
        }
    };
    AddpostComponent.prototype.validateInput = function (input) {
        if (input.title != undefined && input.title.length > 0) {
            if (input.title.length <= 5) {
                this.titleMsg = "Title must be longer than 5 characters";
            }
            if (input.title.length > 100) {
                this.titleMsg = "Titles must be under 100 characters.";
            }
        }
        else {
            this.titleMsg = "Please enter a title";
        }
        if (input.body != undefined && input.body.length > 0) {
            if (input.body.length > 900000) {
                this.bodyMsg = "Sorry! Body is too long. Please add a link for extended text.";
            }
        }
        else {
            this.bodyMsg = "Please enter a body";
        }
        if (this.bodyMsg == undefined && this.titleMsg == undefined) {
            return true;
        }
        return false;
    };
    AddpostComponent.prototype.clearMessages = function () {
        this.titleMsg = undefined;
        this.bodyMsg = undefined;
    };
    AddpostComponent.prototype.changeCheck = function (checkbox) {
        switch (checkbox) {
            case "cb_software":
                this.cb_software = !this.cb_software;
                break;
            case "cb_machinelearning":
                this.cb_machinelearning = !this.cb_machinelearning;
                break;
            case "cb_mobile":
                this.cb_mobile = !this.cb_mobile;
                break;
            case "cb_other":
                this.cb_other = !this.cb_other;
                break;
            case "cb_robotics":
                this.cb_robotics = !this.cb_robotics;
                break;
            case "cb_technews":
                this.cb_technews = !this.cb_technews;
                break;
            case "cb_web":
                this.cb_web = !this.cb_web;
                break;
        }
        return false; // Prevents form for automatically sending on button click
    };
    AddpostComponent.prototype.checkFileType = function (image) {
        if (image && image.value) {
            var value = image.value.split(".")[1];
            if (value == "jpeg" || value == "jpg" || value == "png" || value == undefined) {
                return;
            }
            else {
                alert("This file type is not supported.");
                image.value = "";
            }
        }
    };
    AddpostComponent.prototype.setFile = function (event) {
        this.postImage = event.target.files[0];
    };
    AddpostComponent.prototype.ngOnInit = function () {
    };
    AddpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(/*! ./addpost.component.html */ "./src/app/components/addpost/addpost.component.html"),
            styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/components/addpost/addpost.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/content/content.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-input{\r\n    height:50px;\r\n    border-top-left-radius: 20px 50%;\r\n    border-bottom-left-radius: 20px 50%;\r\n}\r\n\r\n.btn-search{\r\n    border-top-right-radius: 20px 50%;\r\n    border-bottom-right-radius: 20px 50%;\r\n}\r\n\r\n.btn-sort{\r\n    margin-left:5px;\r\n    margin-right:5px;\r\n}\r\n\r\n.btn-categories{\r\n    margin-left:5px;\r\n    margin-right:5px;\r\n}\r\n\r\n.filter .dropdown-item{\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n}\r\n\r\n.filter-btn { \r\n    color: #ffffff; \r\n    background-color: #1FD17B; \r\n  }\r\n\r\n.filter-btn:hover, \r\n  .filter-btn:focus, \r\n  .filter-btn:active, \r\n  .filter-btn.active, \r\n  .open .dropdown-toggle.filter-btn { \r\n    color: #ffffff; \r\n    background-color: #1FD17B; \r\n  }\r\n\r\n.filter-btn:active, \r\n  .filter-btn.active, \r\n  .open .dropdown-toggle.filter-btn { \r\n    background-image: none; \r\n  }\r\n\r\n.filter-btn.disabled, \r\n  .filter-btn[disabled], \r\n  fieldset[disabled] .filter-btn, \r\n  .filter-btn.disabled:hover, \r\n  .filter-btn[disabled]:hover, \r\n  fieldset[disabled] .filter-btn:hover, \r\n  .filter-btn.disabled:focus, \r\n  .filter-btn[disabled]:focus, \r\n  fieldset[disabled] .filter-btn:focus, \r\n  .filter-btn.disabled:active, \r\n  .filter-btn[disabled]:active, \r\n  fieldset[disabled] .filter-btn:active, \r\n  .filter-btn.disabled.active, \r\n  .filter-btn[disabled].active, \r\n  fieldset[disabled] .filter-btn.active { \r\n    background-color: #1FD17B; \r\n  }\r\n\r\n.filter-btn .badge { \r\n    color: #1FD17B; \r\n  }\r\n\r\n.post{\r\n    background-color:white;\r\n    border-radius: 10px;\r\n    margin-bottom: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.post-title{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n.post-image{\r\n    max-height:300px;\r\n    max-width: 100%;\r\n    display:block; \r\n    height: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.post-info{\r\n    font-style: italic;\r\n    display: flex; \r\n    justify-content: flex-end;\r\n    margin-top: 5px;\r\n}\r\n\r\n.author{\r\n    margin-right:20px;\r\n}\r\n\r\n.date{\r\n    margin-right:20px;\r\n}\r\n\r\n.category button{\r\n    border-radius: 20px;\r\n    font-size: calc(.4em + .5vw);\r\n    margin-right:5px;\r\n    margin-left:5px;\r\n    font-family: Verdana;\r\n    pointer-events:none;\r\n}\r\n\r\n.categories{\r\n    margin-bottom: 1%;\r\n    margin-left: 8%;\r\n    margin-bottom:2%;\r\n}\r\n\r\n.bottom{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .btn-group.my-btn-group-responsive > .btn {\r\n      display: block;\r\n      width: 100%;\r\n    }\r\n    \r\n    /* making the border-radius correct */\r\n    .btn-group.my-btn-group-responsive > .btn:first-child {\r\n      border-radius: 6px 6px 0 0;\r\n    }\r\n    .btn-group.my-btn-group-responsive > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n      border-top-right-radius: 6px;\r\n    }\r\n    .btn-group.my-btn-group-responsive > .btn:last-child:not(:first-child) {\r\n      border-radius: 0 0 6px 6px;\r\n    }\r\n    \r\n    /* fixing margin */\r\n    .btn-group.my-btn-group-responsive .btn + .btn {\r\n      margin-left: 0;\r\n    }\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container top-buffer\">\n  <div class=\"search\">\n    <form>\n      <div class=\"input-group mb-3\">\n        <input type=\"text\" name = \"posts\" class=\"form-control  search-input\" placeholder=\"Search posts\" aria-describedby=\"basic-addon2\"\n         [(ngModel)]=\"searchText\" (keydown)=\"checkKey($event)\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-info btn-search\" type=\"button\" (click)=\"search()\">Search</button>\n        </div>\n      </div>\n    </form>\n\n    <!-- Filter selection -->\n\n    <div class=\"btn-group filter\">\n      <div class=\"dropdown\">\n        <button class=\"btn dropdown-toggle btn-categories filter-btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ categoryFilter }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('All Categories')\">All Categories</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('Software')\">Software</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('Web')\">Web</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('Machine Learning')\">Machine Learning</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('Robotics')\">Robotics</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('Mobile')\">Mobile</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('Tech News')\">Tech News</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setCategoryFilter('Other')\">Other</h5>\n        </div>\n      </div>\n      <div class=\"dropdown\">\n        <button class=\"btn dropdown-toggle btn-sort filter-btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ sortFilter }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <h5 class=\"dropdown-item\" (click)=\"setSortFilter('Most Votes')\">Most Votes</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setSortFilter('Least Votes')\">Least Votes</h5>\n          <h5 class=\"dropdown-item\" (click)=\"setSortFilter('Newest')\">Newest</h5>\n        </div>\n      </div>\n    </div>\n    <hr />\n\n    <!-- Display Posts -->\n    <div class=\"posts top-buffer\" *ngIf=\"posts.length > 0\">\n      <div *ngFor=\"let post of posts\">\n        <div class=\"post\">\n          <a href=\"/posts/view/{{ post._id }}\">\n            <h1 class=\"post-title\">{{ post.title }}</h1>\n          </a>\n          <hr />\n          <a href=\"/posts/view/{{ post._id }}\">\n            <div class=\"image\">\n              <img *ngIf=\"post.postimage != 'noimage'\" src=\"{{ post.postimage }}\" class=\"post-image\">\n              <img *ngIf=\"post.postimage == 'noimage'\" src=\"../../../assets/noimage.png\" class=\"post-image\">\n            </div>\n          </a>\n          <hr />\n\n          <div class=\"bottom\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"categories btn-group\" *ngIf=\"!mobile() && post.categories.length > 0\">\n                  <div class=\"category\" *ngFor=\"let category of post.categories\">\n                    <!-- Software -->\n                    <div class=\"row\">\n                      <div class=\"col-md-4 col-lg-2\">\n                        <button class=\"btn btn-primary\" *ngIf=\"category == 'cb_software'\"> Software </button>\n                      </div>\n                    </div>\n                    <!-- Web -->\n                    <button class=\"btn btn-success\" *ngIf=\"category == 'cb_web'\"> Web </button>\n                    <!-- Machine Learning -->\n                    <button class=\"btn btn-info\" *ngIf=\"category == 'cb_machinelearning'\"> Machine Learning </button>\n                    <!-- Robotics -->\n                    <button class=\"btn btn-danger\" *ngIf=\"category == 'cb_robotics'\"> Robotics </button>\n                    <!-- Mobile -->\n                    <button class=\"btn btn-warning\" *ngIf=\"category == 'cb_mobile'\"> Mobile </button>\n                    <!-- Tech News -->\n                    <button class=\"btn btn-light\" *ngIf=\"category == 'cb_technews'\"> Tech News </button>\n                    <!-- Other -->\n                    <button class=\"btn btn-dark\" *ngIf=\"category == 'cb_other'\"> Other </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col\">\n              <div class=\"post-info\">\n                <div class=\"author\">\n                  Written by: <a href=\"/account/view/{{post.author}}\">{{post.author}}</a>\n                </div>\n                <div class=\"date\">\n                  {{ post.created }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.categoryFilter = "All Categories";
        this.sortFilter = "Most Votes";
        this.posts = {};
        this.postService.getPosts().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            _this.posts = response;
            _this.setSortFilter(_this.sortFilter);
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    ContentComponent.prototype.checkKey = function (event) {
        if (event.key == "Enter") {
            this.search();
        }
    };
    ContentComponent.prototype.search = function () {
        var _this = this;
        var filtered = [];
        this.postService.getPosts().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            _this.posts = response;
            _this.posts.forEach(function (post) {
                if (post.title.includes(_this.searchText)) {
                    filtered.push(post);
                }
            });
            _this.posts = filtered;
            _this.setSortFilter(_this.sortFilter);
        }, function (err) {
            console.log(err);
            throw err;
        });
    };
    ContentComponent.prototype.setCategoryFilter = function (filter) {
        var _this = this;
        this.categoryFilter = filter;
        switch (filter) {
            case "Software":
                this.sortByCategory("software");
                break;
            case "Web":
                this.sortByCategory("web");
                break;
            case "Machine Learning":
                this.sortByCategory("machinelearning");
                break;
            case "Robotics":
                this.sortByCategory("robotics");
                break;
            case "Mobile":
                this.sortByCategory("mobile");
                break;
            case "Tech News":
                this.sortByCategory("technews");
                break;
            case "Other":
                this.sortByCategory("other");
                break;
            case "All Categories":
                this.postService.getPosts().subscribe(function (data) {
                    var response = JSON.parse(JSON.stringify(data));
                    _this.posts = response;
                    _this.setSortFilter(_this.sortFilter);
                }, function (err) {
                    console.log(err);
                    throw err;
                });
        }
    };
    ContentComponent.prototype.sortByCategory = function (category) {
        var _this = this;
        var filtered = [];
        this.postService.getPosts().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            _this.posts = JSON.parse(JSON.stringify(response));
            _this.posts.forEach(function (post, index) {
                var containsFilter = false;
                post.categories.forEach(function (cat) {
                    if (cat.includes(category)) {
                        containsFilter = true;
                    }
                });
                if (containsFilter) {
                    filtered.push(_this.posts[index]);
                }
            });
            _this.posts = filtered;
            if (_this.sortFilter != "Newest") {
                _this.setSortFilter(_this.sortFilter);
            }
        }, function (err) {
            console.log(err);
            throw err;
        });
    };
    ContentComponent.prototype.setSortFilter = function (filter) {
        var _this = this;
        this.sortFilter = filter;
        if (filter == "Newest") {
            this.postService.getPosts().subscribe(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                _this.posts = response;
            }, function (err) {
                console.log(err);
                throw err;
            });
        }
        if (filter == "Most Votes") {
            (this.posts.sort(function (a, b) { return parseFloat(a.votes) - parseFloat(b.votes); })).reverse();
        }
        if (filter == "Least Votes") {
            this.posts.sort(function (a, b) { return parseFloat(a.votes) - parseFloat(b.votes); });
        }
    };
    ContentComponent.prototype.mobile = function () {
        if (window.innerWidth <= 992) {
            return true;
        }
        return false;
    };
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/components/content/content.component.css"), __webpack_require__(/*! ../global.css */ "./src/app/components/global.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/editaccount/editaccount.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/editaccount/editaccount.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    margin-top:2%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.box-header{\r\n    margin-top: 2%;\r\n    text-align: center;\r\n    font-family: Pacifico;\r\n}\r\n\r\n.card{\r\n    border-radius: 20px;\r\n}\r\n\r\n.label{\r\n    display:inline-block;\r\n    margin-right:10px;\r\n    font-family: Pacifico;\r\n    font-size: 30px;\r\n}\r\n\r\ninput{\r\n    font-family: Verdana;\r\n    display:inline-block;\r\n    border: 0.5px solid #E9E9E9;\r\n    background: rgb(251, 251, 251);\r\n    border-radius: 20px;\r\n    width:100%;\r\n    padding:10px;\r\n}\r\n\r\n.btns{\r\n    margin-bottom: 1%;\r\n    margin-right: 1%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.credentials{\r\n    color:red;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.credentials p{\r\n    float:left;\r\n}\r\n\r\n.credentials hr{\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid red;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n}\r\n\r\n.info{\r\n    margin-bottom: 2%;\r\n}"

/***/ }),

/***/ "./src/app/components/editaccount/editaccount.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/editaccount/editaccount.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container box\">\n  <div class=\"card\">\n    <h1 class=\"box-header\">Edit Account</h1>\n    <hr />\n    <div class=\"card-body\">\n      <div class=\"info\">\n        <h4 class=\"label\"> Username: </h4>\n        <input class=\"username\" [(ngModel)]=\"CurrentUser.username\">\n\n        <div class=\"credentials\" id=\"username-credentials\" *ngIf=\"usernameMsg\">\n          <hr>\n          <p id=\"username-message\">{{ usernameMsg }}</p>\n          <br>\n        </div>\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Email: </h4>\n        <input class=\"email\" [(ngModel)]=\"CurrentUser.email\">\n\n        <div class=\"credentials\" id=\"email-credentials\" *ngIf=\"emailMsg\">\n          <hr>\n          <p id=\"email-message\">{{ emailMsg }}</p>\n          <br>\n        </div>\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Fullname: </h4>\n        <input class=\"fullname\" [(ngModel)]=\"CurrentUser.fullname\">\n\n        <div class=\"credentials\" id=\"fullname-credentials\" *ngIf=\"fullnameMsg\">\n          <hr>\n          <p id=\"fullname-message\">{{ fullnameMsg }}</p>\n          <br>\n        </div>\n      </div>\n\n      <div class=\"btns\">\n        <button class=\"btn btn-info\" (click)=\"edit()\">Confirm Changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/editaccount/editaccount.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/editaccount/editaccount.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaccountComponent", function() { return EditaccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditaccountComponent = /** @class */ (function () {
    function EditaccountComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.CurrentUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        authService.isAuthenticated().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            if (response.authenticated) {
                _this.CurrentUser.username = response.username;
                _this.CurrentUser.email = response.email;
                _this.CurrentUser.fullname = response.fullname;
                _this.CurrentUser.posts = response.posts;
                _this.CurrentUser.votes = response.votes;
                _this.CurrentUser.created = response.created;
                _this.CurrentUser.id = response.id;
            }
            else {
                window.location.href = "/auth/login";
            }
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    EditaccountComponent.prototype.validate = function (inputs) {
        // --- Username ---
        if (inputs.username != undefined) {
            if (inputs.username.length <= 5) {
                this.usernameMsg = "Usernames must be longer than 5 characters";
            }
            if (inputs.username.length >= 30) {
                this.usernameMsg = "Usernames must be less than 30 characters";
            }
        }
        else {
            this.usernameMsg = "Please enter a username";
        }
        // --- Fullname ---
        if (inputs.fullname != undefined) {
            if (inputs.fullname.length < 2) {
                this.fullnameMsg = "Fullnames must be longer than 1 character";
            }
            if (inputs.fullname.length >= 50) {
                this.fullnameMsg = "Fullnames must be less than 50 characters";
            }
            if (inputs.fullname.match(/\d+/g) != null) {
                this.fullnameMsg = "Fullnames can't contain numbers.";
            }
        }
        else {
            this.fullnameMsg = "Please enter a name";
        }
        // --- Email ---
        if (inputs.email != undefined) {
            if (inputs.email.length <= 5) {
                this.emailMsg = "Emails must be longer than 5 characters";
            }
            if (inputs.email.length >= 50) {
                this.emailMsg = "Emails must be less than 50 characters";
            }
            if (!inputs.email.includes("@")) {
                this.emailMsg = "Please enter a valid email address.";
            }
        }
        else {
            this.emailMsg = "Please enter an email";
        }
        if (this.usernameMsg != undefined || this.emailMsg != undefined || this.fullnameMsg != undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    EditaccountComponent.prototype.clearMessages = function () {
        this.usernameMsg = undefined;
        this.emailMsg = undefined;
        this.fullnameMsg = undefined;
    };
    EditaccountComponent.prototype.edit = function () {
        this.clearMessages();
        if (confirm("Are you sure you want to update your account?")) {
            if (this.validate(this.CurrentUser)) {
                this.authService.update(this.CurrentUser).subscribe(function (data) {
                    var response = JSON.parse(JSON.stringify(data));
                    if (response.success) {
                        alert("Account updated successfully");
                        window.location.href = "/";
                    }
                }, function (err) {
                    console.log(err);
                    throw err;
                });
            }
        }
    };
    EditaccountComponent.prototype.ngOnInit = function () {
    };
    EditaccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editaccount',
            template: __webpack_require__(/*! ./editaccount.component.html */ "./src/app/components/editaccount/editaccount.component.html"),
            styles: [__webpack_require__(/*! ./editaccount.component.css */ "./src/app/components/editaccount/editaccount.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], EditaccountComponent);
    return EditaccountComponent;
}());



/***/ }),

/***/ "./src/app/components/editpost/editpost.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/editpost/editpost.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    margin-top:2%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.box-header{\r\n    margin-top: 2%;\r\n    text-align: center;\r\n    font-family: Pacifico;\r\n}\r\n\r\n.card{\r\n    border-radius: 20px;\r\n}\r\n\r\n.text-box{\r\n    border-radius: 20px;\r\n    font-size: 20px;\r\n    height: 5%;\r\n}\r\n\r\n.label{\r\n    font-family: Pacifico;\r\n    font-size: 30px;\r\n}\r\n\r\n.category{\r\n    margin-right:5px;\r\n    margin-left:5px;\r\n    display: inline;\r\n}\r\n\r\n.category input{\r\n    margin-left:6px;\r\n}\r\n\r\n.submit{\r\n    float: right;\r\n}\r\n\r\n.form-buffer{\r\n    margin-top: 5%;\r\n}\r\n\r\n.validation{\r\n    color:red;\r\n}\r\n\r\n.validation hr{\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid red;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n}"

/***/ }),

/***/ "./src/app/components/editpost/editpost.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/editpost/editpost.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container box\">\n  <div class=\"card\">\n    <h1 class=\"box-header\">Edit Post</h1>\n    <hr />\n    <div class=\"card-body\">\n      <form #postForm=\"ngForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"updatePost(postForm, $event)\">\n        <div class=\"form-group\">\n          <h4 class=\"label\"> Title </h4>\n          <hr />\n          <input type=\"text\" class=\"form-control text-box\" name=\"title\" placeholder=\"Title\" [(ngModel)]=\"titleContent\"\n            ngModel>\n\n          <div class=\"validation\" *ngIf=\"titleMsg\">\n            <hr>\n            <p id=\"title-message\">{{ titleMsg }}</p>\n          </div>\n        </div>\n        <div class=\"form-group form-buffer\">\n          <h4 class=\"label\"> Body </h4>\n          <hr />\n          <ck-editor name=\"editor\" name=\"body\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\" [(ngModel)]=\"bodyContent\" #body ngModel></ck-editor>\n          <div class=\"validation\" *ngIf=\"bodyMsg\">\n            <hr>\n            <p id=\"body-message\">{{ bodyMsg }}</p>\n          </div>\n        </div>\n        <div class=\"form-group form-buffer\">\n          <h4 class=\"label\"> Categories </h4>\n          <hr />\n          <!-- Software --->\n          <div class=\"category\">\n            <button class=\"btn btn-primary\" (click)=\"changeCheck('cb_software')\">Software</button>\n            <input type=\"checkbox\" name=\"cb_software\" [checked]=\"cb_software\" (change)=\"cb_software = !cb_software\">\n          </div>\n\n          <!-- Web -->\n          <div class=\"category\">\n            <button class=\"btn btn-success\" (click)=\"changeCheck('cb_web')\"> Web </button>\n            <input type=\"checkbox\" name=\"cb_web\" [checked]=\"cb_web\" (change)=\"cb_web = !cb_web\">\n          </div>\n\n          <!-- Machine Learning -->\n          <div class=\"category\">\n            <button class=\"btn btn-info\" (click)=\"changeCheck('cb_machinelearning')\"> Machine Learning </button>\n            <input type=\"checkbox\" name=\"cb_machinelearning\" [checked]=\"cb_machinelearning\" (change)=\"cb_machinelearning = !cb_machinelearning\">\n          </div>\n\n          <!-- Robotics -->\n          <div class=\"category\">\n            <button class=\"btn btn-danger\" (click)=\"changeCheck('cb_robotics')\"> Robotics </button>\n            <input type=\"checkbox\" name=\"cb_robotics\" [checked]=\"cb_robotics\" (change)=\"cb_robotics = !cb_robotics\">\n          </div>\n\n          <!-- Mobile -->\n          <div class=\"category\">\n            <button class=\"btn btn-warning\" (click)=\"changeCheck('cb_mobile')\"> Mobile </button>\n            <input type=\"checkbox\" name=\"cb_mobile\" [checked]=\"cb_mobile\" (change)=\"cb_mobile = !cb_mobile\">\n          </div>\n\n          <!-- Tech News -->\n          <div class=\"category\">\n            <button class=\"btn btn-light\" (click)=\"changeCheck('cb_technews')\"> Tech News </button>\n            <input type=\"checkbox\" name=\"cb_technews\" [checked]=\"cb_technews\" (change)=\"cb_technews = !cb_technews\">\n          </div>\n\n          <!-- Other -->\n          <div class=\"category\">\n            <button class=\"btn btn-dark\" (click)=\"changeCheck('cb_other')\"> Other </button>\n            <input type=\"checkbox\" name=\"cb_other\" [checked]=\"cb_other\" (change)=\"cb_other = !cb_other\">\n          </div>\n\n          <div class=\"form-group form-buffer\">\n            <h4 class=\"label\"> Update Cover Image </h4>\n            <hr />\n            <input type=\"file\" name=\"postimage\" accept=\"image/x-png,image/jpeg\" (change)=\"checkFileType(postimage); setFile($event)\"\n                #postimage ngModel>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-info submit\">\n          </div>\n          <small>Changing this will overwrite previous image.</small>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/editpost/editpost.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/editpost/editpost.component.ts ***!
  \***********************************************************/
/*! exports provided: EditpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpostComponent", function() { return EditpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditpostComponent = /** @class */ (function () {
    function EditpostComponent(postService, authService, route) {
        var _this = this;
        this.postService = postService;
        this.authService = authService;
        this.route = route;
        this.CurrentUser = new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.cb_machinelearning = false;
        this.cb_mobile = false;
        this.cb_other = false;
        this.cb_robotics = false;
        this.cb_software = false;
        this.cb_technews = false;
        this.cb_web = false;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.authService.isAuthenticated().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            if (response.authenticated == true) {
                _this.CurrentUser.username = response.username;
                _this.CurrentUser.email = response.email;
                _this.CurrentUser.fullname = response.fullname;
                _this.CurrentUser.created = response.created;
            }
            else {
                // window.location.replace("/auth/login");
            }
        }, function (err) {
            console.log(err);
            throw err;
        });
        this.postService.getPostById(this.id).subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            if (response.title) {
                _this.titleContent = response.title;
            }
            if (response.body) {
                _this.bodyContent = response.body;
            }
            if (response.categories) {
                response.categories.forEach(function (category) {
                    _this.changeCheck(category);
                });
            }
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    EditpostComponent.prototype.updatePost = function (form, event) {
        event.preventDefault();
        this.clearMessages();
        if (this.validateInput(form.value)) {
            if (confirm("Are you sure you want to edit this post?")) {
                var fd = new FormData();
                if (this.postImage) {
                    fd.append('postimage', this.postImage, this.postImage.name);
                }
                else {
                    fd.append('postimage', 'noimage');
                }
                fd.append('id', this.id);
                fd.append('title', form.value.title);
                fd.append('body', form.value.body);
                fd.append('cb_machinelearning', this.cb_machinelearning.toString());
                fd.append('cb_mobile', this.cb_mobile.toString());
                fd.append('cb_other', this.cb_other.toString());
                fd.append('cb_robotics', this.cb_robotics.toString());
                fd.append('cb_software', this.cb_software.toString());
                fd.append('cb_technews', this.cb_technews.toString());
                fd.append('cb_web', this.cb_web.toString());
                var data = {
                    id: this.id,
                    title: form.value.title,
                    body: form.value.body,
                    cb_machinelearning: this.cb_machinelearning.toString(),
                    cb_mobile: this.cb_mobile.toString(),
                    cb_other: this.cb_other.toString(),
                    cb_robotics: this.cb_robotics.toString(),
                    cb_software: this.cb_software.toString(),
                    cb_technews: this.cb_technews.toString(),
                    cb_web: this.cb_web.toString(),
                };
                this.postService.updatePost(fd);
            }
        }
    };
    EditpostComponent.prototype.validateInput = function (input) {
        if (input.title != undefined && input.title.length > 0) {
            if (input.title.length <= 5) {
                this.titleMsg = "Title must be longer than 5 characters";
            }
            if (input.title.length > 100) {
                this.titleMsg = "Titles must be under 100 characters.";
            }
        }
        else {
            this.titleMsg = "Please enter a title";
        }
        if (input.body != undefined && input.body.length > 0) {
            if (input.body.length > 90000) {
                this.bodyMsg = "Sorry! Body is too long. Please add a link for extended text.";
            }
        }
        else {
            this.bodyMsg = "Please enter a body";
        }
        if (this.bodyMsg == undefined && this.titleMsg == undefined) {
            return true;
        }
        return false;
    };
    EditpostComponent.prototype.clearMessages = function () {
        this.titleMsg = undefined;
        this.bodyMsg = undefined;
    };
    EditpostComponent.prototype.changeCheck = function (checkbox) {
        switch (checkbox) {
            case "cb_software":
                this.cb_software = !this.cb_software;
                break;
            case "cb_machinelearning":
                this.cb_machinelearning = !this.cb_machinelearning;
                break;
            case "cb_mobile":
                this.cb_mobile = !this.cb_mobile;
                break;
            case "cb_other":
                this.cb_other = !this.cb_other;
                break;
            case "cb_robotics":
                this.cb_robotics = !this.cb_robotics;
                break;
            case "cb_technews":
                this.cb_technews = !this.cb_technews;
                break;
            case "cb_web":
                this.cb_web = !this.cb_web;
                break;
        }
        return false; // Prevents form for automatically sending on button click
    };
    EditpostComponent.prototype.checkFileType = function (image) {
        if (image && image.value) {
            var value = image.value.split(".")[1];
            if (value == "jpeg" || value == "jpg" || value == "png" || value == undefined) {
                return;
            }
            else {
                alert("This file type is not supported.");
                image.value = "";
            }
        }
    };
    EditpostComponent.prototype.setFile = function (event) {
        this.postImage = event.target.files[0];
    };
    EditpostComponent.prototype.ngOnInit = function () {
    };
    EditpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editpost',
            template: __webpack_require__(/*! ./editpost.component.html */ "./src/app/components/editpost/editpost.component.html"),
            styles: [__webpack_require__(/*! ./editpost.component.css */ "./src/app/components/editpost/editpost.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditpostComponent);
    return EditpostComponent;
}());



/***/ }),

/***/ "./src/app/components/global.css":
/*!***************************************!*\
  !*** ./src/app/components/global.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-buffer{\r\n    margin-top:2%;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".holder{\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-image: linear-gradient(to right top, #506490, #42739d, #3182a6, #2491aa, #2a9faa);\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    top:0px; bottom: 0px;\r\n    height: 100%;\r\n    background-repeat: repeat;\r\n    position: absolute;\r\n    overflow-x: hidden;\r\n}\r\n.box{\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 60%;\r\n    height: 95%;\r\n}\r\n.header{\r\n    font-size:calc(100% + 2vw);\r\n}\r\n.content{\r\n    padding:10px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.credentials{\r\n    color:red;\r\n}\r\n.credentials p{\r\n    float:left;\r\n}\r\n.credentials hr{\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid red;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n}\r\n.content h1{\r\n    margin: auto 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n}\r\n.profile-img{\r\n    height: 10em;\r\n    width:  10em;\r\n    border-radius: 100%;\r\n    margin-top:30px;\r\n}\r\n.user-form{\r\n    margin-top:100px;\r\n    width:80%;\r\n    justify-content: center;\r\n    align-content: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.user-form input{\r\n    width:100%;\r\n    height:50px;\r\n    border-radius:20px;\r\n}\r\n.submit-btn{\r\n    border:none !important;\r\n    background-color:#36C23B;\r\n    color:white;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n.submit-btn:hover{\r\n    background-color: #3e8e41;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\n    <div class=\"box\">\n      <div class=\"content top-buffer\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n                &nbsp;\n            </div>\n            <div class=\"col-sm\">\n              <h1 class=\"header\">Login</h1>\n            </div>\n            <div class=\"col-sm\">\n              &nbsp;\n            </div>\n          </div>\n        </div>\n        <hr>\n        <img src=\"../../../assets/default-user-image.png\" class=\"profile-img\">\n        <div class=\"user-form\">\n          <form (submit)=\"login($event)\">\n\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" [(ngModel)] = \"loginUser.email\">\n            <div class=\"credentials\" id=\"email-credentials\" *ngIf=\"emailMsg\">\n              <hr>\n              <p id=\"email-message\">{{ emailMsg }}</p>\n            </div>\n            <br>\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)] = \"loginUser.password\" >\n            <div class=\"credentials\" id=\"password-credentials\" *ngIf=\"passwordMsg\">\n              <hr>\n              <p id=\"password-message\">{{ passwordMsg }}</p>\n            </div>\n            <br>\n            <input class=\"submit-btn\" type=\"submit\">\n            <a class=\"registration\" routerLink=\"../register\">Register</a> | <a class=\"registration\" routerLink=\"/\">Home</a>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.loginUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        event.preventDefault();
        this.clearMessages();
        if (this.checkInput()) {
            this.authService.login(this.loginUser).subscribe(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                if (response.success == true) {
                    window.location.replace("/");
                }
                else {
                    _this.passwordMsg = response.message;
                }
            }, function (err) {
                console.log(err);
                throw err;
            });
        }
    };
    LoginComponent.prototype.clearMessages = function () {
        this.emailMsg = undefined;
        this.passwordMsg = undefined;
    };
    LoginComponent.prototype.checkInput = function () {
        // Email
        if (this.loginUser.email == undefined || this.loginUser.email.length == 0) {
            this.emailMsg = "An email address is required";
        }
        // Password
        if (this.loginUser.password == undefined || this.loginUser.password.length == 0) {
            this.passwordMsg = "A password is required";
        }
        if (this.emailMsg == undefined && this.passwordMsg == undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/models/User.ts":
/*!*******************************************!*\
  !*** ./src/app/components/models/User.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnAuth{\r\n    margin:5px;\r\n}\r\n\r\n.logo{\r\n    font-family: Pacifico;\r\n    font-size: 25px;\r\n    cursor: default;\r\n    color:white !important;\r\n}\r\n\r\n.nav-content ul a{\r\n    font-family: Pacifico;\r\n}\r\n\r\n.nav-content ul a:hover{\r\n    border-bottom: 2px solid turquoise;\r\n}\r\n\r\n.username{\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand logo\" >TechFeed</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse nav-content\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/about\">About</a>\n      </li>\n    </ul>\n    <li class=\"form-inline my-2 my-lg-0\">\n     <div *ngIf=\"Authenticated\">\n          <a href=\"/account\" class=\"username\"><button class=\"btn btn-primary my-2 my-sm-0 btnAuth\">{{CurrentUser.username}}</button></a>\n          <a href=\"/posts/add\"> <button class=\"btn btn-danger my-2 my-sm-0 btnAuth\">Make a Post</button> </a>\n          <a href=\"api/auth/logout\"> <button class=\"btn btn-info my-2 my-sm-0 btnAuth\">Logout</button> </a>\n      </div>\n      <div *ngIf=\"!Authenticated\">\n        <a href=\"/auth/login\"><button class=\"btn btn-info my-2 my-sm-0 btnAuth\" type=\"submit\">Login</button></a>\n        <a href=\"/auth/register\"><button class=\"btn btn-danger my-2 my-sm-0 btnAuth\" type=\"submit\">Register</button></a>\n      </div>\n    </li>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.Authenticated = false;
        this.CurrentUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.authService.isAuthenticated().subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            if (response.authenticated == true) {
                _this.Authenticated = true;
                _this.CurrentUser.username = response.username;
                _this.CurrentUser.email = response.email;
                _this.CurrentUser.fullname = response.fullname;
                _this.CurrentUser.created = response.created;
            }
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".holder{\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-image: linear-gradient(to right top, #506490, #42739d, #3182a6, #2491aa, #2a9faa);\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    top:0px; bottom: 0px;\r\n    height: 100%;\r\n    background-repeat: repeat;\r\n    position: absolute;\r\n    overflow-x: hidden;\r\n}\r\n.box{\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 60%;\r\n    height: 95%;\r\n}\r\n.header{\r\n    font-size:calc(100% + 2vw);\r\n}\r\n.content{\r\n    padding:10px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.credentials{\r\n    color:red;\r\n}\r\n.credentials p{\r\n    float:left;\r\n}\r\n.credentials hr{\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid red;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n}\r\n.content h1{\r\n    margin: auto 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n}\r\n.profile-img{\r\n    height: 10em;\r\n    width:  10em;\r\n    border-radius: 100%;\r\n    margin-top:30px;\r\n}\r\n.user-form{\r\n    margin-top:100px;\r\n    width:80%;\r\n    justify-content: center;\r\n    align-content: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.user-form input{\r\n    width:100%;\r\n    height:50px;\r\n    border-radius:20px;\r\n}\r\n.submit-btn{\r\n    border:none !important;\r\n    background-color:#36C23B;\r\n    color:white;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n.submit-btn:hover{\r\n    background-color: #3e8e41;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\n  <div class=\"box\">\n    <div class=\"content top-buffer\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n              &nbsp;\n          </div>\n          <div class=\"col-sm\">\n            <h1 class=\"header\">Registration</h1>\n          </div>\n          <div class=\"col-sm\">\n            &nbsp;\n          </div>\n        </div>\n      </div>\n      <hr>\n      <img src=\"../../../assets/default-user-image.png\" class=\"profile-img\">\n      <div class=\"user-form\">\n        <form (submit)=\"register($event)\">\n          <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"newUser.username\">\n          <div class=\"credentials\" id=\"username-credentials\" *ngIf=\"usernameMsg\">\n            <hr>\n            <p id=\"username-message\">{{ usernameMsg }}</p>\n          </div>\n          <br>\n          <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"newUser.email\">\n          <div class=\"credentials\" id=\"email-credentials\" *ngIf=\"emailMsg\">\n            <hr>\n            <p id=\"email-message\">{{ emailMsg }}</p>\n          </div>\n          <br>\n          <input type=\"text\" class=\"form-control\" name=\"fullname\" placeholder=\"Fullname\" [(ngModel)]=\"newUser.fullname\">\n          <div class=\"credentials\" id=\"fullname-credentials\" *ngIf=\"fullnameMsg\">\n            <hr>\n            <p id=\"fullname-message\">{{ fullnameMsg }}</p>\n          </div>\n          <br>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\">\n          <div class=\"credentials\" id=\"password-credentials\" *ngIf=\"passwordMsg\">\n            <hr>\n            <p id=\"password-message\">{{ passwordMsg }}</p>\n          </div>\n          <br>\n          <input type=\"password\" class=\"form-control\" name=\"password_resubmit\" placeholder=\"Retype password\" [(ngModel)]=\"newUser.passwordResubmit\">\n          <div class=\"credentials\" id=\"password_resubmit-credentials\" *ngIf=\"passwordResubmitMsg\">\n            <hr>\n            <p id=\"password_resubmit-message\">{{ passwordResubmitMsg }}</p>\n          </div>\n          <br>\n          <input class=\"submit-btn\" type=\"submit\">\n          <a class=\"registration\" routerLink=\"../login\">Login</a> | <a class=\"registration\" routerLink=\"/\">Home</a>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.newUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        this.clearMessages();
        if (this.validateInputs()) {
            this.authService.isUnique(this.newUser).subscribe(function (data) {
                var message = JSON.parse(JSON.stringify(data)); // Easy way to convert to JSON
                if (message.success) {
                    _this.authService.register(_this.newUser).subscribe(function (data) {
                        window.location.replace("/auth/login");
                    }, function (err) {
                        console.log(err);
                        throw err;
                    });
                }
                else {
                    if (message.matches == "username") {
                        _this.usernameMsg = "This username is already in use";
                    }
                    if (message.matches == "email") {
                        _this.emailMsg = "This email is already in use";
                    }
                }
            }, function (err) {
                console.log(err);
                throw err;
            });
        }
    };
    RegisterComponent.prototype.clearMessages = function () {
        this.usernameMsg = undefined;
        this.fullnameMsg = undefined;
        this.emailMsg = undefined;
        this.passwordMsg = undefined;
        this.passwordResubmitMsg = undefined;
    };
    RegisterComponent.prototype.validateInputs = function () {
        // --- Username ---
        if (this.newUser.username != undefined) {
            if (this.newUser.username.length <= 5) {
                this.usernameMsg = "Usernames must be longer than 5 characters";
            }
            if (this.newUser.username.length >= 30) {
                this.usernameMsg = "Usernames must be less than 30 characters";
            }
        }
        else {
            this.usernameMsg = "Please enter a username";
        }
        // --- Fullname ---
        if (this.newUser.fullname != undefined) {
            if (this.newUser.fullname.length < 2) {
                this.fullnameMsg = "Fullnames must be longer than 1 character";
            }
            if (this.newUser.fullname.length >= 50) {
                this.fullnameMsg = "Fullnames must be less than 50 characters";
            }
            if (this.newUser.fullname.match(/\d+/g) != null) {
                this.fullnameMsg = "Fullnames can't contain numbers.";
            }
        }
        else {
            this.fullnameMsg = "Please enter a name";
        }
        // --- Email ---
        if (this.newUser.email != undefined) {
            if (this.newUser.email.length <= 5) {
                this.emailMsg = "Emails must be longer than 5 characters";
            }
            if (this.newUser.email.length >= 50) {
                this.emailMsg = "Emails must be less than 50 characters";
            }
            if (!this.newUser.email.includes("@")) {
                this.emailMsg = "Please enter a valid email address.";
            }
        }
        else {
            this.emailMsg = "Please enter an email";
        }
        // --- Password ---
        if (this.newUser.password != undefined) {
            if (this.newUser.password.length <= 5) {
                this.passwordMsg = "Password must be longer than 5 characters";
            }
            if (this.newUser.password.length >= 50) {
                this.passwordMsg = "Password must be less than 50 characters";
            }
            if (this.newUser.password.match(/\d+/g) == null) {
                this.passwordMsg = "Password must contain at least one number.";
            }
            if (this.newUser.password.match(/[a-z]/i) == null) {
                this.passwordMsg = "Password must contain at least one alphabetical letter.";
            }
        }
        else {
            this.passwordMsg = "Please enter a password";
        }
        // --- Password Resubmit ---
        if (this.newUser.passwordResubmit != undefined) {
            if (this.newUser.passwordResubmit != this.newUser.password) {
                this.passwordResubmitMsg = "Passwords do not match";
            }
        }
        else {
            this.passwordResubmitMsg = "Please resubmit the password";
        }
        if (this.usernameMsg == undefined && this.fullnameMsg == undefined && this.emailMsg == undefined && this.passwordMsg == undefined && this.passwordResubmitMsg == undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/viewaccount/viewaccount.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/viewaccount/viewaccount.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    margin-top:2%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.box-header{\r\n    margin-top: 2%;\r\n    text-align: center;\r\n}\r\n\r\n.post-header{\r\n    text-align: center;\r\n    font-family: Pacifico;\r\n}\r\n\r\n.card{\r\n    border-radius: 20px;\r\n}\r\n\r\n.text-box{\r\n    border-radius: 20px;\r\n    font-size: 20px;\r\n    height: 5%;\r\n}\r\n\r\n.label{\r\n    display:inline-block;\r\n    margin-right:10px;\r\n    font-family: Pacifico;\r\n    font-size: 30px;\r\n}\r\n\r\n.value{\r\n    font-family: Verdana;\r\n    display:inline-block;\r\n    border: 0.5px solid #E9E9E9;\r\n    background: rgb(251, 251, 251);\r\n    border-radius: 20px;\r\n    width:100%;\r\n    padding:10px;\r\n}\r\n\r\n.btns{\r\n    margin-bottom: 1%;\r\n    margin-right: 1%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.btns button{\r\n    margin-right: 1%;\r\n}\r\n\r\n.form-buffer{\r\n    margin-top: 5%;\r\n}\r\n\r\n.post{\r\n    background-color:white;\r\n    border-radius: 10px;\r\n    margin-bottom: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.post-title{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n.post-image{\r\n    max-height:300px;\r\n    max-width: 100%;\r\n    display:block; \r\n    height: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.post-info{\r\n    font-style: italic;\r\n    display: flex; \r\n    justify-content: flex-end;\r\n    margin-top: 5px;\r\n}\r\n\r\n.author{\r\n    margin-right:20px;\r\n}\r\n\r\n.date{\r\n    margin-right:20px;\r\n}\r\n\r\n.category button{\r\n    border-radius: 20px;\r\n    font-size: calc(.4em + .5vw);\r\n    margin-right:5px;\r\n    margin-left:5px;\r\n    font-family: Verdana;\r\n    pointer-events:none;\r\n}\r\n\r\n.categories{\r\n    margin-bottom: 1%;\r\n    margin-left: 8%;\r\n    margin-bottom:2%;\r\n}\r\n\r\n.bottom{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/viewaccount/viewaccount.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/viewaccount/viewaccount.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container box\" *ngIf=\"User.username\">\n  <div class=\"card\">\n    <h1 class=\"box-header\">{{ User.username }}</h1>\n    <hr />\n    <div class=\"card-body\">\n      <div class=\"info\">\n        <h4 class=\"label\"> Username: </h4>\n        <h5 class=\"username value\">{{ User.username }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Email: </h4>\n        <h5 class=\"email value\">{{ User.email }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Fullname: </h4>\n        <h5 class=\"fullname value\">{{ User.fullname }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Creation: </h4>\n        <h5 class=\"created value\">{{ User.created }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Posts: </h4>\n        <h5 class=\"posts value\">{{ User.posts }}</h5>\n        <hr />\n      </div>\n\n      <div class=\"info\">\n        <h4 class=\"label\"> Total Votes: </h4>\n        <h5 class=\"votes value\">{{ User.votes }}</h5>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container box\" *ngIf=\"posts.length > 0\">\n  <div class=\"cd\">\n    <h1 class=\"post-header\">Posts</h1>\n    <hr />\n  </div>\n\n  <div *ngFor=\"let post of posts\">\n      <div class=\"post\">\n        <a href=\"/posts/view/{{ post._id }}\">\n          <h1 class=\"post-title\">{{ post.title }}</h1>\n        </a>\n        <hr />\n        <a href=\"/posts/view/{{ post._id }}\">\n          <div class=\"image\">\n            <img *ngIf=\"post.postimage != 'noimage'\" src=\"{{ post.postimage }}\" class=\"post-image\">\n            <img *ngIf=\"post.postimage == 'noimage'\" src=\"../../../assets/noimage.png\" class=\"post-image\">\n          </div>\n        </a>\n        <hr />\n\n        <div class=\"bottom\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"categories btn-group\" *ngIf=\"!mobile() && post.categories.length > 0\">\n                <div class=\"category\" *ngFor=\"let category of post.categories\">\n                  <!-- Software -->\n                  <div class=\"row\">\n                    <div class=\"col-md-4 col-lg-2\">\n                      <button class=\"btn btn-primary\" *ngIf=\"category == 'cb_software'\"> Software </button>\n                    </div>\n                  </div>\n                  <!-- Web -->\n                  <button class=\"btn btn-success\" *ngIf=\"category == 'cb_web'\"> Web </button>\n                  <!-- Machine Learning -->\n                  <button class=\"btn btn-info\" *ngIf=\"category == 'cb_machinelearning'\"> Machine Learning </button>\n                  <!-- Robotics -->\n                  <button class=\"btn btn-danger\" *ngIf=\"category == 'cb_robotics'\"> Robotics </button>\n                  <!-- Mobile -->\n                  <button class=\"btn btn-warning\" *ngIf=\"category == 'cb_mobile'\"> Mobile </button>\n                  <!-- Tech News -->\n                  <button class=\"btn btn-light\" *ngIf=\"category == 'cb_technews'\"> Tech News </button>\n                  <!-- Other -->\n                  <button class=\"btn btn-dark\" *ngIf=\"category == 'cb_other'\"> Other </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"post-info\">\n              <div class=\"author\">\n                Written by: <a href=\"/account/view/{{post.author}}\">{{post.author}}</a>\n              </div>\n              <div class=\"date\">\n                {{ post.created }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/viewaccount/viewaccount.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/viewaccount/viewaccount.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewaccountComponent", function() { return ViewaccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewaccountComponent = /** @class */ (function () {
    function ViewaccountComponent(postService, authService, route) {
        var _this = this;
        this.postService = postService;
        this.authService = authService;
        this.route = route;
        this.User = new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.posts = {};
        this.route.params.subscribe(function (params) {
            _this.username = params['username'];
        });
        this.authService.getByUsername(this.username).subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            if (response) {
                _this.User.username = response.username;
                _this.User.email = response.email;
                _this.User.fullname = response.fullname;
                _this.User.posts = response.posts;
                _this.User.votes = response.votes;
                _this.User.created = response.created;
                _this.User.id = response._id;
                postService.getPostsByUser(_this.User.username.toString()).subscribe(function (data) {
                    var response = JSON.parse(JSON.stringify(data));
                    _this.posts = response;
                }, function (err) {
                    console.log(err);
                    throw err;
                });
            }
            else {
                window.location.href = "/";
            }
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    ViewaccountComponent.prototype.mobile = function () {
        if (window.innerWidth <= 992) {
            return true;
        }
        return false;
    };
    ViewaccountComponent.prototype.ngOnInit = function () {
    };
    ViewaccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewaccount',
            template: __webpack_require__(/*! ./viewaccount.component.html */ "./src/app/components/viewaccount/viewaccount.component.html"),
            styles: [__webpack_require__(/*! ./viewaccount.component.css */ "./src/app/components/viewaccount/viewaccount.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewaccountComponent);
    return ViewaccountComponent;
}());



/***/ }),

/***/ "./src/app/components/viewpost/viewpost.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/viewpost/viewpost.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    height: 100%;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    margin-top:5%;\r\n    margin-bottom:5%;\r\n}\r\n\r\n.title{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n.post-info{\r\n    padding:1%;\r\n}\r\n\r\n.date{\r\n    margin-right:1%;\r\n}\r\n\r\n.author{\r\n    margin-right:2%;\r\n}\r\n\r\n.voting{\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.voting div{\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.voting i{\r\n    width:20px;\r\n    height:20px;\r\n    margin-top:5px;\r\n    color:rgb(200,200,200);\r\n    cursor: pointer;\r\n}\r\n\r\n.voting .upvoted{\r\n    color:rgb(238, 78, 94);\r\n}\r\n\r\n.voting .downvoted{\r\n    color:#49cee2;\r\n}\r\n\r\n.voting .upvote:hover{\r\n    color:rgb(238, 78, 94);\r\n}\r\n\r\n.voting .downvote:hover{\r\n    color:#49cee2;\r\n}\r\n\r\n.votecount{\r\n    padding-left:5px;\r\n    padding-right:5px;\r\n}\r\n\r\n.post-btns{\r\n    margin-right:2%;\r\n    margin-left:2%;\r\n}\r\n\r\n.info-end{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    font-style: italic;\r\n}\r\n\r\n.body{\r\n    padding:1%;\r\n    word-wrap: break-word;\r\n}"

/***/ }),

/***/ "./src/app/components/viewpost/viewpost.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/viewpost/viewpost.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"box\">\n    <div [innerHTML]=\"body\" class=\"body\"> </div>\n    <div class=\"footer\">\n      <hr />\n      <div class=\"post-info row\">\n        <div class=\"voting col\">\n\n          <div *ngIf=\"!upvoted && !downvoted\">\n            <i class=\"fas fa-arrow-up fa-lg upvote\" (click)=\"upvote()\"></i>\n            <h5 class=\"votecount\">{{ formatVotes() }}</h5>\n            <i class=\"fas fa-arrow-down fa-lg downvote\" (click)=\"downvote()\"></i>\n          </div>\n\n          <div *ngIf=\"downvoted\">\n            <i class=\"fas fa-arrow-up fa-lg upvote\" (click)=\"upvote()\"></i>\n            <h5 class=\"votecount\">{{ formatVotes() }}</h5>\n            <i class=\"fas fa-arrow-down fa-lg downvoted\" (click)=\"downvote()\"></i>\n          </div>\n\n          <div *ngIf=\"upvoted\">\n            <i class=\"fas fa-arrow-up f062 fa-lg upvoted\" (click)=\"upvote()\"></i>\n            <h5 class=\"votecount\">{{ formatVotes() }}</h5>\n            <i class=\"fas fa-arrow-down fa-lg downvote\" (click)=\"downvote()\"></i>\n          </div>\n\n        </div>\n        <div class=\"info-end col\">\n          <div class=\"author\">\n            Written by: <a href=\"/account/view/{{author}}\">{{ author }}</a>\n          </div>\n          <div class=\"date\">\n            {{ created }}\n          </div>\n          <div class=\"post-btns\" *ngIf=\"CurrentUser.username == author\">\n            <button class=\"btn btn-info\" (click)=\"edit()\">Edit</button>&nbsp;\n            <button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/viewpost/viewpost.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/viewpost/viewpost.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpostComponent", function() { return ViewpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./src/app/components/models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewpostComponent = /** @class */ (function () {
    function ViewpostComponent(postService, authService, route, sanitizer) {
        var _this = this;
        this.postService = postService;
        this.authService = authService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.CurrentUser = new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        postService.getPostById(this.id).subscribe(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            _this.title = response.title;
            _this.body = sanitizer.bypassSecurityTrustHtml(response.body);
            _this.author = response.author;
            _this.votes = response.votes;
            _this.voters = response.voters;
            // Convert GMT time to dd-mm-yy
            var year = response.created.split("T")[0].split("-")[2];
            var month = response.created.split("T")[0].split("-")[1];
            var day = response.created.split("T")[0].split("-")[0];
            _this.created = year + "-" + month + "-" + day;
            authService.isAuthenticated().subscribe(function (data) {
                var userData = JSON.parse(JSON.stringify(data));
                if (userData.authenticated) {
                    _this.authenticated = true;
                }
                if (userData.username) {
                    _this.CurrentUser.username = userData.username;
                }
                _this.setVote();
            }, function (err) {
                console.log(err);
                throw err;
            });
        }, function (err) {
            console.log(err);
            throw err;
        });
    }
    ViewpostComponent.prototype.delete = function () {
        if (this.CurrentUser.username == this.author) {
            if (confirm("Are you sure you want to delete this post?")) {
                this.postService.deletePost(this.id).subscribe(function (data) {
                    var response = JSON.parse(JSON.stringify(data));
                    if (response.success) {
                        alert("Post Deleted Successfully");
                        window.location.href = "/";
                    }
                });
            }
        }
        else {
            alert("You do not own this post!");
        }
    };
    ViewpostComponent.prototype.edit = function () {
        if (this.CurrentUser.username == this.author) {
            this.postService.editPost(this.id);
        }
        else {
            alert("You do not own this post!");
        }
    };
    ViewpostComponent.prototype.formatVotes = function () {
        if (this.votes >= 1000 && this.votes <= 9999) {
            var thousandDisplayVote = (this.votes / 100).toString();
            var each = thousandDisplayVote.split(""); //Seperate the numbers into seperate characters
            thousandDisplayVote = each[0] + "." + each[1] + "k";
            return thousandDisplayVote;
        }
        else if (this.votes >= 10000 && this.votes <= 99999) {
            var thousandDisplayVote = (this.votes / 100).toString();
            var each = thousandDisplayVote.split(""); //Seperate the numbers into seperate characters
            thousandDisplayVote = each[0] + each[1] + "." + each[2] + "k";
            return thousandDisplayVote;
        }
        else if (this.votes >= 100000 && this.votes <= 999999) {
            var thousandDisplayVote = (this.votes / 100).toString();
            var each = thousandDisplayVote.split(""); //Seperate the numbers into seperate characters
            thousandDisplayVote = each[0] + each[1] + each[2] + "." + each[3] + "k";
            return thousandDisplayVote;
        }
        else if (this.votes >= 1000000 && this.votes <= 9999999) {
            var millionDisplayVote = (this.votes / 100000).toString();
            var each = millionDisplayVote.split(""); //Seperate the numbers into seperate characters
            millionDisplayVote = each[0] + "." + each[1] + "m";
            return millionDisplayVote;
        }
        else if (this.votes >= 10000000 && this.votes <= 99999999) {
            var millionDisplayVote = (this.votes / 100000).toString();
            var each = millionDisplayVote.split(""); //Seperate the numbers into seperate characters
            millionDisplayVote = each[0] + each[1] + "." + each[2] + "m";
            return millionDisplayVote;
        }
        else if (this.votes >= 100000000 && this.votes <= 999999999) {
            var millionDisplayVote = (this.votes / 100000).toString();
            var each = millionDisplayVote.split(""); //Seperate the numbers into seperate characters
            millionDisplayVote = each[0] + each[1] + each[2] + "." + each[3] + "m";
            return millionDisplayVote;
        }
        else if (this.votes > 999999999) {
            return "Limit exceeded";
        }
        else {
            return this.votes;
        }
        // Went completely insane yet?
    };
    ViewpostComponent.prototype.upvote = function () {
        var _this = this;
        if (this.validated()) {
            if (!this.voted()) {
                this.voters.push({ user: this.CurrentUser.username, vote: "up" });
                this.postService.upvote(this.CurrentUser.username, this.id, 1).subscribe();
                this.votes++;
                this.setVote();
            }
            else {
                this.voters.forEach(function (voter) {
                    if (voter.user == _this.CurrentUser.username) {
                        if (voter.vote == "down") {
                            voter.vote = "up";
                            _this.postService.upvote(_this.CurrentUser.username, _this.id, 2).subscribe();
                            _this.votes += 2;
                            _this.setVote();
                        }
                        else if (voter.vote == "up") {
                            voter.vote = "";
                            _this.postService.downvote(_this.CurrentUser.username, _this.id, 1).subscribe();
                            _this.votes--;
                            _this.setVote();
                        }
                        else {
                            voter.vote = "up";
                            _this.postService.upvote(_this.CurrentUser.username, _this.id, 1).subscribe();
                            _this.votes++;
                            _this.setVote();
                        }
                    }
                });
            }
        }
    };
    ViewpostComponent.prototype.downvote = function () {
        var _this = this;
        if (this.validated()) {
            if (!this.voted()) {
                this.voters.push({ user: this.CurrentUser.username, vote: "down" });
                this.postService.downvote(this.CurrentUser.username, this.id, 1);
                this.votes--;
                this.setVote();
            }
            else {
                this.voters.forEach(function (voter) {
                    if (voter.user == _this.CurrentUser.username) {
                        if (voter.vote == "up") {
                            voter.vote = "down";
                            _this.postService.downvote(_this.CurrentUser.username, _this.id, 2).subscribe();
                            _this.votes -= 2;
                            _this.setVote();
                        }
                        else if (voter.vote == "down") {
                            voter.vote = "";
                            _this.postService.upvote(_this.CurrentUser.username, _this.id, 1).subscribe();
                            _this.votes++;
                            _this.setVote();
                        }
                        else {
                            voter.vote = "down";
                            _this.postService.downvote(_this.CurrentUser.username, _this.id, 1).subscribe();
                            _this.votes--;
                            _this.setVote();
                        }
                    }
                });
            }
        }
    };
    ViewpostComponent.prototype.validated = function () {
        if (!this.authenticated) {
            alert("You must be logged in to perform this action.");
            return false;
        }
        if (this.author == this.CurrentUser.username) {
            alert("You can't vote on your own post.");
            return false;
        }
        return true;
    };
    ViewpostComponent.prototype.voted = function () {
        for (var i = 0; i < this.voters.length; i++) {
            if (this.voters[i].user == this.CurrentUser.username) {
                return true;
            }
        }
        return false;
    };
    ViewpostComponent.prototype.setVote = function () {
        var _this = this;
        this.voters.forEach(function (voter) {
            if (voter.user == _this.CurrentUser.username) {
                if (voter.vote == "up") {
                    _this.upvoted = true;
                    _this.downvoted = false;
                }
                else if (voter.vote == "down") {
                    _this.upvoted = false;
                    _this.downvoted = true;
                }
                else {
                    _this.upvoted = false;
                    _this.downvoted = false;
                }
            }
        });
    };
    ViewpostComponent.prototype.ngOnInit = function () {
    };
    ViewpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewpost',
            template: __webpack_require__(/*! ./viewpost.component.html */ "./src/app/components/viewpost/viewpost.component.html"),
            styles: [__webpack_require__(/*! ./viewpost.component.css */ "./src/app/components/viewpost/viewpost.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ViewpostComponent);
    return ViewpostComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isUnique = function (user) {
        return this.http.post("/api/auth/unique", user);
    };
    AuthService.prototype.register = function (user) {
        return this.http.post("/api/auth/register", user);
    };
    AuthService.prototype.login = function (user) {
        return this.http.post("/api/auth/login", user);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.http.get("/api/auth/authenticated");
    };
    AuthService.prototype.getByUsername = function (username) {
        return this.http.post("/api/auth/username", { username: username });
    };
    AuthService.prototype.delete = function (user) {
        return this.http.request("delete", "/api/auth/delete", { body: user });
    };
    AuthService.prototype.update = function (user) {
        return this.http.post("/api/auth/update", user);
    };
    AuthService.prototype.setPostCount = function (user) {
        return this.http.post("/api/auth/postcount", user);
    };
    AuthService.prototype.setVoteCount = function (user) {
        return this.http.post("/api/auth/votecount", user);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getPosts = function () {
        return this.http.get("/api/posts/all");
    };
    PostService.prototype.getPostById = function (id) {
        return this.http.post("/api/posts/id", { id: id });
    };
    PostService.prototype.getPostsByUser = function (username) {
        return this.http.post("/api/posts/username", { username: username });
    };
    PostService.prototype.addPost = function (post) {
        var xhr = new XMLHttpRequest;
        xhr.open('POST', '/api/posts/add', true);
        xhr.send(post);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                window.location.href = "/";
            }
        };
    };
    PostService.prototype.updatePost = function (post) {
        var xhr = new XMLHttpRequest;
        xhr.open('POST', '/api/posts/update', true);
        xhr.send(post);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert("Post Updated Successfully");
                window.location.href = "/";
            }
        };
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.request("delete", "/api/posts/delete", { body: { id: id } });
    };
    PostService.prototype.editPost = function (id) {
        window.location.href = "/posts/edit/" + id;
    };
    PostService.prototype.upvote = function (voter, postId, num) {
        return this.http.post("/api/posts/upvote", { voter: voter, id: postId, num: num });
    };
    PostService.prototype.downvote = function (voter, postId, num) {
        return this.http.post("/api/posts/downvote", { voter: voter, id: postId, num: num });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././src/app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\CodingMain\Finished Projects\Age_14-17\websites_webapps\TechFeed_SEO_Test\TechFeed\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map