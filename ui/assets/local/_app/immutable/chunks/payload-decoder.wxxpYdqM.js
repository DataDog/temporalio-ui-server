import{s as V,p as v,u as T,q,r as E,c as b}from"./scheduler.LRpOgQOC.js";import{S as I,i as S,t as U,b as W}from"./index.dE1eZLcR.js";import{p as w}from"./stores.zceJZ__p.js";import{a as B}from"./auth-user.UIpnvKPu.js";import{g as j,a as z,b as D,c as F,d as G}from"./decode-payload.Zcnhu9OM.js";import{s as _}from"./parse-with-big-int.e3oI4SEy.js";const H=e=>({decodedValue:e&1}),h=e=>({decodedValue:e[0]});function J(e){let a;const o=e[9].default,s=v(o,e,e[8],h);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),a=!0},p(t,[n]){s&&s.p&&(!a||n&257)&&T(s,o,t,t[8],a?E(o,t[8],n,H):q(t[8]),h)},i(t){a||(U(s,t),a=!0)},o(t){W(s,t),a=!1},d(t){s&&s.d(t)}}}function K(e,a,o){let s,t,n,g,m,c;b(e,B,d=>o(11,m=d)),b(e,w,d=>o(7,c=d));let{$$slots:C={},$$scope:y}=a;var l;let{value:i}=a,{key:r=""}=a,P=r&&(i!=null&&i[r])?i[r]:i,f=_(P);const A=async d=>{try{const p=await F(d,c.params.namespace,g,m.accessToken),u=G(p),k=r&&(u==null?void 0:u[r]);k?o(0,f=_(k)):o(0,f=_(u))}catch{console.error("Could not decode payloads")}};return e.$$set=d=>{"value"in d&&o(1,i=d.value),"key"in d&&o(2,r=d.key),"$$scope"in d&&o(8,y=d.$$scope)},e.$$.update=()=>{e.$$.dirty&128&&o(6,s=j(c.data.settings)),e.$$.dirty&128&&o(5,t=z(c.data.settings)),e.$$.dirty&128&&o(4,n=D(c.data.settings)),e.$$.dirty&248&&(g={...c.data.settings,codec:{...o(3,l=c.data.settings)===null||l===void 0?void 0:l.codec,endpoint:s,passAccessToken:t,includeCredentials:n}}),e.$$.dirty&2&&A(i)},[f,i,r,l,n,t,s,c,y,C]}class X extends I{constructor(a){super(),S(this,a,K,J,V,{value:1,key:2})}}export{X as P};
