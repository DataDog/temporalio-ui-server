import{S as M,i as C,s as T,F as j,k as O,l as D,m as N,h as g,n as d,b as z,G as U,H as B,I as K,f as b,t as k,M as I,N as y,a as P,c as Q,$ as S,Q as E,K as R,X as V,R as L,an as X,g as G,d as H,E as J,D as W,w as Y,x as Z,y as w,z as p,O as x,e as q,aa as $,aj as ee}from"./index-3630b6f8.js";import{I as le}from"./icon-a76a7fcc.js";import{f as te}from"./index-c2253cff.js";function ae(t){let e,i,l;const n=t[2].default,a=j(n,t,t[1],null);return{c(){e=O("div"),a&&a.c(),this.h()},l(u){e=D(u,"DIV",{class:!0});var s=N(e);a&&a.l(s),s.forEach(g),this.h()},h(){d(e,"class",i="relative inline-block "+t[0].class)},m(u,s){z(u,e,s),a&&a.m(e,null),l=!0},p(u,[s]){a&&a.p&&(!l||s&2)&&U(a,n,u,u[1],l?K(n,u[1],s,null):B(u[1]),null),(!l||s&1&&i!==(i="relative inline-block "+u[0].class))&&d(e,"class",i)},i(u){l||(b(a,u),l=!0)},o(u){k(a,u),l=!1},d(u){u&&g(e),a&&a.d(u)}}}function se(t,e,i){let{$$slots:l={},$$scope:n}=e;return t.$$set=a=>{i(0,e=I(I({},e),y(a))),"$$scope"in a&&i(1,n=a.$$scope)},e=y(e),[e,n,l]}class me extends M{constructor(e){super(),C(this,e,se,ae,T,{})}}const ne=(t,e)=>{const i=()=>{t.dispatchEvent(new CustomEvent("toggle-menu"))},l=a=>{var s;let u=(s=a.path)!=null&&s.length?a.path[0]:a.target;!u&&a.relatedTarget&&(u=a.relatedTarget),t&&!t.contains(u)&&t.ariaExpanded==="true"&&!e&&(t.dispatchEvent(new CustomEvent("close-menu")),a.stopPropagation())},n=a=>{(a.key==="Escape"||a.key==="Enter"||a.key===" ")&&t.dispatchEvent(new CustomEvent("close-menu"))};return t.setAttribute("tabindex","0"),t.addEventListener("click",i,!1),document.addEventListener("click",l,!1),document.addEventListener("keyup",n,!1),{update(a){e=a},destroy(){t.removeEventListener("click",i,!1),document.removeEventListener("click",l,!1),document.removeEventListener("keyup",n,!1)}}};function A(t){let e,i;return e=new le({props:{class:"pointer-events-none",name:t[0]?"chevron-up":"chevron-down"}}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,n){w(e,l,n),i=!0},p(l,n){const a={};n&1&&(a.name=l[0]?"chevron-up":"chevron-down"),e.$set(a)},i(l){i||(b(e.$$.fragment,l),i=!0)},o(l){k(e.$$.fragment,l),i=!1},d(l){p(e,l)}}}function ie(t){let e,i,l,n,a,u,s,f,h;const v=t[11].default,_=j(v,t,t[10],null);let c=t[4]&&A(t);return{c(){e=O("button"),_&&_.c(),i=P(),c&&c.c(),this.h()},l(o){e=D(o,"BUTTON",{type:!0,id:!0,"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,class:!0,"data-testid":!0});var r=N(e);_&&_.l(r),i=Q(r),c&&c.l(r),r.forEach(g),this.h()},h(){d(e,"type","button"),d(e,"id",t[6]),d(e,"aria-haspopup",l=!t[3]),d(e,"aria-controls",t[1]),d(e,"aria-expanded",t[0]),d(e,"class",n=S(t[9].class)+" svelte-jjrza"),e.disabled=t[3],d(e,"data-testid",a=t[9].testId),E(e,"dark",t[2]),E(e,"show",t[0])},m(o,r){z(o,e,r),_&&_.m(e,null),R(e,i),c&&c.m(e,null),s=!0,f||(h=[V(u=ne.call(null,e,t[5])),L(e,"close-menu",t[7]),L(e,"toggle-menu",t[8]),L(e,"click",X(t[12]))],f=!0)},p(o,[r]){_&&_.p&&(!s||r&1024)&&U(_,v,o,o[10],s?K(v,o[10],r,null):B(o[10]),null),o[4]?c?(c.p(o,r),r&16&&b(c,1)):(c=A(o),c.c(),b(c,1),c.m(e,null)):c&&(G(),k(c,1,1,()=>{c=null}),H()),(!s||r&64)&&d(e,"id",o[6]),(!s||r&8&&l!==(l=!o[3]))&&d(e,"aria-haspopup",l),(!s||r&2)&&d(e,"aria-controls",o[1]),(!s||r&1)&&d(e,"aria-expanded",o[0]),(!s||r&512&&n!==(n=S(o[9].class)+" svelte-jjrza"))&&d(e,"class",n),(!s||r&8)&&(e.disabled=o[3]),(!s||r&512&&a!==(a=o[9].testId))&&d(e,"data-testid",a),u&&J(u.update)&&r&32&&u.update.call(null,o[5]),(!s||r&516)&&E(e,"dark",o[2]),(!s||r&513)&&E(e,"show",o[0])},i(o){s||(b(_,o),b(c),s=!0)},o(o){k(_,o),k(c),s=!1},d(o){o&&g(e),_&&_.d(o),c&&c.d(),f=!1,W(h)}}}function ue(t,e,i){let{$$slots:l={},$$scope:n}=e,{show:a}=e,{controls:u}=e,{dark:s=!1}=e,{disabled:f=!1}=e,{hasIndicator:h=!1}=e,{keepOpen:v=!1}=e,{id:_=null}=e;const c=()=>{!f&&i(0,a=!1)},o=()=>{!f&&i(0,a=!a)};function r(m){x.call(this,t,m)}return t.$$set=m=>{i(9,e=I(I({},e),y(m))),"show"in m&&i(0,a=m.show),"controls"in m&&i(1,u=m.controls),"dark"in m&&i(2,s=m.dark),"disabled"in m&&i(3,f=m.disabled),"hasIndicator"in m&&i(4,h=m.hasIndicator),"keepOpen"in m&&i(5,v=m.keepOpen),"id"in m&&i(6,_=m.id),"$$scope"in m&&i(10,n=m.$$scope)},e=y(e),[a,u,s,f,h,v,_,c,o,e,n,l,r]}class he extends M{constructor(e){super(),C(this,e,ue,ie,T,{show:0,controls:1,dark:2,disabled:3,hasIndicator:4,keepOpen:5,id:6})}}function F(t){let e,i,l,n;const a=t[6].default,u=j(a,t,t[5],null);return{c(){e=O("ul"),u&&u.c(),this.h()},l(s){e=D(s,"UL",{role:!0,class:!0,"aria-labelledby":!0,id:!0});var f=N(e);u&&u.l(f),f.forEach(g),this.h()},h(){d(e,"role","menu"),d(e,"class",i="absolute z-50 mt-1 w-full list-none rounded border border-gray-300 bg-white text-primary shadow "+t[3]+" "+t[4].class+" svelte-zt7cn"),d(e,"aria-labelledby",t[0]),d(e,"id",t[0]),E(e,"dark",t[2])},m(s,f){z(s,e,f),u&&u.m(e,null),n=!0},p(s,f){u&&u.p&&(!n||f&32)&&U(u,a,s,s[5],n?K(a,s[5],f,null):B(s[5]),null),(!n||f&24&&i!==(i="absolute z-50 mt-1 w-full list-none rounded border border-gray-300 bg-white text-primary shadow "+s[3]+" "+s[4].class+" svelte-zt7cn"))&&d(e,"class",i),(!n||f&1)&&d(e,"aria-labelledby",s[0]),(!n||f&1)&&d(e,"id",s[0]),(!n||f&28)&&E(e,"dark",s[2])},i(s){n||(b(u,s),l||$(()=>{l=ee(e,te,{duration:100}),l.start()}),n=!0)},o(s){k(u,s),n=!1},d(s){s&&g(e),u&&u.d(s)}}}function oe(t){let e,i,l=t[1]&&F(t);return{c(){l&&l.c(),e=q()},l(n){l&&l.l(n),e=q()},m(n,a){l&&l.m(n,a),z(n,e,a),i=!0},p(n,[a]){n[1]?l?(l.p(n,a),a&2&&b(l,1)):(l=F(n),l.c(),b(l,1),l.m(e.parentNode,e)):l&&(G(),k(l,1,1,()=>{l=null}),H())},i(n){i||(b(l),i=!0)},o(n){k(l),i=!1},d(n){l&&l.d(n),n&&g(e)}}}function fe(t,e,i){let{$$slots:l={},$$scope:n}=e,{id:a}=e,{show:u=!1}=e,{dark:s=!1}=e,{position:f="left"}=e;return t.$$set=h=>{i(4,e=I(I({},e),y(h))),"id"in h&&i(0,a=h.id),"show"in h&&i(1,u=h.show),"dark"in h&&i(2,s=h.dark),"position"in h&&i(3,f=h.position),"$$scope"in h&&i(5,n=h.$$scope)},e=y(e),[a,u,s,f,e,n,l]}class _e extends M{constructor(e){super(),C(this,e,fe,oe,T,{id:0,show:1,dark:2,position:3})}}export{me as M,he as a,_e as b};
