import{s as se,A as re,e as w,t as Y,a as L,b as I,d as N,f as Z,g as b,h as R,j as c,N as pe,B as U,C as be,k as F,l as _,X as x,m as C,n as $,ae as ue,v as ee,E as Ie,F as he,G as ge,S as Ne,p as Ae,x as G,T as De,u as He,q as Se,r as Ve,c as Oe}from"./scheduler.LRpOgQOC.js";import{S as Te,i as Pe,f as Ue,c as le,a as ne,m as ae,g as ie,b as B,e as fe,t as W,d as oe}from"./index.dE1eZLcR.js";import{C as je}from"./code-block.bNKP72Fl.js";import{g as Be}from"./tw-merge.k1eX69SP.js";import{o as ve}from"./omit.d6LgPome.js";import{t as M}from"./translate.HrioCK44.js";import{f as te}from"./index.DNlvbxsr.js";import{d as We}from"./events.d91B_Ih9.js";import{s as ke}from"./parse-with-big-int.e3oI4SEy.js";import{P as Xe}from"./payload-decoder.wxxpYdqM.js";function Ce(t){let l,s,e,a,o,m,d,p,h=(t[0]??"")+"",E,k,r,S,A,H,g,v,T,f,X,K,i,V,D,y,J,O=[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},{min:t[3]},{max:t[4]},{step:S=t[12].step},ve(t[13],"class")],q={};for(let n=0;n<O.length;n+=1)q=re(q,O[n]);return{c(){l=w("div"),s=w("div"),e=w("div"),a=w("span"),o=Y(t[3]),m=L(),d=w("div"),p=w("output"),E=Y(h),k=L(),r=w("input"),A=L(),H=w("span"),g=Y(t[4]),v=L(),T=w("div"),f=w("input"),K=L(),i=w("label"),V=Y(t[1]),this.h()},l(n){l=I(n,"DIV",{class:!0});var u=N(l);s=I(u,"DIV",{class:!0});var P=N(s);e=I(P,"DIV",{class:!0});var j=N(e);a=I(j,"SPAN",{class:!0});var Q=N(a);o=Z(Q,t[3]),Q.forEach(b),m=R(j),d=I(j,"DIV",{class:!0});var z=N(d);p=I(z,"OUTPUT",{class:!0,style:!0,for:!0});var ce=N(p);E=Z(ce,h),ce.forEach(b),k=R(z),r=I(z,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),z.forEach(b),A=R(j),H=I(j,"SPAN",{class:!0});var de=N(H);g=Z(de,t[4]),de.forEach(b),j.forEach(b),v=R(P),T=I(P,"DIV",{class:!0});var me=N(T);f=I(me,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),me.forEach(b),K=R(P),i=I(P,"LABEL",{class:!0,for:!0});var _e=N(i);V=Z(_e,t[1]),_e.forEach(b),P.forEach(b),u.forEach(b),this.h()},h(){c(a,"class","absolute -bottom-6 left-0 text-xs font-normal"),c(p,"class","absolute -top-6 text-center text-xs font-normal"),pe(p,"left","calc("+t[7]+"% - ("+t[9]+"px))"),c(p,"for","range"),U(p,"hidden",!t[8]),be(r,q),U(r,"svelte-tdshj5",!0),c(d,"class","relative flex items-center"),c(H,"class","absolute -bottom-6 right-0 text-xs font-normal"),c(e,"class","relative w-auto grow"),c(f,"id",t[5]),c(f,"class","numeric-input svelte-tdshj5"),c(f,"type","number"),c(f,"inputmode","numeric"),c(f,"min",t[3]),c(f,"max",t[4]),c(f,"step",X=t[12].step),U(f,"invalid",!t[8]),c(T,"class","flex shrink"),c(i,"class","flex shrink text-sm"),c(i,"for",t[5]),U(i,"sr-only",t[2]),c(s,"class","range-input-container svelte-tdshj5"),c(l,"class",D="w-full px-1 py-4 "+t[12].class+" svelte-tdshj5")},m(n,u){F(n,l,u),_(l,s),_(s,e),_(e,a),_(a,o),_(e,m),_(e,d),_(d,p),_(p,E),t[14](p),_(d,k),_(d,r),r.autofocus&&r.focus(),x(r,t[0]),_(e,A),_(e,H),_(H,g),_(s,v),_(s,T),_(T,f),x(f,t[0]),_(s,K),_(s,i),_(i,V),y||(J=[C(window,"resize",t[11]),C(r,"change",t[15]),C(r,"input",t[15]),C(r,"input",t[10]),C(f,"input",t[16]),C(f,"input",t[10])],y=!0)},p(n,[u]){u&8&&$(o,n[3]),u&1&&h!==(h=(n[0]??"")+"")&&$(E,h),u&640&&pe(p,"left","calc("+n[7]+"% - ("+n[9]+"px))"),u&256&&U(p,"hidden",!n[8]),be(r,q=Be(O,[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},u&8&&{min:n[3]},u&16&&{max:n[4]},u&4096&&S!==(S=n[12].step)&&{step:S},u&8192&&ve(n[13],"class")])),u&1&&x(r,n[0]),U(r,"svelte-tdshj5",!0),u&16&&$(g,n[4]),u&32&&c(f,"id",n[5]),u&8&&c(f,"min",n[3]),u&16&&c(f,"max",n[4]),u&4096&&X!==(X=n[12].step)&&c(f,"step",X),u&1&&ue(f.value)!==n[0]&&x(f,n[0]),u&256&&U(f,"invalid",!n[8]),u&2&&$(V,n[1]),u&32&&c(i,"for",n[5]),u&4&&U(i,"sr-only",n[2]),u&4096&&D!==(D="w-full px-1 py-4 "+n[12].class+" svelte-tdshj5")&&c(l,"class",D)},i:ee,o:ee,d(n){n&&b(l),t[14](null),y=!1,Ie(J)}}}function Le(t,l,s){let e,a;const o=["label","labelHidden","min","max","id","value"];let m=he(l,o),{label:d}=l,{labelHidden:p=!1}=l,{min:h=void 0}=l,{max:E=void 0}=l,{id:k=void 0}=l,{value:r=Math.round((h+E)/2)}=l,S=!0,A;const H=i=>{if(Number.isNaN(i.currentTarget.valueAsNumber)){s(0,r=h);return}s(8,S=i.currentTarget.valueAsNumber>=h&&i.currentTarget.valueAsNumber<=E)},g=({value:i,min:V,max:D})=>(i-V)*100/(D-V),v=({outputElement:i,outputXPos:V})=>{var D;const y=(D=i==null?void 0:i.clientWidth)!==null&&D!==void 0?D:15;return Math.floor(V*y/100)},T=()=>{s(7,e=g({value:r,min:h,max:E})),s(9,a=v({outputElement:A,outputXPos:e}))};function f(i){Ne[i?"unshift":"push"](()=>{A=i,s(6,A)})}function X(){r=ue(this.value),s(0,r)}function K(){r=ue(this.value),s(0,r)}return t.$$set=i=>{s(12,l=re(re({},l),ge(i))),s(13,m=he(l,o)),"label"in i&&s(1,d=i.label),"labelHidden"in i&&s(2,p=i.labelHidden),"min"in i&&s(3,h=i.min),"max"in i&&s(4,E=i.max),"id"in i&&s(5,k=i.id),"value"in i&&s(0,r=i.value)},t.$$.update=()=>{t.$$.dirty&25&&s(7,e=g({value:r,min:h,max:E})),t.$$.dirty&217&&(r?(s(7,e=g({value:r,min:h,max:E})),s(9,a=v({outputElement:A,outputXPos:e}))):(s(7,e=0),s(9,a=0))),t.$$.dirty&192&&s(9,a=v({outputElement:A,outputXPos:e}))},l=ge(l),[r,d,p,h,E,k,A,e,S,a,H,T,l,m,f,X,K]}class Re extends Te{constructor(l){super(),Pe(this,l,Le,Ce,se,{label:1,labelHidden:2,min:3,max:4,id:5,value:0})}}const Ke=t=>({}),ye=t=>({});function qe(t){let l=t[1],s,e,a=Ee(t);return{c(){a.c(),s=G()},l(o){a.l(o),s=G()},m(o,m){a.m(o,m),F(o,s,m),e=!0},p(o,m){m&2&&se(l,l=o[1])?(ie(),B(a,1,1,ee),fe(),a=Ee(o),a.c(),W(a,1),a.m(s.parentNode,s)):a.p(o,m)},i(o){e||(W(a),e=!0)},o(o){B(a),e=!1},d(o){o&&b(s),a.d(o)}}}function ze(t){let l=[t[1],t[2]],s,e,a=we(t);return{c(){a.c(),s=G()},l(o){a.l(o),s=G()},m(o,m){a.m(o,m),F(o,s,m),e=!0},p(o,m){m&6&&se(l,l=[o[1],o[2]])?(ie(),B(a,1,1,ee),fe(),a=we(o),a.c(),W(a,1),a.m(s.parentNode,s)):a.p(o,m)},i(o){e||(W(a),e=!0)},o(o){B(a),e=!1},d(o){o&&b(s),a.d(o)}}}function Ee(t){let l,s;return l=new je({props:{content:ke(te(t[0][t[1]-1]),void 0,2),testId:"event-history-json",copyIconTitle:M("common.copy-icon-title"),copySuccessIconTitle:M("common.copy-success-icon-title")}}),{c(){le(l.$$.fragment)},l(e){ne(l.$$.fragment,e)},m(e,a){ae(l,e,a),s=!0},p(e,a){const o={};a&3&&(o.content=ke(te(e[0][e[1]-1]),void 0,2)),l.$set(o)},i(e){s||(W(l.$$.fragment,e),s=!0)},o(e){B(l.$$.fragment,e),s=!1},d(e){oe(l,e)}}}function Me(t){let l,s;return l=new je({props:{content:t[9],testId:"event-history-json",copyIconTitle:M("common.copy-icon-title"),copySuccessIconTitle:M("common.copy-success-icon-title")}}),{c(){le(l.$$.fragment)},l(e){ne(l.$$.fragment,e)},m(e,a){ae(l,e,a),s=!0},p(e,a){const o={};a&512&&(o.content=e[9]),l.$set(o)},i(e){s||(W(l.$$.fragment,e),s=!0)},o(e){B(l.$$.fragment,e),s=!1},d(e){oe(l,e)}}}function we(t){let l,s;return l=new Xe({props:{value:te(t[0][t[1]-1]),$$slots:{default:[Me,({decodedValue:e})=>({9:e}),({decodedValue:e})=>e?512:0]},$$scope:{ctx:t}}}),{c(){le(l.$$.fragment)},l(e){ne(l.$$.fragment,e)},m(e,a){ae(l,e,a),s=!0},p(e,a){const o={};a&3&&(o.value=te(e[0][e[1]-1])),a&768&&(o.$$scope={dirty:a,ctx:e}),l.$set(o)},i(e){s||(W(l.$$.fragment,e),s=!0)},o(e){B(l.$$.fragment,e),s=!1},d(e){oe(l,e)}}}function Fe(t){let l,s,e,a,o,m,d,p,h,E,k,r,S,A,H,g,v,T,f,X,K;function i(n){t[5](n)}let V={label:M("common.event"),labelHidden:!0,id:"range-input-event-history",min:1,max:t[0].length};t[1]!==void 0&&(V.value=t[1]),e=new Re({props:V}),Ne.push(()=>Ue(e,"value",i));const D=t[4].decode,y=Ae(D,t,t[8],ye),J=[ze,qe],O=[];function q(n,u){return n[2]?0:1}return g=q(t),v=O[g]=J[g](t),{c(){l=w("div"),s=w("div"),le(e.$$.fragment),o=L(),m=w("div"),d=w("button"),p=w("span"),E=L(),k=w("button"),r=w("span"),A=L(),y&&y.c(),H=L(),v.c(),T=G(),this.h()},l(n){l=I(n,"DIV",{class:!0});var u=N(l);s=I(u,"DIV",{class:!0});var P=N(s);ne(e.$$.fragment,P),o=R(P),m=I(P,"DIV",{class:!0});var j=N(m);d=I(j,"BUTTON",{class:!0,"aria-label":!0});var Q=N(d);p=I(Q,"SPAN",{class:!0}),N(p).forEach(b),Q.forEach(b),E=R(j),k=I(j,"BUTTON",{class:!0,"aria-label":!0});var z=N(k);r=I(z,"SPAN",{class:!0}),N(r).forEach(b),z.forEach(b),j.forEach(b),P.forEach(b),A=R(u),y&&y.l(u),u.forEach(b),H=R(n),v.l(n),T=G(),this.h()},h(){c(p,"class","arrow arrow-left svelte-1ryp6u1"),U(p,"arrow-left-disabled",t[1]===1),c(d,"class","caret svelte-1ryp6u1"),d.disabled=h=t[1]===1,c(d,"aria-label",M("common.previous")),c(r,"class","arrow arrow-right svelte-1ryp6u1"),U(r,"arrow-right-disabled",t[1]===t[0].length),c(k,"class","caret svelte-1ryp6u1"),k.disabled=S=t[1]===t[0].length,c(k,"aria-label",M("common.next")),c(m,"class","flex items-center justify-center gap-3"),c(s,"class","bg-gray-100 flex w-full gap-4"),c(l,"class","flex gap-4 max-sm:flex-col")},m(n,u){F(n,l,u),_(l,s),ae(e,s,null),_(s,o),_(s,m),_(m,d),_(d,p),_(m,E),_(m,k),_(k,r),_(l,A),y&&y.m(l,null),F(n,H,u),O[g].m(n,u),F(n,T,u),f=!0,X||(K=[C(window,"keydown",t[3]),C(d,"click",t[6]),C(k,"click",t[7])],X=!0)},p(n,[u]){const P={};u&1&&(P.max=n[0].length),!a&&u&2&&(a=!0,P.value=n[1],De(()=>a=!1)),e.$set(P),(!f||u&2)&&U(p,"arrow-left-disabled",n[1]===1),(!f||u&2&&h!==(h=n[1]===1))&&(d.disabled=h),(!f||u&3)&&U(r,"arrow-right-disabled",n[1]===n[0].length),(!f||u&3&&S!==(S=n[1]===n[0].length))&&(k.disabled=S),y&&y.p&&(!f||u&256)&&He(y,D,n,n[8],f?Ve(D,n[8],u,Ke):Se(n[8]),ye);let j=g;g=q(n),g===j?O[g].p(n,u):(ie(),B(O[j],1,1,()=>{O[j]=null}),fe(),v=O[g],v?v.p(n,u):(v=O[g]=J[g](n),v.c()),W(v,1),v.m(T.parentNode,T))},i(n){f||(W(e.$$.fragment,n),W(y,n),W(v),f=!0)},o(n){B(e.$$.fragment,n),B(y,n),B(v),f=!1},d(n){n&&(b(l),b(H),b(T)),oe(e),y&&y.d(n),O[g].d(n),X=!1,Ie(K)}}}function Ge(t,l,s){let e;Oe(t,We,r=>s(2,e=r));let{$$slots:a={},$$scope:o}=l,{events:m=[]}=l,d=1;function p(r){switch(r.code){case"ArrowRight":case"KeyL":r.preventDefault(),r.stopPropagation(),d<m.length&&s(1,d+=1);break;case"ArrowLeft":case"KeyH":r.preventDefault(),r.stopPropagation(),d>1&&s(1,d-=1);break}}function h(r){d=r,s(1,d)}const E=()=>{s(1,d-=1)},k=()=>{s(1,d+=1)};return t.$$set=r=>{"events"in r&&s(0,m=r.events),"$$scope"in r&&s(8,o=r.$$scope)},[m,d,e,p,a,h,E,k,o]}class nt extends Te{constructor(l){super(),Pe(this,l,Ge,Fe,se,{events:0})}}export{nt as W};
