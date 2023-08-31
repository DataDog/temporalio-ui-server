import{S as F,b as K,a as O,m as S,p as L,q as C,k as _,f as h,z as A,g as w,h as G,j as $,K as N,C as v,D as y,E,F as T,ar as W,e as V,as as X,w as D,x as P,L as b,y as H,n as B,c as q,d as Q,u as U}from"../chunks/index.dd30cb12.js";import{p as J}from"../chunks/stores.abe0e91a.js";import{P as Y}from"../chunks/page-title.1677d7ef.js";import{t as d}from"../chunks/translate.88d16a61.js";import{B as Z}from"../chunks/button.5b2cd561.js";import{C as x}from"../chunks/code-block.4ec726f0.js";import{E as M}from"../chunks/empty-state.3085e6db.js";import{L as ee}from"../chunks/link.f6277ca3.js";import{L as te}from"../chunks/loading.51c83cbe.js";import{b as j}from"../chunks/query-service.760e9795.js";import{a as re}from"../chunks/auth-user.e3265f41.js";import{w as oe}from"../chunks/workflow-run.df154392.js";function ne(c){let t,r;return t=new M({props:{title:d("workflows","stack-trace-empty-state"),testId:"query-stack-trace-empty",$$slots:{default:[se]},$$scope:{ctx:c}}}),{c(){v(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,o){E(t,e,o),r=!0},p(e,o){const n={};o&4105&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function le(c){let t,r,e,o={ctx:c,current:null,token:null,hasCatch:!0,pending:ue,then:fe,catch:ce,value:10,error:11,blocks:[,,,]};return W(r=c[2],o),{c(){t=V(),o.block.c()},l(n){t=V(),o.block.l(n)},m(n,l){h(n,t,l),o.block.m(n,o.anchor=l),o.mount=()=>t.parentNode,o.anchor=t,e=!0},p(n,l){c=n,o.ctx=c,l&4&&r!==(r=c[2])&&W(r,o)||X(o,c,l)},i(n){e||($(o.block),e=!0)},o(n){for(let l=0;l<3;l+=1){const s=o.blocks[l];w(s)}e=!1},d(n){n&&_(t),o.block.d(n),o.token=null,o=null}}}function z(c){var a;let t,r=d("workflows","stack-trace-link-preface")+"",e,o,n=d("workflows","stack-trace-link-postface",{taskQueue:(a=c[0])==null?void 0:a.taskQueue})+"",l,s;return o=new ee({props:{href:"https://docs.temporal.io/workflows#stack-trace-query",$$slots:{default:[ae]},$$scope:{ctx:c}}}),{c(){t=S("p"),e=D(r),v(o.$$.fragment),l=D(n)},l(f){t=L(f,"P",{});var i=C(t);e=P(i,r),y(o.$$.fragment,i),l=P(i,n),i.forEach(_)},m(f,i){h(f,t,i),b(t,e),E(o,t,null),b(t,l),s=!0},p(f,i){var k;const u={};i&4096&&(u.$$scope={dirty:i,ctx:f}),o.$set(u),(!s||i&1)&&n!==(n=d("workflows","stack-trace-link-postface",{taskQueue:(k=f[0])==null?void 0:k.taskQueue})+"")&&H(l,n)},i(f){s||($(o.$$.fragment,f),s=!0)},o(f){w(o.$$.fragment,f),s=!1},d(f){f&&_(t),T(o)}}}function ae(c){let t=d("workflows","stack-trace-link")+"",r;return{c(){r=D(t)},l(e){r=P(e,t)},m(e,o){h(e,r,o)},p:B,d(e){e&&_(r)}}}function se(c){var o,n,l;let t,r,e=((o=c[0])==null?void 0:o.isRunning)&&((l=(n=c[3])==null?void 0:n.pollers)==null?void 0:l.length)===0&&z(c);return{c(){e&&e.c(),t=V()},l(s){e&&e.l(s),t=V()},m(s,a){e&&e.m(s,a),h(s,t,a),r=!0},p(s,a){var f,i,u;(f=s[0])!=null&&f.isRunning&&((u=(i=s[3])==null?void 0:i.pollers)==null?void 0:u.length)===0?e?(e.p(s,a),a&9&&$(e,1)):(e=z(s),e.c(),$(e,1),e.m(t.parentNode,t)):e&&(A(),w(e,1,1,()=>{e=null}),G())},i(s){r||($(e),r=!0)},o(s){w(e),r=!1},d(s){e&&e.d(s),s&&_(t)}}}function ce(c){let t,r;return t=new M({props:{title:d("error-occurred"),content:d("workflows","no-workers-running-message")}}),{c(){v(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,o){E(t,e,o),r=!0},p:B,i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function fe(c){let t,r,e,o,n=d("workflows","stack-trace-at")+"",l,s,a=c[1].toLocaleTimeString()+"",f,i,u,k,m;return r=new Z({props:{leadingIcon:"retry",loading:me,$$slots:{default:[ie]},$$scope:{ctx:c}}}),r.$on("click",c[4]),k=new x({props:{content:c[10],language:"text",testId:"query-stack-trace",copyIconTitle:d("copy-icon-title"),copySuccessIconTitle:d("copy-success-icon-title")}}),{c(){t=S("div"),v(r.$$.fragment),e=q(),o=S("p"),l=D(n),s=q(),f=D(a),i=q(),u=S("div"),v(k.$$.fragment),this.h()},l(p){t=L(p,"DIV",{class:!0});var g=C(t);y(r.$$.fragment,g),e=Q(g),o=L(g,"P",{});var I=C(o);l=P(I,n),s=Q(I),f=P(I,a),I.forEach(_),g.forEach(_),i=Q(p),u=L(p,"DIV",{class:!0});var R=C(u);y(k.$$.fragment,R),R.forEach(_),this.h()},h(){U(t,"class","flex items-center gap-4"),U(u,"class","flex items-start h-full")},m(p,g){h(p,t,g),E(r,t,null),b(t,e),b(t,o),b(o,l),b(o,s),b(o,f),h(p,i,g),h(p,u,g),E(k,u,null),m=!0},p(p,g){const I={};g&4096&&(I.$$scope={dirty:g,ctx:p}),r.$set(I),(!m||g&2)&&a!==(a=p[1].toLocaleTimeString()+"")&&H(f,a);const R={};g&4&&(R.content=p[10]),k.$set(R)},i(p){m||($(r.$$.fragment,p),$(k.$$.fragment,p),m=!0)},o(p){w(r.$$.fragment,p),w(k.$$.fragment,p),m=!1},d(p){p&&_(t),T(r),p&&_(i),p&&_(u),T(k)}}}function ie(c){let t=d("refresh")+"",r;return{c(){r=D(t)},l(e){r=P(e,t)},m(e,o){h(e,r,o)},p:B,d(e){e&&_(r)}}}function ue(c){let t,r,e,o,n=d("workflows","no-workers-failure-message")+"",l,s;return r=new te({}),{c(){t=S("div"),v(r.$$.fragment),e=q(),o=S("p"),l=D(n),this.h()},l(a){t=L(a,"DIV",{class:!0});var f=C(t);y(r.$$.fragment,f),e=Q(f),o=L(f,"P",{});var i=C(o);l=P(i,n),i.forEach(_),f.forEach(_),this.h()},h(){U(t,"class","text-center")},m(a,f){h(a,t,f),E(r,t,null),b(t,e),b(t,o),b(o,l),s=!0},p:B,i(a){s||($(r.$$.fragment,a),s=!0)},o(a){w(r.$$.fragment,a),s=!1},d(a){a&&_(t),T(r)}}}function pe(c){let t,r,e,o;const n=[le,ne],l=[];function s(a,f){var i,u,k;return(i=a[0])!=null&&i.isRunning&&((k=(u=a[3])==null?void 0:u.pollers)==null?void 0:k.length)>0?0:1}return r=s(c),e=l[r]=n[r](c),{c(){t=S("section"),e.c()},l(a){t=L(a,"SECTION",{});var f=C(t);e.l(f),f.forEach(_)},m(a,f){h(a,t,f),l[r].m(t,null),o=!0},p(a,[f]){let i=r;r=s(a),r===i?l[r].p(a,f):(A(),w(l[i],1,1,()=>{l[i]=null}),G(),e=l[r],e?e.p(a,f):(e=l[r]=n[r](a),e.c()),$(e,1),e.m(t,null))},i(a){o||($(e),o=!0)},o(a){w(e),o=!1},d(a){a&&_(t),l[r].d()}}}let me=!1;function _e(c,t,r){let e,o,n,l,s;N(c,re,m=>r(6,n=m)),N(c,J,m=>r(7,l=m)),N(c,oe,m=>r(5,s=m));const{namespace:a}=l.params;let f=new Date;const i=()=>{var m;return j({workflow:e,namespace:a},(m=l.data)===null||m===void 0?void 0:m.settings,n==null?void 0:n.accessToken)};let u;const k=()=>{var m;r(2,u=j({workflow:e,namespace:a},(m=l.data)===null||m===void 0?void 0:m.settings,n==null?void 0:n.accessToken)),u.then(()=>{r(1,f=new Date)})};return c.$$.update=()=>{c.$$.dirty&32&&r(0,{workflow:e,workers:o}=s,e,(r(3,o),r(5,s))),c.$$.dirty&1&&e!=null&&e.isRunning&&r(2,u=i())},[e,f,u,o,k,s]}class ke extends F{constructor(t){super(),K(this,t,_e,pe,O,{})}}function $e(c){let t,r,e,o;return t=new Y({props:{title:`${d("workflows","stack-trace-tab")} | ${c[1]}`,url:c[0].url.href}}),e=new ke({}),{c(){v(t.$$.fragment),r=q(),v(e.$$.fragment)},l(n){y(t.$$.fragment,n),r=Q(n),y(e.$$.fragment,n)},m(n,l){E(t,n,l),h(n,r,l),E(e,n,l),o=!0},p(n,[l]){const s={};l&1&&(s.url=n[0].url.href),t.$set(s)},i(n){o||($(t.$$.fragment,n),$(e.$$.fragment,n),o=!0)},o(n){w(t.$$.fragment,n),w(e.$$.fragment,n),o=!1},d(n){T(t,n),n&&_(r),T(e,n)}}}function ge(c,t,r){let e;N(c,J,n=>r(0,e=n));const o=e.params.workflow;return[e,o]}class De extends F{constructor(t){super(),K(this,t,ge,$e,O,{})}}export{De as default};
