import{s as F,e as g,t as A,a as $,b as E,d as I,f as B,g as d,h as S,j as f,k as _,l as k,m as C,c as L,v as N}from"./scheduler.LRpOgQOC.js";import{S as U,i as j,c as x,a as G,m as H,t as T,b as q,d as P}from"./index.dE1eZLcR.js";import{g as R}from"./entry.XbCZtbrv.js";import{B as W}from"./button.7_mvyLvj.js";import{t as h}from"./translate.HrioCK44.js";import{g as z}from"./index.W9wli2Io.js";import{t as D}from"./index.DNlvbxsr.js";import{i as J,a as K}from"./import-events.pkvpvXtT.js";import{l as M}from"./namespaces.d1QUL--4.js";import{t as w}from"./toaster.ES5mncZo.js";import{p as O}from"./parse-with-big-int.e3oI4SEy.js";import{r as Q}from"./route-for.8mBPKSnN.js";function V(p){let o=h("common.import")+"",n;return{c(){n=A(o)},l(i){n=B(i,o)},m(i,r){_(i,n,r)},p:N,d(i){i&&d(n)}}}function X(p){let o,n=h("events.import-event-history-file-upload")+"",i,r,s,v,l,a,m,c;return l=new W({props:{leadingIcon:"file-upload",disabled:!p[0],$$slots:{default:[V]},$$scope:{ctx:p}}}),l.$on("click",p[2]),{c(){o=g("label"),i=A(n),r=$(),s=g("input"),v=$(),x(l.$$.fragment),this.h()},l(t){o=E(t,"LABEL",{class:!0,for:!0});var e=I(o);i=B(e,n),e.forEach(d),r=S(t),s=E(t,"INPUT",{id:!0,class:!0,type:!0,accept:!0}),v=S(t),G(l.$$.fragment,t),this.h()},h(){f(o,"class","sr-only"),f(o,"for","import-event-history-file-upload"),f(s,"id","import-event-history-file-upload"),f(s,"class","import-input block rounded-md border border-slate-200 p-2"),f(s,"type","file"),f(s,"accept",".json")},m(t,e){_(t,o,e),k(o,i),_(t,r,e),_(t,s,e),_(t,v,e),H(l,t,e),a=!0,m||(c=C(s,"change",p[1]),m=!0)},p(t,[e]){const u={};e&1&&(u.disabled=!t[0]),e&32&&(u.$$scope={dirty:e,ctx:t}),l.$set(u)},i(t){a||(T(l.$$.fragment,t),a=!0)},o(t){q(l.$$.fragment,t),a=!1},d(t){t&&(d(o),d(r),d(s),d(v)),P(l,t),m=!1,c()}}}function Y(p,o,n){let i;L(p,M,a=>n(4,i=a));let r,s=!1;return[s,async a=>{var m;const c=a.target,t=(m=c==null?void 0:c.files)===null||m===void 0?void 0:m[0],e=new FileReader;t&&(e.readAsText(t),e.onload=()=>{var u,y;try{const b=(y=(u=e==null?void 0:e.result)===null||u===void 0?void 0:u.toString())!==null&&y!==void 0?y:"";r=O(b),n(0,s=!0)}catch{w.push({variant:"error",message:h("events.event-history-load-error")}),n(0,s=!1)}})},async()=>{try{const a=await D(Array.isArray(r)?r:r==null?void 0:r.events),m=z(a);J.set(a),K.set(m),n(0,s=!1);const c=Q(i,"feed");R(c)}catch(a){console.error(a),w.push({variant:"error",message:h("events.event-history-import-error")})}}]}class ct extends U{constructor(o){super(),j(this,o,Y,X,F,{})}}export{ct as E};
