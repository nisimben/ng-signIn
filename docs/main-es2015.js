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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/sign-in/sign-in.component */ "./src/app/register/sign-in/sign-in.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");






const routes = [
    { path: '', component: _register_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Slack';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/sign-in/sign-in.component */ "./src/app/register/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _register_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]], exports: [_register_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _register_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                exports: [_register_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 2, vars: 0, template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chat works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/register/sign-in/sign-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/register/sign-in/sign-in.component.ts ***!
  \*******************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class SignInComponent {
    constructor(fb) {
        this.fb = fb;
        this.signInFromG = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            remember: ['']
        });
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.signInFromG.value);
    }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 68, vars: 2, consts: [[1, "align_center", "real_content", "card", "span_4_of_6", "col", "float_none", "margin_auto", "large_bottom_margin", "right_padding", "large_bottom_padding"], ["id", "signin_header", "data-qa", "signin_header", 1, "tiny_bottom_margin"], [1, "break_word"], [1, "medium_bottom_margin"], [1, "col", "span_4_of_6", "float_none", "margin_auto", "signin_card"], [1, "p-autoclog__hook"], ["type", "button", "id", "google_login_button", "data-style", "expand-right", "data-qa", "base_google_login_button", "aria-disabled", "false", 1, "c-button", "c-button--primary", "c-button--large", "c-google_login", "full_width", "null--primary", "null--large"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 48 48", 1, "c-google_login__icon"], ["fill", "#EA4335", "d", "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"], ["fill", "#4285F4", "d", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"], ["fill", "#FBBC05", "d", "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"], ["fill", "#34A853", "d", "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"], ["fill", "none", "d", "M0 0h48v48H0z"], [1, "c-google_login__label"], [1, "c-infinite_spinner", "c-button-loading__spinner", "c-button--loading_spinner--hidden", "c-infinite_spinner--medium", "c-infinite_spinner--blue"], ["viewBox", "0 0 78 78", 1, "c-infinite_spinner__spinner"], ["cx", "50%", "cy", "50%", "r", "35", 1, "c-infinite_spinner__bg"], ["cx", "50%", "cy", "50%", "r", "35", 1, "c-infinite_spinner__path"], ["viewBox", "0 0 78 78", 1, "c-infinite_spinner__spinner", "c-infinite_spinner__tail"], ["aria-live", "polite", 1, "offscreen"], [1, "c-horizontal_content_rule", "margin_top_150", "margin_bottom_150"], [1, "c-horizontal_content_rule__leftrule"], [1, "c-horizontal_content_rule__content"], [1, "c-horizontal_content_rule__rightrule"], ["id", "signin_form", 3, "formGroup", "ngSubmit"], ["type", "hidden", "name", "signin", "value", "1"], ["type", "hidden", "name", "redir", "value", ""], ["type", "hidden", "name", "has_remember", "value", "true"], ["type", "hidden", "name", "crumb", "value", "s-1594647111-b8d99325a5873f2ffdf04b26882a0e232af04646a30318f7963a26d366586681-\u2603"], [1, "browser_password", "align_left"], [1, "no_bottom_margin"], ["formControlName", "email", "type", "email", "id", "email", "name", "email", "size", "40", "placeholder", "you@example.com"], [1, "small_bottom_margin"], ["formControlName", "password", "type", "password", "id", "password", "name", "password", "data-qa", "login_password", "size", "40", "placeholder", "password", "value", ""], ["routerLink", "/chat", "type", "submit", "id", "signin_btn", "data-style", "expand-right", 1, "c-button", "c-button--primary", "c-button--large", "btn", "btn_large", "small_top_margin", "full_width", "submit-button", "null--primary", "null--large", 3, "disabled"], [1, "ladda-label"], [1, "align_left"], ["for", "signin_form", 1, "checkbox", "normal", "inline_block", "small_right_margin"], ["type", "checkbox", "name", "remember", "data-qa", "remember_me_check", "checked", ""], [1, "align_left", "small_top_margin"], ["target", "_self", "id", "forgot-pw", "data-qa", "forgot_password_link", "href", "/forgot", "rel", "noopener noreferrer", 1, "c-link"], ["target", "_self", "data-qa", "forgot_email_link", "href", "https://slack.com/get-started#/find", "rel", "noopener noreferrer", 1, "c-link"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign in to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Continue with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_30_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Enter your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \uFFFD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Forgot which email you used?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInFromG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signInFromG.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font-family:inherit;}\r\n.float_none[_ngcontent-%COMP%]{float:none!important;}\r\n.offscreen[_ngcontent-%COMP%]{position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;}\r\n.inline_block[_ngcontent-%COMP%]{display:inline-block!important;}\r\n.align_left[_ngcontent-%COMP%]{text-align:left!important;}\r\n.align_center[_ngcontent-%COMP%]{text-align:center!important;}\r\n.normal[_ngcontent-%COMP%]{font-weight:400!important;}\r\n.break_word[_ngcontent-%COMP%]{word-wrap:break-word;}\r\n.full_width[_ngcontent-%COMP%]{width:100%!important;max-width:100%!important;}\r\n.no_bottom_margin[_ngcontent-%COMP%]{margin-bottom:0!important;}\r\n.tiny_bottom_margin[_ngcontent-%COMP%]{margin-bottom:.1rem!important;}\r\n.small_top_margin[_ngcontent-%COMP%]{margin-top:.5rem!important;}\r\n.small_bottom_margin[_ngcontent-%COMP%]{margin-bottom:.5rem!important;}\r\n.small_right_margin[_ngcontent-%COMP%]{margin-right:.5rem!important;}\r\n.medium_bottom_margin[_ngcontent-%COMP%]{margin-bottom:1.5rem!important;}\r\n.large_bottom_margin[_ngcontent-%COMP%]{margin-bottom:2rem!important;}\r\n.margin_auto[_ngcontent-%COMP%]{margin-left:auto!important;margin-right:auto!important;}\r\n.right_padding[_ngcontent-%COMP%]{padding-right:1rem!important;}\r\n.large_bottom_padding[_ngcontent-%COMP%]{padding-bottom:2rem!important;}\r\n*[_ngcontent-%COMP%]{-ms-box-sizing:border-box;box-sizing:border-box;}\r\nh1[_ngcontent-%COMP%]{font-weight:700;font-family:Slack-Lato,appleLogo,sans-serif;margin:0 0 1rem;}\r\nh1[_ngcontent-%COMP%]{font-size:2rem;line-height:2.5rem;letter-spacing:-1px;}\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited{color:#1264a3;text-decoration:none;}\r\na[_ngcontent-%COMP%]:active{color:#1264a3;}\r\np[_ngcontent-%COMP%]{margin:0 0 1rem;}\r\nhr[_ngcontent-%COMP%]{border:none;border-top:1px solid #ddd;margin:2rem auto;clear:both;}\r\n@media only screen and (max-width:640px){\r\nh1[_ngcontent-%COMP%]{font-size:1.75rem;line-height:2rem;}\r\n}\r\n.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:.25rem;box-shadow:0 1px 0 rgba(0,0,0,.25);padding:2rem 2rem 1rem;margin:0 auto 2rem;position:relative;border:1px solid #ddd;}\r\n@media only screen and (max-width:640px){\r\n.card[_ngcontent-%COMP%]{padding:1rem;}\r\n}\r\n.col[_ngcontent-%COMP%]{display:block;float:left;margin:0 0 2%;padding-right:2%;}\r\n.col[_ngcontent-%COMP%] + .col[_ngcontent-%COMP%]{margin-left:1.6%;}\r\n.span_4_of_6[_ngcontent-%COMP%]{width:66.13%;}\r\n@media only screen and (max-width:767px){\r\n.col[_ngcontent-%COMP%]:not(.mobile_col){margin:0 0 2%;width:100%!important;padding-right:0;}\r\n.col[_ngcontent-%COMP%] + .col[_ngcontent-%COMP%]{margin-left:0;}\r\n}\r\n.btn[_ngcontent-%COMP%]{background:#007a5a;color:#fff;transition:all 75ms ease-in-out;line-height:1.2rem;font-weight:900;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;text-shadow:none;border:none;border-radius:.25rem;box-shadow:none;position:relative;display:inline-block;vertical-align:bottom;text-align:center;white-space:nowrap;margin:0;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;}\r\n.btn[_ngcontent-%COMP%]:after{position:absolute;content:'';top:0;right:0;bottom:0;left:0;border-radius:.25rem;}\r\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:hover{background:#007a5a;box-shadow:0 1px 4px rgba(0,0,0,.3);color:#fff;transition:all 75ms ease-in-out;}\r\n.btn[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #1264a3,0 0 0 5px rgba(29,155,209,.3);border-radius:4px;}\r\n.btn[_ngcontent-%COMP%]:active{background:#037053;color:#fff;}\r\n.btn[_ngcontent-%COMP%]:disabled, .btn[_ngcontent-%COMP%]:disabled:active, .btn[_ngcontent-%COMP%]:disabled:hover{background-color:#ddd!important;color:rgba(29,28,29,.75);box-shadow:none!important;pointer-events:none;}\r\n.btn[_ngcontent-%COMP%]{padding:8px 14px 9px;font-size:15px;}\r\n.btn_large[_ngcontent-%COMP%]{padding:14px 32px 16px;font-size:20px;}\r\n@media only screen and (max-width:640px){\r\n.btn_large[_ngcontent-%COMP%]{padding:14px 20px 16px;}\r\n}\r\ninput[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{font-size:1.25rem;line-height:normal;padding:.75rem;border:1px solid #868686;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;color:#1d1c1d;width:100%;max-width:100%;margin:0 0 .5rem;font-variant-ligatures:none;transition:box-shadow 70ms ease-out,border-color 70ms ease-out;box-shadow:none;height:auto;}\r\ninput[type=email][_ngcontent-%COMP%]::-ms-clear, input[type=password][_ngcontent-%COMP%]::-ms-clear{display:none;}\r\ninput[type=email][_ngcontent-%COMP%]:active, input[type=email][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:active, input[type=password][_ngcontent-%COMP%]:focus{border-color:#616061;outline-offset:0;outline:0;box-shadow:none;}\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#868686;}\r\n[_ngcontent-%COMP%]:-moz-placeholder{color:#868686;}\r\n[_ngcontent-%COMP%]::-moz-placeholder{color:#868686;}\r\n[_ngcontent-%COMP%]:-ms-input-placeholder{color:#868686;}\r\ninput[_ngcontent-%COMP%]:disabled, input[_ngcontent-%COMP%]:disabled:active{background:#f8f8f8;border-color:#868686!important;box-shadow:none;color:#616061;}\r\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{float:none;}\r\nlabel[_ngcontent-%COMP%]{font-weight:700;margin:0 0 .25rem;display:block;font-size:1rem;line-height:1.5rem;}\r\nlabel.checkbox[_ngcontent-%COMP%]{padding-left:1.5rem;cursor:pointer;}\r\nlabel.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{margin:-2px .4rem 0 -1.5rem;vertical-align:middle;}\r\n\r\n.p-autoclog__hook[_ngcontent-%COMP%]{display:contents;}\r\n.c-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;border:none;border-radius:4px;align-items:center;position:relative;display:inline-flex;justify-content:center;text-align:center;white-space:nowrap;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;}\r\n.c-button[_ngcontent-%COMP%], .c-button[_ngcontent-%COMP%]:active, .c-button[_ngcontent-%COMP%]:focus, .c-button[_ngcontent-%COMP%]:hover{text-decoration:none;}\r\n.c-button--primary[_ngcontent-%COMP%]{transition:all 80ms linear;background:#007a5a;color:#fff;font-weight:900;box-shadow:none;}\r\n.c-button--primary[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;right:0;bottom:0;left:0;border-radius:4px;}\r\n.c-button--primary[_ngcontent-%COMP%]:link, .c-button--primary[_ngcontent-%COMP%]:visited{color:#fff;}\r\n.c-button--primary[_ngcontent-%COMP%]:hover{color:#fff;background:#148567;box-shadow:0 1px 4px rgba(0,0,0,.3);}\r\n.c-button--primary[_ngcontent-%COMP%]:active{background:#006e51;box-shadow:none;}\r\n.c-button--large[_ngcontent-%COMP%]{font-size:18px;font-weight:900;height:44px;min-width:96px;padding:0 16px 3px;}\r\n.c-infinite_spinner[_ngcontent-%COMP%]{position:relative;margin:0 auto;}\r\n.c-infinite_spinner--medium[_ngcontent-%COMP%]{width:18px;height:18px;}\r\n.c-infinite_spinner__spinner[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;transform:rotate(-45deg);-webkit-animation:c-infinite_spinner__spin 1.2s cubic-bezier(.25,.29,.54,.86) 0s infinite normal none;animation:c-infinite_spinner__spin 1.2s cubic-bezier(.25,.29,.54,.86) 0s infinite normal none;}\r\n.c-infinite_spinner__tail[_ngcontent-%COMP%]{-webkit-animation:c-infinite_spinner__spin 1.2s cubic-bezier(.41,.24,.64,.69) 0s infinite normal none;animation:c-infinite_spinner__spin 1.2s cubic-bezier(.41,.24,.64,.69) 0s infinite normal none;}\r\n.c-infinite_spinner__bg[_ngcontent-%COMP%]{fill:none;opacity:.2;stroke-width:8;stroke:grey;}\r\n.c-infinite_spinner__path[_ngcontent-%COMP%]{fill:none;stroke-width:8;stroke-dasharray:55,200;stroke-dashoffset:90;stroke-linecap:round;}\r\n.c-infinite_spinner--blue[_ngcontent-%COMP%]   .c-infinite_spinner__path[_ngcontent-%COMP%]{stroke:#50acf4;}\r\n.c-button-loading__spinner[_ngcontent-%COMP%]{margin-right:0;margin-left:0;transition:width 80ms linear;}\r\n.c-button--loading_spinner--hidden[_ngcontent-%COMP%]{width:0;}\r\n.c-google_login[_ngcontent-%COMP%]{background-color:#fff;border:2px solid #4285f4;color:#4285f4;display:flex;padding:0;}\r\n.c-google_login[_ngcontent-%COMP%]:focus{--saf-0:rgba(var(--sk_highlight,18,100,163),1);box-shadow:0 0 0 1px var(--saf-0),0 0 0 5px rgba(29,155,209,.3);border-radius:4px;}\r\n.c-google_login[_ngcontent-%COMP%]:active, .c-google_login[_ngcontent-%COMP%]:hover{background-color:#fff;color:#4285f4;box-shadow:0 1px 4px rgba(0,0,0,.3);}\r\n.c-google_login[_ngcontent-%COMP%]::-moz-selection{background:#ddd;}\r\n.c-google_login[_ngcontent-%COMP%]::selection{background:#ddd;}\r\n.c-google_login[_ngcontent-%COMP%]   .c-infinite_spinner__path[_ngcontent-%COMP%]{stroke:#4285f4;}\r\n.c-google_login__icon[_ngcontent-%COMP%]{margin-right:12px;width:18px;height:18px;}\r\n.c-horizontal_content_rule[_ngcontent-%COMP%]{align-items:center;display:flex;}\r\n.c-horizontal_content_rule__leftrule[_ngcontent-%COMP%], .c-horizontal_content_rule__rightrule[_ngcontent-%COMP%]{flex-grow:1;margin:0;}\r\n.c-horizontal_content_rule__content[_ngcontent-%COMP%]{padding:0 20px;}\r\n\r\nform[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0;}\r\nh1[_ngcontent-%COMP%]{font-weight:400;}\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:inherit;}\r\na[_ngcontent-%COMP%]{color:#1264a3;text-decoration:none;}\r\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{color:#0b4c8c;text-decoration:underline;}\r\nh1[_ngcontent-%COMP%]{font-size:28px;line-height:1.2143;font-weight:900;}\r\np[_ngcontent-%COMP%]{margin-bottom:16px;}\r\nhr[_ngcontent-%COMP%]{border:none;border-top:1px solid #ddd;clear:both;margin-bottom:16px;}\r\nbutton[_ngcontent-%COMP%]{padding:0;background-color:transparent;border-width:0;cursor:pointer;}\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font-family:inherit;}\r\n\r\n.normal[_ngcontent-%COMP%]{font-weight:400;}\r\n.break_word[_ngcontent-%COMP%]{word-wrap:break-word;}\r\n.float_none[_ngcontent-%COMP%]{float:none;}\r\n.offscreen[_ngcontent-%COMP%]{position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\r\n.inline_block[_ngcontent-%COMP%]{display:inline-block;}\r\n.align_left[_ngcontent-%COMP%]{text-align:left;}\r\n.align_center[_ngcontent-%COMP%]{text-align:center;}\r\n.full_width[_ngcontent-%COMP%]{width:100%;max-width:100%;}\r\n.margin_top_150[_ngcontent-%COMP%]{margin-top:24px;}\r\n.margin_bottom_150[_ngcontent-%COMP%]{margin-bottom:24px;}\r\n.no_bottom_margin[_ngcontent-%COMP%]{margin-bottom:0;}\r\n.tiny_bottom_margin[_ngcontent-%COMP%]{margin-bottom:1.6px;}\r\n.small_top_margin[_ngcontent-%COMP%]{margin-top:8px;}\r\n.small_bottom_margin[_ngcontent-%COMP%]{margin-bottom:8px;}\r\n.small_right_margin[_ngcontent-%COMP%]{margin-right:8px;}\r\n.large_bottom_margin[_ngcontent-%COMP%]{margin-bottom:24px;}\r\n.margin_auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;}\r\n.right_padding[_ngcontent-%COMP%]{padding-right:16px;}\r\n.large_bottom_padding[_ngcontent-%COMP%]{padding-bottom:24px;}\r\n\r\n@-webkit-keyframes c-infinite_spinner__spin{0%{transform:rotate(0deg);}to{transform:rotate(1turn);}}\r\n@keyframes c-infinite_spinner__spin{0%{transform:rotate(0deg);}to{transform:rotate(1turn);}}\r\n\r\n@font-face{font-family:Slack-Lato;font-style:normal;font-weight:300;src:local('Slack-Lato'),url(https://a.slack-edge.com/80588/fonts/lato-2-compressed/lato-light.woff2) format('woff2'),url(https://a.slack-edge.com/80588/fonts/lato-2/lato-light.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF;}\r\n@font-face{font-family:Slack-Lato;font-style:italic;font-weight:900;src:local('Slack-Lato'),url(https://a.slack-edge.com/80588/fonts/lato-2-compressed/lato-italic-black.woff2) format('woff2'),url(https://a.slack-edge.com/80588/fonts/lato-2/lato-italic-black.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF;}\r\n@font-face{font-family:appleLogo;src:local(\"Lucida Grande\");unicode-range:U+F8FF;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQWEsbUJBQW1CLENBQUM7QUFDakMsWUFBWSxvQkFBb0IsQ0FBQztBQUNqQyxXQUFXLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ3BILGNBQWMsOEJBQThCLENBQUM7QUFDN0MsWUFBWSx5QkFBeUIsQ0FBQztBQUN0QyxjQUFjLDJCQUEyQixDQUFDO0FBQzFDLFFBQVEseUJBQXlCLENBQUM7QUFDbEMsWUFBWSxvQkFBb0IsQ0FBQztBQUNqQyxZQUFZLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDO0FBQzFELGtCQUFrQix5QkFBeUIsQ0FBQztBQUM1QyxvQkFBb0IsNkJBQTZCLENBQUM7QUFDbEQsa0JBQWtCLDBCQUEwQixDQUFDO0FBQzdDLHFCQUFxQiw2QkFBNkIsQ0FBQztBQUNuRCxvQkFBb0IsNEJBQTRCLENBQUM7QUFDakQsc0JBQXNCLDhCQUE4QixDQUFDO0FBQ3JELHFCQUFxQiw0QkFBNEIsQ0FBQztBQUNsRCxhQUFhLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDO0FBQ3BFLGVBQWUsNEJBQTRCLENBQUM7QUFDNUMsc0JBQXNCLDZCQUE2QixDQUFDO0FBQ3BELEVBQUUseUJBQXlCLENBQTBELHFCQUFxQixDQUFDO0FBQzNHLEdBQUcsZUFBZSxDQUFDLDJDQUEyQyxDQUFDLGVBQWUsQ0FBQztBQUMvRSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUN6RCxtQkFBbUIsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBQ3RELFNBQVMsYUFBYSxDQUFDO0FBQ3ZCLEVBQUUsZUFBZSxDQUFDO0FBQ2xCLEdBQUcsV0FBVyxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FB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QztBQUNoQyxZQUFZLFVBQVUsQ0FBQyxjQUFjLENBQUM7QUFDdEMsZ0JBQWdCLGVBQWUsQ0FBQztBQUNoQyxtQkFBbUIsa0JBQWtCLENBQUM7QUFDdEMsa0JBQWtCLGVBQWUsQ0FBQztBQUNsQyxvQkFBb0IsbUJBQW1CLENBQUM7QUFDeEMsa0JBQWtCLGNBQWMsQ0FBQztBQUNqQyxxQkFBcUIsaUJBQWlCLENBQUM7QUFDdkMsb0JBQW9CLGdCQUFnQixDQUFDO0FBQ3JDLHFCQUFxQixrQkFBa0IsQ0FBQztBQUN4QyxhQUFhLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBQ2hELGVBQWUsa0JBQWtCLENBQUM7QUFDbEMsc0JBQXNCLG1CQUFtQixDQUFDO0FBQzFDLHdCQUF3QjtBQUN4Qiw0Q0FBb0MsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztBQUEzRixvQ0FBb0MsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztBQUMzRix3QkFBd0I7QUFDeEIsV0FBVyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsb01BQW9NLENBQUMscUNBQXFDLENBQUM7QUFDL1MsV0FBVyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsa05BQWtOLENBQUMscUNBQXFDLENBQUM7QUFDN1QsV0FBVyxxQkFBcUIsQ0FBQywwQkFBMEIsQ0FBQyxvQkFBb0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJ1dHRvbixpbnB1dHtmb250LWZhbWlseTppbmhlcml0O31cclxuLmZsb2F0X25vbmV7ZmxvYXQ6bm9uZSFpbXBvcnRhbnQ7fVxyXG4ub2Zmc2NyZWVue3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7bWFyZ2luOi0xcHg7cGFkZGluZzowO2JvcmRlcjowO31cclxuLmlubGluZV9ibG9ja3tkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnQ7fVxyXG4uYWxpZ25fbGVmdHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50O31cclxuLmFsaWduX2NlbnRlcnt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7fVxyXG4ubm9ybWFse2ZvbnQtd2VpZ2h0OjQwMCFpbXBvcnRhbnQ7fVxyXG4uYnJlYWtfd29yZHt3b3JkLXdyYXA6YnJlYWstd29yZDt9XHJcbi5mdWxsX3dpZHRoe3dpZHRoOjEwMCUhaW1wb3J0YW50O21heC13aWR0aDoxMDAlIWltcG9ydGFudDt9XHJcbi5ub19ib3R0b21fbWFyZ2lue21hcmdpbi1ib3R0b206MCFpbXBvcnRhbnQ7fVxyXG4udGlueV9ib3R0b21fbWFyZ2lue21hcmdpbi1ib3R0b206LjFyZW0haW1wb3J0YW50O31cclxuLnNtYWxsX3RvcF9tYXJnaW57bWFyZ2luLXRvcDouNXJlbSFpbXBvcnRhbnQ7fVxyXG4uc21hbGxfYm90dG9tX21hcmdpbnttYXJnaW4tYm90dG9tOi41cmVtIWltcG9ydGFudDt9XHJcbi5zbWFsbF9yaWdodF9tYXJnaW57bWFyZ2luLXJpZ2h0Oi41cmVtIWltcG9ydGFudDt9XHJcbi5tZWRpdW1fYm90dG9tX21hcmdpbnttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnQ7fVxyXG4ubGFyZ2VfYm90dG9tX21hcmdpbnttYXJnaW4tYm90dG9tOjJyZW0haW1wb3J0YW50O31cclxuLm1hcmdpbl9hdXRve21hcmdpbi1sZWZ0OmF1dG8haW1wb3J0YW50O21hcmdpbi1yaWdodDphdXRvIWltcG9ydGFudDt9XHJcbi5yaWdodF9wYWRkaW5ne3BhZGRpbmctcmlnaHQ6MXJlbSFpbXBvcnRhbnQ7fVxyXG4ubGFyZ2VfYm90dG9tX3BhZGRpbmd7cGFkZGluZy1ib3R0b206MnJlbSFpbXBvcnRhbnQ7fVxyXG4qey1tcy1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O31cclxuaDF7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtZmFtaWx5OlNsYWNrLUxhdG8sYXBwbGVMb2dvLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxcmVtO31cclxuaDF7Zm9udC1zaXplOjJyZW07bGluZS1oZWlnaHQ6Mi41cmVtO2xldHRlci1zcGFjaW5nOi0xcHg7fVxyXG5hLGE6bGluayxhOnZpc2l0ZWR7Y29sb3I6IzEyNjRhMzt0ZXh0LWRlY29yYXRpb246bm9uZTt9XHJcbmE6YWN0aXZle2NvbG9yOiMxMjY0YTM7fVxyXG5we21hcmdpbjowIDAgMXJlbTt9XHJcbmhye2JvcmRlcjpub25lO2JvcmRlci10b3A6MXB4IHNvbGlkICNkZGQ7bWFyZ2luOjJyZW0gYXV0bztjbGVhcjpib3RoO31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KXtcclxuaDF7Zm9udC1zaXplOjEuNzVyZW07bGluZS1oZWlnaHQ6MnJlbTt9XHJcbn1cclxuLmNhcmR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6LjI1cmVtO2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLC4yNSk7cGFkZGluZzoycmVtIDJyZW0gMXJlbTttYXJnaW46MCBhdXRvIDJyZW07cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KXtcclxuLmNhcmR7cGFkZGluZzoxcmVtO31cclxufVxyXG4uY29se2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDttYXJnaW46MCAwIDIlO3BhZGRpbmctcmlnaHQ6MiU7fVxyXG4uY29sKy5jb2x7bWFyZ2luLWxlZnQ6MS42JTt9XHJcbi5zcGFuXzRfb2ZfNnt3aWR0aDo2Ni4xMyU7fVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4uY29sOm5vdCgubW9iaWxlX2NvbCl7bWFyZ2luOjAgMCAyJTt3aWR0aDoxMDAlIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OjA7fVxyXG4uY29sKy5jb2x7bWFyZ2luLWxlZnQ6MDt9XHJcbn1cclxuLmJ0bntiYWNrZ3JvdW5kOiMwMDdhNWE7Y29sb3I6I2ZmZjt0cmFuc2l0aW9uOmFsbCA3NW1zIGVhc2UtaW4tb3V0O2xpbmUtaGVpZ2h0OjEuMnJlbTtmb250LXdlaWdodDo5MDA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpwb2ludGVyO3RleHQtc2hhZG93Om5vbmU7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czouMjVyZW07Ym94LXNoYWRvdzpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmJvdHRvbTt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7bWFyZ2luOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O31cclxuLmJ0bjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OicnO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JvcmRlci1yYWRpdXM6LjI1cmVtO31cclxuLmJ0bjpmb2N1cywuYnRuOmhvdmVye2JhY2tncm91bmQ6IzAwN2E1YTtib3gtc2hhZG93OjAgMXB4IDRweCByZ2JhKDAsMCwwLC4zKTtjb2xvcjojZmZmO3RyYW5zaXRpb246YWxsIDc1bXMgZWFzZS1pbi1vdXQ7fVxyXG4uYnRuOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICMxMjY0YTMsMCAwIDAgNXB4IHJnYmEoMjksMTU1LDIwOSwuMyk7Ym9yZGVyLXJhZGl1czo0cHg7fVxyXG4uYnRuOmFjdGl2ZXtiYWNrZ3JvdW5kOiMwMzcwNTM7Y29sb3I6I2ZmZjt9XHJcbi5idG46ZGlzYWJsZWQsLmJ0bjpkaXNhYmxlZDphY3RpdmUsLmJ0bjpkaXNhYmxlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZGQhaW1wb3J0YW50O2NvbG9yOnJnYmEoMjksMjgsMjksLjc1KTtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmU7fVxyXG4uYnRue3BhZGRpbmc6OHB4IDE0cHggOXB4O2ZvbnQtc2l6ZToxNXB4O31cclxuLmJ0bl9sYXJnZXtwYWRkaW5nOjE0cHggMzJweCAxNnB4O2ZvbnQtc2l6ZToyMHB4O31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KXtcclxuLmJ0bl9sYXJnZXtwYWRkaW5nOjE0cHggMjBweCAxNnB4O31cclxufVxyXG5pbnB1dFt0eXBlPWVtYWlsXSxpbnB1dFt0eXBlPXBhc3N3b3JkXXtmb250LXNpemU6MS4yNXJlbTtsaW5lLWhlaWdodDpub3JtYWw7cGFkZGluZzouNzVyZW07Ym9yZGVyOjFweCBzb2xpZCAjODY4Njg2O2JvcmRlci1yYWRpdXM6LjI1cmVtOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtvdXRsaW5lOjA7Y29sb3I6IzFkMWMxZDt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO21hcmdpbjowIDAgLjVyZW07Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub25lOy13ZWJraXQtdHJhbnNpdGlvbjpib3gtc2hhZG93IDcwbXMgZWFzZS1vdXQsYm9yZGVyLWNvbG9yIDcwbXMgZWFzZS1vdXQ7LW1vei10cmFuc2l0aW9uOmJveC1zaGFkb3cgNzBtcyBlYXNlLW91dCxib3JkZXItY29sb3IgNzBtcyBlYXNlLW91dDt0cmFuc2l0aW9uOmJveC1zaGFkb3cgNzBtcyBlYXNlLW91dCxib3JkZXItY29sb3IgNzBtcyBlYXNlLW91dDtib3gtc2hhZG93Om5vbmU7aGVpZ2h0OmF1dG87fVxyXG5pbnB1dFt0eXBlPWVtYWlsXTo6LW1zLWNsZWFyLGlucHV0W3R5cGU9cGFzc3dvcmRdOjotbXMtY2xlYXJ7ZGlzcGxheTpub25lO31cclxuaW5wdXRbdHlwZT1lbWFpbF06YWN0aXZlLGlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLGlucHV0W3R5cGU9cGFzc3dvcmRdOmFjdGl2ZSxpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1c3tib3JkZXItY29sb3I6IzYxNjA2MTtvdXRsaW5lLW9mZnNldDowO291dGxpbmU6MDtib3gtc2hhZG93Om5vbmU7fVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6Izg2ODY4Njt9XHJcbjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiM4Njg2ODY7fVxyXG46Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6Izg2ODY4Njt9XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6Izg2ODY4Njt9XHJcbmlucHV0OmRpc2FibGVkLGlucHV0OmRpc2FibGVkOmFjdGl2ZXtiYWNrZ3JvdW5kOiNmOGY4Zjg7Ym9yZGVyLWNvbG9yOiM4Njg2ODYhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZTtjb2xvcjojNjE2MDYxO31cclxuLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hde2Zsb2F0Om5vbmU7fVxyXG5sYWJlbHtmb250LXdlaWdodDo3MDA7bWFyZ2luOjAgMCAuMjVyZW07ZGlzcGxheTpibG9jaztmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjVyZW07fVxyXG5sYWJlbC5jaGVja2JveHtwYWRkaW5nLWxlZnQ6MS41cmVtO2N1cnNvcjpwb2ludGVyO31cclxubGFiZWwuY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17bWFyZ2luOi0ycHggLjRyZW0gMCAtMS41cmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9XHJcbi8qISBDU1MgVXNlZCBmcm9tOiBodHRwczovL2Euc2xhY2stZWRnZS5jb20vYnYxLTgtNWY4YTYwNC9sb2dpbi1jb3JlLjk5ZDAwNDkzOWQwMDQ3MzQzZDBmLmJ1bmRsZS5jc3MgKi9cclxuLnAtYXV0b2Nsb2dfX2hvb2t7ZGlzcGxheTpjb250ZW50czt9XHJcbi5jLWJ1dHRvbnstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3V0bGluZTpub25lO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1mbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt9XHJcbi5jLWJ1dHRvbiwuYy1idXR0b246YWN0aXZlLC5jLWJ1dHRvbjpmb2N1cywuYy1idXR0b246aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7fVxyXG4uYy1idXR0b24tLXByaW1hcnl7dHJhbnNpdGlvbjphbGwgODBtcyBsaW5lYXI7YmFja2dyb3VuZDojMDA3YTVhO2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6OTAwO2JveC1zaGFkb3c6bm9uZTt9XHJcbi5jLWJ1dHRvbi0tcHJpbWFyeTphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlwiXCI7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7Ym9yZGVyLXJhZGl1czo0cHg7fVxyXG4uYy1idXR0b24tLXByaW1hcnk6bGluaywuYy1idXR0b24tLXByaW1hcnk6dmlzaXRlZHtjb2xvcjojZmZmO31cclxuLmMtYnV0dG9uLS1wcmltYXJ5OmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMTQ4NTY3O2JveC1zaGFkb3c6MCAxcHggNHB4IHJnYmEoMCwwLDAsLjMpO31cclxuLmMtYnV0dG9uLS1wcmltYXJ5OmFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDZlNTE7Ym94LXNoYWRvdzpub25lO31cclxuLmMtYnV0dG9uLS1sYXJnZXtmb250LXNpemU6MThweDtmb250LXdlaWdodDo5MDA7aGVpZ2h0OjQ0cHg7bWluLXdpZHRoOjk2cHg7cGFkZGluZzowIDE2cHggM3B4O31cclxuLmMtaW5maW5pdGVfc3Bpbm5lcntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MCBhdXRvO31cclxuLmMtaW5maW5pdGVfc3Bpbm5lci0tbWVkaXVte3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7fVxyXG4uYy1pbmZpbml0ZV9zcGlubmVyX19zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTthbmltYXRpb246Yy1pbmZpbml0ZV9zcGlubmVyX19zcGluIDEuMnMgY3ViaWMtYmV6aWVyKC4yNSwuMjksLjU0LC44NikgMHMgaW5maW5pdGUgbm9ybWFsIG5vbmU7fVxyXG4uYy1pbmZpbml0ZV9zcGlubmVyX190YWlse2FuaW1hdGlvbjpjLWluZmluaXRlX3NwaW5uZXJfX3NwaW4gMS4ycyBjdWJpYy1iZXppZXIoLjQxLC4yNCwuNjQsLjY5KSAwcyBpbmZpbml0ZSBub3JtYWwgbm9uZTt9XHJcbi5jLWluZmluaXRlX3NwaW5uZXJfX2Jne2ZpbGw6bm9uZTtvcGFjaXR5Oi4yO3N0cm9rZS13aWR0aDo4O3N0cm9rZTpncmV5O31cclxuLmMtaW5maW5pdGVfc3Bpbm5lcl9fcGF0aHtmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWRhc2hhcnJheTo1NSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6OTA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7fVxyXG4uYy1pbmZpbml0ZV9zcGlubmVyLS1ibHVlIC5jLWluZmluaXRlX3NwaW5uZXJfX3BhdGh7c3Ryb2tlOiM1MGFjZjQ7fVxyXG4uYy1idXR0b24tbG9hZGluZ19fc3Bpbm5lcnttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowO3RyYW5zaXRpb246d2lkdGggODBtcyBsaW5lYXI7fVxyXG4uYy1idXR0b24tLWxvYWRpbmdfc3Bpbm5lci0taGlkZGVue3dpZHRoOjA7fVxyXG4uYy1nb29nbGVfbG9naW57YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoycHggc29saWQgIzQyODVmNDtjb2xvcjojNDI4NWY0O2Rpc3BsYXk6ZmxleDtwYWRkaW5nOjA7fVxyXG4uYy1nb29nbGVfbG9naW46Zm9jdXN7LS1zYWYtMDpyZ2JhKHZhcigtLXNrX2hpZ2hsaWdodCwxOCwxMDAsMTYzKSwxKTtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1zYWYtMCksMCAwIDAgNXB4IHJnYmEoMjksMTU1LDIwOSwuMyk7Ym9yZGVyLXJhZGl1czo0cHg7fVxyXG4uYy1nb29nbGVfbG9naW46YWN0aXZlLC5jLWdvb2dsZV9sb2dpbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzQyODVmNDtib3gtc2hhZG93OjAgMXB4IDRweCByZ2JhKDAsMCwwLC4zKTt9XHJcbi5jLWdvb2dsZV9sb2dpbjo6LW1vei1zZWxlY3Rpb257YmFja2dyb3VuZDojZGRkO31cclxuLmMtZ29vZ2xlX2xvZ2luOjpzZWxlY3Rpb257YmFja2dyb3VuZDojZGRkO31cclxuLmMtZ29vZ2xlX2xvZ2luIC5jLWluZmluaXRlX3NwaW5uZXJfX3BhdGh7c3Ryb2tlOiM0Mjg1ZjQ7fVxyXG4uYy1nb29nbGVfbG9naW5fX2ljb257bWFyZ2luLXJpZ2h0OjEycHg7d2lkdGg6MThweDtoZWlnaHQ6MThweDt9XHJcbi5jLWhvcml6b250YWxfY29udGVudF9ydWxle2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7fVxyXG4uYy1ob3Jpem9udGFsX2NvbnRlbnRfcnVsZV9fbGVmdHJ1bGUsLmMtaG9yaXpvbnRhbF9jb250ZW50X3J1bGVfX3JpZ2h0cnVsZXtmbGV4LWdyb3c6MTttYXJnaW46MDt9XHJcbi5jLWhvcml6b250YWxfY29udGVudF9ydWxlX19jb250ZW50e3BhZGRpbmc6MCAyMHB4O31cclxuLyohIENTUyBVc2VkIGZyb206IGh0dHBzOi8vYS5zbGFjay1lZGdlLmNvbS81NTcxNi9zdHlsZS9yb2xsdXAtc2xhY2tfa2l0X2Jhc2UuY3NzICovXHJcbmZvcm0saDEsaHIscHttYXJnaW46MDtwYWRkaW5nOjA7fVxyXG5oMXtmb250LXdlaWdodDo0MDA7fVxyXG4qLDphZnRlciw6YmVmb3Jle2JveC1zaXppbmc6aW5oZXJpdDt9XHJcbmF7Y29sb3I6IzEyNjRhMzt0ZXh0LWRlY29yYXRpb246bm9uZTt9XHJcbmE6YWN0aXZlLGE6Zm9jdXMsYTpob3Zlcntjb2xvcjojMGI0YzhjO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7fVxyXG5oMXtmb250LXNpemU6MjhweDtsaW5lLWhlaWdodDoxLjIxNDM7Zm9udC13ZWlnaHQ6OTAwO31cclxucHttYXJnaW4tYm90dG9tOjE2cHg7fVxyXG5ocntib3JkZXI6bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO2NsZWFyOmJvdGg7bWFyZ2luLWJvdHRvbToxNnB4O31cclxuYnV0dG9ue3BhZGRpbmc6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci13aWR0aDowO2N1cnNvcjpwb2ludGVyO31cclxuYnV0dG9uLGlucHV0e2ZvbnQtZmFtaWx5OmluaGVyaXQ7fVxyXG4vKiEgQ1NTIFVzZWQgZnJvbTogaHR0cHM6Ly9hLnNsYWNrLWVkZ2UuY29tLzA3MGFmL3N0eWxlL3JvbGx1cC1zbGFja19raXRfaGVscGVycy5jc3MgKi9cclxuLm5vcm1hbHtmb250LXdlaWdodDo0MDA7fVxyXG4uYnJlYWtfd29yZHt3b3JkLXdyYXA6YnJlYWstd29yZDt9XHJcbi5mbG9hdF9ub25le2Zsb2F0Om5vbmU7fVxyXG4ub2Zmc2NyZWVue3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7bWFyZ2luOi0xcHg7cGFkZGluZzowO2JvcmRlcjowO3VzZXItc2VsZWN0Om5vbmU7fVxyXG4uaW5saW5lX2Jsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrO31cclxuLmFsaWduX2xlZnR7dGV4dC1hbGlnbjpsZWZ0O31cclxuLmFsaWduX2NlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcjt9XHJcbi5mdWxsX3dpZHRoe3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7fVxyXG4ubWFyZ2luX3RvcF8xNTB7bWFyZ2luLXRvcDoyNHB4O31cclxuLm1hcmdpbl9ib3R0b21fMTUwe21hcmdpbi1ib3R0b206MjRweDt9XHJcbi5ub19ib3R0b21fbWFyZ2lue21hcmdpbi1ib3R0b206MDt9XHJcbi50aW55X2JvdHRvbV9tYXJnaW57bWFyZ2luLWJvdHRvbToxLjZweDt9XHJcbi5zbWFsbF90b3BfbWFyZ2lue21hcmdpbi10b3A6OHB4O31cclxuLnNtYWxsX2JvdHRvbV9tYXJnaW57bWFyZ2luLWJvdHRvbTo4cHg7fVxyXG4uc21hbGxfcmlnaHRfbWFyZ2lue21hcmdpbi1yaWdodDo4cHg7fVxyXG4ubGFyZ2VfYm90dG9tX21hcmdpbnttYXJnaW4tYm90dG9tOjI0cHg7fVxyXG4ubWFyZ2luX2F1dG97bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzt9XHJcbi5yaWdodF9wYWRkaW5ne3BhZGRpbmctcmlnaHQ6MTZweDt9XHJcbi5sYXJnZV9ib3R0b21fcGFkZGluZ3twYWRkaW5nLWJvdHRvbToyNHB4O31cclxuLyohIENTUyBVc2VkIGtleWZyYW1lcyAqL1xyXG5Aa2V5ZnJhbWVzIGMtaW5maW5pdGVfc3Bpbm5lcl9fc3BpbnswJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpO310b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt9fVxyXG4vKiEgQ1NTIFVzZWQgZm9udGZhY2VzICovXHJcbkBmb250LWZhY2V7Zm9udC1mYW1pbHk6U2xhY2stTGF0bztmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDozMDA7c3JjOmxvY2FsKCdTbGFjay1MYXRvJyksdXJsKGh0dHBzOi8vYS5zbGFjay1lZGdlLmNvbS84MDU4OC9mb250cy9sYXRvLTItY29tcHJlc3NlZC9sYXRvLWxpZ2h0LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGh0dHBzOi8vYS5zbGFjay1lZGdlLmNvbS84MDU4OC9mb250cy9sYXRvLTIvbGF0by1saWdodC53b2ZmKSBmb3JtYXQoJ3dvZmYnKTt1bmljb2RlLXJhbmdlOlUrMDAwMC1GOEZFLFUrRjkwMC1GRkZGO31cclxuQGZvbnQtZmFjZXtmb250LWZhbWlseTpTbGFjay1MYXRvO2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtd2VpZ2h0OjkwMDtzcmM6bG9jYWwoJ1NsYWNrLUxhdG8nKSx1cmwoaHR0cHM6Ly9hLnNsYWNrLWVkZ2UuY29tLzgwNTg4L2ZvbnRzL2xhdG8tMi1jb21wcmVzc2VkL2xhdG8taXRhbGljLWJsYWNrLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGh0dHBzOi8vYS5zbGFjay1lZGdlLmNvbS84MDU4OC9mb250cy9sYXRvLTIvbGF0by1pdGFsaWMtYmxhY2sud29mZikgZm9ybWF0KCd3b2ZmJyk7dW5pY29kZS1yYW5nZTpVKzAwMDAtRjhGRSxVK0Y5MDAtRkZGRjt9XHJcbkBmb250LWZhY2V7Zm9udC1mYW1pbHk6YXBwbGVMb2dvO3NyYzpsb2NhbChcIkx1Y2lkYSBHcmFuZGVcIik7dW5pY29kZS1yYW5nZTpVK0Y4RkY7fVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\YONI\Slack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map