import{S as X,i as Z,s as x,e as w,t as B,c as N,a as L,h as H,d as p,g,M as j,j as ae,a9 as oe,k as P,w as C,m as y,x as I,b as k,y as E,aa as ve,ab as Be,T as se,ac as He,q as d,o as v,B as z,G as We,N as ee,v as Ue,O as Ge,_ as Me,E as A,l as O,n as W,p as q,R as T,ad as qe,I as U,Y as Ye,H as me,J as G,K as M,L as Y,C as pe,z as Ke,A as Je,ae as he,V as Qe,a8 as ne,af as Xe,ag as ge,f as Ze}from"../chunks/index-8649adf3.js";import{p as _e}from"../chunks/stores-f3884605.js";import{a as xe,g as fe}from"../chunks/navigation-6709cf39.js";import{r as be,a as le,b as et,c as tt}from"../chunks/route-for-06f1921b.js";import{I as K}from"../chunks/icon-ce2af7a3.js";import{v as lt,F as nt}from"../chunks/feature-tag-3bdb3484.js";import{n as st,a as ie}from"../chunks/nav-open-78874f88.js";import{N as at,a as J}from"../chunks/_nav-row-c5fcb5f3.js";import{E as Te}from"../chunks/empty-state-99e84604.js";import{T as rt}from"../chunks/tooltip-f1627525.js";import{D as it}from"../chunks/data-encoder-status-d74cd13b.js";import{l as ue}from"../chunks/namespaces-596aa22d.js";import{g as ot}from"../chunks/get-api-origin-77892e82.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/persist-store-9ae8bcfa.js";import"../chunks/index-a2dd3bc3.js";import"../chunks/is-function-b969a126.js";import"../chunks/copyable-8395acf5.js";import"../chunks/copy-to-clipboard-8e64a9ff.js";import"../chunks/data-converter-config-01f6b660.js";import"../chunks/is-http-10ab4992.js";import"../chunks/modal-db4439dd.js";import"../chunks/button-0453c90a.js";import"../chunks/badge-88082a8f.js";/* empty css                                                     */function ke(r,e,n){const t=r.slice();return t[12]=e[n],t}function we(r){let e,n,t=r[4].params.namespace+"",l;return{c(){e=w("p"),n=B("You are currently viewing "),l=B(t)},l(a){e=N(a,"P",{});var s=L(e);n=H(s,"You are currently viewing "),l=H(s,t),s.forEach(p)},m(a,s){g(a,e,s),j(e,n),j(e,l)},p(a,s){s&16&&t!==(t=a[4].params.namespace+"")&&ae(l,t)},d(a){a&&p(e)}}}function ft(r){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function ut(r){let e,n,t,l;const a=[mt,ct],s=[];function i(o,u){return o[11]?0:1}return e=i(r),n=s[e]=a[e](r),{c(){n.c(),t=O()},l(o){n.l(o),t=O()},m(o,u){s[e].m(o,u),g(o,t,u),l=!0},p(o,u){let c=e;e=i(o),e===c?s[e].p(o,u):(W(),v(s[c],1,1,()=>{s[c]=null}),q(),n=s[e],n?n.p(o,u):(n=s[e]=a[e](o),n.c()),d(n,1),n.m(t.parentNode,t))},i(o){l||(d(n),l=!0)},o(o){v(n),l=!1},d(o){s[e].d(o),o&&p(t)}}}function ct(r){let e,n;return e=new Te({props:{title:"Could not list Namespaces"}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p:A,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function mt(r){let e,n,t=r[11].filter(r[8]),l=[];for(let i=0;i<t.length;i+=1)l[i]=Ee(ke(r,t,i));const a=i=>v(l[i],1,1,()=>{l[i]=null});let s=null;return t.length||(s=Ne()),{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=O(),s&&s.c()},l(i){for(let o=0;o<l.length;o+=1)l[o].l(i);e=O(),s&&s.l(i)},m(i,o){for(let u=0;u<l.length;u+=1)l[u].m(i,o);g(i,e,o),s&&s.m(i,o),n=!0},p(i,o){if(o&26){t=i[11].filter(i[8]);let u;for(u=0;u<t.length;u+=1){const c=ke(i,t,u);l[u]?(l[u].p(c,o),d(l[u],1)):(l[u]=Ee(c),l[u].c(),d(l[u],1),l[u].m(e.parentNode,e))}for(W(),u=t.length;u<l.length;u+=1)a(u);q(),!t.length&&s?s.p(i,o):t.length?s&&(W(),v(s,1,1,()=>{s=null}),q()):(s=Ne(),s.c(),d(s,1),s.m(e.parentNode,e))}},i(i){if(!n){for(let o=0;o<t.length;o+=1)d(l[o]);n=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)v(l[o]);n=!1},d(i){qe(l,i),i&&p(e),s&&s.d(i)}}}function Ne(r){let e,n;return e=new Te({props:{title:"No Namespaces"}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p:A,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Ce(r){let e,n;return e=new K({props:{name:"checkmark"}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Ee(r){var $;let e,n,t,l,a=r[12].namespace+"",s,i,o,u,c,m,f=r[12].namespace===(($=r[4].params)==null?void 0:$.namespace)&&Ce();function _(){return r[9](r[12])}return{c(){e=w("li"),n=w("div"),f&&f.c(),t=P(),l=w("a"),s=B(a),o=P(),this.h()},l(h){e=N(h,"LI",{class:!0});var D=L(e);n=N(D,"DIV",{class:!0});var S=L(n);f&&f.l(S),S.forEach(p),t=y(D),l=N(D,"A",{href:!0,class:!0});var b=L(l);s=H(b,a),b.forEach(p),o=y(D),D.forEach(p),this.h()},h(){var h;k(n,"class","w-6 h-6 pl-3 active svelte-12338m3"),k(l,"href",i=r[12].href),k(l,"class","link svelte-12338m3"),T(l,"active",r[12].namespace===((h=r[4].params)==null?void 0:h.namespace)),k(e,"class","first:rounded-t-md first:border-t last:rounded-b-md border-b border-l border-r p-3 flex border-collapse gap-2 hover:bg-gray-50 cursor-pointer")},m(h,D){g(h,e,D),j(e,n),f&&f.m(n,null),j(e,t),j(e,l),j(l,s),j(e,o),u=!0,c||(m=se(e,"click",_),c=!0)},p(h,D){var S,b;r=h,r[12].namespace===((S=r[4].params)==null?void 0:S.namespace)?f?D&26&&d(f,1):(f=Ce(),f.c(),d(f,1),f.m(n,null)):f&&(W(),v(f,1,1,()=>{f=null}),q()),(!u||D&10)&&a!==(a=r[12].namespace+"")&&ae(s,a),(!u||D&10&&i!==(i=r[12].href))&&k(l,"href",i),D&26&&T(l,"active",r[12].namespace===((b=r[4].params)==null?void 0:b.namespace))},i(h){u||(d(f),u=!0)},o(h){v(f),u=!1},d(h){h&&p(e),f&&f.d(),c=!1,m()}}}function pt(r){let e;return{c(){e=B("Loading ...")},l(n){e=H(n,"Loading ...")},m(n,t){g(n,e,t)},p:A,i:A,o:A,d(n){n&&p(e)}}}function _t(r){var F;let e,n,t,l,a,s,i,o,u,c,m,f,_,$,h,D,S=((F=r[4].params)==null?void 0:F.namespace)&&we(r);o=new K({props:{name:"search"}});let b={ctx:r,current:null,token:null,hasCatch:!1,pending:pt,then:ut,catch:ft,value:11,blocks:[,,,]};return oe(_=r[1],b),{c(){e=w("div"),n=w("h2"),t=B("Select a namespace"),l=P(),S&&S.c(),a=P(),s=w("div"),i=w("div"),C(o.$$.fragment),u=P(),c=w("input"),m=P(),f=w("ul"),b.block.c(),this.h()},l(V){e=N(V,"DIV",{class:!0});var R=L(e);n=N(R,"H2",{class:!0});var Q=L(n);t=H(Q,"Select a namespace"),Q.forEach(p),l=y(R),S&&S.l(R),R.forEach(p),a=y(V),s=N(V,"DIV",{class:!0});var re=L(s);i=N(re,"DIV",{class:!0});var $e=L(i);I(o.$$.fragment,$e),$e.forEach(p),u=y(re),c=N(re,"INPUT",{class:!0,placeholder:!0}),re.forEach(p),m=y(V),f=N(V,"UL",{"data-cy":!0});var de=L(f);b.block.l(de),de.forEach(p),this.h()},h(){k(n,"class","text-2xl"),k(e,"class","prose mt-16 mb-8"),k(i,"class","ml-4 mr-2"),k(c,"class","w-full"),k(c,"placeholder","Search"),k(s,"class","mb-5 flex rounded-full border p-1 pr-4"),k(f,"data-cy","namespace-list")},m(V,R){g(V,e,R),j(e,n),j(n,t),j(e,l),S&&S.m(e,null),g(V,a,R),g(V,s,R),j(s,i),E(o,i,null),j(s,u),j(s,c),ve(c,r[3]),r[7](c),g(V,m,R),g(V,f,R),b.block.m(f,b.anchor=null),b.mount=()=>f,b.anchor=null,$=!0,h||(D=[Be(r[0].call(null,c)),se(c,"input",r[6])],h=!0)},p(V,[R]){var Q;r=V,(Q=r[4].params)!=null&&Q.namespace?S?S.p(r,R):(S=we(r),S.c(),S.m(e,null)):S&&(S.d(1),S=null),R&8&&c.value!==r[3]&&ve(c,r[3]),b.ctx=r,R&2&&_!==(_=r[1])&&oe(_,b)||He(b,r,R)},i(V){$||(d(o.$$.fragment,V),d(b.block),$=!0)},o(V){v(o.$$.fragment,V);for(let R=0;R<3;R+=1){const Q=b.blocks[R];v(Q)}$=!1},d(V){V&&p(e),S&&S.d(),V&&p(a),V&&p(s),z(o),r[7](null),V&&p(m),V&&p(f),b.block.d(),b.token=null,b=null,h=!1,We(D)}}}function $t(r,e,n){let t,l;ee(r,_e,$=>n(4,l=$));let{getNamespaceList:a=null}=e,s=null,i=null;Ue(()=>{n(1,s=a()),i.focus()});const o=Ge();function u($){const h=D=>{$&&!D.defaultPrevented&&D.key==="Escape"&&o("closeNamespaceList")};return document.addEventListener("keydown",h,!0),{destroy(){document.removeEventListener("keydown",h,!0)}}}function c(){t=this.value,n(3,t)}function m($){Me[$?"unshift":"push"](()=>{i=$,n(2,i)})}const f=({namespace:$})=>$.includes(t),_=$=>$==null?void 0:$.onClick();return r.$$set=$=>{"getNamespaceList"in $&&n(5,a=$.getNamespaceList)},n(3,t=""),[u,s,i,t,l,a,c,m,f,_]}class dt extends X{constructor(e){super(),Z(this,e,$t,_t,x,{getNamespaceList:5,rootDocumentHandler:0})}get rootDocumentHandler(){return this.$$.ctx[0]}}function vt(r){const e=n=>{r&&!r.contains(n.target)&&!n.defaultPrevented&&r.dispatchEvent(new CustomEvent("click-outside"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function ht(r){let e,n,t,l,a,s,i,o;l=new K({props:{name:"close"}});const u=r[4].default,c=U(u,r,r[3],null);return{c(){e=w("div"),n=w("div"),t=w("div"),C(l.$$.fragment),a=P(),c&&c.c(),this.h()},l(m){e=N(m,"DIV",{class:!0});var f=L(e);n=N(f,"DIV",{class:!0});var _=L(n);t=N(_,"DIV",{class:!0});var $=L(t);I(l.$$.fragment,$),$.forEach(p),_.forEach(p),a=y(f),c&&c.l(f),f.forEach(p),this.h()},h(){k(t,"class","absolute right-0 top-0 cursor-pointer"),k(n,"class","relative"),k(e,"class",Ye(`
  absolute 
  right-[300px]
  z-10 
  h-full 
  w-[300px] 
  overflow-auto 
  border-r-2 
  border-gray-200 
  bg-white 
  p-5 
  text-gray-900 
  md:right-[500px] 
  md:w-[500px]`)+" svelte-17tbjlh"),T(e,"flyin",r[0]),T(e,"flyout",r[1])},m(m,f){g(m,e,f),j(e,n),j(n,t),E(l,t,null),j(e,a),c&&c.m(e,null),s=!0,i||(o=[se(t,"click",function(){me(r[2])&&r[2].apply(this,arguments)}),Be(vt.call(null,e)),se(e,"click-outside",function(){me(r[2])&&r[2].apply(this,arguments)})],i=!0)},p(m,[f]){r=m,c&&c.p&&(!s||f&8)&&G(c,u,r,r[3],s?Y(u,r[3],f,null):M(r[3]),null),f&1&&T(e,"flyin",r[0]),f&2&&T(e,"flyout",r[1])},i(m){s||(d(l.$$.fragment,m),d(c,m),s=!0)},o(m){v(l.$$.fragment,m),v(c,m),s=!1},d(m){m&&p(e),z(l),c&&c.d(m),i=!1,We(o)}}}function gt(r,e,n){let{$$slots:t={},$$scope:l}=e,{flyin:a}=e,{flyout:s}=e,{onClose:i}=e;return r.$$set=o=>{"flyin"in o&&n(0,a=o.flyin),"flyout"in o&&n(1,s=o.flyout),"onClose"in o&&n(2,i=o.onClose),"$$scope"in o&&n(3,l=o.$$scope)},[a,s,i,l,t]}class bt extends X{constructor(e){super(),Z(this,e,gt,ht,x,{flyin:0,flyout:1,onClose:2})}}function kt(r){let e;const n=r[2].default,t=U(n,r,r[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8)&&G(t,n,l,l[3],e?Y(n,l[3],a,null):M(l[3]),null)},i(l){e||(d(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function wt(r){let e,n;const t=[{hide:r[0]},r[1]];let l={$$slots:{default:[kt]},$$scope:{ctx:r}};for(let a=0;a<t.length;a+=1)l=pe(l,t[a]);return e=new rt({props:l}),{c(){C(e.$$.fragment)},l(a){I(e.$$.fragment,a)},m(a,s){E(e,a,s),n=!0},p(a,[s]){const i=s&3?Ke(t,[s&1&&{hide:a[0]},s&2&&Je(a[1])]):{};s&8&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(a){n||(d(e.$$.fragment,a),n=!0)},o(a){v(e.$$.fragment,a),n=!1},d(a){z(e,a)}}}function Nt(r,e,n){const t=[];let l=he(e,t),a;ee(r,st,o=>n(0,a=o));let{$$slots:s={},$$scope:i}=e;return r.$$set=o=>{e=pe(pe({},e),Qe(o)),n(1,l=he(e,t)),"$$scope"in o&&n(3,i=o.$$scope)},[a,l,s,i]}class te extends X{constructor(e){super(),Z(this,e,Nt,wt,x,{})}}const Ct=r=>({}),ze=r=>({});function Et(r){let e;const n=r[3].default,t=U(n,r,r[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&4)&&G(t,n,l,l[2],e?Y(n,l[2],a,null):M(l[2]),null)},i(l){e||(d(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function zt(r){let e;const n=r[3].fallback,t=U(n,r,r[2],ze);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&4)&&G(t,n,l,l[2],e?Y(n,l[2],a,Ct):M(l[2]),ze)},i(l){e||(d(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function It(r){let e,n,t,l;const a=[zt,Et],s=[];function i(o,u){var c,m,f;return o[0]||((f=(m=(c=o[1].stuff)==null?void 0:c.settings)==null?void 0:m.runtimeEnvironment)==null?void 0:f.isCloud)?0:1}return e=i(r),n=s[e]=a[e](r),{c(){n.c(),t=O()},l(o){n.l(o),t=O()},m(o,u){s[e].m(o,u),g(o,t,u),l=!0},p(o,[u]){let c=e;e=i(o),e===c?s[e].p(o,u):(W(),v(s[c],1,1,()=>{s[c]=null}),q(),n=s[e],n?n.p(o,u):(n=s[e]=a[e](o),n.c()),d(n,1),n.m(t.parentNode,t))},i(o){l||(d(n),l=!0)},o(o){v(n),l=!1},d(o){s[e].d(o),o&&p(t)}}}function Lt(r,e,n){let t;ee(r,_e,i=>n(1,t=i));let{$$slots:l={},$$scope:a}=e,{isCloud:s=!1}=e;return r.$$set=i=>{"isCloud"in i&&n(0,s=i.isCloud),"$$scope"in i&&n(2,a=i.$$scope)},[s,t,a,l]}class ce extends X{constructor(e){super(),Z(this,e,Lt,It,x,{isCloud:0})}}const Dt=r=>({}),Ie=r=>({});function Vt(r){let e;const n=r[2].fallback,t=U(n,r,r[1],Ie);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&2)&&G(t,n,l,l[1],e?Y(n,l[1],a,Dt):M(l[1]),Ie)},i(l){e||(d(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function St(r){let e;const n=r[2].default,t=U(n,r,r[1],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&2)&&G(t,n,l,l[1],e?Y(n,l[1],a,null):M(l[1]),null)},i(l){e||(d(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function jt(r){let e,n,t,l;const a=[St,Vt],s=[];function i(o,u){return o[0]?0:1}return e=i(r),n=s[e]=a[e](r),{c(){n.c(),t=O()},l(o){n.l(o),t=O()},m(o,u){s[e].m(o,u),g(o,t,u),l=!0},p(o,[u]){let c=e;e=i(o),e===c?s[e].p(o,u):(W(),v(s[c],1,1,()=>{s[c]=null}),q(),n=s[e],n?n.p(o,u):(n=s[e]=a[e](o),n.c()),d(n,1),n.m(t.parentNode,t))},i(o){l||(d(n),l=!0)},o(o){v(n),l=!1},d(o){s[e].d(o),o&&p(t)}}}function Ft(r,e,n){let{$$slots:t={},$$scope:l}=e,{enabled:a=!1}=e;return r.$$set=s=>{"enabled"in s&&n(0,a=s.enabled),"$$scope"in s&&n(1,l=s.$$scope)},[a,l,t]}class Pt extends X{constructor(e){super(),Z(this,e,Ft,jt,x,{enabled:0})}}const{Boolean:yt}=Xe,At=r=>({}),Le=r=>({}),Rt=r=>({}),De=r=>({}),Ot=r=>({}),Ve=r=>({});function Se(r,e,n){const t=r.slice();return t[15]=e[n],t}function Bt(r){let e,n,t;return n=new K({props:{name:"workflow"}}),{c(){e=w("div"),C(n.$$.fragment),this.h()},l(l){e=N(l,"DIV",{class:!0});var a=L(e);I(n.$$.fragment,a),a.forEach(p),this.h()},h(){k(e,"class","nav-icon svelte-aivzzg")},m(l,a){g(l,e,a),E(n,e,null),t=!0},p:A,i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){v(n.$$.fragment,l),t=!1},d(l){l&&p(e),z(n)}}}function Ht(r){let e,n,t,l,a;return e=new te({props:{right:!0,text:"Workflows",$$slots:{default:[Bt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=P(),t=w("div"),l=B("Workflows"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=N(s,"DIV",{class:!0});var i=L(t);l=H(i,"Workflows"),i.forEach(p),this.h()},h(){k(t,"class","nav-title svelte-aivzzg")},m(s,i){E(e,s,i),g(s,n,i),g(s,t,i),j(t,l),a=!0},p(s,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){z(e,s),s&&p(n),s&&p(t)}}}function Wt(r){let e,n,t,l,a;return n=new K({props:{name:"schedules"}}),l=new nt({props:{feature:"schedules",alpha:!0}}),{c(){e=w("div"),C(n.$$.fragment),t=P(),C(l.$$.fragment),this.h()},l(s){e=N(s,"DIV",{class:!0});var i=L(e);I(n.$$.fragment,i),t=y(i),I(l.$$.fragment,i),i.forEach(p),this.h()},h(){k(e,"class","nav-icon svelte-aivzzg")},m(s,i){g(s,e,i),E(n,e,null),j(e,t),E(l,e,null),a=!0},p:A,i(s){a||(d(n.$$.fragment,s),d(l.$$.fragment,s),a=!0)},o(s){v(n.$$.fragment,s),v(l.$$.fragment,s),a=!1},d(s){s&&p(e),z(n),z(l)}}}function qt(r){let e,n,t,l,a;return e=new te({props:{right:!0,text:"Schedules",$$slots:{default:[Wt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=P(),t=w("div"),l=B("Schedules"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=N(s,"DIV",{class:!0});var i=L(t);l=H(i,"Schedules"),i.forEach(p),this.h()},h(){k(t,"class","nav-title svelte-aivzzg")},m(s,i){E(e,s,i),g(s,n,i),g(s,t,i),j(t,l),a=!0},p(s,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){z(e,s),s&&p(n),s&&p(t)}}}function Tt(r){let e,n;return e=new J({props:{link:r[3].schedules,isCloud:r[0],"data-cy":"schedules-button",$$slots:{default:[qt]},$$scope:{ctx:r}}}),e.$on("click",r[13]),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&8&&(a.link=t[3].schedules),l&1&&(a.isCloud=t[0]),l&16384&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Ut(r){var t,l;let e,n;return e=new Pt({props:{enabled:Boolean((l=(t=r[1])==null?void 0:t.namespaceInfo)==null?void 0:l.supportsSchedules),$$slots:{default:[Tt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(a){I(e.$$.fragment,a)},m(a,s){E(e,a,s),n=!0},p(a,s){var o,u;const i={};s&2&&(i.enabled=Boolean((u=(o=a[1])==null?void 0:o.namespaceInfo)==null?void 0:u.supportsSchedules)),s&16393&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(a){n||(d(e.$$.fragment,a),n=!0)},o(a){v(e.$$.fragment,a),n=!1},d(a){z(e,a)}}}function Gt(r){let e,n,t;return n=new K({props:{name:"namespace"}}),{c(){e=w("div"),C(n.$$.fragment),this.h()},l(l){e=N(l,"DIV",{class:!0});var a=L(e);I(n.$$.fragment,a),a.forEach(p),this.h()},h(){k(e,"class","nav-icon svelte-aivzzg")},m(l,a){g(l,e,a),E(n,e,null),t=!0},p:A,i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){v(n.$$.fragment,l),t=!1},d(l){l&&p(e),z(n)}}}function Mt(r){let e,n,t,l,a;return e=new te({props:{right:!0,text:"Namespaces",$$slots:{default:[Gt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=P(),t=w("div"),l=B("Namespaces"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=N(s,"DIV",{class:!0});var i=L(t);l=H(i,"Namespaces"),i.forEach(p),this.h()},h(){k(t,"class","nav-title svelte-aivzzg")},m(s,i){E(e,s,i),g(s,n,i),g(s,t,i),j(t,l),a=!0},p(s,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){z(e,s),s&&p(n),s&&p(t)}}}function Yt(r){let e,n;return e=new J({props:{link:r[3].namespaces,isCloud:r[0],"data-cy":"namespaces-button",$$slots:{default:[Mt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&8&&(a.link=t[3].namespaces),l&1&&(a.isCloud=t[0]),l&16384&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Kt(r){let e,n,t;return n=new K({props:{name:"archives"}}),{c(){e=w("div"),C(n.$$.fragment),this.h()},l(l){e=N(l,"DIV",{class:!0});var a=L(e);I(n.$$.fragment,a),a.forEach(p),this.h()},h(){k(e,"class","nav-icon svelte-aivzzg")},m(l,a){g(l,e,a),E(n,e,null),t=!0},p:A,i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){v(n.$$.fragment,l),t=!1},d(l){l&&p(e),z(n)}}}function Jt(r){let e,n,t,l,a;return e=new te({props:{right:!0,text:"Archive",$$slots:{default:[Kt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=P(),t=w("div"),l=B("Archive"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=N(s,"DIV",{class:!0});var i=L(t);l=H(i,"Archive"),i.forEach(p),this.h()},h(){k(t,"class","nav-title svelte-aivzzg")},m(s,i){E(e,s,i),g(s,n,i),g(s,t,i),j(t,l),a=!0},p(s,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){z(e,s),s&&p(n),s&&p(t)}}}function Qt(r){let e,n;return e=new J({props:{link:r[3].archive,isCloud:r[0],"data-cy":"archive-button",$$slots:{default:[Jt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&8&&(a.link=t[3].archive),l&1&&(a.isCloud=t[0]),l&16384&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Xt(r){let e,n,t,l,a,s,i,o,u;e=new J({props:{link:r[3].workflows,isCloud:r[0],"data-cy":"workflows-button",$$slots:{default:[Ht]},$$scope:{ctx:r}}}),t=new ce({props:{isCloud:r[0],$$slots:{default:[Ut]},$$scope:{ctx:r}}}),a=new ce({props:{$$slots:{default:[Yt]},$$scope:{ctx:r}}});const c=r[10].usage,m=U(c,r,r[14],Le);return o=new ce({props:{isCloud:r[0],$$slots:{default:[Qt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=P(),C(t.$$.fragment),l=P(),C(a.$$.fragment),s=P(),m&&m.c(),i=P(),C(o.$$.fragment)},l(f){I(e.$$.fragment,f),n=y(f),I(t.$$.fragment,f),l=y(f),I(a.$$.fragment,f),s=y(f),m&&m.l(f),i=y(f),I(o.$$.fragment,f)},m(f,_){E(e,f,_),g(f,n,_),E(t,f,_),g(f,l,_),E(a,f,_),g(f,s,_),m&&m.m(f,_),g(f,i,_),E(o,f,_),u=!0},p(f,_){const $={};_&8&&($.link=f[3].workflows),_&1&&($.isCloud=f[0]),_&16384&&($.$$scope={dirty:_,ctx:f}),e.$set($);const h={};_&1&&(h.isCloud=f[0]),_&16395&&(h.$$scope={dirty:_,ctx:f}),t.$set(h);const D={};_&16393&&(D.$$scope={dirty:_,ctx:f}),a.$set(D),m&&m.p&&(!u||_&16384)&&G(m,c,f,f[14],u?Y(c,f[14],_,At):M(f[14]),Le);const S={};_&1&&(S.isCloud=f[0]),_&16393&&(S.$$scope={dirty:_,ctx:f}),o.$set(S)},i(f){u||(d(e.$$.fragment,f),d(t.$$.fragment,f),d(a.$$.fragment,f),d(m,f),d(o.$$.fragment,f),u=!0)},o(f){v(e.$$.fragment,f),v(t.$$.fragment,f),v(a.$$.fragment,f),v(m,f),v(o.$$.fragment,f),u=!1},d(f){z(e,f),f&&p(n),z(t,f),f&&p(l),z(a,f),f&&p(s),m&&m.d(f),f&&p(i),z(o,f)}}}function je(r){let e,n,t=r[5],l=[];for(let s=0;s<t.length;s+=1)l[s]=Fe(Se(r,t,s));const a=s=>v(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=O()},l(s){for(let i=0;i<l.length;i+=1)l[i].l(s);e=O()},m(s,i){for(let o=0;o<l.length;o+=1)l[o].m(s,i);g(s,e,i),n=!0},p(s,i){if(i&33){t=s[5];let o;for(o=0;o<t.length;o+=1){const u=Se(s,t,o);l[o]?(l[o].p(u,i),d(l[o],1)):(l[o]=Fe(u),l[o].c(),d(l[o],1),l[o].m(e.parentNode,e))}for(W(),o=t.length;o<l.length;o+=1)a(o);q()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)d(l[i]);n=!0}},o(s){l=l.filter(yt);for(let i=0;i<l.length;i+=1)v(l[i]);n=!1},d(s){qe(l,s),s&&p(e)}}}function Zt(r){let e,n,t,l,a=r[15].name+"",s,i,o;var u=r[15].component;function c(m){return{}}return u&&(n=new u(c())),{c(){e=w("div"),n&&C(n.$$.fragment),t=P(),l=w("div"),s=B(a),i=P(),this.h()},l(m){e=N(m,"DIV",{class:!0});var f=L(e);n&&I(n.$$.fragment,f),f.forEach(p),t=y(m),l=N(m,"DIV",{class:!0});var _=L(l);s=H(_,a),_.forEach(p),i=y(m),this.h()},h(){k(e,"class","nav-icon svelte-aivzzg"),k(l,"class","nav-title svelte-aivzzg")},m(m,f){g(m,e,f),n&&E(n,e,null),g(m,t,f),g(m,l,f),j(l,s),g(m,i,f),o=!0},p(m,f){if(u!==(u=m[15].component)){if(n){W();const _=n;v(_.$$.fragment,1,0,()=>{z(_,1)}),q()}u?(n=new u(c()),C(n.$$.fragment),d(n.$$.fragment,1),E(n,e,null)):n=null}(!o||f&32)&&a!==(a=m[15].name+"")&&ae(s,a)},i(m){o||(n&&d(n.$$.fragment,m),o=!0)},o(m){n&&v(n.$$.fragment,m),o=!1},d(m){m&&p(e),n&&z(n),m&&p(t),m&&p(l),m&&p(i)}}}function Fe(r){let e,n;return e=new J({props:{isCloud:r[0],noFilter:!0,$$slots:{default:[Zt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&1&&(a.isCloud=t[0]),l&16416&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function xt(r){let e,n,t;return n=new K({props:{name:"feedback"}}),{c(){e=w("div"),C(n.$$.fragment),this.h()},l(l){e=N(l,"DIV",{class:!0});var a=L(e);I(n.$$.fragment,a),a.forEach(p),this.h()},h(){k(e,"class","nav-icon svelte-aivzzg")},m(l,a){g(l,e,a),E(n,e,null),t=!0},p:A,i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){v(n.$$.fragment,l),t=!1},d(l){l&&p(e),z(n)}}}function el(r){let e,n,t,l,a;return e=new te({props:{right:!0,text:"Feedback",$$slots:{default:[xt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=P(),t=w("div"),l=B("Feedback"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=N(s,"DIV",{class:!0});var i=L(t);l=H(i,"Feedback"),i.forEach(p),this.h()},h(){k(t,"class","nav-title svelte-aivzzg")},m(s,i){E(e,s,i),g(s,n,i),g(s,t,i),j(t,l),a=!0},p(s,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){z(e,s),s&&p(n),s&&p(t)}}}function tl(r){let e,n;return e=new J({props:{link:r[3].feedback,isCloud:r[0],externalLink:!0,$$slots:{default:[el]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&8&&(a.link=t[3].feedback),l&1&&(a.isCloud=t[0]),l&16384&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ll(r){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function nl(r){var l;let e,n,t=((l=r[6])==null?void 0:l.email)&&Pe(r);return{c(){t&&t.c(),e=O()},l(a){t&&t.l(a),e=O()},m(a,s){t&&t.m(a,s),g(a,e,s),n=!0},p(a,s){var i;(i=a[6])!=null&&i.email?t?(t.p(a,s),s&64&&d(t,1)):(t=Pe(a),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(W(),v(t,1,1,()=>{t=null}),q())},i(a){n||(d(t),n=!0)},o(a){v(t),n=!1},d(a){t&&t.d(a),a&&p(e)}}}function Pe(r){var c,m;let e,n,t,l,a,s,i;e=new J({props:{isCloud:r[0],$$slots:{default:[al]},$$scope:{ctx:r}}}),e.$on("click",function(){me(r[4])&&r[4].apply(this,arguments)});let o=((c=r[6])==null?void 0:c.picture)&&ye(r),u=((m=r[6])==null?void 0:m.name)&&Re(r);return{c(){C(e.$$.fragment),n=P(),t=w("div"),l=w("div"),o&&o.c(),a=P(),s=w("div"),u&&u.c(),this.h()},l(f){I(e.$$.fragment,f),n=y(f),t=N(f,"DIV",{class:!0});var _=L(t);l=N(_,"DIV",{});var $=L(l);o&&o.l($),$.forEach(p),a=y(_),s=N(_,"DIV",{class:!0});var h=L(s);u&&u.l(h),h.forEach(p),_.forEach(p),this.h()},h(){k(s,"class","nav-title truncate svelte-aivzzg"),k(t,"class","profile-row svelte-aivzzg")},m(f,_){E(e,f,_),g(f,n,_),g(f,t,_),j(t,l),o&&o.m(l,null),j(t,a),j(t,s),u&&u.m(s,null),i=!0},p(f,_){var h,D;r=f;const $={};_&1&&($.isCloud=r[0]),_&16384&&($.$$scope={dirty:_,ctx:r}),e.$set($),(h=r[6])!=null&&h.picture?o?o.p(r,_):(o=ye(r),o.c(),o.m(l,null)):o&&(o.d(1),o=null),(D=r[6])!=null&&D.name?u?u.p(r,_):(u=Re(r),u.c(),u.m(s,null)):u&&(u.d(1),u=null)},i(f){i||(d(e.$$.fragment,f),i=!0)},o(f){v(e.$$.fragment,f),i=!1},d(f){z(e,f),f&&p(n),f&&p(t),o&&o.d(),u&&u.d()}}}function sl(r){let e,n,t;return n=new K({props:{name:"logout"}}),{c(){e=w("div"),C(n.$$.fragment),this.h()},l(l){e=N(l,"DIV",{class:!0});var a=L(e);I(n.$$.fragment,a),a.forEach(p),this.h()},h(){k(e,"class","nav-icon svelte-aivzzg")},m(l,a){g(l,e,a),E(n,e,null),t=!0},p:A,i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){v(n.$$.fragment,l),t=!1},d(l){l&&p(e),z(n)}}}function al(r){let e,n,t,l,a;return e=new te({props:{right:!0,text:"Logout",$$slots:{default:[sl]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),n=P(),t=w("div"),l=B("Logout"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=N(s,"DIV",{class:!0});var i=L(t);l=H(i,"Logout"),i.forEach(p),this.h()},h(){k(t,"class","nav-title cursor-pointer svelte-aivzzg")},m(s,i){E(e,s,i),g(s,n,i),g(s,t,i),j(t,l),a=!0},p(s,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){z(e,s),s&&p(n),s&&p(t)}}}function ye(r){var u;let e,n,t,l,a,s,i,o=((u=r[6])==null?void 0:u.name)&&Ae(r);return{c(){e=w("img"),l=P(),a=w("div"),o&&o.c(),this.h()},l(c){e=N(c,"IMG",{src:!0,alt:!0,class:!0}),l=y(c),a=N(c,"DIV",{class:!0});var m=L(a);o&&o.l(m),m.forEach(p),this.h()},h(){var c,m;ge(e.src,n=(c=r[6])==null?void 0:c.picture)||k(e,"src",n),k(e,"alt",t=(m=r[6])==null?void 0:m.profile),k(e,"class","rounded-md p-1 w-8 h-8"),T(e,"hidden",!r[7]),k(a,"class","rounded-full p-0.5 bg-blue-200 h-full aspect-square"),T(a,"hidden",r[7])},m(c,m){g(c,e,m),g(c,l,m),g(c,a,m),o&&o.m(a,null),s||(i=se(e,"error",r[9]),s=!0)},p(c,m){var f,_,$;m&64&&!ge(e.src,n=(f=c[6])==null?void 0:f.picture)&&k(e,"src",n),m&64&&t!==(t=(_=c[6])==null?void 0:_.profile)&&k(e,"alt",t),m&128&&T(e,"hidden",!c[7]),($=c[6])!=null&&$.name?o?o.p(c,m):(o=Ae(c),o.c(),o.m(a,null)):o&&(o.d(1),o=null),m&128&&T(a,"hidden",c[7])},d(c){c&&p(e),c&&p(l),c&&p(a),o&&o.d(),s=!1,i()}}}function Ae(r){var l;let e,n=((l=r[6])==null?void 0:l.name.trim().charAt(0))+"",t;return{c(){e=w("div"),t=B(n),this.h()},l(a){e=N(a,"DIV",{class:!0});var s=L(e);t=H(s,n),s.forEach(p),this.h()},h(){k(e,"class","text-black text-center ")},m(a,s){g(a,e,s),j(e,t)},p(a,s){var i;s&64&&n!==(n=((i=a[6])==null?void 0:i.name.trim().charAt(0))+"")&&ae(t,n)},d(a){a&&p(e)}}}function Re(r){var t;let e=((t=r[6])==null?void 0:t.name)+"",n;return{c(){n=B(e)},l(l){n=H(l,e)},m(l,a){g(l,n,a)},p(l,a){var s;a&64&&e!==(e=((s=l[6])==null?void 0:s.name)+"")&&ae(n,e)},d(l){l&&p(n)}}}function rl(r){let e,n;return e=new J({props:{isCloud:r[0],$$slots:{default:[il]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&1&&(a.isCloud=t[0]),l&16384&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function il(r){let e,n,t,l,a;return{c(){e=w("div"),n=w("div"),t=P(),l=w("div"),a=w("div"),this.h()},l(s){e=N(s,"DIV",{class:!0,style:!0});var i=L(e);n=N(i,"DIV",{class:!0}),L(n).forEach(p),i.forEach(p),t=y(s),l=N(s,"DIV",{class:!0});var o=L(l);a=N(o,"DIV",{class:!0}),L(a).forEach(p),o.forEach(p),this.h()},h(){k(n,"class","rounded-full bg-blueGray-200 h-full aspect-square"),k(e,"class","motion-safe:animate-pulse"),Ze(e,"margin-left","1rem"),k(a,"class","h-2 bg-blueGray-50 rounded mt-1"),k(l,"class","nav-title svelte-aivzzg")},m(s,i){g(s,e,i),j(e,n),g(s,t,i),g(s,l,i),j(l,a)},p:A,d(s){s&&p(e),s&&p(t),s&&p(l)}}}function ol(r){let e,n,t,l,a,s,i=r[5]&&je(r);const o=r[10].feedback,u=U(o,r,r[14],Ve),c=u||tl(r),m=r[10].settings,f=U(m,r,r[14],De);let _={ctx:r,current:null,token:null,hasCatch:!1,pending:rl,then:nl,catch:ll,value:6,blocks:[,,,]};return oe(a=r[6],_),{c(){i&&i.c(),e=P(),c&&c.c(),n=P(),f&&f.c(),t=P(),l=O(),_.block.c()},l($){i&&i.l($),e=y($),c&&c.l($),n=y($),f&&f.l($),t=y($),l=O(),_.block.l($)},m($,h){i&&i.m($,h),g($,e,h),c&&c.m($,h),g($,n,h),f&&f.m($,h),g($,t,h),g($,l,h),_.block.m($,_.anchor=h),_.mount=()=>l.parentNode,_.anchor=l,s=!0},p($,h){r=$,r[5]?i?(i.p(r,h),h&32&&d(i,1)):(i=je(r),i.c(),d(i,1),i.m(e.parentNode,e)):i&&(W(),v(i,1,1,()=>{i=null}),q()),u?u.p&&(!s||h&16384)&&G(u,o,r,r[14],s?Y(o,r[14],h,Ot):M(r[14]),Ve):c&&c.p&&(!s||h&9)&&c.p(r,s?h:-1),f&&f.p&&(!s||h&16384)&&G(f,m,r,r[14],s?Y(m,r[14],h,Rt):M(r[14]),De),_.ctx=r,h&64&&a!==(a=r[6])&&oe(a,_)||He(_,r,h)},i($){s||(d(i),d(c,$),d(f,$),d(_.block),s=!0)},o($){v(i),v(c,$),v(f,$);for(let h=0;h<3;h+=1){const D=_.blocks[h];v(D)}s=!1},d($){i&&i.d($),$&&p(e),c&&c.d($),$&&p(n),f&&f.d($),$&&p(t),$&&p(l),_.block.d($),_.token=null,_=null}}}function Oe(r){let e,n;return e=new dt({props:{getNamespaceList:r[2]}}),e.$on("closeNamespaceList",r[11]),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&4&&(a.getNamespaceList=t[2]),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function fl(r){let e,n,t=r[8]&&Oe(r);return{c(){t&&t.c(),e=O()},l(l){t&&t.l(l),e=O()},m(l,a){t&&t.m(l,a),g(l,e,a),n=!0},p(l,a){l[8]?t?(t.p(l,a),a&256&&d(t,1)):(t=Oe(l),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(W(),v(t,1,1,()=>{t=null}),q())},i(l){n||(d(t),n=!0)},o(l){v(t),n=!1},d(l){t&&t.d(l),l&&p(e)}}}function ul(r){let e,n;return e=new bt({props:{flyin:r[8]===!0,flyout:r[8]===!1,onClose:r[12],$$slots:{default:[fl]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const a={};l&256&&(a.flyin=t[8]===!0),l&256&&(a.flyout=t[8]===!1),l&256&&(a.onClose=t[12]),l&16644&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function cl(r){let e,n;return e=new at({props:{isCloud:r[0],linkList:r[3],$$slots:{drawer:[ul],bottom:[ol],top:[Xt]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,[l]){const a={};l&1&&(a.isCloud=t[0]),l&8&&(a.linkList=t[3]),l&16895&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ml(r,e,n){let t;ee(r,ie,b=>n(8,t=b));let{$$slots:l={},$$scope:a}=e,{isCloud:s=!1}=e,{activeNamespace:i}=e,{getNamespaceList:o}=e,{linkList:u}=e,{user:c}=e,{logout:m}=e,{extras:f=null}=e,_=!0;function $(){n(7,_=!1)}xe(()=>{t&&ne(ie,t=!1,t)});const h=b=>{ne(ie,t=!1,t)},D=()=>{t===!0&&ne(ie,t=!1,t)},S=()=>lt("schedules");return r.$$set=b=>{"isCloud"in b&&n(0,s=b.isCloud),"activeNamespace"in b&&n(1,i=b.activeNamespace),"getNamespaceList"in b&&n(2,o=b.getNamespaceList),"linkList"in b&&n(3,u=b.linkList),"user"in b&&n(6,c=b.user),"logout"in b&&n(4,m=b.logout),"extras"in b&&n(5,f=b.extras),"$$scope"in b&&n(14,a=b.$$scope)},[s,i,o,u,m,f,c,_,t,$,l,h,D,S,a]}class pl extends X{constructor(e){super(),Z(this,e,ml,cl,x,{isCloud:0,activeNamespace:1,getNamespaceList:2,linkList:3,user:6,logout:4,extras:5})}}function _l(r){let e,n;return e=new pl({props:{getNamespaceList:r[13],activeNamespace:r[2],linkList:r[1],isCloud:r[3],user:Promise.resolve(r[0]),logout:r[5],extras:[{component:it,name:"Data Encoder"}]}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,[l]){const a={};l&4&&(a.activeNamespace=t[2]),l&2&&(a.linkList=t[1]),l&1&&(a.user=Promise.resolve(t[0])),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function $l(r,e,n){let t,l,a,s,i;ee(r,_e,F=>n(11,s=F)),ee(r,ue,F=>n(12,i=F));var o,u,c,m;let{user:f}=e;const{showTemporalSystemNamespace:_}=s.stuff.settings,{isCloud:$}=s.stuff.settings.runtimeEnvironment,h=(s.stuff.namespaces||[]).map(F=>{var V;return(V=F==null?void 0:F.namespaceInfo)===null||V===void 0?void 0:V.name}).filter(F=>_||F!=="temporal-system"),D=h.map(F=>{const R=s.url.pathname.endsWith("schedules")?be({namespace:F}):le({namespace:F});return{namespace:F,href:R,onClick:()=>{ne(ue,i=F,i),fe(le({namespace:F}))}}});if($&&s.params.namespace&&!h.length){const F=le({namespace:s.params.namespace});D.push({namespace:s.params.namespace,href:F,onClick:()=>{ne(ue,i=s.params.namespace,i),fe(F)}})}const S=()=>fe(ot()+"/auth/logout"),b=()=>Promise.resolve(D);return r.$$set=F=>{"user"in F&&n(0,f=F.user)},r.$$.update=()=>{r.$$.dirty&6336&&n(10,t=n(7,u=n(6,o=s.params)===null||o===void 0?void 0:o.namespace)!==null&&u!==void 0?u:i),r.$$.dirty&3072&&n(2,l=(s.stuff.namespaces||[]).find(F=>{var V;return((V=F==null?void 0:F.namespaceInfo)===null||V===void 0?void 0:V.name)===t})),r.$$.dirty&3840&&n(1,a={home:le({namespace:t}),archive:et({namespace:t}),namespaces:tt(),schedules:be({namespace:t}),workflows:le({namespace:t}),feedback:(n(9,m=n(8,c=s.stuff)===null||c===void 0?void 0:c.settings)===null||m===void 0?void 0:m.feedbackURL)||"https://github.com/temporalio/ui/issues/new/choose"})},[f,a,l,$,D,S,o,u,c,m,t,s,i,b]}class Wl extends X{constructor(e){super(),Z(this,e,$l,_l,x,{user:0})}}export{Wl as default};
