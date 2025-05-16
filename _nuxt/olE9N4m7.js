import{_ as k}from"./CyUoJfwB.js";import{y as m,z as A,g as w,x as B,p as L,A as M,c as _,o as l,a,l as d,b as p,n as j,F as C,s as g,k as x,w as v,d as f,t as N,_ as z,m as F}from"./DUeoeGxy.js";/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,s)=>s?s.toUpperCase():o.toLowerCase()),D=t=>{const e=S(t);return e.charAt(0).toUpperCase()+e.slice(1)},E=(...t)=>t.filter((e,o,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=({size:t,strokeWidth:e=2,absoluteStrokeWidth:o,color:s,iconNode:n,name:i,class:r,...h},{slots:c})=>m("svg",{...u,width:t||u.width,height:t||u.height,stroke:s||u.stroke,"stroke-width":o?Number(e)*24/Number(t):e,class:E("lucide",...i?[`lucide-${b(D(i))}-icon`,`lucide-${b(i)}`]:["lucide-icon"]),...h},[...n.map(y=>m(...y)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(t,e)=>(o,{slots:s})=>m(H,{...o,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=U("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]),$=A("nav",{state:()=>({links:[{label:"Home",to:"/"},{label:"About",to:"/#about"},{label:"Projects",to:"/#projects"},{label:"Contact",to:"/#contact"}]}),getters:{topNav:t=>t.links,footerNav:t=>t.links}}),I={class:"base-mobile-nav"},O={class:"base-mobile-nav__handle"},P=w({__name:"MobileNav",setup(t){const e=B(!1),o=$();function s(){n()}function n(){e.value=!1}return L(()=>{window.addEventListener("resize",s)}),M(()=>{window.removeEventListener("resize",s)}),(i,r)=>{const h=k;return l(),_("div",I,[a("div",O,[a("button",{onClick:r[0]||(r[0]=c=>e.value=!d(e))},[p(d(V),{size:32})])]),a("div",{class:j(["base-mobile-nav__menu is-brutal",{"is-active":d(e)}])},[a("nav",null,[(l(!0),_(C,null,g(d(o).topNav,c=>(l(),x(h,{key:c.to,to:c.to,class:"nav-link",onClick:n},{default:v(()=>[f(N(c.label),1)]),_:2},1032,["to"]))),128))])],2)])}}}),Z={class:"base-header is-flex"},K={class:"container base-header__content"},R={class:"nav-links is-hidden-mobile"},T={class:"is-hidden-tablet"},q=w({__name:"Header",setup(t){const e=$();return(o,s)=>{const n=k,i=P;return l(),_("header",Z,[a("div",K,[p(n,{to:"/",class:"base-header__title"},{default:v(()=>s[0]||(s[0]=[f("Andrew De Forest")])),_:1}),a("nav",R,[(l(!0),_(C,null,g(d(e).topNav,r=>(l(),x(n,{key:r.to,to:r.to,class:"nav-link"},{default:v(()=>[f(N(r.label),1)]),_:2},1032,["to"]))),128))]),a("div",T,[p(i)])])])}}}),G={},J={class:"page"};function Q(t,e){const o=q;return l(),_("div",J,[p(o),F(t.$slots,"default"),e[0]||(e[0]=a("footer",{class:"footer has-background-black has-text-white is-family-monospace py-5"},[a("div",{class:"content has-text-centered"},[a("p",{class:"is-size-5"},"© 2025 Andrew De Forest")])],-1))])}const W=z(G,[["render",Q]]);export{W as default};
