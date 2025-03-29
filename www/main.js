(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  redirectTo: '/landing',
  pathMatch: 'full'
}, {
  path: 'landing',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_landing_landing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing/landing.module */ 8510)).then(m => m.LandingPageModule)
}, {
  path: 'about',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 2014)).then(m => m.AboutPageModule)
}, {
  path: 'contact',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact-us/contact-us.module */ 4254)).then(m => m.ContactUsPageModule)
}, {
  path: 'faq',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_faq_faq_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faq/faq.module */ 6594)).then(m => m.FaqPageModule)
}, {
  path: 'learn',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_learn_learn_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/learn/learn.module */ 9710)).then(m => m.LearnPageModule)
}, {
  path: 'classes',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_classes_classes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/classes/classes.module */ 6330)).then(m => m.ClassesPageModule)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_crabbman_Repos_stoneybrook_hollow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _pages_contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact-us/contact-us.page */ 3121);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/element/bundle */ 6001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);







(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__.register)();
class AppComponent {
  constructor(modalCtrl, platform) {
    this.modalCtrl = modalCtrl;
    this.platform = platform;
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {});
  }
  showContactModal() {
    var _this = this;
    return (0,_Users_crabbman_Repos_stoneybrook_hollow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _pages_contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage,
        cssClass: 'contact-modal'
      });
      modal.present();
    })();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 28,
    vars: 0,
    consts: [["side", "end", "contentId", "main-content", 1, "hide-l"], ["autoHide", "false"], ["routerLink", "/landing", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["routerLink", "/about", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["routerLink", "/learn", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["routerLink", "/faq", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["routerLink", "/contact", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["routerLink", "/classes", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["id", "main-content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-app")(1, "ion-menu", 0)(2, "ion-content")(3, "ion-menu-toggle", 1)(4, "ion-item", 2)(5, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-menu-toggle", 1)(8, "ion-item", 3)(9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-menu-toggle", 1)(12, "ion-item", 4)(13, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " how we learn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-menu-toggle", 1)(16, "ion-item", 5)(17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-menu-toggle", 1)(20, "ion-item", 6)(21, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-menu-toggle", 1)(24, "ion-item", 7)(25, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "ion-router-outlet", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate],
    styles: ["ion-label {\n  font-family: \"Raleway\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule]
  });
})();

/***/ }),

/***/ 2652:
/*!***************************************************************!*\
  !*** ./src/app/components/web-header/web-header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebHeaderComponent: () => (/* binding */ WebHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 7401);




class WebHeaderComponent {
  constructor(router) {
    this.router = router;
    this.transparent = false;
  }
  navigate(url) {
    this.router.navigateByUrl(url);
  }
  static #_ = this.ɵfac = function WebHeaderComponent_Factory(t) {
    return new (t || WebHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WebHeaderComponent,
    selectors: [["app-web-header"]],
    inputs: {
      transparent: "transparent"
    },
    decls: 15,
    vars: 2,
    consts: [[1, "toolbar"], ["slot", "start", "src", "assets/img/stoneybrook-logo.png", "tappable", "", 3, "click"], ["slot", "end"], ["fill", "clear", "mode", "ios", "color", "light", 3, "click"]],
    template: function WebHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-toolbar", 0)(1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebHeaderComponent_Template_img_click_1_listener() {
          return ctx.navigate("landing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 2)(3, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebHeaderComponent_Template_ion_button_click_3_listener() {
          return ctx.navigate("landing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebHeaderComponent_Template_ion_button_click_5_listener() {
          return ctx.navigate("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebHeaderComponent_Template_ion_button_click_7_listener() {
          return ctx.navigate("learn");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " how we learn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebHeaderComponent_Template_ion_button_click_9_listener() {
          return ctx.navigate("faq");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebHeaderComponent_Template_ion_button_click_11_listener() {
          return ctx.navigate("contact");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebHeaderComponent_Template_ion_button_click_13_listener() {
          return ctx.navigate("classes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("transparent", ctx.transparent);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar],
    styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n}\nion-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n}\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  --background: rgba(0, 0, 0, .5) !important;\n  box-shadow: 0 0 15px 20px rgba(0, 0, 0, 0.5019607843) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWItaGVhZGVyL3dlYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBQ0E7RUFDSSwwQ0FBQTtFQUNBLGdFQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG59XG4udHJhbnNwYXJlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSkgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAyMHB4ICMwMDAwMDA4MCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3121:
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsPage: () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var _Users_crabbman_Repos_stoneybrook_hollow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/clipboard */ 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/web-header/web-header.component */ 2652);








class ContactUsPage {
  constructor(fb, toasterCtrl) {
    this.fb = fb;
    this.toasterCtrl = toasterCtrl;
    this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({});
  }
  ngOnInit() {}
  copyPhone() {
    var _this = this;
    return (0,_Users_crabbman_Repos_stoneybrook_hollow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__.Clipboard.write({
        string: '435-840-2031'
      }).then(/*#__PURE__*/(0,_Users_crabbman_Repos_stoneybrook_hollow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const toast = yield _this.toasterCtrl.create({
          message: 'Copied to clipboard',
          duration: 2000
        });
        toast.present();
      }));
    })();
  }
  static #_ = this.ɵfac = function ContactUsPage_Factory(t) {
    return new (t || ContactUsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContactUsPage,
    selectors: [["app-contact-us"]],
    decls: 29,
    vars: 0,
    consts: [[1, "hide-l"], ["slot", "end"], ["color", "light", "autoHide", "false"], [1, "hide-s"], [1, "main-image"], [1, "brown-box"], [1, "hide-l", "contact-buttons"], ["fill", "outline", "color", "light", "size", "small", "href", "tel:4358402031"], ["slot", "start", "name", "call"], ["fill", "outline", "color", "light", "size", "small", "href", "sms:4358402031"], ["slot", "start", "name", "chatbubbles"], ["fill", "outline", "color", "light", "size", "small", "href", "mailto:annac895@gmail.com"], ["slot", "start", "name", "mail"], [1, "info", "hide-s"], [1, "item"]],
    template: function ContactUsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-menu-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-web-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "we can't wait to meet you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "For questions or to apply, please contact Anna Crabb.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6)(15, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13)(25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Call or Text: 435-840-2031 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Email: annac895@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_2__.WebHeaderComponent],
    styles: [".main-image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  opacity: 0.74;\n  background-image: url('contact.jpg');\n  background-position: top center;\n  background-size: cover;\n  position: relative;\n  padding-top: 30px;\n}\n.main-image[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 15px;\n  width: 100%;\n  color: white;\n  text-align: center;\n}\n.main-image[_ngcontent-%COMP%]   .brown-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: rgba(187, 157, 151, 0.7176470588);\n}\n.main-image[_ngcontent-%COMP%]   .brown-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  margin: 0px;\n  font-size: 20px;\n  font-family: \"Raleway\";\n}\n.main-image[_ngcontent-%COMP%]   .brown-box[_ngcontent-%COMP%]   .contact-buttons[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n.main-image[_ngcontent-%COMP%]   .brown-box[_ngcontent-%COMP%]   .contact-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 18px;\n  --border-radius: 0px;\n  font-family: \"Raleway\";\n}\n.main-image[_ngcontent-%COMP%]   .brown-box[_ngcontent-%COMP%]   .contact-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.main-image[_ngcontent-%COMP%]   .brown-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  width: 400px;\n  margin: 20px auto;\n  padding: 20px;\n  font-size: 1.5em;\n  color: white;\n  font-family: \"Raleway\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxtREFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBSWhCO0FBSGdCO0VBQ0ksZUFBQTtBQUtwQjtBQURRO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFHWiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWltYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogLjc0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb250YWN0LmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgaDEge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYnJvd24tYm94IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiOWQ5N2I3O1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1idXR0b25zIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBiqAm7hBpX93153GhL4vYqUwez_ctZUyk",
    authDomain: "ezra-furniture.firebaseapp.com",
    databaseURL: "https://ezra-furniture.firebaseio.com",
    projectId: "ezra-furniture",
    storageBucket: "ezra-furniture.appspot.com",
    messagingSenderId: "309727413833",
    appId: "1:309727413833:web:dc7900ada7bcdaeaeb6198",
    measurementId: "G-VLR6QVXCGT"
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-b8307d99_js-node_modules_ionic_core_dist_esm_th-33339e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-b8307d99_js-node_modules_ionic_core_dist_esm_th-33339e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		734,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		3970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		437,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map