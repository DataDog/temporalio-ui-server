import{b as j,t as q}from"./index.Y6K1ciz5.js";import{H as z}from"./scheduler.ynpCPJUn.js";function D(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function E(n,f){n.d(1),f.delete(n.key)}function F(n,f){j(n,1,1,()=>{f.delete(n.key)})}function G(n,f,k,x,A,g,h,H,p,_,w,b){let i=n.length,d=g.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const l=[],a=new Map,m=new Map,M=[];for(c=d;c--;){const e=b(A,g,c),s=k(e);let t=h.get(s);t?x&&M.push(()=>t.p(e,f)):(t=_(s,e),t.c()),a.set(s,l[c]=t),s in u&&m.set(s,Math.abs(c-u[s]))}const v=new Set,S=new Set;function y(e){q(e,1),e.m(H,w),h.set(e.key,e),w=e.first,d--}for(;i&&d;){const e=l[d-1],s=n[i-1],t=e.key,o=s.key;e===s?(w=e.first,i--,d--):a.has(o)?!h.has(t)||v.has(t)?y(e):S.has(o)?i--:m.get(t)>m.get(o)?(S.add(t),y(e)):(v.add(o),i--):(p(s,h),i--)}for(;i--;){const e=n[i];a.has(e.key)||p(e,h)}for(;d;)y(l[d-1]);return z(M),l}export{E as d,D as e,F as o,G as u};
