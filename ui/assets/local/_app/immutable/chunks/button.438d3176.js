import{S as fe,i as ue,s as de,e as O,b as p,v as N,d as _,f as I,g as m,h as k,a0 as D,Z as q,a1 as be,O as ce,K as $,k as j,a as S,l as B,m as C,c as P,_ as F,D as V,F as L,H as me,I as ge,L as x,M as ee,N as ie,$ as te,y as z,z as w,A as R,a3 as he,B as A,q as le,r as re,u as ne}from"./index.bac36631.js";import{B as oe}from"./badge.379095dc.js";import{I as E}from"./icon.10ff0327.js";import{L as _e}from"./link.ecee709c.js";function se(l){var e,i,t="";if(typeof l=="string"||typeof l=="number")t+=l;else if(typeof l=="object")if(Array.isArray(l))for(e=0;e<l.length;e++)l[e]&&(i=se(l[e]))&&(t&&(t+=" "),t+=i);else for(e in l)l[e]&&(t&&(t+=" "),t+=e);return t}function ve(){for(var l,e,i=0,t="";i<arguments.length;)(l=arguments[i++])&&(e=se(l))&&(t&&(t+=" "),t+=e);return t}const H=l=>typeof l=="boolean"?"".concat(l):l===0?"0":l,W=ve,ke=(l,e)=>i=>{var t;if((e==null?void 0:e.variants)==null)return W(l,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:r,defaultVariants:n}=e,o=Object.keys(r).map(a=>{const b=i==null?void 0:i[a],s=n==null?void 0:n[a];if(b===null)return null;const f=H(b)||H(s);return r[a][f]}),v=i&&Object.entries(i).reduce((a,b)=>{let[s,f]=b;return f===void 0||(a[s]=f),a},{}),d=e==null||(t=e.compoundVariants)===null||t===void 0?void 0:t.reduce((a,b)=>{let{class:s,className:f,...h}=b;return Object.entries(h).every(M=>{let[y,u]=M;return Array.isArray(u)?u.includes({...n,...v}[y]):{...n,...v}[y]===u})?[...a,s,f]:a},[]);return W(l,o,d,i==null?void 0:i.class,i==null?void 0:i.className)};function pe(l){let e,i,t,r,n,o,v,d,a=(l[6]||l[5])&&Z(l);const b=l[15].default,s=$(b,l,l[17],null);let f=l[7]&&G(l),h=l[8]>0&&J(l),M=[{disabled:l[4]},{id:l[9]},{type:"button"},{class:n=l[13]({variant:l[0],size:l[1],borderModifier:l[2],borderRadiusModifier:l[3]})},l[14]],y={};for(let u=0;u<M.length;u+=1)y=q(y,M[u]);return{c(){e=j("button"),a&&a.c(),i=S(),s&&s.c(),t=S(),f&&f.c(),r=S(),h&&h.c(),this.h()},l(u){e=B(u,"BUTTON",{id:!0,type:!0,class:!0});var g=C(e);a&&a.l(g),i=P(g),s&&s.l(g),t=P(g),f&&f.l(g),r=P(g),h&&h.l(g),g.forEach(k),this.h()},h(){F(e,y),V(e,"active",l[12])},m(u,g){p(u,e,g),a&&a.m(e,null),L(e,i),s&&s.m(e,null),L(e,t),f&&f.m(e,null),L(e,r),h&&h.m(e,null),e.autofocus&&e.focus(),o=!0,v||(d=me(e,"click",ge(l[16])),v=!0)},p(u,g){u[6]||u[5]?a?(a.p(u,g),g&96&&m(a,1)):(a=Z(u),a.c(),m(a,1),a.m(e,i)):a&&(N(),_(a,1,1,()=>{a=null}),I()),s&&s.p&&(!o||g&131072)&&x(s,b,u,u[17],o?ie(b,u[17],g,null):ee(u[17]),null),u[7]?f?(f.p(u,g),g&128&&m(f,1)):(f=G(u),f.c(),m(f,1),f.m(e,r)):f&&(N(),_(f,1,1,()=>{f=null}),I()),u[8]>0?h?(h.p(u,g),g&256&&m(h,1)):(h=J(u),h.c(),m(h,1),h.m(e,null)):h&&(N(),_(h,1,1,()=>{h=null}),I()),F(e,y=te(M,[(!o||g&16)&&{disabled:u[4]},(!o||g&512)&&{id:u[9]},{type:"button"},(!o||g&15&&n!==(n=u[13]({variant:u[0],size:u[1],borderModifier:u[2],borderRadiusModifier:u[3]})))&&{class:n},g&16384&&u[14]])),V(e,"active",u[12])},i(u){o||(m(a),m(s,u),m(f),m(h),o=!0)},o(u){_(a),_(s,u),_(f),_(h),o=!1},d(u){u&&k(e),a&&a.d(),s&&s.d(u),f&&f.d(),h&&h.d(),v=!1,d()}}}function ye(l){let e,i;const t=[{target:l[11]},{href:l[10]},{id:l[9]},{role:"button"},{type:"button"},{class:l[13]({variant:l[0],size:l[1],borderModifier:l[2],borderRadiusModifier:l[3]})},l[14]];let r={$$slots:{default:[Ie]},$$scope:{ctx:l}};for(let n=0;n<t.length;n+=1)r=q(r,t[n]);return e=new _e({props:r}),{c(){z(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){R(e,n,o),i=!0},p(n,o){const v=o&28175?te(t,[o&2048&&{target:n[11]},o&1024&&{href:n[10]},o&512&&{id:n[9]},t[3],t[4],o&8207&&{class:n[13]({variant:n[0],size:n[1],borderModifier:n[2],borderRadiusModifier:n[3]})},o&16384&&he(n[14])]):{};o&131552&&(v.$$scope={dirty:o,ctx:n}),e.$set(v)},i(n){i||(m(e.$$.fragment,n),i=!0)},o(n){_(e.$$.fragment,n),i=!1},d(n){A(e,n)}}}function Z(l){let e,i,t;return i=new E({props:{name:l[5]?"spinner":l[6]}}),{c(){e=j("span"),z(i.$$.fragment),this.h()},l(r){e=B(r,"SPAN",{});var n=C(e);w(i.$$.fragment,n),n.forEach(k),this.h()},h(){V(e,"animate-spin",l[5])},m(r,n){p(r,e,n),R(i,e,null),t=!0},p(r,n){const o={};n&96&&(o.name=r[5]?"spinner":r[6]),i.$set(o),(!t||n&32)&&V(e,"animate-spin",r[5])},i(r){t||(m(i.$$.fragment,r),t=!0)},o(r){_(i.$$.fragment,r),t=!1},d(r){r&&k(e),A(i)}}}function G(l){let e,i,t;return i=new E({props:{name:l[7]}}),{c(){e=j("span"),z(i.$$.fragment)},l(r){e=B(r,"SPAN",{});var n=C(e);w(i.$$.fragment,n),n.forEach(k)},m(r,n){p(r,e,n),R(i,e,null),t=!0},p(r,n){const o={};n&128&&(o.name=r[7]),i.$set(o)},i(r){t||(m(i.$$.fragment,r),t=!0)},o(r){_(i.$$.fragment,r),t=!1},d(r){r&&k(e),A(i)}}}function J(l){let e,i;return e=new oe({props:{class:"badge absolute top-0 right-0 origin-bottom-left translate-y-[-10px] translate-x-[10px]",type:"count",$$slots:{default:[Me]},$$scope:{ctx:l}}}),{c(){z(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){R(e,t,r),i=!0},p(t,r){const n={};r&131328&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){i||(m(e.$$.fragment,t),i=!0)},o(t){_(e.$$.fragment,t),i=!1},d(t){A(e,t)}}}function Me(l){let e;return{c(){e=le(l[8])},l(i){e=re(i,l[8])},m(i,t){p(i,e,t)},p(i,t){t&256&&ne(e,i[8])},d(i){i&&k(e)}}}function Q(l){let e,i,t;return i=new E({props:{name:l[5]?"spinner":l[6]}}),{c(){e=j("span"),z(i.$$.fragment),this.h()},l(r){e=B(r,"SPAN",{});var n=C(e);w(i.$$.fragment,n),n.forEach(k),this.h()},h(){V(e,"animate-spin",l[5])},m(r,n){p(r,e,n),R(i,e,null),t=!0},p(r,n){const o={};n&96&&(o.name=r[5]?"spinner":r[6]),i.$set(o),(!t||n&32)&&V(e,"animate-spin",r[5])},i(r){t||(m(i.$$.fragment,r),t=!0)},o(r){_(i.$$.fragment,r),t=!1},d(r){r&&k(e),A(i)}}}function X(l){let e,i,t;return i=new E({props:{name:l[7]}}),{c(){e=j("span"),z(i.$$.fragment)},l(r){e=B(r,"SPAN",{});var n=C(e);w(i.$$.fragment,n),n.forEach(k)},m(r,n){p(r,e,n),R(i,e,null),t=!0},p(r,n){const o={};n&128&&(o.name=r[7]),i.$set(o)},i(r){t||(m(i.$$.fragment,r),t=!0)},o(r){_(i.$$.fragment,r),t=!1},d(r){r&&k(e),A(i)}}}function Y(l){let e,i;return e=new oe({props:{class:"badge absolute top-0 right-0 origin-bottom-left translate-y-[-10px] translate-x-[10px]",type:"count",$$slots:{default:[Ne]},$$scope:{ctx:l}}}),{c(){z(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){R(e,t,r),i=!0},p(t,r){const n={};r&131328&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){i||(m(e.$$.fragment,t),i=!0)},o(t){_(e.$$.fragment,t),i=!1},d(t){A(e,t)}}}function Ne(l){let e;return{c(){e=le(l[8])},l(i){e=re(i,l[8])},m(i,t){p(i,e,t)},p(i,t){t&256&&ne(e,i[8])},d(i){i&&k(e)}}}function Ie(l){let e,i,t,r,n,o=(l[6]||l[5])&&Q(l);const v=l[15].default,d=$(v,l,l[17],null);let a=l[7]&&X(l),b=l[8]>0&&Y(l);return{c(){o&&o.c(),e=S(),d&&d.c(),i=S(),a&&a.c(),t=S(),b&&b.c(),r=O()},l(s){o&&o.l(s),e=P(s),d&&d.l(s),i=P(s),a&&a.l(s),t=P(s),b&&b.l(s),r=O()},m(s,f){o&&o.m(s,f),p(s,e,f),d&&d.m(s,f),p(s,i,f),a&&a.m(s,f),p(s,t,f),b&&b.m(s,f),p(s,r,f),n=!0},p(s,f){s[6]||s[5]?o?(o.p(s,f),f&96&&m(o,1)):(o=Q(s),o.c(),m(o,1),o.m(e.parentNode,e)):o&&(N(),_(o,1,1,()=>{o=null}),I()),d&&d.p&&(!n||f&131072)&&x(d,v,s,s[17],n?ie(v,s[17],f,null):ee(s[17]),null),s[7]?a?(a.p(s,f),f&128&&m(a,1)):(a=X(s),a.c(),m(a,1),a.m(t.parentNode,t)):a&&(N(),_(a,1,1,()=>{a=null}),I()),s[8]>0?b?(b.p(s,f),f&256&&m(b,1)):(b=Y(s),b.c(),m(b,1),b.m(r.parentNode,r)):b&&(N(),_(b,1,1,()=>{b=null}),I())},i(s){n||(m(o),m(d,s),m(a),m(b),n=!0)},o(s){_(o),_(d,s),_(a),_(b),n=!1},d(s){o&&o.d(s),s&&k(e),d&&d.d(s),s&&k(i),a&&a.d(s),s&&k(t),b&&b.d(s),s&&k(r)}}}function ze(l){let e,i,t,r;const n=[ye,pe],o=[];function v(d,a){return d[10]&&!d[4]?0:1}return e=v(l),i=o[e]=n[e](l),{c(){i.c(),t=O()},l(d){i.l(d),t=O()},m(d,a){o[e].m(d,a),p(d,t,a),r=!0},p(d,[a]){let b=e;e=v(d),e===b?o[e].p(d,a):(N(),_(o[b],1,1,()=>{o[b]=null}),I(),i=o[e],i?i.p(d,a):(i=o[e]=n[e](d),i.c()),m(i,1),i.m(t.parentNode,t))},i(d){r||(m(i),r=!0)},o(d){_(i),r=!1},d(d){o[e].d(d),d&&k(t)}}}function we(l,e,i){const t=["variant","size","borderModifier","borderRadiusModifier","disabled","loading","leadingIcon","trailingIcon","count","id","href","target","active"];let r=D(e,t),{$$slots:n={},$$scope:o}=e;const v=ke(["relative","flex","w-fit","items-center","justify-center","gap-2","rounded-lg","disabled:opacity-50","disabled:cursor-not-allowed","border-2","border-box","transition-colors","transition-shadow","focus-visible:outline-none"],{variants:{variant:{primary:"border-gray-900 bg-gray-900 bg-gradient-to-br text-white [&:not(:disabled):hover]:shadow-focus [&:not(:disabled):hover]:shadow-blue-600/50 [&:not(:disabled):hover]:from-blue-100 [&:not(:disabled):hover]:to-purple-100 [&:not(:disabled):hover]:text-gray-900 [&:not(:disabled):hover]:border-indigo-600 focus-visible:shadow-focus focus-visible:shadow-blue-600/50 focus-visible:from-blue-100 focus-visible:to-purple-100 focus-visible:text-gray-900 focus-visible:border-indigo-600",secondary:"border-gray-900 bg-white text-gray-900 [&:not(:disabled):hover]:shadow-focus [&:not(:disabled):hover]:shadow-blue-600/50 [&:not(:disabled):hover]:bg-gray-900 [&:not(:disabled):hover]:text-white [&:not(:disabled):hover]:border-white focus-visible:shadow-focus focus-visible:shadow-blue-600/50 focus-visible:bg-gray-900 focus-visible:text-white focus-visible:border-white",destructive:"border-red-700 bg-red-700 text-white [&:not(:disabled):hover]:shadow-focus [&:not(:disabled):hover]:shadow-red-200/50 [&:not(:disabled):hover]:border-white focus-visible:border-white focus-visible:shadow-focus focus-visible:shadow-red-200/50",ghost:"border-[transparent] bg-[transparent] text-gray-600 [&:not(:disabled):hover]:shadow-focus [&:not(:disabled):hover]:shadow-blue-600/50 [&:not(:disabled):hover]:bg-indigo-100 [&:not(:disabled):hover]:border-indigo-600 focus-visible:shadow-focus focus-visible:shadow-blue-600/50 focus-visible:bg-indigo-100 focus-visible:border-indigo-600","table-header":"border-gray-900 bg-gray-900 text-white focus-visible:shadow-focus focus-visible:shadow-blue-600/50 focus-visible:border-white"},size:{xs:"h-8 text-xs px-2 py-1",sm:"h-9 text-sm px-4 py-1.5",md:"h-10 text-base px-4 py-2",lg:"h-11 text-lg px-5 py-2.5"},borderModifier:{borderless:"border-0","borderless-left":"border-l-0","borderless-right":"border-r-0"},borderRadiusModifier:{square:"rounded-none","square-left":"rounded-l-none","square-right":"rounded-r-none"}},defaultVariants:{variant:"primary",size:"md"}});let{variant:d="primary"}=e,{size:a="md"}=e,{borderModifier:b=null}=e,{borderRadiusModifier:s=null}=e,{disabled:f=!1}=e,{loading:h=!1}=e,{leadingIcon:M=null}=e,{trailingIcon:y=null}=e,{count:u=0}=e,{id:g=null}=e,{href:T=null}=e,{target:K=null}=e,{active:U=!1}=e;function ae(c){ce.call(this,l,c)}return l.$$set=c=>{e=q(q({},e),be(c)),i(14,r=D(e,t)),"variant"in c&&i(0,d=c.variant),"size"in c&&i(1,a=c.size),"borderModifier"in c&&i(2,b=c.borderModifier),"borderRadiusModifier"in c&&i(3,s=c.borderRadiusModifier),"disabled"in c&&i(4,f=c.disabled),"loading"in c&&i(5,h=c.loading),"leadingIcon"in c&&i(6,M=c.leadingIcon),"trailingIcon"in c&&i(7,y=c.trailingIcon),"count"in c&&i(8,u=c.count),"id"in c&&i(9,g=c.id),"href"in c&&i(10,T=c.href),"target"in c&&i(11,K=c.target),"active"in c&&i(12,U=c.active),"$$scope"in c&&i(17,o=c.$$scope)},[d,a,b,s,f,h,M,y,u,g,T,K,U,v,r,n,ae,o]}class Ve extends fe{constructor(e){super(),ue(this,e,we,ze,de,{variant:0,size:1,borderModifier:2,borderRadiusModifier:3,disabled:4,loading:5,leadingIcon:6,trailingIcon:7,count:8,id:9,href:10,target:11,active:12})}}export{Ve as B,ke as c};
