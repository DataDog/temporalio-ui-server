import{S as O,i as A,s as B,k as x,q as g,a as N,w as U,l as C,m as T,r as $,h as p,c as P,x as z,n as _,b as j,K as o,y as D,u as F,f as H,t as I,z as J,J as G,L as M}from"./index-3630b6f8.js";import{b as Q}from"./navigation-84b4244d.js";import{p as R}from"./stores-4e1b824b.js";import{i as V}from"./is-network-error-fc22a11e.js";import{L as K}from"./link-314c48be.js";function W(s){let e;return{c(){e=g("Try a refresh")},l(t){e=$(t,"Try a refresh")},m(t,l){j(t,e,l)},d(t){t&&p(e)}}}function X(s){let e;return{c(){e=g("jump on our Slack Channel")},l(t){e=$(t,"jump on our Slack Channel")},m(t,l){j(t,e,l)},d(t){t&&p(e)}}}function Y(s){let e,t,l,h,n,d,E,u,b,i,c,f,L,m,y,v;return f=new K({props:{href:s[1],target:"_self",class:"underline underline-offset-2",$$slots:{default:[W]},$$scope:{ctx:s}}}),f.$on("click",s[5]),m=new K({props:{href:"https://temporal.io/slack",$$slots:{default:[X]},$$scope:{ctx:s}}}),{c(){e=x("section"),t=x("h1"),l=g(s[0]),h=N(),n=x("p"),d=g("Uh oh. There's an error."),E=N(),u=x("p"),b=g(s[2]),i=N(),c=x("p"),U(f.$$.fragment),L=g(`
    or
    `),U(m.$$.fragment),y=g("."),this.h()},l(a){e=C(a,"SECTION",{"aria-roledescription":!0,class:!0,role:!0});var r=T(e);t=C(r,"H1",{class:!0});var k=T(t);l=$(k,s[0]),k.forEach(p),h=P(r),n=C(r,"P",{class:!0});var w=T(n);d=$(w,"Uh oh. There's an error."),w.forEach(p),E=P(r),u=C(r,"P",{class:!0});var q=T(u);b=$(q,s[2]),q.forEach(p),i=P(r),c=C(r,"P",{class:!0});var S=T(c);z(f.$$.fragment,S),L=$(S,`
    or
    `),z(m.$$.fragment,S),y=$(S,"."),S.forEach(p),r.forEach(p),this.h()},h(){_(t,"class","text-[12rem] font-semibold "),_(n,"class","-mt-6 mb-5 text-lg"),_(u,"class","my-4 w-auto text-2xl font-extrabold text-red-700"),_(c,"class","text-lg"),_(e,"aria-roledescription","error"),_(e,"class","mt-32 text-center align-middle"),_(e,"role","alert")},m(a,r){j(a,e,r),o(e,t),o(t,l),o(e,h),o(e,n),o(n,d),o(e,E),o(e,u),o(u,b),o(e,i),o(e,c),D(f,c,null),o(c,L),D(m,c,null),o(c,y),v=!0},p(a,[r]){(!v||r&1)&&F(l,a[0]);const k={};r&2&&(k.href=a[1]),r&128&&(k.$$scope={dirty:r,ctx:a}),f.$set(k);const w={};r&128&&(w.$$scope={dirty:r,ctx:a}),m.$set(w)},i(a){v||(H(f.$$.fragment,a),H(m.$$.fragment,a),v=!0)},o(a){I(f.$$.fragment,a),I(m.$$.fragment,a),v=!1},d(a){a&&p(e),J(f),J(m)}}}function Z(s,e,t){let l,h;G(s,R,i=>t(4,h=i));let{error:n=null}=e,{status:d=500}=e,E=(n==null?void 0:n.message)||"";V(n)&&(d=n.statusCode);const u=M();Q(()=>{u("clearError",{})});const b=()=>{window.location.reload()};return s.$$set=i=>{"error"in i&&t(3,n=i.error),"status"in i&&t(0,d=i.status)},s.$$.update=()=>{s.$$.dirty&16&&t(1,l=h.url.toString())},[d,l,E,n,h,b]}class ne extends O{constructor(e){super(),A(this,e,Z,Y,B,{error:3,status:0})}}export{ne as E};
