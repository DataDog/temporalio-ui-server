import{S as d,i as v,s as y,Z as _,k as I,y as k,l as p,m as B,z as N,h as b,_ as f,D as g,b as O,A as S,H as T,$ as q,g as z,d as A,B as C,a0 as h,a1 as D,O as E}from"./index.bac36631.js";import{I as H}from"./icon.10ff0327.js";function P(s){let e,a,o,n,c,r;a=new H({props:{name:s[1]}});let i=[{type:"button"},{class:o="icon-button "+s[0]},{"aria-label":s[2]},s[3]],u={};for(let t=0;t<i.length;t+=1)u=_(u,i[t]);return{c(){e=I("button"),k(a.$$.fragment),this.h()},l(t){e=p(t,"BUTTON",{type:!0,class:!0,"aria-label":!0});var l=B(e);N(a.$$.fragment,l),l.forEach(b),this.h()},h(){f(e,u),g(e,"svelte-14cgli8",!0)},m(t,l){O(t,e,l),S(a,e,null),e.autofocus&&e.focus(),n=!0,c||(r=T(e,"click",s[4]),c=!0)},p(t,[l]){const m={};l&2&&(m.name=t[1]),a.$set(m),f(e,u=q(i,[{type:"button"},(!n||l&1&&o!==(o="icon-button "+t[0]))&&{class:o},(!n||l&4)&&{"aria-label":t[2]},l&8&&t[3]])),g(e,"svelte-14cgli8",!0)},i(t){n||(z(a.$$.fragment,t),n=!0)},o(t){A(a.$$.fragment,t),n=!1},d(t){t&&b(e),C(a),c=!1,r()}}}function U(s,e,a){const o=["class","icon","label"];let n=h(e,o),{class:c=""}=e,{icon:r}=e,{label:i}=e;function u(t){E.call(this,s,t)}return s.$$set=t=>{e=_(_({},e),D(t)),a(3,n=h(e,o)),"class"in t&&a(0,c=t.class),"icon"in t&&a(1,r=t.icon),"label"in t&&a(2,i=t.label)},[c,r,i,n,u]}class F extends d{constructor(e){super(),v(this,e,U,P,y,{class:0,icon:1,label:2})}}export{F as I};
