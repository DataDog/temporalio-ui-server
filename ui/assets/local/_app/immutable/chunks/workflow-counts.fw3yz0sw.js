import{v as e}from"./scheduler.CFZRjJlR.js";import{r as s,a as u}from"./route-for-api.nMQ7zppc.js";const p=async(r,o,t=fetch)=>{let n=0;try{const a=s("workflows.count",{namespace:r}),c=await u(a,{params:o?{query:o}:{},onError:e,handleError:e,request:t});n=parseInt((c==null?void 0:c.count)||"0")}catch{}return{count:n}},l=async({namespace:r,query:o})=>{const t="GROUP BY ExecutionStatus",n=s("workflows.count",{namespace:r}),{count:a,groups:c}=await u(n,{params:{query:o?`${o} ${t}`:`${t}`},notifyOnError:!1});return{count:a??"0",groups:c}},m=async({namespace:r})=>{const o='TemporalNamespaceDivision="TemporalScheduler" AND ExecutionStatus="Running"',t=s("workflows.count",{namespace:r}),{count:n}=await u(t,{params:{query:o},notifyOnError:!1});return n??"0"};export{l as a,m as b,p as f};
