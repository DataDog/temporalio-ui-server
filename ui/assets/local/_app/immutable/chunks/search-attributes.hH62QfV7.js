import{d as r,w as o}from"./entry.IB1Wy_Z1.js";import{z as c}from"./scheduler.LRpOgQOC.js";const i=o({customAttributes:{},systemAttributes:{}}),b=r([i],([t])=>({...t.customAttributes,...t.systemAttributes}));r([i],([t])=>t.systemAttributes);const l=r([i],([t])=>t.customAttributes),p=t=>{const e=c(l);return t in e},f=(t,e)=>{var s;return e in(((s=t==null?void 0:t.searchAttributes)==null?void 0:s.indexedFields)??{})},m=r([b],([t])=>t?Object.entries(t).map(([e,s])=>({label:e,value:e,type:s})):[]),h=r([m],([t])=>{const e=["ExecutionStatus","WorkflowId","WorkflowType","RunId","StartTime","CloseTime"];return t.sort((s,u)=>s.label<u.label?-1:s.label>u.label?1:0).sort((s,u)=>{const n=e.indexOf(s.value),a=e.indexOf(u.value);return n<0?1:a<0?-1:n-a})});export{i as a,h as b,l as c,p as i,b as s,f as w};
