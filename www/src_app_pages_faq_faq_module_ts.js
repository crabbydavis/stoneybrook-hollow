"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_faq_faq_module_ts"],{

/***/ 263:
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 8601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
}];
class FaqPageRoutingModule {}
FaqPageRoutingModule.ɵfac = function FaqPageRoutingModule_Factory(t) {
  return new (t || FaqPageRoutingModule)();
};
FaqPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FaqPageRoutingModule
});
FaqPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7119:
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageModule": () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 263);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 8601);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class FaqPageModule {}
FaqPageModule.ɵfac = function FaqPageModule_Factory(t) {
  return new (t || FaqPageModule)();
};
FaqPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: FaqPageModule
});
FaqPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FaqPageModule, {
    declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  });
})();

/***/ }),

/***/ 8601:
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/web-header/web-header.component */ 5849);





function FaqPage_ion_accordion_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-accordion", 5)(1, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_ion_accordion_9_Template_ion_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const index_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.checkToScroll(index_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", faq_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](faq_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", faq_r1.answer, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
class FaqPage {
  constructor() {
    this.faqs = [
    // { question: `What is your learning philosophy?`, answer: `We are committed to brain science: the most effective way for young children to learn is through child-directed play. Check out what this looks in practive on <a href="https://www.instagram.com/stoneybrookhollow/" target="_blank">Instagram</a> and <a href="https://www.facebook.com/stoneybrookhollowstudio">Facebook</a> pages.`},
    {
      question: `Where are you located?`,
      answer: `We are located in Fruit Heights, Utah. Our dedicated space seamlessly blends our outdoor and indoor environments.<br><br> Outdoor: We spend half our days (sometimes more!) outside. Children can explore our forested yard, child-grown garden, and winding footpaths. Close supervision is maintained at all times.<br><br> Indoor: Our studio is spacious, clean, warm and flooded with natural light. It is in the above-ground basement of our home in its own dedicated and private space. <br><br> Our address is 930 N. Stoneybrook Rd, Kaysville, Utah.`
    }, {
      question: `How much is tuition?`,
      answer: `Tuition is $225 a month. A $100 deposit is required upon enrollment to save your spot and will go towards the final month's tuition.<br><br> We believe that all children should have access to a quality early childhood education. We hope to transition to a 501-3c non-profit organization in the near future to provide needs-based scholarships. We aim to serve all demographics as soon as possible..<br><br> If you have a Kindergartener, First Grader and/or a child with a learning disability, funding may be available. Please reach out for more information.`
    }, {
      question: `What ages can attend Stoneybrook Hollow?`,
      answer: `We enroll children ages 3 - 8 (Preschool, Kindergarten, and First through Third Grade). Children must be 3 years old and potty trained by September 1st. We have one, mixed-age classroom.<br><br> Research has found many benefits to a mixed-aged classroom! Older children have the opportunity to explore academic skills at their own pace while also having the freedom to play. They get to nurture and lead younger children and share their skillsets with them. <br><br> Younger children get to learn social and academic skills from older peers. They get to maintain continuity in their education, as they will have the same teacher for 3 years if they begin our program at age 3. <br><br> We love our mixed-age classroom!`
    }, {
      question: `What is the schedule?`,
      answer: `We meet Mondays - Thursdays from 9:00 AM - 12:00 PM. We will follow the <a href="https://resources.finalsite.net/images/v1670966056/davisk12utus/pukpndt8nxscrvda718y/2023-24SchoolYearCalendar.pdf" target="_blank">Davis County School District calendar</a>  for holidays and breaks. We do not currently offer a 5-day or afternoon option. Families may choose to come less than 4 days, but tuition will remain the same.<br><br> The 2023-2024 school year will begin on September 5th and end on May 23rd.`
    }, {
      question: `What is the teacher-student ratio?`,
      answer: `We have 12 children and two guides each day. We maintain a 1:6 ratio at all times.<br><br>Miss Anna is the lead guide, assisted by Miss Kait and Miss Steph.`
    }, {
      question: `Is Stoneybrook Hollow a religious school?`,
      answer: `No. We deeply value diversity of thought and tradition. We welcome learners from all backgrounds and beliefs. We will objectively and respectfully learn about many international religions and cultures throughout the year.`
    }, {
      question: `Can I come tour the studio?`,
      answer: `Yes! Please contact Miss Anna to schedule a time.`
    }, {
      question: `Will snack or lunch be provided?`,
      answer: `A healthy snack will be available every day. We do not provide lunch. We can accommodate all dietary needs. We are happy and qualified to give tube feeds for our learners with gastronomy tubes.`
    }, {
      question: `Can Stoneybrook Hollow accommodate my child with special needs?`,
      answer: `We have a child with special needs ourselves! We are passionate about advocating for all children, especially those with unique needs. Please contact us about your specific learner. We would love to provide a tailored learning experience for them within our area of expertise. <br><br> We cannot provide nurses or therapists at this time. If your child has a nurse, we welcome them in our studio.<br><br> If your Kindergartener or First Grader has a learning disability, funding may be available. Please reach out!`
    }, {
      question: `Will my child be graded or tested?`,
      answer: `We guide learners to skills such as mathematics or literacy when they are developmentally ready and interested. When your child is ready, they will learn to master skills at their own pace. We give very little large-group instruction. <br><br> Going at one's own pace fosters a love of learning. As such, we do not give grades or tests. We provide a variety of documentation for parents to follow along on their child's learning journey. Children are observed during play to determine mastery of skills.`
    }, {
      question: `How are parents involved?`,
      answer: `We are in the business of creating life-long learners! We are cultivating a strong foundation of beliefs, not just academic skills. This is not a sustainable goal without full buy-in from parents. <br><br> "Parents are an essential component of the program - a competent and active part of their children's learning experience. They are not considered consumers but co-responsible partners. Their right to participation is expected and supported." <a href="http://learningmaterialswork.com/wp-content/uploads/2016/06/ValuesAndPrinciples.pdf" target="_blank">link</a><br><br> We will meet before the year begins and anytime during the year when needed to ensure that we are supporting the unique needs of your child. Additionally, helpful resources will be shared throughout the year. We care deeply about parent empowerment and are so grateful for your support!`
    }, {
      question: `Will my child learn about diversity at Stoneybrook Hollow?`,
      answer: `Yes! We aim to foster beliefs of advocacy, inclusion and empathy for all. We welcome children from all backgrounds and circumstances. We strive to create a rich learning environment where many cultures, bodies, skin-tones, abilities, families and beliefs are represented. For example, children will learn ASL vocabulary in the studio to communicate with our son who has CHARGE syndrome. <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/desc.12788" target="_blank">Research shows</a> children as young as four years old have already begun to show implicit bias.<br><br> All learning to combat this will be developmentally appropriate and research-based. We are deeply committed to transparency with this endeavor - please contact us if you have further questions.`
    }, {
      question: `What precautions are in place to keep my child safe?`,
      answer: `All guides and Anna’s husband, Davis (who works in the home), have passed a background check. Anna maintains an up-to-date CPR and first-aid certification. All doors into our home will remain locked during school hours. Children will be signed in and out by authorized adults each day. Children practice fire, earthquake and intruder drills throughout the year. Due to our small child-to-adult ratio, we are able to maintain close supervision at all times.`
    }, {
      question: `Are you licensed?`,
      answer: `We maintain a current <a href="https://drive.google.com/file/d/1YyXZ3zJEJVt8Dqpsx-FMZJQryPeossyG/view?usp=sharing" target="_blank">license</a> through Kaysville City.`
    }, {
      question: `I want to learn more about your learning philosophy!`,
      answer: `Follow us on <a href="https://www.instagram.com/stoneybrookhollow/" target="_blank">Instagram</a> or <a href="https://www.facebook.com/stoneybrookhollowstudio" target="_blank">Facebook</a> to see our philosophy in action!`
    }];
  }
  checkToScroll(index) {
    setTimeout(() => {
      // scroll down for the bottom 2 pages
      if (index >= this.faqs.length - 2) {
        this.content.scrollToBottom(200);
      }
    }, 400);
  }
}
FaqPage.ɵfac = function FaqPage_Factory(t) {
  return new (t || FaqPage)();
};
FaqPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FaqPage,
  selectors: [["app-faq"]],
  viewQuery: function FaqPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 10,
  vars: 1,
  consts: [[1, "hide-l"], ["slot", "end"], ["color", "light", "autoHide", "false"], [1, "hide-s"], ["toggle-icon", "arrow-down-circle", 3, "value", 4, "ngFor", "ngForOf"], ["toggle-icon", "arrow-down-circle", 3, "value"], ["slot", "header", "tappable", "", 3, "click"], [1, "ion-text-wrap"], ["slot", "content", 3, "innerHtml"]],
  template: function FaqPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-web-header", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-accordion-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FaqPage_ion_accordion_9_Template, 5, 3, "ion-accordion", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.faqs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _components_web_header_web_header_component__WEBPACK_IMPORTED_MODULE_0__.WebHeaderComponent],
  styles: ["P[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 1em;\n  line-height: 1.3em;\n}\n\nion-content[_ngcontent-%COMP%] {\n  font-family: \"Raleway\" !important;\n}\n\nion-label[_ngcontent-%COMP%] {\n  font-family: \"Raleway\" !important;\n  font-size: 18px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZmFxL2ZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlDQUFBO0FBRUY7O0FBQUE7RUFDRSxpQ0FBQTtFQUNBLDBCQUFBO0FBR0YiLCJzb3VyY2VzQ29udGVudCI6WyJQIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xufVxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIgIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_faq_faq_module_ts.js.map