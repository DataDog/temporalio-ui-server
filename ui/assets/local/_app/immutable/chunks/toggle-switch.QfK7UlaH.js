import{s as j,e as _,t as p,a as P,b as k,d as y,f as N,g as v,h as T,i as B,j as r,B as u,k as C,l as b,m as A,n as M,v as E,E as q,A as L,G as S,H as x}from"./scheduler.1-F21fJx.js";import{S as G,i as I}from"./index.biMfyfPX.js";function U(i){let e,a,o,h,l,c,d,m='<span class="h-4 w-4 rounded-[50%] bg-current"></span>',f,g,t;return{c(){e=_("label"),a=_("span"),o=p(i[2]),h=P(),l=_("input"),c=P(),d=_("span"),d.innerHTML=m,this.h()},l(n){e=k(n,"LABEL",{class:!0,"data-testid":!0});var s=y(e);a=k(s,"SPAN",{class:!0});var H=y(a);o=N(H,i[2]),H.forEach(v),h=T(s),l=k(s,"INPUT",{id:!0,type:!0,class:!0,role:!0}),c=T(s),d=k(s,"SPAN",{class:!0,"data-svelte-h":!0}),B(d)!=="svelte-1h20mij"&&(d.innerHTML=m),s.forEach(v),this.h()},h(){r(a,"class","whitespace-nowrap text-sm"),u(a,"sr-only",i[5]),r(l,"id",i[1]),l.disabled=i[3],r(l,"type","checkbox"),r(l,"class","peer sr-only"),r(l,"role","switch"),r(d,"class","surface-subtle not-sr-only flex h-5 w-9 items-center rounded-xl border border-transparent p-px text-primary outline-2 outline-offset-1 outline-brand/50 group-hover:border-brand peer-checked:justify-end peer-checked:bg-brand peer-checked:text-inverse peer-focus:outline peer-disabled:opacity-50"),r(e,"class","group relative flex w-fit min-w-fit cursor-pointer items-center gap-2 rounded px-2 text-primary"),r(e,"data-testid",f=i[6]["data-testid"]),u(e,"flex-row-reverse",i[4]==="right"),u(e,"pointer-events-none",i[3])},m(n,s){C(n,e,s),b(e,a),b(a,o),b(e,h),b(e,l),l.checked=i[0],b(e,c),b(e,d),g||(t=[A(l,"change",i[7]),A(l,"change",i[8])],g=!0)},p(n,[s]){s&4&&M(o,n[2]),s&32&&u(a,"sr-only",n[5]),s&2&&r(l,"id",n[1]),s&8&&(l.disabled=n[3]),s&1&&(l.checked=n[0]),s&64&&f!==(f=n[6]["data-testid"])&&r(e,"data-testid",f),s&16&&u(e,"flex-row-reverse",n[4]==="right"),s&8&&u(e,"pointer-events-none",n[3])},i:E,o:E,d(n){n&&v(e),g=!1,q(t)}}}function z(i,e,a){let{id:o}=e,{label:h}=e,{disabled:l=!1}=e,{checked:c=!1}=e,{labelPosition:d="right"}=e,{labelHidden:m=!1}=e;function f(t){x.call(this,i,t)}function g(){c=this.checked,a(0,c)}return i.$$set=t=>{a(6,e=L(L({},e),S(t))),"id"in t&&a(1,o=t.id),"label"in t&&a(2,h=t.label),"disabled"in t&&a(3,l=t.disabled),"checked"in t&&a(0,c=t.checked),"labelPosition"in t&&a(4,d=t.labelPosition),"labelHidden"in t&&a(5,m=t.labelHidden)},e=S(e),[c,o,h,l,d,m,e,f,g]}class J extends G{constructor(e){super(),I(this,e,z,U,j,{id:1,label:2,disabled:3,checked:0,labelPosition:4,labelHidden:5})}}export{J as T};
