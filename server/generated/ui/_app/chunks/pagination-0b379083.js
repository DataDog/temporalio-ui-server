import{ad as U,S as ve,i as Ie,s as Pe,a0 as de,I as Ne,e as F,t as W,k as C,w as x,c as T,a as S,h as q,d as k,m as G,x as $,b as E,g as ye,M as f,y as ee,an as we,N as te,j as ne,J as ke,K as Ee,L as je,q as K,o as R,B as se,G as Fe,O as Te,v as Se,F as Be,E as Me}from"./index-f021a159.js";import{p as Oe}from"./stores-2e95f632.js";import{d as Ve,w as ge}from"./index-cfbcd7ef.js";import{F as _e,o as ze,p as Ae}from"./index.es-3049caa8.js";import{F as De}from"./filter-select-52481352.js";const ae=["100","250","500"],me=e=>{const t=String(e);return ae.includes(t)?ae:[t,...ae]},Q=(e,t)=>Math.floor(e/t)+1,pe=(e,t,s)=>isNaN(e)||e<=1?0:e>be(t,s)?s.length-t:Math.floor(t*(e-1)),We=(e,t,s)=>{const i=Q(e,t);return pe(i,t,s)},be=(e,t)=>Math.ceil(t.length/e),re=(e,t)=>isNaN(e)||e<0?0:e<t.length?e:t.length-1,oe=(e,t)=>e>=t.length||e<0,qe=(e=[],t=100,s=0)=>{const i=We(Number(s),Number(t),e),o=ge(Number(t)),p=ge(i),I=n=>{o.set(Number(n))},d=()=>{p.update(n=>{const a=n+U(o);return oe(a,e)?n:re(a,e)})},P=()=>{p.update(n=>{const a=n-U(o);return re(a,e)})},c=n=>{const a=U(o);return p.set(pe(Number(n),a,e))},g=n=>{const a=Q(Number(n),U(o));c(a)},_=n=>{for(let a=0;a<e.length;a++)if(n(e[a]))return a},b=n=>{const a=_(n);return Q(a,U(o))},{subscribe:N}=Ve([p,o],([n,a])=>({items:e.slice(n,n+a),initialItem:e[0],hasPrevious:!oe(n-a,e),hasNext:!oe(n+a,e),startingIndex:n,endingIndex:re(n+a-1,e),length:e.length,pageSize:a,currentPage:Q(n,a),totalPages:be(a,e)}));return{subscribe:N,adjustPageSize:I,next:d,previous:P,jumpToPage:c,jumpToIndex:g,findIndex:_,findPage:b}},Le=({width:e,height:t,screenWidth:s,breakpoint:i=1024})=>e&&t&&s>i?`position: absolute; right: ${e+20}px; top: -${t+14}px`:"";const Ue=e=>({visibleItems:e&64,initialItem:e&64}),he=e=>({visibleItems:e[6].items,initialItem:e[6].initialItem});function Ce(e){let t,s,i,o,p,I,d,P,c,g,_,b,N,n,a=e[6].startingIndex+1+"",j,B,v=e[6].endingIndex+1+"",V,L,M=e[6].length+"",z,l,y,O,H,le,X,h,Y,ie;de(e[14]),d=new De({props:{label:"Per Page",parameter:e[0],value:e[4],options:me(e[4])}}),_=new _e({props:{icon:ze}}),O=new _e({props:{icon:Ae}});const Z=e[13].default,m=Ne(Z,e,e[12],he);return{c(){t=F("div"),s=F("nav"),i=F("div"),o=F("p"),p=W("Per Page"),I=C(),x(d.$$.fragment),P=C(),c=F("div"),g=F("button"),x(_.$$.fragment),N=C(),n=F("p"),j=W(a),B=W("\u2013"),V=W(v),L=W(" of "),z=W(M),l=C(),y=F("button"),x(O.$$.fragment),X=C(),m&&m.c(),this.h()},l(r){t=T(r,"DIV",{class:!0});var u=S(t);s=T(u,"NAV",{style:!0,class:!0});var w=S(s);i=T(w,"DIV",{class:!0});var J=S(i);o=T(J,"P",{class:!0});var ue=S(o);p=q(ue,"Per Page"),ue.forEach(k),I=G(J),$(d.$$.fragment,J),J.forEach(k),P=G(w),c=T(w,"DIV",{class:!0});var A=S(c);g=T(A,"BUTTON",{class:!0});var fe=S(g);$(_.$$.fragment,fe),fe.forEach(k),N=G(A),n=T(A,"P",{});var D=S(n);j=q(D,a),B=q(D,"\u2013"),V=q(D,v),L=q(D," of "),z=q(D,M),D.forEach(k),l=G(A),y=T(A,"BUTTON",{class:!0});var ce=S(y);$(O.$$.fragment,ce),ce.forEach(k),A.forEach(k),w.forEach(k),X=G(u),m&&m.l(u),u.forEach(k),this.h()},h(){E(o,"class","w-fit text-right"),E(i,"class","flex gap-2 items-center justify-center"),E(g,"class","caret svelte-15p08gy"),g.disabled=b=!e[6].hasPrevious,E(y,"class","caret svelte-15p08gy"),y.disabled=H=!e[6].hasNext,E(c,"class","flex gap-6 items-center justify-center"),E(s,"style",e[5]),E(s,"class","flex justify-end gap-8"),de(()=>e[17].call(s)),E(t,"class","pagination flex flex-col gap-4 relative mb-8")},m(r,u){ye(r,t,u),f(t,s),f(s,i),f(i,o),f(o,p),f(i,I),ee(d,i,null),f(s,P),f(s,c),f(c,g),ee(_,g,null),f(c,N),f(c,n),f(n,j),f(n,B),f(n,V),f(n,L),f(n,z),f(c,l),f(c,y),ee(O,y,null),le=we(s,e[17].bind(s)),f(t,X),m&&m.m(t,null),h=!0,Y||(ie=[te(window,"resize",e[14]),te(g,"click",e[15]),te(y,"click",e[16])],Y=!0)},p(r,[u]){const w={};u&1&&(w.parameter=r[0]),u&16&&(w.value=r[4]),u&16&&(w.options=me(r[4])),d.$set(w),(!h||u&64&&b!==(b=!r[6].hasPrevious))&&(g.disabled=b),(!h||u&64)&&a!==(a=r[6].startingIndex+1+"")&&ne(j,a),(!h||u&64)&&v!==(v=r[6].endingIndex+1+"")&&ne(V,v),(!h||u&64)&&M!==(M=r[6].length+"")&&ne(z,M),(!h||u&64&&H!==(H=!r[6].hasNext))&&(y.disabled=H),(!h||u&32)&&E(s,"style",r[5]),m&&m.p&&(!h||u&4160)&&ke(m,Z,r,r[12],h?je(Z,r[12],u,Ue):Ee(r[12]),he)},i(r){h||(K(d.$$.fragment,r),K(_.$$.fragment,r),K(O.$$.fragment,r),K(m,r),h=!0)},o(r){R(d.$$.fragment,r),R(_.$$.fragment,r),R(O.$$.fragment,r),R(m,r),h=!1},d(r){r&&k(t),se(d),se(_),se(O),le(),m&&m.d(r),Y=!1,Fe(ie)}}}function Ge(e,t,s){let i,o,p,I,d,P=Me,c=()=>(P(),P=Be(o,l=>s(6,d=l)),o);Te(e,Oe,l=>s(11,I=l)),e.$$.on_destroy.push(()=>P());let{$$slots:g={},$$scope:_}=t,{key:b="per-page"}=t,{items:N}=t,{floatId:n=void 0}=t,{startingIndex:a=0}=t,j,B,v;Se(()=>{var l;n&&s(10,B=(l=document.getElementById(n))===null||l===void 0?void 0:l.clientWidth)});function V(){s(1,j=window.innerWidth)}const L=()=>o.previous(),M=()=>o.next();function z(){v=this.clientHeight,s(2,v)}return e.$$set=l=>{"key"in l&&s(0,b=l.key),"items"in l&&s(7,N=l.items),"floatId"in l&&s(8,n=l.floatId),"startingIndex"in l&&s(9,a=l.startingIndex),"$$scope"in l&&s(12,_=l.$$scope)},e.$$.update=()=>{e.$$.dirty&2049&&s(4,i=I.url.searchParams.get(b)||"100"),e.$$.dirty&144&&c(s(3,o=qe(N,i))),e.$$.dirty&24&&o.adjustPageSize(i),e.$$.dirty&520&&o.jumpToIndex(a),e.$$.dirty&1030&&s(5,p=Le({width:B,height:v,screenWidth:j}))},[b,j,v,o,i,p,d,N,n,a,B,I,_,g,V,L,M,z]}class Xe extends ve{constructor(t){super(),Ie(this,t,Ge,Ce,Pe,{key:0,items:7,floatId:8,startingIndex:9})}}export{Xe as P};
