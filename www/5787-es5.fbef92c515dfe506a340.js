!function(){function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(d){return void n(d)}c.done?t(s):Promise.resolve(s).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,s,"next",e)}function s(e){i(a,r,o,c,s,"throw",e)}c(void 0)})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkstoneybrook_hollow=self.webpackChunkstoneybrook_hollow||[]).push([[5787],{5787:function(n,r,i){"use strict";i.r(r),i.d(r,{ion_accordion:function(){return h},ion_accordion_group:function(){return f}});var s=i(7403),u=i(9266),l=i(9525),h=function(){function e(t){var n=this;c(this,e),(0,s.r)(this,t),this.updateListener=function(){return n.updateState(!1)},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+p++,this.disabled=!1,this.readonly=!1,this.toggleIcon="chevron-down",this.toggleIconSlot="end",this.setItemDefaults=function(){var e=n.getSlottedHeaderIonItem();e&&(e.button=!0,e.detail=!1,void 0===e.lines&&(e.lines="full"))},this.getSlottedHeaderIonItem=function(){var e=n.headerEl;if(e){var t=e.querySelector("slot");return t?t.assignedElements&&t.assignedElements().find(function(e){return"ION-ITEM"===e.tagName}):void 0}},this.setAria=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=n.getSlottedHeaderIonItem();if(t){var r=(0,l.g)(t).querySelector("button");r&&r.setAttribute("aria-expanded","".concat(e))}},this.slotToggleIcon=function(){var e=n.getSlottedHeaderIonItem();if(e){var t=n.toggleIconSlot,r=n.toggleIcon;if(!e.querySelector(".ion-accordion-toggle-icon")){var o=document.createElement("ion-icon");o.slot=t,o.lazy=!1,o.classList.add("ion-accordion-toggle-icon"),o.icon=r,o.setAttribute("aria-hidden","true"),e.appendChild(o)}}},this.expandAccordion=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e)n.state=4;else if(4!==n.state){var t=n.contentEl,r=n.contentElWrapper;void 0!==t&&void 0!==r&&(void 0!==n.currentRaf&&cancelAnimationFrame(n.currentRaf),n.shouldAnimate()?(0,l.r)(function(){n.state=8,n.currentRaf=(0,l.r)(a(regeneratorRuntime.mark(function e(){var o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.offsetHeight,i=(0,l.t)(t,2e3),t.style.setProperty("max-height","".concat(o,"px")),e.next=4,i;case 4:n.state=4,t.style.removeProperty("max-height");case 6:case"end":return e.stop()}},e)})))}):n.state=4)}},this.collapseAccordion=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e)n.state=1;else if(1!==n.state){var t=n.contentEl;void 0!==t&&(void 0!==n.currentRaf&&cancelAnimationFrame(n.currentRaf),n.shouldAnimate()?n.currentRaf=(0,l.r)(a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.style.setProperty("max-height","".concat(t.offsetHeight,"px")),(0,l.r)(a(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,l.t)(t,2e3),n.state=2,e.next=4,r;case 4:n.state=1,t.style.removeProperty("max-height");case 6:case"end":return e.stop()}},e)})));case 1:case"end":return e.stop()}},e)}))):n.state=1)}},this.shouldAnimate=function(){return"undefined"!=typeof window&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&!(!u.c.get("animated",!0)||n.accordionGroupEl&&!n.accordionGroupEl.animated)},this.updateState=a(regeneratorRuntime.mark(function e(){var t,r,o,i,a,c,s,d,u=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]&&u[0],r=n.accordionGroupEl,o=n.value,r){e.next=4;break}return e.abrupt("return");case 4:i=r.value,(Array.isArray(i)?i.includes(o):i===o)?(n.expandAccordion(t),n.isNext=n.isPrevious=!1):(n.collapseAccordion(t),a=n.getNextSibling(),void 0!==(c=a&&a.value)&&(n.isPrevious=Array.isArray(i)?i.includes(c):i===c),s=n.getPreviousSibling(),void 0!==(d=s&&s.value)&&(n.isNext=Array.isArray(i)?i.includes(d):i===d));case 6:case"end":return e.stop()}},e)})),this.getNextSibling=function(){if(n.el){var e=n.el.nextElementSibling;return"ION-ACCORDION"===(null==e?void 0:e.tagName)?e:void 0}},this.getPreviousSibling=function(){if(n.el){var e=n.el.previousElementSibling;return"ION-ACCORDION"===(null==e?void 0:e.tagName)?e:void 0}}}return d(e,[{key:"connectedCallback",value:function(){var e=this.accordionGroupEl=this.el&&this.el.closest("ion-accordion-group");e&&(this.updateState(!0),(0,l.a)(e,"ionChange",this.updateListener))}},{key:"disconnectedCallback",value:function(){var e=this.accordionGroupEl;e&&(0,l.b)(e,"ionChange",this.updateListener)}},{key:"componentDidLoad",value:function(){var e=this;this.setItemDefaults(),this.slotToggleIcon(),(0,l.r)(function(){e.setAria(4===e.state||8===e.state)})}},{key:"toggleExpanded",value:function(){var e=this.accordionGroupEl,t=this.value,n=this.state;e&&e.requestAccordionToggle(t,1===n||2===n)}},{key:"render",value:function(){var e,t=this,n=this.disabled,r=this.readonly,i=(0,u.b)(this),a=4===this.state||8===this.state,c=a?"header expanded":"header",d=a?"content expanded":"content";return this.setAria(a),(0,s.h)(s.H,{class:(e={},o(e,i,!0),o(e,"accordion-expanding",8===this.state),o(e,"accordion-expanded",4===this.state),o(e,"accordion-collapsing",2===this.state),o(e,"accordion-collapsed",1===this.state),o(e,"accordion-next",this.isNext),o(e,"accordion-previous",this.isPrevious),o(e,"accordion-disabled",n),o(e,"accordion-readonly",r),o(e,"accordion-animated",u.c.getBoolean("animated",!0)),e)},(0,s.h)("div",{onClick:function(){return t.toggleExpanded()},id:"header",part:c,"aria-controls":"content",ref:function(e){return t.headerEl=e}},(0,s.h)("slot",{name:"header"})),(0,s.h)("div",{id:"content",part:d,role:"region","aria-labelledby":"header",ref:function(e){return t.contentEl=e}},(0,s.h)("div",{id:"content-wrapper",ref:function(e){return t.contentElWrapper=e}},(0,s.h)("slot",{name:"content"}))))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"delegatesFocus",get:function(){return!0}}]),e}(),p=0;h.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};var f=function(){function n(e){c(this,n),(0,s.r)(this,e),this.ionChange=(0,s.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}var r,i,l,h,p,f;return d(n,[{key:"valueChanged",value:function(){var e=this.value;!this.multiple&&Array.isArray(e)?this.value=e[0]:this.ionChange.emit({value:this.value})}},{key:"disabledChanged",value:(f=a(regeneratorRuntime.mark(function e(){var n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.disabled,e.next=3,this.getAccordions();case 3:r=e.sent,o=t(r);try{for(o.s();!(i=o.n()).done;)i.value.disabled=n}catch(a){o.e(a)}finally{o.f()}case 6:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)})},{key:"readonlyChanged",value:(p=a(regeneratorRuntime.mark(function e(){var n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.readonly,e.next=3,this.getAccordions();case 3:r=e.sent,o=t(r);try{for(o.s();!(i=o.n()).done;)i.value.readonly=n}catch(a){o.e(a)}finally{o.f()}case 6:case"end":return e.stop()}},e,this)})),function(){return p.apply(this,arguments)})},{key:"onKeydown",value:(h=a(regeneratorRuntime.mark(function e(t){var n,r,o,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.activeElement){e.next=3;break}return e.abrupt("return");case 3:if(r="ION-ACCORDION"===n.tagName?n:n.closest("ion-accordion")){e.next=6;break}return e.abrupt("return");case 6:if(r.closest("ion-accordion-group")===this.el){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,this.getAccordions();case 10:if(o=e.sent,-1!==(i=o.findIndex(function(e){return e===r}))){e.next=14;break}return e.abrupt("return");case 14:"ArrowDown"===t.key?a=this.findNextAccordion(o,i):"ArrowUp"===t.key?a=this.findPreviousAccordion(o,i):"Home"===t.key?a=o[0]:"End"===t.key&&(a=o[o.length-1]),void 0!==a&&a!==n&&a.focus();case 15:case"end":return e.stop()}},e,this)})),function(e){return h.apply(this,arguments)})},{key:"componentDidLoad",value:(l=a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged();case 1:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)})},{key:"requestAccordionToggle",value:(i=a(regeneratorRuntime.mark(function t(n,r){var o,i,a,c,s,d,u,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=this.multiple,i=this.value,a=this.readonly,c=this.disabled,a||c||(r?o?(s=i||[],void 0===(d=Array.isArray(s)?s:[s]).find(function(e){return e===n})&&void 0!==n&&(this.value=[].concat(e(d),[n]))):this.value=n:o?(u=i||[],l=Array.isArray(u)?u:[u],this.value=l.filter(function(e){return e!==n})):this.value=void 0);case 2:case"end":return t.stop()}},t,this)})),function(e,t){return i.apply(this,arguments)})},{key:"findNextAccordion",value:function(e,t){var n=e[t+1];return void 0===n?e[0]:n}},{key:"findPreviousAccordion",value:function(e,t){var n=e[t-1];return void 0===n?e[e.length-1]:n}},{key:"getAccordions",value:(r=a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array.from(this.el.querySelectorAll(":scope > ion-accordion")));case 1:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e,t=this.disabled,n=this.readonly,r=this.expand,i=(0,u.b)(this);return(0,s.h)(s.H,{class:(e={},o(e,i,!0),o(e,"accordion-group-disabled",t),o(e,"accordion-group-readonly",n),o(e,"accordion-group-expand-".concat(r),!0),e),role:"presentation"},(0,s.h)("slot",null))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}}]),n}();f.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}])}();