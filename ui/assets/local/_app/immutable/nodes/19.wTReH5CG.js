import{s as M,c as y,x as z,k as p,g as m,y as se,e as B,t as N,b as D,d as j,f as O,j as d,l as S,v as E,a as P,h as H,n as G}from"../chunks/scheduler.LRpOgQOC.js";import{S as Q,i as V,c as b,a as v,m as w,t as _,b as h,d as k,g as J,e as K}from"../chunks/index.dE1eZLcR.js";import{p as oe}from"../chunks/stores.zceJZ__p.js";import{P as fe}from"../chunks/page-title.ZsHOm3Zs.js";import{t as C}from"../chunks/translate.HrioCK44.js";import{h as W,u as ie}from"../chunks/await_block.4HnXJsya.js";import{e as X}from"../chunks/each._Tp_Nd1G.js";import{B as ce}from"../chunks/badge.zwL2z7Ws.js";import{E as Y}from"../chunks/empty-state.hn38KSZ0.js";import{L as me}from"../chunks/link.x6GknzNO.js";import{T as ue,a as pe}from"../chunks/table-header-row.-9-YQ5zd.js";import{T as ne}from"../chunks/table-row.Sis06F23.js";import{t as $e,r as _e,f as U}from"../chunks/time-format.lsnK3DsH.js";import{g as Z}from"../chunks/route-for.8mBPKSnN.js";import{A as he}from"../chunks/alert.R7kDJmud.js";import{L as ge}from"../chunks/loading.fe0eU3fG.js";import{l as x,i as de}from"../chunks/batch-operations.1HEdT1y5.js";function ee(s,t,l){const e=s.slice();return e[5]=t[l].state,e[6]=t[l].jobId,e[7]=t[l].startTime,e[8]=t[l].closeTime,e}function te(s){let t,l;return t=new ne({props:{$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),l=!0},p(e,a){const r={};a&2048&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){k(t,e)}}}function be(s){let t,l,e,a,r,c,o;return l=new Y({props:{title:C("batch.empty-state-title")}}),r=new Y({props:{title:C("batch.empty-state-title")}}),{c(){t=B("td"),b(l.$$.fragment),e=P(),a=B("td"),b(r.$$.fragment),c=P(),this.h()},l(n){t=D(n,"TD",{class:!0,colspan:!0});var f=j(t);v(l.$$.fragment,f),f.forEach(m),e=H(n),a=D(n,"TD",{class:!0,colspan:!0});var $=j(a);v(r.$$.fragment,$),$.forEach(m),c=H(n),this.h()},h(){d(t,"class","max-sm:hidden"),d(t,"colspan","4"),d(a,"class","sm:hidden"),d(a,"colspan","2")},m(n,f){p(n,t,f),w(l,t,null),p(n,e,f),p(n,a,f),w(r,a,null),p(n,c,f),o=!0},p:E,i(n){o||(_(l.$$.fragment,n),_(r.$$.fragment,n),o=!0)},o(n){h(l.$$.fragment,n),h(r.$$.fragment,n),o=!1},d(n){n&&(m(t),m(e),m(a),m(c)),k(l),k(r)}}}function ve(s){let t=s[5]+"",l;return{c(){l=N(t)},l(e){l=O(e,t)},m(e,a){p(e,l,a)},p(e,a){a&2&&t!==(t=e[5]+"")&&G(l,t)},d(e){e&&m(l)}}}function we(s){let t=s[6]+"",l;return{c(){l=N(t)},l(e){l=O(e,t)},m(e,a){p(e,l,a)},p(e,a){a&2&&t!==(t=e[6]+"")&&G(l,t)},d(e){e&&m(l)}}}function ke(s){let t,l,e,a,r,c,o,n=U(s[7],s[2],{relative:s[3]})+"",f,$,g,F=U(s[8],s[2],{relative:s[3]})+"",T,q,I;return l=new ce({props:{type:s[4][s[5]],$$slots:{default:[ve]},$$scope:{ctx:s}}}),r=new me({props:{href:Z({namespace:s[0],jobId:s[6]}),$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){t=B("td"),b(l.$$.fragment),e=P(),a=B("td"),b(r.$$.fragment),c=P(),o=B("td"),f=N(n),$=P(),g=B("td"),T=N(F),q=P(),this.h()},l(i){t=D(i,"TD",{});var u=j(t);v(l.$$.fragment,u),u.forEach(m),e=H(i),a=D(i,"TD",{});var L=j(a);v(r.$$.fragment,L),L.forEach(m),c=H(i),o=D(i,"TD",{class:!0});var A=j(o);f=O(A,n),A.forEach(m),$=H(i),g=D(i,"TD",{class:!0});var R=j(g);T=O(R,F),R.forEach(m),q=H(i),this.h()},h(){d(o,"class","max-sm:hidden"),d(g,"class","max-sm:hidden")},m(i,u){p(i,t,u),w(l,t,null),p(i,e,u),p(i,a,u),w(r,a,null),p(i,c,u),p(i,o,u),S(o,f),p(i,$,u),p(i,g,u),S(g,T),p(i,q,u),I=!0},p(i,u){const L={};u&2&&(L.type=i[4][i[5]]),u&2050&&(L.$$scope={dirty:u,ctx:i}),l.$set(L);const A={};u&3&&(A.href=Z({namespace:i[0],jobId:i[6]})),u&2050&&(A.$$scope={dirty:u,ctx:i}),r.$set(A),(!I||u&14)&&n!==(n=U(i[7],i[2],{relative:i[3]})+"")&&G(f,n),(!I||u&14)&&F!==(F=U(i[8],i[2],{relative:i[3]})+"")&&G(T,F)},i(i){I||(_(l.$$.fragment,i),_(r.$$.fragment,i),I=!0)},o(i){h(l.$$.fragment,i),h(r.$$.fragment,i),I=!1},d(i){i&&(m(t),m(e),m(a),m(c),m(o),m($),m(g),m(q)),k(l),k(r)}}}function ae(s){let t,l;return t=new ne({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),l=!0},p(e,a){const r={};a&2063&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){k(t,e)}}}function Te(s){let t,l,e=X(s[1]),a=[];for(let o=0;o<e.length;o+=1)a[o]=ae(ee(s,e,o));const r=o=>h(a[o],1,1,()=>{a[o]=null});let c=null;return e.length||(c=te(s)),{c(){for(let o=0;o<a.length;o+=1)a[o].c();t=z(),c&&c.c()},l(o){for(let n=0;n<a.length;n+=1)a[n].l(o);t=z(),c&&c.l(o)},m(o,n){for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(o,n);p(o,t,n),c&&c.m(o,n),l=!0},p(o,n){if(n&31){e=X(o[1]);let f;for(f=0;f<e.length;f+=1){const $=ee(o,e,f);a[f]?(a[f].p($,n),_(a[f],1)):(a[f]=ae($),a[f].c(),_(a[f],1),a[f].m(t.parentNode,t))}for(J(),f=e.length;f<a.length;f+=1)r(f);K(),!e.length&&c?c.p(o,n):e.length?c&&(J(),h(c,1,1,()=>{c=null}),K()):(c=te(o),c.c(),_(c,1),c.m(t.parentNode,t))}},i(o){if(!l){for(let n=0;n<e.length;n+=1)_(a[n]);l=!0}},o(o){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)h(a[n]);l=!1},d(o){o&&m(t),se(a,o),c&&c.d(o)}}}function Ee(s){let t,l=C("batch.list-page-title")+"",e;return{c(){t=B("caption"),e=N(l),this.h()},l(a){t=D(a,"CAPTION",{class:!0,slot:!0});var r=j(t);e=O(r,l),r.forEach(m),this.h()},h(){d(t,"class","sr-only"),d(t,"slot","caption")},m(a,r){p(a,t,r),S(t,e)},p:E,d(a){a&&m(t)}}}function Be(s){let t,l=C("common.status")+"",e,a,r,c=C("common.job-id")+"",o,n,f,$=C("common.start-time")+"",g,F,T,q=C("common.close-time")+"",I;return{c(){t=B("th"),e=N(l),a=P(),r=B("th"),o=N(c),n=P(),f=B("th"),g=N($),F=P(),T=B("th"),I=N(q),this.h()},l(i){t=D(i,"TH",{class:!0});var u=j(t);e=O(u,l),u.forEach(m),a=H(i),r=D(i,"TH",{class:!0});var L=j(r);o=O(L,c),L.forEach(m),n=H(i),f=D(i,"TH",{class:!0});var A=j(f);g=O(A,$),A.forEach(m),F=H(i),T=D(i,"TH",{class:!0});var R=j(T);I=O(R,q),R.forEach(m),this.h()},h(){d(t,"class","w-28"),d(r,"class","w-auto"),d(f,"class","max-sm:hidden lg:w-56"),d(T,"class","max-sm:hidden lg:w-56")},m(i,u){p(i,t,u),S(t,e),p(i,a,u),p(i,r,u),S(r,o),p(i,n,u),p(i,f,u),S(f,g),p(i,F,u),p(i,T,u),S(T,I)},p:E,d(i){i&&(m(t),m(a),m(r),m(n),m(f),m(F),m(T))}}}function De(s){let t,l;return t=new pe({props:{slot:"headers",$$slots:{default:[Be]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),l=!0},p(e,a){const r={};a&2048&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){k(t,e)}}}function je(s){let t,l;return t=new ue({props:{class:"w-full table-fixed",$$slots:{headers:[De],caption:[Ee],default:[Te]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),l=!0},p(e,[a]){const r={};a&2063&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){k(t,e)}}}function Pe(s,t,l){let e,a;y(s,$e,n=>l(2,e=n)),y(s,_e,n=>l(3,a=n));let{namespace:r}=t,{operations:c}=t;const o={Completed:"green",Running:"blue",Failed:"red",Unspecified:"gray"};return s.$$set=n=>{"namespace"in n&&l(0,r=n.namespace),"operations"in n&&l(1,c=n.operations)},[r,c,e,a,o]}class He extends Q{constructor(t){super(),V(this,t,Pe,je,M,{namespace:0,operations:1})}}function le(s){s[2]=s[3].operations}function Ne(s){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function Oe(s){le(s);let t,l,e,a=s[1]&&re(s);return l=new He({props:{operations:s[2],namespace:s[0]}}),{c(){a&&a.c(),t=P(),b(l.$$.fragment)},l(r){a&&a.l(r),t=H(r),v(l.$$.fragment,r)},m(r,c){a&&a.m(r,c),p(r,t,c),w(l,r,c),e=!0},p(r,c){le(r),r[1]?a?(a.p(r,c),c&2&&_(a,1)):(a=re(r),a.c(),_(a,1),a.m(t.parentNode,t)):a&&(J(),h(a,1,1,()=>{a=null}),K());const o={};c&1&&(o.operations=r[2]),c&1&&(o.namespace=r[0]),l.$set(o)},i(r){e||(_(a),_(l.$$.fragment,r),e=!0)},o(r){h(a),h(l.$$.fragment,r),e=!1},d(r){r&&m(t),a&&a.d(r),k(l,r)}}}function re(s){let t,l;return t=new he({props:{icon:"info",intent:"info",title:C("batch.max-concurrent-alert-title"),$$slots:{default:[Ce]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),l=!0},p(e,a){const r={};a&16&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){k(t,e)}}}function Ce(s){let t=C("batch.max-concurrent-alert-description")+"",l;return{c(){l=N(t)},l(e){l=O(e,t)},m(e,a){p(e,l,a)},p:E,d(e){e&&m(l)}}}function Fe(s){let t,l;return t=new ge({}),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),l=!0},p:E,i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){k(t,e)}}}function Ie(s){let t,l=C("batch.list-page-title")+"",e,a,r,c,o,n={ctx:s,current:null,token:null,hasCatch:!1,pending:Fe,then:Oe,catch:Ne,value:3,blocks:[,,,]};return W(c=x(s[0]),n),{c(){t=B("h1"),e=N(l),a=P(),r=z(),n.block.c(),this.h()},l(f){t=D(f,"H1",{class:!0});var $=j(t);e=O($,l),$.forEach(m),a=H(f),r=z(),n.block.l(f),this.h()},h(){d(t,"class","text-2xl")},m(f,$){p(f,t,$),S(t,e),p(f,a,$),p(f,r,$),n.block.m(f,n.anchor=$),n.mount=()=>r.parentNode,n.anchor=r,o=!0},p(f,[$]){s=f,n.ctx=s,$&1&&c!==(c=x(s[0]))&&W(c,n)||ie(n,s,$)},i(f){o||(_(n.block),o=!0)},o(f){for(let $=0;$<3;$+=1){const g=n.blocks[$];h(g)}o=!1},d(f){f&&(m(t),m(a),m(r)),n.block.d(f),n.token=null,n=null}}}function Le(s,t,l){let e;y(s,de,r=>l(1,e=r));let{namespace:a}=t;return s.$$set=r=>{"namespace"in r&&l(0,a=r.namespace)},[a,e]}class Ae extends Q{constructor(t){super(),V(this,t,Le,Ie,M,{namespace:0})}}function Se(s){let t,l,e,a;return t=new fe({props:{title:C("batch.list-page-title")}}),e=new Ae({props:{namespace:s[0]}}),{c(){b(t.$$.fragment),l=P(),b(e.$$.fragment)},l(r){v(t.$$.fragment,r),l=H(r),v(e.$$.fragment,r)},m(r,c){w(t,r,c),p(r,l,c),w(e,r,c),a=!0},p(r,[c]){const o={};c&1&&(o.namespace=r[0]),e.$set(o)},i(r){a||(_(t.$$.fragment,r),_(e.$$.fragment,r),a=!0)},o(r){h(t.$$.fragment,r),h(e.$$.fragment,r),a=!1},d(r){r&&m(l),k(t,r),k(e,r)}}}function qe(s,t,l){let e,a;return y(s,oe,r=>l(1,a=r)),s.$$.update=()=>{s.$$.dirty&2&&l(0,e=a.params.namespace)},[e,a]}class at extends Q{constructor(t){super(),V(this,t,qe,Se,M,{})}}export{at as component};
