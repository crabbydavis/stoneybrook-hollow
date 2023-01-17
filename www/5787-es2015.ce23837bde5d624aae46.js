(self.webpackChunkstoneybrook_hollow=self.webpackChunkstoneybrook_hollow||[]).push([[5787],{5787:function(t,o,e){"use strict";e.r(o),e.d(o,{ion_accordion:function(){return s},ion_accordion_group:function(){return c}});var i=e(7403),n=e(4652),r=e(9266),a=e(9525);let s=class{constructor(t){(0,i.r)(this,t),this.updateListener=()=>this.updateState(!1),this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+d++,this.disabled=!1,this.readonly=!1,this.toggleIcon=n.i,this.toggleIconSlot="end",this.setItemDefaults=()=>{const t=this.getSlottedHeaderIonItem();t&&(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:t}=this;if(!t)return;const o=t.querySelector("slot");return o?o.assignedElements&&o.assignedElements().find(t=>"ION-ITEM"===t.tagName):void 0},this.setAria=(t=!1)=>{const o=this.getSlottedHeaderIonItem();if(!o)return;const e=(0,a.g)(o).querySelector("button");e&&e.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const{toggleIconSlot:o,toggleIcon:e}=this;if(t.querySelector(".ion-accordion-toggle-icon"))return;const i=document.createElement("ion-icon");i.slot=o,i.lazy=!1,i.classList.add("ion-accordion-toggle-icon"),i.icon=e,i.setAttribute("aria-hidden","true"),t.appendChild(i)},this.expandAccordion=(t=!1)=>{if(t)return void(this.state=4);if(4===this.state)return;const{contentEl:o,contentElWrapper:e}=this;void 0!==o&&void 0!==e&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(0,a.r)(()=>{this.state=8,this.currentRaf=(0,a.r)(async()=>{const t=e.offsetHeight,i=(0,a.t)(o,2e3);o.style.setProperty("max-height",`${t}px`),await i,this.state=4,o.style.removeProperty("max-height")})}):this.state=4)},this.collapseAccordion=(t=!1)=>{if(t)return void(this.state=1);if(1===this.state)return;const{contentEl:o}=this;void 0!==o&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=(0,a.r)(async()=>{o.style.setProperty("max-height",`${o.offsetHeight}px`),(0,a.r)(async()=>{const t=(0,a.t)(o,2e3);this.state=2,await t,this.state=1,o.style.removeProperty("max-height")})}):this.state=1)},this.shouldAnimate=()=>"undefined"!=typeof window&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&!(!r.c.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=async(t=!1)=>{const o=this.accordionGroupEl,e=this.value;if(!o)return;const i=o.value;if(Array.isArray(i)?i.includes(e):i===e)this.expandAccordion(t),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(t);const o=this.getNextSibling(),e=o&&o.value;void 0!==e&&(this.isPrevious=Array.isArray(i)?i.includes(e):i===e);const n=this.getPreviousSibling(),r=n&&n.value;void 0!==r&&(this.isNext=Array.isArray(i)?i.includes(r):i===r)}},this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0}}connectedCallback(){const t=this.accordionGroupEl=this.el&&this.el.closest("ion-accordion-group");t&&(this.updateState(!0),(0,a.a)(t,"ionChange",this.updateListener))}disconnectedCallback(){const t=this.accordionGroupEl;t&&(0,a.b)(t,"ionChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),(0,a.r)(()=>{this.setAria(4===this.state||8===this.state)})}toggleExpanded(){const{accordionGroupEl:t,value:o,state:e}=this;t&&t.requestAccordionToggle(o,1===e||2===e)}render(){const{disabled:t,readonly:o}=this,e=(0,r.b)(this),n=4===this.state||8===this.state,a=n?"header expanded":"header",s=n?"content expanded":"content";return this.setAria(n),(0,i.h)(i.H,{class:{[e]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":t,"accordion-readonly":o,"accordion-animated":r.c.getBoolean("animated",!0)}},(0,i.h)("div",{onClick:()=>this.toggleExpanded(),id:"header",part:a,"aria-controls":"content",ref:t=>this.headerEl=t},(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{id:"content",part:s,role:"region","aria-labelledby":"header",ref:t=>this.contentEl=t},(0,i.h)("div",{id:"content-wrapper",ref:t=>this.contentElWrapper=t},(0,i.h)("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return(0,i.i)(this)}},d=0;s.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};let c=class{constructor(t){(0,i.r)(this,t),this.ionChange=(0,i.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:t,multiple:o}=this;!o&&Array.isArray(t)?this.value=t[0]:this.ionChange.emit({value:this.value})}async disabledChanged(){const{disabled:t}=this,o=await this.getAccordions();for(const e of o)e.disabled=t}async readonlyChanged(){const{readonly:t}=this,o=await this.getAccordions();for(const e of o)e.readonly=t}async onKeydown(t){const o=document.activeElement;if(!o)return;const e="ION-ACCORDION"===o.tagName?o:o.closest("ion-accordion");if(!e)return;if(e.closest("ion-accordion-group")!==this.el)return;const i=await this.getAccordions(),n=i.findIndex(t=>t===e);if(-1===n)return;let r;"ArrowDown"===t.key?r=this.findNextAccordion(i,n):"ArrowUp"===t.key?r=this.findPreviousAccordion(i,n):"Home"===t.key?r=i[0]:"End"===t.key&&(r=i[i.length-1]),void 0!==r&&r!==o&&r.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged()}async requestAccordionToggle(t,o){const{multiple:e,value:i,readonly:n,disabled:r}=this;if(!n&&!r)if(o)if(e){const o=i||[],e=Array.isArray(o)?o:[o];void 0===e.find(o=>o===t)&&void 0!==t&&(this.value=[...e,t])}else this.value=t;else if(e){const o=i||[],e=Array.isArray(o)?o:[o];this.value=e.filter(o=>o!==t)}else this.value=void 0}findNextAccordion(t,o){const e=t[o+1];return void 0===e?t[0]:e}findPreviousAccordion(t,o){const e=t[o-1];return void 0===e?t[t.length-1]:e}async getAccordions(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))}render(){const{disabled:t,readonly:o,expand:e}=this,n=(0,r.b)(this);return(0,i.h)(i.H,{class:{[n]:!0,"accordion-group-disabled":t,"accordion-group-readonly":o,[`accordion-group-expand-${e}`]:!0},role:"presentation"},(0,i.h)("slot",null))}get el(){return(0,i.i)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};c.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);