import{s as q,p as E,A as h,e as O,b as S,d as z,g,C,B as v,k as P,u as B,q as V,r as F,F as T,G as I,$ as y,a1 as j,x as H,R as p,c as w,t as x,a as $,f as ee,h as te,ad as J,l as K,m as le,af as ae,v as se}from"./scheduler.LRpOgQOC.js";import{S as G,i as M,t as N,b as A}from"./index.dE1eZLcR.js";import{t as L,g as R}from"./tw-merge.k1eX69SP.js";import{k as ie}from"./has.iatLMeUG.js";import{w as Q}from"./entry.XbCZtbrv.js";function ne(s){let e,i,f;const t=s[4].default,l=E(t,s,s[3],null);let o=[{class:i=L("tab-list",s[1])},{role:"tablist"},{"aria-label":s[0]},s[2]],n={};for(let a=0;a<o.length;a+=1)n=h(n,o[a]);return{c(){e=O("div"),l&&l.c(),this.h()},l(a){e=S(a,"DIV",{class:!0,role:!0,"aria-label":!0});var r=z(e);l&&l.l(r),r.forEach(g),this.h()},h(){C(e,n),v(e,"svelte-zg0616",!0)},m(a,r){P(a,e,r),l&&l.m(e,null),f=!0},p(a,[r]){l&&l.p&&(!f||r&8)&&B(l,t,a,a[3],f?F(t,a[3],r,null):V(a[3]),null),C(e,n=R(o,[(!f||r&2&&i!==(i=L("tab-list",a[1])))&&{class:i},{role:"tablist"},(!f||r&1)&&{"aria-label":a[0]},r&4&&a[2]])),v(e,"svelte-zg0616",!0)},i(a){f||(N(l,a),f=!0)},o(a){A(l,a),f=!1},d(a){a&&g(e),l&&l.d(a)}}}function ue(s,e,i){const f=["label","class"];let t=T(e,f),{$$slots:l={},$$scope:o}=e,{label:n}=e,{class:a=""}=e;return s.$$set=r=>{e=h(h({},e),I(r)),i(2,t=T(e,f)),"label"in r&&i(0,n=r.label),"class"in r&&i(1,a=r.class),"$$scope"in r&&i(3,o=r.$$scope)},[n,a,t,o,l]}class ve extends G{constructor(e){super(),M(this,e,ue,ne,q,{label:0,class:1})}}function oe(s){let e,i;const f=s[2].default,t=E(f,s,s[1],null);let l=[{class:"tabs"},s[0]],o={};for(let n=0;n<l.length;n+=1)o=h(o,l[n]);return{c(){e=O("div"),t&&t.c(),this.h()},l(n){e=S(n,"DIV",{class:!0});var a=z(e);t&&t.l(a),a.forEach(g),this.h()},h(){C(e,o)},m(n,a){P(n,e,a),t&&t.m(e,null),i=!0},p(n,[a]){t&&t.p&&(!i||a&2)&&B(t,f,n,n[1],i?F(f,n[1],a,null):V(n[1]),null),C(e,o=R(l,[{class:"tabs"},a&1&&n[0]]))},i(n){i||(N(t,n),i=!0)},o(n){A(t,n),i=!1},d(n){n&&g(e),t&&t.d(n)}}}const W={};function fe(s,e,i){const f=[];let t=T(e,f),{$$slots:l={},$$scope:o}=e;const n=[],a=[],r=Q(null),d=Q(null);return y(W,{registerTab:c=>{n.push(c),r.update(m=>m||c),j(()=>{const m=n.indexOf(c);n.splice(m,1),r.update(u=>u===c?n[m]||n[n.length-1]:u)})},registerPanel:c=>{a.push(c),d.update(m=>m||c),j(()=>{const m=a.indexOf(c);a.splice(m,1),d.update(u=>u===c?a[m]||a[a.length-1]:u)})},selectTab:c=>{const m=n.indexOf(c);r.set(c),d.set(a[m])},activeTab:r,activePanel:d}),s.$$set=c=>{e=h(h({},e),I(c)),i(0,t=T(e,f)),"$$scope"in c&&i(1,o=c.$$scope)},[t,o,l]}class ge extends G{constructor(e){super(),M(this,e,fe,oe,q,{})}}function D(s){let e,i,f,t,l,o,n,a;const r=s[14].default,d=E(r,s,s[13],null);let c=[{role:"tab"},{class:"tab"},{"aria-selected":s[5]},{"aria-controls":s[3]},{tabindex:t=s[5]?0:-1},{id:s[1]},{href:s[2]},{"data-testid":l=s[1]??s[8]["data-testid"]},s[9]],m={};for(let u=0;u<c.length;u+=1)m=h(m,c[u]);return{c(){e=O(s[2]?"a":"button"),i=x(s[0]),f=$(),d&&d.c(),this.h()},l(u){e=S(u,((s[2]?"a":"button")||"null").toUpperCase(),{role:!0,class:!0,"aria-selected":!0,"aria-controls":!0,tabindex:!0,id:!0,href:!0,"data-testid":!0});var b=z(e);i=ee(b,s[0]),f=te(b),d&&d.l(b),b.forEach(g),this.h()},h(){J(s[2]?"a":"button")(e,m),v(e,"active",s[5]),v(e,"disabled",s[4]),v(e,"svelte-1kq5ql1",!0)},m(u,b){P(u,e,b),K(e,i),K(e,f),d&&d.m(e,null),o=!0,n||(a=le(e,"click",s[7]),n=!0)},p(u,b){(!o||b&1)&&ae(i,u[0],m.contenteditable),d&&d.p&&(!o||b&8192)&&B(d,r,u,u[13],o?F(r,u[13],b,null):V(u[13]),null),J(u[2]?"a":"button")(e,m=R(c,[{role:"tab"},{class:"tab"},(!o||b&32)&&{"aria-selected":u[5]},(!o||b&8)&&{"aria-controls":u[3]},(!o||b&32&&t!==(t=u[5]?0:-1))&&{tabindex:t},(!o||b&2)&&{id:u[1]},(!o||b&4)&&{href:u[2]},(!o||b&258&&l!==(l=u[1]??u[8]["data-testid"]))&&{"data-testid":l},b&512&&u[9]])),v(e,"active",u[5]),v(e,"disabled",u[4]),v(e,"svelte-1kq5ql1",!0)},i(u){o||(N(d,u),o=!0)},o(u){A(d,u),o=!1},d(u){u&&g(e),d&&d.d(u),n=!1,a()}}}function re(s){let e=s[2]?"a":"button",i,f,t=(s[2]?"a":"button")&&D(s);return{c(){t&&t.c(),i=H()},l(l){t&&t.l(l),i=H()},m(l,o){t&&t.m(l,o),P(l,i,o),f=!0},p(l,[o]){l[2],e?q(e,l[2]?"a":"button")?(t.d(1),t=D(l),e=l[2]?"a":"button",t.c(),t.m(i.parentNode,i)):t.p(l,o):(t=D(l),e=l[2]?"a":"button",t.c(),t.m(i.parentNode,i))},i(l){f||(N(t,l),f=!0)},o(l){A(t,l),f=!1},d(l){l&&g(i),t&&t.d(l)}}}function de(s,e,i){let f;const t=["label","id","href","panelId","disabled","active","onClick"];let l=T(e,t),o,{$$slots:n={},$$scope:a}=e,{label:r}=e,{id:d}=e,{href:c=null}=e,{panelId:m=null}=e,{disabled:u=!1}=e,{active:b=null}=e,{onClick:k=se}=e;const{registerTab:X,selectTab:Y,activeTab:U}=p(W);w(s,U,_=>i(12,o=_)),X(d);const Z=()=>{Y(d),k&&k()};return s.$$set=_=>{i(8,e=h(h({},e),I(_))),i(9,l=T(e,t)),"label"in _&&i(0,r=_.label),"id"in _&&i(1,d=_.id),"href"in _&&i(2,c=_.href),"panelId"in _&&i(3,m=_.panelId),"disabled"in _&&i(4,u=_.disabled),"active"in _&&i(10,b=_.active),"onClick"in _&&i(11,k=_.onClick),"$$scope"in _&&i(13,a=_.$$scope)},s.$$.update=()=>{s.$$.dirty&5122&&i(5,f=ie(b)?o===d:b)},e=I(e),[r,d,c,m,u,f,U,Z,e,l,b,k,o,a,n]}class Te extends G{constructor(e){super(),M(this,e,de,re,q,{label:0,id:1,href:2,panelId:3,disabled:4,active:10,onClick:11})}}export{W as T,ge as a,ve as b,Te as c};
