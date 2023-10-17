import{ac as y}from"./index.c806367b.js";import{t as N}from"./translate.26e066eb.js";import{a as Q,b as j}from"./decode-payload.40813294.js";import{c as C,s as E}from"./parse-with-big-int.441ec82f.js";import{s as U,c as $,t as K}from"./versions.2722dfef.js";import{s as _}from"./simplify-attributes.28a991e2.js";import{l as L,a as J}from"./data-encoder-config.1f26c1f4.js";import{B as G}from"./prod-browser.becde89a.js";import{b as H,p as M,a as d,r as w,c as X,i as Y,d as Z}from"./route-for-api.546d47cc.js";import{j as x}from"./singletons.48f03b6d.js";import{p as oo}from"./stores.f9a296f5.js";import{i as to}from"./version-check.d006b302.js";import{l as no,m as eo,n as F,o as ro}from"./format-time.5959a32c.js";import{v as io}from"./toaster.a8071e80.js";const ao=(o=U)=>!y(o).disableWriteActions,so=(o=[])=>o.map(t=>{const n=_(t,!0),e=t.activityId;return{...n,id:e}}),co=o=>C(o)||C(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[e,r])=>({...n,[e]:Q(r)}),{})},I=o=>{var b,g,T,W,S,p,A;const t=co(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,e=o.workflowExecutionInfo.execution.workflowId,r=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,c=o.workflowExecutionInfo.closeTime,a=o.workflowExecutionInfo.executionTime,u=o.workflowExecutionInfo.status,f=o.workflowExecutionInfo.status==="Running",l=o.workflowExecutionInfo.historyLength,h=o.workflowExecutionInfo.historySizeBytes,s=`/workflows/${e}/${r}`,m=((g=(b=o==null?void 0:o.executionConfig)==null?void 0:b.taskQueue)==null?void 0:g.name)||((T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.taskQueue),k=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.mostRecentWorkerVersionStamp,v=(S=o==null?void 0:o.workflowExecutionInfo)==null?void 0:S.parentNamespaceId,B=(p=o==null?void 0:o.workflowExecutionInfo)==null?void 0:p.parentExecution,z=o.workflowExecutionInfo.stateTransitionCount,V=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,q=so(o.pendingActivities),D=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:e,runId:r,startTime:i,endTime:c,executionTime:a,status:u,historyEvents:l,historySizeBytes:h,searchAttributes:t,url:s,taskQueue:m,mostRecentWorkerVersionStamp:k,pendingActivities:q,pendingChildren:D,parentNamespaceId:v,parent:B,stateTransitionCount:z,isRunning:f,defaultWorkflowTaskTimeout:V,get canBeTerminated(){return f&&ao()}}},P=o=>(o.executions||[]).map(t=>I({workflowExecutionInfo:t})),fo=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),O=(o,t=G)=>t?fo(o):o,uo=(o,t)=>{var n;return((n=o==null?void 0:o.visibilityStore)==null?void 0:n.includes("elasticsearch"))||to(t,"1.19")},lo=o=>{var t;return(t=o==null?void 0:o.visibilityStore)==null?void 0:t.includes("elasticsearch")},R=x([oo],([o])=>{var t,n,e;return(e=(n=(t=o.data)==null?void 0:t.settings)==null?void 0:n.runtimeEnvironment)==null?void 0:e.isCloud}),wo=x([$,K,R],([o,t,n])=>uo(o,t)||n);x([$,R],([o,t])=>lo(o)||t);const mo={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},ko=["workflowId","workflowType","timeRange","executionStatus","closeTime"],yo=o=>!(o===null||o===void 0||o===""||typeof o=="string"&&o==="undefined"),ho=o=>{if(typeof o!="string")return!1;for(const t of ko)if(t===o)return!0;return!1},Eo=(o,t,n)=>{const e=mo[o];return t==="All"?"":no(t)||eo(t)?n||y(wo)?`${e} > "${F(t)}"`:`${e} BETWEEN "${F(t)}" AND "${ro()}"`:`${e}="${t}"`},xo=(o,t)=>Object.entries(o).map(([n,e])=>{if(ho(n)&&yo(e))return Eo(n,e,t)}).filter(Boolean),Io=(o,t=!1)=>xo(o,t).join(" and "),bo=async(o,t,n=fetch,e=!1)=>{const r=t.query||Io(t,e);let i;try{i=decodeURIComponent(r)}catch{i=r}const c=e?"workflows.archived":"workflows";let a="";const u=s=>{var m,k;X(s),(m=s==null?void 0:s.body)!=null&&m.message||s!=null&&s.status?a=((k=s==null?void 0:s.body)==null?void 0:k.message)??`Error fetching workflows: ${s.status}: ${s.statusText}`:a="Error fetching workflows: Server failed to respond"},f=w(c,{namespace:o}),{executions:l,nextPageToken:h}=await d(f,{params:{query:i},onError:u,handleError:u,request:n})??{executions:[],nextPageToken:""};return{workflows:P({executions:l}),nextPageToken:String(h),error:a}},zo=async({namespace:o,workflowId:t,url:n},e=fetch)=>{var l;const r="workflows",i=n??H(o),c=M(r,{namespace:o}),a=i+c,{executions:u}=await d(a,{params:{query:`WorkflowId="${t}"`,pageSize:"1"},request:e})??{executions:[]},f=(l=P({executions:u}))==null?void 0:l[0];return{runId:f==null?void 0:f.runId}},Vo=async(o,t=fetch,n=!1)=>{const e=n?"workflows.archived":"workflows";let r=!0;const i=a=>{(Y(a)||Z(a))&&(r=!1)},c=w(e,{namespace:o});return await d(c,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:r}},qo=async(o,t,n=fetch)=>bo(o,t,n,!0);async function Do(o,t=fetch){const n=w("workflow",o);return d(n,{request:t}).then(I)}async function No({workflow:o,namespace:t,reason:n,identity:e}){const r=w("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await d(r,{options:{method:"POST",body:E({reason:n,...e&&{identity:e}})},notifyOnError:!1})}async function Qo({namespace:o,workflowId:t,runId:n},e=fetch){const r=w("workflow.cancel",{namespace:o,workflowId:t,runId:n});return d(r,{request:e,notifyOnError:!1,options:{method:"POST"}})}async function jo({namespace:o,workflowId:t,runId:n,signalName:e,signalInput:r,settings:i,accessToken:c}){var f;const a=w("workflow.signal",{namespace:o,workflowId:t,runId:n});let u=null;if(r)if((f=i==null?void 0:i.codec)!=null&&f.endpoint){const l=await j({payloads:{payloads:[JSON.parse(r)]},namespace:o,settings:i,accessToken:c,encode:!0});if(y(L)==="error")throw new Error(y(J)||N("encode-failed"));u=(l==null?void 0:l.payloads)??null}else u=[{metadata:{encoding:O("json/plain")},data:O(r)}];return d(a,{notifyOnError:!1,options:{method:"POST",body:E({signalName:e,input:{payloads:u}})}})}async function Uo({namespace:o,workflowId:t,runId:n,eventId:e,reason:r,resetReapplyType:i}){const c=w("workflow.reset",{namespace:o,workflowId:t,runId:n}),a={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:e,resetReapplyType:i,requestId:io(),reason:r};return d(c,{notifyOnError:!1,options:{method:"POST",body:E(a)}})}async function Ko(o,t=fetch){const n=r=>{console.error(r)},e=w("workflow",o);return d(e,{request:t,onError:n,handleError:n}).then(I)}export{wo as a,bo as b,Qo as c,Vo as d,Io as e,Do as f,qo as g,Ko as h,R as i,zo as j,Uo as r,jo as s,No as t,ao as w};
