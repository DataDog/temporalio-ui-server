import{S as M,i as O,s as S,x as C,y as E,z as I,f as h,t as v,C as k,O as B,a as D,l as _,r as J,c as V,m as g,n as L,u as K,h as u,p as f,b as T,N as d,al as U,J as W,K as j,L as x,M as G}from"../../chunks/index-e693a59e.js";import{g as H}from"../../chunks/notifications-b26a159d.js";import{f as P}from"../../chunks/settings-service-2980bd8f.js";import{N as Q,a as R,b as X,E as Y}from"../../chunks/error-boundary-72c9a97b.js";/* empty css                       */import{p as Z}from"../../chunks/stores-e2727ac0.js";import{I as tt}from"../../chunks/icon-9e3c01e3.js";import{T as et}from"../../chunks/tooltip-793f2f21.js";import{n as rt}from"../../chunks/nav-open-112fcb57.js";import{r as nt,f as ot}from"../../chunks/route-for-06e4a074.js";import"../../chunks/persist-store-1e827ec5.js";import"../../chunks/index-8f8207c2.js";import"../../chunks/parse-with-big-int-561ccb8b.js";import"../../chunks/settings-6e0607c4.js";import"../../chunks/route-for-api-74cb0b13.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/index-f1f0776f.js";import"../../chunks/error-a6ec6fb4.js";import"../../chunks/navigation-fbe70647.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/link-b4f922ac.js";import"../../chunks/copyable-d2a97c7b.js";import"../../chunks/copy-to-clipboard-8cedfbc8.js";function st(a){let e,n,t;return n=new tt({props:{isCloud:a[0],name:"download"}}),{c(){e=_("div"),C(n.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var o=L(e);E(n.$$.fragment,o),o.forEach(u),this.h()},h(){f(e,"class","nav-icon svelte-1ul2a5d")},m(r,o){T(r,e,o),I(n,e,null),t=!0},p(r,o){const s={};o&1&&(s.isCloud=r[0]),n.$set(s)},i(r){t||(h(n.$$.fragment,r),t=!0)},o(r){v(n.$$.fragment,r),t=!1},d(r){r&&u(e),k(n)}}}function at(a){let e,n,t,r,o;return e=new et({props:{right:!0,hide:a[2],text:"Import",$$slots:{default:[st]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment),n=D(),t=_("div"),r=J("Import"),this.h()},l(s){E(e.$$.fragment,s),n=V(s),t=g(s,"DIV",{class:!0});var i=L(t);r=K(i,"Import"),i.forEach(u),this.h()},h(){f(t,"class","nav-title svelte-1ul2a5d")},m(s,i){I(e,s,i),T(s,n,i),T(s,t,i),d(t,r),o=!0},p(s,i){const m={};i&4&&(m.hide=s[2]),i&9&&(m.$$scope={dirty:i,ctx:s}),e.$set(m)},i(s){o||(h(e.$$.fragment,s),o=!0)},o(s){v(e.$$.fragment,s),o=!1},d(s){k(e,s),s&&u(n),s&&u(t)}}}function it(a){let e,n;return e=new R({props:{link:a[1].import,isCloud:a[0],$$slots:{default:[at]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,r){const o={};r&2&&(o.link=t[1].import),r&1&&(o.isCloud=t[0]),r&13&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function lt(a){let e,n;return e=new Q({props:{isCloud:a[0],linkList:a[1],$$slots:{top:[it]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,[r]){const o={};r&1&&(o.isCloud=t[0]),r&2&&(o.linkList=t[1]),r&15&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ut(a,e,n){let t;B(a,rt,s=>n(2,t=s));let{isCloud:r}=e,{linkList:o}=e;return a.$$set=s=>{"isCloud"in s&&n(0,r=s.isCloud),"linkList"in s&&n(1,o=s.linkList)},[r,o,t]}class ft extends M{constructor(e){super(),O(this,e,ut,lt,S,{isCloud:0,linkList:1})}}function mt(a){let e,n;return e=new ft({props:{linkList:a[0],isCloud:a[1]}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){I(e,t,r),n=!0},p(t,[r]){const o={};r&1&&(o.linkList=t[0]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ct(a,e,n){let t,r,o;B(a,Z,p=>n(5,o=p));var s,i;const{isCloud:m}=o.stuff.settings.runtimeEnvironment;return a.$$.update=()=>{a.$$.dirty&44&&n(4,t=n(3,i=n(2,s=o.stuff)===null||s===void 0?void 0:s.settings)===null||i===void 0?void 0:i.defaultNamespace),a.$$.dirty&16&&n(0,r={home:nt({namespace:t}),import:ot({importType:"events"})})},[r,m,s,i,t,o]}class pt extends M{constructor(e){super(),O(this,e,ct,mt,S,{})}}function $t(a){let e;const n=a[0].default,t=W(n,a,a[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,o){t&&t.m(r,o),e=!0},p(r,o){t&&t.p&&(!e||o&2)&&j(t,n,r,r[1],e?G(n,r[1],o,null):x(r[1]),null)},i(r){e||(h(t,r),e=!0)},o(r){v(t,r),e=!1},d(r){t&&t.d(r)}}}function dt(a){let e,n,t,r,o,s,i,m,p,A,y,b,w,N;return s=new X({}),p=new pt({}),w=new Y({props:{onError:_t,$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){e=_("meta"),n=_("meta"),t=_("meta"),r=D(),o=_("div"),C(s.$$.fragment),i=D(),m=_("div"),C(p.$$.fragment),A=D(),y=_("section"),b=_("div"),C(w.$$.fragment),this.h()},l(l){const c=U("svelte-xqpqe2",document.head);e=g(c,"META",{property:!0,content:!0}),n=g(c,"META",{property:!0,content:!0}),t=g(c,"META",{property:!0,content:!0}),c.forEach(u),r=V(l),o=g(l,"DIV",{class:!0});var $=L(o);E(s.$$.fragment,$),i=V($),m=g($,"DIV",{class:!0});var q=L(m);E(p.$$.fragment,q),q.forEach(u),A=V($),y=g($,"SECTION",{id:!0,class:!0});var z=L(y);b=g(z,"DIV",{class:!0});var F=L(b);E(w.$$.fragment,F),F.forEach(u),z.forEach(u),$.forEach(u),this.h()},h(){document.title="Temporal",f(e,"property","og:title"),f(e,"content","Temporal"),f(n,"property","og:type"),f(n,"content","website"),f(t,"property","og:url"),f(t,"content","https://temporal.io"),f(m,"class","sticky top-0 z-20 h-screen w-auto"),f(b,"class","z-10 flex h-full flex-col gap-4 px-10 pb-10 pt-8"),f(y,"id","content"),f(y,"class","h-screen w-max flex-auto overflow-auto"),f(o,"class","flex h-screen w-screen flex-row")},m(l,c){d(document.head,e),d(document.head,n),d(document.head,t),T(l,r,c),T(l,o,c),I(s,o,null),d(o,i),d(o,m),I(p,m,null),d(o,A),d(o,y),d(y,b),I(w,b,null),N=!0},p(l,[c]){const $={};c&2&&($.$$scope={dirty:c,ctx:l}),w.$set($)},i(l){N||(h(s.$$.fragment,l),h(p.$$.fragment,l),h(w.$$.fragment,l),N=!0)},o(l){v(s.$$.fragment,l),v(p.$$.fragment,l),v(w.$$.fragment,l),N=!1},d(l){u(e),u(n),u(t),l&&u(r),l&&u(o),k(s),k(p),k(w)}}}const Kt=async function({fetch:a}){const e=await P(a);return{props:{user:H()},stuff:{settings:e}}},_t=()=>{};function gt(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(1,r=o.$$scope)},[t,r]}class Ut extends M{constructor(e){super(),O(this,e,gt,dt,S,{})}}export{Ut as default,Kt as load};
