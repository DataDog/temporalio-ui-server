import{s as G,e as v,b as N,d as C,g as i,j as y,k as g,v as F,x as U,y as me,t as P,f as S,l as R,a as W,h as A,n as x,c as Q}from"../chunks/scheduler.ynpCPJUn.js";import{S as J,i as K,c as d,a as k,m as b,t as p,b as _,d as I,g as j,e as q}from"../chunks/index.Y6K1ciz5.js";import{p as ie}from"../chunks/stores.cIfTtQic.js";import{P as pe}from"../chunks/page-title.v-I0ugN_.js";import{e as ee}from"../chunks/each.Idr4Z02b.js";import{L as z}from"../chunks/link.YWmMPt7S.js";import{P as $e}from"../chunks/pagination.xaXXOaWb.js";import{T as X,a as Y}from"../chunks/table-header-row.rKchP1NE.js";import{T as Z}from"../chunks/table-row.H-5as9Po.js";import{t as T}from"../chunks/translate.UONbkFXD.js";import{b as B,i as te}from"../chunks/route-for.Qeo2R03o.js";import{W as _e}from"../chunks/workflow-status.FTCN2p6a.js";import{f as he}from"../chunks/events.GHUy49HX.js";import{n as we}from"../chunks/namespaces.HQsAFc8v.js";import{w as ge}from"../chunks/workflow-run.8ua_yvDM.js";import{g as de}from"../chunks/get-workflow-relationships.GH_LJaWA.js";import{C as M}from"../chunks/index.1bleT1UY.js";import{W as ke}from"../chunks/workflow-padded-layout.RChWNbwf.js";function re(o,t,r){const e=o.slice();return e[7]=t[r],e}function be(o){let t=o[7].workflowId+"",r;return{c(){r=P(t)},l(e){r=S(e,t)},m(e,n){g(e,r,n)},p(e,n){n&64&&t!==(t=e[7].workflowId+"")&&x(r,t)},d(e){e&&i(r)}}}function Ie(o){let t=o[7].runId+"",r;return{c(){r=P(t)},l(e){r=S(e,t)},m(e,n){g(e,r,n)},p(e,n){n&64&&t!==(t=e[7].runId+"")&&x(r,t)},d(e){e&&i(r)}}}function Te(o){let t,r,e,n,l=o[7].type+"",c,f,s,a,u,m,$,D,L;return r=new _e({props:{status:o[7].status}}),a=new z({props:{href:B({namespace:o[7].namespace,workflow:o[7].workflowId,run:o[7].runId}),$$slots:{default:[be]},$$scope:{ctx:o}}}),$=new z({props:{href:B({namespace:o[7].namespace,workflow:o[7].workflowId,run:o[7].runId}),$$slots:{default:[Ie]},$$scope:{ctx:o}}}),{c(){t=v("td"),d(r.$$.fragment),e=W(),n=v("td"),c=P(l),f=W(),s=v("td"),d(a.$$.fragment),u=W(),m=v("td"),d($.$$.fragment),D=W(),this.h()},l(w){t=N(w,"TD",{class:!0});var h=C(t);k(r.$$.fragment,h),h.forEach(i),e=A(w),n=N(w,"TD",{class:!0});var E=C(n);c=S(E,l),E.forEach(i),f=A(w),s=N(w,"TD",{class:!0});var H=C(s);k(a.$$.fragment,H),H.forEach(i),u=A(w),m=N(w,"TD",{class:!0});var O=C(m);k($.$$.fragment,O),O.forEach(i),D=A(w),this.h()},h(){y(t,"class","max-md:hidden"),y(n,"class","max-lg:hidden"),y(s,"class","hover:text-blue-700 hover:underline"),y(m,"class","hover:text-blue-700 hover:underline")},m(w,h){g(w,t,h),b(r,t,null),g(w,e,h),g(w,n,h),R(n,c),g(w,f,h),g(w,s,h),b(a,s,null),g(w,u,h),g(w,m,h),b($,m,null),g(w,D,h),L=!0},p(w,h){const E={};h&64&&(E.status=w[7].status),r.$set(E),(!L||h&64)&&l!==(l=w[7].type+"")&&x(c,l);const H={};h&64&&(H.href=B({namespace:w[7].namespace,workflow:w[7].workflowId,run:w[7].runId})),h&1088&&(H.$$scope={dirty:h,ctx:w}),a.$set(H);const O={};h&64&&(O.href=B({namespace:w[7].namespace,workflow:w[7].workflowId,run:w[7].runId})),h&1088&&(O.$$scope={dirty:h,ctx:w}),$.$set(O)},i(w){L||(p(r.$$.fragment,w),p(a.$$.fragment,w),p($.$$.fragment,w),L=!0)},o(w){_(r.$$.fragment,w),_(a.$$.fragment,w),_($.$$.fragment,w),L=!1},d(w){w&&(i(t),i(e),i(n),i(f),i(s),i(u),i(m),i(D)),I(r),I(a),I($)}}}function ne(o){let t,r;return t=new Z({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&1088&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Ee(o){let t,r,e=ee(o[6]),n=[];for(let c=0;c<e.length;c+=1)n[c]=ne(re(o,e,c));const l=c=>_(n[c],1,1,()=>{n[c]=null});return{c(){for(let c=0;c<n.length;c+=1)n[c].c();t=U()},l(c){for(let f=0;f<n.length;f+=1)n[f].l(c);t=U()},m(c,f){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(c,f);g(c,t,f),r=!0},p(c,f){if(f&64){e=ee(c[6]);let s;for(s=0;s<e.length;s+=1){const a=re(c,e,s);n[s]?(n[s].p(a,f),p(n[s],1)):(n[s]=ne(a),n[s].c(),p(n[s],1),n[s].m(t.parentNode,t))}for(j(),s=e.length;s<n.length;s+=1)l(s);q()}},i(c){if(!r){for(let f=0;f<e.length;f+=1)p(n[f]);r=!0}},o(c){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)_(n[f]);r=!1},d(c){c&&i(t),me(n,c)}}}function ve(o){let t,r=T("workflows.child-workflows")+"",e;return{c(){t=v("caption"),e=P(r),this.h()},l(n){t=N(n,"CAPTION",{class:!0,slot:!0});var l=C(t);e=S(l,r),l.forEach(i),this.h()},h(){y(t,"class","sr-only"),y(t,"slot","caption")},m(n,l){g(n,t,l),R(t,e)},p:F,d(n){n&&i(t)}}}function Ne(o){let t,r=T("common.status")+"",e,n,l,c=T("common.type")+"",f,s,a,u=T("workflows.child-id")+"",m,$,D,L=T("workflows.child-run-id")+"",w;return{c(){t=v("th"),e=P(r),n=W(),l=v("th"),f=P(c),s=W(),a=v("th"),m=P(u),$=W(),D=v("th"),w=P(L),this.h()},l(h){t=N(h,"TH",{class:!0});var E=C(t);e=S(E,r),E.forEach(i),n=A(h),l=N(h,"TH",{class:!0});var H=C(l);f=S(H,c),H.forEach(i),s=A(h),a=N(h,"TH",{});var O=C(a);m=S(O,u),O.forEach(i),$=A(h),D=N(h,"TH",{});var V=C(D);w=S(V,L),V.forEach(i),this.h()},h(){y(t,"class","max-md:hidden"),y(l,"class","max-lg:hidden")},m(h,E){g(h,t,E),R(t,e),g(h,n,E),g(h,l,E),R(l,f),g(h,s,E),g(h,a,E),R(a,m),g(h,$,E),g(h,D,E),R(D,w)},p:F,d(h){h&&(i(t),i(n),i(l),i(s),i(a),i($),i(D))}}}function Ce(o){let t,r;return t=new Y({props:{slot:"headers",$$slots:{default:[Ne]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&1024&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function De(o){let t,r;return t=new X({props:{class:"w-full",$$slots:{headers:[Ce],caption:[ve],default:[Ee]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&1088&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function He(o){let t;return{c(){t=v("div"),this.h()},l(r){t=N(r,"DIV",{slot:!0}),C(t).forEach(i),this.h()},h(){y(t,"slot","pagination-top")},m(r,e){g(r,t,e)},p:F,d(r){r&&i(t)}}}function ye(o){let t,r;return t=new $e({props:{items:o[0],"aria-label":T("workflows.child-workflows"),pageSizeSelectLabel:T("common.per-page"),previousButtonLabel:T("common.previous"),nextButtonLabel:T("common.next"),$$slots:{"pagination-top":[He],default:[De,({visibleItems:e})=>({6:e}),({visibleItems:e})=>e?64:0]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,[n]){const l={};n&1&&(l.items=e[0]),n&1088&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Pe(o,t,r){let e,n,l,{children:c=[]}=t,{pendingChildren:f=[]}=t,{namespace:s}=t;return o.$$set=a=>{"children"in a&&r(1,c=a.children),"pendingChildren"in a&&r(2,f=a.pendingChildren),"namespace"in a&&r(3,s=a.namespace)},o.$$.update=()=>{o.$$.dirty&12&&r(5,e=f.map(a=>({runId:a.runId,workflowId:a.workflowId,status:"Running",type:a.workflowTypeName,namespace:s}))),o.$$.dirty&10&&r(4,n=c.map(a=>{var u;return{runId:a.attributes.workflowExecution.runId,workflowId:a.attributes.workflowExecution.workflowId,type:a.attributes.workflowType,status:a.classification,namespace:((u=a.attributes)===null||u===void 0?void 0:u.namespace)||s}})),o.$$.dirty&48&&r(0,l=[...e,...n])},[l,c,f,s,n,e]}class Se extends J{constructor(t){super(),K(this,t,Pe,ye,G,{children:1,pendingChildren:2,namespace:3})}}function le(o){let t,r;return t=new z({props:{href:B({namespace:o[1],workflow:o[0],run:o[2]}),$$slots:{default:[Re]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&7&&(l.href=B({namespace:e[1],workflow:e[0],run:e[2]})),n&36&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Re(o){let t,r;return t=new M({props:{copyIconTitle:T("common.copy-icon-title"),copySuccessIconTitle:T("common.copy-success-icon-title"),content:o[2],visible:!0}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&4&&(l.content=e[2]),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function oe(o){let t,r;return t=new z({props:{href:B({namespace:o[1],workflow:o[0],run:o[4]}),$$slots:{default:[We]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&19&&(l.href=B({namespace:e[1],workflow:e[0],run:e[4]})),n&48&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function We(o){let t,r;return t=new M({props:{copyIconTitle:T("common.copy-icon-title"),copySuccessIconTitle:T("common.copy-success-icon-title"),content:o[4],visible:!0}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&16&&(l.content=e[4]),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function se(o){let t,r;return t=new z({props:{href:B({namespace:o[1],workflow:o[0],run:o[3]}),$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&11&&(l.href=B({namespace:e[1],workflow:e[0],run:e[3]})),n&40&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Ae(o){let t,r;return t=new M({props:{copyIconTitle:T("common.copy-icon-title"),copySuccessIconTitle:T("common.copy-success-icon-title"),content:o[3],visible:!0}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&8&&(l.content=e[3]),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Le(o){let t,r,e,n,l,c,f=o[2]&&le(o),s=o[4]&&oe(o),a=o[3]&&se(o);return{c(){t=v("td"),f&&f.c(),r=W(),e=v("td"),s&&s.c(),n=W(),l=v("td"),a&&a.c(),this.h()},l(u){t=N(u,"TD",{class:!0});var m=C(t);f&&f.l(m),m.forEach(i),r=A(u),e=N(u,"TD",{class:!0});var $=C(e);s&&s.l($),$.forEach(i),n=A(u),l=N(u,"TD",{class:!0});var D=C(l);a&&a.l(D),D.forEach(i),this.h()},h(){y(t,"class","w-1/3 hover:text-blue-700 hover:underline"),y(e,"class","w-1/3 hover:text-blue-700 hover:underline"),y(l,"class","w-1/3 hover:text-blue-700 hover:underline")},m(u,m){g(u,t,m),f&&f.m(t,null),g(u,r,m),g(u,e,m),s&&s.m(e,null),g(u,n,m),g(u,l,m),a&&a.m(l,null),c=!0},p(u,m){u[2]?f?(f.p(u,m),m&4&&p(f,1)):(f=le(u),f.c(),p(f,1),f.m(t,null)):f&&(j(),_(f,1,1,()=>{f=null}),q()),u[4]?s?(s.p(u,m),m&16&&p(s,1)):(s=oe(u),s.c(),p(s,1),s.m(e,null)):s&&(j(),_(s,1,1,()=>{s=null}),q()),u[3]?a?(a.p(u,m),m&8&&p(a,1)):(a=se(u),a.c(),p(a,1),a.m(l,null)):a&&(j(),_(a,1,1,()=>{a=null}),q())},i(u){c||(p(f),p(s),p(a),c=!0)},o(u){_(f),_(s),_(a),c=!1},d(u){u&&(i(t),i(r),i(e),i(n),i(l)),f&&f.d(),s&&s.d(),a&&a.d()}}}function Oe(o){let t,r;return t=new Z({props:{$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&63&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Be(o){let t,r=T("workflows.relationships")+"",e;return{c(){t=v("caption"),e=P(r),this.h()},l(n){t=N(n,"CAPTION",{class:!0,slot:!0});var l=C(t);e=S(l,r),l.forEach(i),this.h()},h(){y(t,"class","sr-only"),y(t,"slot","caption")},m(n,l){g(n,t,l),R(t,e)},p:F,d(n){n&&i(t)}}}function Fe(o){let t,r=T("workflows.first-execution")+"",e,n,l,c=T("workflows.previous-execution")+"",f,s,a,u=T("workflows.next-execution")+"",m;return{c(){t=v("th"),e=P(r),n=W(),l=v("th"),f=P(c),s=W(),a=v("th"),m=P(u)},l($){t=N($,"TH",{});var D=C(t);e=S(D,r),D.forEach(i),n=A($),l=N($,"TH",{});var L=C(l);f=S(L,c),L.forEach(i),s=A($),a=N($,"TH",{});var w=C(a);m=S(w,u),w.forEach(i)},m($,D){g($,t,D),R(t,e),g($,n,D),g($,l,D),R(l,f),g($,s,D),g($,a,D),R(a,m)},p:F,d($){$&&(i(t),i(n),i(l),i(s),i(a))}}}function Ve(o){let t,r;return t=new Y({props:{slot:"headers",$$slots:{default:[Fe]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&32&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function je(o){let t,r;return t=new X({props:{class:"w-full",$$slots:{headers:[Ve],caption:[Be],default:[Oe]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,[n]){const l={};n&63&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function qe(o,t,r){let{workflow:e}=t,{namespace:n}=t,{first:l}=t,{next:c}=t,{previous:f}=t;return o.$$set=s=>{"workflow"in s&&r(0,e=s.workflow),"namespace"in s&&r(1,n=s.namespace),"first"in s&&r(2,l=s.first),"next"in s&&r(3,c=s.next),"previous"in s&&r(4,f=s.previous)},[e,n,l,c,f]}class ze extends J{constructor(t){super(),K(this,t,qe,je,G,{workflow:0,namespace:1,first:2,next:3,previous:4})}}function Ge(o){let t,r;return t=new M({props:{copyIconTitle:T("common.copy-icon-title"),copySuccessIconTitle:T("common.copy-success-icon-title"),content:o[0].workflowId,visible:!0}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&1&&(l.content=e[0].workflowId),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Je(o){let t,r;return t=new M({props:{copyIconTitle:T("common.copy-icon-title"),copySuccessIconTitle:T("common.copy-success-icon-title"),content:o[0].runId,visible:!0}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&1&&(l.content=e[0].runId),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Ke(o){let t,r,e,n,l,c;return r=new z({props:{href:B({namespace:o[1]??o[2],workflow:o[0].workflowId,run:o[0].runId}),$$slots:{default:[Ge]},$$scope:{ctx:o}}}),l=new z({props:{href:B({namespace:o[1]??o[2],workflow:o[0].workflowId,run:o[0].runId}),$$slots:{default:[Je]},$$scope:{ctx:o}}}),{c(){t=v("td"),d(r.$$.fragment),e=W(),n=v("td"),d(l.$$.fragment)},l(f){t=N(f,"TD",{});var s=C(t);k(r.$$.fragment,s),s.forEach(i),e=A(f),n=N(f,"TD",{});var a=C(n);k(l.$$.fragment,a),a.forEach(i)},m(f,s){g(f,t,s),b(r,t,null),g(f,e,s),g(f,n,s),b(l,n,null),c=!0},p(f,s){const a={};s&7&&(a.href=B({namespace:f[1]??f[2],workflow:f[0].workflowId,run:f[0].runId})),s&9&&(a.$$scope={dirty:s,ctx:f}),r.$set(a);const u={};s&7&&(u.href=B({namespace:f[1]??f[2],workflow:f[0].workflowId,run:f[0].runId})),s&9&&(u.$$scope={dirty:s,ctx:f}),l.$set(u)},i(f){c||(p(r.$$.fragment,f),p(l.$$.fragment,f),c=!0)},o(f){_(r.$$.fragment,f),_(l.$$.fragment,f),c=!1},d(f){f&&(i(t),i(e),i(n)),I(r),I(l)}}}function Me(o){let t,r;return t=new Z({props:{class:"hover:text-blue-700 hover:underline",$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&15&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Qe(o){let t,r=T("workflows.parent-workflow")+"",e;return{c(){t=v("caption"),e=P(r),this.h()},l(n){t=N(n,"CAPTION",{class:!0,slot:!0});var l=C(t);e=S(l,r),l.forEach(i),this.h()},h(){y(t,"class","sr-only"),y(t,"slot","caption")},m(n,l){g(n,t,l),R(t,e)},p:F,d(n){n&&i(t)}}}function Ue(o){let t,r=T("workflows.parent-id")+"",e,n,l,c=T("workflows.parent-run-id")+"",f;return{c(){t=v("th"),e=P(r),n=W(),l=v("th"),f=P(c)},l(s){t=N(s,"TH",{});var a=C(t);e=S(a,r),a.forEach(i),n=A(s),l=N(s,"TH",{});var u=C(l);f=S(u,c),u.forEach(i)},m(s,a){g(s,t,a),R(t,e),g(s,n,a),g(s,l,a),R(l,f)},p:F,d(s){s&&(i(t),i(n),i(l))}}}function Xe(o){let t,r;return t=new Y({props:{slot:"headers",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&8&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Ye(o){let t,r;return t=new X({props:{class:"w-full",$$slots:{headers:[Xe],caption:[Qe],default:[Me]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,[n]){const l={};n&15&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function Ze(o,t,r){let{parent:e}=t,{parentNamespaceName:n}=t,{namespace:l}=t;return o.$$set=c=>{"parent"in c&&r(0,e=c.parent),"parentNamespaceName"in c&&r(1,n=c.parentNamespaceName),"namespace"in c&&r(2,l=c.namespace)},[e,n,l]}class xe extends J{constructor(t){super(),K(this,t,Ze,Ye,G,{parent:0,parentNamespaceName:1,namespace:2})}}function et(o){let t,r;return t=new M({props:{copyIconTitle:T("common.copy-icon-title"),copySuccessIconTitle:T("common.copy-success-icon-title"),content:o[0],visible:!0}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&1&&(l.content=e[0]),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function tt(o){let t,r,e;return r=new z({props:{href:te({namespace:o[1],scheduleId:o[0]}),$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){t=v("td"),d(r.$$.fragment)},l(n){t=N(n,"TD",{});var l=C(t);k(r.$$.fragment,l),l.forEach(i)},m(n,l){g(n,t,l),b(r,t,null),e=!0},p(n,l){const c={};l&3&&(c.href=te({namespace:n[1],scheduleId:n[0]})),l&5&&(c.$$scope={dirty:l,ctx:n}),r.$set(c)},i(n){e||(p(r.$$.fragment,n),e=!0)},o(n){_(r.$$.fragment,n),e=!1},d(n){n&&i(t),I(r)}}}function rt(o){let t,r;return t=new Z({props:{class:"hover:text-blue-700 hover:underline",$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&7&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function nt(o){let t,r=T("schedules.schedule")+"",e;return{c(){t=v("caption"),e=P(r),this.h()},l(n){t=N(n,"CAPTION",{class:!0,slot:!0});var l=C(t);e=S(l,r),l.forEach(i),this.h()},h(){y(t,"class","sr-only"),y(t,"slot","caption")},m(n,l){g(n,t,l),R(t,e)},p:F,d(n){n&&i(t)}}}function lt(o){let t,r=T("schedules.schedule")+"",e;return{c(){t=v("th"),e=P(r)},l(n){t=N(n,"TH",{});var l=C(t);e=S(l,r),l.forEach(i)},m(n,l){g(n,t,l),R(t,e)},p:F,d(n){n&&i(t)}}}function ot(o){let t,r;return t=new Y({props:{slot:"headers",$$slots:{default:[lt]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&4&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function st(o){let t,r;return t=new X({props:{class:"w-full",$$slots:{headers:[ot],caption:[nt],default:[rt]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,[n]){const l={};n&7&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function ft(o,t,r){let{scheduleId:e}=t,{namespace:n}=t;return o.$$set=l=>{"scheduleId"in l&&r(0,e=l.scheduleId),"namespace"in l&&r(1,n=l.namespace)},[e,n]}class at extends J{constructor(t){super(),K(this,t,ft,st,G,{scheduleId:0,namespace:1})}}function ct(o){let t,r=T("workflows.no-relationships")+"",e;return{c(){t=v("p"),e=P(r)},l(n){t=N(n,"P",{});var l=C(t);e=S(l,r),l.forEach(i)},m(n,l){g(n,t,l),R(t,e)},p:F,i:F,o:F,d(n){n&&i(t)}}}function ut(o){let t,r,e,n,l,c,f=o[2]&&fe(o),s=o[7]&&ae(o),a=(o[8]||o[3]||o[4])&&ce(o),u=o[10]&&ue(o);return{c(){t=v("div"),f&&f.c(),r=W(),s&&s.c(),e=W(),a&&a.c(),n=W(),u&&u.c(),l=U(),this.h()},l(m){t=N(m,"DIV",{class:!0});var $=C(t);f&&f.l($),r=A($),s&&s.l($),e=A($),a&&a.l($),$.forEach(i),n=A(m),u&&u.l(m),l=U(),this.h()},h(){y(t,"class","flex w-full flex-wrap gap-4")},m(m,$){g(m,t,$),f&&f.m(t,null),R(t,r),s&&s.m(t,null),R(t,e),a&&a.m(t,null),g(m,n,$),u&&u.m(m,$),g(m,l,$),c=!0},p(m,$){m[2]?f?(f.p(m,$),$&4&&p(f,1)):(f=fe(m),f.c(),p(f,1),f.m(t,r)):f&&(j(),_(f,1,1,()=>{f=null}),q()),m[7]?s?(s.p(m,$),$&128&&p(s,1)):(s=ae(m),s.c(),p(s,1),s.m(t,e)):s&&(j(),_(s,1,1,()=>{s=null}),q()),m[8]||m[3]||m[4]?a?(a.p(m,$),$&280&&p(a,1)):(a=ce(m),a.c(),p(a,1),a.m(t,null)):a&&(j(),_(a,1,1,()=>{a=null}),q()),m[10]?u?(u.p(m,$),$&1024&&p(u,1)):(u=ue(m),u.c(),p(u,1),u.m(l.parentNode,l)):u&&(j(),_(u,1,1,()=>{u=null}),q())},i(m){c||(p(f),p(s),p(a),p(u),c=!0)},o(m){_(f),_(s),_(a),_(u),c=!1},d(m){m&&(i(t),i(n),i(l)),f&&f.d(),s&&s.d(),a&&a.d(),u&&u.d(m)}}}function fe(o){let t,r;return t=new at({props:{scheduleId:o[2],namespace:o[11]}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&4&&(l.scheduleId=e[2]),n&2048&&(l.namespace=e[11]),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function ae(o){let t,r;return t=new xe({props:{parent:o[7],parentNamespaceName:o[6],namespace:o[11]}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&128&&(l.parent=e[7]),n&64&&(l.parentNamespaceName=e[6]),n&2048&&(l.namespace=e[11]),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function ce(o){let t,r;return t=new ze({props:{first:o[8],previous:o[3],next:o[4],workflow:o[12],namespace:o[11]}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&256&&(l.first=e[8]),n&8&&(l.previous=e[3]),n&16&&(l.next=e[4]),n&4096&&(l.workflow=e[12]),n&2048&&(l.namespace=e[11]),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function ue(o){let t,r;return t=new Se({props:{children:o[5],pendingChildren:o[0].workflow.pendingChildren,namespace:o[1].params.namespace}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},p(e,n){const l={};n&32&&(l.children=e[5]),n&1&&(l.pendingChildren=e[0].workflow.pendingChildren),n&2&&(l.namespace=e[1].params.namespace),t.$set(l)},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function it(o){let t,r,e,n;const l=[ut,ct],c=[];function f(s,a){return s[9]?0:1}return r=f(o),e=c[r]=l[r](o),{c(){t=v("div"),e.c(),this.h()},l(s){t=N(s,"DIV",{class:!0});var a=C(t);e.l(a),a.forEach(i),this.h()},h(){y(t,"class","flex flex-col gap-4")},m(s,a){g(s,t,a),c[r].m(t,null),n=!0},p(s,[a]){let u=r;r=f(s),r===u?c[r].p(s,a):(j(),_(c[u],1,1,()=>{c[u]=null}),q(),e=c[r],e?e.p(s,a):(e=c[r]=l[r](s),e.c()),p(e,1),e.m(t,null))},i(s){n||(p(e),n=!0)},o(s){_(e),n=!1},d(s){s&&i(t),c[r].d()}}}function mt(o,t,r){let e,n,l,c,f,s,a,u,m,$,D,L,w,h,E,H,O;return Q(o,we,V=>r(15,h=V)),Q(o,he,V=>r(16,E=V)),Q(o,ge,V=>r(0,H=V)),Q(o,ie,V=>r(1,O=V)),o.$$.update=()=>{o.$$.dirty&2&&r(12,{workflow:e,namespace:n}=O.params,e,(r(11,n),r(1,O))),o.$$.dirty&1&&r(14,{workflow:l}=H,l),o.$$.dirty&114688&&r(13,c=de(l,E,h)),o.$$.dirty&8192&&r(10,{hasChildren:f,hasRelationships:s,first:a,parent:u,parentNamespaceName:m,children:$,next:D,previous:L,scheduleId:w}=c,f,(r(9,s),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)),(r(8,a),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)),(r(7,u),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)),(r(6,m),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)),(r(5,$),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)),(r(4,D),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)),(r(3,L),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)),(r(2,w),r(13,c),r(14,l),r(16,E),r(15,h),r(0,H)))},[H,O,w,L,D,$,m,u,a,s,f,n,e,c,l,h,E]}class pt extends J{constructor(t){super(),K(this,t,mt,it,G,{})}}function $t(o){let t,r;return t=new pt({}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){b(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function _t(o){let t,r,e,n;return t=new pe({props:{title:`${T("workflows.relationships")} | ${o[1]}`,url:o[0].url.href}}),e=new ke({props:{$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment),r=W(),d(e.$$.fragment)},l(l){k(t.$$.fragment,l),r=A(l),k(e.$$.fragment,l)},m(l,c){b(t,l,c),g(l,r,c),b(e,l,c),n=!0},p(l,[c]){const f={};c&1&&(f.url=l[0].url.href),t.$set(f);const s={};c&4&&(s.$$scope={dirty:c,ctx:l}),e.$set(s)},i(l){n||(p(t.$$.fragment,l),p(e.$$.fragment,l),n=!0)},o(l){_(t.$$.fragment,l),_(e.$$.fragment,l),n=!1},d(l){l&&i(r),I(t,l),I(e,l)}}}function ht(o,t,r){let e;Q(o,ie,l=>r(0,e=l));const n=e.params.workflow;return[e,n]}class At extends J{constructor(t){super(),K(this,t,ht,_t,G,{})}}export{At as component};
