import{d as c,r as m,w as n}from"./entry.R3BeP7LP.js";import{p as u}from"./stores.zURjPX8o.js";import{t as d}from"./translate.u3aqOlwm.js";import{v as w,z as k}from"./scheduler.1-F21fJx.js";import{r as f,a as p}from"./route-for-api.A_JocX9s.js";import{s as h,b as E}from"./workflow-service.LMXgJRjO.js";const b=async(o,r,s=fetch)=>{let t=0;try{const e=f("workflows.count",{namespace:o}),a=await p(e,{params:r?{query:r}:{},onError:w,handleError:w,request:s});t=parseInt((a==null?void 0:a.count)||"0")}catch{}return{count:t}},z=async({namespace:o,query:r})=>{const s="GROUP BY ExecutionStatus",t=f("workflows.count",{namespace:o}),{count:e,groups:a}=await p(t,{params:{query:r?`${r} ${s}`:`${s}`},notifyOnError:!1});return{count:e??"0",groups:a}},g=300,C=async(o,r,s)=>{r.set(!0);try{await s()}catch(t){console.error(t)}o.set(!1),setTimeout(()=>{r.set(!1)},g)},W=c([u],([o])=>{var r,s,t;return!!((t=(s=(r=o.data)==null?void 0:r.systemInfo)==null?void 0:s.capabilities)!=null&&t.countGroupByExecutionStatus)}),v=n(0),A=c([u],([o])=>{var r,s;return(s=(r=o.data)==null?void 0:r.settings)==null?void 0:s.hideWorkflowQueryErrors}),B=c([u],([o])=>o.params.namespace),q=c([u],([o])=>o.url.searchParams.get("query")),Q=c([B,q,v,h,A],([o,r,s,t,e])=>({namespace:o,query:r,refresh:s,supportsAdvancedVisibility:t,hideWorkflowQueryErrors:e})),x=o=>{R.set({...o,newCount:0})},P=o=>Q.subscribe(({namespace:r,query:s,supportsAdvancedVisibility:t,hideWorkflowQueryErrors:e})=>{C(I,S,async()=>{const{workflows:a,error:l}=await E(r,{query:s});if(o(a),t&&!k(W)){const y=await b(r,s);x(y)}l?e?i.set(d("workflows.workflows-error-querying")):i.set(l):i.set("")})}),L=n(""),S=n(!0),I=n(!0),R=n({count:0,newCount:0}),i=n(""),T=m([],P),U=n("");export{L as a,U as b,i as c,T as d,z as f,W as g,I as l,v as r,S as u,R as w};
