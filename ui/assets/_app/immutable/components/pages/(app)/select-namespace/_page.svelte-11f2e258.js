import{S as he,i as me,s as pe,k as N,l as S,m as V,h as b,p as C,av as le,aa as ve,b as A,K as y,ap as be,R as X,g as se,ac as ke,ad as we,d as re,f as H,t as U,o as ye,F as Ee,a as M,c as F,G as Te,H as Ie,I as Le,A as ee,Z as ae,q as x,r as $,w as q,x as G,n as T,y as J,W as ne,U as Ne,z as K,D as Se,J as te,a2 as Ve,O as He,B as ge,e as oe,Q as j,u as Ue}from"../../../../chunks/index-3630b6f8.js";import{g as Re}from"../../../../chunks/navigation-84b4244d.js";import{p as We}from"../../../../chunks/stores-4e1b824b.js";import{l as ie,n as ze}from"../../../../chunks/namespaces-c21a8365.js";import{r as Oe}from"../../../../chunks/route-for-9e2a964e.js";import{E as de}from"../../../../chunks/empty-state-6c379cd5.js";import{I as Pe}from"../../../../chunks/icon-a76a7fcc.js";import{P as Ae}from"../../../../chunks/page-title-e9267ce5.js";import{d as Ce}from"../../../../chunks/workflow-service-13a2cb12.js";import{t as Me}from"../../../../chunks/toaster-ae3b14ff.js";function ce(s,e,t){const l=s.slice();return l[23]=e[t],l}const Fe=s=>({item:s&16}),ue=s=>({item:s[23].data});function Be(s){let e;return{c(){e=x("Missing template")},l(t){e=$(t,"Missing template")},m(t,l){A(t,e,l)},d(t){t&&b(e)}}}function _e(s,e){let t,l,o;const h=e[14].default,f=Ee(h,e,e[13],ue),_=f||Be();return{key:s,first:null,c(){t=N("svelte-virtual-list-row"),_&&_.c(),l=M(),this.h()},l(r){t=S(r,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var n=V(t);_&&_.l(n),l=F(n),n.forEach(b),this.h()},h(){le(t,"class","svelte-1kdxoed"),this.first=t},m(r,n){A(r,t,n),_&&_.m(t,null),y(t,l),o=!0},p(r,n){e=r,f&&f.p&&(!o||n&8208)&&Te(f,h,e,e[13],o?Le(h,e[13],n,Fe):Ie(e[13]),ue)},i(r){o||(H(_,r),o=!0)},o(r){U(_,r),o=!1},d(r){r&&b(t),_&&_.d(r)}}}function De(s){let e,t,l=[],o=new Map,h,f,_,r,n=s[4];const m=c=>c[23].index;for(let c=0;c<n.length;c+=1){let i=ce(s,n,c),u=m(i);o.set(u,l[c]=_e(u,i))}return{c(){e=N("svelte-virtual-list-viewport"),t=N("svelte-virtual-list-contents");for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){e=S(c,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var i=V(e);t=S(i,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var u=V(t);for(let p=0;p<l.length;p+=1)l[p].l(u);u.forEach(b),i.forEach(b),this.h()},h(){C(t,"padding-top",s[5]+"px"),C(t,"padding-bottom",s[6]+"px"),le(t,"class","svelte-1kdxoed"),C(e,"height",s[0]),le(e,"class","svelte-1kdxoed"),ve(()=>s[17].call(e))},m(c,i){A(c,e,i),y(e,t);for(let u=0;u<l.length;u+=1)l[u].m(t,null);s[15](t),s[16](e),h=be(e,s[17].bind(e)),f=!0,_||(r=X(e,"scroll",s[7]),_=!0)},p(c,[i]){i&8208&&(n=c[4],se(),l=ke(l,i,m,1,c,n,o,t,we,_e,null,ce),re()),(!f||i&32)&&C(t,"padding-top",c[5]+"px"),(!f||i&64)&&C(t,"padding-bottom",c[6]+"px"),(!f||i&1)&&C(e,"height",c[0])},i(c){if(!f){for(let i=0;i<n.length;i+=1)H(l[i]);f=!0}},o(c){for(let i=0;i<l.length;i+=1)U(l[i]);f=!1},d(c){c&&b(e);for(let i=0;i<l.length;i+=1)l[i].d();s[15](null),s[16](null),h(),_=!1,r()}}}function qe(s,e,t){let{$$slots:l={},$$scope:o}=e,{items:h}=e,{height:f="100%"}=e,{itemHeight:_=void 0}=e,{start:r=0}=e,{end:n=0}=e,m=[],c,i,u,p=0,z,I,k=0,w=0,L;async function B(a,g,v){const{scrollTop:E}=i;await ee();let W=k-E,d=r;for(;W<g&&d<a.length;){let D=c[d-r];D||(t(9,n=d+1),await ee(),D=c[d-r]);const P=m[d]=v||D.offsetHeight;W+=P,d+=1}t(9,n=d);const O=a.length-n;L=(k+W)/n,t(6,w=O*L),m.length=a.length}async function Q(){const{scrollTop:a}=i,g=r;for(let d=0;d<c.length;d+=1)m[r+d]=_||c[d].offsetHeight;let v=0,E=0;for(;v<h.length;){const d=m[v]||L;if(E+d>a){t(8,r=v),t(5,k=E);break}E+=d,v+=1}for(;v<h.length&&(E+=m[v]||L,v+=1,!(E>a+p)););t(9,n=v);const W=h.length-n;for(L=E/n;v<h.length;)m[v++]=L;if(t(6,w=W*L),r<g){await ee();let d=0,O=0;for(let P=r;P<g;P+=1)c[P-r]&&(d+=m[P],O+=_||c[P-r].offsetHeight);const D=O-d;i.scrollTo(0,a+D)}}ye(()=>{c=u.getElementsByTagName("svelte-virtual-list-row"),t(12,I=!0)});function Y(a){ae[a?"unshift":"push"](()=>{u=a,t(3,u)})}function R(a){ae[a?"unshift":"push"](()=>{i=a,t(2,i)})}function Z(){p=this.offsetHeight,t(1,p)}return s.$$set=a=>{"items"in a&&t(10,h=a.items),"height"in a&&t(0,f=a.height),"itemHeight"in a&&t(11,_=a.itemHeight),"start"in a&&t(8,r=a.start),"end"in a&&t(9,n=a.end),"$$scope"in a&&t(13,o=a.$$scope)},s.$$.update=()=>{s.$$.dirty&1792&&t(4,z=h.slice(r,n).map((a,g)=>({index:g+r,data:a}))),s.$$.dirty&7170&&I&&B(h,p,_)},[f,p,i,u,z,k,w,Q,r,n,h,_,I,o,l,Y,R,Z]}class Ge extends he{constructor(e){super(),me(this,e,qe,De,pe,{items:10,height:0,itemHeight:11,start:8,end:9})}}function fe(s){const e=s[10]===s[2][0];s[11]=e;const t=s[10]===s[2][s[2].length-1];s[12]=t}function Je(s){let e,t;return e=new de({props:{title:"No Namespaces. Contact your admin to create one."}}),{c(){q(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,o){J(e,l,o),t=!0},p:ge,i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function Ke(s){let e,t,l,o;const h=[Ye,Qe],f=[];function _(r,n){return r[2].length?0:1}return e=_(s),t=f[e]=h[e](s),{c(){t.c(),l=oe()},l(r){t.l(r),l=oe()},m(r,n){f[e].m(r,n),A(r,l,n),o=!0},p(r,n){let m=e;e=_(r),e===m?f[e].p(r,n):(se(),U(f[m],1,1,()=>{f[m]=null}),re(),t=f[e],t?t.p(r,n):(t=f[e]=h[e](r),t.c()),H(t,1),t.m(l.parentNode,l))},i(r){o||(H(t),o=!0)},o(r){U(t),o=!1},d(r){f[e].d(r),r&&b(l)}}}function Qe(s){let e,t;return e=new de({props:{title:"No results."}}),{c(){q(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,o){J(e,l,o),t=!0},p:ge,i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function Ye(s){let e,t;return e=new Ge({props:{items:s[2],itemHeight:50,$$slots:{default:[Ze,({item:l})=>({10:l}),({item:l})=>l?1024:0]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,o){J(e,l,o),t=!0},p(l,o){const h={};o&4&&(h.items=l[2]),o&9220&&(h.$$scope={dirty:o,ctx:l}),e.$set(h)},i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function Ze(s){fe(s);let e,t,l=s[10].namespace+"",o,h,f;function _(){return s[8](s[10])}return{c(){e=N("li"),t=N("button"),o=x(l),this.h()},l(r){e=S(r,"LI",{class:!0});var n=V(e);t=S(n,"BUTTON",{class:!0});var m=V(t);o=$(m,l),m.forEach(b),n.forEach(b),this.h()},h(){T(t,"class","w-full p-3 text-left"),T(e,"class","link-item svelte-1up00eb"),j(e,"first",s[11]),j(e,"last",s[12])},m(r,n){A(r,e,n),y(e,t),y(t,o),h||(f=X(t,"click",_),h=!0)},p(r,n){s=r,fe(s),n&1024&&l!==(l=s[10].namespace+"")&&Ue(o,l),n&1028&&j(e,"first",s[11]),n&1028&&j(e,"last",s[12])},d(r){r&&b(e),h=!1,f()}}}function je(s){let e,t,l,o,h,f,_,r,n,m,c,i,u,p,z,I,k,w,L,B,Q;e=new Ae({props:{title:"Select Namespace",url:s[3].url.href}}),i=new Pe({props:{name:"search"}});const Y=[Ke,Je],R=[];function Z(a,g){return a[1].length?0:1}return k=Z(s),w=R[k]=Y[k](s),{c(){q(e.$$.fragment),t=M(),l=N("div"),o=N("h1"),h=x("Welcome to Temporal"),f=M(),_=N("p"),r=x("Select a Namespace to get started."),n=M(),m=N("form"),c=N("div"),q(i.$$.fragment),u=M(),p=N("input"),z=M(),I=N("ul"),w.c(),this.h()},l(a){G(e.$$.fragment,a),t=F(a),l=S(a,"DIV",{class:!0});var g=V(l);o=S(g,"H1",{class:!0});var v=V(o);h=$(v,"Welcome to Temporal"),v.forEach(b),f=F(g),_=S(g,"P",{class:!0});var E=V(_);r=$(E,"Select a Namespace to get started."),E.forEach(b),n=F(g),m=S(g,"FORM",{class:!0,role:!0});var W=V(m);c=S(W,"DIV",{class:!0});var d=V(c);G(i.$$.fragment,d),d.forEach(b),u=F(W),p=S(W,"INPUT",{class:!0,placeholder:!0,type:!0}),W.forEach(b),z=F(g),I=S(g,"UL",{class:!0,"aria-label":!0});var O=V(I);w.l(O),O.forEach(b),g.forEach(b),this.h()},h(){T(o,"class","my-4 text-3xl"),T(_,"class","mb-8"),T(c,"class","ml-4 mr-2"),T(p,"class","w-full"),T(p,"placeholder","Search"),T(p,"type","search"),T(m,"class","search svelte-1up00eb"),T(m,"role","search"),T(I,"class","h-screen w-full"),T(I,"aria-label","namespaces"),T(l,"class","w-full p-8 xl:w-1/2")},m(a,g){J(e,a,g),A(a,t,g),A(a,l,g),y(l,o),y(o,h),y(l,f),y(l,_),y(_,r),y(l,n),y(l,m),y(m,c),J(i,c,null),y(m,u),y(m,p),ne(p,s[0]),y(l,z),y(l,I),R[k].m(I,null),L=!0,B||(Q=[X(p,"keydown",Ne(s[6])),X(p,"input",s[7])],B=!0)},p(a,[g]){const v={};g&8&&(v.url=a[3].url.href),e.$set(v),g&1&&ne(p,a[0]);let E=k;k=Z(a),k===E?R[k].p(a,g):(se(),U(R[E],1,1,()=>{R[E]=null}),re(),w=R[k],w?w.p(a,g):(w=R[k]=Y[k](a),w.c()),H(w,1),w.m(I,null))},i(a){L||(H(e.$$.fragment,a),H(i.$$.fragment,a),H(w),L=!0)},o(a){U(e.$$.fragment,a),U(i.$$.fragment,a),U(w),L=!1},d(a){K(e,a),a&&b(t),a&&b(l),K(i),R[k].d(),B=!1,Se(Q)}}}function Xe(s,e,t){let l,o,h,f,_,r;te(s,ie,u=>t(9,f=u)),te(s,ze,u=>t(5,_=u)),te(s,We,u=>t(3,r=u));let n="";function m(u){He.call(this,s,u)}function c(){n=this.value,t(0,n)}const i=u=>u==null?void 0:u.onClick(u.namespace);return s.$$.update=()=>{s.$$.dirty&32&&t(4,l=_.map(u=>{var p;return(p=u==null?void 0:u.namespaceInfo)===null||p===void 0?void 0:p.name})),s.$$.dirty&16&&t(1,o=l.map(u=>({namespace:u,onClick:async p=>{const{authorized:z}=await Ce(p);z?(Ve(ie,f=p,f),Re(Oe({namespace:p}))):Me.push({variant:"error",message:"You do not have access to this namespace."})}}))),s.$$.dirty&3&&t(2,h=o.filter(({namespace:u})=>u.includes(n)))},[n,o,h,r,l,_,m,c,i]}class it extends he{constructor(e){super(),me(this,e,Xe,je,pe,{})}}export{it as default};
