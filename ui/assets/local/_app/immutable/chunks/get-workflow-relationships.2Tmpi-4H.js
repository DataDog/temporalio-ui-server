import{h as N,i as T}from"./has.iatLMeUG.js";import{b as B,c as F,d as v,e as y,f as A,g as O}from"./is-event-type._koPBHj3.js";const S=n=>{for(const t of n)if(N(t.attributes,"newExecutionRunId")&&T(t.attributes.newExecutionRunId))return t.attributes.newExecutionRunId},j=n=>B(n)||F(n)||v(n)||y(n)||A(n),D=(n,t,s)=>{var C,E,g,m,R,W;const d=t.filter(p=>j(p)),r=!!(n!=null&&n.pendingChildren.length)||!!d.length,c=n==null?void 0:n.parent,b=(E=(C=s==null?void 0:s.find(p=>p.namespaceInfo.id===n.parentNamespaceId))==null?void 0:C.namespaceInfo)==null?void 0:E.name,e=t.find(O),u=S(t),I=(g=e==null?void 0:e.attributes)==null?void 0:g.firstExecutionRunId,a=I===(n==null?void 0:n.runId)?void 0:I,h=(m=e==null?void 0:e.attributes)==null?void 0:m.continuedExecutionRunId;let i="";const x=(W=(R=n==null?void 0:n.searchAttributes)==null?void 0:R.indexedFields)==null?void 0:W.TemporalScheduledById;typeof x=="string"&&(i=x);const o=!!(c||r||a||h||u||i),l=(c?1:0)+(n==null?void 0:n.pendingChildren.length)+d.length+(a?1:0)+(h?1:0)+(u?1:0)+(i?1:0);return{hasRelationships:o,hasChildren:r,children:d,first:a,previous:h,parent:c,parentNamespaceName:b,next:u,scheduleId:i,relationshipCount:l}};export{D as g,j as i};
