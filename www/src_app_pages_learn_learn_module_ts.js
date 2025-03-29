"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_learn_learn_module_ts"],{

/***/ 1123:
/*!*****************************************************!*\
  !*** ./src/app/pages/learn/learn-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearnPageRoutingModule": () => (/* binding */ LearnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _learn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learn.page */ 5043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _learn_page__WEBPACK_IMPORTED_MODULE_0__.LearnPage
}];
class LearnPageRoutingModule {}
LearnPageRoutingModule.ɵfac = function LearnPageRoutingModule_Factory(t) {
  return new (t || LearnPageRoutingModule)();
};
LearnPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LearnPageRoutingModule
});
LearnPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LearnPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1743:
/*!*********************************************!*\
  !*** ./src/app/pages/learn/learn.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearnPageModule": () => (/* binding */ LearnPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _learn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learn-routing.module */ 1123);
/* harmony import */ var _learn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learn.page */ 5043);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class LearnPageModule {}
LearnPageModule.ɵfac = function LearnPageModule_Factory(t) {
  return new (t || LearnPageModule)();
};
LearnPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LearnPageModule
});
LearnPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _learn_routing_module__WEBPACK_IMPORTED_MODULE_0__.LearnPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LearnPageModule, {
    declarations: [_learn_page__WEBPACK_IMPORTED_MODULE_1__.LearnPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _learn_routing_module__WEBPACK_IMPORTED_MODULE_0__.LearnPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  });
})();

/***/ }),

/***/ 5043:
/*!*******************************************!*\
  !*** ./src/app/pages/learn/learn.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearnPage": () => (/* binding */ LearnPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/web-header/web-header.component */ 5849);



class LearnPage {
  constructor() {}
  ngOnInit() {}
  scroll(el) {
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
LearnPage.ɵfac = function LearnPage_Factory(t) {
  return new (t || LearnPage)();
};
LearnPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LearnPage,
  selectors: [["app-learn"]],
  decls: 69,
  vars: 0,
  consts: [[1, "hide-l"], ["slot", "end"], ["color", "light", "autoHide", "false"], [1, "hide-s"], ["src", "assets/img/learn-main.jpg", 1, "hide-l"], [1, "explanation"], [1, "topics"], ["fill", "clear", "size", "large", 3, "click"], ["src", "assets/img/learn-main.jpeg", 1, "hide-s"], ["socialStudies", ""], ["src", "assets/img/learn/social_studies.jpg", 1, "hide-l"], ["src", "assets/img/learn/social_studies.jpg", 1, "hide-s"], ["math", ""], ["src", "assets/img/learn/math.jpg", 1, "hide-l"], ["src", "assets/img/learn/math.jpg", 1, "hide-s"], ["languageArts", ""], ["src", "assets/img/learn/language.jpg", 1, "hide-l"], ["src", "assets/img/learn/language.jpg", 1, "hide-s"], ["science", ""], ["src", "assets/img/learn/science.jpg", 1, "hide-l"], ["src", "assets/img/learn/science.jpg", 1, "hide-s"]],
  template: function LearnPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "how we learn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-web-header", 3)(8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "how we learn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section")(12, "div", 5)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " We value research-based, best practice in Early Childhood Education: Children learn best through PLAY! But what exactly are they learning? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " From ages 3-6, a developing brain prioritizes social and emotional growth. We follow suit: social and emotional learning takes precedence over all else that we do here, and - you guessed it - children learn these skills through play! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Other skills needed for life are weaved into every aspect of our day. Instead of scheduling specific times for specific subjects, we follow children\u2019s interests and developmental needs. Learning is meaningful when it is relevant! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Here\u2019s an example of how that looks in our day-to-day: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6)(22, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearnPage_Template_ion_button_click_22_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "social studies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearnPage_Template_ion_button_click_24_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "math");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearnPage_Template_ion_button_click_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "language arts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearnPage_Template_ion_button_click_28_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "science");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2", null, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "social studies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Social Studies: As children arrive, they notice the studio is decorated with colorful silk lanterns and can hear traditional Chinese music playing. Today we\u2019re celebrating Chinese New Year! Children gather around the rug to explore traditional artifacts from China. We read a story about the holiday and consult the globe to see where China is located. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h2", null, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "math");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section")(44, "div")(45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Math: A child prepares a snack for the group - oranges today (considered good luck for the Lunar New Year!). They use one-to-one correspondence to figure out how many plates are needed. They divide up orange slices evenly among the group. We count aloud together to determine accuracy. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "When developmentally appropriate and relevant, we use specialized materials to help children master specific, foundational math skills. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h2", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "language arts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div")(57, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Language Arts: During snack, we play sound games together! We come up with rhyming words or listen to the first sound we hear in a group of words. This is called phonemic awareness and is a foundational literacy skill. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "When a child is developmentally ready and interested, we use child-led materials to foster early literacy and writing skills. Our number one goal is to foster a life-long love of learning. We always follow the child\u2019s unique timing with this endeavor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h2", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "science");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "section")(66, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Science: After snack, we clean up and head outside. Children head to our nature cart to gather any supplies they might need for investigating. They learn how to use a variety of scientific tools including a magnifying glass, stop watch, tape measurer, and binoculars. They record their observations in their nature journals. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__.WebHeaderComponent],
  styles: ["h1[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  color: white;\n  text-align: center;\n  padding: 30px 0px;\n  margin: 0px;\n}\n\nh2[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary-shade);\n  color: white;\n  text-align: center;\n  padding: 20px 0px;\n  margin: 0px;\n}\n\n.explanation[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: \"raleway\";\n}\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: x-large;\n  padding: 0px 30px;\n  line-height: 1.2em;\n}\n\n.topics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGVhcm4vbGVhcm4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUlKO0FBSEk7RUFDSSxVQUFBO0FBS1I7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSiIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuaDIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmV4cGxhbmF0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ3JhbGV3YXknO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxucCB7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn1cbi50b3BpY3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_learn_learn_module_ts.js.map