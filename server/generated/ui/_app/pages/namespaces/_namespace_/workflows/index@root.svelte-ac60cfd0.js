import{S as Z,i as J,s as K,e as N,w as R,c as A,a as j,x as E,d as w,b as y,g as T,y as I,q as h,o as $,B as W,T as G,t as D,k as C,h as F,m as P,R as Y,M as q,ab as ge,j as ie,n as B,p as V,G as je,N as O,W as he,ar as We,_ as U,$ as z,Z as H,l as L,ad as qe,a7 as De,al as Fe,E as X,an as Le,a9 as Oe}from"../../../../chunks/index-604742bf.js";import{p as Ce}from"../../../../chunks/stores-810822a9.js";import{t as ae}from"../../../../chunks/time-format-6fa48b0d.js";import{w as de,l as Be,a as Ve,u as Me}from"../../../../chunks/workflows-b3b7b0ca.js";import{s as Qe,k as x}from"../../../../chunks/to-duration-271d3946.js";import{t as oe,W as Ue,a as ze}from"../../../../chunks/workflows-summary-row-7bfc5798.js";import{E as He}from"../../../../chunks/empty-state-c50aaf3c.js";import{P as Ge}from"../../../../chunks/pagination-08296b95.js";import{j as Ze}from"../../../../chunks/index-c0547148.js";import{u as le}from"../../../../chunks/update-query-parameters-5724d2fc.js";import{t as we}from"../../../../chunks/workflow-service-a45f94f6.js";import{S as ne,O as Q}from"../../../../chunks/select-4556bdf3.js";import{c as Je}from"../../../../chunks/copy-to-clipboard-8832075c.js";import{I as se}from"../../../../chunks/index-0574ae1f.js";import{S as Ke}from"../../../../chunks/search-b2185bce.js";import"../../../../chunks/persist-store-26f405dd.js";import"../../../../chunks/index-c9e619a8.js";import"../../../../chunks/with-loading-22689bcc.js";import"../../../../chunks/format-date-919f4714.js";import"../../../../chunks/route-for-1f2060cd.js";import"../../../../chunks/workflow-status-ca8cb7e9.js";import"../../../../chunks/filter-select-874d9ac7.js";import"../../../../chunks/navigation-6709cf39.js";import"../../../../chunks/singletons-d1fb5791.js";import"../../../../chunks/simplify-attributes-64d6cf1a.js";import"../../../../chunks/route-for-api-17b42688.js";import"../../../../chunks/notifications-cfed8e58.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/button-0ce95595.js";const Xe=n=>Qe(n)?n==="basic"||n==="advanced":!1,Ye=n=>{const e=n.searchParams.get("search");return Xe(e)?e:(n.searchParams.set("search","basic"),"basic")};function $e(n){let e,r,t;return r=new se({props:{name:n[3],scale:.9,stroke:"currentcolor"}}),{c(){e=N("span"),R(r.$$.fragment),this.h()},l(l){e=A(l,"SPAN",{class:!0});var o=j(e);E(r.$$.fragment,o),o.forEach(w),this.h()},h(){y(e,"class","icon-container svelte-1k4c3aw")},m(l,o){T(l,e,o),I(r,e,null),t=!0},p(l,o){const i={};o&8&&(i.name=l[3]),r.$set(i)},i(l){t||(h(r.$$.fragment,l),t=!0)},o(l){$(r.$$.fragment,l),t=!1},d(l){l&&w(e),W(r)}}}function ke(n){let e,r,t,l,o;return r=new se({props:{name:n[8]?"checkMark":"copy",stroke:"currentcolor"}}),{c(){e=N("div"),R(r.$$.fragment),this.h()},l(i){e=A(i,"DIV",{class:!0});var a=j(e);E(r.$$.fragment,a),a.forEach(w),this.h()},h(){y(e,"class","copy-icon-container svelte-1k4c3aw")},m(i,a){T(i,e,a),I(r,e,null),t=!0,l||(o=G(e,"click",n[9]),l=!0)},p(i,a){const s={};a&256&&(s.name=i[8]?"checkMark":"copy"),r.$set(s)},i(i){t||(h(r.$$.fragment,i),t=!0)},o(i){$(r.$$.fragment,i),t=!1},d(i){i&&w(e),W(r),l=!1,o()}}}function xe(n){let e,r,t,l,o,i,a,s,c,b,u,f=n[3]!==""&&$e(n),m=n[6]&&ke(n);return{c(){e=N("div"),r=N("label"),t=D(n[2]),l=C(),f&&f.c(),o=C(),i=N("input"),a=C(),m&&m.c(),this.h()},l(p){e=A(p,"DIV",{class:!0});var _=j(e);r=A(_,"LABEL",{for:!0,class:!0});var g=j(r);t=F(g,n[2]),g.forEach(w),l=P(_),f&&f.l(_),o=P(_),i=A(_,"INPUT",{class:!0,placeholder:!0,id:!0,name:!0}),a=P(_),m&&m.l(_),_.forEach(w),this.h()},h(){y(r,"for",n[1]),y(r,"class","hidden"),y(i,"class","m-2 block w-full bg-white focus:outline-none svelte-1k4c3aw"),i.disabled=n[6],y(i,"placeholder",n[4]),y(i,"id",n[1]),y(i,"name",n[5]),Y(i,"copyable",n[6]),y(e,"class",s="input-container "+n[7]+" svelte-1k4c3aw"),Y(e,"copyable",n[6])},m(p,_){T(p,e,_),q(e,r),q(r,t),q(e,l),f&&f.m(e,null),q(e,o),q(e,i),ge(i,n[0]),q(e,a),m&&m.m(e,null),c=!0,b||(u=[G(i,"input",n[13]),G(i,"input",n[11]),G(i,"change",n[12])],b=!0)},p(p,[_]){(!c||_&4)&&ie(t,p[2]),(!c||_&2)&&y(r,"for",p[1]),p[3]!==""?f?(f.p(p,_),_&8&&h(f,1)):(f=$e(p),f.c(),h(f,1),f.m(e,o)):f&&(B(),$(f,1,1,()=>{f=null}),V()),(!c||_&64)&&(i.disabled=p[6]),(!c||_&16)&&y(i,"placeholder",p[4]),(!c||_&2)&&y(i,"id",p[1]),(!c||_&32)&&y(i,"name",p[5]),_&1&&i.value!==p[0]&&ge(i,p[0]),_&64&&Y(i,"copyable",p[6]),p[6]?m?(m.p(p,_),_&64&&h(m,1)):(m=ke(p),m.c(),h(m,1),m.m(e,null)):m&&(B(),$(m,1,1,()=>{m=null}),V()),(!c||_&128&&s!==(s="input-container "+p[7]+" svelte-1k4c3aw"))&&y(e,"class",s),_&192&&Y(e,"copyable",p[6])},i(p){c||(h(f),h(m),c=!0)},o(p){$(f),$(m),c=!1},d(p){p&&w(e),f&&f.d(),m&&m.d(),b=!1,je(u)}}}function et(n,e,r){let t,{id:l}=e,{label:o}=e,{value:i}=e,{icon:a=""}=e,{placeholder:s=o}=e,{name:c=l}=e,{copyable:b=!1}=e,{theme:u="light"}=e;const{copy:f,copied:m}=Je(i);O(n,m,d=>r(8,t=d));function p(d){he.call(this,n,d)}function _(d){he.call(this,n,d)}function g(){i=this.value,r(0,i)}return n.$$set=d=>{"id"in d&&r(1,l=d.id),"label"in d&&r(2,o=d.label),"value"in d&&r(0,i=d.value),"icon"in d&&r(3,a=d.icon),"placeholder"in d&&r(4,s=d.placeholder),"name"in d&&r(5,c=d.name),"copyable"in d&&r(6,b=d.copyable),"theme"in d&&r(7,u=d.theme)},[i,l,o,a,s,c,b,u,t,f,m,p,_,g]}class be extends Z{constructor(e){super(),J(this,e,et,xe,K,{id:1,label:2,value:0,icon:3,placeholder:4,name:5,copyable:6,theme:7})}}function ve(n,e,r){const t=n.slice();return t[15]=e[r][0],t[16]=e[r][1],t}function ye(n,e,r){const t=n.slice();return t[16]=e[r],t}function tt(n){let e,r,t,l,o;return{c(){e=N("a"),r=D("Advanced Search"),this.h()},l(i){e=A(i,"A",{href:!0,class:!0});var a=j(e);r=F(a,"Advanced Search"),a.forEach(w),this.h()},h(){y(e,"href",t=n[2].url.pathname+"?searchType=advanced"),y(e,"class","text-blue-700")},m(i,a){T(i,e,a),q(e,r),l||(o=G(e,"click",We(n[6]("advanced"))),l=!0)},p(i,a){a&4&&t!==(t=i[2].url.pathname+"?searchType=advanced")&&y(e,"href",t)},d(i){i&&w(e),l=!1,o()}}}function rt(n){let e,r,t,l,o;return{c(){e=N("a"),r=D("Basic Search"),this.h()},l(i){e=A(i,"A",{href:!0,class:!0});var a=j(e);r=F(a,"Basic Search"),a.forEach(w),this.h()},h(){y(e,"href",t=n[2].url.pathname+"?searchType=basic"),y(e,"class","text-blue-700")},m(i,a){T(i,e,a),q(e,r),l||(o=G(e,"click",We(n[6]("basic"))),l=!0)},p(i,a){a&4&&t!==(t=i[2].url.pathname+"?searchType=basic")&&y(e,"href",t)},d(i){i&&w(e),l=!1,o()}}}function lt(n){let e,r,t,l,o,i,a,s,c,b,u,f,m,p,_,g;function d(k){n[9](k)}let v={icon:"search",id:"workflow-id-filter",label:"Workflow ID"};n[3].workflowId!==void 0&&(v.value=n[3].workflowId),r=new be({props:v}),U.push(()=>z(r,"value",d)),r.$on("input",n[8]);function M(k){n[10](k)}let ce={icon:"search",id:"workflow-type-filter",label:"Workflow Type"};n[3].workflowType!==void 0&&(ce.value=n[3].workflowType),o=new be({props:ce}),U.push(()=>z(o,"value",M)),o.$on("input",n[8]);function Pe(k){n[11](k)}let ue={id:"time-range-filter",label:"Time Range",$$slots:{default:[st]},$$scope:{ctx:n}};n[3].timeRange!==void 0&&(ue.value=n[3].timeRange),s=new ne({props:ue}),U.push(()=>z(s,"value",Pe)),s.$on("change",n[8]);function Ne(k){n[12](k)}let fe={id:"execution-status-filter",label:"Workflow Status",$$slots:{default:[ut]},$$scope:{ctx:n}};n[3].executionStatus!==void 0&&(fe.value=n[3].executionStatus),u=new ne({props:fe}),U.push(()=>z(u,"value",Ne)),u.$on("change",n[8]);function Ae(k){n[13](k)}let pe={id:"filter-by-relative-time",$$slots:{default:[_t]},$$scope:{ctx:n}};return n[4]!==void 0&&(pe.value=n[4]),p=new ne({props:pe}),U.push(()=>z(p,"value",Ae)),{c(){e=N("div"),R(r.$$.fragment),l=C(),R(o.$$.fragment),a=C(),R(s.$$.fragment),b=C(),R(u.$$.fragment),m=C(),R(p.$$.fragment),this.h()},l(k){e=A(k,"DIV",{class:!0});var S=j(e);E(r.$$.fragment,S),l=P(S),E(o.$$.fragment,S),a=P(S),E(s.$$.fragment,S),b=P(S),E(u.$$.fragment,S),m=P(S),E(p.$$.fragment,S),S.forEach(w),this.h()},h(){y(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5")},m(k,S){T(k,e,S),I(r,e,null),q(e,l),I(o,e,null),q(e,a),I(s,e,null),q(e,b),I(u,e,null),q(e,m),I(p,e,null),g=!0},p(k,S){const me={};!t&&S&8&&(t=!0,me.value=k[3].workflowId,H(()=>t=!1)),r.$set(me);const _e={};!i&&S&8&&(i=!0,_e.value=k[3].workflowType,H(()=>i=!1)),o.$set(_e);const ee={};S&2097160&&(ee.$$scope={dirty:S,ctx:k}),!c&&S&8&&(c=!0,ee.value=k[3].timeRange,H(()=>c=!1)),s.$set(ee);const te={};S&2097152&&(te.$$scope={dirty:S,ctx:k}),!f&&S&8&&(f=!0,te.value=k[3].executionStatus,H(()=>f=!1)),u.$set(te);const re={};S&2097152&&(re.$$scope={dirty:S,ctx:k}),!_&&S&16&&(_=!0,re.value=k[4],H(()=>_=!1)),p.$set(re)},i(k){g||(h(r.$$.fragment,k),h(o.$$.fragment,k),h(s.$$.fragment,k),h(u.$$.fragment,k),h(p.$$.fragment,k),g=!0)},o(k){$(r.$$.fragment,k),$(o.$$.fragment,k),$(s.$$.fragment,k),$(u.$$.fragment,k),$(p.$$.fragment,k),g=!1},d(k){k&&w(e),W(r),W(o),W(s),W(u),W(p)}}}function nt(n){let e,r;return e=new Ke({props:{icon:!0,id:"advanced-search",placeholder:"Query\u2026",value:n[1]}}),e.$on("submit",n[7]),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const o={};l&2&&(o.value=t[1]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function at(n){let e;return{c(){e=D("All")},l(r){e=F(r,"All")},m(r,t){T(r,e,t)},d(r){r&&w(e)}}}function Te(n){let e,r;return e=new Q({props:{value:n[3].timeRange,$$slots:{default:[ot]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const o={};l&8&&(o.value=t[3].timeRange),l&2097160&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function ot(n){let e=n[3].timeRange+"",r;return{c(){r=D(e)},l(t){r=F(t,e)},m(t,l){T(t,r,l)},p(t,l){l&8&&e!==(e=t[3].timeRange+"")&&ie(r,e)},d(t){t&&w(r)}}}function it(n){let e=n[16]+"",r;return{c(){r=D(e)},l(t){r=F(t,e)},m(t,l){T(t,r,l)},p:X,d(t){t&&w(r)}}}function Se(n){let e,r;return e=new Q({props:{value:n[16],$$slots:{default:[it]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const o={};l&2097152&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function st(n){let e,r,t=n[3].timeRange&&!x.includes(n[3].timeRange),l,o,i;e=new Q({props:{value:null,$$slots:{default:[at]},$$scope:{ctx:n}}});let a=t&&Te(n),s=x,c=[];for(let u=0;u<s.length;u+=1)c[u]=Se(ye(n,s,u));const b=u=>$(c[u],1,1,()=>{c[u]=null});return{c(){R(e.$$.fragment),r=C(),a&&a.c(),l=C();for(let u=0;u<c.length;u+=1)c[u].c();o=L()},l(u){E(e.$$.fragment,u),r=P(u),a&&a.l(u),l=P(u);for(let f=0;f<c.length;f+=1)c[f].l(u);o=L()},m(u,f){I(e,u,f),T(u,r,f),a&&a.m(u,f),T(u,l,f);for(let m=0;m<c.length;m+=1)c[m].m(u,f);T(u,o,f),i=!0},p(u,f){const m={};if(f&2097152&&(m.$$scope={dirty:f,ctx:u}),e.$set(m),f&8&&(t=u[3].timeRange&&!x.includes(u[3].timeRange)),t?a?(a.p(u,f),f&8&&h(a,1)):(a=Te(u),a.c(),h(a,1),a.m(l.parentNode,l)):a&&(B(),$(a,1,1,()=>{a=null}),V()),f&0){s=x;let p;for(p=0;p<s.length;p+=1){const _=ye(u,s,p);c[p]?(c[p].p(_,f),h(c[p],1)):(c[p]=Se(_),c[p].c(),h(c[p],1),c[p].m(o.parentNode,o))}for(B(),p=s.length;p<c.length;p+=1)b(p);V()}},i(u){if(!i){h(e.$$.fragment,u),h(a);for(let f=0;f<s.length;f+=1)h(c[f]);i=!0}},o(u){$(e.$$.fragment,u),$(a),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)$(c[f]);i=!1},d(u){W(e,u),u&&w(r),a&&a.d(u),u&&w(l),qe(c,u),u&&w(o)}}}function ct(n){let e=n[15]+"",r;return{c(){r=D(e)},l(t){r=F(t,e)},m(t,l){T(t,r,l)},p:X,d(t){t&&w(r)}}}function Re(n,e){let r,t,l;return t=new Q({props:{value:e[16],$$slots:{default:[ct]},$$scope:{ctx:e}}}),{key:n,first:null,c(){r=L(),R(t.$$.fragment),this.h()},l(o){r=L(),E(t.$$.fragment,o),this.h()},h(){this.first=r},m(o,i){T(o,r,i),I(t,o,i),l=!0},p(o,i){e=o;const a={};i&2097152&&(a.$$scope={dirty:i,ctx:e}),t.$set(a)},i(o){l||(h(t.$$.fragment,o),l=!0)},o(o){$(t.$$.fragment,o),l=!1},d(o){o&&w(r),W(t,o)}}}function ut(n){let e=[],r=new Map,t,l,o=Object.entries(n[5]);const i=a=>a[15];for(let a=0;a<o.length;a+=1){let s=ve(n,o,a),c=i(s);r.set(c,e[a]=Re(c,s))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=L()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);t=L()},m(a,s){for(let c=0;c<e.length;c+=1)e[c].m(a,s);T(a,t,s),l=!0},p(a,s){s&32&&(o=Object.entries(a[5]),B(),e=De(e,s,i,1,a,o,r,t.parentNode,Fe,Re,t,ve),V())},i(a){if(!l){for(let s=0;s<o.length;s+=1)h(e[s]);l=!0}},o(a){for(let s=0;s<e.length;s+=1)$(e[s]);l=!1},d(a){for(let s=0;s<e.length;s+=1)e[s].d(a);a&&w(t)}}}function ft(n){let e;return{c(){e=D("Relative")},l(r){e=F(r,"Relative")},m(r,t){T(r,e,t)},d(r){r&&w(e)}}}function pt(n){let e;return{c(){e=D("UTC")},l(r){e=F(r,"UTC")},m(r,t){T(r,e,t)},d(r){r&&w(e)}}}function mt(n){let e;return{c(){e=D("Local")},l(r){e=F(r,"Local")},m(r,t){T(r,e,t)},d(r){r&&w(e)}}}function _t(n){let e,r,t,l,o,i;return e=new Q({props:{value:"relative",$$slots:{default:[ft]},$$scope:{ctx:n}}}),t=new Q({props:{value:"UTC",$$slots:{default:[pt]},$$scope:{ctx:n}}}),o=new Q({props:{value:"local",$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment),r=C(),R(t.$$.fragment),l=C(),R(o.$$.fragment)},l(a){E(e.$$.fragment,a),r=P(a),E(t.$$.fragment,a),l=P(a),E(o.$$.fragment,a)},m(a,s){I(e,a,s),T(a,r,s),I(t,a,s),T(a,l,s),I(o,a,s),i=!0},p(a,s){const c={};s&2097152&&(c.$$scope={dirty:s,ctx:a}),e.$set(c);const b={};s&2097152&&(b.$$scope={dirty:s,ctx:a}),t.$set(b);const u={};s&2097152&&(u.$$scope={dirty:s,ctx:a}),o.$set(u)},i(a){i||(h(e.$$.fragment,a),h(t.$$.fragment,a),h(o.$$.fragment,a),i=!0)},o(a){$(e.$$.fragment,a),$(t.$$.fragment,a),$(o.$$.fragment,a),i=!1},d(a){W(e,a),a&&w(r),W(t,a),a&&w(l),W(o,a)}}}function gt(n){let e,r,t,l,o,i;function a(m,p){return m[0]==="advanced"?rt:tt}let s=a(n),c=s(n);const b=[nt,lt],u=[];function f(m,p){return m[0]==="advanced"?0:1}return l=f(n),o=u[l]=b[l](n),{c(){e=N("section"),r=N("p"),c.c(),t=C(),o.c(),this.h()},l(m){e=A(m,"SECTION",{class:!0});var p=j(e);r=A(p,"P",{class:!0});var _=j(r);c.l(_),_.forEach(w),t=P(p),o.l(p),p.forEach(w),this.h()},h(){y(r,"class","text-right text-xs"),y(e,"class","flex flex-col gap-2")},m(m,p){T(m,e,p),q(e,r),c.m(r,null),q(e,t),u[l].m(e,null),i=!0},p(m,[p]){s===(s=a(m))&&c?c.p(m,p):(c.d(1),c=s(m),c&&(c.c(),c.m(r,null)));let _=l;l=f(m),l===_?u[l].p(m,p):(B(),$(u[_],1,1,()=>{u[_]=null}),V(),o=u[l],o?o.p(m,p):(o=u[l]=b[l](m),o.c()),h(o,1),o.m(e,null))},i(m){i||(h(o),i=!0)},o(m){$(o),i=!1},d(m){m&&w(e),c.d(),u[l].d()}}}function ht(n,e,r){let t,l,o,i;O(n,Ce,v=>r(2,o=v)),O(n,ae,v=>r(4,i=v));let{searchType:a}=e;const s=we({timeRange:"All"}),c={All:null,Running:"Running","Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"},b=v=>()=>{r(0,a=v),le({parameter:"search",value:a,url:o.url})},u=v=>{const M=new FormData(v.target);r(1,t=String(M.get("query"))),r(3,l=oe(t)),le({url:o.url,parameter:"query",value:t})},f=Ze(()=>{r(1,t=we(l)),le({url:o.url,parameter:"query",value:t,allowEmpty:!0})},300);function m(v){n.$$.not_equal(l.workflowId,v)&&(l.workflowId=v,r(3,l),r(1,t),r(2,o))}function p(v){n.$$.not_equal(l.workflowType,v)&&(l.workflowType=v,r(3,l),r(1,t),r(2,o))}function _(v){n.$$.not_equal(l.timeRange,v)&&(l.timeRange=v,r(3,l),r(1,t),r(2,o))}function g(v){n.$$.not_equal(l.executionStatus,v)&&(l.executionStatus=v,r(3,l),r(1,t),r(2,o))}function d(v){i=v,ae.set(i)}return n.$$set=v=>{"searchType"in v&&r(0,a=v.searchType)},n.$$.update=()=>{n.$$.dirty&4&&r(1,t=o.url.searchParams.get("query")),n.$$.dirty&2&&r(3,l=oe(t!=null?t:s))},[a,t,o,l,i,c,b,u,f,m,p,_,g,d]}class dt extends Z{constructor(e){super(),J(this,e,ht,gt,K,{searchType:0})}}function wt(n){let e,r,t,l,o,i,a;return t=new se({props:{name:"spinner",scale:.5,class:"block h-full w-full animate-spin"}}),{c(){e=N("div"),r=N("div"),R(t.$$.fragment),l=C(),o=N("h2"),i=D(n[0]),this.h()},l(s){e=A(s,"DIV",{class:!0});var c=j(e);r=A(c,"DIV",{class:!0});var b=j(r);E(t.$$.fragment,b),b.forEach(w),l=P(c),o=A(c,"H2",{class:!0});var u=j(o);i=F(u,n[0]),u.forEach(w),c.forEach(w),this.h()},h(){y(r,"class","flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"),y(o,"class","text-xl font-medium"),y(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(s,c){T(s,e,c),q(e,r),I(t,r,null),q(e,l),q(e,o),q(o,i),a=!0},p(s,[c]){(!a||c&1)&&ie(i,s[0])},i(s){a||(h(t.$$.fragment,s),a=!0)},o(s){$(t.$$.fragment,s),a=!1},d(s){s&&w(e),W(t)}}}function $t(n,e,r){let{title:t="Loading\u2026"}=e;return n.$$set=l=>{"title"in l&&r(0,t=l.title)},[t]}class kt extends Z{constructor(e){super(),J(this,e,$t,wt,K,{title:0})}}function Ee(n,e,r){const t=n.slice();return t[10]=e[r],t}function bt(n){let e,r;return e=new He({props:{title:"No Workflows Found",content:n[6]}}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p:X,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function vt(n){let e,r;return e=new Ge({props:{items:n[3],updating:n[4],$$slots:{default:[St,({visibleItems:t})=>({9:t}),({visibleItems:t})=>t?512:0]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const o={};l&8&&(o.items=t[3]),l&16&&(o.updating=t[4]),l&8738&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function yt(n){let e,r;return e=new kt({}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p:X,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Ie(n){let e,r;return e=new ze({props:{workflow:n[10],namespace:n[1].params.namespace,timeFormat:n[5]}}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const o={};l&512&&(o.workflow=t[10]),l&2&&(o.namespace=t[1].params.namespace),l&32&&(o.timeFormat=t[5]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Tt(n){let e,r,t=n[9],l=[];for(let i=0;i<t.length;i+=1)l[i]=Ie(Ee(n,t,i));const o=i=>$(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=L()},l(i){for(let a=0;a<l.length;a+=1)l[a].l(i);e=L()},m(i,a){for(let s=0;s<l.length;s+=1)l[s].m(i,a);T(i,e,a),r=!0},p(i,a){if(a&546){t=i[9];let s;for(s=0;s<t.length;s+=1){const c=Ee(i,t,s);l[s]?(l[s].p(c,a),h(l[s],1)):(l[s]=Ie(c),l[s].c(),h(l[s],1),l[s].m(e.parentNode,e))}for(B(),s=t.length;s<l.length;s+=1)o(s);V()}},i(i){if(!r){for(let a=0;a<t.length;a+=1)h(l[a]);r=!0}},o(i){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)$(l[a]);r=!1},d(i){qe(l,i),i&&w(e)}}}function St(n){let e,r;return e=new Ue({props:{$$slots:{default:[Tt]},$$scope:{ctx:n}}}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p(t,l){const o={};l&8738&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Rt(n){let e,r,t,l,o,i,a,s,c,b;function u(g){n[7](g)}let f={};n[0]!==void 0&&(f.searchType=n[0]),l=new dt({props:f}),U.push(()=>z(l,"searchType",u));const m=[yt,vt,bt],p=[];function _(g,d){return g[2]?0:g[3].length?1:2}return a=_(n),s=p[a]=m[a](n),{c(){e=N("h2"),r=D("Recent Workflows"),t=C(),R(l.$$.fragment),i=C(),s.c(),c=L(),this.h()},l(g){e=A(g,"H2",{class:!0});var d=j(e);r=F(d,"Recent Workflows"),d.forEach(w),t=P(g),E(l.$$.fragment,g),i=P(g),s.l(g),c=L(),this.h()},h(){y(e,"class","text-2xl")},m(g,d){T(g,e,d),q(e,r),T(g,t,d),I(l,g,d),T(g,i,d),p[a].m(g,d),T(g,c,d),b=!0},p(g,[d]){const v={};!o&&d&1&&(o=!0,v.searchType=g[0],H(()=>o=!1)),l.$set(v);let M=a;a=_(g),a===M?p[a].p(g,d):(B(),$(p[M],1,1,()=>{p[M]=null}),V(),s=p[a],s?s.p(g,d):(s=p[a]=m[a](g),s.c()),h(s,1),s.m(c.parentNode,c))},i(g){b||(h(l.$$.fragment,g),h(s),b=!0)},o(g){$(l.$$.fragment,g),$(s),b=!1},d(g){g&&w(e),g&&w(t),W(l,g),g&&w(i),p[a].d(g),g&&w(c)}}}function Et(n,e,r){let t,l,o,i,a,s;O(n,de,f=>r(8,t=f)),O(n,Ce,f=>r(1,l=f)),O(n,Be,f=>r(2,o=f)),O(n,Ve,f=>r(3,i=f)),O(n,Me,f=>r(4,a=f)),O(n,ae,f=>r(5,s=f));let c=Ye(l.url);const b=c==="advanced"?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";Le(()=>{const f=l.url.searchParams.get("query"),m=f?oe(f):{};Oe(de,t={parameters:m,searchType:c},t)});function u(f){c=f,r(0,c)}return[c,l,o,i,a,s,b,u]}class It extends Z{constructor(e){super(),J(this,e,Et,Rt,K,{})}}function Wt(n){let e,r;return e=new It({}),{c(){R(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),r=!0},p:X,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}class ar extends Z{constructor(e){super(),J(this,e,null,Wt,K,{})}}export{ar as default};
