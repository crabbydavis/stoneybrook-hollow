function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"92XW":function(e,t,n){"use strict";n.r(t),n.d(t,"CommissionProcessPageModule",(function(){return f}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),a=n("tyNb"),c=n("mrSG"),r=n("fXoL");function d(e,t){if(1&e){var n=r.Ob();r.Nb(0,"ion-slides",5),r.Vb("ionSlideDidChange",(function(){return r.dc(n),r.Xb().updateCurrentSection()})),r.Nb(1,"ion-slide"),r.Nb(2,"ion-card"),r.Lb(3,"img",6),r.Nb(4,"ion-card-header"),r.Nb(5,"ion-card-title"),r.hc(6," Why go custom? "),r.Mb(),r.Mb(),r.Nb(7,"ion-card-content"),r.Nb(8,"p"),r.hc(9,"A custom or commissioned piece of furniture is a unique piece of functional art created for a specific place, person or use. Much of my work has come through commission and has allowed for me to create some amazing one-of-a-kind pieces of furniture. I enjoy the process of developing and designing custom work based on the specific needs of the client. I work with them to collaborate on a look, feel, design and function that we are both excited about."),r.Mb(),r.Mb(),r.Nb(10,"ion-button",7),r.Vb("click",(function(){return r.dc(n),r.Xb().goToCommission()})),r.hc(11,"Commission now"),r.Mb(),r.Mb(),r.Mb(),r.Nb(12,"ion-slide"),r.Nb(13,"ion-card"),r.Lb(14,"img",8),r.Nb(15,"ion-card-header"),r.Nb(16,"ion-card-title"),r.hc(17," How does it work? "),r.Mb(),r.Mb(),r.Nb(18,"ion-card-content"),r.Nb(19,"p"),r.hc(20,"A client reaches out to me because they like my aesthetic and have a piece in mind for a particular need. We talk about what the client needs in terms of dimensions, wood choice or aesthetic style. We also discuss the budget so that I can get an idea of how elaborate to make the design \u2013 hidden compartments, more complicated design, precious materials, etc. Finally, we discuss timing and shipping. I am often booked 6-8 months in advance, so I want to make sure that I can get the piece completed within the client\u2019s timeframe. The shipping can vary depending on the time of year and size of a piece. I get an estimate on shipping that I email directly to the client and then we revisit when the piece is ready to ship. I do ship pieces internationally. It is a little more complicated but generally doable."),r.Mb(),r.Mb(),r.Nb(21,"ion-button",7),r.Vb("click",(function(){return r.dc(n),r.Xb().goToCommission()})),r.hc(22,"Commission now"),r.Mb(),r.Mb(),r.Mb(),r.Nb(23,"ion-slide"),r.Nb(24,"ion-card"),r.Lb(25,"img",9),r.Nb(26,"ion-card-header"),r.Nb(27,"ion-card-title"),r.hc(28," Design "),r.Mb(),r.Mb(),r.Nb(29,"ion-card-content"),r.Nb(30,"p"),r.hc(31,"Once I have a better understanding of the clients needs and desires, I will sit down and make some quick sketches so that I can get feedback. I call these my chicken scratches. I do this so that we can quickly develop an idea and determine which directions work best. Once we have an idea of a particular design I will take it to a CAD (computer-aided design) and draw it 2D to give the client a better idea of proportions. Finally, I will take it to a 3D rendering on the computer to give the client a better overall feel for the piece."),r.Mb(),r.Mb(),r.Nb(32,"ion-button",7),r.Vb("click",(function(){return r.dc(n),r.Xb().goToCommission()})),r.hc(33,"Commission now"),r.Mb(),r.Mb(),r.Mb(),r.Nb(34,"ion-slide"),r.Nb(35,"ion-card"),r.Lb(36,"img",8),r.Nb(37,"ion-card-header"),r.Nb(38,"ion-card-title"),r.hc(39," Cost and timing "),r.Mb(),r.Mb(),r.Nb(40,"ion-card-content"),r.Nb(41,"p"),r.hc(42,"When it comes to custom piece of furniture, I spend a substantial amount of time not only considering the look and materials of the piece but also how the client will interact with it and how they can get the most joy out of every part of the commission. Each project is custom and I am often booked 6-8 months in advance, so I want to make sure that I can get the piece completed within the client\u2019s timeframe. Once we have decided on the details of the piece, I ask for a 50% deposit to get going. This enables me to purchase the materials necessary and reserves your spot in my schedule so we can move forward."),r.Mb(),r.Mb(),r.Nb(43,"ion-button",7),r.Vb("click",(function(){return r.dc(n),r.Xb().goToCommission()})),r.hc(44,"Commission now"),r.Mb(),r.Mb(),r.Mb(),r.Mb()}if(2&e){var i=r.Xb();r.ac("options",i.slideOpts),r.Ab(2),r.Cb("active",i.currentSection===i.Commission.Why),r.Ab(11),r.Cb("active",i.currentSection===i.Commission.How),r.Ab(11),r.Cb("active",i.currentSection===i.Commission.Design),r.Ab(11),r.Cb("active",i.currentSection===i.Commission.Cost)}}var l,b,m,h=function(e){return e[e.Why=0]="Why",e[e.How=1]="How",e[e.Design=2]="Design",e[e.Cost=3]="Cost",e}({}),u=[{path:"",component:(l=function(){function e(t){_classCallCheck(this,e),this.navCtrl=t,this.Commission=h,this.currentSection=h.Why,this.loaded=!1,this.slideOpts={zoom:!1}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;setTimeout((function(){e.loaded=!0}),100)}},{key:"goToCommission",value:function(){this.navCtrl.navigateForward("contact")}},{key:"slideTo",value:function(e){this.slides.slideTo(e)}},{key:"updateCurrentSection",value:function(){return Object(c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.slides.getActiveIndex();case 3:this.currentSection=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})))}}]),e}(),l.\u0275fac=function(e){return new(e||l)(r.Kb(s.E))},l.\u0275cmp=r.Eb({type:l,selectors:[["app-commission-process"]],viewQuery:function(e,t){var n;1&e&&r.kc(s.x,!0),2&e&&r.cc(n=r.Wb())&&(t.slides=n.first)},decls:17,vars:9,consts:[["slot","end"],["autoHide","false"],[1,"selectors"],["tappable","",3,"click"],[3,"options","ionSlideDidChange",4,"ngIf"],[3,"options","ionSlideDidChange"],["src","assets/img/cabinet.jpg"],["expand","block","shape","round",1,"ion-margin",3,"click"],["src","assets/img/desk.jpg"],["src","assets/img/dresser2.jpg"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header"),r.Nb(1,"ion-toolbar"),r.Nb(2,"ion-title"),r.hc(3,"Commission Process"),r.Mb(),r.Nb(4,"ion-buttons",0),r.Lb(5,"ion-menu-button",1),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"ion-content"),r.Nb(7,"div",2),r.Nb(8,"div",3),r.Vb("click",(function(){return t.slideTo(t.Commission.Why)})),r.hc(9,"WHY GO CUSTOM?"),r.Mb(),r.Nb(10,"div",3),r.Vb("click",(function(){return t.slideTo(t.Commission.How)})),r.hc(11,"HOW DOES IT WORK?"),r.Mb(),r.Nb(12,"div",3),r.Vb("click",(function(){return t.slideTo(t.Commission.Design)})),r.hc(13,"DESIGN"),r.Mb(),r.Nb(14,"div",3),r.Vb("click",(function(){return t.slideTo(t.Commission.Cost)})),r.hc(15,"COST AND TIMING"),r.Mb(),r.Mb(),r.gc(16,d,45,9,"ion-slides",4),r.Mb()),2&e&&(r.Ab(8),r.Cb("active",t.currentSection===t.Commission.Why),r.Ab(2),r.Cb("active",t.currentSection===t.Commission.How),r.Ab(2),r.Cb("active",t.currentSection===t.Commission.Design),r.Ab(2),r.Cb("active",t.currentSection===t.Commission.Cost),r.Ab(2),r.ac("ngIf",t.loaded))},directives:[s.n,s.B,s.A,s.e,s.s,s.l,i.i,s.x,s.w,s.f,s.h,s.j,s.g,s.d],styles:[".selectors[_ngcontent-%COMP%]{position:relative;z-index:100;display:flex;flex-direction:column;width:100%;padding-left:15px;margin-top:15px;font-size:20px}.selectors[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(n){padding:4px}.selectors[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--ion-color-primary)}p[_ngcontent-%COMP%]{font-size:18px!important}ion-card-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{text-align:left}.card-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.card-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(n){position:absolute;left:0;top:0;z-index:0;width:100%;height:100%;font-size:25px!important}@-webkit-keyframes move-onto-page{0%{transform:translateX(-100%)}to{transform:translateY(0)}}@keyframes move-onto-page{0%{transform:translateX(-100%)}to{transform:translateY(0)}}.card-wrapper[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{-webkit-animation-name:move-onto-page;animation-name:move-onto-page;-webkit-animation-duration:1s;animation-duration:1s;z-index:1}"]}),l)}],p=((m=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:m}),m.\u0275inj=r.Hb({factory:function(e){return new(e||m)},imports:[[a.h.forChild(u)],a.h]}),m),f=((b=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:b}),b.\u0275inj=r.Hb({factory:function(e){return new(e||b)},imports:[[i.b,o.f,s.C,p]]}),b)}}]);