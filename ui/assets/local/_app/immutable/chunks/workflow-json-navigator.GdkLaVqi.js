import{s as se,z as oe,e as P,t as le,a as z,b as T,d as H,f as ne,g as k,h as B,j as _,C as de,I as L,F as me,k as Z,l as p,Z as ee,m as X,n as ae,ag as re,H as ye,E as _e,A as pe,M as Ee,p as Te,x as G,V as Ae,u as De,q as He,r as Ve,c as Se,v as Ie}from"./scheduler.CFZRjJlR.js";import{S as we,i as Ne,c as Q,a as Y,m as x,t as j,b as W,d as $,f as Oe,g as ue,e as ie}from"./index.S8Ql5up0.js";import{C as Pe}from"./code-block.JuDxWSax.js";import{g as Ue}from"./spread.rEx3vLA9.js";import{L as je}from"./label.OMW9j0JI.js";import{o as be}from"./omit.d6LgPome.js";import{t as F}from"./translate.HrioCK44.js";import{f as te}from"./index.63YKNQxT.js";import{d as We}from"./events.Tj9UinTF.js";import{s as ge}from"./parse-with-big-int.e3oI4SEy.js";import{P as Ce}from"./payload-decoder.q8qNWAZe.js";function Le(s){let l,t,e,a,o,m,c,b,v=(s[0]??"")+"",I,E,u,y,V,A,w,g,d,N,R,S,K,r,U,h,M=[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},{min:s[3]},{max:s[4]},{step:s[5]},be(s[14],"class")],O={};for(let i=0;i<M.length;i+=1)O=oe(O,M[i]);return S=new je({props:{hidden:s[2],class:"shrink",label:s[1],for:s[6]}}),{c(){l=P("div"),t=P("div"),e=P("div"),a=P("span"),o=le(s[3]),m=z(),c=P("div"),b=P("output"),I=le(v),E=z(),u=P("input"),y=z(),V=P("span"),A=le(s[4]),w=z(),g=P("div"),d=P("input"),R=z(),Q(S.$$.fragment),this.h()},l(i){l=T(i,"DIV",{class:!0});var n=H(l);t=T(n,"DIV",{class:!0});var f=H(t);e=T(f,"DIV",{class:!0});var D=H(e);a=T(D,"SPAN",{class:!0});var C=H(a);o=ne(C,s[3]),C.forEach(k),m=B(D),c=T(D,"DIV",{class:!0});var q=H(c);b=T(q,"OUTPUT",{class:!0,style:!0,for:!0});var J=H(b);I=ne(J,v),J.forEach(k),E=B(q),u=T(q,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),q.forEach(k),y=B(D),V=T(D,"SPAN",{class:!0});var fe=H(V);A=ne(fe,s[4]),fe.forEach(k),D.forEach(k),w=B(f),g=T(f,"DIV",{class:!0});var ce=H(g);d=T(ce,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),ce.forEach(k),R=B(f),Y(S.$$.fragment,f),f.forEach(k),n.forEach(k),this.h()},h(){_(a,"class","absolute -bottom-6 left-0 text-xs font-normal"),_(b,"class","absolute -top-6 text-center text-xs font-normal"),de(b,"left","calc("+s[8]+"% - ("+s[10]+"px))"),_(b,"for","range"),L(b,"hidden",!s[9]),me(u,O),L(u,"svelte-1y1vo96",!0),_(c,"class","relative flex items-center"),_(V,"class","absolute -bottom-6 right-0 text-xs font-normal"),_(e,"class","relative w-auto grow"),_(d,"id",s[6]),_(d,"class","numeric-input svelte-1y1vo96"),_(d,"type","number"),_(d,"inputmode","numeric"),_(d,"min",s[3]),_(d,"max",s[4]),_(d,"step",N=s[13].step),L(d,"invalid",!s[9]),_(g,"class","flex shrink"),_(t,"class","range-input-container svelte-1y1vo96"),_(l,"class",K="w-full px-1 py-4 "+s[13].class+" svelte-1y1vo96")},m(i,n){Z(i,l,n),p(l,t),p(t,e),p(e,a),p(a,o),p(e,m),p(e,c),p(c,b),p(b,I),s[15](b),p(c,E),p(c,u),u.autofocus&&u.focus(),ee(u,s[0]),p(e,y),p(e,V),p(V,A),p(t,w),p(t,g),p(g,d),ee(d,s[0]),p(t,R),x(S,t,null),r=!0,U||(h=[X(window,"resize",s[12]),X(u,"change",s[16]),X(u,"input",s[16]),X(u,"input",s[11]),X(d,"input",s[17]),X(d,"input",s[11])],U=!0)},p(i,[n]){(!r||n&8)&&ae(o,i[3]),(!r||n&1)&&v!==(v=(i[0]??"")+"")&&ae(I,v),(!r||n&1280)&&de(b,"left","calc("+i[8]+"% - ("+i[10]+"px))"),(!r||n&512)&&L(b,"hidden",!i[9]),me(u,O=Ue(M,[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},(!r||n&8)&&{min:i[3]},(!r||n&16)&&{max:i[4]},(!r||n&32)&&{step:i[5]},n&16384&&be(i[14],"class")])),n&1&&ee(u,i[0]),L(u,"svelte-1y1vo96",!0),(!r||n&16)&&ae(A,i[4]),(!r||n&64)&&_(d,"id",i[6]),(!r||n&8)&&_(d,"min",i[3]),(!r||n&16)&&_(d,"max",i[4]),(!r||n&8192&&N!==(N=i[13].step))&&_(d,"step",N),n&1&&re(d.value)!==i[0]&&ee(d,i[0]),(!r||n&512)&&L(d,"invalid",!i[9]);const f={};n&4&&(f.hidden=i[2]),n&2&&(f.label=i[1]),n&64&&(f.for=i[6]),S.$set(f),(!r||n&8192&&K!==(K="w-full px-1 py-4 "+i[13].class+" svelte-1y1vo96"))&&_(l,"class",K)},i(i){r||(j(S.$$.fragment,i),r=!0)},o(i){W(S.$$.fragment,i),r=!1},d(i){i&&k(l),s[15](null),$(S),U=!1,ye(h)}}}function Re(s,l,t){let e,a;const o=["label","labelHidden","min","max","step","id","value"];let m=_e(l,o),{label:c}=l,{labelHidden:b=!1}=l,{min:v=void 0}=l,{max:I=void 0}=l,{step:E=void 0}=l,{id:u=void 0}=l,{value:y=Math.round((v+I)/2)}=l,V=!0,A;const w=r=>{if(Number.isNaN(r.currentTarget.valueAsNumber)){t(0,y=v);return}t(9,V=r.currentTarget.valueAsNumber>=v&&r.currentTarget.valueAsNumber<=I)},g=({value:r,min:U,max:h})=>(r-U)*100/(h-U),d=({outputElement:r,outputXPos:U})=>{var h;const M=(h=r==null?void 0:r.clientWidth)!==null&&h!==void 0?h:15;return Math.floor(U*M/100)},N=()=>{t(8,e=g({value:y,min:v,max:I})),t(10,a=d({outputElement:A,outputXPos:e}))};function R(r){Ee[r?"unshift":"push"](()=>{A=r,t(7,A)})}function S(){y=re(this.value),t(0,y)}function K(){y=re(this.value),t(0,y)}return s.$$set=r=>{t(13,l=oe(oe({},l),pe(r))),t(14,m=_e(l,o)),"label"in r&&t(1,c=r.label),"labelHidden"in r&&t(2,b=r.labelHidden),"min"in r&&t(3,v=r.min),"max"in r&&t(4,I=r.max),"step"in r&&t(5,E=r.step),"id"in r&&t(6,u=r.id),"value"in r&&t(0,y=r.value)},s.$$.update=()=>{s.$$.dirty&25&&t(8,e=g({value:y,min:v,max:I})),s.$$.dirty&409&&(y?(t(8,e=g({value:y,min:v,max:I})),t(10,a=d({outputElement:A,outputXPos:e}))):(t(8,e=0),t(10,a=0))),s.$$.dirty&384&&t(10,a=d({outputElement:A,outputXPos:e}))},l=pe(l),[y,c,b,v,I,E,u,A,e,V,a,w,N,l,m,R,S,K]}class Xe extends we{constructor(l){super(),Ne(this,l,Re,Le,se,{label:1,labelHidden:2,min:3,max:4,step:5,id:6,value:0})}}const ze=s=>({}),he=s=>({});function Be(s){let l=s[1],t,e,a=ve(s);return{c(){a.c(),t=G()},l(o){a.l(o),t=G()},m(o,m){a.m(o,m),Z(o,t,m),e=!0},p(o,m){m&2&&se(l,l=o[1])?(ue(),W(a,1,1,Ie),ie(),a=ve(o),a.c(),j(a,1),a.m(t.parentNode,t)):a.p(o,m)},i(o){e||(j(a),e=!0)},o(o){W(a),e=!1},d(o){o&&k(t),a.d(o)}}}function Ke(s){let l=[s[1],s[2]],t,e,a=ke(s);return{c(){a.c(),t=G()},l(o){a.l(o),t=G()},m(o,m){a.m(o,m),Z(o,t,m),e=!0},p(o,m){m&6&&se(l,l=[o[1],o[2]])?(ue(),W(a,1,1,Ie),ie(),a=ke(o),a.c(),j(a,1),a.m(t.parentNode,t)):a.p(o,m)},i(o){e||(j(a),e=!0)},o(o){W(a),e=!1},d(o){o&&k(t),a.d(o)}}}function ve(s){let l,t;return l=new Pe({props:{content:ge(te(s[0][s[1]-1]),void 0,2),testId:"event-history-json",copyIconTitle:F("common.copy-icon-title"),copySuccessIconTitle:F("common.copy-success-icon-title")}}),{c(){Q(l.$$.fragment)},l(e){Y(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&3&&(o.content=ge(te(e[0][e[1]-1]),void 0,2)),l.$set(o)},i(e){t||(j(l.$$.fragment,e),t=!0)},o(e){W(l.$$.fragment,e),t=!1},d(e){$(l,e)}}}function Me(s){let l,t;return l=new Pe({props:{content:s[9],testId:"event-history-json",copyIconTitle:F("common.copy-icon-title"),copySuccessIconTitle:F("common.copy-success-icon-title")}}),{c(){Q(l.$$.fragment)},l(e){Y(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&512&&(o.content=e[9]),l.$set(o)},i(e){t||(j(l.$$.fragment,e),t=!0)},o(e){W(l.$$.fragment,e),t=!1},d(e){$(l,e)}}}function ke(s){let l,t;return l=new Ce({props:{value:te(s[0][s[1]-1]),$$slots:{default:[Me,({decodedValue:e})=>({9:e}),({decodedValue:e})=>e?512:0]},$$scope:{ctx:s}}}),{c(){Q(l.$$.fragment)},l(e){Y(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&3&&(o.value=te(e[0][e[1]-1])),a&768&&(o.$$scope={dirty:a,ctx:e}),l.$set(o)},i(e){t||(j(l.$$.fragment,e),t=!0)},o(e){W(l.$$.fragment,e),t=!1},d(e){$(l,e)}}}function qe(s){let l,t,e,a,o,m,c,b,v,I,E,u,y,V,A,w,g,d,N,R,S;function K(n){s[5](n)}let r={label:F("common.event"),labelHidden:!0,id:"range-input-event-history",min:1,max:s[0].length};s[1]!==void 0&&(r.value=s[1]),e=new Xe({props:r}),Ee.push(()=>Oe(e,"value",K));const U=s[4].decode,h=Te(U,s,s[8],he),M=[Ke,Be],O=[];function i(n,f){return n[2]?0:1}return w=i(s),g=O[w]=M[w](s),{c(){l=P("div"),t=P("div"),Q(e.$$.fragment),o=z(),m=P("div"),c=P("button"),b=P("span"),I=z(),E=P("button"),u=P("span"),V=z(),h&&h.c(),A=z(),g.c(),d=G(),this.h()},l(n){l=T(n,"DIV",{class:!0});var f=H(l);t=T(f,"DIV",{class:!0});var D=H(t);Y(e.$$.fragment,D),o=B(D),m=T(D,"DIV",{class:!0});var C=H(m);c=T(C,"BUTTON",{class:!0,"aria-label":!0});var q=H(c);b=T(q,"SPAN",{class:!0}),H(b).forEach(k),q.forEach(k),I=B(C),E=T(C,"BUTTON",{class:!0,"aria-label":!0});var J=H(E);u=T(J,"SPAN",{class:!0}),H(u).forEach(k),J.forEach(k),C.forEach(k),D.forEach(k),V=B(f),h&&h.l(f),f.forEach(k),A=B(n),g.l(n),d=G(),this.h()},h(){_(b,"class","arrow arrow-left svelte-1ryp6u1"),L(b,"arrow-left-disabled",s[1]===1),_(c,"class","caret svelte-1ryp6u1"),c.disabled=v=s[1]===1,_(c,"aria-label",F("common.previous")),_(u,"class","arrow arrow-right svelte-1ryp6u1"),L(u,"arrow-right-disabled",s[1]===s[0].length),_(E,"class","caret svelte-1ryp6u1"),E.disabled=y=s[1]===s[0].length,_(E,"aria-label",F("common.next")),_(m,"class","flex items-center justify-center gap-3"),_(t,"class","bg-gray-100 flex w-full gap-4"),_(l,"class","flex gap-4 max-sm:flex-col")},m(n,f){Z(n,l,f),p(l,t),x(e,t,null),p(t,o),p(t,m),p(m,c),p(c,b),p(m,I),p(m,E),p(E,u),p(l,V),h&&h.m(l,null),Z(n,A,f),O[w].m(n,f),Z(n,d,f),N=!0,R||(S=[X(window,"keydown",s[3]),X(c,"click",s[6]),X(E,"click",s[7])],R=!0)},p(n,[f]){const D={};f&1&&(D.max=n[0].length),!a&&f&2&&(a=!0,D.value=n[1],Ae(()=>a=!1)),e.$set(D),(!N||f&2)&&L(b,"arrow-left-disabled",n[1]===1),(!N||f&2&&v!==(v=n[1]===1))&&(c.disabled=v),(!N||f&3)&&L(u,"arrow-right-disabled",n[1]===n[0].length),(!N||f&3&&y!==(y=n[1]===n[0].length))&&(E.disabled=y),h&&h.p&&(!N||f&256)&&De(h,U,n,n[8],N?Ve(U,n[8],f,ze):He(n[8]),he);let C=w;w=i(n),w===C?O[w].p(n,f):(ue(),W(O[C],1,1,()=>{O[C]=null}),ie(),g=O[w],g?g.p(n,f):(g=O[w]=M[w](n),g.c()),j(g,1),g.m(d.parentNode,d))},i(n){N||(j(e.$$.fragment,n),j(h,n),j(g),N=!0)},o(n){W(e.$$.fragment,n),W(h,n),W(g),N=!1},d(n){n&&(k(l),k(A),k(d)),$(e),h&&h.d(n),O[w].d(n),R=!1,ye(S)}}}function Fe(s,l,t){let e;Se(s,We,u=>t(2,e=u));let{$$slots:a={},$$scope:o}=l,{events:m=[]}=l,c=1;function b(u){switch(u.code){case"ArrowRight":case"KeyL":u.preventDefault(),u.stopPropagation(),c<m.length&&t(1,c+=1);break;case"ArrowLeft":case"KeyH":u.preventDefault(),u.stopPropagation(),c>1&&t(1,c-=1);break}}function v(u){c=u,t(1,c)}const I=()=>{t(1,c-=1)},E=()=>{t(1,c+=1)};return s.$$set=u=>{"events"in u&&t(0,m=u.events),"$$scope"in u&&t(8,o=u.$$scope)},[m,c,e,b,a,v,I,E,o]}class nt extends we{constructor(l){super(),Ne(this,l,Fe,qe,se,{events:0})}}export{nt as W};
