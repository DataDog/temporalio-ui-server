import{S as Y,b as Z,a as G,ar as U,m as I,p as C,q as D,k as $,f as b,as as H,j as _,g,K as z,C as w,D as v,E as y,n as m,F as q,A as M,Y as X,c as B,d as F,u as L,L as S,Z as x,e as O,z as ee,h as te,aa as ne,w as A,x as K}from"../chunks/index.e1c99c2b.js";import{p as J}from"../chunks/stores.9399aa4a.js";import{t as T}from"../chunks/translate.4d79804f.js";import{g as re,a as le}from"../chunks/query-service.ba55189a.js";import{C as oe}from"../chunks/code-block.dc4526d8.js";import{S as ae,a as se}from"../chunks/simple-select.a31d690f.js";import{E as ce}from"../chunks/empty-state.d6aec949.js";import{B as ue}from"../chunks/button.c22e3d7b.js";import{L as fe}from"../chunks/loading.368326ec.js";import{a as ie}from"../chunks/auth-user.1c993420.js";import{T as me}from"../chunks/toggle-switch.998363c0.js";import{P as pe}from"../chunks/page-title.69374eae.js";function R(l,t,r){const e=l.slice();return e[16]=t[r],e}function $e(l){var e;let t,r;return t=new ce({props:{title:T("error-occurred"),content:T("workflows","no-workers-running-message"),error:(e=l[19])==null?void 0:e.message}}),{c(){w(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,o){y(t,n,o),r=!0},p:m,i(n){r||(_(t.$$.fragment,n),r=!0)},o(n){g(t.$$.fragment,n),r=!1},d(n){q(t,n)}}}function _e(l){let t,r,e,n,o,a,u,s,f,k,h,E,j;function Q(c){l[5](c)}let N={id:"query-select",label:T("workflows","query-type"),"data-testid":"query-select",$$slots:{default:[he]},$$scope:{ctx:l}};l[0]!==void 0&&(N.value=l[0]),e=new ae({props:N}),M.push(()=>X(e,"value",Q)),a=new ue({props:{icon:"retry",loading:qe,$$slots:{default:[de]},$$scope:{ctx:l}}}),a.$on("click",l[6]),f=new me({props:{label:T("workflows","json-formatting"),labelPosition:"left",id:"json-formatting",checked:l[2]}}),f.$on("change",l[7]);let p={ctx:l,current:null,token:null,hasCatch:!1,pending:we,then:be,catch:ke,value:15,blocks:[,,,]};return U(E=l[1],p),{c(){t=I("div"),r=I("div"),w(e.$$.fragment),o=B(),w(a.$$.fragment),u=B(),s=I("div"),w(f.$$.fragment),k=B(),h=I("div"),p.block.c(),this.h()},l(c){t=C(c,"DIV",{class:!0});var i=D(t);r=C(i,"DIV",{class:!0});var d=D(r);v(e.$$.fragment,d),o=F(d),v(a.$$.fragment,d),d.forEach($),u=F(i),s=C(i,"DIV",{class:!0});var P=D(s);v(f.$$.fragment,P),P.forEach($),i.forEach($),k=F(c),h=C(c,"DIV",{class:!0});var V=D(h);p.block.l(V),V.forEach($),this.h()},h(){L(r,"class","flex items-center gap-4"),L(s,"class","flex justify-end"),L(t,"class","flex justify-between"),L(h,"class","flex items-start h-full")},m(c,i){b(c,t,i),S(t,r),y(e,r,null),S(r,o),y(a,r,null),S(t,u),S(t,s),y(f,s,null),b(c,k,i),b(c,h,i),p.block.m(h,p.anchor=null),p.mount=()=>h,p.anchor=null,j=!0},p(c,i){l=c;const d={};i&1048576&&(d.$$scope={dirty:i,ctx:l}),!n&&i&1&&(n=!0,d.value=l[0],x(()=>n=!1)),e.$set(d);const P={};i&1048576&&(P.$$scope={dirty:i,ctx:l}),a.$set(P);const V={};i&4&&(V.checked=l[2]),f.$set(V),p.ctx=l,i&2&&E!==(E=l[1])&&U(E,p)||H(p,l,i)},i(c){j||(_(e.$$.fragment,c),_(a.$$.fragment,c),_(f.$$.fragment,c),_(p.block),j=!0)},o(c){g(e.$$.fragment,c),g(a.$$.fragment,c),g(f.$$.fragment,c);for(let i=0;i<3;i+=1){const d=p.blocks[i];g(d)}j=!1},d(c){c&&$(t),q(e),q(a),q(f),c&&$(k),c&&$(h),p.block.d(),p.token=null,p=null}}}function ge(l){let t=l[16]+"",r;return{c(){r=A(t)},l(e){r=K(e,t)},m(e,n){b(e,r,n)},p:m,d(e){e&&$(r)}}}function W(l){let t,r;return t=new se({props:{value:l[16],$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,n){const o={};n&1048576&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function he(l){let t,r,e=l[14],n=[];for(let a=0;a<e.length;a+=1)n[a]=W(R(l,e,a));const o=a=>g(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();t=O()},l(a){for(let u=0;u<n.length;u+=1)n[u].l(a);t=O()},m(a,u){for(let s=0;s<n.length;s+=1)n[s].m(a,u);b(a,t,u),r=!0},p(a,u){if(u&8){e=a[14];let s;for(s=0;s<e.length;s+=1){const f=R(a,e,s);n[s]?(n[s].p(f,u),_(n[s],1)):(n[s]=W(f),n[s].c(),_(n[s],1),n[s].m(t.parentNode,t))}for(ee(),s=e.length;s<n.length;s+=1)o(s);te()}},i(a){if(!r){for(let u=0;u<e.length;u+=1)_(n[u]);r=!0}},o(a){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)g(n[u]);r=!1},d(a){ne(n,a),a&&$(t)}}}function de(l){let t=T("refresh")+"",r;return{c(){r=A(t)},l(e){r=K(e,t)},m(e,n){b(e,r,n)},p:m,d(e){e&&$(r)}}}function ke(l){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function be(l){let t,r;return t=new oe({props:{content:l[15],language:l[2]?"json":"text"}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,n){const o={};n&2&&(o.content=e[15]),n&4&&(o.language=e[2]?"json":"text"),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){q(t,e)}}}function we(l){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function ve(l){let t,r,e,n,o=T("workflows","no-workers-failure-message")+"",a,u;return r=new fe({}),{c(){t=I("div"),w(r.$$.fragment),e=B(),n=I("p"),a=A(o),this.h()},l(s){t=C(s,"DIV",{class:!0});var f=D(t);v(r.$$.fragment,f),e=F(f),n=C(f,"P",{});var k=D(n);a=K(k,o),k.forEach($),f.forEach($),this.h()},h(){L(t,"class","text-center")},m(s,f){b(s,t,f),y(r,t,null),S(t,e),S(t,n),S(n,a),u=!0},p:m,i(s){u||(_(r.$$.fragment,s),u=!0)},o(s){g(r.$$.fragment,s),u=!1},d(s){s&&$(t),q(r)}}}function ye(l){let t,r,e={ctx:l,current:null,token:null,hasCatch:!0,pending:ve,then:_e,catch:$e,value:14,error:19,blocks:[,,,]};return U(l[3],e),{c(){t=I("section"),e.block.c()},l(n){t=C(n,"SECTION",{});var o=D(t);e.block.l(o),o.forEach($)},m(n,o){b(n,t,o),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null,r=!0},p(n,[o]){l=n,H(e,l,o)},i(n){r||(_(e.block),r=!0)},o(n){for(let o=0;o<3;o+=1){const a=e.blocks[o];g(a)}r=!1},d(n){n&&$(t),e.block.d(),e.token=null,e=null}}}let qe=!1;function Ee(l,t,r){let e,n;z(l,ie,c=>r(8,e=c)),z(l,J,c=>r(9,n=c));const{namespace:o,workflow:a,run:u}=n.params,s={id:a,runId:u};let f,k=re({namespace:o,workflow:s}).then(c=>(r(0,f=f||c[0]),c)),h;const E=c=>{var i;r(1,h=le({namespace:o,workflow:s,queryType:c},(i=n.data)===null||i===void 0?void 0:i.settings,e==null?void 0:e.accessToken))};let j=!0;function Q(c){f=c,r(0,f)}const N=()=>E(f),p=()=>r(2,j=!j);return l.$$.update=()=>{l.$$.dirty&1&&f&&E(f)},[f,h,j,k,E,Q,N,p]}class je extends Y{constructor(t){super(),Z(this,t,Ee,ye,G,{})}}function Ie(l){let t,r,e,n;return t=new pe({props:{title:`${T("workflows","queries-tab")} | ${l[1]}`,url:l[0].url.href}}),e=new je({}),{c(){w(t.$$.fragment),r=B(),w(e.$$.fragment)},l(o){v(t.$$.fragment,o),r=F(o),v(e.$$.fragment,o)},m(o,a){y(t,o,a),b(o,r,a),y(e,o,a),n=!0},p(o,[a]){const u={};a&1&&(u.url=o[0].url.href),t.$set(u)},i(o){n||(_(t.$$.fragment,o),_(e.$$.fragment,o),n=!0)},o(o){g(t.$$.fragment,o),g(e.$$.fragment,o),n=!1},d(o){q(t,o),o&&$(r),q(e,o)}}}function Ce(l,t,r){let e;z(l,J,o=>r(0,e=o));const n=e.params.workflow;return[e,n]}class Ae extends Y{constructor(t){super(),Z(this,t,Ce,Ie,G,{})}}export{Ae as default};
