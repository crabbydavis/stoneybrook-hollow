(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0sE8":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("mrSG"),o=n("lJxs"),i=n("fXoL"),c=n("I/3d"),s=n("Vaw3");let a=(()=>{class e{constructor(e,t){this.firestore=e,this.storage=t,this.projectsCollection=this.firestore.collection("projects"),this.bannerCollection=this.firestore.collection("banner")}getBannerImages(){return this.bannerCollection.valueChanges().pipe(Object(o.a)(e=>(console.log("banner",e),e.forEach(e=>Object(r.__awaiter)(this,void 0,void 0,(function*(){const t=yield this.storage.ref("Gallery/"+e.image).getDownloadURL().toPromise();e.image=t}))),e)))}getProjects(){return this.projectsCollection.valueChanges().pipe(Object(o.a)(e=>(e.forEach(e=>Object(r.__awaiter)(this,void 0,void 0,(function*(){const t=yield this.storage.ref("Gallery/"+e.image).getDownloadURL().toPromise();e.image=t,console.log(t)}))),e)))}getProjectDetails(e){return this.firestore.collection("projectDetails",t=>t.where("name","==",e)).valueChanges().pipe(Object(o.a)(e=>{const t=e[0];return t.images.forEach((e,n)=>Object(r.__awaiter)(this,void 0,void 0,(function*(){const r=yield this.storage.ref("Gallery/"+e).getDownloadURL().toPromise();t.images[n]=r}))),t}))}}return e.\u0275fac=function(t){return new(t||e)(i.Rb(c.a),i.Rb(s.a))},e.\u0275prov=i.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const r=`${e*t/n-e}ms`,o=2*Math.PI*t/n;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const r=t/n,o=`${e*r-e}ms`,i=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})}}},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return s}));const r=(e,t)=>null!==t.closest(e),o=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},c=/^[a-z][a-z0-9+\-.]*:/,s=async(e,t,n)=>{if(null!=e&&"#"!==e[0]&&!c.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n)}return!1}},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const r=async(e,t,n,r,o)=>{if(e)return e.attachViewToDom(t,n,o,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return r&&r.forEach(e=>i.classList.add(e)),o&&Object.assign(i,o),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Uwmq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,s.forEach(e=>{const n=t.querySelectorAll(e);for(let r=n.length-1;r>=0;r--){const e=n[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const c=i(e);for(let t=0;t<c.length;t++)o(c[t])}});const r=i(t);for(let e=0;e<r.length;e++)o(r[e]);const c=document.createElement("div");c.appendChild(t);const a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},o=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),r=t.name;if(!c.includes(r.toLowerCase())){e.removeAttribute(r);continue}const o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const t=i(e);for(let n=0;n<t.length;n++)o(t[n])},i=e=>null!=e.children?e.children:e.childNodes,c=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return r}));const r=()=>{const e=window.TapticEngine;e&&e.selection()},o=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},c=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);