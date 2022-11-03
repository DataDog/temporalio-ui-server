import{S as Q,i as z,s as M,l as W,r as S,a as N,x as A,m as q,n as D,u as C,h as _,c as I,y as T,p as w,b as g,N as y,z as P,Z as Y,U as Z,v as me,f as v,t as k,C as F,O as H,g as V,d as j,as as ce,a0 as pe,a8 as _e,a9 as $e,e as R,a1 as ue,ac as he,ao as de,F as G}from"../../../../chunks/index-e693a59e.js";import{a as be}from"../../../../chunks/namespaces-service-fcd012e3.js";import{c as ge}from"../../../../chunks/workflow-service-c3d74aac.js";import{j as ve,S as ke,W as we,a as ye}from"../../../../chunks/search-19f69492.js";import{p as J}from"../../../../chunks/stores-e2727ac0.js";import{g as x}from"../../../../chunks/navigation-fbe70647.js";import{o as ee}from"../../../../chunks/format-time-d031c2bc.js";import{S as Ee,a as B}from"../../../../chunks/simple-select-36926c0e.js";import{u as Ae,F as te,P as Te}from"../../../../chunks/pagination-9214a1a7.js";import{I as Pe}from"../../../../chunks/icon-9e3c01e3.js";import{t as L}from"../../../../chunks/time-format-3020d225.js";import{E as Fe}from"../../../../chunks/empty-state-435a3ca7.js";import{C as K}from"../../../../chunks/code-block-babfbe33.js";import{P as Se}from"../../../../chunks/page-title-5657446d.js";import"../../../../chunks/notifications-b26a159d.js";import"../../../../chunks/persist-store-1e827ec5.js";import"../../../../chunks/index-8f8207c2.js";import"../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../chunks/paginated-0934bfc2.js";import"../../../../chunks/route-for-api-74cb0b13.js";import"../../../../chunks/route-for-06e4a074.js";import"../../../../chunks/is-network-error-5f9e2367.js";import"../../../../chunks/settings-6e0607c4.js";import"../../../../chunks/simplify-attributes-055c76f2.js";import"../../../../chunks/format-date-c1755997.js";import"../../../../chunks/table-row-ef80b7ce.js";import"../../../../chunks/is-44021919.js";import"../../../../chunks/workflow-status-51889fe5.js";import"../../../../chunks/copy-to-clipboard-8cedfbc8.js";import"../../../../chunks/button-475d7911.js";import"../../../../chunks/badge-dd354bc8.js";import"../../../../chunks/singletons-eca981c1.js";function Ce(i){let e,a,t,l,o,n,r,s,c,f,p;return n=new Pe({props:{name:"search",class:"flex items-center text-gray-700"}}),{c(){e=W("div"),a=W("label"),t=S(i[0]),l=N(),o=W("span"),A(n.$$.fragment),r=N(),s=W("input"),this.h()},l(h){e=q(h,"DIV",{class:!0});var u=D(e);a=q(u,"LABEL",{for:!0,class:!0});var b=D(a);t=C(b,i[0]),b.forEach(_),l=I(u),o=q(u,"SPAN",{class:!0});var m=D(o);T(n.$$.fragment,m),m.forEach(_),r=I(u),s=q(u,"INPUT",{class:!0,placeholder:!0,id:!0}),u.forEach(_),this.h()},h(){w(a,"for",i[2]),w(a,"class","hidden"),w(o,"class","svelte-fxm0nn"),w(s,"class","block w-full focus:outline-none"),w(s,"placeholder",i[0]),w(s,"id",i[2]),w(e,"class","input-container focus-within:border-blue-700 svelte-fxm0nn")},m(h,u){g(h,e,u),y(e,a),y(a,t),y(e,l),y(e,o),P(n,o,null),y(e,r),y(e,s),Y(s,i[1]),c=!0,f||(p=Z(s,"input",i[6]),f=!0)},p(h,[u]){(!c||u&1)&&me(t,h[0]),(!c||u&1)&&w(s,"placeholder",h[0]),u&2&&s.value!==h[1]&&Y(s,h[1])},i(h){c||(v(n.$$.fragment,h),c=!0)},o(h){k(n.$$.fragment,h),c=!1},d(h){h&&_(e),F(n),f=!1,p()}}}function Ne(i,e,a){let t;H(i,J,p=>a(5,t=p));let{parameter:l}=e,{name:o}=e,{value:n}=e,r=l&&t.url.searchParams.get(l)||n;const s=`${l||o}-filter`,c=ve(Ae,300);function f(){r=this.value,a(1,r)}return i.$$set=p=>{"parameter"in p&&a(3,l=p.parameter),"name"in p&&a(0,o=p.name),"value"in p&&a(4,n=p.value)},i.$$.update=()=>{i.$$.dirty&42&&c({parameter:l,value:r,url:t.url})},[o,r,s,l,n,t,f]}class le extends Q{constructor(e){super(),z(this,e,Ne,Ce,M,{parameter:3,name:0,value:4})}}function re(i,e,a){const t=i.slice();return t[7]=e[a][0],t[8]=e[a][1],t}function ae(i,e,a){const t=i.slice();return t[8]=e[a],t}function Ie(i){let e,a,t,l,o;return{c(){e=W("a"),a=S("Advanced Search"),this.h()},l(n){e=q(n,"A",{href:!0,class:!0});var r=D(e);a=C(r,"Advanced Search"),r.forEach(_),this.h()},h(){w(e,"href",t=i[1].url.pathname+"?query"),w(e,"class","text-blue-700")},m(n,r){g(n,e,r),y(e,a),l||(o=Z(e,"click",ce(i[5]("advanced"))),l=!0)},p(n,r){r&2&&t!==(t=n[1].url.pathname+"?query")&&w(e,"href",t)},d(n){n&&_(e),l=!1,o()}}}function We(i){let e,a,t,l,o;return{c(){e=W("a"),a=S("Basic Search"),this.h()},l(n){e=q(n,"A",{href:!0,class:!0});var r=D(e);a=C(r,"Basic Search"),r.forEach(_),this.h()},h(){w(e,"href",t=i[1].url.pathname),w(e,"class","text-blue-700")},m(n,r){g(n,e,r),y(e,a),l||(o=Z(e,"click",ce(i[5]("basic"))),l=!0)},p(n,r){r&2&&t!==(t=n[1].url.pathname)&&w(e,"href",t)},d(n){n&&_(e),l=!1,o()}}}function qe(i){let e,a,t,l,o,n,r,s,c,f,p,h;a=new le({props:{parameter:"workflow-id",name:"Workflow ID",value:ze}}),l=new le({props:{parameter:"workflow-type",name:"Workflow Type",value:Me}}),n=new te({props:{label:"Time Range",parameter:"time-range",value:"24 hours",$$slots:{default:[Re]},$$scope:{ctx:i}}}),s=new te({props:{label:"Workflow Status",parameter:"status",value:null,$$slots:{default:[je]},$$scope:{ctx:i}}});function u(m){i[6](m)}let b={id:"filter-by-relative-time",$$slots:{default:[Le]},$$scope:{ctx:i}};return i[2]!==void 0&&(b.value=i[2]),f=new Ee({props:b}),pe.push(()=>_e(f,"value",u)),{c(){e=W("div"),A(a.$$.fragment),t=N(),A(l.$$.fragment),o=N(),A(n.$$.fragment),r=N(),A(s.$$.fragment),c=N(),A(f.$$.fragment),this.h()},l(m){e=q(m,"DIV",{class:!0});var $=D(e);T(a.$$.fragment,$),t=I($),T(l.$$.fragment,$),o=I($),T(n.$$.fragment,$),r=I($),T(s.$$.fragment,$),c=I($),T(f.$$.fragment,$),$.forEach(_),this.h()},h(){w(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5")},m(m,$){g(m,e,$),P(a,e,null),y(e,t),P(l,e,null),y(e,o),P(n,e,null),y(e,r),P(s,e,null),y(e,c),P(f,e,null),h=!0},p(m,$){const d={};$&8192&&(d.$$scope={dirty:$,ctx:m}),n.$set(d);const E={};$&8192&&(E.$$scope={dirty:$,ctx:m}),s.$set(E);const O={};$&8192&&(O.$$scope={dirty:$,ctx:m}),!p&&$&4&&(p=!0,O.value=m[2],$e(()=>p=!1)),f.$set(O)},i(m){h||(v(a.$$.fragment,m),v(l.$$.fragment,m),v(n.$$.fragment,m),v(s.$$.fragment,m),v(f.$$.fragment,m),h=!0)},o(m){k(a.$$.fragment,m),k(l.$$.fragment,m),k(n.$$.fragment,m),k(s.$$.fragment,m),k(f.$$.fragment,m),h=!1},d(m){m&&_(e),F(a),F(l),F(n),F(s),F(f)}}}function De(i){let e,a;return e=new ke({props:{icon:!0,placeholder:"Query\u2026",value:i[1].url.searchParams.get("query")}}),e.$on("submit",i[4]),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),a=!0},p(t,l){const o={};l&2&&(o.value=t[1].url.searchParams.get("query")),e.$set(o)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function Oe(i){let e=i[8]+"",a;return{c(){a=S(e)},l(t){a=C(t,e)},m(t,l){g(t,a,l)},p:G,d(t){t&&_(a)}}}function ne(i){let e,a;return e=new B({props:{value:i[8],$$slots:{default:[Oe]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),a=!0},p(t,l){const o={};l&8192&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function Re(i){let e,a,t=ee,l=[];for(let n=0;n<t.length;n+=1)l[n]=ne(ae(i,t,n));const o=n=>k(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=R()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=R()},m(n,r){for(let s=0;s<l.length;s+=1)l[s].m(n,r);g(n,e,r),a=!0},p(n,r){if(r&0){t=ee;let s;for(s=0;s<t.length;s+=1){const c=ae(n,t,s);l[s]?(l[s].p(c,r),v(l[s],1)):(l[s]=ne(c),l[s].c(),v(l[s],1),l[s].m(e.parentNode,e))}for(V(),s=t.length;s<l.length;s+=1)o(s);j()}},i(n){if(!a){for(let r=0;r<t.length;r+=1)v(l[r]);a=!0}},o(n){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)k(l[r]);a=!1},d(n){ue(l,n),n&&_(e)}}}function Ve(i){let e=i[7]+"",a;return{c(){a=S(e)},l(t){a=C(t,e)},m(t,l){g(t,a,l)},p:G,d(t){t&&_(a)}}}function se(i,e){let a,t,l;return t=new B({props:{value:e[8],$$slots:{default:[Ve]},$$scope:{ctx:e}}}),{key:i,first:null,c(){a=R(),A(t.$$.fragment),this.h()},l(o){a=R(),T(t.$$.fragment,o),this.h()},h(){this.first=a},m(o,n){g(o,a,n),P(t,o,n),l=!0},p(o,n){e=o;const r={};n&8192&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(o){l||(v(t.$$.fragment,o),l=!0)},o(o){k(t.$$.fragment,o),l=!1},d(o){o&&_(a),F(t,o)}}}function je(i){let e=[],a=new Map,t,l,o=Object.entries(i[3]);const n=r=>r[7];for(let r=0;r<o.length;r+=1){let s=re(i,o,r),c=n(s);a.set(c,e[r]=se(c,s))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=R()},l(r){for(let s=0;s<e.length;s+=1)e[s].l(r);t=R()},m(r,s){for(let c=0;c<e.length;c+=1)e[c].m(r,s);g(r,t,s),l=!0},p(r,s){s&8&&(o=Object.entries(r[3]),V(),e=he(e,s,n,1,r,o,a,t.parentNode,de,se,t,re),j())},i(r){if(!l){for(let s=0;s<o.length;s+=1)v(e[s]);l=!0}},o(r){for(let s=0;s<e.length;s+=1)k(e[s]);l=!1},d(r){for(let s=0;s<e.length;s+=1)e[s].d(r);r&&_(t)}}}function Be(i){let e;return{c(){e=S("Relative")},l(a){e=C(a,"Relative")},m(a,t){g(a,e,t)},d(a){a&&_(e)}}}function He(i){let e;return{c(){e=S("UTC")},l(a){e=C(a,"UTC")},m(a,t){g(a,e,t)},d(a){a&&_(e)}}}function Ue(i){let e;return{c(){e=S("Local")},l(a){e=C(a,"Local")},m(a,t){g(a,e,t)},d(a){a&&_(e)}}}function Le(i){let e,a,t,l,o,n;return e=new B({props:{value:"relative",$$slots:{default:[Be]},$$scope:{ctx:i}}}),t=new B({props:{value:"UTC",$$slots:{default:[He]},$$scope:{ctx:i}}}),o=new B({props:{value:"local",$$slots:{default:[Ue]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment),a=N(),A(t.$$.fragment),l=N(),A(o.$$.fragment)},l(r){T(e.$$.fragment,r),a=I(r),T(t.$$.fragment,r),l=I(r),T(o.$$.fragment,r)},m(r,s){P(e,r,s),g(r,a,s),P(t,r,s),g(r,l,s),P(o,r,s),n=!0},p(r,s){const c={};s&8192&&(c.$$scope={dirty:s,ctx:r}),e.$set(c);const f={};s&8192&&(f.$$scope={dirty:s,ctx:r}),t.$set(f);const p={};s&8192&&(p.$$scope={dirty:s,ctx:r}),o.$set(p)},i(r){n||(v(e.$$.fragment,r),v(t.$$.fragment,r),v(o.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),k(t.$$.fragment,r),k(o.$$.fragment,r),n=!1},d(r){F(e,r),r&&_(a),F(t,r),r&&_(l),F(o,r)}}}function Qe(i){let e,a,t,l,o,n;function r(u,b){return u[0]?We:Ie}let s=r(i),c=s(i);const f=[De,qe],p=[];function h(u,b){return u[0]?0:1}return l=h(i),o=p[l]=f[l](i),{c(){e=W("section"),a=W("p"),c.c(),t=N(),o.c(),this.h()},l(u){e=q(u,"SECTION",{class:!0});var b=D(e);a=q(b,"P",{class:!0});var m=D(a);c.l(m),m.forEach(_),t=I(b),o.l(b),b.forEach(_),this.h()},h(){w(a,"class","text-right text-xs"),w(e,"class","flex flex-col gap-2")},m(u,b){g(u,e,b),y(e,a),c.m(a,null),y(e,t),p[l].m(e,null),n=!0},p(u,[b]){s===(s=r(u))&&c?c.p(u,b):(c.d(1),c=s(u),c&&(c.c(),c.m(a,null)));let m=l;l=h(u),l===m?p[l].p(u,b):(V(),k(p[m],1,1,()=>{p[m]=null}),j(),o=p[l],o?o.p(u,b):(o=p[l]=f[l](u),o.c()),v(o,1),o.m(e,null))},i(u){n||(v(o),n=!0)},o(u){k(o),n=!1},d(u){u&&_(e),c.d(),p[l].d()}}}let ze="",Me="";function Ze(i,e,a){let t,l;H(i,J,f=>a(1,t=f)),H(i,L,f=>a(2,l=f));const o={All:null,"Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"};let n=t.url.searchParams.has("query");const r=f=>{const h=new FormData(f.target).get("query");t.url.searchParams.set("query",String(h)),x(t.url.toString())},s=f=>p=>{const h=p.target;a(0,n=f==="advanced"),n||t.url.searchParams.delete("query"),x(h.href)};function c(f){l=f,L.set(l)}return[n,t,l,o,r,s,c]}class Ge extends Q{constructor(e){super(),z(this,e,Ze,Qe,M,{})}}function oe(i,e,a){const t=i.slice();return t[7]=e[a],t}function Je(i){let e,a,t,l,o,n,r,s,c,f,p,h,u,b,m;r=new K({props:{content:`tctl --namespace ${i[0]} namespace update --has enabled`,language:"text",inline:!0}});let $=!i[3]&&ie(i);return{c(){e=W("h2"),a=S("This namespace is currently not enabled for archival."),t=N(),l=W("p"),o=S("Run this command to enable Archival for Event Histories:"),n=N(),A(r.$$.fragment),s=N(),$&&$.c(),c=N(),f=W("p"),p=S("For more details, please check out "),h=W("a"),u=S("Archival documentation"),b=S("."),this.h()},l(d){e=q(d,"H2",{class:!0,"data-cy":!0});var E=D(e);a=C(E,"This namespace is currently not enabled for archival."),E.forEach(_),t=I(d),l=q(d,"P",{});var O=D(l);o=C(O,"Run this command to enable Archival for Event Histories:"),O.forEach(_),n=I(d),T(r.$$.fragment,d),s=I(d),$&&$.l(d),c=I(d),f=q(d,"P",{});var U=D(f);p=C(U,"For more details, please check out "),h=q(U,"A",{class:!0,href:!0,target:!0});var X=D(h);u=C(X,"Archival documentation"),X.forEach(_),b=C(U,"."),U.forEach(_),this.h()},h(){w(e,"class","text-2xl"),w(e,"data-cy","archived-disabled-title"),w(h,"class","text-blue-700 underline"),w(h,"href","https://docs.temporal.io/server/archive-data/"),w(h,"target","_blank")},m(d,E){g(d,e,E),y(e,a),g(d,t,E),g(d,l,E),y(l,o),g(d,n,E),P(r,d,E),g(d,s,E),$&&$.m(d,E),g(d,c,E),g(d,f,E),y(f,p),y(f,h),y(h,u),y(f,b),m=!0},p(d,E){const O={};E&1&&(O.content=`tctl --namespace ${d[0]} namespace update --has enabled`),r.$set(O),d[3]?$&&(V(),k($,1,1,()=>{$=null}),j()):$?($.p(d,E),E&8&&v($,1)):($=ie(d),$.c(),v($,1),$.m(c.parentNode,c))},i(d){m||(v(r.$$.fragment,d),v($),m=!0)},o(d){k(r.$$.fragment,d),k($),m=!1},d(d){d&&_(e),d&&_(t),d&&_(l),d&&_(n),F(r,d),d&&_(s),$&&$.d(d),d&&_(c),d&&_(f)}}}function Ke(i){let e,a,t,l,o,n,r,s,c,f,p,h,u,b;return r=new K({props:{content:`tctl --namespace ${i[0]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=W("h2"),a=S(`This namespace is currently enabled for archival but visibility is not
    enabled.`),t=N(),l=W("p"),o=S("To enable Visibility Archival:"),n=N(),A(r.$$.fragment),s=N(),c=W("p"),f=S("For more details, please check out "),p=W("a"),h=S("Archival documentation"),u=S("."),this.h()},l(m){e=q(m,"H2",{class:!0,"data-cy":!0});var $=D(e);a=C($,`This namespace is currently enabled for archival but visibility is not
    enabled.`),$.forEach(_),t=I(m),l=q(m,"P",{});var d=D(l);o=C(d,"To enable Visibility Archival:"),d.forEach(_),n=I(m),T(r.$$.fragment,m),s=I(m),c=q(m,"P",{});var E=D(c);f=C(E,"For more details, please check out "),p=q(E,"A",{class:!0,href:!0,target:!0});var O=D(p);h=C(O,"Archival documentation"),O.forEach(_),u=C(E,"."),E.forEach(_),this.h()},h(){w(e,"class","text-2xl"),w(e,"data-cy","visibility-disabled-title"),w(p,"class","text-blue-700 underline"),w(p,"href","https://docs.temporal.io/server/archive-data/"),w(p,"target","_blank")},m(m,$){g(m,e,$),y(e,a),g(m,t,$),g(m,l,$),y(l,o),g(m,n,$),P(r,m,$),g(m,s,$),g(m,c,$),y(c,f),y(c,p),y(p,h),y(c,u),b=!0},p(m,$){const d={};$&1&&(d.content=`tctl --namespace ${m[0]} namespace update -vas enabled`),r.$set(d)},i(m){b||(v(r.$$.fragment,m),b=!0)},o(m){k(r.$$.fragment,m),b=!1},d(m){m&&_(e),m&&_(t),m&&_(l),m&&_(n),F(r,m),m&&_(s),m&&_(c)}}}function Xe(i){let e,a,t,l,o,n,r,s,c;l=new Ge({});const f=[xe,Ye],p=[];function h(u,b){var m;return(m=u[1])!=null&&m.length?0:1}return n=h(i),r=p[n]=f[n](i),{c(){e=W("h2"),a=S("Archived Workflows"),t=N(),A(l.$$.fragment),o=N(),r.c(),s=R(),this.h()},l(u){e=q(u,"H2",{class:!0,"data-cy":!0});var b=D(e);a=C(b,"Archived Workflows"),b.forEach(_),t=I(u),T(l.$$.fragment,u),o=I(u),r.l(u),s=R(),this.h()},h(){w(e,"class","text-2xl"),w(e,"data-cy","archived-enabled-title")},m(u,b){g(u,e,b),y(e,a),g(u,t,b),P(l,u,b),g(u,o,b),p[n].m(u,b),g(u,s,b),c=!0},p(u,b){let m=n;n=h(u),n===m?p[n].p(u,b):(V(),k(p[m],1,1,()=>{p[m]=null}),j(),r=p[n],r?r.p(u,b):(r=p[n]=f[n](u),r.c()),v(r,1),r.m(s.parentNode,s))},i(u){c||(v(l.$$.fragment,u),v(r),c=!0)},o(u){k(l.$$.fragment,u),k(r),c=!1},d(u){u&&_(e),u&&_(t),F(l,u),u&&_(o),p[n].d(u),u&&_(s)}}}function ie(i){let e,a,t,l,o;return l=new K({props:{content:`tctl --namespace ${i[0]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=W("p"),a=S("To enable Visibility Archival:"),t=N(),A(l.$$.fragment)},l(n){e=q(n,"P",{});var r=D(e);a=C(r,"To enable Visibility Archival:"),r.forEach(_),t=I(n),T(l.$$.fragment,n)},m(n,r){g(n,e,r),y(e,a),g(n,t,r),P(l,n,r),o=!0},p(n,r){const s={};r&1&&(s.content=`tctl --namespace ${n[0]} namespace update -vas enabled`),l.$set(s)},i(n){o||(v(l.$$.fragment,n),o=!0)},o(n){k(l.$$.fragment,n),o=!1},d(n){n&&_(e),n&&_(t),F(l,n)}}}function Ye(i){let e,a;return e=new Fe({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),a=!0},p:G,i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function xe(i){let e,a;return e=new Te({props:{items:i[1],$$slots:{default:[tt,({visibleItems:t})=>({6:t}),({visibleItems:t})=>t?64:0]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),a=!0},p(t,l){const o={};l&2&&(o.items=t[1]),l&1121&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function fe(i){let e,a;return e=new ye({props:{workflow:i[7],namespace:i[0],timeFormat:i[5]}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),a=!0},p(t,l){const o={};l&64&&(o.workflow=t[7]),l&1&&(o.namespace=t[0]),l&32&&(o.timeFormat=t[5]),e.$set(o)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function et(i){let e,a,t=i[6],l=[];for(let n=0;n<t.length;n+=1)l[n]=fe(oe(i,t,n));const o=n=>k(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=R()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=R()},m(n,r){for(let s=0;s<l.length;s+=1)l[s].m(n,r);g(n,e,r),a=!0},p(n,r){if(r&97){t=n[6];let s;for(s=0;s<t.length;s+=1){const c=oe(n,t,s);l[s]?(l[s].p(c,r),v(l[s],1)):(l[s]=fe(c),l[s].c(),v(l[s],1),l[s].m(e.parentNode,e))}for(V(),s=t.length;s<l.length;s+=1)o(s);j()}},i(n){if(!a){for(let r=0;r<t.length;r+=1)v(l[r]);a=!0}},o(n){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)k(l[r]);a=!1},d(n){ue(l,n),n&&_(e)}}}function tt(i){let e,a;return e=new we({props:{$$slots:{default:[et]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){P(e,t,l),a=!0},p(t,l){const o={};l&1121&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function lt(i){let e,a,t,l,o,n;e=new Se({props:{title:`Archival | ${i[0]}`,url:i[4].url.href}});const r=[Xe,Ke,Je],s=[];function c(f,p){return f[2]&&f[3]?0:f[2]?1:2}return t=c(i),l=s[t]=r[t](i),{c(){A(e.$$.fragment),a=N(),l.c(),o=R()},l(f){T(e.$$.fragment,f),a=I(f),l.l(f),o=R()},m(f,p){P(e,f,p),g(f,a,p),s[t].m(f,p),g(f,o,p),n=!0},p(f,[p]){const h={};p&1&&(h.title=`Archival | ${f[0]}`),p&16&&(h.url=f[4].url.href),e.$set(h);let u=t;t=c(f),t===u?s[t].p(f,p):(V(),k(s[u],1,1,()=>{s[u]=null}),j(),l=s[t],l?l.p(f,p):(l=s[t]=r[t](f),l.c()),v(l,1),l.m(o.parentNode,o))},i(f){n||(v(e.$$.fragment,f),v(l),n=!0)},o(f){k(e.$$.fragment,f),k(l),n=!1},d(f){F(e,f),f&&_(a),s[t].d(f),f&&_(o)}}}const Ot=async function({params:i,url:e}){var a,t;const{searchParams:l}=e;l.has("time-range")||l.set("time-range","1 day");const o=l.get("workflow-id"),n=l.get("workflow-type"),r=l.get("time-range"),s=l.get("status"),c={workflowId:o,workflowType:n,closeTime:r,executionStatus:s},f=await be(i.namespace),p=((a=f==null?void 0:f.config)===null||a===void 0?void 0:a.historyArchivalState)==="Enabled",h=((t=f==null?void 0:f.config)===null||t===void 0?void 0:t.visibilityArchivalState)==="Enabled",u=p&&h?await ge(i.namespace,c,fetch):null;return{props:{workflows:u?u.workflows:[],namespace:f,archivalEnabled:p,visibilityArchivalEnabled:h}}};function rt(i,e,a){let t,l;H(i,J,c=>a(4,t=c)),H(i,L,c=>a(5,l=c));let{namespace:o}=e,{workflows:n}=e,{archivalEnabled:r=!1}=e,{visibilityArchivalEnabled:s=!1}=e;return i.$$set=c=>{"namespace"in c&&a(0,o=c.namespace),"workflows"in c&&a(1,n=c.workflows),"archivalEnabled"in c&&a(2,r=c.archivalEnabled),"visibilityArchivalEnabled"in c&&a(3,s=c.visibilityArchivalEnabled)},[o,n,r,s,t,l]}class Rt extends Q{constructor(e){super(),z(this,e,rt,lt,M,{namespace:0,workflows:1,archivalEnabled:2,visibilityArchivalEnabled:3})}}export{Rt as default,Ot as load};
