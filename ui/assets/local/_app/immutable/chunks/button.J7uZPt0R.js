import{s as g,B as f,e as p,b as I,d as T,g as _,E as h,F as y,k,m as S,A as b,C as B,D as v}from"./scheduler.fjKs9yxd.js";import{S as C,i as E,c as N,a as q,m as A,t as D,b as F,d as M}from"./index.ZY3lhhrE.js";import{t as d,g as O}from"./tw-merge.k1eX69SP.js";import{I as P}from"./icon.xQlvD1Wx.js";function U(o){let e,c,n,a,i,r;c=new P({props:{title:o[2]?o[1]:o[0],name:o[2]?"checkmark":"copy"}});let u=[{class:n=d("copy-button",o[3])},o[4]],l={};for(let t=0;t<u.length;t+=1)l=f(l,u[t]);return{c(){e=p("button"),N(c.$$.fragment),this.h()},l(t){e=I(t,"BUTTON",{class:!0});var s=T(e);q(c.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,l),y(e,"svelte-ywaxae",!0)},m(t,s){k(t,e,s),A(c,e,null),e.autofocus&&e.focus(),a=!0,i||(r=S(e,"click",o[5]),i=!0)},p(t,[s]){const m={};s&7&&(m.title=t[2]?t[1]:t[0]),s&4&&(m.name=t[2]?"checkmark":"copy"),c.$set(m),h(e,l=O(u,[(!a||s&8&&n!==(n=d("copy-button",t[3])))&&{class:n},s&16&&t[4]])),y(e,"svelte-ywaxae",!0)},i(t){a||(D(c.$$.fragment,t),a=!0)},o(t){F(c.$$.fragment,t),a=!1},d(t){t&&_(e),M(c),i=!1,r()}}}function j(o,e,c){const n=["copyIconTitle","copySuccessIconTitle","copied","class"];let a=b(e,n),{copyIconTitle:i}=e,{copySuccessIconTitle:r}=e,{copied:u}=e,{class:l=""}=e;function t(s){v.call(this,o,s)}return o.$$set=s=>{e=f(f({},e),B(s)),c(4,a=b(e,n)),"copyIconTitle"in s&&c(0,i=s.copyIconTitle),"copySuccessIconTitle"in s&&c(1,r=s.copySuccessIconTitle),"copied"in s&&c(2,u=s.copied),"class"in s&&c(3,l=s.class)},[i,r,u,l,a,t]}class K extends C{constructor(e){super(),E(this,e,j,U,g,{copyIconTitle:0,copySuccessIconTitle:1,copied:2,class:3})}}export{K as B};
