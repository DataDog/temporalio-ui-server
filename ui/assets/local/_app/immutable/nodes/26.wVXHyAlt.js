import{s as b,x as k,k as h,g as q,c as w,v as u,a as T,h as y}from"../chunks/scheduler.78ThUSKQ.js";import{S as d,i as P,t as l,b as m,c as p,a as i,m as f,d as _}from"../chunks/index.G2Max4V_.js";import{p as Q}from"../chunks/stores.BLxiXdGl.js";import{P as C}from"../chunks/page-title.-CDePwim.js";import{h as $,u as S}from"../chunks/await_block.yvWfAhR4.js";import{g}from"../chunks/pollers-service.phY2PfJf.js";import{T as N}from"../chunks/task-queue-workers.GNlKn95U.js";function j(a){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function v(a){let n,o;return n=new N({props:{workers:a[3],taskQueue:a[1]}}),{c(){p(n.$$.fragment)},l(t){i(n.$$.fragment,t)},m(t,r){f(n,t,r),o=!0},p(t,r){const e={};r&3&&(e.workers=t[3]),r&2&&(e.taskQueue=t[1]),n.$set(e)},i(t){o||(l(n.$$.fragment,t),o=!0)},o(t){m(n.$$.fragment,t),o=!1},d(t){_(n,t)}}}function z(a){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function A(a){let n,o,t,r={ctx:a,current:null,token:null,hasCatch:!1,pending:z,then:v,catch:j,value:3,blocks:[,,,]};return $(o=g({queue:a[1],namespace:a[0]}),r),{c(){n=k(),r.block.c()},l(e){n=k(),r.block.l(e)},m(e,s){h(e,n,s),r.block.m(e,r.anchor=s),r.mount=()=>n.parentNode,r.anchor=n,t=!0},p(e,[s]){a=e,r.ctx=a,s&3&&o!==(o=g({queue:a[1],namespace:a[0]}))&&$(o,r)||S(r,a,s)},i(e){t||(l(r.block),t=!0)},o(e){for(let s=0;s<3;s+=1){const c=r.blocks[s];m(c)}t=!1},d(e){e&&q(n),r.block.d(e),r.token=null,r=null}}}function B(a,n,o){let t,r,e;return w(a,Q,s=>o(2,e=s)),a.$$.update=()=>{a.$$.dirty&4&&o(1,{queue:t,namespace:r}=e.params,t,(o(0,r),o(2,e)))},[r,t,e]}class D extends d{constructor(n){super(),P(this,n,B,A,b,{})}}function E(a){let n,o,t,r;return n=new C({props:{title:`Task Queue | ${a[1]}`,url:a[0].url.href}}),t=new D({}),{c(){p(n.$$.fragment),o=T(),p(t.$$.fragment)},l(e){i(n.$$.fragment,e),o=y(e),i(t.$$.fragment,e)},m(e,s){f(n,e,s),h(e,o,s),f(t,e,s),r=!0},p(e,[s]){const c={};s&1&&(c.url=e[0].url.href),n.$set(c)},i(e){r||(l(n.$$.fragment,e),l(t.$$.fragment,e),r=!0)},o(e){m(n.$$.fragment,e),m(t.$$.fragment,e),r=!1},d(e){e&&q(o),_(n,e),_(t,e)}}}function F(a,n,o){let t;w(a,Q,e=>o(0,t=e));const r=t.params.queue;return[t,r]}class O extends d{constructor(n){super(),P(this,n,F,E,b,{})}}export{O as component};
