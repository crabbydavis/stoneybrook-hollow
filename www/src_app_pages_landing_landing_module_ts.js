"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_landing_landing_module_ts"],{

/***/ 3721:
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectivesModule: () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _is_visible_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-visible.directive */ 7121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class DirectivesModule {
  static #_ = (() => this.ɵfac = function DirectivesModule_Factory(t) {
    return new (t || DirectivesModule)();
  })();
  static #_2 = (() => this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DirectivesModule
  }))();
  static #_3 = (() => this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({}))();
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DirectivesModule, {
    declarations: [_is_visible_directive__WEBPACK_IMPORTED_MODULE_0__.IsVisibleDirective],
    exports: [_is_visible_directive__WEBPACK_IMPORTED_MODULE_0__.IsVisibleDirective]
  });
})();

/***/ }),

/***/ 7121:
/*!****************************************************!*\
  !*** ./src/app/directives/is-visible.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsVisibleDirective: () => (/* binding */ IsVisibleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class IsVisibleDirective {
  constructor(element) {
    this.element = element;
    this.isVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.checkForIntersection = entries => {
      entries.forEach(entry => {
        if (this.checkIfIntersecting(entry)) {
          this.isVisible.emit();
          console.log('isVisible');
          this.intersectionObserver.unobserve(this.element.nativeElement);
          this.intersectionObserver.disconnect();
        }
      });
    };
  }
  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {});
    this.intersectionObserver.observe(this.element.nativeElement);
  }
  checkIfIntersecting(entry) {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
  static #_ = (() => this.ɵfac = function IsVisibleDirective_Factory(t) {
    return new (t || IsVisibleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  })();
  static #_2 = (() => this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: IsVisibleDirective,
    selectors: [["", "lifeIsVisible", ""]],
    outputs: {
      isVisible: "isVisible"
    }
  }))();
}

/***/ }),

/***/ 959:
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingPageRoutingModule: () => (/* binding */ LandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 4305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
}];
class LandingPageRoutingModule {
  static #_ = (() => this.ɵfac = function LandingPageRoutingModule_Factory(t) {
    return new (t || LandingPageRoutingModule)();
  })();
  static #_2 = (() => this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: LandingPageRoutingModule
  }))();
  static #_3 = (() => this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  }))();
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8510:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingPageModule: () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 959);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page */ 4305);
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/directives.module */ 3721);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);








class LandingPageModule {
  static #_ = (() => this.ɵfac = function LandingPageModule_Factory(t) {
    return new (t || LandingPageModule)();
  })();
  static #_2 = (() => this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LandingPageModule
  }))();
  static #_3 = (() => this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule, src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule]
  }))();
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LandingPageModule, {
    declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule, src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule]
  });
})();

/***/ }),

/***/ 4305:
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingPage: () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var _Users_crabbman_Repos_stoneybrook_hollow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../contact-us/contact-us.page */ 3121);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3920);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 6705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/web-header/web-header.component */ 2652);












