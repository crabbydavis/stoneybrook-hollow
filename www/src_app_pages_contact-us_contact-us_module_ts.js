"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_contact-us_contact-us_module_ts"],{

/***/ 1519:
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsPageRoutingModule: () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 3121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
}];
class ContactUsPageRoutingModule {
  static #_ = (() => this.ɵfac = function ContactUsPageRoutingModule_Factory(t) {
    return new (t || ContactUsPageRoutingModule)();
  })();
  static #_2 = (() => this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ContactUsPageRoutingModule
  }))();
  static #_3 = (() => this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  }))();
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactUsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4254:
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsPageModule: () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 1519);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 3121);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







class ContactUsPageModule {
  static #_ = (() => this.ɵfac = function ContactUsPageModule_Factory(t) {
    return new (t || ContactUsPageModule)();
  })();
  static #_2 = (() => this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ContactUsPageModule
  }))();
  static #_3 = (() => this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  }))();
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactUsPageModule, {
    declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact-us_contact-us_module_ts.js.map