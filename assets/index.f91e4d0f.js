import{d as e,c as t,r as o,o as r,a as n,b as s,l,e as a,f as i}from"./vendor.fc6702b5.js";var p=e({name:"App"});let c;p.render=function(e,n,s,l,a,i){const p=o("router-view");return r(),t(p)};const d={},m=function(e,t){if(!t||0===t.length)return e();if(void 0===c){const e=document.createElement("link").relList;c=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in d)return;d[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":c,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},u=[{name:"temp1",path:"/temp1",component:()=>m((()=>import("./temp1.929d9aa5.js")),["/jam/assets/temp1.929d9aa5.js","/jam/assets/vendor.fc6702b5.js"]),props:!0},{name:"index",path:"/",component:()=>m((()=>import("./index.e0907745.js")),["/jam/assets/index.e0907745.js","/jam/assets/vendor.fc6702b5.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>m((()=>import("./[...all].c6f9c5a2.js")),["/jam/assets/[...all].c6f9c5a2.js","/jam/assets/vendor.fc6702b5.js"]),props:!0}];console.log("🦕 routes",u);const h=n({history:s(),routes:u}),_=a();i(p).use(h).use(_).directive("highlightjs",((e,t)=>{const o=e.querySelectorAll("code");for(let r=0;r<o.length;r++){const e=o[r];"string"==typeof t.value&&(e.textContent=t.value),l.highlightBlock(e)}})).mount("#app");
