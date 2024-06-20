import{s as j,c as d,x as y,k as z,g as B,w as A,v as R}from"../chunks/scheduler.LRpOgQOC.js";import{S as D,i as G,c as v,a as w,m as k,t as g,b as h,d as E,g as F,e as C}from"../chunks/index.dE1eZLcR.js";import{e as N,u as T,o as U}from"../chunks/each._Tp_Nd1G.js";import{p as V}from"../chunks/stores.zceJZ__p.js";import{E as X,a as Y,b as Z}from"../chunks/event-summary-table.zYLyetkc.js";import{f as x}from"../chunks/events-service.-7_CkCHL.js";import{a as ee,e as q}from"../chunks/event-view.bmuBb59k.js";import{f as H,e as te}from"../chunks/events.d91B_Ih9.js";function M(o,t,r){const e=o.slice();return e[18]=t[r],e}function P(o){let t,r;return t=new Y({props:{loading:o[1]}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){k(t,e,i),r=!0},p(e,i){const n={};i&2&&(n.loading=e[1]),t.$set(n)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){E(t,e)}}}function W(o,t){let r,e,i;return e=new Z({props:{event:t[18],compact:t[0],expandAll:!0,initialItem:t[4],active:!0}}),{key:o,first:null,c(){r=y(),v(e.$$.fragment),this.h()},l(n){r=y(),w(e.$$.fragment,n),this.h()},h(){this.first=r},m(n,m){z(n,r,m),k(e,n,m),i=!0},p(n,m){t=n;const s={};m&4&&(s.event=t[18]),m&1&&(s.compact=t[0]),m&16&&(s.initialItem=t[4]),e.$set(s)},i(n){i||(g(e.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),i=!1},d(n){n&&B(r),E(e,n)}}}function re(o){let t=[],r=new Map,e,i,n=N(o[2]);const m=l=>`${l[18].id}-${l[18].timestamp}`;for(let l=0;l<n.length;l+=1){let a=M(o,n,l),u=m(a);r.set(u,t[l]=W(u,a))}let s=null;return n.length||(s=P(o)),{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=y(),s&&s.c()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=y(),s&&s.l(l)},m(l,a){for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(l,a);z(l,e,a),s&&s.m(l,a),i=!0},p(l,a){a&23&&(n=N(l[2]),F(),t=T(t,a,m,1,l,n,r,e.parentNode,U,W,e,M),C(),!n.length&&s?s.p(l,a):n.length?s&&(F(),h(s,1,1,()=>{s=null}),C()):(s=P(l),s.c(),g(s,1),s.m(e.parentNode,e)))},i(l){if(!i){for(let a=0;a<n.length;a+=1)g(t[a]);i=!0}},o(l){for(let a=0;a<t.length;a+=1)h(t[a]);i=!1},d(l){l&&B(e);for(let a=0;a<t.length;a+=1)t[a].d(l);s&&s.d(l)}}}function ne(o){let t,r;return t=new X({props:{updating:o[3],compact:o[0],$$slots:{default:[re]},$$scope:{ctx:o}}}),t.$on("expandAll",o[5]),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){k(t,e,i),r=!0},p(e,[i]){const n={};i&8&&(n.updating=e[3]),i&1&&(n.compact=e[0]),i&2097175&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){E(t,e)}}}function oe(o,t,r){let e,i,n,m,s,l,a,u,_,c,p,b,I;d(o,V,f=>r(11,_=f)),d(o,H,f=>r(12,c=f)),d(o,te,f=>r(13,p=f)),d(o,ee,f=>r(14,b=f)),d(o,q,f=>r(15,I=f));let{compact:S=!1}=t,$=!1;const J=()=>{A(H,c=[],c),r(1,$=!0)},K=async(f,O,Q)=>{c.length||(J(),A(H,c=await x({namespace:f,workflowId:O,runId:Q}),c),r(1,$=!1))};function L(f){A(q,I=f.detail.expanded,I)}return o.$$set=f=>{"compact"in f&&r(0,S=f.compact)},o.$$.update=()=>{o.$$.dirty&2048&&r(10,{namespace:e,workflow:i,run:n}=_.params,e,(r(9,i),r(11,_)),(r(8,n),r(11,_))),o.$$.dirty&1792&&K(e,i,n),o.$$.dirty&24576&&r(7,m=b==="descending"?p==null?void 0:p.end:p==null?void 0:p.start),o.$$.dirty&4224&&r(6,s=c.length?c:m),o.$$.dirty&64&&r(4,l=s==null?void 0:s[0]),o.$$.dirty&4160&&r(3,a=s.length&&!c.length),o.$$.dirty&6144&&r(2,u=c.filter(f=>f.id===_.params.id))},[S,$,u,a,l,L,s,m,n,i,e,_,c,p,b]}class le extends D{constructor(t){super(),G(this,t,oe,ne,j,{compact:0})}}function se(o){let t,r;return t=new le({}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){k(t,e,i),r=!0},p:R,i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){E(t,e)}}}class ge extends D{constructor(t){super(),G(this,t,null,se,j,{})}}export{ge as component};
