import{s as G,c as p,w as I,x as g,k as x,g as C}from"../chunks/scheduler.LRpOgQOC.js";import{S as L,i as P,c as $,a as h,m as d,t as u,b as c,d as v,g as y,e as b}from"../chunks/index.dE1eZLcR.js";import{e as w,u as B,o as N}from"../chunks/each._Tp_Nd1G.js";import{E as q,a as z,b as M}from"../chunks/event-summary-table.zYLyetkc.js";import{P as j}from"../chunks/pagination.Sr_YRkZ2.js";import{t as _}from"../chunks/translate.HrioCK44.js";import{e as k,a as D}from"../chunks/event-view.bmuBb59k.js";import{e as H}from"../chunks/filters.o5vo-gbm.js";import{a as J}from"../chunks/import-events.pkvpvXtT.js";function E(i,t,n){const e=i.slice();return e[9]=t[n],e}function S(i){let t,n;return t=new z({}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function A(i,t){let n,e,a;return e=new M({props:{event:t[9],compact:F,expandAll:t[1]==="true",initialItem:t[8]}}),{key:i,first:null,c(){n=g(),$(e.$$.fragment),this.h()},l(r){n=g(),h(e.$$.fragment,r),this.h()},h(){this.first=n},m(r,f){x(r,n,f),d(e,r,f),a=!0},p(r,f){t=r;const l={};f&128&&(l.event=t[9]),f&2&&(l.expandAll=t[1]==="true"),f&256&&(l.initialItem=t[8]),e.$set(l)},i(r){a||(u(e.$$.fragment,r),a=!0)},o(r){c(e.$$.fragment,r),a=!1},d(r){r&&C(n),v(e,r)}}}function K(i){let t=[],n=new Map,e,a,r=w(i[7]);const f=o=>`${o[9].id}-${o[9].timestamp}`;for(let o=0;o<r.length;o+=1){let s=E(i,r,o),m=f(s);n.set(m,t[o]=A(m,s))}let l=null;return r.length||(l=S()),{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=g(),l&&l.c()},l(o){for(let s=0;s<t.length;s+=1)t[s].l(o);e=g(),l&&l.l(o)},m(o,s){for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(o,s);x(o,e,s),l&&l.m(o,s),a=!0},p(o,s){s&386&&(r=w(o[7]),y(),t=B(t,s,f,1,o,r,n,e.parentNode,N,A,e,E),b(),r.length?l&&(y(),c(l,1,1,()=>{l=null}),b()):l||(l=S(),l.c(),u(l,1),l.m(e.parentNode,e)))},i(o){if(!a){for(let s=0;s<r.length;s+=1)u(t[s]);a=!0}},o(o){for(let s=0;s<t.length;s+=1)c(t[s]);a=!1},d(o){o&&C(e);for(let s=0;s<t.length;s+=1)t[s].d(o);l&&l.d(o)}}}function O(i){let t,n;return t=new q({props:{compact:F,$$slots:{default:[K]},$$scope:{ctx:i}}}),t.$on("expandAll",i[2]),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const r={};a&4482&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function Q(i){let t,n;return t=new j({props:{items:i[0],floatId:"event-view-toggle","aria-label":_("workflows.event-history"),pageSizeSelectLabel:_("common.per-page"),previousButtonLabel:_("common.previous"),nextButtonLabel:_("common.next"),$$slots:{default:[O,({visibleItems:e,initialItem:a})=>({7:e,8:a}),({visibleItems:e,initialItem:a})=>(e?128:0)|(a?256:0)]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,[a]){const r={};a&1&&(r.items=e[0]),a&4482&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}let F=!0;function R(i,t,n){let e,a,r,f,l,o;p(i,k,m=>n(1,r=m)),p(i,H,m=>n(4,f=m)),p(i,J,m=>n(5,l=m)),p(i,D,m=>n(6,o=m));function s(m){I(k,r=m.detail.expanded,r)}return i.$$.update=()=>{i.$$.dirty&96&&n(3,e=o==="descending"?[...l].reverse():l),i.$$.dirty&24&&n(0,a=e.filter(m=>f?f.includes(m.category):m))},[a,r,s,e,f,l,o]}class re extends L{constructor(t){super(),P(this,t,R,Q,G,{})}}export{re as component};
