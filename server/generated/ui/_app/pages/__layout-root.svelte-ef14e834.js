var Te=Object.defineProperty,Ae=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var pe=(o,e,t)=>e in o?Te(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,_e=(o,e)=>{for(var t in e||(e={}))Oe.call(e,t)&&pe(o,t,e[t]);if(me)for(var t of me(e))Ue.call(e,t)&&pe(o,t,e[t]);return o},$e=(o,e)=>Ae(o,Se(e));import{S as F,i as H,s as q,W as G,X as Q,e as E,w as g,c as T,a as K,x as d,d as _,b as B,g as k,y as h,Y as x,q as c,o as m,B as v,N as R,l as V,n as oe,p as ae,Z as Ce,t as L,h as M,j as we,E as re,I as le,J as ie,K as fe,L as ue,k as U,m as C,_ as Le,$ as ge,M as I,T as Me,a0 as We}from"../chunks/index-caf98bb2.js";import{g as je}from"../chunks/get-namespace-d08f200a.js";import{n as Fe}from"../chunks/notifications-059905fc.js";import{r as He,a as qe}from"../chunks/route-for-api-20e9735b.js";import{N as J,A as Be,H as De,f as Ke,a as Re,b as ze,E as Je}from"../chunks/error-boundary-74652b78.js";import{N as Pe,f as Xe}from"../chunks/navigation-header-ec4ed879.js";/* empty css                    */import{p as P}from"../chunks/stores-2b8df60b.js";import{r as j,a as ee,b as ne}from"../chunks/route-for-37155b93.js";import{g as Ye}from"../chunks/navigation-3f1ea447.js";import{S as Ze,O as Ie}from"../chunks/select-36a7f256.js";import{p as Ge}from"../chunks/persist-store-2fedf73e.js";import"../chunks/index-9674ed36.js";import"../chunks/is-network-error-ac7c8caf.js";import"../chunks/index.es-20d15ff4.js";import"../chunks/index-50a6696e.js";import"../chunks/error-c8281d73.js";import"../chunks/link-a4b0d9a4.js";import"../chunks/data-converter-config-f280b377.js";import"../chunks/is-http-bb1df2e8.js";import"../chunks/tooltip-8489907b.js";import"../chunks/copyable-242207d1.js";import"../chunks/modal-de8cc343.js";import"../chunks/button-e117c6a4.js";import"../chunks/singletons-d1fb5791.js";const Qe=(o,e)=>!o.auth.enabled||Boolean(e==null?void 0:e.email),xe=async(o=fetch)=>{const e=await o("https://api.github.com/repos/temporalio/ui-server/releases"),t=await e.json();if(!e.ok)return;let n;if(t.length>0){const{tag_name:r}=t[0];n=r.replace("v","")}return n},de={namespaces:[]};async function en(o,e=fetch){if(o.runtimeEnvironment.isCloud)return de;const t=await He(qe("namespaces"),{request:e,onError:()=>Fe.add("error","Unable to fetch namespaces")});return t!=null?t:de}function he(o,e,t){const n=o.slice();return n[9]=e[t],n}function nn(o){let e,t,n=o[2],r=[];for(let a=0;a<n.length;a+=1)r[a]=ve(he(o,n,a));const s=a=>m(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=V()},l(a){for(let i=0;i<r.length;i+=1)r[i].l(a);e=V()},m(a,i){for(let l=0;l<r.length;l+=1)r[l].m(a,i);k(a,e,i),t=!0},p(a,i){if(i&4){n=a[2];let l;for(l=0;l<n.length;l+=1){const f=he(a,n,l);r[l]?(r[l].p(f,i),c(r[l],1)):(r[l]=ve(f),r[l].c(),c(r[l],1),r[l].m(e.parentNode,e))}for(oe(),l=n.length;l<r.length;l+=1)s(l);ae()}},i(a){if(!t){for(let i=0;i<n.length;i+=1)c(r[i]);t=!0}},o(a){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)m(r[i]);t=!1},d(a){Ce(r,a),a&&_(e)}}}function tn(o){let e,t;return e=new Ie({props:{value:o[0],$$slots:{default:[sn]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.value=n[0]),r&4097&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function rn(o){let e=o[9]+"",t;return{c(){t=L(e)},l(n){t=M(n,e)},m(n,r){k(n,t,r)},p:re,d(n){n&&_(t)}}}function ve(o){let e,t;return e=new Ie({props:{value:o[9],$$slots:{default:[rn]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},p(n,r){const s={};r&4096&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function sn(o){let e;return{c(){e=L(o[0])},l(t){e=M(t,o[0])},m(t,n){k(t,e,n)},p(t,n){n&1&&we(e,t[0])},d(t){t&&_(e)}}}function on(o){let e,t,n,r;const s=[tn,nn],a=[];function i(l,f){return l[1]?0:1}return e=i(o),t=a[e]=s[e](o),{c(){t.c(),n=V()},l(l){t.l(l),n=V()},m(l,f){a[e].m(l,f),k(l,n,f),r=!0},p(l,f){t.p(l,f)},i(l){r||(c(t),r=!0)},o(l){m(t),r=!1},d(l){a[e].d(l),l&&_(n)}}}function an(o){let e,t,n,r;function s(i){o[4](i)}let a={dark:!0,id:"namespace-select",class:"namespace-select",$$slots:{default:[on]},$$scope:{ctx:o}};return o[0]!==void 0&&(a.value=o[0]),t=new Ze({props:a}),G.push(()=>Q(t,"value",s)),t.$on("change",o[3]),{c(){e=E("div"),g(t.$$.fragment),this.h()},l(i){e=T(i,"DIV",{class:!0});var l=K(e);d(t.$$.fragment,l),l.forEach(_),this.h()},h(){B(e,"class","w-full")},m(i,l){k(i,e,l),h(t,e,null),r=!0},p(i,[l]){const f={};l&4097&&(f.$$scope={dirty:l,ctx:i}),!n&&l&1&&(n=!0,f.value=i[0],x(()=>n=!1)),t.$set(f)},i(i){r||(c(t.$$.fragment,i),r=!0)},o(i){m(t.$$.fragment,i),r=!1},d(i){i&&_(e),v(t)}}}function ln(o,e,t){let n;R(o,P,b=>t(7,n=b));var r,s;const{showTemporalSystemNamespace:a}=n.stuff.settings,{isCloud:i}=n.stuff.settings.runtimeEnvironment;let l=n.params.namespace||((s=(r=n.stuff)===null||r===void 0?void 0:r.settings)===null||s===void 0?void 0:s.defaultNamespace),f=(n.stuff.namespaces||[]).map(b=>{var w;return(w=b==null?void 0:b.namespaceInfo)===null||w===void 0?void 0:w.name}).filter(b=>a||b!=="temporal-system");const u=b=>{const A=b.target.value;A&&Ye(j({namespace:A}),{replaceState:!0,keepfocus:!0,noscroll:!0})};function p(b){l=b,t(0,l)}return[l,i,f,u,p]}class Ne extends F{constructor(e){super(),H(this,e,ln,an,q,{})}}const fn=o=>({}),be=o=>({});function un(o){let e;const t=o[2].default,n=le(t,o,o[1],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2)&&ie(n,t,r,r[1],e?ue(t,r[1],s,null):fe(r[1]),null)},i(r){e||(c(n,r),e=!0)},o(r){m(n,r),e=!1},d(r){n&&n.d(r)}}}function cn(o){let e;const t=o[2].fallback,n=le(t,o,o[1],be);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2)&&ie(n,t,r,r[1],e?ue(t,r[1],s,fn):fe(r[1]),be)},i(r){e||(c(n,r),e=!0)},o(r){m(n,r),e=!1},d(r){n&&n.d(r)}}}function mn(o){let e,t,n,r;const s=[cn,un],a=[];function i(l,f){return l[0].stuff.settings.runtimeEnvironment.isCloud?0:1}return e=i(o),t=a[e]=s[e](o),{c(){t.c(),n=V()},l(l){t.l(l),n=V()},m(l,f){a[e].m(l,f),k(l,n,f),r=!0},p(l,[f]){let u=e;e=i(l),e===u?a[e].p(l,f):(oe(),m(a[u],1,1,()=>{a[u]=null}),ae(),t=a[e],t?t.p(l,f):(t=a[e]=s[e](l),t.c()),c(t,1),t.m(n.parentNode,n))},i(l){r||(c(t),r=!0)},o(l){m(t),r=!1},d(l){a[e].d(l),l&&_(n)}}}function pn(o,e,t){let n;R(o,P,a=>t(0,n=a));let{$$slots:r={},$$scope:s}=e;return o.$$set=a=>{"$$scope"in a&&t(1,s=a.$$scope)},[n,s,r]}class Ve extends F{constructor(e){super(),H(this,e,pn,mn,q,{})}}function _n(o){let e,t;return e=new Ne({}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function $n(o){let e;return{c(){e=L("Workflows")},l(t){e=M(t,"Workflows")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function gn(o){let e;return{c(){e=L("Settings")},l(t){e=M(t,"Settings")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function dn(o){let e;return{c(){e=L("Archival")},l(t){e=M(t,"Archival")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function hn(o){let e,t,n,r;return e=new J({props:{href:ee({namespace:o[1]}),$$slots:{default:[gn]},$$scope:{ctx:o}}}),n=new J({props:{href:ne({namespace:o[1]}),$$slots:{default:[dn]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),t=U(),g(n.$$.fragment)},l(s){d(e.$$.fragment,s),t=C(s),d(n.$$.fragment,s)},m(s,a){h(e,s,a),k(s,t,a),h(n,s,a),r=!0},p(s,a){const i={};a&2&&(i.href=ee({namespace:s[1]})),a&32&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const l={};a&2&&(l.href=ne({namespace:s[1]})),a&32&&(l.$$scope={dirty:a,ctx:s}),n.$set(l)},i(s){r||(c(e.$$.fragment,s),c(n.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),m(n.$$.fragment,s),r=!1},d(s){v(e,s),s&&_(t),v(n,s)}}}function vn(o){let e,t,n,r;return e=new J({props:{href:j({namespace:o[1]}),$$slots:{default:[$n]},$$scope:{ctx:o}}}),n=new Ve({props:{$$slots:{default:[hn]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),t=U(),g(n.$$.fragment)},l(s){d(e.$$.fragment,s),t=C(s),d(n.$$.fragment,s)},m(s,a){h(e,s,a),k(s,t,a),h(n,s,a),r=!0},p(s,a){const i={};a&2&&(i.href=j({namespace:s[1]})),a&32&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const l={};a&34&&(l.$$scope={dirty:a,ctx:s}),n.$set(l)},i(s){r||(c(e.$$.fragment,s),c(n.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),m(n.$$.fragment,s),r=!1},d(s){v(e,s),s&&_(t),v(n,s)}}}function bn(o){let e,t;return e=new Be({props:{user:o[0]}}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.user=n[0]),e.$set(s)},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function kn(o){let e,t;return e=new Pe({props:{href:j({namespace:o[1]}),$$slots:{user:[bn],links:[vn],logo:[_n]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.href=j({namespace:n[1]})),r&35&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function wn(o,e,t){let n,r;R(o,P,l=>t(4,r=l));var s,a;let{user:i}=e;return o.$$set=l=>{"user"in l&&t(0,i=l.user)},o.$$.update=()=>{o.$$.dirty&28&&t(1,n=r.params.namespace||(t(3,a=t(2,s=r.stuff)===null||s===void 0?void 0:s.settings)===null||a===void 0?void 0:a.defaultNamespace))},[i,n,s,a,r]}class Bn extends F{constructor(e){super(),H(this,e,wn,kn,q,{user:0})}}function In(o){let e,t;return e=new Ne({}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function Nn(o){let e;return{c(){e=L("Workflows")},l(t){e=M(t,"Workflows")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function Vn(o){let e;return{c(){e=L("Settings")},l(t){e=M(t,"Settings")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function yn(o){let e;return{c(){e=L("Archival")},l(t){e=M(t,"Archival")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function En(o){let e,t,n,r;return e=new J({props:{href:ee({namespace:o[1]}),$$slots:{default:[Vn]},$$scope:{ctx:o}}}),n=new J({props:{href:ne({namespace:o[1]}),$$slots:{default:[yn]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),t=U(),g(n.$$.fragment)},l(s){d(e.$$.fragment,s),t=C(s),d(n.$$.fragment,s)},m(s,a){h(e,s,a),k(s,t,a),h(n,s,a),r=!0},p(s,a){const i={};a&2&&(i.href=ee({namespace:s[1]})),a&32&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const l={};a&2&&(l.href=ne({namespace:s[1]})),a&32&&(l.$$scope={dirty:a,ctx:s}),n.$set(l)},i(s){r||(c(e.$$.fragment,s),c(n.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),m(n.$$.fragment,s),r=!1},d(s){v(e,s),s&&_(t),v(n,s)}}}function Tn(o){let e,t,n,r;return e=new J({props:{href:j({namespace:o[1]}),$$slots:{default:[Nn]},$$scope:{ctx:o}}}),n=new Ve({props:{$$slots:{default:[En]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),t=U(),g(n.$$.fragment)},l(s){d(e.$$.fragment,s),t=C(s),d(n.$$.fragment,s)},m(s,a){h(e,s,a),k(s,t,a),h(n,s,a),r=!0},p(s,a){const i={};a&2&&(i.href=j({namespace:s[1]})),a&32&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const l={};a&34&&(l.$$scope={dirty:a,ctx:s}),n.$set(l)},i(s){r||(c(e.$$.fragment,s),c(n.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),m(n.$$.fragment,s),r=!1},d(s){v(e,s),s&&_(t),v(n,s)}}}function An(o){let e,t;return e=new Be({props:{user:o[0]}}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.user=n[0]),e.$set(s)},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function Sn(o){let e,t;return e=new De({props:{href:j({namespace:o[1]}),$$slots:{user:[An],links:[Tn],action:[In]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){h(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.href=j({namespace:n[1]})),r&35&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(c(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){v(e,n)}}}function On(o,e,t){let n,r;R(o,P,l=>t(4,r=l));var s,a;let{user:i}=e;return o.$$set=l=>{"user"in l&&t(0,i=l.user)},o.$$.update=()=>{o.$$.dirty&28&&t(1,n=r.params.namespace||(t(3,a=t(2,s=r.stuff)===null||s===void 0?void 0:s.settings)===null||a===void 0?void 0:a.defaultNamespace))},[i,n,s,a,r]}class Un extends F{constructor(e){super(),H(this,e,On,Sn,q,{user:0})}}var te=(o=>(o[o.TemporalVersion=1]="TemporalVersion",o[o.UIVersion=2]="UIVersion",o))(te||{});const ye=(o,e)=>{if(!o||!e)return!1;const[t,n,r]=o.split(".").map(Number),[s,a,i]=e.split(".").map(Number);return t!==s?t>s:n!==a?n>a:r>i},se=Ge("closedBanners",null),Cn=o=>{var t;let e=(t=Le(se))!=null?t:[];e=[...e,o],e=e.slice(e.length-10,e.length),se.set(e)};function ke(o){let e,t,n,r,s,a,i,l,f;return{c(){e=E("section"),t=E("a"),n=L(o[2]),r=U(),s=E("button"),a=L("\u2715"),this.h()},l(u){e=T(u,"SECTION",{class:!0});var p=K(e);t=T(p,"A",{href:!0,target:!0});var b=K(t);n=M(b,o[2]),b.forEach(_),r=C(p),s=T(p,"BUTTON",{class:!0});var w=K(s);a=M(w,"\u2715"),w.forEach(_),p.forEach(_),this.h()},h(){B(t,"href",o[3]),B(t,"target","_blank"),B(s,"class","absolute top-0 right-0 mr-5 text-black-600"),B(e,"class",i=ge(`block leading-10 text-center ${o[1]}`)+" svelte-1xgik0j")},m(u,p){k(u,e,p),I(e,t),I(t,n),I(e,r),I(e,s),I(s,a),l||(f=Me(s,"click",o[7]),l=!0)},p(u,p){p&4&&we(n,u[2]),p&8&&B(t,"href",u[3]),p&2&&i!==(i=ge(`block leading-10 text-center ${u[1]}`)+" svelte-1xgik0j")&&B(e,"class",i)},d(u){u&&_(e),l=!1,f()}}}function Ln(o){let e,t=o[4]&&ke(o);return{c(){t&&t.c(),e=V()},l(n){t&&t.l(n),e=V()},m(n,r){t&&t.m(n,r),k(n,e,r)},p(n,[r]){n[4]?t?t.p(n,r):(t=ke(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:re,o:re,d(n){t&&t.d(n),n&&_(e)}}}function Mn(o,e,t){let n,r;R(o,se,p=>t(6,r=p));let{key:s}=e,{severity:a}=e,{message:i}=e,{link:l}=e,{shownBanner:f}=e;const u=()=>Cn(s);return o.$$set=p=>{"key"in p&&t(0,s=p.key),"severity"in p&&t(1,a=p.severity),"message"in p&&t(2,i=p.message),"link"in p&&t(3,l=p.link),"shownBanner"in p&&t(5,f=p.shownBanner)},o.$$.update=()=>{o.$$.dirty&65&&t(4,n=!(r!=null?r:[]).includes(s)),o.$$.dirty&48&&(n||t(5,f++,f))},[s,a,i,l,n,f,r,u]}class Ee extends F{constructor(e){super(),H(this,e,Mn,Ln,q,{key:0,severity:1,message:2,link:3,shownBanner:5})}}function Wn(o){let e,t,n;function r(a){o[6](a)}let s={key:o[2],severity:o[1],message:o[5],link:o[3]};return o[0]!==void 0&&(s.shownBanner=o[0]),e=new Ee({props:s}),G.push(()=>Q(e,"shownBanner",r)),{c(){g(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,i){h(e,a,i),n=!0},p(a,i){const l={};!t&&i&1&&(t=!0,l.shownBanner=a[0],x(()=>t=!1)),e.$set(l)},i(a){n||(c(e.$$.fragment,a),n=!0)},o(a){m(e.$$.fragment,a),n=!1},d(a){v(e,a)}}}function jn(o){let e,t,n=o[4]&&Wn(o);return{c(){n&&n.c(),e=V()},l(r){n&&n.l(r),e=V()},m(r,s){n&&n.m(r,s),k(r,e,s),t=!0},p(r,[s]){r[4]&&n.p(r,s)},i(r){t||(c(n),t=!0)},o(r){m(n),t=!1},d(r){n&&n.d(r),r&&_(e)}}}function Fn(o,e,t){let n;R(o,P,$=>t(12,n=$));var r,s,a,i,l;let{shownBanner:f}=e;const{cluster:u}=n.stuff,p={High:"high",Medium:"medium",Low:"low"},{recommended:b,current:w}=(r=u==null?void 0:u.versionInfo)!==null&&r!==void 0?r:{},A=(a=(s=u==null?void 0:u.versionInfo)===null||s===void 0?void 0:s.alerts)===null||a===void 0?void 0:a[0],S=A?p[A.severity]:p.Low,X=`server-v${w==null?void 0:w.version}`,W=`https://github.com/temporalio/temporal/releases/tag/v${(l=(i=u==null?void 0:u.versionInfo)===null||i===void 0?void 0:i.recommended)===null||l===void 0?void 0:l.version}`,D=ye(b==null?void 0:b.version,w==null?void 0:w.version),O=S===p.Low?`\u{1F4E5} Temporal v${b==null?void 0:b.version} is available`:`\u{1F4E5} ${A==null?void 0:A.message}`;function z($){f=$,t(0,f)}return o.$$set=$=>{"shownBanner"in $&&t(0,f=$.shownBanner)},[f,S,X,W,D,O,z]}class Hn extends F{constructor(e){super(),H(this,e,Fn,jn,q,{shownBanner:0})}}function qn(o){let e,t,n;function r(a){o[6](a)}let s={key:o[1],severity:Kn,message:o[2],link:o[4]};return o[0]!==void 0&&(s.shownBanner=o[0]),e=new Ee({props:s}),G.push(()=>Q(e,"shownBanner",r)),{c(){g(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,i){h(e,a,i),n=!0},p(a,i){const l={};!t&&i&1&&(t=!0,l.shownBanner=a[0],x(()=>t=!1)),e.$set(l)},i(a){n||(c(e.$$.fragment,a),n=!0)},o(a){m(e.$$.fragment,a),n=!1},d(a){v(e,a)}}}function Dn(o){let e,t,n=o[3]&&qn(o);return{c(){n&&n.c(),e=V()},l(r){n&&n.l(r),e=V()},m(r,s){n&&n.m(r,s),k(r,e,s),t=!0},p(r,[s]){r[3]&&n.p(r,s)},i(r){t||(c(n),t=!0)},o(r){m(n),t=!1},d(r){n&&n.d(r),r&&_(e)}}}const Kn="low";function Rn(o,e,t){let{shownBanner:n}=e,{uiVersionInfo:r}=e;const s=`ui-v${r==null?void 0:r.current}`,a=`\u{1F4E5} Temporal UI v${r==null?void 0:r.recommended} is available`,i=ye(r==null?void 0:r.recommended,r==null?void 0:r.current),l=`https://github.com/temporalio/ui-server/releases/tag/v${r==null?void 0:r.recommended}`;function f(u){n=u,t(0,n)}return o.$$set=u=>{"shownBanner"in u&&t(0,n=u.shownBanner),"uiVersionInfo"in u&&t(5,r=u.uiVersionInfo)},[n,s,a,i,l,r,f]}class zn extends F{constructor(e){super(),H(this,e,Rn,Dn,q,{shownBanner:0,uiVersionInfo:5})}}function Jn(o){let e,t,n,r;const s=[Xn,Pn],a=[];function i(l,f){return l[1]===te.TemporalVersion?0:l[1]===te.UIVersion?1:-1}return~(e=i(o))&&(t=a[e]=s[e](o)),{c(){t&&t.c(),n=V()},l(l){t&&t.l(l),n=V()},m(l,f){~e&&a[e].m(l,f),k(l,n,f),r=!0},p(l,f){let u=e;e=i(l),e===u?~e&&a[e].p(l,f):(t&&(oe(),m(a[u],1,1,()=>{a[u]=null}),ae()),~e?(t=a[e],t?t.p(l,f):(t=a[e]=s[e](l),t.c()),c(t,1),t.m(n.parentNode,n)):t=null)},i(l){r||(c(t),r=!0)},o(l){m(t),r=!1},d(l){~e&&a[e].d(l),l&&_(n)}}}function Pn(o){let e,t,n;function r(a){o[4](a)}let s={uiVersionInfo:o[0]};return o[1]!==void 0&&(s.shownBanner=o[1]),e=new zn({props:s}),G.push(()=>Q(e,"shownBanner",r)),{c(){g(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,i){h(e,a,i),n=!0},p(a,i){const l={};i&1&&(l.uiVersionInfo=a[0]),!t&&i&2&&(t=!0,l.shownBanner=a[1],x(()=>t=!1)),e.$set(l)},i(a){n||(c(e.$$.fragment,a),n=!0)},o(a){m(e.$$.fragment,a),n=!1},d(a){v(e,a)}}}function Xn(o){let e,t,n;function r(a){o[3](a)}let s={};return o[1]!==void 0&&(s.shownBanner=o[1]),e=new Hn({props:s}),G.push(()=>Q(e,"shownBanner",r)),{c(){g(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,i){h(e,a,i),n=!0},p(a,i){const l={};!t&&i&2&&(t=!0,l.shownBanner=a[1],x(()=>t=!1)),e.$set(l)},i(a){n||(c(e.$$.fragment,a),n=!0)},o(a){m(e.$$.fragment,a),n=!1},d(a){v(e,a)}}}function Yn(o){let e,t,n=o[2]&&Jn(o);return{c(){n&&n.c(),e=V()},l(r){n&&n.l(r),e=V()},m(r,s){n&&n.m(r,s),k(r,e,s),t=!0},p(r,[s]){r[2]&&n.p(r,s)},i(r){t||(c(n),t=!0)},o(r){m(n),t=!1},d(r){n&&n.d(r),r&&_(e)}}}function Zn(o,e,t){let n;R(o,P,f=>t(5,n=f));let{uiVersionInfo:r}=e,s=te.TemporalVersion;const a=n.stuff.settings.notifyOnNewVersion;function i(f){s=f,t(1,s)}function l(f){s=f,t(1,s)}return o.$$set=f=>{"uiVersionInfo"in f&&t(0,r=f.uiVersionInfo)},[r,s,a,i,l]}class Gn extends F{constructor(e){super(),H(this,e,Zn,Yn,q,{uiVersionInfo:0})}}function Qn(o){let e;const t=o[2].default,n=le(t,o,o[3],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8)&&ie(n,t,r,r[3],e?ue(t,r[3],s,null):fe(r[3]),null)},i(r){e||(c(n,r),e=!0)},o(r){m(n,r),e=!1},d(r){n&&n.d(r)}}}function xn(o){let e,t,n,r,s,a,i,l,f,u,p,b,w,A,S,X,W,D,O,z;return f=new ze({}),p=new Gn({props:{uiVersionInfo:o[1]}}),w=new Bn({props:{user:o[0]}}),S=new Un({props:{user:o[0]}}),O=new Je({props:{onError:et,$$slots:{default:[Qn]},$$scope:{ctx:o}}}),{c(){e=E("link"),t=E("link"),n=E("meta"),r=E("meta"),s=E("meta"),a=E("meta"),i=U(),l=E("main"),g(f.$$.fragment),u=U(),g(p.$$.fragment),b=U(),g(w.$$.fragment),A=U(),g(S.$$.fragment),X=U(),W=E("section"),D=E("div"),g(O.$$.fragment),this.h()},l($){const N=We('[data-svelte="svelte-15ltrtv"]',document.head);e=T(N,"LINK",{rel:!0,href:!0}),t=T(N,"LINK",{rel:!0,href:!0}),n=T(N,"META",{property:!0,content:!0}),r=T(N,"META",{property:!0,content:!0}),s=T(N,"META",{property:!0,content:!0}),a=T(N,"META",{property:!0,content:!0}),N.forEach(_),i=C($),l=T($,"MAIN",{class:!0});var y=K(l);d(f.$$.fragment,y),u=C(y),d(p.$$.fragment,y),b=C(y),d(w.$$.fragment,y),A=C(y),d(S.$$.fragment,y),X=C(y),W=T(y,"SECTION",{id:!0,class:!0});var Y=K(W);D=T(Y,"DIV",{class:!0});var Z=K(D);d(O.$$.fragment,Z),Z.forEach(_),Y.forEach(_),y.forEach(_),this.h()},h(){document.title="Temporal",B(e,"rel","manifest"),B(e,"href","/site.webmanifest"),B(t,"rel","apple-touch-icon"),B(t,"href","/apple-touch-icon.png"),B(n,"property","og:title"),B(n,"content","Temporal"),B(r,"property","og:type"),B(r,"content","website"),B(s,"property","og:url"),B(s,"content","https://temporal.io"),B(a,"property","og:image"),B(a,"content","/banner.png"),B(D,"class","flex flex-col h-full gap-4 mt-12 xl:mt-0"),B(W,"id","content"),B(W,"class","h-full mx-10 mb-10 mt-8"),B(l,"class","flex flex-col h-screen")},m($,N){I(document.head,e),I(document.head,t),I(document.head,n),I(document.head,r),I(document.head,s),I(document.head,a),k($,i,N),k($,l,N),h(f,l,null),I(l,u),h(p,l,null),I(l,b),h(w,l,null),I(l,A),h(S,l,null),I(l,X),I(l,W),I(W,D),h(O,D,null),z=!0},p($,[N]){const y={};N&2&&(y.uiVersionInfo=$[1]),p.$set(y);const Y={};N&1&&(Y.user=$[0]),w.$set(Y);const Z={};N&1&&(Z.user=$[0]),S.$set(Z);const ce={};N&8&&(ce.$$scope={dirty:N,ctx:$}),O.$set(ce)},i($){z||(c(f.$$.fragment,$),c(p.$$.fragment,$),c(w.$$.fragment,$),c(S.$$.fragment,$),c(O.$$.fragment,$),z=!0)},o($){m(f.$$.fragment,$),m(p.$$.fragment,$),m(w.$$.fragment,$),m(S.$$.fragment,$),m(O.$$.fragment,$),z=!1},d($){_(e),_(t),_(n),_(r),_(s),_(a),$&&_(i),$&&_(l),v(f),v(p),v(w),v(S),v(O)}}}const Et=async function({url:o,fetch:e}){const t=await Xe({url:o},e),n=await Ke(e);if(!Qe(t,n))return{status:302,redirect:"/login"};const r=await en(t,e),s=je({namespaces:r==null?void 0:r.namespaces,settings:t}),a=await Re(t,e),i={current:t.version,recommended:t.notifyOnNewVersion?await xe(e):void 0};return{props:{user:n,uiVersionInfo:i},stuff:{namespaces:r==null?void 0:r.namespaces,settings:$e(_e({},t),{defaultNamespace:s}),cluster:a}}},et=()=>{};function nt(o,e,t){let{$$slots:n={},$$scope:r}=e,{user:s}=e,{uiVersionInfo:a}=e;return o.$$set=i=>{"user"in i&&t(0,s=i.user),"uiVersionInfo"in i&&t(1,a=i.uiVersionInfo),"$$scope"in i&&t(3,r=i.$$scope)},[s,a,n,r]}class Tt extends F{constructor(e){super(),H(this,e,nt,xn,q,{user:0,uiVersionInfo:1})}}export{Tt as default,Et as load};
