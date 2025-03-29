"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_classes_classes_module_ts"],{

/***/ 5963:
/*!*********************************************************!*\
  !*** ./src/app/pages/classes/classes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassesPageRoutingModule: () => (/* binding */ ClassesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _classes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.page */ 3293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _classes_page__WEBPACK_IMPORTED_MODULE_0__.ClassesPage
}];
class ClassesPageRoutingModule {
  static #_ = (() => this.ɵfac = function ClassesPageRoutingModule_Factory(t) {
    return new (t || ClassesPageRoutingModule)();
  })();
  static #_2 = (() => this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ClassesPageRoutingModule
  }))();
  static #_3 = (() => this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  }))();
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClassesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6330:
/*!*************************************************!*\
  !*** ./src/app/pages/classes/classes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassesPageModule: () => (/* binding */ ClassesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _classes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes-routing.module */ 5963);
/* harmony import */ var _classes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.page */ 3293);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







class ClassesPageModule {
  static #_ = (() => this.ɵfac = function ClassesPageModule_Factory(t) {
    return new (t || ClassesPageModule)();
  })();
  static #_2 = (() => this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ClassesPageModule
  }))();
  static #_3 = (() => this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _classes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassesPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  }))();
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClassesPageModule, {
    declarations: [_classes_page__WEBPACK_IMPORTED_MODULE_1__.ClassesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _classes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassesPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  });
})();

/***/ }),

/***/ 3293:
/*!***********************************************!*\
  !*** ./src/app/pages/classes/classes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassesPage: () => (/* binding */ ClassesPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/web-header/web-header.component */ 2652);



class ClassesPage {
  constructor() {}
  ngOnInit() {}
  scroll(el) {
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
  static #_ = (() => this.ɵfac = function ClassesPage_Factory(t) {
    return new (t || ClassesPage)();
  })();
  static #_2 = (() => this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ClassesPage,
    selectors: [["app-classes"]],
    decls: 23,
    vars: 0,
    consts: [[1, "hide-l"], ["slot", "end"], ["color", "light", "autoHide", "false"], [1, "hide-s"], ["src", "assets/img/learn-main.jpg", 1, "hide-l"], [1, "explanation"], ["src", "assets/img/learn-main.jpeg", 1, "hide-s"]],
    template: function ClassesPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-menu-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-web-header", 3)(8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "preschool & kindergarten program");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section")(12, "div", 5)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Our Preschool & Kindergarten program at Stoneybrook Community School is a nature-based, Reggio Emilia-inspired learning experience designed to foster curiosity, creativity, and independence in young children. Through hands-on exploration, project-based learning, and outdoor play, children develop critical thinking skills, social-emotional growth, and a love for learning. The program emphasizes child-led activities, allowing each child to explore and discover at their own pace, while being supported by a nurturing and experienced teaching team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "home school hybrid program");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section")(19, "div", 5)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " We value research-based, best practice in Early Childhood Education: Children learn best through PLAY! But what exactly are they learning? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__.WebHeaderComponent],
    styles: ["h1[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  color: white;\n  text-align: center;\n  padding: 30px 0px;\n  margin: 0px;\n}\n\nh2[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary-shade);\n  color: white;\n  text-align: center;\n  padding: 20px 0px;\n  margin: 0px;\n  font-family: \"Dawning of a New Day\";\n  font-size: 2.5em;\n}\nh2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-family: \"Lora\";\n  font-size: 0.6em;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: \"raleway\";\n}\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: large;\n  padding: 0px 30px;\n  line-height: 1.2em;\n}\n\nion-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBR1I7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUdKO0FBRkk7RUFDSSxVQUFBO0FBSVI7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0oiLCJmaWxlIjoiY2xhc3Nlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbmgyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogJ0Rhd25pbmcgb2YgYSBOZXcgRGF5JztcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIHNtYWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJztcbiAgICAgICAgZm9udC1zaXplOiAuNmVtO1xuICAgIH1cbn1cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ3JhbGV3YXknO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxucCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5pb24tY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhc3Nlcy9jbGFzc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQURJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQUZJO0VBQ0ksVUFBQTtBQUlSOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtBQUtKO0FBQ0EsZy9DQUFnL0MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbmgyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogJ0Rhd25pbmcgb2YgYSBOZXcgRGF5JztcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIHNtYWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJztcbiAgICAgICAgZm9udC1zaXplOiAuNmVtO1xuICAgIH1cbn1cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ3JhbGV3YXknO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxucCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5pb24tY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }))();
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_classes_classes_module_ts.js.map