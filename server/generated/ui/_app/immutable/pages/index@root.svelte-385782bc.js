import{S as p,i as l,s as u,x as d,y as f,z as _,F as g,f as v,t as N,C as h,O as x,o as y}from"../chunks/index-e693a59e.js";import{a as $}from"../chunks/get-namespace-a384fdef.js";import{r as c,q as m}from"../chunks/route-for-06e4a074.js";import{g as i}from"../chunks/navigation-fbe70647.js";import{b}from"../chunks/workflow-service-c3d74aac.js";import{l as w}from"../chunks/namespaces-55210e9e.js";import{L as C}from"../chunks/loading-fbc33cd7.js";import"../chunks/singletons-eca981c1.js";import"../chunks/settings-6e0607c4.js";import"../chunks/index-8f8207c2.js";import"../chunks/simplify-attributes-055c76f2.js";import"../chunks/format-date-c1755997.js";import"../chunks/format-time-d031c2bc.js";import"../chunks/is-44021919.js";import"../chunks/route-for-api-74cb0b13.js";import"../chunks/notifications-b26a159d.js";import"../chunks/persist-store-1e827ec5.js";import"../chunks/parse-with-big-int-561ccb8b.js";import"../chunks/is-network-error-5f9e2367.js";function F(a){let e,o;return e=new C({}),{c(){d(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,r){_(e,t,r),o=!0},p:g,i(t){o||(v(e.$$.fragment,t),o=!0)},o(t){N(e.$$.fragment,t),o=!1},d(t){h(e,t)}}}const K=async({stuff:a})=>{var e,o;const t=a.namespaces,r=(e=a==null?void 0:a.settings)===null||e===void 0?void 0:e.defaultNamespace,s=(o=a.settings.runtimeEnvironment)===null||o===void 0?void 0:o.isCloud,n=$({namespaces:t,defaultNamespace:r});return s?{status:302,redirect:c({namespace:n})}:{props:{namespace:n}}};function z(a,e,o){let t;x(a,w,n=>o(1,t=n));let{namespace:r}=e;const s=t&&t!=="default"?t:r;return y(async()=>{try{const{authorized:n}=await b(s);n?i(c({namespace:s})):i(m())}catch{i(m())}}),a.$$set=n=>{"namespace"in n&&o(0,r=n.namespace)},[r]}class P extends p{constructor(e){super(),l(this,e,z,F,u,{namespace:0})}}export{P as default,K as load};
