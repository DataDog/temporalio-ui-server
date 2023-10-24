import{ad as y}from"./index.e6b134b1.js";import{t as N}from"./translate.742ecd1a.js";import{a as Q,b as j}from"./decode-payload.4be34fba.js";import{c as C}from"./has.0120f47d.js";import{s as U,c as $,t as K}from"./versions.a166a54d.js";import{s as _}from"./simplify-attributes.6da4f035.js";import{l as L,a as J}from"./data-encoder-config.46934fd4.js";import{B as G}from"./encode-uri.e26747e0.js";import{b as H,p as M,a as d,r as w,c as X,i as Y,d as Z}from"./route-for-api.1d67d5a0.js";import{s as E}from"./parse-with-big-int.0036a80a.js";import{j as x}from"./singletons.64b5fd60.js";import{p as oo}from"./stores.0adeb2df.js";import{i as to}from"./version-check.d006b302.js";import{l as no,m as ro,n as F,o as eo}from"./format-time.9c4cab4b.js";import{v as io}from"./toaster.23d14a06.js";const ao=(o=U)=>!y(o).disableWriteActions,so=(o=[])=>o.map(t=>{const n=_(t,!0),r=t.activityId;return{...n,id:r}}),co=o=>C(o)||C(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:Q(e)}),{})},I=o=>{var b,g,T,W,S,p,A;const t=co(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,r=o.workflowExecutionInfo.execution.workflowId,e=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,c=o.workflowExecutionInfo.closeTime,a=o.workflowExecutionInfo.executionTime,u=o.workflowExecutionInfo.status,f=o.workflowExecutionInfo.status==="Running",l=o.workflowExecutionInfo.historyLength,h=o.workflowExecutionInfo.historySizeBytes,s=`/workflows/${r}/${e}`,m=((g=(b=o==null?void 0:o.executionConfig)==null?void 0:b.taskQueue)==null?void 0:g.name)||((T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.taskQueue),k=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.mostRecentWorkerVersionStamp,v=(S=o==null?void 0:o.workflowExecutionInfo)==null?void 0:S.parentNamespaceId,B=(p=o==null?void 0:o.workflowExecutionInfo)==null?void 0:p.parentExecution,z=o.workflowExecutionInfo.stateTransitionCount,V=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,q=so(o.pendingActivities),D=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:r,runId:e,startTime:i,endTime:c,executionTime:a,status:u,historyEvents:l,historySizeBytes:h,searchAttributes:t,url:s,taskQueue:m,mostRecentWorkerVersionStamp:k,pendingActivities:q,pendingChildren:D,parentNamespaceId:v,parent:B,stateTransitionCount:z,isRunning:f,defaultWorkflowTaskTimeout:V,get canBeTerminated(){return f&&ao()}}},P=o=>(o.executions||[]).map(t=>I({workflowExecutionInfo:t})),fo=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),O=(o,t=G)=>t?fo(o):o,uo=(o,t)=>{var n;return((n=o==null?void 0:o.visibilityStore)==null?void 0:n.includes("elasticsearch"))||to(t,"1.19")},lo=o=>{var t;return(t=o==null?void 0:o.visibilityStore)==null?void 0:t.includes("elasticsearch")},R=x([oo],([o])=>{var t,n,r;return(r=(n=(t=o.data)==null?void 0:t.settings)==null?void 0:n.runtimeEnvironment)==null?void 0:r.isCloud}),wo=x([$,K,R],([o,t,n])=>uo(o,t)||n);x([$,R],([o,t])=>lo(o)||t);const mo={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},ko=["workflowId","workflowType","timeRange","executionStatus","closeTime"],yo=o=>!(o===null||o===void 0||o===""||typeof o=="string"&&o==="undefined"),ho=o=>{if(typeof o!="string")return!1;for(const t of ko)if(t===o)return!0;return!1},Eo=(o,t,n)=>{const r=mo[o];return t==="All"?"":no(t)||ro(t)?n||y(wo)?`${r} > "${F(t)}"`:`${r} BETWEEN "${F(t)}" AND "${eo()}"`:`${r}="${t}"`},xo=(o,t)=>Object.entries(o).map(([n,r])=>{if(ho(n)&&yo(r))return Eo(n,r,t)}).filter(Boolean),Io=(o,t=!1)=>xo(o,t).join(" and "),bo=async(o,t,n=fetch,r=!1)=>{const e=t.query||Io(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const c=r?"workflows.archived":"workflows";let a="";const u=s=>{var m,k;X(s),(m=s==null?void 0:s.body)!=null&&m.message||s!=null&&s.status?a=((k=s==null?void 0:s.body)==null?void 0:k.message)??`Error fetching workflows: ${s.status}: ${s.statusText}`:a="Error fetching workflows: Server failed to respond"},f=w(c,{namespace:o}),{executions:l,nextPageToken:h}=await d(f,{params:{query:i},onError:u,handleError:u,request:n})??{executions:[],nextPageToken:""};return{workflows:P({executions:l}),nextPageToken:String(h),error:a}},Vo=async({namespace:o,workflowId:t,url:n},r=fetch)=>{var l;const e="workflows",i=n??H(o),c=M(e,{namespace:o}),a=i+c,{executions:u}=await d(a,{params:{query:`WorkflowId="${t}"`,pageSize:"1"},request:r})??{executions:[]},f=(l=P({executions:u}))==null?void 0:l[0];return{runId:f==null?void 0:f.runId}},qo=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=a=>{(Y(a)||Z(a))&&(e=!1)},c=w(r,{namespace:o});return await d(c,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},Do=async(o,t,n=fetch)=>bo(o,t,n,!0);async function No(o,t=fetch){const n=w("workflow",o);return d(n,{request:t}).then(I)}async function Qo({workflow:o,namespace:t,reason:n,identity:r}){const e=w("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await d(e,{options:{method:"POST",body:E({reason:n,...r&&{identity:r}})},notifyOnError:!1})}async function jo({namespace:o,workflowId:t,runId:n},r=fetch){const e=w("workflow.cancel",{namespace:o,workflowId:t,runId:n});return d(e,{request:r,notifyOnError:!1,options:{method:"POST"}})}async function Uo({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e,settings:i,accessToken:c}){var f;const a=w("workflow.signal",{namespace:o,workflowId:t,runId:n});let u=null;if(e)if((f=i==null?void 0:i.codec)!=null&&f.endpoint){const l=await j({payloads:{payloads:[JSON.parse(e)]},namespace:o,settings:i,accessToken:c,encode:!0});if(y(L)==="error")throw new Error(y(J)||N("common.encode-failed"));u=(l==null?void 0:l.payloads)??null}else u=[{metadata:{encoding:O("json/plain")},data:O(e)}];return d(a,{notifyOnError:!1,options:{method:"POST",body:E({signalName:r,input:{payloads:u}})}})}async function Ko({namespace:o,workflowId:t,runId:n,eventId:r,reason:e,resetReapplyType:i}){const c=w("workflow.reset",{namespace:o,workflowId:t,runId:n}),a={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:i,requestId:io(),reason:e};return d(c,{notifyOnError:!1,options:{method:"POST",body:E(a)}})}async function _o(o,t=fetch){const n=e=>{console.error(e)},r=w("workflow",o);return d(r,{request:t,onError:n,handleError:n}).then(I)}export{wo as a,bo as b,jo as c,qo as d,Io as e,No as f,Do as g,_o as h,R as i,Vo as j,Ko as r,Uo as s,Qo as t,ao as w};
