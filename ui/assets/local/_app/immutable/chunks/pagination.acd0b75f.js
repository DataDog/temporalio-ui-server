import{W as j,S as Xe,b as Ze,a as Qe,N as ce,A as Et,Y as jt,C as pe,D as Ie,E as we,U as Kt,a6 as Tt,Z as zt,j as k,g as R,F as ke,K as wt,O as je,G as ne,H as ie,I as oe,J as re,e as at,f as U,z as Ne,h as Ae,a7 as Vt,k as b,m as K,p as T,q as z,u as I,n as te,$ as st,c as Z,d as Q,R as fe,X as nt,L as p,am as Dt,T as ue,r as kt,a5 as it,ag as Ft,o as Lt,s as Mt,w as x,x as $,y as he}from"./index.c37b9eda.js";import{p as Ye}from"./stores.d38506fd.js";import{i as Bt,g as Ot}from"./navigation.f449ac5a.js";import{S as Ut,a as Wt}from"./simple-select.222a84ab.js";import{d as Ct,w as He}from"./index.169c571c.js";const Ht={keepFocus:!0,noScroll:!0},Fe=async({parameter:e,value:t,url:a,goto:l=Ot,allowEmpty:s=!1})=>{var o,n;const i=String(t);if(t?a.searchParams.set(e,i):s?a.searchParams.set(e,""):a.searchParams.delete(e),a.href!==window.location.href){const r=`/namespaces/${(n=(o=j(Ye))==null?void 0:o.params)==null?void 0:n.namespace}/workflows`;a.pathname===r&&await Bt(m=>m.pathname===r),l(a,Ht)}return t};function ot(e,t,a){const l=e.slice();return l[13]=t[a],l}function rt(e){let t,a;return t=new Wt({props:{value:e[13]}}),{c(){pe(t.$$.fragment)},l(l){Ie(t.$$.fragment,l)},m(l,s){we(t,l,s),a=!0},p(l,s){const i={};s&1&&(i.value=l[13]),t.$set(i)},i(l){a||(k(t.$$.fragment,l),a=!0)},o(l){R(t.$$.fragment,l),a=!1},d(l){ke(t,l)}}}function qt(e){let t,a,l=e[0].map(ft),s=[];for(let o=0;o<l.length;o+=1)s[o]=rt(ot(e,l,o));const i=o=>R(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();t=at()},l(o){for(let n=0;n<s.length;n+=1)s[n].l(o);t=at()},m(o,n){for(let u=0;u<s.length;u+=1)s[u].m(o,n);U(o,t,n),a=!0},p(o,n){if(n&1){l=o[0].map(ft);let u;for(u=0;u<l.length;u+=1){const r=ot(o,l,u);s[u]?(s[u].p(r,n),k(s[u],1)):(s[u]=rt(r),s[u].c(),k(s[u],1),s[u].m(t.parentNode,t))}for(Ne(),u=l.length;u<s.length;u+=1)i(u);Ae()}},i(o){if(!a){for(let n=0;n<l.length;n+=1)k(s[n]);a=!0}},o(o){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)R(s[n]);a=!1},d(o){Vt(s,o),o&&b(t)}}}function Gt(e){let t;const a=e[8].default,l=ne(a,e,e[10],null),s=l||qt(e);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,o){s&&s.m(i,o),t=!0},p(i,o){l?l.p&&(!t||o&1024)&&ie(l,a,i,i[10],t?re(a,i[10],o,null):oe(i[10]),null):s&&s.p&&(!t||o&1)&&s.p(i,t?o:-1)},i(i){t||(k(s,i),t=!0)},o(i){R(s,i),t=!1},d(i){s&&s.d(i)}}}function Jt(e){let t,a,l;const s=[{id:e[2]},e[4],{class:"border-[1px] border-gray-900 outline-none focus-visible:outline focus-visible:outline-blue-700"}];function i(n){e[9](n)}let o={$$slots:{default:[Gt]},$$scope:{ctx:e}};for(let n=0;n<s.length;n+=1)o=ce(o,s[n]);return e[1]!==void 0&&(o.value=e[1]),t=new Ut({props:o}),Et.push(()=>jt(t,"value",i)),t.$on("change",e[3]),{c(){pe(t.$$.fragment)},l(n){Ie(t.$$.fragment,n)},m(n,u){we(t,n,u),l=!0},p(n,[u]){const r=u&20?Kt(s,[u&4&&{id:n[2]},u&16&&Tt(n[4]),s[2]]):{};u&1025&&(r.$$scope={dirty:u,ctx:n}),!a&&u&2&&(a=!0,r.value=n[1],zt(()=>a=!1)),t.$set(r)},i(n){l||(k(t.$$.fragment,n),l=!0)},o(n){R(t.$$.fragment,n),l=!1},d(n){ke(t,n)}}}const ft=e=>e.toString();function Xt(e,t,a){let l;wt(e,Ye,w=>a(11,l=w));let{$$slots:s={},$$scope:i}=t,{label:o=null}=t,{value:n}=t,{options:u=[]}=t,{parameter:r=null}=t;const m=`${r||o}-filter`;let P=r&&l.url.searchParams.get(r)||n&&n.toString();const V=()=>{Fe({parameter:r,value:P,url:l.url}).then(w=>a(5,n=w))};function N(w){P=w,a(1,P)}return e.$$set=w=>{a(4,t=ce(ce({},t),je(w))),"label"in w&&a(6,o=w.label),"value"in w&&a(5,n=w.value),"options"in w&&a(0,u=w.options),"parameter"in w&&a(7,r=w.parameter),"$$scope"in w&&a(10,i=w.$$scope)},t=je(t),[u,P,m,V,t,n,o,r,s,N,i]}class Pt extends Xe{constructor(t){super(),Ze(this,t,Xt,Jt,Qe,{label:6,value:5,options:0,parameter:7})}}function Zt(e){let t,a;return{c(){t=K("div"),this.h()},l(l){t=T(l,"DIV",{class:!0}),z(t).forEach(b),this.h()},h(){I(t,"class",a="background-animate w-full rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 "+e[0].class+" svelte-1hpjfio")},m(l,s){U(l,t,s)},p(l,[s]){s&1&&a!==(a="background-animate w-full rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 "+l[0].class+" svelte-1hpjfio")&&I(t,"class",a)},i:te,o:te,d(l){l&&b(t)}}}function Qt(e,t,a){return e.$$set=l=>{a(0,t=ce(ce({},t),je(l)))},t=je(t),[t]}class Rt extends Xe{constructor(t){super(),Ze(this,t,Qt,Zt,Qe,{})}}const Se=100,Ke=["100","250","500"],Ee="per-page",ut=Ke[Ke.length-1],Le=(e,t)=>Math.floor(e/t)+1,Nt=(e,t,a)=>{if(isNaN(e)||e<=1)return 0;if(e>At(t,a)){const l=a.length-t;return l>0?l:0}return Math.floor(t*(e-1))},Yt=(e,t,a)=>{const l=Le(e,t);return Nt(l,t,a)},ct=(e,t)=>Math.min(e-1,t-1),At=(e,t)=>Math.ceil(t.length/e),qe=(e,t)=>isNaN(e)||e<0?0:e<t.length?e:t.length-1,Ge=(e,t)=>e>=t.length||e<0,yt=(e=[],t=Se,a=0)=>{t=St(t);const l=Yt(Je(a),t,e),s=He(t),i=He(l),o=He(void 0),n=_=>{s.set(Je(_))},u=()=>{i.update(_=>{const c=_+j(s);return Ge(c,e)?_:qe(c,e)})},r=()=>{i.update(_=>{const c=_-j(s);return qe(c,e)})},m=_=>{const c=j(s),d=Nt(Number(_),c,e),F=e.slice(d,d+c).length;return j(o)>F-1&&o.set(F-1),i.set(d)},O=_=>{const c=Le(Number(_),j(s));m(c)},P=_=>{for(let c=0;c<e.length;c++)if(_(e[c]))return c},V=_=>{const c=P(_);return Le(c,j(s))},N=_=>{const c=e.slice(j(i),j(i)+j(s)).length,d=ct(c,j(s));_<=d&&o.set(_)},w=()=>{const _=e.slice(j(i),j(i)+j(s)).length,c=ct(_,j(s));j(o)===void 0?o.set(0):j(o)<c&&o.set(j(o)+1)},A=()=>{const _=j(o)>=1?j(o)-1:0;o.set(_)},{subscribe:D}=Ct([i,s,o],([_,c,d])=>({items:e.slice(_,_+c),initialItem:e[0],hasPrevious:!Ge(_-c,e),hasNext:!Ge(_+c,e),startingIndex:_,endingIndex:qe(_+c-1,e),length:e.length,pageSize:c,currentPage:Le(_,c),totalPages:At(c,e),activeRowIndex:d}));return{subscribe:D,adjustPageSize:n,next:u,previous:r,jumpToPage:m,jumpToIndex:O,findIndex:P,findPage:V,nextRow:w,previousRow:A,setActiveRowIndex:N}},St=(e=Se)=>{const t=Je(e);return isNaN(t)||!t?Se:t},Je=(e=0)=>{const t=Number(e);return isNaN(t)||!t?0:Math.abs(t)},xt=({width:e,height:t,screenWidth:a,breakpoint:l=1279})=>e&&t&&a>l?`position: absolute; right: ${e+20}px; top: -${t+14}px`:"";const $t=e=>({visibleItems:e&128,initialItem:e&128,activeRowIndex:e&128,setActiveRowIndex:e&32}),_t=e=>({visibleItems:e[7].items,initialItem:e[7].initialItem,activeRowIndex:e[7].activeRowIndex,setActiveRowIndex:e[5].setActiveRowIndex}),el=e=>({visibleItems:e&128,initialItem:e&128,activeRowIndex:e&128,setActiveRowIndex:e&32}),mt=e=>({visibleItems:e[7].items,initialItem:e[7].initialItem,activeRowIndex:e[7].activeRowIndex,setActiveRowIndex:e[5].setActiveRowIndex}),tl=e=>({visibleItems:e&128,initialItem:e&128,activeRowIndex:e&128,setActiveRowIndex:e&32}),gt=e=>({visibleItems:e[7].items,initialItem:e[7].initialItem,activeRowIndex:e[7].activeRowIndex,setActiveRowIndex:e[5].setActiveRowIndex}),ll=e=>({visibleItems:e&128,initialItem:e&128,activeRowIndex:e&128,setActiveRowIndex:e&32}),dt=e=>({visibleItems:e[7].items,initialItem:e[7].initialItem,activeRowIndex:e[7].activeRowIndex,setActiveRowIndex:e[5].setActiveRowIndex}),al=e=>({visibleItems:e&128,initialItem:e&128,activeRowIndex:e&128,setActiveRowIndex:e&32}),bt=e=>({visibleItems:e[7].items,initialItem:e[7].initialItem,activeRowIndex:e[7].activeRowIndex,setActiveRowIndex:e[5].setActiveRowIndex}),sl=e=>({visibleItems:e&128,initialItem:e&128,activeRowIndex:e&128,setActiveRowIndex:e&32}),vt=e=>({visibleItems:e[7].items,initialItem:e[7].initialItem,activeRowIndex:e[7].activeRowIndex,setActiveRowIndex:e[5].setActiveRowIndex}),nl=e=>({visibleItems:e&128,initialItem:e&128,activeRowIndex:e&128,setActiveRowIndex:e&32}),ht=e=>({visibleItems:e[7].items,initialItem:e[7].initialItem,activeRowIndex:e[7].activeRowIndex,setActiveRowIndex:e[5].setActiveRowIndex});function pt(e){let t,a;return t=new Pt({props:{label:e[2],parameter:Ee,value:e[6],options:Ke}}),{c(){pe(t.$$.fragment)},l(l){Ie(t.$$.fragment,l)},m(l,s){we(t,l,s),a=!0},p(l,s){const i={};s&4&&(i.label=l[2]),s&64&&(i.value=l[6]),t.$set(i)},i(l){a||(k(t.$$.fragment,l),a=!0)},o(l){R(t.$$.fragment,l),a=!1},d(l){ke(t,l)}}}function il(e){let t=(e[7].length?e[7].startingIndex+1:0)+"",a,l,s=e[7].endingIndex+1+"",i,o,n=e[7].length+"",u;return{c(){a=x(t),l=x("–"),i=x(s),o=x(" of "),u=x(n)},l(r){a=$(r,t),l=$(r,"–"),i=$(r,s),o=$(r," of "),u=$(r,n)},m(r,m){U(r,a,m),U(r,l,m),U(r,i,m),U(r,o,m),U(r,u,m)},p(r,m){m&128&&t!==(t=(r[7].length?r[7].startingIndex+1:0)+"")&&he(a,t),m&128&&s!==(s=r[7].endingIndex+1+"")&&he(i,s),m&128&&n!==(n=r[7].length+"")&&he(u,n)},i:te,o:te,d(r){r&&b(a),r&&b(l),r&&b(i),r&&b(o),r&&b(u)}}}function ol(e){let t,a;return t=new Rt({props:{class:"block h-5 w-24"}}),{c(){pe(t.$$.fragment)},l(l){Ie(t.$$.fragment,l)},m(l,s){we(t,l,s),a=!0},p:te,i(l){a||(k(t.$$.fragment,l),a=!0)},o(l){R(t.$$.fragment,l),a=!1},d(l){ke(t,l)}}}function rl(e){let t,a,l,s,i,o,n,u,r,m,O,P,V,N,w;const A=[ol,il],D=[];function _(c,d){return c[1]?0:1}return n=_(e),u=D[n]=A[n](e),{c(){t=K("div"),a=K("button"),l=K("span"),i=Z(),o=K("p"),u.c(),r=Z(),m=K("button"),O=K("span"),this.h()},l(c){t=T(c,"DIV",{class:!0});var d=z(t);a=T(d,"BUTTON",{class:!0,"aria-label":!0});var F=z(a);l=T(F,"SPAN",{class:!0}),z(l).forEach(b),F.forEach(b),i=Q(d),o=T(d,"P",{});var ee=z(o);u.l(ee),ee.forEach(b),r=Q(d),m=T(d,"BUTTON",{class:!0,"aria-label":!0});var Y=z(m);O=T(Y,"SPAN",{class:!0}),z(O).forEach(b),Y.forEach(b),d.forEach(b),this.h()},h(){I(l,"class","arrow arrow-left svelte-1780ds3"),fe(l,"arrow-left-disabled",!e[7].hasPrevious),I(a,"class","caret svelte-1780ds3"),a.disabled=s=!e[7].hasPrevious,I(a,"aria-label","previous"),I(O,"class","arrow arrow-right svelte-1780ds3"),fe(O,"arrow-right-disabled",!e[7].hasNext),I(m,"class","caret svelte-1780ds3"),m.disabled=P=!e[7].hasNext,I(m,"aria-label","next"),I(t,"class","flex items-center justify-center gap-3")},m(c,d){U(c,t,d),p(t,a),p(a,l),p(t,i),p(t,o),D[n].m(o,null),p(t,r),p(t,m),p(m,O),V=!0,N||(w=[ue(a,"click",e[25]),ue(m,"click",e[26])],N=!0)},p(c,d){(!V||d&128)&&fe(l,"arrow-left-disabled",!c[7].hasPrevious),(!V||d&128&&s!==(s=!c[7].hasPrevious))&&(a.disabled=s);let F=n;n=_(c),n===F?D[n].p(c,d):(Ne(),R(D[F],1,1,()=>{D[F]=null}),Ae(),u=D[n],u?u.p(c,d):(u=D[n]=A[n](c),u.c()),k(u,1),u.m(o,null)),(!V||d&128)&&fe(O,"arrow-right-disabled",!c[7].hasNext),(!V||d&128&&P!==(P=!c[7].hasNext))&&(m.disabled=P)},i(c){V||(k(u),V=!0)},o(c){R(u),V=!1},d(c){c&&b(t),D[n].d(),N=!1,kt(w)}}}function It(e){let t,a;return t=new Pt({props:{label:e[2],parameter:Ee,value:e[6],options:Ke}}),{c(){pe(t.$$.fragment)},l(l){Ie(t.$$.fragment,l)},m(l,s){we(t,l,s),a=!0},p(l,s){const i={};s&4&&(i.label=l[2]),s&64&&(i.value=l[6]),t.$set(i)},i(l){a||(k(t.$$.fragment,l),a=!0)},o(l){R(t.$$.fragment,l),a=!1},d(l){ke(t,l)}}}function fl(e){let t=(e[7].length?e[7].startingIndex+1:0)+"",a,l,s=e[7].endingIndex+1+"",i,o,n=e[7].length+"",u;return{c(){a=x(t),l=x("–"),i=x(s),o=x(" of "),u=x(n)},l(r){a=$(r,t),l=$(r,"–"),i=$(r,s),o=$(r," of "),u=$(r,n)},m(r,m){U(r,a,m),U(r,l,m),U(r,i,m),U(r,o,m),U(r,u,m)},p(r,m){m&128&&t!==(t=(r[7].length?r[7].startingIndex+1:0)+"")&&he(a,t),m&128&&s!==(s=r[7].endingIndex+1+"")&&he(i,s),m&128&&n!==(n=r[7].length+"")&&he(u,n)},i:te,o:te,d(r){r&&b(a),r&&b(l),r&&b(i),r&&b(o),r&&b(u)}}}function ul(e){let t,a;return t=new Rt({props:{class:"block h-5 w-24"}}),{c(){pe(t.$$.fragment)},l(l){Ie(t.$$.fragment,l)},m(l,s){we(t,l,s),a=!0},p:te,i(l){a||(k(t.$$.fragment,l),a=!0)},o(l){R(t.$$.fragment,l),a=!1},d(l){ke(t,l)}}}function cl(e){let t,a,l,s,i,o,n,u,r,m,O,P,V,N,w,A,D,_,c,d,F,ee,Y,M,B,le,L,y,_e,Pe,me,ge,h,Re,Te;st(e[24]);const v=e[23]["action-top-left"],W=ne(v,e,e[22],ht),Me=e[23]["action-top-center"],C=ne(Me,e,e[22],vt);let S=!e[0]&&pt(e);const Be=e[23]["pagination-top"],ze=ne(Be,e,e[22],bt),H=ze||rl(e),Oe=e[23]["action-top-right"],q=ne(Oe,e,e[22],dt),Ue=e[23].default,G=ne(Ue,e,e[22],gt),We=e[23]["action-bottom-left"],J=ne(We,e,e[22],mt);let E=!e[0]&&It(e);const ye=[ul,fl],ae=[];function xe(f,g){return f[1]?0:1}M=xe(e),B=ae[M]=ye[M](e);const Ce=e[23]["action-bottom-right"],X=ne(Ce,e,e[22],_t);return{c(){t=K("div"),a=K("div"),l=K("div"),W&&W.c(),s=Z(),i=K("nav"),C&&C.c(),o=Z(),n=K("div"),S&&S.c(),u=Z(),H&&H.c(),r=Z(),q&&q.c(),P=Z(),G&&G.c(),V=Z(),N=K("nav"),J&&J.c(),w=Z(),A=K("div"),E&&E.c(),D=Z(),_=K("div"),c=K("button"),d=K("span"),ee=Z(),Y=K("p"),B.c(),le=Z(),L=K("button"),y=K("span"),Pe=Z(),X&&X.c(),this.h()},l(f){t=T(f,"DIV",{class:!0});var g=z(t);a=T(g,"DIV",{class:!0});var se=z(a);l=T(se,"DIV",{class:!0});var $e=z(l);W&&W.l($e),$e.forEach(b),s=Q(se),i=T(se,"NAV",{style:!0,class:!0,"aria-label":!0});var de=z(i);C&&C.l(de),o=Q(de),n=T(de,"DIV",{class:!0});var Ve=z(n);S&&S.l(Ve),u=Q(Ve),H&&H.l(Ve),Ve.forEach(b),r=Q(de),q&&q.l(de),de.forEach(b),se.forEach(b),P=Q(g),G&&G.l(g),V=Q(g),N=T(g,"NAV",{class:!0,"aria-label":!0});var De=z(N);J&&J.l(De),w=Q(De),A=T(De,"DIV",{class:!0});var be=z(A);E&&E.l(be),D=Q(be),_=T(be,"DIV",{class:!0});var ve=z(_);c=T(ve,"BUTTON",{class:!0,"aria-label":!0});var et=z(c);d=T(et,"SPAN",{class:!0}),z(d).forEach(b),et.forEach(b),ee=Q(ve),Y=T(ve,"P",{});var tt=z(Y);B.l(tt),tt.forEach(b),le=Q(ve),L=T(ve,"BUTTON",{class:!0,"aria-label":!0});var lt=z(L);y=T(lt,"SPAN",{class:!0}),z(y).forEach(b),lt.forEach(b),ve.forEach(b),Pe=Q(be),X&&X.l(be),be.forEach(b),De.forEach(b),g.forEach(b),this.h()},h(){I(l,"class","w-full"),I(n,"class","flex gap-4"),I(i,"style",e[8]),I(i,"class","flex flex-col items-end gap-4 md:flex-row min-w-fit"),I(i,"aria-label",m=e[12]["aria-label"]),st(()=>e[27].call(i)),I(a,"class","flex flex-col items-end lg:items-start gap-4 lg:flex-row justify-end"),I(d,"class","arrow arrow-left svelte-1780ds3"),fe(d,"arrow-left-disabled",!e[7].hasPrevious),I(c,"class","caret svelte-1780ds3"),c.disabled=F=!e[7].hasPrevious,I(c,"aria-label","previous"),I(y,"class","arrow arrow-right svelte-1780ds3"),fe(y,"arrow-right-disabled",!e[7].hasNext),I(L,"class","caret svelte-1780ds3"),L.disabled=_e=!e[7].hasNext,I(L,"aria-label","next"),I(_,"class","flex items-center justify-center gap-3"),I(A,"class","flex gap-4"),I(N,"class",me=nt(`flex ${e[13]["action-bottom-left"]?"justify-between":"justify-end"}`)+" svelte-1780ds3"),I(N,"aria-label",ge=e[12]["aria-label"]),I(t,"class","pagination relative mb-8 flex flex-col gap-4")},m(f,g){U(f,t,g),p(t,a),p(a,l),W&&W.m(l,null),p(a,s),p(a,i),C&&C.m(i,null),p(i,o),p(i,n),S&&S.m(n,null),p(n,u),H&&H.m(n,null),p(i,r),q&&q.m(i,null),O=Dt(i,e[27].bind(i)),p(t,P),G&&G.m(t,null),p(t,V),p(t,N),J&&J.m(N,null),p(N,w),p(N,A),E&&E.m(A,null),p(A,D),p(A,_),p(_,c),p(c,d),p(_,ee),p(_,Y),ae[M].m(Y,null),p(_,le),p(_,L),p(L,y),p(A,Pe),X&&X.m(A,null),h=!0,Re||(Te=[ue(window,"resize",e[10]),ue(window,"keydown",e[11]),ue(window,"resize",e[24]),ue(c,"click",e[28]),ue(L,"click",e[29])],Re=!0)},p(f,[g]){W&&W.p&&(!h||g&4194464)&&ie(W,v,f,f[22],h?re(v,f[22],g,nl):oe(f[22]),ht),C&&C.p&&(!h||g&4194464)&&ie(C,Me,f,f[22],h?re(Me,f[22],g,sl):oe(f[22]),vt),f[0]?S&&(Ne(),R(S,1,1,()=>{S=null}),Ae()):S?(S.p(f,g),g&1&&k(S,1)):(S=pt(f),S.c(),k(S,1),S.m(n,u)),ze?ze.p&&(!h||g&4194464)&&ie(ze,Be,f,f[22],h?re(Be,f[22],g,al):oe(f[22]),bt):H&&H.p&&(!h||g&162)&&H.p(f,h?g:-1),q&&q.p&&(!h||g&4194464)&&ie(q,Oe,f,f[22],h?re(Oe,f[22],g,ll):oe(f[22]),dt),(!h||g&256)&&I(i,"style",f[8]),(!h||g&4096&&m!==(m=f[12]["aria-label"]))&&I(i,"aria-label",m),G&&G.p&&(!h||g&4194464)&&ie(G,Ue,f,f[22],h?re(Ue,f[22],g,tl):oe(f[22]),gt),J&&J.p&&(!h||g&4194464)&&ie(J,We,f,f[22],h?re(We,f[22],g,el):oe(f[22]),mt),f[0]?E&&(Ne(),R(E,1,1,()=>{E=null}),Ae()):E?(E.p(f,g),g&1&&k(E,1)):(E=It(f),E.c(),k(E,1),E.m(A,D)),(!h||g&128)&&fe(d,"arrow-left-disabled",!f[7].hasPrevious),(!h||g&128&&F!==(F=!f[7].hasPrevious))&&(c.disabled=F);let se=M;M=xe(f),M===se?ae[M].p(f,g):(Ne(),R(ae[se],1,1,()=>{ae[se]=null}),Ae(),B=ae[M],B?B.p(f,g):(B=ae[M]=ye[M](f),B.c()),k(B,1),B.m(Y,null)),(!h||g&128)&&fe(y,"arrow-right-disabled",!f[7].hasNext),(!h||g&128&&_e!==(_e=!f[7].hasNext))&&(L.disabled=_e),X&&X.p&&(!h||g&4194464)&&ie(X,Ce,f,f[22],h?re(Ce,f[22],g,$t):oe(f[22]),_t),(!h||g&8192&&me!==(me=nt(`flex ${f[13]["action-bottom-left"]?"justify-between":"justify-end"}`)+" svelte-1780ds3"))&&I(N,"class",me),(!h||g&4096&&ge!==(ge=f[12]["aria-label"]))&&I(N,"aria-label",ge)},i(f){h||(k(W,f),k(C,f),k(S),k(H,f),k(q,f),k(G,f),k(J,f),k(E),k(B),k(X,f),h=!0)},o(f){R(W,f),R(C,f),R(S),R(H,f),R(q,f),R(G,f),R(J,f),R(E),R(B),R(X,f),h=!1},d(f){f&&b(t),W&&W.d(f),C&&C.d(f),S&&S.d(),H&&H.d(f),q&&q.d(f),O(),G&&G.d(f),J&&J.d(f),E&&E.d(),ae[M].d(),X&&X.d(f),Re=!1,kt(Te)}}}function _l(e,t,a){let l,s,i,o;const n=["items","floatId","startingIndex","currentPageKey","itemsPerPage","updating","pageSizeSelectLabel"];let u=it(t,n),r,m=te,O=()=>(m(),m=Mt(s,v=>a(7,r=v)),s),P;wt(e,Ye,v=>a(21,P=v)),e.$$.on_destroy.push(()=>m());let{$$slots:V={},$$scope:N}=t;const w=Ft(V);var A;let{items:D}=t,{floatId:_=void 0}=t,{startingIndex:c=0}=t,{currentPageKey:d="page"}=t,{itemsPerPage:F=null}=t,{updating:ee=!1}=t,{pageSizeSelectLabel:Y}=t,M,B,le;Lt(()=>{y(),c>0&&L()});const L=()=>{Fe({parameter:d,value:r.currentPage,url:P.url})},y=()=>{var v;_&&a(19,B=(v=document.getElementById(_))===null||v===void 0?void 0:v.clientWidth)};async function _e(v){switch(v.code){case"ArrowRight":case"KeyL":r.hasNext&&(s.next(),L());break;case"ArrowLeft":case"KeyH":r.hasPrevious&&(s.previous(),L());break;case"ArrowUp":case"KeyK":s.previousRow();break;case"ArrowDown":case"KeyJ":s.nextRow();break}}function Pe(){a(3,M=window.innerWidth)}const me=()=>{s.previous(),L()},ge=()=>{s.next(),L()};function h(){le=this.clientHeight,a(4,le)}const Re=()=>s.previous(),Te=()=>s.next();return e.$$set=v=>{t=ce(ce({},t),je(v)),a(12,u=it(t,n)),"items"in v&&a(14,D=v.items),"floatId"in v&&a(15,_=v.floatId),"startingIndex"in v&&a(16,c=v.startingIndex),"currentPageKey"in v&&a(17,d=v.currentPageKey),"itemsPerPage"in v&&a(0,F=v.itemsPerPage),"updating"in v&&a(1,ee=v.updating),"pageSizeSelectLabel"in v&&a(2,Y=v.pageSizeSelectLabel),"$$scope"in v&&a(22,N=v.$$scope)},e.$$.update=()=>{e.$$.dirty&2097153&&a(6,l=F!==null?String(F):String(St(P.url.searchParams.get(Ee))).toString()),e.$$.dirty&2097216&&(parseInt(l,10)>parseInt(ut,10)?Fe({parameter:Ee,value:ut,url:P.url}):Ke.includes(l)||Fe({parameter:Ee,value:Se,url:P.url})),e.$$.dirty&81984&&O(a(5,s=yt(D,l,c))),e.$$.dirty&2490496&&a(20,i=a(18,A=P.url.searchParams.get(d))!==null&&A!==void 0?A:r.currentPage),e.$$.dirty&1048608&&s.jumpToPage(i),e.$$.dirty&524312&&a(8,o=xt({width:B,height:le,screenWidth:M}))},[F,ee,Y,M,le,s,l,r,o,L,y,_e,u,w,D,_,c,d,A,B,i,P,N,V,Pe,me,ge,h,Re,Te]}class hl extends Xe{constructor(t){super(),Ze(this,t,_l,cl,Qe,{items:14,floatId:15,startingIndex:16,currentPageKey:17,itemsPerPage:0,updating:1,pageSizeSelectLabel:2})}}export{Pt as F,hl as P,Fe as u};
