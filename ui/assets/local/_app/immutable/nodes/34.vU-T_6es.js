import{s as j,c as d,x as w,k as z,g as B,w as H,v as R}from"../chunks/scheduler.1-F21fJx.js";import{S as D,i as G,c as v,a as k,m as E,t as g,b as h,d as b,g as F,e as C}from"../chunks/index.biMfyfPX.js";import{e as N,u as T,o as U}from"../chunks/each.rZJ6hA1D.js";import{p as V}from"../chunks/stores.zURjPX8o.js";import{E as X,a as Y,b as Z}from"../chunks/event-summary-table.k-i0nfyx.js";import{f as x}from"../chunks/events-service.XaPF8L4W.js";import{a as ee,e as q}from"../chunks/event-view.UWjq7jSD.js";import{f as S,e as te}from"../chunks/events.IwwSa-ID.js";function M(o,t,r){const e=o.slice();return e[18]=t[r],e}function P(o){let t,r;return t=new Y({props:{loading:o[1]}}),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){E(t,e,i),r=!0},p(e,i){const n={};i&2&&(n.loading=e[1]),t.$set(n)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){b(t,e)}}}function W(o,t){let r,e,i;return e=new Z({props:{event:t[18],compact:t[0],expandAll:!0,initialItem:t[4],active:!0}}),{key:o,first:null,c(){r=w(),v(e.$$.fragment),this.h()},l(n){r=w(),k(e.$$.fragment,n),this.h()},h(){this.first=r},m(n,m){z(n,r,m),E(e,n,m),i=!0},p(n,m){t=n;const s={};m&4&&(s.event=t[18]),m&1&&(s.compact=t[0]),m&16&&(s.initialItem=t[4]),e.$set(s)},i(n){i||(g(e.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),i=!1},d(n){n&&B(r),b(e,n)}}}function re(o){let t=[],r=new Map,e,i,n=N(o[2]);const m=l=>`${l[18].id}-${l[18].timestamp}`;for(let l=0;l<n.length;l+=1){let a=M(o,n,l),c=m(a);r.set(c,t[l]=W(c,a))}let s=null;return n.length||(s=P(o)),{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=w(),s&&s.c()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=w(),s&&s.l(l)},m(l,a){for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(l,a);z(l,e,a),s&&s.m(l,a),i=!0},p(l,a){a&23&&(n=N(l[2]),F(),t=T(t,a,m,1,l,n,r,e.parentNode,U,W,e,M),C(),!n.length&&s?s.p(l,a):n.length?s&&(F(),h(s,1,1,()=>{s=null}),C()):(s=P(l),s.c(),g(s,1),s.m(e.parentNode,e)))},i(l){if(!i){for(let a=0;a<n.length;a+=1)g(t[a]);i=!0}},o(l){for(let a=0;a<t.length;a+=1)h(t[a]);i=!1},d(l){l&&B(e);for(let a=0;a<t.length;a+=1)t[a].d(l);s&&s.d(l)}}}function ne(o){let t,r;return t=new X({props:{updating:o[3],compact:o[0],$$slots:{default:[re]},$$scope:{ctx:o}}}),t.$on("expandAll",o[5]),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){E(t,e,i),r=!0},p(e,[i]){const n={};i&8&&(n.updating=e[3]),i&1&&(n.compact=e[0]),i&2097175&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){b(t,e)}}}function oe(o,t,r){let e,i,n,m,s,l,a,c,_,u,p,I,A;d(o,V,f=>r(11,_=f)),d(o,S,f=>r(12,u=f)),d(o,te,f=>r(13,p=f)),d(o,ee,f=>r(14,I=f)),d(o,q,f=>r(15,A=f));let{compact:$=!1}=t,y=!1;const J=()=>{H(S,u=[],u),r(1,y=!0)},K=async(f,O,Q)=>{u.length||(r(1,y=!0),J(),H(S,u=await x({namespace:f,workflowId:O,runId:Q}),u),r(1,y=!1))};function L(f){H(q,A=f.detail.expanded,A)}return o.$$set=f=>{"compact"in f&&r(0,$=f.compact)},o.$$.update=()=>{o.$$.dirty&2048&&r(10,{namespace:e,workflow:i,run:n}=_.params,e,(r(9,i),r(11,_)),(r(8,n),r(11,_))),o.$$.dirty&1792&&K(e,i,n),o.$$.dirty&24576&&r(7,m=I==="descending"?p==null?void 0:p.end:p==null?void 0:p.start),o.$$.dirty&4224&&r(6,s=u.length?u:m),o.$$.dirty&64&&r(4,l=s==null?void 0:s[0]),o.$$.dirty&4160&&r(3,a=s.length&&!u.length),o.$$.dirty&6144&&r(2,c=u.filter(f=>f.id===_.params.id))},[$,y,c,a,l,L,s,m,n,i,e,_,u,p,I]}class le extends D{constructor(t){super(),G(this,t,oe,ne,j,{compact:0})}}function se(o){let t,r;return t=new le({}),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){E(t,e,i),r=!0},p:R,i(e){r||(g(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){b(t,e)}}}class ge extends D{constructor(t){super(),G(this,t,null,se,j,{})}}export{ge as component};
