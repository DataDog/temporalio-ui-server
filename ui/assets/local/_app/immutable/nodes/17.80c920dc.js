import{a as dt}from"../chunks/namespaces-service.19bbf2f7.js";import{S as $t,i as ht,s as vt,y as K,a as I,k as p,q as w,e as Me,z as Q,c as C,l as m,m as _,r as g,h as s,n as V,A as X,b as T,F as f,u as M,g as F,d as G,f as mt,B as Y,C as Ve,o as Tt,W as Et,v as _t,a5 as bt,R as we}from"../chunks/index.bac36631.js";import{p as wt}from"../chunks/stores.3dbf2529.js";import{P as gt}from"../chunks/page-title.4413e49e.js";import{B as be}from"../chunks/badge.379095dc.js";import{C as Dt}from"../chunks/card.84aec97c.js";import{T as ze,a as At}from"../chunks/table-header-row.8972776e.js";import{T as Rt}from"../chunks/table-row.f3187468.js";import{t as N}from"../chunks/translate.d045ded2.js";import{l as ft}from"../chunks/namespaces.3c3a5412.js";import{s as kt}from"../chunks/search-attributes.545786a1.js";import{s as It}from"../chunks/settings.2d3d0ea9.js";import{t as Ct,u as St}from"../chunks/versions.5a6ade19.js";import{f as it}from"../chunks/format-time.d2ca65b6.js";const Ht=o=>{var t,a;const e=(t=o==null?void 0:o.replicationConfig)==null?void 0:t.clusters,l=(a=o==null?void 0:o.replicationConfig)==null?void 0:a.activeClusterName;return e!=null&&e.length?e.map(({clusterName:r})=>r===l?`${r} (active)`:r).join(", "):"Unknown"},Nt=async function({params:o,parent:e,url:l}){const{searchParams:t}=l;t.has("time-range")&&t.delete("time-range"),await e();const a=await dt(o.namespace),r=Ht(a);return{namespace:a,clusters:r}},vl=Object.freeze(Object.defineProperty({__proto__:null,load:Nt},Symbol.toStringTag,{value:"Module"}));function ct(o,e,l){const t=o.slice();return t[13]=e[l][0],t[14]=e[l][1],t}function Vt(o){var t;let e=((t=o[0])!=null&&t.isGlobalNamespace?N("common.yes"):N("common.no"))+"",l;return{c(){l=w(e)},l(a){l=g(a,e)},m(a,r){T(a,l,r)},p(a,r){var i;r&1&&e!==(e=((i=a[0])!=null&&i.isGlobalNamespace?N("common.yes"):N("common.no"))+"")&&M(l,e)},d(a){a&&s(l)}}}function Lt(o){var t,a;let e=((a=(t=o[0])==null?void 0:t.config)==null?void 0:a.historyArchivalState)+"",l;return{c(){l=w(e)},l(r){l=g(r,e)},m(r,i){T(r,l,i)},p(r,i){var u,n;i&1&&e!==(e=((n=(u=r[0])==null?void 0:u.config)==null?void 0:n.historyArchivalState)+"")&&M(l,e)},d(r){r&&s(l)}}}function yt(o){var t,a;let e=((a=(t=o[0])==null?void 0:t.config)==null?void 0:a.visibilityArchivalState)+"",l;return{c(){l=w(e)},l(r){l=g(r,e)},m(r,i){T(r,l,i)},p(r,i){var u,n;i&1&&e!==(e=((n=(u=r[0])==null?void 0:u.config)==null?void 0:n.visibilityArchivalState)+"")&&M(l,e)},d(r){r&&s(l)}}}function Bt(o){var Je,Ke,Qe,Xe,Ye,Ze,xe,et,tt,lt;let e,l,t=N("namespaces.owner")+"",a,r,i,u=(((Ke=(Je=o[0])==null?void 0:Je.namespaceInfo)==null?void 0:Ke.ownerEmail)||N("common.unknown"))+"",n,c,E,y,O=N("namespaces.global")+"",B,k,D,h,P,b,z,j=N("namespaces.retention-period")+"",Z,A,S,q=it((Xe=(Qe=o[0])==null?void 0:Qe.config)==null?void 0:Xe.workflowExecutionRetentionTtl.toString())+"",d,R,U,x,me=N("namespaces.history-archival")+"",ae,ee,te,W,le,se,_e,Ie=N("namespaces.visibility-archival")+"",de,re,ie,$,H,J,oe,fe=N("namespaces.failover-version")+"",ce,ue,pe,he=(((Ye=o[0])==null?void 0:Ye.failoverVersion)||"")+"",ge,$e,ne,ve,De=N("namespaces.clusters")+"",Ce,Se,Le,We,Te;return h=new be({props:{class:"px-1 py-0",type:o[8]((Ze=o[0])==null?void 0:Ze.isGlobalNamespace,!1),$$slots:{default:[Vt]},$$scope:{ctx:o}}}),W=new be({props:{class:"px-1 py-0",type:o[7]((et=(xe=o[0])==null?void 0:xe.config)==null?void 0:et.historyArchivalState),$$slots:{default:[Lt]},$$scope:{ctx:o}}}),$=new be({props:{class:"px-1 py-0",type:o[7]((lt=(tt=o[0])==null?void 0:tt.config)==null?void 0:lt.visibilityArchivalState),$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){e=p("tr"),l=p("td"),a=w(t),r=I(),i=p("td"),n=w(u),c=I(),E=p("tr"),y=p("td"),B=w(O),k=I(),D=p("td"),K(h.$$.fragment),P=I(),b=p("tr"),z=p("td"),Z=w(j),A=I(),S=p("td"),d=w(q),R=I(),U=p("tr"),x=p("td"),ae=w(me),ee=I(),te=p("td"),K(W.$$.fragment),le=I(),se=p("tr"),_e=p("td"),de=w(Ie),re=I(),ie=p("td"),K($.$$.fragment),H=I(),J=p("tr"),oe=p("td"),ce=w(fe),ue=I(),pe=p("td"),ge=w(he),$e=I(),ne=p("tr"),ve=p("td"),Ce=w(De),Se=I(),Le=p("td"),We=w(o[1]),this.h()},l(v){e=m(v,"TR",{"data-testid":!0});var L=_(e);l=m(L,"TD",{});var He=_(l);a=g(He,t),He.forEach(s),r=C(L),i=m(L,"TD",{});var Ne=_(i);n=g(Ne,u),Ne.forEach(s),L.forEach(s),c=C(v),E=m(v,"TR",{"data-testid":!0});var Ee=_(E);y=m(Ee,"TD",{});var ye=_(y);B=g(ye,O),ye.forEach(s),k=C(Ee),D=m(Ee,"TD",{});var Be=_(D);Q(h.$$.fragment,Be),Be.forEach(s),Ee.forEach(s),P=C(v),b=m(v,"TR",{"data-testid":!0});var Ae=_(b);z=m(Ae,"TD",{});var Pe=_(z);Z=g(Pe,j),Pe.forEach(s),A=C(Ae),S=m(Ae,"TD",{});var Oe=_(S);d=g(Oe,q),Oe.forEach(s),Ae.forEach(s),R=C(v),U=m(v,"TR",{"data-testid":!0});var Re=_(U);x=m(Re,"TD",{});var Ue=_(x);ae=g(Ue,me),Ue.forEach(s),ee=C(Re),te=m(Re,"TD",{});var Fe=_(te);Q(W.$$.fragment,Fe),Fe.forEach(s),Re.forEach(s),le=C(v),se=m(v,"TR",{"data-testid":!0});var ke=_(se);_e=m(ke,"TD",{});var je=_(_e);de=g(je,Ie),je.forEach(s),re=C(ke),ie=m(ke,"TD",{});var at=_(ie);Q($.$$.fragment,at),at.forEach(s),ke.forEach(s),H=C(v),J=m(v,"TR",{"data-testid":!0});var Ge=_(J);oe=m(Ge,"TD",{});var st=_(oe);ce=g(st,fe),st.forEach(s),ue=C(Ge),pe=m(Ge,"TD",{});var rt=_(pe);ge=g(rt,he),rt.forEach(s),Ge.forEach(s),$e=C(v),ne=m(v,"TR",{"data-testid":!0});var qe=_(ne);ve=m(qe,"TD",{});var ot=_(ve);Ce=g(ot,De),ot.forEach(s),Se=C(qe),Le=m(qe,"TD",{});var nt=_(Le);We=g(nt,o[1]),nt.forEach(s),qe.forEach(s),this.h()},h(){V(e,"data-testid","namespace-owner"),V(E,"data-testid","namespace-global"),V(b,"data-testid","namespace-retention"),V(U,"data-testid","namespace-history"),V(se,"data-testid","namespace-visibility"),V(J,"data-testid","namespace-failover"),V(ne,"data-testid","namespace-clusters")},m(v,L){T(v,e,L),f(e,l),f(l,a),f(e,r),f(e,i),f(i,n),T(v,c,L),T(v,E,L),f(E,y),f(y,B),f(E,k),f(E,D),X(h,D,null),T(v,P,L),T(v,b,L),f(b,z),f(z,Z),f(b,A),f(b,S),f(S,d),T(v,R,L),T(v,U,L),f(U,x),f(x,ae),f(U,ee),f(U,te),X(W,te,null),T(v,le,L),T(v,se,L),f(se,_e),f(_e,de),f(se,re),f(se,ie),X($,ie,null),T(v,H,L),T(v,J,L),f(J,oe),f(oe,ce),f(J,ue),f(J,pe),f(pe,ge),T(v,$e,L),T(v,ne,L),f(ne,ve),f(ve,Ce),f(ne,Se),f(ne,Le),f(Le,We),Te=!0},p(v,L){var ye,Be,Ae,Pe,Oe,Re,Ue,Fe,ke,je;(!Te||L&1)&&u!==(u=(((Be=(ye=v[0])==null?void 0:ye.namespaceInfo)==null?void 0:Be.ownerEmail)||N("common.unknown"))+"")&&M(n,u);const He={};L&1&&(He.type=v[8]((Ae=v[0])==null?void 0:Ae.isGlobalNamespace,!1)),L&131073&&(He.$$scope={dirty:L,ctx:v}),h.$set(He),(!Te||L&1)&&q!==(q=it((Oe=(Pe=v[0])==null?void 0:Pe.config)==null?void 0:Oe.workflowExecutionRetentionTtl.toString())+"")&&M(d,q);const Ne={};L&1&&(Ne.type=v[7]((Ue=(Re=v[0])==null?void 0:Re.config)==null?void 0:Ue.historyArchivalState)),L&131073&&(Ne.$$scope={dirty:L,ctx:v}),W.$set(Ne);const Ee={};L&1&&(Ee.type=v[7]((ke=(Fe=v[0])==null?void 0:Fe.config)==null?void 0:ke.visibilityArchivalState)),L&131073&&(Ee.$$scope={dirty:L,ctx:v}),$.$set(Ee),(!Te||L&1)&&he!==(he=(((je=v[0])==null?void 0:je.failoverVersion)||"")+"")&&M(ge,he),(!Te||L&2)&&M(We,v[1])},i(v){Te||(F(h.$$.fragment,v),F(W.$$.fragment,v),F($.$$.fragment,v),Te=!0)},o(v){G(h.$$.fragment,v),G(W.$$.fragment,v),G($.$$.fragment,v),Te=!1},d(v){v&&s(e),v&&s(c),v&&s(E),Y(h),v&&s(P),v&&s(b),v&&s(R),v&&s(U),Y(W),v&&s(le),v&&s(se),Y($),v&&s(H),v&&s(J),v&&s($e),v&&s(ne)}}}function Pt(o){let e,l=`${N("namespaces.namespace")} ${N("common.details")}`,t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=m(a,"CAPTION",{class:!0,slot:!0});var r=_(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){T(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function Ot(o){let e,l,t;return{c(){e=p("tr"),l=p("th"),t=p("th"),this.h()},l(a){e=m(a,"TR",{slot:!0});var r=_(e);l=m(r,"TH",{class:!0}),_(l).forEach(s),t=m(r,"TH",{}),_(t).forEach(s),r.forEach(s),this.h()},h(){V(l,"class","w-1/2 lg:w-3/5"),V(e,"slot","headers")},m(a,r){T(a,e,r),f(e,l),f(e,t)},p:we,d(a){a&&s(e)}}}function Ut(o){let e,l,t,a,r,i,u,n,c,E,y,O,B;return{c(){e=p("tr"),l=p("td"),t=w("Temporal Server Version"),a=I(),r=p("td"),i=w(o[3]),u=I(),n=p("tr"),c=p("td"),E=w("Temporal UI Version"),y=I(),O=p("td"),B=w(o[4]),this.h()},l(k){e=m(k,"TR",{"data-testid":!0});var D=_(e);l=m(D,"TD",{});var h=_(l);t=g(h,"Temporal Server Version"),h.forEach(s),a=C(D),r=m(D,"TD",{});var P=_(r);i=g(P,o[3]),P.forEach(s),D.forEach(s),u=C(k),n=m(k,"TR",{"data-testid":!0});var b=_(n);c=m(b,"TD",{});var z=_(c);E=g(z,"Temporal UI Version"),z.forEach(s),y=C(b),O=m(b,"TD",{});var j=_(O);B=g(j,o[4]),j.forEach(s),b.forEach(s),this.h()},h(){V(e,"data-testid","server-version"),V(n,"data-testid","ui-version")},m(k,D){T(k,e,D),f(e,l),f(l,t),f(e,a),f(e,r),f(r,i),T(k,u,D),T(k,n,D),f(n,c),f(c,E),f(n,y),f(n,O),f(O,B)},p(k,D){D&8&&M(i,k[3]),D&16&&M(B,k[4])},d(k){k&&s(e),k&&s(u),k&&s(n)}}}function Ft(o){let e,l=N("namespaces.versions")+"",t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=m(a,"CAPTION",{class:!0,slot:!0});var r=_(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){T(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function jt(o){let e,l,t;return{c(){e=p("tr"),l=p("th"),t=p("th"),this.h()},l(a){e=m(a,"TR",{slot:!0});var r=_(e);l=m(r,"TH",{class:!0}),_(l).forEach(s),t=m(r,"TH",{}),_(t).forEach(s),r.forEach(s),this.h()},h(){V(l,"class","w-1/2 lg:w-3/4"),V(e,"slot","headers")},m(a,r){T(a,e,r),f(e,l),f(e,t)},p:we,d(a){a&&s(e)}}}function Wt(o){let e=o[9](o[5].disableWriteActions)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){T(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].disableWriteActions)+"")&&M(l,e)},d(t){t&&s(l)}}}function Gt(o){let e=o[9](o[5].workflowTerminateDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){T(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowTerminateDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function qt(o){let e=o[9](o[5].workflowCancelDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){T(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowCancelDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function zt(o){let e=o[9](o[5].workflowSignalDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){T(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowSignalDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function Mt(o){let e=o[9](o[5].workflowResetDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){T(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowResetDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function Jt(o){let e,l,t=N("namespaces.client-actions")+"",a,r,i,u,n,c,E,y=N("workflows.terminate-modal-title")+"",O,B,k,D,h,P,b,z=N("workflows.cancel-modal-title")+"",j,Z,A,S,q,d,R,U=N("namespaces.signal-workflow")+"",x,me,ae,ee,te,W,le,se=N("workflows.reset-modal-title")+"",_e,Ie,de,re,ie;return u=new be({props:{class:"px-1 py-0",type:o[8](o[5].disableWriteActions),$$slots:{default:[Wt]},$$scope:{ctx:o}}}),D=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowTerminateDisabled),$$slots:{default:[Gt]},$$scope:{ctx:o}}}),S=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowCancelDisabled),$$slots:{default:[qt]},$$scope:{ctx:o}}}),ee=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowSignalDisabled),$$slots:{default:[zt]},$$scope:{ctx:o}}}),re=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowResetDisabled),$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){e=p("tr"),l=p("td"),a=w(t),r=I(),i=p("td"),K(u.$$.fragment),n=I(),c=p("tr"),E=p("td"),O=w(y),B=I(),k=p("td"),K(D.$$.fragment),h=I(),P=p("tr"),b=p("td"),j=w(z),Z=I(),A=p("td"),K(S.$$.fragment),q=I(),d=p("tr"),R=p("td"),x=w(U),me=I(),ae=p("td"),K(ee.$$.fragment),te=I(),W=p("tr"),le=p("td"),_e=w(se),Ie=I(),de=p("td"),K(re.$$.fragment)},l($){e=m($,"TR",{});var H=_(e);l=m(H,"TD",{});var J=_(l);a=g(J,t),J.forEach(s),r=C(H),i=m(H,"TD",{});var oe=_(i);Q(u.$$.fragment,oe),oe.forEach(s),H.forEach(s),n=C($),c=m($,"TR",{});var fe=_(c);E=m(fe,"TD",{});var ce=_(E);O=g(ce,y),ce.forEach(s),B=C(fe),k=m(fe,"TD",{});var ue=_(k);Q(D.$$.fragment,ue),ue.forEach(s),fe.forEach(s),h=C($),P=m($,"TR",{});var pe=_(P);b=m(pe,"TD",{});var he=_(b);j=g(he,z),he.forEach(s),Z=C(pe),A=m(pe,"TD",{});var ge=_(A);Q(S.$$.fragment,ge),ge.forEach(s),pe.forEach(s),q=C($),d=m($,"TR",{});var $e=_(d);R=m($e,"TD",{});var ne=_(R);x=g(ne,U),ne.forEach(s),me=C($e),ae=m($e,"TD",{});var ve=_(ae);Q(ee.$$.fragment,ve),ve.forEach(s),$e.forEach(s),te=C($),W=m($,"TR",{});var De=_(W);le=m(De,"TD",{});var Ce=_(le);_e=g(Ce,se),Ce.forEach(s),Ie=C(De),de=m(De,"TD",{});var Se=_(de);Q(re.$$.fragment,Se),Se.forEach(s),De.forEach(s)},m($,H){T($,e,H),f(e,l),f(l,a),f(e,r),f(e,i),X(u,i,null),T($,n,H),T($,c,H),f(c,E),f(E,O),f(c,B),f(c,k),X(D,k,null),T($,h,H),T($,P,H),f(P,b),f(b,j),f(P,Z),f(P,A),X(S,A,null),T($,q,H),T($,d,H),f(d,R),f(R,x),f(d,me),f(d,ae),X(ee,ae,null),T($,te,H),T($,W,H),f(W,le),f(le,_e),f(W,Ie),f(W,de),X(re,de,null),ie=!0},p($,H){const J={};H&32&&(J.type=$[8]($[5].disableWriteActions)),H&131104&&(J.$$scope={dirty:H,ctx:$}),u.$set(J);const oe={};H&32&&(oe.type=$[8]($[5].workflowTerminateDisabled)),H&131104&&(oe.$$scope={dirty:H,ctx:$}),D.$set(oe);const fe={};H&32&&(fe.type=$[8]($[5].workflowCancelDisabled)),H&131104&&(fe.$$scope={dirty:H,ctx:$}),S.$set(fe);const ce={};H&32&&(ce.type=$[8]($[5].workflowSignalDisabled)),H&131104&&(ce.$$scope={dirty:H,ctx:$}),ee.$set(ce);const ue={};H&32&&(ue.type=$[8]($[5].workflowResetDisabled)),H&131104&&(ue.$$scope={dirty:H,ctx:$}),re.$set(ue)},i($){ie||(F(u.$$.fragment,$),F(D.$$.fragment,$),F(S.$$.fragment,$),F(ee.$$.fragment,$),F(re.$$.fragment,$),ie=!0)},o($){G(u.$$.fragment,$),G(D.$$.fragment,$),G(S.$$.fragment,$),G(ee.$$.fragment,$),G(re.$$.fragment,$),ie=!1},d($){$&&s(e),Y(u),$&&s(n),$&&s(c),Y(D),$&&s(h),$&&s(P),Y(S),$&&s(q),$&&s(d),Y(ee),$&&s(te),$&&s(W),Y(re)}}}function Kt(o){let e,l=N("namespaces.client-actions")+"",t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=m(a,"CAPTION",{class:!0,slot:!0});var r=_(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){T(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function Qt(o){let e,l,t;return{c(){e=p("tr"),l=p("th"),t=p("th"),this.h()},l(a){e=m(a,"TR",{slot:!0});var r=_(e);l=m(r,"TH",{class:!0}),_(l).forEach(s),t=m(r,"TH",{}),_(t).forEach(s),r.forEach(s),this.h()},h(){V(l,"class","w-1/2 lg:w-3/5"),V(e,"slot","headers")},m(a,r){T(a,e,r),f(e,l),f(e,t)},p:we,d(a){a&&s(e)}}}function Xt(o){let e,l,t=N("common.details")+"",a,r,i,u,n,c,E=N("namespaces.versions")+"",y,O,B,k,D,h,P=N("namespaces.client-actions")+"",b,z,j,Z;return i=new ze({props:{variant:"simple",$$slots:{headers:[Ot],caption:[Pt],default:[Bt]},$$scope:{ctx:o}}}),B=new ze({props:{variant:"simple",$$slots:{headers:[jt],caption:[Ft],default:[Ut]},$$scope:{ctx:o}}}),j=new ze({props:{variant:"simple",$$slots:{headers:[Qt],caption:[Kt],default:[Jt]},$$scope:{ctx:o}}}),{c(){e=p("article"),l=p("h3"),a=w(t),r=I(),K(i.$$.fragment),u=I(),n=p("article"),c=p("h3"),y=w(E),O=I(),K(B.$$.fragment),k=I(),D=p("article"),h=p("h3"),b=w(P),z=I(),K(j.$$.fragment),this.h()},l(A){e=m(A,"ARTICLE",{class:!0});var S=_(e);l=m(S,"H3",{class:!0});var q=_(l);a=g(q,t),q.forEach(s),r=C(S),Q(i.$$.fragment,S),S.forEach(s),u=C(A),n=m(A,"ARTICLE",{class:!0});var d=_(n);c=m(d,"H3",{class:!0});var R=_(c);y=g(R,E),R.forEach(s),O=C(d),Q(B.$$.fragment,d),d.forEach(s),k=C(A),D=m(A,"ARTICLE",{class:!0});var U=_(D);h=m(U,"H3",{class:!0});var x=_(h);b=g(x,P),x.forEach(s),z=C(U),Q(j.$$.fragment,U),U.forEach(s),this.h()},h(){V(l,"class","text-lg font-medium"),V(e,"class","namespace-info flex w-full flex-col"),V(c,"class","text-lg font-medium"),V(n,"class","namespace-info flex w-full flex-col"),V(h,"class","text-lg font-medium"),V(D,"class","namespace-info flex w-full flex-col")},m(A,S){T(A,e,S),f(e,l),f(l,a),f(e,r),X(i,e,null),T(A,u,S),T(A,n,S),f(n,c),f(c,y),f(n,O),X(B,n,null),T(A,k,S),T(A,D,S),f(D,h),f(h,b),f(D,z),X(j,D,null),Z=!0},p(A,S){const q={};S&131075&&(q.$$scope={dirty:S,ctx:A}),i.$set(q);const d={};S&131096&&(d.$$scope={dirty:S,ctx:A}),B.$set(d);const R={};S&131104&&(R.$$scope={dirty:S,ctx:A}),j.$set(R)},i(A){Z||(F(i.$$.fragment,A),F(B.$$.fragment,A),F(j.$$.fragment,A),Z=!0)},o(A){G(i.$$.fragment,A),G(B.$$.fragment,A),G(j.$$.fragment,A),Z=!1},d(A){A&&s(e),Y(i),A&&s(u),A&&s(n),Y(B),A&&s(k),A&&s(D),Y(j)}}}function ut(o){let e,l,t=N("events.attribute-group.search-attributes")+"",a,r,i,u;return i=new ze({props:{class:"w-full",$$slots:{headers:[tl],caption:[xt],default:[Zt]},$$scope:{ctx:o}}}),{c(){e=p("section"),l=p("h3"),a=w(t),r=I(),K(i.$$.fragment),this.h()},l(n){e=m(n,"SECTION",{});var c=_(e);l=m(c,"H3",{class:!0});var E=_(l);a=g(E,t),E.forEach(s),r=C(c),Q(i.$$.fragment,c),c.forEach(s),this.h()},h(){V(l,"class","my-4 text-lg font-medium")},m(n,c){T(n,e,c),f(e,l),f(l,a),f(e,r),X(i,e,null),u=!0},p(n,c){const E={};c&131136&&(E.$$scope={dirty:c,ctx:n}),i.$set(E)},i(n){u||(F(i.$$.fragment,n),u=!0)},o(n){G(i.$$.fragment,n),u=!1},d(n){n&&s(e),Y(i)}}}function Yt(o){let e,l=o[13]+"",t,a,r,i=o[14]+"",u,n;return{c(){e=p("td"),t=w(l),a=I(),r=p("td"),u=w(i),n=I()},l(c){e=m(c,"TD",{});var E=_(e);t=g(E,l),E.forEach(s),a=C(c),r=m(c,"TD",{});var y=_(r);u=g(y,i),y.forEach(s),n=C(c)},m(c,E){T(c,e,E),f(e,t),T(c,a,E),T(c,r,E),f(r,u),T(c,n,E)},p(c,E){E&64&&l!==(l=c[13]+"")&&M(t,l),E&64&&i!==(i=c[14]+"")&&M(u,i)},d(c){c&&s(e),c&&s(a),c&&s(r),c&&s(n)}}}function pt(o){let e,l;return e=new Rt({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),{c(){K(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p(t,a){const r={};a&131136&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Zt(o){let e,l,t=Object.entries(o[6]),a=[];for(let i=0;i<t.length;i+=1)a[i]=pt(ct(o,t,i));const r=i=>G(a[i],1,1,()=>{a[i]=null});return{c(){for(let i=0;i<a.length;i+=1)a[i].c();e=Me()},l(i){for(let u=0;u<a.length;u+=1)a[u].l(i);e=Me()},m(i,u){for(let n=0;n<a.length;n+=1)a[n].m(i,u);T(i,e,u),l=!0},p(i,u){if(u&64){t=Object.entries(i[6]);let n;for(n=0;n<t.length;n+=1){const c=ct(i,t,n);a[n]?(a[n].p(c,u),F(a[n],1)):(a[n]=pt(c),a[n].c(),F(a[n],1),a[n].m(e.parentNode,e))}for(_t(),n=t.length;n<a.length;n+=1)r(n);mt()}},i(i){if(!l){for(let u=0;u<t.length;u+=1)F(a[u]);l=!0}},o(i){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)G(a[u]);l=!1},d(i){bt(a,i),i&&s(e)}}}function xt(o){let e,l=N("events.attribute-group.search-attributes")+"",t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=m(a,"CAPTION",{class:!0,slot:!0});var r=_(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){T(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function el(o){let e,l=N("common.key")+"",t,a,r,i=N("common.type")+"",u;return{c(){e=p("th"),t=w(l),a=I(),r=p("th"),u=w(i)},l(n){e=m(n,"TH",{});var c=_(e);t=g(c,l),c.forEach(s),a=C(n),r=m(n,"TH",{});var E=_(r);u=g(E,i),E.forEach(s)},m(n,c){T(n,e,c),f(e,t),T(n,a,c),T(n,r,c),f(r,u)},p:we,d(n){n&&s(e),n&&s(a),n&&s(r)}}}function tl(o){let e,l;return e=new At({props:{slot:"headers",$$slots:{default:[el]},$$scope:{ctx:o}}}),{c(){K(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p(t,a){const r={};a&131072&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function ll(o){var z,j,Z,A,S,q;let e,l,t,a=N("namespaces.namespace")+"",r,i,u=((j=(z=o[0])==null?void 0:z.namespaceInfo)==null?void 0:j.name)+"",n,c,E,y=(((A=(Z=o[0])==null?void 0:Z.namespaceInfo)==null?void 0:A.description)||"")+"",O,B,k,D,h,P;e=new gt({props:{title:`${N("namespaces.namespace")} | ${(q=(S=o[0])==null?void 0:S.namespaceInfo)==null?void 0:q.name}`,url:o[2].url.href}}),k=new Dt({props:{class:"flex flex-col gap-4 lg:flex-row",$$slots:{default:[Xt]},$$scope:{ctx:o}}});let b=o[6]&&ut(o);return{c(){K(e.$$.fragment),l=I(),t=p("h1"),r=w(a),i=w(": "),n=w(u),c=I(),E=p("h2"),O=w(y),B=I(),K(k.$$.fragment),D=I(),b&&b.c(),h=Me(),this.h()},l(d){Q(e.$$.fragment,d),l=C(d),t=m(d,"H1",{class:!0,"data-testid":!0});var R=_(t);r=g(R,a),i=g(R,": "),n=g(R,u),R.forEach(s),c=C(d),E=m(d,"H2",{"data-testid":!0});var U=_(E);O=g(U,y),U.forEach(s),B=C(d),Q(k.$$.fragment,d),D=C(d),b&&b.l(d),h=Me(),this.h()},h(){V(t,"class","text-2xl"),V(t,"data-testid","namespace-title"),V(E,"data-testid","namespace-description")},m(d,R){X(e,d,R),T(d,l,R),T(d,t,R),f(t,r),f(t,i),f(t,n),T(d,c,R),T(d,E,R),f(E,O),T(d,B,R),X(k,d,R),T(d,D,R),b&&b.m(d,R),T(d,h,R),P=!0},p(d,[R]){var me,ae,ee,te,W,le;const U={};R&1&&(U.title=`${N("namespaces.namespace")} | ${(ae=(me=d[0])==null?void 0:me.namespaceInfo)==null?void 0:ae.name}`),R&4&&(U.url=d[2].url.href),e.$set(U),(!P||R&1)&&u!==(u=((te=(ee=d[0])==null?void 0:ee.namespaceInfo)==null?void 0:te.name)+"")&&M(n,u),(!P||R&1)&&y!==(y=(((le=(W=d[0])==null?void 0:W.namespaceInfo)==null?void 0:le.description)||"")+"")&&M(O,y);const x={};R&131131&&(x.$$scope={dirty:R,ctx:d}),k.$set(x),d[6]?b?(b.p(d,R),R&64&&F(b,1)):(b=ut(d),b.c(),F(b,1),b.m(h.parentNode,h)):b&&(_t(),G(b,1,1,()=>{b=null}),mt())},i(d){P||(F(e.$$.fragment,d),F(k.$$.fragment,d),F(b),P=!0)},o(d){G(e.$$.fragment,d),G(k.$$.fragment,d),G(b),P=!1},d(d){Y(e,d),d&&s(l),d&&s(t),d&&s(c),d&&s(E),d&&s(B),Y(k,d),d&&s(D),b&&b.d(d),d&&s(h)}}}function al(o,e,l){let t,a,r,i,u,n,c,E;Ve(o,ft,h=>l(12,r=h)),Ve(o,wt,h=>l(2,i=h)),Ve(o,Ct,h=>l(3,u=h)),Ve(o,St,h=>l(4,n=h)),Ve(o,It,h=>l(5,c=h)),Ve(o,kt,h=>l(6,E=h));let{data:y}=e;var O;(function(h){h[h.ARCHIVAL_STATE_UNSPECIFIED=0]="ARCHIVAL_STATE_UNSPECIFIED",h[h.ARCHIVAL_STATE_DISABLED=1]="ARCHIVAL_STATE_DISABLED",h[h.ARCHIVAL_STATE_ENABLED=2]="ARCHIVAL_STATE_ENABLED"})(O||(O={}));const B=h=>h===O.ARCHIVAL_STATE_ENABLED?"green":"default",k=(h,P=!0)=>P?h?"default":"green":h?"green":"default",D=h=>h?N("common.disabled"):N("common.enabled");return Tt(()=>{var h;Et(ft,r=(h=t==null?void 0:t.namespaceInfo)===null||h===void 0?void 0:h.name,r)}),o.$$set=h=>{"data"in h&&l(10,y=h.data)},o.$$.update=()=>{o.$$.dirty&1024&&l(0,{namespace:t,clusters:a}=y,t,(l(1,a),l(10,y)))},[t,a,i,u,n,c,E,B,k,D,y]}class Tl extends $t{constructor(e){super(),ht(this,e,al,ll,vt,{data:10})}}export{Tl as component,vl as universal};
