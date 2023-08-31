import{Z as P,n as m}from"./index.dd30cb12.js";import{b as U}from"./decode-payload.4c477b76.js";import{c as C}from"./is.ba28a1ea.js";import{s as j}from"./settings.f936af5f.js";import{s as q}from"./simplify-attributes.e401eab5.js";import{B as K}from"./route-for.1edc99b3.js";import{b as _,p as L,a as u,r as d,c as Z,i as G,d as H}from"./route-for-api.bede046a.js";import{s as E}from"./parse-with-big-int.bccd89af.js";import{d as x}from"./index.5197b41b.js";import{p as J}from"./stores.abe0e91a.js";import{i as M}from"./version-check.d006b302.js";import{c as $}from"./cluster.7d1ef457.js";import{t as X}from"./versions.a54cfed0.js";import{l as Y,m as oo,n as F,o as to}from"./format-time.8258873a.js";import{v as no}from"./toaster.e653e694.js";const ro=(o=j)=>!P(o).disableWriteActions,eo=(o=[])=>o.map(t=>{const n=q(t,!0),r=t.activityId;return{...n,id:r}}),io=o=>C(o)||C(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:U(e)}),{})},I=o=>{var g,b,T,p,W,S,A;const t=io(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,r=o.workflowExecutionInfo.execution.workflowId,e=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,s=o.workflowExecutionInfo.closeTime,a=o.workflowExecutionInfo.executionTime,l=o.workflowExecutionInfo.status,f=o.workflowExecutionInfo.status==="Running",w=o.workflowExecutionInfo.historyLength,y=o.workflowExecutionInfo.historySizeBytes,c=`/workflows/${r}/${e}`,k=((b=(g=o==null?void 0:o.executionConfig)==null?void 0:g.taskQueue)==null?void 0:b.name)||((T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.taskQueue),h=(p=o==null?void 0:o.workflowExecutionInfo)==null?void 0:p.mostRecentWorkerVersionStamp,R=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.parentNamespaceId,z=(S=o==null?void 0:o.workflowExecutionInfo)==null?void 0:S.parentExecution,V=o.workflowExecutionInfo.stateTransitionCount,Q=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,D=eo(o.pendingActivities),N=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:r,runId:e,startTime:i,endTime:s,executionTime:a,status:l,historyEvents:w,historySizeBytes:y,searchAttributes:t,url:c,taskQueue:k,mostRecentWorkerVersionStamp:h,pendingActivities:D,pendingChildren:N,parentNamespaceId:R,parent:z,stateTransitionCount:V,isRunning:f,defaultWorkflowTaskTimeout:Q,get canBeTerminated(){return f&&ro()}}},v=o=>(o.executions||[]).map(t=>I({workflowExecutionInfo:t})),so=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),O=(o,t=K)=>t?so(o):o,ao=(o,t)=>{var n;return((n=o==null?void 0:o.visibilityStore)==null?void 0:n.includes("elasticsearch"))||M(t,"1.19")},co=o=>{var t;return(t=o==null?void 0:o.visibilityStore)==null?void 0:t.includes("elasticsearch")},B=x([J],([o])=>{var t,n,r;return(r=(n=(t=o.data)==null?void 0:t.settings)==null?void 0:n.runtimeEnvironment)==null?void 0:r.isCloud}),fo=x([$,X,B],([o,t,n])=>ao(o,t)||n);x([$,B],([o,t])=>co(o)||t);const uo={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},lo=["workflowId","workflowType","timeRange","executionStatus","closeTime"],wo=o=>!(o===null||o===void 0||o===""||typeof o=="string"&&o==="undefined"),mo=o=>{if(typeof o!="string")return!1;for(const t of lo)if(t===o)return!0;return!1},ko=(o,t,n)=>{const r=uo[o];return t==="All"?"":Y(t)||oo(t)?n||P(fo)?`${r} > "${F(t)}"`:`${r} BETWEEN "${F(t)}" AND "${to()}"`:`${r}="${t}"`},ho=(o,t)=>Object.entries(o).map(([n,r])=>{if(mo(n)&&wo(r))return ko(n,r,t)}).filter(Boolean),yo=(o,t=!1)=>ho(o,t).join(" and "),Bo=async(o,t,n=fetch)=>{let r=0,e=0;try{const i=d("workflows.count",{namespace:o});if(t){const s=u(i,{params:{query:t},onError:m,handleError:m,request:n}),a=u(i,{params:{query:""},onError:m,handleError:m,request:n}),[l,f]=await Promise.all([s,a]);e=parseInt((l==null?void 0:l.count)??"0"),r=parseInt(f==null?void 0:f.count)}else{const s=await u(i,{params:{},onError:m,handleError:m,request:n});r=parseInt(s==null?void 0:s.count)}}catch{}return{count:e,totalCount:r}},Eo=async(o,t,n=fetch,r=!1)=>{const e=t.query||yo(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const s=r?"workflows.archived":"workflows";let a="";const l=c=>{var k,h;Z(c),(k=c==null?void 0:c.body)!=null&&k.message||c!=null&&c.status?a=((h=c==null?void 0:c.body)==null?void 0:h.message)??`Error fetching workflows: ${c.status}: ${c.statusText}`:a="Error fetching workflows: Server failed to respond"},f=d(s,{namespace:o}),{executions:w,nextPageToken:y}=await u(f,{params:{query:i},onError:l,handleError:l,request:n})??{executions:[],nextPageToken:""};return{workflows:v({executions:w}),nextPageToken:String(y),error:a}},Ro=async({namespace:o,workflowId:t,url:n},r=fetch)=>{var w;const e="workflows",i=n??_(o),s=L(e,{namespace:o}),a=i+s,{executions:l}=await u(a,{params:{query:`WorkflowId="${t}"`,pageSize:"1"},request:r})??{executions:[]},f=(w=v({executions:l}))==null?void 0:w[0];return{runId:f==null?void 0:f.runId}},zo=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=a=>{(G(a)||H(a))&&(e=!1)},s=d(r,{namespace:o});return await u(s,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},Vo=async(o,t,n=fetch)=>Eo(o,t,n,!0);async function Qo(o,t=fetch){const n=d("workflow",o);return u(n,{request:t}).then(I)}async function Do({workflow:o,namespace:t,reason:n,identity:r}){const e=d("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await u(e,{options:{method:"POST",body:E({reason:n,...r&&{identity:r}})},notifyOnError:!1})}async function No({namespace:o,workflowId:t,runId:n},r=fetch){const e=d("workflow.cancel",{namespace:o,workflowId:t,runId:n});return u(e,{request:r,notifyOnError:!1,options:{method:"POST"}})}async function Uo({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e}){const i=d("workflow.signal",{namespace:o,workflowId:t,runId:n});return u(i,{notifyOnError:!1,options:{method:"POST",body:E({signalName:r,input:{payloads:e?[{metadata:{encoding:O("json/plain")},data:O(e)}]:null}})}})}async function jo({namespace:o,workflowId:t,runId:n,eventId:r,reason:e,resetReapplyType:i}){const s=d("workflow.reset",{namespace:o,workflowId:t,runId:n}),a={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:i,requestId:no(),reason:e};return u(s,{notifyOnError:!1,options:{method:"POST",body:E(a)}})}async function qo(o,t=fetch){const n=e=>{console.error(e)},r=d("workflow",o);return u(r,{request:t,onError:n,handleError:n}).then(I)}export{fo as a,Eo as b,No as c,Bo as d,zo as e,Qo as f,yo as g,Vo as h,qo as i,B as j,Ro as k,jo as r,Uo as s,Do as t,ro as w};