const _c0 = ["swiper"];
function LandingPage_iframe_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "iframe", 19);
  }
}
function LandingPage_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingPage_ng_container_12_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.playVideo = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function LandingPage_swiper_slide_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "swiper-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "assets/img/slideshow/", index_r4 + 1, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay]);
class LandingPage {
  constructor(modalCtrl, navCtrl, routerOutlet, router) {
    this.modalCtrl = modalCtrl;
    this.navCtrl = navCtrl;
    this.routerOutlet = routerOutlet;
    this.router = router;
    this.swiperModules = [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicSlides];
    this.banner = [];
    this.slideshow = new Array(12);
    this.playVideo = false;
  }
  ngOnInit() {}
  goToGallery() {
    this.navCtrl.navigateForward('gallery');
  }
  goToCommissionProcess() {
    this.navCtrl.navigateForward('commission-process');
  }
  showContactUs() {
    var _this = this;
    return (0,_Users_crabbman_Repos_stoneybrook_hollow_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage,
        cssClass: 'contact-modal'
      });
      modal.present();
    })();
  }
  goToFaq() {
    this.router.navigateByUrl('contact');
  }
  slideBack() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }
  slideForward() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }
  static #_ = (() => this.ɵfac = function LandingPage_Factory(t) {
    return new (t || LandingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  })();
  static #_2 = (() => this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LandingPage,
    selectors: [["app-landing"]],
    viewQuery: function LandingPage_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
      }
    },
    decls: 25,
    vars: 5,
    consts: [["swiper", ""], [1, "top"], [1, "toolbar", "hide-l"], ["slot", "start", "src", "assets/img/stoneybrook-logo.png"], ["slot", "end"], ["color", "light", "autoHide", "false"], [1, "hide-s", 3, "transparent"], [1, "model"], [1, "video"], ["src", "https://player.vimeo.com/video/783980160?h=6ee0d9ebc2&autoplay=1", "width", "100%", "height", "100%", "frameborder", "0", "allow", "autoplay", 4, "ngIf"], [4, "ngIf"], [1, "model-white"], [1, "slide-container"], ["name", "chevron-back-circle-outline", "tappable", "", 1, "back", 3, "click"], ["name", "chevron-forward-circle-outline", "tappable", "", 1, "forward", 3, "click"], ["pagination", "true", "speed", "1500", "loop", "true", "autoplay", "true", 3, "modules"], [4, "ngFor", "ngForOf"], [1, "bottom"], ["mode", "ios", "color", "light", "size", "large", 3, "click"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtrustConstantResourceUrl"]`https://player.vimeo.com/video/783980160?h=6ee0d9ebc2&autoplay=1`, "width", "100%", "height", "100%", "frameborder", "0", "allow", "autoplay"], [1, "background-img"], ["tappable", "", 1, "overlay", 3, "click"], ["name", "play-circle-outline"], [3, "src"]],
    template: function LandingPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content")(1, "div", 1)(2, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-menu-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-web-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "We advocate for childhood through our play-based, curiosity-led approach to education.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LandingPage_iframe_11_Template, 1, 0, "iframe", 9)(12, LandingPage_ng_container_12_Template, 4, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "our studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingPage_Template_ion_icon_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.slideBack());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingPage_Template_ion_icon_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.slideForward());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "swiper-container", 15, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, LandingPage_swiper_slide_21_Template, 2, 2, "swiper-slide", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17)(23, "ion-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingPage_Template_ion_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.goToFaq());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "schedule a tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transparent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.playVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.playVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modules", ctx.swiperModules);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.slideshow);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_3__.WebHeaderComponent],
    styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary-shade);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #5a4b2db4 !important;\n}\nion-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 700px;\n  background-image: url(\"/assets/img/main.jpg\");\n  background-position: top center;\n  background-size: cover;\n}\n\n.model[_ngcontent-%COMP%], .model-white[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary-shade);\n  display: flex;\n  justify-content: center;\n}\n.model[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .model-white[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: white;\n  max-width: 600px;\n  line-height: 1.2em;\n}\n\n.model-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.model-white[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  position: relative;\n}\n.video[_ngcontent-%COMP%]   .background-img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/video-thumbnail.jpeg\");\n  background-position: center;\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.video[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n.video[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: white;\n}\n\n.slide-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  padding-bottom: 100px;\n}\n.slide-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 40px;\n  position: absolute;\n  z-index: 10;\n  left: 20px;\n  top: calc(50% - 10px);\n}\n.slide-container[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 40px;\n  position: absolute;\n  z-index: 10;\n  right: 20px;\n  top: calc(50% - 10px);\n}\n\n.bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNENBQUE7QUFESjs7QUFJQTtFQUNJLGtDQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7QUFBUjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUE7RUFDSSxnREFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFDQTtFQUVJLHVCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0kseURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFHUjtBQURJO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBR1I7QUFESTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBR1I7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFHSjtBQUZJO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBSVI7QUFGSTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUlSOztBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSUoiLCJmaWxlIjoibGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJvd246ICM1QTRCMkQ7XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzVhNGIyZGI0ICFpbXBvcnRhbnQ7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbn1cbi50b3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9tYWluLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tb2RlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgfVxufVxuLm1vZGVsLXdoaXRlIHtcbiAgICBAZXh0ZW5kIC5tb2RlbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59XG4udmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5iYWNrZ3JvdW5kLWltZyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvdmlkZW8tdGh1bWJuYWlsLmpwZWcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5vdmVybGF5IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbi5zbGlkZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgLmJhY2sge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICB9XG4gICAgLmZvcndhcmQge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgfVxufVxuLmJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTIwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDRDQUFBO0FBREo7O0FBSUE7RUFDSSxrQ0FBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0FBQVI7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQ0E7RUFFSSx1QkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0FBRVI7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNJLHlEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBR1I7QUFESTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUdSO0FBREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBR0o7QUFGSTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUlSO0FBRkk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFJUjs7QUFEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUlKO0FBQ0Esd2tJQUF3a0kiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJvd246ICM1QTRCMkQ7XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzVhNGIyZGI0ICFpbXBvcnRhbnQ7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbn1cbi50b3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9tYWluLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tb2RlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgfVxufVxuLm1vZGVsLXdoaXRlIHtcbiAgICBAZXh0ZW5kIC5tb2RlbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59XG4udmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5iYWNrZ3JvdW5kLWltZyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvdmlkZW8tdGh1bWJuYWlsLmpwZWcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5vdmVybGF5IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbi5zbGlkZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgLmJhY2sge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICB9XG4gICAgLmZvcndhcmQge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgfVxufVxuLmJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTIwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        opacity: '0',
        transform: 'translateY(-100%)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        opacity: '1',
        transform: 'translateY(0)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('hidden => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('1000ms 500ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        transform: 'translateY(0)',
        offset: .1
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        opacity: '1',
        offset: 1
      })]))])])]
    }
  }))();
}

/***/ }),

/***/ 6705:
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _modules_history_history_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Swiper: () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ 7801);
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ 7587);
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ 9203);
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ 6637);
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ 9773);
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ 8353);
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ 9559);
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ 51);
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ 6083);
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/controller/controller.js */ 8433);
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ 9749);
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/history/history.js */ 2675);
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ 4003);
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ 2531);
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ 7443);
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ 9395);
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/grid/grid.js */ 3857);
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ 6403);
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ 8895);
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ 7759);
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ 3843);
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ 3543);
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ 5123);
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ 1463);
/**
 * Swiper 9.2.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 17, 2023
 */


























/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing_landing_module_ts.js.map