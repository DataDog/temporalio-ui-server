import{S as J,b as M,a as Q,C as g,D as d,E as k,j as _,g as h,F as w,K as V,e as K,f as p,z as U,h as G,a7 as le,k as m,m as F,c as E,p as H,q as L,d as B,u as ae,n as T,w as P,x as C,L as S,y as R,ar as W,as as ne}from"../chunks/index.9b814669.js";import{p as oe}from"../chunks/stores.8b6881b9.js";import{P as se}from"../chunks/page-title.83a2b61d.js";import{t as q}from"../chunks/translate.c28e5b4f.js";import{B as fe}from"../chunks/badge.d2eb64e3.js";import{E as ie}from"../chunks/empty-state.f50463e1.js";import{L as ce}from"../chunks/link.b247ece3.js";import{T as me,a as ue}from"../chunks/table-header-row.13d0ab5a.js";import{T as re}from"../chunks/table-row.6cbd66b6.js";import{t as pe,b as z}from"../chunks/format-date.564a6cd6.js";import{q as X}from"../chunks/route-for.31a507bb.js";import{A as $e}from"../chunks/alert.cd8ccee7.js";import{L as _e}from"../chunks/loading.12386e1b.js";import{l as Y,i as he}from"../chunks/batch-operations.4c8e68d8.js";function Z(o,t,l){const e=o.slice();return e[4]=t[l].state,e[5]=t[l].jobId,e[6]=t[l].startTime,e[7]=t[l].closeTime,e}function y(o){let t,l;return t=new re({props:{$$slots:{default:[be]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){k(t,e,a),l=!0},p(e,a){const r={};a&1024&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function be(o){let t,l,e,a;return l=new ie({props:{title:q("batch.empty-state-title")}}),{c(){t=F("td"),g(l.$$.fragment),e=E(),this.h()},l(r){t=H(r,"TD",{colspan:!0});var f=L(t);d(l.$$.fragment,f),f.forEach(m),e=B(r),this.h()},h(){ae(t,"colspan","4")},m(r,f){p(r,t,f),k(l,t,null),p(r,e,f),a=!0},p:T,i(r){a||(_(l.$$.fragment,r),a=!0)},o(r){h(l.$$.fragment,r),a=!1},d(r){r&&m(t),w(l),r&&m(e)}}}function ge(o){let t=o[4]+"",l;return{c(){l=P(t)},l(e){l=C(e,t)},m(e,a){p(e,l,a)},p(e,a){a&2&&t!==(t=e[4]+"")&&R(l,t)},d(e){e&&m(l)}}}function de(o){let t=o[5]+"",l;return{c(){l=P(t)},l(e){l=C(e,t)},m(e,a){p(e,l,a)},p(e,a){a&2&&t!==(t=e[5]+"")&&R(l,t)},d(e){e&&m(l)}}}function ke(o){let t,l,e,a,r,f,s,c=z(o[6],o[2])+"",i,$,b,D=z(o[7],o[2])+"",v,I,j;return l=new fe({props:{type:o[3][o[4]],$$slots:{default:[ge]},$$scope:{ctx:o}}}),r=new ce({props:{href:X({namespace:o[0],jobId:o[5]}),$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){t=F("td"),g(l.$$.fragment),e=E(),a=F("td"),g(r.$$.fragment),f=E(),s=F("td"),i=P(c),$=E(),b=F("td"),v=P(D),I=E()},l(n){t=H(n,"TD",{});var u=L(t);d(l.$$.fragment,u),u.forEach(m),e=B(n),a=H(n,"TD",{});var N=L(a);d(r.$$.fragment,N),N.forEach(m),f=B(n),s=H(n,"TD",{});var O=L(s);i=C(O,c),O.forEach(m),$=B(n),b=H(n,"TD",{});var A=L(b);v=C(A,D),A.forEach(m),I=B(n)},m(n,u){p(n,t,u),k(l,t,null),p(n,e,u),p(n,a,u),k(r,a,null),p(n,f,u),p(n,s,u),S(s,i),p(n,$,u),p(n,b,u),S(b,v),p(n,I,u),j=!0},p(n,u){const N={};u&2&&(N.type=n[3][n[4]]),u&1026&&(N.$$scope={dirty:u,ctx:n}),l.$set(N);const O={};u&3&&(O.href=X({namespace:n[0],jobId:n[5]})),u&1026&&(O.$$scope={dirty:u,ctx:n}),r.$set(O),(!j||u&6)&&c!==(c=z(n[6],n[2])+"")&&R(i,c),(!j||u&6)&&D!==(D=z(n[7],n[2])+"")&&R(v,D)},i(n){j||(_(l.$$.fragment,n),_(r.$$.fragment,n),j=!0)},o(n){h(l.$$.fragment,n),h(r.$$.fragment,n),j=!1},d(n){n&&m(t),w(l),n&&m(e),n&&m(a),w(r),n&&m(f),n&&m(s),n&&m($),n&&m(b),n&&m(I)}}}function x(o){let t,l;return t=new re({props:{$$slots:{default:[ke]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){k(t,e,a),l=!0},p(e,a){const r={};a&1031&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function we(o){let t,l,e=o[1],a=[];for(let s=0;s<e.length;s+=1)a[s]=x(Z(o,e,s));const r=s=>h(a[s],1,1,()=>{a[s]=null});let f=null;return e.length||(f=y(o)),{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=K(),f&&f.c()},l(s){for(let c=0;c<a.length;c+=1)a[c].l(s);t=K(),f&&f.l(s)},m(s,c){for(let i=0;i<a.length;i+=1)a[i].m(s,c);p(s,t,c),f&&f.m(s,c),l=!0},p(s,c){if(c&15){e=s[1];let i;for(i=0;i<e.length;i+=1){const $=Z(s,e,i);a[i]?(a[i].p($,c),_(a[i],1)):(a[i]=x($),a[i].c(),_(a[i],1),a[i].m(t.parentNode,t))}for(U(),i=e.length;i<a.length;i+=1)r(i);G(),!e.length&&f?f.p(s,c):e.length?f&&(U(),h(f,1,1,()=>{f=null}),G()):(f=y(s),f.c(),_(f,1),f.m(t.parentNode,t))}},i(s){if(!l){for(let c=0;c<e.length;c+=1)_(a[c]);l=!0}},o(s){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)h(a[c]);l=!1},d(s){le(a,s),s&&m(t),f&&f.d(s)}}}function ve(o){let t,l=q("common.status")+"",e,a,r,f=q("common.job-id")+"",s,c,i,$=q("common.start-time")+"",b,D,v,I=q("common.close-time")+"",j;return{c(){t=F("th"),e=P(l),a=E(),r=F("th"),s=P(f),c=E(),i=F("th"),b=P($),D=E(),v=F("th"),j=P(I)},l(n){t=H(n,"TH",{});var u=L(t);e=C(u,l),u.forEach(m),a=B(n),r=H(n,"TH",{});var N=L(r);s=C(N,f),N.forEach(m),c=B(n),i=H(n,"TH",{});var O=L(i);b=C(O,$),O.forEach(m),D=B(n),v=H(n,"TH",{});var A=L(v);j=C(A,I),A.forEach(m)},m(n,u){p(n,t,u),S(t,e),p(n,a,u),p(n,r,u),S(r,s),p(n,c,u),p(n,i,u),S(i,b),p(n,D,u),p(n,v,u),S(v,j)},p:T,d(n){n&&m(t),n&&m(a),n&&m(r),n&&m(c),n&&m(i),n&&m(D),n&&m(v)}}}function Te(o){let t,l;return t=new ue({props:{slot:"headers",$$slots:{default:[ve]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){k(t,e,a),l=!0},p(e,a){const r={};a&1024&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function Ee(o){let t,l;return t=new me({props:{$$slots:{headers:[Te],default:[we]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){k(t,e,a),l=!0},p(e,[a]){const r={};a&1031&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function Be(o,t,l){let e;V(o,pe,s=>l(2,e=s));let{namespace:a}=t,{operations:r}=t;const f={Completed:"green",Running:"blue",Failed:"red",Unspecified:"gray"};return o.$$set=s=>{"namespace"in s&&l(0,a=s.namespace),"operations"in s&&l(1,r=s.operations)},[a,r,e,f]}class De extends J{constructor(t){super(),M(this,t,Be,Ee,Q,{namespace:0,operations:1})}}function ee(o){o[2]=o[3].operations}function je(o){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function Fe(o){ee(o);let t,l,e,a=o[1]&&te(o);return l=new De({props:{operations:o[2],namespace:o[0]}}),{c(){a&&a.c(),t=E(),g(l.$$.fragment)},l(r){a&&a.l(r),t=B(r),d(l.$$.fragment,r)},m(r,f){a&&a.m(r,f),p(r,t,f),k(l,r,f),e=!0},p(r,f){ee(r),r[1]?a?(a.p(r,f),f&2&&_(a,1)):(a=te(r),a.c(),_(a,1),a.m(t.parentNode,t)):a&&(U(),h(a,1,1,()=>{a=null}),G());const s={};f&1&&(s.operations=r[2]),f&1&&(s.namespace=r[0]),l.$set(s)},i(r){e||(_(a),_(l.$$.fragment,r),e=!0)},o(r){h(a),h(l.$$.fragment,r),e=!1},d(r){a&&a.d(r),r&&m(t),w(l,r)}}}function te(o){let t,l;return t=new $e({props:{icon:"info",intent:"info",title:q("batch.max-concurrent-alert-title"),$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){k(t,e,a),l=!0},p(e,a){const r={};a&16&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function He(o){let t=q("batch.max-concurrent-alert-description")+"",l;return{c(){l=P(t)},l(e){l=C(e,t)},m(e,a){p(e,l,a)},p:T,d(e){e&&m(l)}}}function Le(o){let t,l;return t=new _e({}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){k(t,e,a),l=!0},p:T,i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function Pe(o){let t,l=q("batch.list-page-title")+"",e,a,r,f,s,c={ctx:o,current:null,token:null,hasCatch:!1,pending:Le,then:Fe,catch:je,value:3,blocks:[,,,]};return W(f=Y(o[0]),c),{c(){t=F("h1"),e=P(l),a=E(),r=K(),c.block.c(),this.h()},l(i){t=H(i,"H1",{class:!0});var $=L(t);e=C($,l),$.forEach(m),a=B(i),r=K(),c.block.l(i),this.h()},h(){ae(t,"class","text-2xl")},m(i,$){p(i,t,$),S(t,e),p(i,a,$),p(i,r,$),c.block.m(i,c.anchor=$),c.mount=()=>r.parentNode,c.anchor=r,s=!0},p(i,[$]){o=i,c.ctx=o,$&1&&f!==(f=Y(o[0]))&&W(f,c)||ne(c,o,$)},i(i){s||(_(c.block),s=!0)},o(i){for(let $=0;$<3;$+=1){const b=c.blocks[$];h(b)}s=!1},d(i){i&&m(t),i&&m(a),i&&m(r),c.block.d(i),c.token=null,c=null}}}function Ce(o,t,l){let e;V(o,he,r=>l(1,e=r));let{namespace:a}=t;return o.$$set=r=>{"namespace"in r&&l(0,a=r.namespace)},[a,e]}class Ne extends J{constructor(t){super(),M(this,t,Ce,Pe,Q,{namespace:0})}}function Oe(o){let t,l,e,a;return t=new se({props:{title:q("batch.list-page-title")}}),e=new Ne({props:{namespace:o[0]}}),{c(){g(t.$$.fragment),l=E(),g(e.$$.fragment)},l(r){d(t.$$.fragment,r),l=B(r),d(e.$$.fragment,r)},m(r,f){k(t,r,f),p(r,l,f),k(e,r,f),a=!0},p(r,[f]){const s={};f&1&&(s.namespace=r[0]),e.$set(s)},i(r){a||(_(t.$$.fragment,r),_(e.$$.fragment,r),a=!0)},o(r){h(t.$$.fragment,r),h(e.$$.fragment,r),a=!1},d(r){w(t,r),r&&m(l),w(e,r)}}}function qe(o,t,l){let e,a;return V(o,oe,r=>l(1,a=r)),o.$$.update=()=>{o.$$.dirty&2&&l(0,e=a.params.namespace)},[e,a]}class Ye extends J{constructor(t){super(),M(this,t,qe,Oe,Q,{})}}export{Ye as component};
