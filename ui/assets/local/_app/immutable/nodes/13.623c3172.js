import{S as x,i as B,s as G,y as $,z as h,A as d,g as u,d as c,B as v,C as p,W as I,e as g,b as S,v as b,aa as L,f as y,h as C,ab as P}from"../chunks/index.bac36631.js";import{E as z,a as N,b as q}from"../chunks/event-summary-table.f6b87d5b.js";import{P as M}from"../chunks/pagination.0913fbfc.js";import{t as _}from"../chunks/translate.d045ded2.js";import{b as w,e as W}from"../chunks/event-view.254595d9.js";import{e as j}from"../chunks/filters.719944d1.js";import{a as D}from"../chunks/import-events.60adb378.js";function k(i,t,r){const e=i.slice();return e[9]=t[r],e}function E(i){let t,r;return t=new N({}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){d(t,e,a),r=!0},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){c(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function A(i,t){let r,e,a;return e=new q({props:{event:t[9],compact:F,expandAll:t[1]==="true",initialItem:t[8]}}),{key:i,first:null,c(){r=g(),$(e.$$.fragment),this.h()},l(n){r=g(),h(e.$$.fragment,n),this.h()},h(){this.first=r},m(n,f){S(n,r,f),d(e,n,f),a=!0},p(n,f){t=n;const l={};f&128&&(l.event=t[9]),f&2&&(l.expandAll=t[1]==="true"),f&256&&(l.initialItem=t[8]),e.$set(l)},i(n){a||(u(e.$$.fragment,n),a=!0)},o(n){c(e.$$.fragment,n),a=!1},d(n){n&&C(r),v(e,n)}}}function H(i){let t=[],r=new Map,e,a,n=i[7];const f=o=>`${o[9].id}-${o[9].timestamp}`;for(let o=0;o<n.length;o+=1){let s=k(i,n,o),m=f(s);r.set(m,t[o]=A(m,s))}let l=null;return n.length||(l=E()),{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=g(),l&&l.c()},l(o){for(let s=0;s<t.length;s+=1)t[s].l(o);e=g(),l&&l.l(o)},m(o,s){for(let m=0;m<t.length;m+=1)t[m].m(o,s);S(o,e,s),l&&l.m(o,s),a=!0},p(o,s){s&386&&(n=o[7],b(),t=L(t,s,f,1,o,n,r,e.parentNode,P,A,e,k),y(),n.length?l&&(b(),c(l,1,1,()=>{l=null}),y()):l||(l=E(),l.c(),u(l,1),l.m(e.parentNode,e)))},i(o){if(!a){for(let s=0;s<n.length;s+=1)u(t[s]);a=!0}},o(o){for(let s=0;s<t.length;s+=1)c(t[s]);a=!1},d(o){for(let s=0;s<t.length;s+=1)t[s].d(o);o&&C(e),l&&l.d(o)}}}function J(i){let t,r;return t=new z({props:{compact:F,$$slots:{default:[H]},$$scope:{ctx:i}}}),t.$on("expandAll",i[2]),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){d(t,e,a),r=!0},p(e,a){const n={};a&4482&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){c(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function K(i){let t,r;return t=new M({props:{items:i[0],floatId:"event-view-toggle","aria-label":_("workflows.event-history"),pageSizeSelectLabel:_("common.per-page"),previousButtonLabel:_("common.previous"),nextButtonLabel:_("common.next"),$$slots:{default:[J,({visibleItems:e,initialItem:a})=>({7:e,8:a}),({visibleItems:e,initialItem:a})=>(e?128:0)|(a?256:0)]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){d(t,e,a),r=!0},p(e,[a]){const n={};a&1&&(n.items=e[0]),a&4482&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){c(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}let F=!0;function O(i,t,r){let e,a,n,f,l,o;p(i,w,m=>r(1,n=m)),p(i,j,m=>r(4,f=m)),p(i,D,m=>r(5,l=m)),p(i,W,m=>r(6,o=m));function s(m){I(w,n=m.detail.expanded,n)}return i.$$.update=()=>{i.$$.dirty&96&&r(3,e=o==="descending"?[...l].reverse():l),i.$$.dirty&24&&r(0,a=e.filter(m=>f?f.includes(m.category):m))},[a,n,s,e,f,l,o]}class Z extends x{constructor(t){super(),B(this,t,O,K,G,{})}}export{Z as component};
