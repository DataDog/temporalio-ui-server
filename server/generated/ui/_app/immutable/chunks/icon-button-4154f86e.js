import{S as D,i as E,s as N,l as k,m as v,n as z,h as b,p as _,b as I,U as S,g as T,t as d,d as U,f as h,D as y,W as g,X as J,J as q,K as C,L as j,M as B,x as K,a as L,y as M,c as O,z as V,N as W,C as X}from"./index-7e739eea.js";import{I as A}from"./icon-e2f06bf3.js";function F(o){let e;const s=o[5].default,t=q(s,o,o[4],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,i){t&&t.m(n,i),e=!0},p(n,i){t&&t.p&&(!e||i&16)&&C(t,s,n,n[4],e?B(s,n[4],i,null):j(n[4]),null)},i(n){e||(h(t,n),e=!0)},o(n){d(t,n),e=!1},d(n){t&&t.d(n)}}}function G(o){let e,s,t,n,i;s=new A({props:{class:"h-4",name:o[0]}});const f=o[5].default,c=q(f,o,o[4],null);return{c(){e=k("div"),K(s.$$.fragment),t=L(),c&&c.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var l=z(e);M(s.$$.fragment,l),t=O(l),c&&c.l(l),l.forEach(b),this.h()},h(){_(e,"class",n="flex items-center justify-center gap-2 "+o[1]+" svelte-zwpzzq")},m(a,l){I(a,e,l),V(s,e,null),W(e,t),c&&c.m(e,null),i=!0},p(a,l){const m={};l&1&&(m.name=a[0]),s.$set(m),c&&c.p&&(!i||l&16)&&C(c,f,a,a[4],i?B(f,a[4],l,null):j(a[4]),null),(!i||l&2&&n!==(n="flex items-center justify-center gap-2 "+a[1]+" svelte-zwpzzq"))&&_(e,"class",n)},i(a){i||(h(s.$$.fragment,a),h(c,a),i=!0)},o(a){d(s.$$.fragment,a),d(c,a),i=!1},d(a){a&&b(e),X(s),c&&c.d(a)}}}function H(o){let e,s,t,n,i,f,c;const a=[G,F],l=[];function m(u,r){return u[0]?0:1}return s=m(o),t=l[s]=a[s](o),{c(){e=k("button"),t.c(),this.h()},l(u){e=v(u,"BUTTON",{class:!0,"data-cy":!0,type:!0});var r=z(e);t.l(r),r.forEach(b),this.h()},h(){_(e,"class","icon-button svelte-zwpzzq"),_(e,"data-cy",n=o[3].dataCy),_(e,"type",o[2])},m(u,r){I(u,e,r),l[s].m(e,null),i=!0,f||(c=S(e,"click",o[6]),f=!0)},p(u,[r]){let p=s;s=m(u),s===p?l[s].p(u,r):(T(),d(l[p],1,1,()=>{l[p]=null}),U(),t=l[s],t?t.p(u,r):(t=l[s]=a[s](u),t.c()),h(t,1),t.m(e,null)),(!i||r&8&&n!==(n=u[3].dataCy))&&_(e,"data-cy",n),(!i||r&4)&&_(e,"type",u[2])},i(u){i||(h(t),i=!0)},o(u){d(t),i=!1},d(u){u&&b(e),l[s].d(),f=!1,c()}}}function P(o,e,s){let{$$slots:t={},$$scope:n}=e,{icon:i=null}=e,{classes:f=""}=e,{type:c="button"}=e;function a(l){J.call(this,o,l)}return o.$$set=l=>{s(3,e=y(y({},e),g(l))),"icon"in l&&s(0,i=l.icon),"classes"in l&&s(1,f=l.classes),"type"in l&&s(2,c=l.type),"$$scope"in l&&s(4,n=l.$$scope)},e=g(e),[i,f,c,e,n,t,a]}class Y extends D{constructor(e){super(),E(this,e,P,H,N,{icon:0,classes:1,type:2})}}export{Y as I};
