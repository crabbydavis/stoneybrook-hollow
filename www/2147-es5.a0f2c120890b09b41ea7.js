!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e,n,i,o,r,a){try{var s=t[r](a),u=s.value}catch(l){return void n(l)}s.done?e(u):Promise.resolve(u).then(i,o)}function n(t){return function(){var n=this,i=arguments;return new Promise(function(o,r){var a=t.apply(n,i);function s(t){e(a,o,r,s,u,"next",t)}function u(t){e(a,o,r,s,u,"throw",t)}s(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkstoneybrook_hollow=self.webpackChunkstoneybrook_hollow||[]).push([[2147],{2147:function(e,o,a){"use strict";a.r(o),a.d(o,{ion_menu:function(){return b},ion_menu_button:function(){return A},ion_menu_toggle:function(){return C}});var s=a(7403),u=a(9266),l=a(9446),h=a(7495),d=a(9525),c=a(5851),p=a(1883),m=a(262);a(841),a(8145),a(6076),a(1527),a(4599),a(7180),a(491),a(2042);var f='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b=function(){function e(t){var n=this;i(this,e),(0,s.r)(this,t),this.ionWillOpen=(0,s.e)(this,"ionWillOpen",7),this.ionWillClose=(0,s.e)(this,"ionWillClose",7),this.ionDidOpen=(0,s.e)(this,"ionDidOpen",7),this.ionDidClose=(0,s.e)(this,"ionDidClose",7),this.ionMenuChange=(0,s.e)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=h.G.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=function(t){var e=(0,p.g)(document);e&&!e.contains(n.el)||n.trapKeyboardFocus(t,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}var o,m,b,w,A;return r(e,[{key:"typeChanged",value:function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-".concat(e)),n.classList.add("menu-content-".concat(t)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=(0,d.n)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:(A=n(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0="undefined"!=typeof customElements,!t.t0){t.next=4;break}return t.next=4,customElements.whenDefined("ion-menu");case 4:if(void 0===this.type&&(this.type=u.c.get("menuType","overlay")),null===(e=void 0!==this.contentId?document.getElementById(this.contentId):null)){t.next=19;break}return this.el.contains(e)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),c.m._register(this),t.next=15,Promise.resolve().then(a.bind(a,8145));case 15:this.gesture=t.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:function(t){return n.canStart(t)},onWillStart:function(){return n.onWillStart()},onStart:function(){return n.onStart()},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}}),this.updateState(),t.next=20;break;case 19:console.error('Menu: must have a "content" element to listen for drag events on.');case 20:case"end":return t.stop()}},t,this)})),function(){return A.apply(this,arguments)})},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,d.i)(this.el,["aria-label"])}},{key:"componentDidLoad",value:(w=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 1:case"end":return t.stop()}},t,this)})),function(){return w.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),c.m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}},{key:"onKeydown",value:function(t){"Escape"===t.key&&this.close()}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,t)}},{key:"toggle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,t)}},{key:"setOpen",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return c.m._setOpen(this,t,e)}},{key:"focusFirstDescendant",value:function(){var t=this.el,e=t.querySelector(f);e?e.focus():t.focus()}},{key:"focusLastDescendant",value:function(){var t=this.el,e=Array.from(t.querySelectorAll(f)),n=e.length>0?e[e.length-1]:null;n?n.focus():t.focus()}},{key:"trapKeyboardFocus",value:function(t,e){var n=t.target;n&&(this.el.contains(n)?this.lastFocus=n:(this.focusFirstDescendant(),this.lastFocus===e.activeElement&&this.focusLastDescendant()))}},{key:"_setOpen",value:(b=n(regeneratorRuntime.mark(function t(e){var n,i=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],t.t0=!this._isActive()||this.isAnimating||e===this._isOpen,t.t0){t.next=10;break}return this.beforeAnimation(e),t.next=6,this.loadAnimation();case 6:return t.next=8,this.startAnimation(e,n);case 8:this.afterAnimation(e),t.t0=0;case 10:return t.abrupt("return",!t.t0);case 11:case"end":return t.stop()}},t,this)})),function(t){return b.apply(this,arguments)})},{key:"loadAnimation",value:(m=n(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.menuInnerEl.offsetWidth,t.t0=e===this.width&&void 0!==this.animation,t.t0){t.next=10;break}return this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t.next=7,c.m._createAnimation(this.type,this);case 7:this.animation=t.sent,u.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)})},{key:"startAnimation",value:(o=n(regeneratorRuntime.mark(function t(e,n){var i,o,r,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=!e,o=(0,u.b)(this),r="ios"===o?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",a="ios"===o?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",s=this.animation.direction(i?"reverse":"normal").easing(i?a:r).onFinish(function(){"reverse"===s.getDirection()&&s.direction("normal")}),!n){t.next=6;break}return t.next=4,s.play();case 4:t.next=7;break;case 6:s.play({sync:!0});case 7:case"end":return t.stop()}},t,this)})),function(t,e){return o.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!c.m._getOpenSync()&&v(window,t.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,d.m)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(t){if(this.isAnimating&&this.animation){var e=g(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else(0,d.m)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=g(t.deltaX,n,i),r=this.width,a=o/r,s=t.velocityX,u=r/2,h=s>=0&&(s>.2||t.deltaX>u),c=s<=0&&(s<-.2||t.deltaX<-u),p=n?i?h:c:i?c:h,m=!n&&p;n&&!p&&(m=!0),this.lastOnEnd=t.currentTime;var f=p?.001:-.001;f+=(0,l.g)([0,0],[.4,0],[.6,1],[1,1],(0,d.d)(0,a<0?.01:a,.9999))[0]||0;var b=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(function(){return e.afterAnimation(m)},{oneTimeCallback:!0}).progressEnd(b?1:0,this._isOpen?1-f:f,300)}else(0,d.m)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(t){(0,d.m)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(y),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(k),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(t){(0,d.m)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&(this.contentEl.classList.add(x),this.contentEl.setAttribute("aria-hidden","true")),this.ionDidOpen.emit(),this.menuInnerEl&&this.focusFirstDescendant(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.classList.remove(y),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(x),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(k),this.animation&&this.animation.stop(),this.ionDidClose.emit(),document.removeEventListener("focus",this.handleFocus,!0))}},{key:"updateState",value:function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||c.m._setActiveMenu(this),(0,d.m)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){(0,d.m)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}},{key:"render",value:function(){var e,n=this,i=this.isEndSide,o=this.type,r=this.disabled,a=this.isPaneVisible,l=this.inheritedAttributes,h=(0,u.b)(this);return(0,s.h)(s.H,{role:"navigation","aria-label":l["aria-label"]||"menu",class:(e={},t(e,h,!0),t(e,"menu-type-".concat(o),!0),t(e,"menu-enabled",!r),t(e,"menu-side-end",i),t(e,"menu-side-start",!i),t(e,"menu-pane-visible",a),e)},(0,s.h)("div",{class:"menu-inner",part:"container",ref:function(t){return n.menuInnerEl=t}},(0,s.h)("slot",null)),(0,s.h)("ion-backdrop",{ref:function(t){return n.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}}]),e}(),g=function(t,e,n){return Math.max(0,e!==n?-t:t)},v=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},y="show-menu",k="show-backdrop",x="menu-content-open";b.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};var w=function(){var t=n(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.m.get(e);case 2:if(n=t.sent,t.t0=!n,t.t0){t.next=8;break}return t.next=7,n.isActive();case 7:t.t0=!t.sent;case 8:return t.abrupt("return",!t.t0);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),A=function(){function e(t){var o=this;i(this,e),(0,s.r)(this,t),this.inheritedAttributes={},this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.m.toggle(o.menu));case 1:case"end":return t.stop()}},t)}))}var o;return r(e,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,d.i)(this.el,["aria-label"])}},{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(o=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var e,n=this.color,i=this.disabled,o=this.inheritedAttributes,r=(0,u.b)(this),a=u.c.get("menuIcon","ios"===r?"menu-outline":"menu-sharp"),l=this.autoHide&&!this.visible,h={type:this.type},d=o["aria-label"]||"menu";return(0,s.h)(s.H,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":l?"true":null,class:(0,m.c)(n,(e={},t(e,r,!0),t(e,"button",!0),t(e,"menu-button-hidden",l),t(e,"menu-button-disabled",i),t(e,"in-toolbar",(0,m.h)("ion-toolbar",this.el)),t(e,"in-toolbar-color",(0,m.h)("ion-toolbar[color]",this.el)),t(e,"ion-activatable",!0),t(e,"ion-focusable",!0),e))},(0,s.h)("button",Object.assign({},h,{disabled:i,class:"button-native",part:"native","aria-label":d}),(0,s.h)("span",{class:"button-inner"},(0,s.h)("slot",null,(0,s.h)("ion-icon",{part:"icon",icon:a,mode:r,lazy:!1,"aria-hidden":"true"}))),"md"===r&&(0,s.h)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function(){return(0,s.i)(this)}}]),e}();A.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var C=function(){function e(t){var n=this;i(this,e),(0,s.r)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return c.m.toggle(n.menu)}}var o;return r(e,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(o=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var e,n=(0,u.b)(this),i=this.autoHide&&!this.visible;return(0,s.h)(s.H,{onClick:this.onClick,"aria-hidden":i?"true":null,class:(e={},t(e,n,!0),t(e,"menu-toggle-hidden",i),e)},(0,s.h)("slot",null))}}]),e}();C.style=":host(.menu-toggle-hidden){display:none}"}}])}();