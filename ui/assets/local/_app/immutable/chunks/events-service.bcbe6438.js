import{d as r,w as u}from"./index.169c571c.js";import{p as m}from"./stores.00c227c2.js";import{p as v,a as S}from"./route-for.22236b84.js";import{r as y}from"./workflow-run.3588d6ca.js";import{E as F}from"./is-event-type.3574dcf0.js";import{e as q}from"./event-view.805e4495.js";import{t as f}from"./index.95dab8a0.js";import{b as A}from"./is.b521dabf.js";import{p as h}from"./paginated.3f36a12b.js";import{r as l,a as w}from"./route-for-api.35e63727.js";const H=r([m],([t])=>t.params.namespace?v(t.params.namespace):""),P=r([m],([t])=>t.params.workflow?v(t.params.workflow):""),T=r([m],([t])=>t.params.run?v(t.params.run):""),b=r([m],([t])=>{var e;return(e=t.data)==null?void 0:e.settings}),x=r([S],([t])=>t==null?void 0:t.accessToken),z=r([H,P,T,q],([t,e,s,n])=>({namespace:t,workflowId:e,runId:s,sort:n}));r([z,b,x,y],([t,e,s,n])=>({...t,settings:e,accessToken:s,refresh:y,$refresh:n}));const j={start:[],end:[]},W=u(j),X=u(null),B=u([]),Y=r(B,t=>t.filter(F)),k=t=>!A(t)||t==="descending"?"events.descending":t==="ascending"?"events.ascending":"events.descending",Z=async({namespace:t,workflowId:e,runId:s,sort:n,onStart:o,onUpdate:a,onComplete:c})=>{const i=k(n),p=l(i,{namespace:t,workflowId:e,runId:s});return(await h(async d=>w(p,{token:d,request:fetch}),{onStart:o,onUpdate:a,onComplete:c})).history.events},_=async({namespace:t,workflowId:e,runId:s,sort:n,settings:o,accessToken:a,onStart:c,onUpdate:i,onComplete:p})=>{const E=k(n),d=l(E,{namespace:t,workflowId:e,runId:s}),I=await h(async R=>w(d,{token:R,request:fetch}),{onStart:c,onUpdate:i,onComplete:p});return await f({response:I.history.events,namespace:t,settings:o,accessToken:a})},g=async({namespace:t,workflowId:e,runId:s,sort:n})=>{const o=l(`events.${n}`,{namespace:t,workflowId:e,runId:s});try{return(await w(o,{request:fetch,params:{maximumPageSize:"20"}})).history.events}catch{return[]}},U=async t=>{const{settings:e,namespace:s,accessToken:n}=t,o=await g({...t,sort:"ascending"}),a=await g({...t,sort:"descending"}),[c,i]=await Promise.all([f({response:o,namespace:s,settings:e,accessToken:n}),f({response:a,namespace:s,settings:e,accessToken:n})]);return{start:c,end:i}};export{_ as a,Z as b,B as c,W as e,U as f,j as i,Y as r,X as t};
