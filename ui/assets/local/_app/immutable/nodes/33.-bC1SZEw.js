import{s as J,a as j,h as q,k as h,g,c as H,e as te,b as re,d as ne,j as oe,x as I,w as G,t as K,f as O,n as Q,v as A}from"../chunks/scheduler.LRpOgQOC.js";import{S as T,i as U,c as w,a as d,m as y,t as c,g as N,b as p,e as L,d as $}from"../chunks/index.dE1eZLcR.js";import{e as M,u as le,o as se}from"../chunks/each._Tp_Nd1G.js";import{p as ie}from"../chunks/stores.mo5nWZo0.js";import{E as fe,a as ae,b as ue}from"../chunks/event-summary-table.aWW3SHGA.js";import{E as me}from"../chunks/event-history-timeline.zg7BFkMQ.js";import{L as ce}from"../chunks/link.OYBwbX-u.js";import{t as pe}from"../chunks/translate.HrioCK44.js";import{g as _e}from"../chunks/index.ul8oQ44R.js";import{f as ge}from"../chunks/events-service.Qwes55__.js";import{a as he}from"../chunks/event-view.B06z0ga_.js";import{f as C,e as ke}from"../chunks/events.8XiBhWVZ.js";import{w as we}from"../chunks/workflow-run.fGK_8LQO.js";import{i as de}from"../chunks/get-workflow-relationships.2Tmpi-4H.js";import{b as ye}from"../chunks/route-for.3OhDjmzV.js";function P(i,t,r){const e=i.slice();return e[19]=t[r],e}function z(i){let t,r,e,l;const s=[ve,$e],f=[];function n(o,a){return o[4]?0:1}return r=n(i),e=f[r]=s[r](i),{c(){t=te("h2"),e.c(),this.h()},l(o){t=re(o,"H2",{class:!0});var a=ne(t);e.l(a),a.forEach(g),this.h()},h(){oe(t,"class","flex w-full items-center text-lg font-medium")},m(o,a){h(o,t,a),f[r].m(t,null),l=!0},p(o,a){let u=r;r=n(o),r===u?f[r].p(o,a):(N(),p(f[u],1,1,()=>{f[u]=null}),L(),e=f[r],e?e.p(o,a):(e=f[r]=s[r](o),e.c()),c(e,1),e.m(t,null))},i(o){l||(c(e),l=!0)},o(o){p(e),l=!1},d(o){o&&g(t),f[r].d()}}}function $e(i){let t=i[0].displayName+"",r;return{c(){r=K(t)},l(e){r=O(e,t)},m(e,l){h(e,r,l)},p(e,l){l&1&&t!==(t=e[0].displayName+"")&&Q(r,t)},i:A,o:A,d(e){e&&g(r)}}}function ve(i){let t,r;return t=new ce({props:{href:i[4],$$slots:{default:[be]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,l){const s={};l&16&&(s.href=e[4]),l&4194305&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function be(i){let t=i[0].displayName+"",r;return{c(){r=K(t)},l(e){r=O(e,t)},m(e,l){h(e,r,l)},p(e,l){l&1&&t!==(t=e[0].displayName+"")&&Q(r,t)},d(e){e&&g(r)}}}function B(i){let t,r;return t=new ae({props:{loading:i[2],title:pe("events.group-empty-state-title"),content:""}}),{c(){w(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,l){const s={};l&4&&(s.loading=e[2]),t.$set(s)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function D(i,t){let r,e,l;return e=new ue({props:{event:t[19],compact:V,expandAll:!0,initialItem:t[6],active:!0}}),{key:i,first:null,c(){r=I(),w(e.$$.fragment),this.h()},l(s){r=I(),d(e.$$.fragment,s),this.h()},h(){this.first=r},m(s,f){h(s,r,f),y(e,s,f),l=!0},p(s,f){t=s;const n={};f&8&&(n.event=t[19]),f&64&&(n.initialItem=t[6]),e.$set(n)},i(s){l||(c(e.$$.fragment,s),l=!0)},o(s){p(e.$$.fragment,s),l=!1},d(s){s&&g(r),$(e,s)}}}function Ee(i){let t=[],r=new Map,e,l,s=M(i[3]);const f=o=>`${o[19].id}-${o[19].timestamp}`;for(let o=0;o<s.length;o+=1){let a=P(i,s,o),u=f(a);r.set(u,t[o]=D(u,a))}let n=null;return s.length||(n=B(i)),{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=I(),n&&n.c()},l(o){for(let a=0;a<t.length;a+=1)t[a].l(o);e=I(),n&&n.l(o)},m(o,a){for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(o,a);h(o,e,a),n&&n.m(o,a),l=!0},p(o,a){a&76&&(s=M(o[3]),N(),t=le(t,a,f,1,o,s,r,e.parentNode,se,D,e,P),L(),!s.length&&n?n.p(o,a):s.length?n&&(N(),p(n,1,1,()=>{n=null}),L()):(n=B(o),n.c(),c(n,1),n.m(e.parentNode,e)))},i(o){if(!l){for(let a=0;a<s.length;a+=1)c(t[a]);l=!0}},o(o){for(let a=0;a<t.length;a+=1)p(t[a]);l=!1},d(o){o&&g(e);for(let a=0;a<t.length;a+=1)t[a].d(o);n&&n.d(o)}}}function He(i){let t,r,e,l,s,f=i[0]&&z(i);return r=new me({props:{history:i[1],maxHeight:240}}),l=new fe({props:{updating:i[5],compact:V,$$slots:{default:[Ee]},$$scope:{ctx:i}}}),{c(){f&&f.c(),t=j(),w(r.$$.fragment),e=j(),w(l.$$.fragment)},l(n){f&&f.l(n),t=q(n),d(r.$$.fragment,n),e=q(n),d(l.$$.fragment,n)},m(n,o){f&&f.m(n,o),h(n,t,o),y(r,n,o),h(n,e,o),y(l,n,o),s=!0},p(n,[o]){n[0]?f?(f.p(n,o),o&1&&c(f,1)):(f=z(n),f.c(),c(f,1),f.m(t.parentNode,t)):f&&(N(),p(f,1,1,()=>{f=null}),L());const a={};o&2&&(a.history=n[1]),r.$set(a);const u={};o&32&&(u.updating=n[5]),o&4194380&&(u.$$scope={dirty:o,ctx:n}),l.$set(u)},i(n){s||(c(f),c(r.$$.fragment,n),c(l.$$.fragment,n),s=!0)},o(n){p(f),p(r.$$.fragment,n),p(l.$$.fragment,n),s=!1},d(n){n&&(g(t),g(e)),f&&f.d(n),$(r,n),$(l,n)}}}const V=!0;function Ie(i,t,r){let e,l,s,f,n,o,a,u,_,v,F,R,b;H(i,C,m=>r(1,_=m)),H(i,ke,m=>r(11,v=m)),H(i,he,m=>r(14,F=m)),H(i,we,m=>r(15,R=m)),H(i,ie,m=>r(12,b=m));let S=!1,E,W=[];const X=()=>{G(C,_=[],_),r(2,S=!0)},Y=async(m,k,x)=>{(R.workflow.id!==k||!_.length)&&(X(),G(C,_=await ge({namespace:m,workflowId:k,runId:x,sort:F}),_),r(2,S=!1)),r(0,E=_e(_,F).find(ee=>ee.id===f)),E&&r(3,W=[E])};function Z(m){const k=m==null?void 0:m.eventList.find(de);return k?ye({namespace:e,workflow:k.attributes.workflowExecution.workflowId,run:k.attributes.workflowExecution.runId}):""}return i.$$.update=()=>{i.$$.dirty&4096&&r(7,{namespace:e,workflow:l,run:s,id:f}=b.params,e,(r(10,l),r(12,b)),(r(9,s),r(12,b))),i.$$.dirty&1664&&Y(e,l,s),i.$$.dirty&2050&&r(8,n=_.length?_:v==null?void 0:v.start),i.$$.dirty&256&&r(6,o=n==null?void 0:n[0]),i.$$.dirty&258&&r(5,a=n.length&&!_.length),i.$$.dirty&1&&r(4,u=Z(E))},[E,_,S,W,u,a,o,e,n,s,l,v,b]}class Ne extends T{constructor(t){super(),U(this,t,Ie,He,J,{})}}function Le(i){let t,r;return t=new Ne({}),{c(){w(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p:A,i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}class Ke extends T{constructor(t){super(),U(this,t,null,Le,J,{})}}export{Ke as component};
