const i=e=>(e!=null&&e.majorVersionSets?[...e.majorVersionSets]:[]).reverse(),u=e=>{if(!(!e||!e.length))return e[e.length-1]},d=(e,n)=>{var s;const r=(s=e==null?void 0:e.majorVersionSets)==null?void 0:s.find(t=>{var o;return(o=t.buildIds)==null?void 0:o.includes(n)});return u(r==null?void 0:r.buildIds)},c=e=>e?e.slice(0,e.length-1).reverse():[],f=e=>{var s;const n=i(e);if(!n.length)return;const r=(s=n[0])==null?void 0:s.buildIds;if(r!=null&&r.length)return u(n[0].buildIds)},a=e=>{var n,r;if((n=e==null?void 0:e.mostRecentWorkerVersionStamp)!=null&&n.useVersioning)return((r=e.mostRecentWorkerVersionStamp)==null?void 0:r.buildId)||void 0},g=e=>{var n,r;if((n=e==null?void 0:e.workerVersionCapabilities)!=null&&n.useVersioning)return((r=e.workerVersionCapabilities)==null?void 0:r.buildId)||void 0},V=e=>[...new Set(e==null?void 0:e.map(g).filter(Boolean))],I=e=>e==null?void 0:e.some(n=>{var r;return(r=n==null?void 0:n.workerVersionCapabilities)==null?void 0:r.useVersioning}),S=(e,n,r)=>{const s=a(e);if(!s)return!0;const t=d(r,s);return V(n).includes(t)};export{i as a,f as b,g as c,u as d,c as e,a as f,V as g,d as h,I as p,S as w};
