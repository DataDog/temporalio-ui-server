import{s as J,A as T,_ as L,$ as U,c as W,G as y,p as Y,u as P,q as $,r as ee,x as B,k as te,g as ne,y as oe,z as _}from"./scheduler.1-F21fJx.js";import{S as re,i as se,h as ae,c as z,a as O,m as Q,t as p,b as v,d as X,g as le,e as ue}from"./index.biMfyfPX.js";import{e as C}from"./each.rZJ6hA1D.js";import{g as ce,a as ie}from"./tw-merge.k1eX69SP.js";import{p as fe}from"./stores.zURjPX8o.js";import{u as _e}from"./update-query-parameters.W_iZxpga.js";import{S as me,a as ge}from"./simple-select.WLE9JqkE.js";import{d as he,w as A}from"./entry.R3BeP7LP.js";function E(t,e,a){const s=t.slice();return s[14]=e[a],s}function G(t){let e,a;return e=new ge({props:{value:t[14]}}),{c(){z(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,n){Q(e,s,n),a=!0},p(s,n){const l={};n&1&&(l.value=s[14]),e.$set(l)},i(s){a||(p(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){X(e,s)}}}function de(t){let e,a,s=C(t[0].map(K)),n=[];for(let o=0;o<s.length;o+=1)n[o]=G(E(t,s,o));const l=o=>v(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=B()},l(o){for(let r=0;r<n.length;r+=1)n[r].l(o);e=B()},m(o,r){for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(o,r);te(o,e,r),a=!0},p(o,r){if(r&1){s=C(o[0].map(K));let u;for(u=0;u<s.length;u+=1){const m=E(o,s,u);n[u]?(n[u].p(m,r),p(n[u],1)):(n[u]=G(m),n[u].c(),p(n[u],1),n[u].m(e.parentNode,e))}for(le(),u=s.length;u<n.length;u+=1)l(u);ue()}},i(o){if(!a){for(let r=0;r<s.length;r+=1)p(n[r]);a=!0}},o(o){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)v(n[r]);a=!1},d(o){o&&ne(e),oe(n,o)}}}function pe(t){let e;const a=t[9].default,s=Y(a,t,t[11],null),n=s||de(t);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,o){n&&n.m(l,o),e=!0},p(l,o){s?s.p&&(!e||o&2048)&&P(s,a,l,l[11],e?ee(a,l[11],o,null):$(l[11]),null):n&&n.p&&(!e||o&1)&&n.p(l,e?o:-1)},i(l){e||(p(n,l),e=!0)},o(l){v(n,l),e=!1},d(l){n&&n.d(l)}}}function be(t){let e,a,s;const n=[{id:t[2]},t[4],{class:"border-[1px]  outline-none focus-visible:outline focus-visible:outline-blue-700"}];function l(r){t[10](r)}let o={$$slots:{default:[pe]},$$scope:{ctx:t}};for(let r=0;r<n.length;r+=1)o=T(o,n[r]);return t[1]!==void 0&&(o.value=t[1]),e=new me({props:o}),L.push(()=>ae(e,"value",l)),e.$on("change",t[3]),{c(){z(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,u){Q(e,r,u),s=!0},p(r,[u]){const m=u&20?ce(n,[u&4&&{id:r[2]},u&16&&ie(r[4]),n[2]]):{};u&2049&&(m.$$scope={dirty:u,ctx:r}),!a&&u&2&&(a=!0,m.value=r[1],U(()=>a=!1)),e.$set(m)},i(r){s||(p(e.$$.fragment,r),s=!0)},o(r){v(e.$$.fragment,r),s=!1},d(r){X(e,r)}}}const K=t=>t.toString();function Ne(t,e,a){let s;W(t,fe,f=>a(12,s=f));let{$$slots:n={},$$scope:l}=e,{label:o}=e,{value:r}=e,{options:u=[]}=e,{parameter:m=null}=e,{position:g=void 0}=e;const k=`${m||o}-${g?`${g}-filter`:"filter"}`;let d=m&&s.url.searchParams.get(m)||r&&r.toString();const b=()=>{_e({parameter:m,value:d,url:s.url}).then(f=>a(5,r=f))};function R(f){d=f,a(1,d)}return t.$$set=f=>{a(4,e=T(T({},e),y(f))),"label"in f&&a(6,o=f.label),"value"in f&&a(5,r=f.value),"options"in f&&a(0,u=f.options),"parameter"in f&&a(7,m=f.parameter),"position"in f&&a(8,g=f.position),"$$scope"in f&&a(11,l=f.$$scope)},e=y(e),[u,d,k,b,e,r,o,m,g,n,R,l]}class xe extends re{constructor(e){super(),se(this,e,Ne,be,J,{label:6,value:5,options:0,parameter:7,position:8})}}const I=100,V=["100","250","500"],ye="per-page",Be="page",Ce=V[V.length-1],S=(t,e)=>Math.floor(t/e)+1,ve=(t,e)=>e<=9?new Array(e).fill(0).map((a,s)=>s+1):t<5?[1,2,3,4,5,NaN,e-2,e-1,e]:t>=5&&t<=e-5?[1,2,NaN,t-1,t,t+1,NaN,e-1,e]:t>=e-5?[1,2,NaN,e-5,e-4,e-3,e-2,e-1,e]:[],Z=(t,e,a)=>{if(isNaN(t)||t<=1)return 0;if(t>D(e,a)){const s=a.length-e;return s>0?s:0}return Math.floor(e*(t-1))},Ie=(t,e,a)=>{const s=S(t,e);return Z(s,e,a)},w=(t,e)=>Math.min(t-1,e-1),D=(t,e)=>Math.ceil(e.length/t),F=(t,e)=>isNaN(t)||t<0?0:t<e.length?t:e.length-1,j=(t,e)=>t>=e.length||t<0,Ee=(t=[],e=I,a=0)=>{e=Se(e);const s=Ie(q(a),e,t),n=A(e),l=A(s),o=A(void 0),r=c=>{n.set(q(c))},u=()=>{b(),l.update(c=>{const i=c+_(n);return j(i,t)?c:F(i,t)})},m=()=>{b(),l.update(c=>{const i=c-_(n);return F(i,t)})},g=c=>{const i=_(n),h=Z(Number(c),i,t),N=t.slice(h,h+i).length;return _(o)>N-1&&o.set(N-1),l.set(h)},k=c=>{const i=S(Number(c),_(n));g(i)},M=c=>{for(let i=0;i<t.length;i++)if(c(t[i]))return i},d=c=>{const i=M(c);return S(i,_(n))},b=(c=void 0)=>{c===void 0&&o.set(c);const i=t.slice(_(l),_(l)+_(n)).length,h=w(i,_(n));c<=h&&o.set(c)},R=()=>{const c=t.slice(_(l),_(l)+_(n)).length,i=w(c,_(n));_(o)===void 0?o.set(0):_(o)<i&&o.set(_(o)+1)},f=()=>{const c=_(o)>=1?_(o)-1:0;o.set(c)},{subscribe:H}=he([l,n,o],([c,i,h])=>{const N=D(i,t),x=S(c,i);return{items:t.slice(c,c+i),initialItem:t[0],hasPrevious:!j(c-i,t),hasNext:!j(c+i,t),startingIndex:c,endingIndex:F(c+i-1,t),length:t.length,pageSize:i,currentPage:x,totalPages:N,activeRowIndex:h,pageShortcuts:ve(x,N)}});return{subscribe:H,adjustPageSize:r,next:u,previous:m,jumpToPage:g,jumpToIndex:k,findIndex:M,findPage:d,nextRow:R,previousRow:f,setActiveRowIndex:b}},Se=(t=I)=>{const e=q(t);return isNaN(e)||!e?I:e},q=(t=0)=>{const e=Number(t);return isNaN(e)||!e?0:Math.abs(e)};export{xe as F,Ce as M,ye as a,Ee as b,Be as c,I as d,V as o,Se as p};
