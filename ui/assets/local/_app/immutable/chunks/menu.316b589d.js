import{ac as Ae,S as le,b as ne,a as se,G as q,N as P,m as V,p as U,q as j,k as S,Q as K,f as X,a8 as Te,T as Y,H as B,I as F,J as H,U as $,j as M,g as D,r as fe,X as Q,M as ce,ad as Re,O as ae,n as Pe,s as Ve,_ as J,e as ge,z as w,h as x,ae as de,K as W,c as z,d as G,u as Z,R as E,L as R,V as te,af as Ue,C as me,D as _e,E as he,F as be,w as Me,x as De,y as Ne,ag as je,$ as ye,a9 as qe,A as Be}from"./index.e1c99c2b.js";import{I as Se}from"./icon.ea75f5d0.js";import{B as Fe}from"./badge.97875615.js";import{w as oe}from"./index.52341886.js";function He(t){const e=t-1;return e*e*e+1}function dt(t,{delay:e=0,duration:l=400,easing:n=Ae}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:l,easing:n,css:s=>`opacity: ${s*a}`}}function Ke(t,{delay:e=0,duration:l=400,easing:n=He,x:a=0,y:s=0,opacity:m=0}={}){const o=getComputedStyle(t),c=+o.opacity,u=o.transform==="none"?"":o.transform,i=c*(1-m);return{delay:e,duration:l,easing:n,css:(h,d)=>`
			transform: ${u} translate(${(1-h)*a}px, ${(1-h)*s}px);
			opacity: ${c-i*d}`}}function Xe(t){const e=l=>{t&&!t.contains(l.target)&&!l.defaultPrevented&&t.dispatchEvent(new CustomEvent("click-outside"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}const ze=t=>({open:t&2}),ke=t=>({open:t[1]});function Ge(t){let e,l,n,a,s;const m=t[5].default,o=q(m,t,t[4],ke);let c=[{class:l="relative "+t[0]},t[3]],u={};for(let i=0;i<c.length;i+=1)u=P(u,c[i]);return{c(){e=V("div"),o&&o.c(),this.h()},l(i){e=U(i,"DIV",{class:!0});var h=j(e);o&&o.l(h),h.forEach(S),this.h()},h(){K(e,u)},m(i,h){X(i,e,h),o&&o.m(e,null),n=!0,a||(s=[Te(Xe.call(null,e)),Y(e,"click-outside",t[2])],a=!0)},p(i,[h]){o&&o.p&&(!n||h&18)&&B(o,m,i,i[4],n?H(m,i[4],h,ze):F(i[4]),ke),K(e,u=$(c,[(!n||h&1&&l!==(l="relative "+i[0]))&&{class:l},h&8&&i[3]]))},i(i){n||(M(o,i),n=!0)},o(i){D(o,i),n=!1},d(i){i&&S(e),o&&o.d(i),a=!1,fe(s)}}}const ie="menu-context";function Je(t,e,l){const n=["class","open"];let a=Q(e,n),s,m=Pe,o=()=>(m(),m=Ve(h,_=>l(6,s=_)),h);t.$$.on_destroy.push(()=>m());let{$$slots:c={},$$scope:u}=e,{class:i=""}=e,{open:h=oe(!1)}=e;o();const d=oe(!1),k=oe(null),N=ce(),L=()=>{N("close"),J(h,s=!1,s)};return Re(ie,{open:h,keepOpen:d,menuElement:k}),t.$$set=_=>{e=P(P({},e),ae(_)),l(3,a=Q(e,n)),"class"in _&&l(0,i=_.class),"open"in _&&o(l(1,h=_.open)),"$$scope"in _&&l(4,u=_.$$scope)},[i,h,L,a,u,c]}class mt extends le{constructor(e){super(),ne(this,e,Je,Ge,se,{class:0,open:1})}}const Qe=t=>({}),ve=t=>({}),We=t=>({}),Ee=t=>({});function Ye(t){let e,l,n,a,s,m,o,c,u,i,h,d,k,N;const L=t[13].leading,_=q(L,t,t[12],Ee),A=[xe,we],I=[];function b(g,p){return g[5]?0:1}a=b(t),s=I[a]=A[a](t);let C=t[1]&&Ie();const T=t[13].trailing,r=q(T,t,t[12],ve);let f=[{role:"menuitem"},{class:u="menu-item "+t[0]},{"aria-hidden":i=t[3]?"true":"false"},{"aria-disabled":t[3]},{tabindex:h=t[3]?-1:0},t[11]],O={};for(let g=0;g<f.length;g+=1)O=P(O,f[g]);return{c(){e=V("li"),_&&_.c(),l=z(),n=V("div"),s.c(),m=z(),o=V("div"),C&&C.c(),c=z(),r&&r.c(),this.h()},l(g){e=U(g,"LI",{role:!0,class:!0,"aria-hidden":!0,"aria-disabled":!0,tabindex:!0});var p=j(e);_&&_.l(p),l=G(p),n=U(p,"DIV",{class:!0});var y=j(n);s.l(y),m=G(y),o=U(y,"DIV",{class:!0});var ee=j(o);C&&C.l(ee),ee.forEach(S),y.forEach(S),c=G(p),r&&r.l(p),p.forEach(S),this.h()},h(){Z(o,"class","flex w-6 h-6 shrink-0"),Z(n,"class","menu-item-wrapper svelte-eooai0"),E(n,"selected",t[1]),E(n,"centered",t[6]),K(e,O),E(e,"destructive",t[2]),E(e,"disabled",t[3]),E(e,"svelte-eooai0",!0)},m(g,p){X(g,e,p),_&&_.m(e,null),R(e,l),R(e,n),I[a].m(n,null),R(n,m),R(n,o),C&&C.m(o,null),R(e,c),r&&r.m(e,null),d=!0,k||(N=[Y(e,"click",te(Ue(t[10]))),Y(e,"keydown",te(t[9]))],k=!0)},p(g,p){_&&_.p&&(!d||p&4096)&&B(_,L,g,g[12],d?H(L,g[12],p,We):F(g[12]),Ee);let y=a;a=b(g),a===y?I[a].p(g,p):(w(),D(I[y],1,1,()=>{I[y]=null}),x(),s=I[a],s?s.p(g,p):(s=I[a]=A[a](g),s.c()),M(s,1),s.m(n,m)),g[1]?C?p&2&&M(C,1):(C=Ie(),C.c(),M(C,1),C.m(o,null)):C&&(w(),D(C,1,1,()=>{C=null}),x()),(!d||p&2)&&E(n,"selected",g[1]),(!d||p&64)&&E(n,"centered",g[6]),r&&r.p&&(!d||p&4096)&&B(r,T,g,g[12],d?H(T,g[12],p,Qe):F(g[12]),ve),K(e,O=$(f,[{role:"menuitem"},(!d||p&1&&u!==(u="menu-item "+g[0]))&&{class:u},(!d||p&8&&i!==(i=g[3]?"true":"false"))&&{"aria-hidden":i},(!d||p&8)&&{"aria-disabled":g[3]},(!d||p&8&&h!==(h=g[3]?-1:0))&&{tabindex:h},p&2048&&g[11]])),E(e,"destructive",g[2]),E(e,"disabled",g[3]),E(e,"svelte-eooai0",!0)},i(g){d||(M(_,g),M(s),M(C),M(r,g),d=!0)},o(g){D(_,g),D(s),D(C),D(r,g),d=!1},d(g){g&&S(e),_&&_.d(g),I[a].d(),C&&C.d(),r&&r.d(g),k=!1,fe(N)}}}function Ze(t){let e,l,n,a,s,m,o;const c=t[13].default,u=q(c,t,t[12],null);let i=[{href:t[4]},{role:"menuitem"},{class:l="menu-item "+t[0]},{"aria-hidden":n=t[3]?"true":"false"},{"aria-disabled":t[3]},{tabindex:a=t[3]?-1:0},t[11]],h={};for(let d=0;d<i.length;d+=1)h=P(h,i[d]);return{c(){e=V("a"),u&&u.c(),this.h()},l(d){e=U(d,"A",{href:!0,role:!0,class:!0,"aria-hidden":!0,"aria-disabled":!0,tabindex:!0});var k=j(e);u&&u.l(k),k.forEach(S),this.h()},h(){K(e,h),E(e,"disabled",t[3]),E(e,"svelte-eooai0",!0)},m(d,k){X(d,e,k),u&&u.m(e,null),s=!0,m||(o=Y(e,"keydown",te(t[9])),m=!0)},p(d,k){u&&u.p&&(!s||k&4096)&&B(u,c,d,d[12],s?H(c,d[12],k,null):F(d[12]),null),K(e,h=$(i,[(!s||k&16)&&{href:d[4]},{role:"menuitem"},(!s||k&1&&l!==(l="menu-item "+d[0]))&&{class:l},(!s||k&8&&n!==(n=d[3]?"true":"false"))&&{"aria-hidden":n},(!s||k&8)&&{"aria-disabled":d[3]},(!s||k&8&&a!==(a=d[3]?-1:0))&&{tabindex:a},k&2048&&d[11]])),E(e,"disabled",d[3]),E(e,"svelte-eooai0",!0)},i(d){s||(M(u,d),s=!0)},o(d){D(u,d),s=!1},d(d){d&&S(e),u&&u.d(d),m=!1,o()}}}function we(t){let e;const l=t[13].default,n=q(l,t,t[12],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,s){n&&n.m(a,s),e=!0},p(a,s){n&&n.p&&(!e||s&4096)&&B(n,l,a,a[12],e?H(l,a[12],s,null):F(a[12]),null)},i(a){e||(M(n,a),e=!0)},o(a){D(n,a),e=!1},d(a){n&&n.d(a)}}}function xe(t){let e,l,n,a,s;const m=t[13].default,o=q(m,t,t[12],null);return{c(){e=V("div"),o&&o.c(),l=z(),n=V("span"),a=Me(t[5]),this.h()},l(c){e=U(c,"DIV",{class:!0});var u=j(e);o&&o.l(u),l=G(u),n=U(u,"SPAN",{class:!0});var i=j(n);a=De(i,t[5]),i.forEach(S),u.forEach(S),this.h()},h(){Z(n,"class","menu-item-description svelte-eooai0"),Z(e,"class","flex flex-col")},m(c,u){X(c,e,u),o&&o.m(e,null),R(e,l),R(e,n),R(n,a),s=!0},p(c,u){o&&o.p&&(!s||u&4096)&&B(o,m,c,c[12],s?H(m,c[12],u,null):F(c[12]),null),(!s||u&32)&&Ne(a,c[5])},i(c){s||(M(o,c),s=!0)},o(c){D(o,c),s=!1},d(c){c&&S(e),o&&o.d(c)}}}function Ie(t){let e,l;return e=new Se({props:{name:"checkmark"}}),{c(){me(e.$$.fragment)},l(n){_e(e.$$.fragment,n)},m(n,a){he(e,n,a),l=!0},i(n){l||(M(e.$$.fragment,n),l=!0)},o(n){D(e.$$.fragment,n),l=!1},d(n){be(e,n)}}}function $e(t){let e,l,n,a;const s=[Ze,Ye],m=[];function o(c,u){return c[4]?0:1}return e=o(t),l=m[e]=s[e](t),{c(){l.c(),n=ge()},l(c){l.l(c),n=ge()},m(c,u){m[e].m(c,u),X(c,n,u),a=!0},p(c,[u]){let i=e;e=o(c),e===i?m[e].p(c,u):(w(),D(m[i],1,1,()=>{m[i]=null}),x(),l=m[e],l?l.p(c,u):(l=m[e]=s[e](c),l.c()),M(l,1),l.m(n.parentNode,n))},i(c){a||(M(l),a=!0)},o(c){D(l),a=!1},d(c){m[e].d(c),c&&S(n)}}}const re='input, li[role="option"]:not([aria-disabled="true"]), li[role="menuitem"]:not([aria-disabled="true"])';function et(t,e,l){const n=["class","selected","destructive","disabled","href","description","centered"];let a=Q(e,n),s,m,{$$slots:o={},$$scope:c}=e,{class:u=""}=e,{selected:i=!1}=e,{destructive:h=!1}=e,{disabled:d=!1}=e,{href:k=null}=e,{description:N=null}=e,{centered:L=!1}=e;const{keepOpen:_,open:A}=de(ie);W(t,_,f=>l(15,m=f)),W(t,A,f=>l(14,s=f));const I=ce(),b=f=>{switch(f.key){case"Escape":J(A,s=!1,s);break;case"ArrowDown":case"ArrowRight":C(f.currentTarget);break;case"ArrowUp":case"ArrowLeft":T(f.currentTarget);break;case" ":case"Enter":I("click"),m||J(A,s=!1,s);break}},C=f=>{let O=f.nextElementSibling;for(;O&&!O.matches(re);)O=O.nextElementSibling;O&&O instanceof HTMLLIElement&&O.focus()},T=f=>{let O=f.previousElementSibling;for(;O&&!O.matches(re);)O=O.previousElementSibling;O&&O instanceof HTMLLIElement&&O.focus()},r=()=>{m||J(A,s=!1,s),I("click")};return t.$$set=f=>{e=P(P({},e),ae(f)),l(11,a=Q(e,n)),"class"in f&&l(0,u=f.class),"selected"in f&&l(1,i=f.selected),"destructive"in f&&l(2,h=f.destructive),"disabled"in f&&l(3,d=f.disabled),"href"in f&&l(4,k=f.href),"description"in f&&l(5,N=f.description),"centered"in f&&l(6,L=f.centered),"$$scope"in f&&l(12,c=f.$$scope)},[u,i,h,d,k,N,L,_,A,b,r,a,c,o]}class _t extends le{constructor(e){super(),ne(this,e,et,$e,se,{class:0,selected:1,destructive:2,disabled:3,href:4,description:5,centered:6})}}const tt=t=>({}),Le=t=>({}),lt=t=>({}),Oe=t=>({});function Ce(t){let e,l,n;return l=new Se({props:{name:t[13]?"chevron-up":"chevron-down"}}),{c(){e=V("div"),me(l.$$.fragment),this.h()},l(a){e=U(a,"DIV",{class:!0});var s=j(e);_e(l.$$.fragment,s),s.forEach(S),this.h()},h(){Z(e,"class","flex")},m(a,s){X(a,e,s),he(l,e,null),n=!0},p(a,s){const m={};s&8192&&(m.name=a[13]?"chevron-up":"chevron-down"),l.$set(m)},i(a){n||(M(l.$$.fragment,a),n=!0)},o(a){D(l.$$.fragment,a),n=!1},d(a){a&&S(e),be(l)}}}function pe(t){let e,l;return e=new Fe({props:{class:"absolute top-0 right-0 origin-bottom-left translate-y-[-10px] translate-x-[10px]",type:"count",$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){me(e.$$.fragment)},l(n){_e(e.$$.fragment,n)},m(n,a){he(e,n,a),l=!0},p(n,a){const s={};a&2097156&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){l||(M(e.$$.fragment,n),l=!0)},o(n){D(e.$$.fragment,n),l=!1},d(n){be(e,n)}}}function nt(t){let e;return{c(){e=Me(t[2])},l(l){e=De(l,t[2])},m(l,n){X(l,e,n)},p(l,n){n&4&&Ne(e,l[2])},d(l){l&&S(e)}}}function st(t){let e,l,n,a,s,m,o,c,u,i,h;const d=t[20].leading,k=q(d,t,t[21],Oe),N=t[20].default,L=q(N,t,t[21],null);let _=t[4]&&Ce(t);const A=t[20].trailing,I=q(A,t,t[21],Le);let b=t[2]>0&&pe(t),C=[{id:t[5]},{disabled:t[3]},{type:"button"},{"aria-haspopup":o=!t[3]},{"aria-controls":t[1]},{"aria-expanded":t[13]},{"aria-label":t[6]},{class:c="menu-button "+t[10]+" "+t[0]},t[18]],T={};for(let r=0;r<C.length;r+=1)T=P(T,C[r]);return{c(){e=V("button"),k&&k.c(),l=z(),n=V("div"),L&&L.c(),a=z(),_&&_.c(),s=z(),I&&I.c(),m=z(),b&&b.c(),this.h()},l(r){e=U(r,"BUTTON",{id:!0,type:!0,"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,class:!0});var f=j(e);k&&k.l(f),l=G(f),n=U(f,"DIV",{class:!0});var O=j(n);L&&L.l(O),O.forEach(S),a=G(f),_&&_.l(f),s=G(f),I&&I.l(f),m=G(f),b&&b.l(f),f.forEach(S),this.h()},h(){Z(n,"class","flex items-center grow"),E(n,"justify-center",t[12]),E(n,"hidden",!t[19].default),K(e,T),E(e,"unroundLeft",t[9]),E(e,"unroundRight",t[8]),E(e,"active",t[11]),E(e,"unround",t[7]),E(e,"round",t[12]),E(e,"svelte-c7x2ub",!0)},m(r,f){X(r,e,f),k&&k.m(e,null),R(e,l),R(e,n),L&&L.m(n,null),R(e,a),_&&_.m(e,null),R(e,s),I&&I.m(e,null),R(e,m),b&&b.m(e,null),e.autofocus&&e.focus(),u=!0,i||(h=[Y(e,"click",te(t[16])),Y(e,"keydown",t[17])],i=!0)},p(r,[f]){k&&k.p&&(!u||f&2097152)&&B(k,d,r,r[21],u?H(d,r[21],f,lt):F(r[21]),Oe),L&&L.p&&(!u||f&2097152)&&B(L,N,r,r[21],u?H(N,r[21],f,null):F(r[21]),null),(!u||f&4096)&&E(n,"justify-center",r[12]),(!u||f&524288)&&E(n,"hidden",!r[19].default),r[4]?_?(_.p(r,f),f&16&&M(_,1)):(_=Ce(r),_.c(),M(_,1),_.m(e,s)):_&&(w(),D(_,1,1,()=>{_=null}),x()),I&&I.p&&(!u||f&2097152)&&B(I,A,r,r[21],u?H(A,r[21],f,tt):F(r[21]),Le),r[2]>0?b?(b.p(r,f),f&4&&M(b,1)):(b=pe(r),b.c(),M(b,1),b.m(e,null)):b&&(w(),D(b,1,1,()=>{b=null}),x()),K(e,T=$(C,[(!u||f&32)&&{id:r[5]},(!u||f&8)&&{disabled:r[3]},{type:"button"},(!u||f&8&&o!==(o=!r[3]))&&{"aria-haspopup":o},(!u||f&2)&&{"aria-controls":r[1]},(!u||f&8192)&&{"aria-expanded":r[13]},(!u||f&64)&&{"aria-label":r[6]},(!u||f&1025&&c!==(c="menu-button "+r[10]+" "+r[0]))&&{class:c},f&262144&&r[18]])),E(e,"unroundLeft",r[9]),E(e,"unroundRight",r[8]),E(e,"active",r[11]),E(e,"unround",r[7]),E(e,"round",r[12]),E(e,"svelte-c7x2ub",!0)},i(r){u||(M(k,r),M(L,r),M(_),M(I,r),M(b),u=!0)},o(r){D(k,r),D(L,r),D(_),D(I,r),D(b),u=!1},d(r){r&&S(e),k&&k.d(r),L&&L.d(r),_&&_.d(),I&&I.d(r),b&&b.d(),i=!1,fe(h)}}}function at(t,e,l){const n=["class","controls","count","disabled","hasIndicator","id","label","unround","unroundRight","unroundLeft","variant","active","round"];let a=Q(e,n),s,m,{$$slots:o={},$$scope:c}=e;const u=je(o);let{class:i=""}=e,{controls:h}=e,{count:d=0}=e,{disabled:k=!1}=e,{hasIndicator:N=!1}=e,{id:L=null}=e,{label:_=null}=e,{unround:A=!1}=e,{unroundRight:I=!1}=e,{unroundLeft:b=!1}=e,{variant:C="secondary"}=e,{active:T=!1}=e,{round:r=!1}=e;const f=ce(),{open:O,menuElement:g}=de(ie);W(t,O,v=>l(13,m=v)),W(t,g,v=>l(22,s=v));const p=()=>{O.update(v=>{let ue=v;return k||(ue=!v),f("click",{open:ue}),ue})},y=v=>{switch(v.key){case"Escape":J(O,m=!1,m);break;case"ArrowDown":v.preventDefault(),m?ee():J(O,m=!0,m);break}},ee=()=>{const v=Array.from(s.querySelectorAll(re));v&&v[0]&&requestAnimationFrame(()=>v[0].focus())};return t.$$set=v=>{e=P(P({},e),ae(v)),l(18,a=Q(e,n)),"class"in v&&l(0,i=v.class),"controls"in v&&l(1,h=v.controls),"count"in v&&l(2,d=v.count),"disabled"in v&&l(3,k=v.disabled),"hasIndicator"in v&&l(4,N=v.hasIndicator),"id"in v&&l(5,L=v.id),"label"in v&&l(6,_=v.label),"unround"in v&&l(7,A=v.unround),"unroundRight"in v&&l(8,I=v.unroundRight),"unroundLeft"in v&&l(9,b=v.unroundLeft),"variant"in v&&l(10,C=v.variant),"active"in v&&l(11,T=v.active),"round"in v&&l(12,r=v.round),"$$scope"in v&&l(21,c=v.$$scope)},[i,h,d,k,N,L,_,A,I,b,C,T,r,m,O,g,p,y,a,u,o,c]}class ht extends le{constructor(e){super(),ne(this,e,at,st,se,{class:0,controls:1,count:2,disabled:3,hasIndicator:4,id:5,label:6,unround:7,unroundRight:8,unroundLeft:9,variant:10,active:11,round:12})}}function it(t){let e,l,n,a,s;const m=t[11].default,o=q(m,t,t[10],null);let c=[{role:"menu"},{class:l="menu "+t[3]+" "+t[1]},{"aria-labelledby":t[2]},{tabindex:n=-1},{id:t[2]},t[8]],u={};for(let i=0;i<c.length;i+=1)u=P(u,c[i]);return{c(){e=V("ul"),o&&o.c(),this.h()},l(i){e=U(i,"UL",{role:!0,class:!0,"aria-labelledby":!0,tabindex:!0,id:!0});var h=j(e);o&&o.l(h),h.forEach(S),this.h()},h(){K(e,u),E(e,"hidden",!t[4]),E(e,"svelte-63nj9m",!0)},m(i,h){X(i,e,h),o&&o.m(e,null),t[12](e),s=!0},p(i,[h]){o&&o.p&&(!s||h&1024)&&B(o,m,i,i[10],s?H(m,i[10],h,null):F(i[10]),null),K(e,u=$(c,[{role:"menu"},(!s||h&10&&l!==(l="menu "+i[3]+" "+i[1]))&&{class:l},(!s||h&4)&&{"aria-labelledby":i[2]},{tabindex:n},(!s||h&4)&&{id:i[2]},h&256&&i[8]])),E(e,"hidden",!i[4]),E(e,"svelte-63nj9m",!0)},i(i){s||(M(o,i),a||ye(()=>{a=qe(e,Ke,{duration:100}),a.start()}),s=!0)},o(i){D(o,i),s=!1},d(i){i&&S(e),o&&o.d(i),t[12](null)}}}function ut(t,e,l){const n=["class","id","keepOpen","position","menuElement"];let a=Q(e,n),s,m,o,{$$slots:c={},$$scope:u}=e,{class:i=""}=e,{id:h}=e,{keepOpen:d=!1}=e,{position:k="left"}=e,{menuElement:N=null}=e;const{keepOpen:L,menuElement:_,open:A}=de(ie);W(t,L,b=>l(14,m=b)),W(t,_,b=>l(13,s=b)),W(t,A,b=>l(4,o=b));function I(b){Be[b?"unshift":"push"](()=>{N=b,l(0,N)})}return t.$$set=b=>{e=P(P({},e),ae(b)),l(8,a=Q(e,n)),"class"in b&&l(1,i=b.class),"id"in b&&l(2,h=b.id),"keepOpen"in b&&l(9,d=b.keepOpen),"position"in b&&l(3,k=b.position),"menuElement"in b&&l(0,N=b.menuElement),"$$scope"in b&&l(10,u=b.$$scope)},t.$$.update=()=>{t.$$.dirty&512&&J(L,m=d,m),t.$$.dirty&1&&J(_,s=N,s)},[N,i,h,k,o,L,_,A,a,d,u,c,I]}class bt extends le{constructor(e){super(),ne(this,e,ut,it,se,{class:1,id:2,keepOpen:9,position:3,menuElement:0})}}export{mt as M,ht as a,bt as b,Xe as c,_t as d,dt as e,Ke as f};
