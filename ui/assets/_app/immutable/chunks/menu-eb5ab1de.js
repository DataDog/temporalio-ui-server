import{S as L,i as M,s as C,F as T,k as O,l as j,m as D,h as E,n as d,b as U,G as B,H as K,I as N,f as g,t as v,M as I,N as y,a as A,c as F,Z as S,Q as b,K as G,a0 as H,R as z,ao as P,g as Q,d as R,E as V,D as Z,w as J,x as W,y as X,z as Y,O as w,aa as p,am as x}from"./index-e34e5223.js";import{I as $}from"./icon-cbca436c.js";import{f as ee}from"./index-ac2cb840.js";function te(t){let e,n,i;const u=t[2].default,a=T(u,t,t[1],null);return{c(){e=O("div"),a&&a.c(),this.h()},l(s){e=j(s,"DIV",{class:!0});var l=D(e);a&&a.l(l),l.forEach(E),this.h()},h(){d(e,"class",n="relative inline-block "+t[0].class)},m(s,l){U(s,e,l),a&&a.m(e,null),i=!0},p(s,[l]){a&&a.p&&(!i||l&2)&&B(a,u,s,s[1],i?N(u,s[1],l,null):K(s[1]),null),(!i||l&1&&n!==(n="relative inline-block "+s[0].class))&&d(e,"class",n)},i(s){i||(g(a,s),i=!0)},o(s){v(a,s),i=!1},d(s){s&&E(e),a&&a.d(s)}}}function le(t,e,n){let{$$slots:i={},$$scope:u}=e;return t.$$set=a=>{n(0,e=I(I({},e),y(a))),"$$scope"in a&&n(1,u=a.$$scope)},e=y(e),[e,u,i]}class ce extends L{constructor(e){super(),M(this,e,le,te,C,{})}}const ae=(t,e)=>{const n=()=>{t.dispatchEvent(new CustomEvent("toggle-menu"))},i=a=>{var l;let s=(l=a.path)!=null&&l.length?a.path[0]:a.target;!s&&a.relatedTarget&&(s=a.relatedTarget),t&&!t.contains(s)&&t.ariaExpanded==="true"&&!e&&(t.dispatchEvent(new CustomEvent("close-menu")),a.stopPropagation())},u=a=>{(a.key==="Escape"||a.key==="Enter"||a.key===" ")&&t.dispatchEvent(new CustomEvent("close-menu"))};return t.setAttribute("tabindex","0"),t.addEventListener("click",n,!1),document.addEventListener("click",i,!1),document.addEventListener("keyup",u,!1),{update(a){e=a},destroy(){t.removeEventListener("click",n,!1),document.removeEventListener("click",i,!1),document.removeEventListener("keyup",u,!1)}}};function q(t){let e,n;return e=new $({props:{class:"pointer-events-none",name:t[0]?"chevron-up":"chevron-down"}}),{c(){J(e.$$.fragment)},l(i){W(e.$$.fragment,i)},m(i,u){X(e,i,u),n=!0},p(i,u){const a={};u&1&&(a.name=i[0]?"chevron-up":"chevron-down"),e.$set(a)},i(i){n||(g(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){Y(e,i)}}}function se(t){let e,n,i,u,a,s,l,r,h;const k=t[11].default,_=T(k,t,t[10],null);let c=t[4]&&q(t);return{c(){e=O("button"),_&&_.c(),n=A(),c&&c.c(),this.h()},l(o){e=j(o,"BUTTON",{type:!0,id:!0,"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,class:!0,"data-testid":!0});var f=D(e);_&&_.l(f),n=F(f),c&&c.l(f),f.forEach(E),this.h()},h(){d(e,"type","button"),d(e,"id",t[6]),d(e,"aria-haspopup",i=!t[3]),d(e,"aria-controls",t[1]),d(e,"aria-expanded",t[0]),d(e,"class",u=S(t[9].class)+" svelte-jjrza"),e.disabled=t[3],d(e,"data-testid",a=t[9].testId),b(e,"dark",t[2]),b(e,"show",t[0])},m(o,f){U(o,e,f),_&&_.m(e,null),G(e,n),c&&c.m(e,null),l=!0,r||(h=[H(s=ae.call(null,e,t[5])),z(e,"close-menu",t[7]),z(e,"toggle-menu",t[8]),z(e,"click",P(t[12]))],r=!0)},p(o,[f]){_&&_.p&&(!l||f&1024)&&B(_,k,o,o[10],l?N(k,o[10],f,null):K(o[10]),null),o[4]?c?(c.p(o,f),f&16&&g(c,1)):(c=q(o),c.c(),g(c,1),c.m(e,null)):c&&(Q(),v(c,1,1,()=>{c=null}),R()),(!l||f&64)&&d(e,"id",o[6]),(!l||f&8&&i!==(i=!o[3]))&&d(e,"aria-haspopup",i),(!l||f&2)&&d(e,"aria-controls",o[1]),(!l||f&1)&&d(e,"aria-expanded",o[0]),(!l||f&512&&u!==(u=S(o[9].class)+" svelte-jjrza"))&&d(e,"class",u),(!l||f&8)&&(e.disabled=o[3]),(!l||f&512&&a!==(a=o[9].testId))&&d(e,"data-testid",a),s&&V(s.update)&&f&32&&s.update.call(null,o[5]),(!l||f&516)&&b(e,"dark",o[2]),(!l||f&513)&&b(e,"show",o[0])},i(o){l||(g(_,o),g(c),l=!0)},o(o){v(_,o),v(c),l=!1},d(o){o&&E(e),_&&_.d(o),c&&c.d(),r=!1,Z(h)}}}function ne(t,e,n){let{$$slots:i={},$$scope:u}=e,{show:a}=e,{controls:s}=e,{dark:l=!1}=e,{disabled:r=!1}=e,{hasIndicator:h=!1}=e,{keepOpen:k=!1}=e,{id:_=null}=e;const c=()=>{!r&&n(0,a=!1)},o=()=>{!r&&n(0,a=!a)};function f(m){w.call(this,t,m)}return t.$$set=m=>{n(9,e=I(I({},e),y(m))),"show"in m&&n(0,a=m.show),"controls"in m&&n(1,s=m.controls),"dark"in m&&n(2,l=m.dark),"disabled"in m&&n(3,r=m.disabled),"hasIndicator"in m&&n(4,h=m.hasIndicator),"keepOpen"in m&&n(5,k=m.keepOpen),"id"in m&&n(6,_=m.id),"$$scope"in m&&n(10,u=m.$$scope)},e=y(e),[a,s,l,r,h,k,_,c,o,e,u,i,f]}class de extends L{constructor(e){super(),M(this,e,ne,se,C,{show:0,controls:1,dark:2,disabled:3,hasIndicator:4,keepOpen:5,id:6})}}function ie(t){let e,n,i,u;const a=t[6].default,s=T(a,t,t[5],null);return{c(){e=O("ul"),s&&s.c(),this.h()},l(l){e=j(l,"UL",{role:!0,class:!0,"aria-labelledby":!0,id:!0});var r=D(e);s&&s.l(r),r.forEach(E),this.h()},h(){d(e,"role","menu"),d(e,"class",n="absolute z-50 mt-1 w-full list-none rounded border border-gray-300 bg-white text-primary shadow "+t[3]+" "+t[4].class+" svelte-zt7cn"),d(e,"aria-labelledby",t[0]),d(e,"id",t[0]),b(e,"dark",t[2]),b(e,"sr-only",!t[1])},m(l,r){U(l,e,r),s&&s.m(e,null),u=!0},p(l,[r]){s&&s.p&&(!u||r&32)&&B(s,a,l,l[5],u?N(a,l[5],r,null):K(l[5]),null),(!u||r&24&&n!==(n="absolute z-50 mt-1 w-full list-none rounded border border-gray-300 bg-white text-primary shadow "+l[3]+" "+l[4].class+" svelte-zt7cn"))&&d(e,"class",n),(!u||r&1)&&d(e,"aria-labelledby",l[0]),(!u||r&1)&&d(e,"id",l[0]),(!u||r&28)&&b(e,"dark",l[2]),(!u||r&26)&&b(e,"sr-only",!l[1])},i(l){u||(g(s,l),i||p(()=>{i=x(e,ee,{duration:100}),i.start()}),u=!0)},o(l){v(s,l),u=!1},d(l){l&&E(e),s&&s.d(l)}}}function ue(t,e,n){let{$$slots:i={},$$scope:u}=e,{id:a}=e,{show:s=!1}=e,{dark:l=!1}=e,{position:r="left"}=e;return t.$$set=h=>{n(4,e=I(I({},e),y(h))),"id"in h&&n(0,a=h.id),"show"in h&&n(1,s=h.show),"dark"in h&&n(2,l=h.dark),"position"in h&&n(3,r=h.position),"$$scope"in h&&n(5,u=h.$$scope)},e=y(e),[a,s,l,r,e,u,i]}class me extends L{constructor(e){super(),M(this,e,ue,ie,C,{id:0,show:1,dark:2,position:3})}}export{ce as M,de as a,me as b};
