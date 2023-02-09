import{S as G,i as H,s as K,M as g,k as p,w as O,l as I,m as E,x as Q,h as _,n as d,Q as r,b as v,y as R,T as U,a0 as V,f as h,t as k,z as B,L as J,N as M,O as W,e as L,g as X,d as Y,F as S,R as N,an as Z,G as j,H as q,I as z,D as y}from"./index-3630b6f8.js";import{T as w}from"./tooltip-c35f0d71.js";function x(f){let e,s,a,c,o;const t=f[12].default,l=S(t,f,f[14],null);return{c(){e=p("li"),l&&l.c(),this.h()},l(i){e=I(i,"LI",{role:!0,"data-testid":!0,class:!0});var u=E(e);l&&l.l(u),u.forEach(_),this.h()},h(){d(e,"role","menuitem"),d(e,"data-testid",f[6]),d(e,"class",s="menu-item "+f[10].class+" svelte-1dmp3kc"),r(e,"dark",f[0]),r(e,"destructive",f[2]),r(e,"selected",f[1]),r(e,"active",f[3]),r(e,"disabled",f[4])},m(i,u){v(i,e,u),l&&l.m(e,null),a=!0,c||(o=[N(e,"click",Z(f[13])),N(e,"keyup",f[9])],c=!0)},p(i,u){l&&l.p&&(!a||u&16384)&&j(l,t,i,i[14],a?z(t,i[14],u,null):q(i[14]),null),(!a||u&64)&&d(e,"data-testid",i[6]),(!a||u&1024&&s!==(s="menu-item "+i[10].class+" svelte-1dmp3kc"))&&d(e,"class",s),(!a||u&1025)&&r(e,"dark",i[0]),(!a||u&1028)&&r(e,"destructive",i[2]),(!a||u&1026)&&r(e,"selected",i[1]),(!a||u&1032)&&r(e,"active",i[3]),(!a||u&1040)&&r(e,"disabled",i[4])},i(i){a||(h(l,i),a=!0)},o(i){k(l,i),a=!1},d(i){i&&_(e),l&&l.d(i),c=!1,y(o)}}}function $(f){let e,s,a;const c=f[12].default,o=S(c,f,f[14],null);return{c(){e=p("a"),o&&o.c(),this.h()},l(t){e=I(t,"A",{href:!0,role:!0,"data-testid":!0,class:!0});var l=E(e);o&&o.l(l),l.forEach(_),this.h()},h(){d(e,"href",f[5]),d(e,"role","menuitem"),d(e,"data-testid",f[6]),d(e,"class",s="menu-item inline-block "+f[10].class+" svelte-1dmp3kc"),r(e,"dark",f[0]),r(e,"destructive",f[2]),r(e,"selected",f[1]),r(e,"active",f[3]),r(e,"disabled",f[4])},m(t,l){v(t,e,l),o&&o.m(e,null),a=!0},p(t,l){o&&o.p&&(!a||l&16384)&&j(o,c,t,t[14],a?z(c,t[14],l,null):q(t[14]),null),(!a||l&32)&&d(e,"href",t[5]),(!a||l&64)&&d(e,"data-testid",t[6]),(!a||l&1024&&s!==(s="menu-item inline-block "+t[10].class+" svelte-1dmp3kc"))&&d(e,"class",s),(!a||l&1025)&&r(e,"dark",t[0]),(!a||l&1028)&&r(e,"destructive",t[2]),(!a||l&1026)&&r(e,"selected",t[1]),(!a||l&1032)&&r(e,"active",t[3]),(!a||l&1040)&&r(e,"disabled",t[4])},i(t){a||(h(o,t),a=!0)},o(t){k(o,t),a=!1},d(t){t&&_(e),o&&o.d(t)}}}function ee(f){let e,s,a,c;const o=[$,x],t=[];function l(i,u){return i[5]?0:1}return e=l(f),s=t[e]=o[e](f),{c(){s.c(),a=L()},l(i){s.l(i),a=L()},m(i,u){t[e].m(i,u),v(i,a,u),c=!0},p(i,u){let m=e;e=l(i),e===m?t[e].p(i,u):(X(),k(t[m],1,1,()=>{t[m]=null}),Y(),s=t[e],s?s.p(i,u):(s=t[e]=o[e](i),s.c()),h(s,1),s.m(a.parentNode,a))},i(i){c||(h(s),c=!0)},o(i){k(s),c=!1},d(i){t[e].d(i),i&&_(a)}}}function te(f){let e,s,a;const c=[{class:"w-full"},{hide:!f[8]},{text:f[8]},f[7]];let o={$$slots:{default:[ee]},$$scope:{ctx:f}};for(let t=0;t<c.length;t+=1)o=g(o,c[t]);return s=new w({props:o}),{c(){e=p("div"),O(s.$$.fragment),this.h()},l(t){e=I(t,"DIV",{class:!0});var l=E(e);Q(s.$$.fragment,l),l.forEach(_),this.h()},h(){d(e,"class","menu-item-wrapper svelte-1dmp3kc"),r(e,"disabled",f[4])},m(t,l){v(t,e,l),R(s,e,null),a=!0},p(t,[l]){const i=l&384?U(c,[c[0],l&256&&{hide:!t[8]},l&256&&{text:t[8]},l&128&&V(t[7])]):{};l&17535&&(i.$$scope={dirty:l,ctx:t}),s.$set(i),(!a||l&16)&&r(e,"disabled",t[4])},i(t){a||(h(s.$$.fragment,t),a=!0)},o(t){k(s.$$.fragment,t),a=!1},d(t){t&&_(e),B(s)}}}function le(f,e,s){let a,c,{$$slots:o={},$$scope:t}=e,{dark:l=!1}=e,{selected:i=!1}=e,{destructive:u=!1}=e,{active:m=!1}=e,{disabled:P=!1}=e,{href:T=""}=e,{testId:D=null}=e,{tooltipProps:b={}}=e;const A=J(),C=n=>{(n.key===" "||n.key==="Enter")&&A("click")};function F(n){W.call(this,f,n)}return f.$$set=n=>{s(10,e=g(g({},e),M(n))),"dark"in n&&s(0,l=n.dark),"selected"in n&&s(1,i=n.selected),"destructive"in n&&s(2,u=n.destructive),"active"in n&&s(3,m=n.active),"disabled"in n&&s(4,P=n.disabled),"href"in n&&s(5,T=n.href),"testId"in n&&s(6,D=n.testId),"tooltipProps"in n&&s(11,b=n.tooltipProps),"$$scope"in n&&s(14,t=n.$$scope)},f.$$.update=()=>{f.$$.dirty&2048&&s(8,{text:a,...c}=b,a,(s(7,c),s(11,b)))},e=M(e),[l,i,u,m,P,T,D,c,a,C,e,b,o,F,t]}class ie extends G{constructor(e){super(),H(this,e,le,te,K,{dark:0,selected:1,destructive:2,active:3,disabled:4,href:5,testId:6,tooltipProps:11})}}export{ie as M};
