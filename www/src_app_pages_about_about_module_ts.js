"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 3423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
}];
class AboutPageRoutingModule {}
AboutPageRoutingModule.ɵfac = function AboutPageRoutingModule_Factory(t) {
  return new (t || AboutPageRoutingModule)();
};
AboutPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AboutPageRoutingModule
});
AboutPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 3423);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 388);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AboutPageModule {}
AboutPageModule.ɵfac = function AboutPageModule_Factory(t) {
  return new (t || AboutPageModule)();
};
AboutPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AboutPageModule
});
AboutPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutPageModule, {
    declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  });
})();

/***/ }),

/***/ 388:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/web-header/web-header.component */ 5849);



class AboutPage {
  constructor() {}
  ngOnInit() {}
  scroll(el) {
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
AboutPage.ɵfac = function AboutPage_Factory(t) {
  return new (t || AboutPage)();
};
AboutPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AboutPage,
  selectors: [["app-about"]],
  decls: 118,
  vars: 0,
  consts: [[1, "hide-l"], ["slot", "end"], ["color", "light", "autoHide", "false"], [1, "hide-s"], ["sizeXs", "12", "sizeSm", "6", "sizeMd", "6", "sizeLg", "3", "sizeXl", "3"], ["alt", "Miss Anna portrait", "src", "assets/img/about/anna.png"], ["color", "seconary", "fill", "clear", 3, "click"], ["alt", "Miss Kait portrait", "src", "assets/img/about/kait.png"], ["alt", "Miss Steph portrait", "src", "assets/img/about/steph.png"], ["alt", "Miss Aubrie portrait", "src", "assets/img/about/aubrie.jpg"], ["anna", ""], ["src", "assets/img/about/anna.png", 1, "hide-l"], ["src", "assets/img/about/anna.png", 1, "hide-s"], ["kait", ""], ["src", "assets/img/about/kait.png", 1, "hide-l"], ["src", "assets/img/about/kait.png", 1, "hide-s"], ["steph", ""], ["src", "assets/img/about/steph.png", 1, "hide-l"], ["src", "assets/img/about/steph.png", 1, "hide-s"], ["aubrie", ""], ["src", "assets/img/about/aubrie.jpg", 1, "hide-l"], ["src", "assets/img/about/aubrie.jpg", 1, "hide-s"]],
  template: function AboutPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "about");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-web-header", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "our team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-grid")(11, "ion-row")(12, "ion-col", 4)(13, "ion-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-header")(16, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Miss Anna");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Owner & Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutPage_Template_ion_button_click_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Read bio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 4)(23, "ion-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-card-header")(26, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Miss Kait");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutPage_Template_ion_button_click_30_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Read bio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-col", 4)(33, "ion-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-card-header")(36, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Miss Steph");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutPage_Template_ion_button_click_40_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](87);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "read bio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-col", 4)(43, "ion-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-card-header")(46, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Miss Aubrie");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutPage_Template_ion_button_click_50_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](103);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scroll(_r3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "read bio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Miss Anna");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Owner & Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div")(62, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Anna spent her childhood in the rural outskirts of Grantsville, Utah, where she spent hours wrapped up in elaborate imaginative play, usually involving some combination of Barbie dolls, cardboard, and her mom\u2019s fabric box.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "As an adult, she received her bachelor's degree in human development with a minor in international development, where she focused on issues in childhood development and education. She is particularly passionate about innovative education, which is what inspired her to found Stoneybrook Hollow.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Anna is trained in the Montessori philosophy and was the lead guide in the primary classroom at Lighthouse Montessori Academy in Provo. Following her time there, she had the opportunity to create the early childhood studio at Choice Academy in Bountiful. She was the lead guide there, where she honed her Montessori skills and experimented with innovative ideas in education, including the principles of Reggio Emilia.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "She now resides in Kaysville, with her husband, Davis, and her two young children. They love trying new foods, playing board games, tackling home renovation projects and having impassioned conversations about their dreams!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h2", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Miss Kait");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "section")(78, "div")(79, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Kaitlin spent her childhood helping her mom in her reading classroom, collecting beanie babies, and dreaming up new adventures every summer in the mountains at her family cabin. It was Narnia-themed - paving the way for lots of magic!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Although she got her degree in nursing, teaching has always been dear to her heart. In addition to teaching piano and choir, she lived for some time in Ukraine, teaching English to young children. As a young mother she began devouring many books and courses on parenting, schooling methods, and child development. This launched her into the world of Early Childhood Education. Last year she toured a Reggio Emilia-inspired Kindergarten in Germany that brought her to tears (yes, actual tears). She knew that this was what she wanted to spend her time doing!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Kait is passionate about the outdoors, music and nutrition. In her spare time you will find her attempting not to kill her sourdough starter (again), reading, and making memories with her husband, two children, and dog, Poppy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h2", null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Miss Steph");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div")(96, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Stephanie spent her childhood climbing trees, making gourmet dinners from bark, grass and rocks and pretending her bunk bed was a covered wagon. She developed a love for little kids early on and spent many hours babysitting and playing with little siblings and cousins.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "She grew up to earn a bachelor's degree in Early Childhood Education from the University of Utah, her favorite part being the time she spent student teaching in a play-based, child-led Kindergarten. She has since spent the last 11 years re-living the magic of childhood with her own four daughters.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "She is happiest reading piles of picture books in a hammock with one or more children on top of her, exploring nature through the eyes of her kids and taking pictures as they create the mud pie dinners she was once so fond of. She can't wait to join the Stoneybrook Hollow team and continue to experience the wonder of children learning and exploring the world through play.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h2", null, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Miss Aubrie");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "section")(110, "div")(111, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Aubrie spent her childhood in the small town of Monroe, Utah, where her time was filled with hiking mountains, climbing trees, chasing butterflies and swimming in the surrounding lakes. If she wasn\u2019t adventuring outdoors, she was spending time in her dad\u2019s classroom, pretending to be a teacher herself.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Her love for learning and educating was solidified when she graduated high school and began working at a Montessori-inspired preschool. This opened her eyes to child-led learning and developed her passion to create individualized learning based on each child. During this time, Aubrie received her certification in Montessori and was able to shadow at a few of Utah\u2019s top Montessori schools.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "She now lives in Layton, Utah with her husband, Chris and 4-year-old twins, Haddie and Hendrik. Becoming a mom has given Aubrie a deeper appreciation for childhood and the joy children create. She is excited to be a positive, encouraging guide at Stoneybrook Hollow!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__.WebHeaderComponent],
  styles: ["h1[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  color: white;\n  text-align: center;\n  padding: 30px 0px;\n  margin: 0px;\n}\n\nh2[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary-shade);\n  color: white;\n  text-align: center;\n  padding: 20px 0px;\n  margin: 0px;\n  font-family: \"Dawning of a New Day\";\n  font-size: 2.5em;\n}\nh2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-family: \"Lora\";\n  font-size: 0.6em;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: \"raleway\";\n}\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: large;\n  padding: 0px 30px;\n  line-height: 1.2em;\n}\n\nion-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBR1I7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUdKO0FBRkk7RUFDSSxVQUFBO0FBSVI7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0oiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbmgyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogJ0Rhd25pbmcgb2YgYSBOZXcgRGF5JztcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIHNtYWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJztcbiAgICAgICAgZm9udC1zaXplOiAuNmVtO1xuICAgIH1cbn1cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ3JhbGV3YXknO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxucCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5pb24tY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map