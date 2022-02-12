!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e,n,r,i,a,o){try{var s=t[a](o),l=s.value}catch(d){return void n(d)}s.done?e(l):Promise.resolve(l).then(r,i)}function n(t){return function(){var n=this,r=arguments;return new Promise(function(i,a){var o=t.apply(n,r);function s(t){e(o,i,a,s,l,"next",t)}function l(t){e(o,i,a,s,l,"throw",t)}s(void 0)})}}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(self.webpackChunkstoneybrook_hollow=self.webpackChunkstoneybrook_hollow||[]).push([[4918],{4918:function(e,i,a){"use strict";a.r(i),a.d(i,{ion_range:function(){return g}});var o=a(7403),s=a(9266),l=a(9525),d=a(4532),b=a(262),g=function(){function e(t){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(0,o.r)(this,t),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=function(t){return Math.round(t)},this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=function(t){return(0,l.d)(r.min,t,r.max)},this.ensureValueInBounds=function(t){return r.dualKnobs?{lower:r.clampBounds(t.lower),upper:r.clampBounds(t.upper)}:r.clampBounds(t)},this.setupGesture=n(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.rangeSlider,t.t0=e,!t.t0){t.next=7;break}return t.next=5,Promise.resolve().then(a.bind(a,8145));case 5:r.gesture=t.sent.createGesture({el:e,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return r.onStart(t)},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}}),r.gesture.enable(!r.disabled);case 7:case"end":return t.stop()}},t)})),this.handleKeyboard=function(t,e){var n=r.step;n=n>0?n:1,n/=r.max-r.min,e||(n*=-1),"A"===t?r.ratioA=(0,l.d)(0,r.ratioA+n,1):r.ratioB=(0,l.d)(0,r.ratioB+n,1),r.updateValue()},this.onBlur=function(){r.hasFocus&&(r.hasFocus=!1,r.ionBlur.emit(),r.emitStyle())},this.onFocus=function(){r.hasFocus||(r.hasFocus=!0,r.ionFocus.emit(),r.emitStyle())}}var i,g,k;return i=e,k=[{key:"watchers",get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}}],(g=[{key:"debounceChanged",value:function(){this.ionChange=(0,l.j)(this.ionChange,this.debounce)}},{key:"minChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"maxChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}},{key:"valueChanged",value:function(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}},{key:"componentWillLoad",value:function(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-"+p++,this.inheritedAttributes=(0,l.i)(this.el,["aria-label"])}},{key:"componentDidLoad",value:function(){this.setupGesture(),this.didLoad=!0}},{key:"connectedCallback",value:function(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.didLoad&&this.setupGesture()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"getValue",value:function(){var t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}},{key:"onStart",value:function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect(),n=t.currentX,r=(0,l.d)(0,(n-e.left)/e.width,1);(0,d.i)(this.el)&&(r=1-r),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-r)<Math.abs(this.ratioB-r)?"A":"B",this.setFocus(this.pressedKnob),this.update(n)}},{key:"onMove",value:function(t){this.update(t.currentX)}},{key:"onEnd",value:function(t){this.update(t.currentX),this.pressedKnob=void 0}},{key:"update",value:function(t){var e=this.rect,n=(0,l.d)(0,(t-e.left)/e.width,1);(0,d.i)(this.el)&&(n=1-n),this.snaps&&(n=c(u(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}},{key:"valA",get:function(){return u(this.ratioA,this.min,this.max,this.step)}},{key:"valB",get:function(){return u(this.ratioB,this.min,this.max,this.step)}},{key:"ratioLower",get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}},{key:"ratioUpper",get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}},{key:"updateRatio",value:function(){var t=this.getValue(),e=this.min,n=this.max;this.dualKnobs?(this.ratioA=c(t.lower,e,n),this.ratioB=c(t.upper,e,n)):this.ratioA=c(t,e,n)}},{key:"updateValue",value:function(){this.noUpdate=!0;var t=this.valA,e=this.valB;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}},{key:"setFocus",value:function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}},{key:"render",value:function(){var e,n,r=this,i=this.min,a=this.max,g=this.step,u=this.el,p=this.handleKeyboard,k=this.pressedKnob,m=this.disabled,f=this.pin,v=this.ratioLower,x=this.ratioUpper,w=this.inheritedAttributes,y=this.rangeId,z=this.pinFormatter,A=(0,l.e)(u,y).labelText;null==A&&(A=w["aria-label"]);var B=(0,s.b)(this),C=100*v+"%",K=100-100*x+"%",F=(0,d.i)(this.el),S=F?"right":"left",M=function(e){return t({},S,e[S])},R=(t(e={},S,C),t(e,F?"left":"right",K),e),P=[];if(this.snaps&&this.ticks)for(var U=i;U<=a;U+=g){var L=c(U,i,a),V={ratio:L,active:L>=v&&L<=x};V[S]=100*L+"%",P.push(V)}return(0,l.h)(!0,u,this.name,JSON.stringify(this.getValue()),m),(0,o.h)(o.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:y,class:(0,b.c)(this.color,(n={},t(n,B,!0),t(n,"in-item",(0,b.h)("ion-item",u)),t(n,"range-disabled",m),t(n,"range-pressed",void 0!==k),t(n,"range-has-pin",f),n))},(0,o.h)("slot",{name:"start"}),(0,o.h)("div",{class:"range-slider",ref:function(t){return r.rangeSlider=t}},P.map(function(t){return(0,o.h)("div",{style:M(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})}),(0,o.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,o.h)("div",{class:"range-bar range-bar-active",role:"presentation",style:R,part:"bar-active"}),h(F,{knob:"A",pressed:"A"===k,value:this.valA,ratio:this.ratioA,pin:f,pinFormatter:z,disabled:m,handleKeyboard:p,min:i,max:a,labelText:A}),this.dualKnobs&&h(F,{knob:"B",pressed:"B"===k,value:this.valB,ratio:this.ratioB,pin:f,pinFormatter:z,disabled:m,handleKeyboard:p,min:i,max:a,labelText:A})),(0,o.h)("slot",{name:"end"}))}},{key:"el",get:function(){return(0,o.i)(this)}}])&&r(i.prototype,g),k&&r(i,k),Object.defineProperty(i,"prototype",{writable:!1}),e}(),h=function(t,e){var n,r=e.knob,i=e.value,a=e.ratio,s=e.min,l=e.max,d=e.disabled,b=e.pressed,g=e.pin,h=e.handleKeyboard,u=e.labelText,c=e.pinFormatter,p=t?"right":"left";return(0,o.h)("div",{onKeyDown:function(t){var e=t.key;"ArrowLeft"===e||"ArrowDown"===e?(h(r,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==e&&"ArrowUp"!==e||(h(r,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===r,"range-knob-b":"B"===r,"range-knob-pressed":b,"range-knob-min":i===s,"range-knob-max":i===l},style:(n={},n[p]=100*a+"%",n),role:"slider",tabindex:d?-1:0,"aria-label":u,"aria-valuemin":s,"aria-valuemax":l,"aria-disabled":d?"true":null,"aria-valuenow":i},g&&(0,o.h)("div",{class:"range-pin",role:"presentation",part:"pin"},c(i)),(0,o.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},u=function(t,e,n,r){var i=(n-e)*t;return r>0&&(i=Math.round(i/r)*r+e),(0,l.d)(e,i,n)},c=function(t,e,n){return(0,l.d)(0,(t-e)/(n-e),1)},p=0;g.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}}}])}();