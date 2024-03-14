import{z as x}from"./scheduler.yuwC4fMQ.js";import{p as P}from"./stores.juR3f5yu.js";import{A as k}from"./workflow-actions.-K4W_iAA.js";import{f as D}from"./decode-payload.p66v336L.js";import{f as L}from"./screaming-enums.NBZzZ07O.js";import{w as _}from"./write-actions-are-allowed.XQsYs1qH.js";import{s as G}from"./simplify-attributes.2wcsRrXX.js";import{a as $}from"./auth-user.GzSyyrwk.js";import{e as H}from"./encode-payload.JM-oVvRh.js";import{b as J,p as M,a as u,r as w,c as X,d as Y,e as Z}from"./route-for-api.1OZ11K_U.js";import{s as I}from"./parse-with-big-int.e3oI4SEy.js";import{d as g}from"./entry.fdXiVngc.js";import{i as v}from"./version-check.Tmw6106D.js";import{c as C,t as oo}from"./versions.jnsSO3Wo.js";import{i as to,c as no,t as O,d as eo}from"./format-time.p0flJh4T.js";import{t as m}from"./translate.eu_ZgPaL.js";import{v as ro}from"./toaster.812EVx8o.js";const io=(o=[])=>o.map(t=>{const n=G(t,!0),e=t.activityId;return{...n,id:e}}),ao=o=>!o||!o.indexedFields?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[e,r])=>({...n,[e]:D(r)}),{})},T=o=>{var p,b,W,A,S,R,F;const t=ao(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,e=o.workflowExecutionInfo.execution.workflowId,r=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,c=o.workflowExecutionInfo.closeTime,a=o.workflowExecutionInfo.executionTime,f=L(o.workflowExecutionInfo.status),l=f==="Running",d=o.workflowExecutionInfo.historyLength,E=o.workflowExecutionInfo.historySizeBytes,s=`/workflows/${e}/${r}`,y=((b=(p=o==null?void 0:o.executionConfig)==null?void 0:p.taskQueue)==null?void 0:b.name)||((W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.taskQueue),h=(A=o==null?void 0:o.workflowExecutionInfo)==null?void 0:A.mostRecentWorkerVersionStamp,q=(S=o==null?void 0:o.workflowExecutionInfo)==null?void 0:S.parentNamespaceId,B=(R=o==null?void 0:o.workflowExecutionInfo)==null?void 0:R.parentExecution,Q=o.workflowExecutionInfo.stateTransitionCount,U=(F=o.executionConfig)==null?void 0:F.defaultWorkflowTaskTimeout,j=io(o.pendingActivities),K=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:e,runId:r,startTime:i,endTime:c,executionTime:a,status:f,historyEvents:d,historySizeBytes:E,searchAttributes:t,url:s,taskQueue:y,mostRecentWorkerVersionStamp:h,pendingActivities:j,pendingChildren:K,parentNamespaceId:q,parent:B,stateTransitionCount:Q,isRunning:l,defaultWorkflowTaskTimeout:U,get canBeTerminated(){return l&&_()}}},V=o=>(o.executions||[]).map(t=>T({workflowExecutionInfo:t})),so=(o,t)=>{var n;return((n=o==null?void 0:o.visibilityStore)==null?void 0:n.includes("elasticsearch"))||v(t,"1.19")},co=o=>{var t;return(t=o==null?void 0:o.visibilityStore)==null?void 0:t.includes("elasticsearch")},z=g([P],([o])=>{var t,n,e;return(e=(n=(t=o.data)==null?void 0:t.settings)==null?void 0:n.runtimeEnvironment)==null?void 0:e.isCloud}),fo=g([C,oo,z],([o,t,n])=>so(o,t)||n);g([C,z],([o,t])=>co(o)||t);const lo={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},uo=["workflowId","workflowType","timeRange","executionStatus","closeTime"],wo=o=>!(o===null||o===void 0||o===""||typeof o=="string"&&o==="undefined"),mo=o=>{if(typeof o!="string")return!1;for(const t of uo)if(t===o)return!0;return!1},ko=(o,t,n)=>{const e=lo[o];return t==="All"?"":to(t)||no(t)?n||x(fo)?`${e} > "${O(t)}"`:`${e} BETWEEN "${O(t)}" AND "${eo()}"`:`${e}="${t}"`},yo=(o,t)=>Object.entries(o).map(([n,e])=>{if(mo(n)&&wo(e))return ko(n,e,t)}).filter(Boolean),ho=(o,t=!1)=>yo(o,t).join(" and ");function xo(o){console.error("Unhandled action:",o)}const Eo=(o,t)=>{let n;switch(o){case k.Cancel:n=m("workflows.canceled");break;case k.Reset:n=m("workflows.reset");break;case k.Terminate:n=m("workflows.terminated");break;default:xo(o)}return t?m("workflows.workflow-action-reason-placeholder-with-email",{action:n,email:t}):m("workflows.workflow-action-reason-placeholder",{action:n})},N=({action:o,reason:t,email:n})=>{const e=Eo(o,n);return t?[t.trim(),e].join(" "):e},Io=async(o,t,n=fetch,e=!1)=>{const r=t.query||ho(t,e);let i;try{i=decodeURIComponent(r)}catch{i=r}const c=e?"workflows.archived":"workflows";let a="";const f=s=>{var y,h;X(s),(y=s==null?void 0:s.body)!=null&&y.message||s!=null&&s.status?a=((h=s==null?void 0:s.body)==null?void 0:h.message)??`Error fetching workflows: ${s.status}: ${s.statusText}`:a="Error fetching workflows: Server failed to respond"},l=w(c,{namespace:o}),{executions:d,nextPageToken:E}=await u(l,{params:{query:i},onError:f,handleError:f,request:n})??{executions:[],nextPageToken:""};return{workflows:V({executions:d}),nextPageToken:String(E),error:a}},qo=async({namespace:o,workflowId:t,url:n},e=fetch)=>{var d;const r="workflows",i=n??J(o),c=M(r,{namespace:o}),a=i+c,{executions:f}=await u(a,{params:{query:`WorkflowId="${t}"`,pageSize:"1"},request:e})??{executions:[]},l=(d=V({executions:f}))==null?void 0:d[0];return{runId:l==null?void 0:l.runId}},Bo=async(o,t=fetch,n=!1)=>{const e=n?"workflows.archived":"workflows";let r=!0;const i=a=>{(Y(a)||Z(a))&&(r=!1)},c=w(e,{namespace:o});return await u(c,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:r}},Qo=async(o,t,n=fetch)=>Io(o,t,n,!0);async function Uo(o,t=fetch){const n=w("workflow",{namespace:o.namespace,workflowId:o.workflowId});return u(n,{request:t,notifyOnError:!1,params:{"execution.runId":o.runId}}).then(e=>({workflow:T(e)})).catch(e=>({error:e}))}async function jo({workflow:o,namespace:t,reason:n}){const e=w("workflow.terminate",{namespace:t,workflowId:o.id}),r=x($).email,i=N({reason:n,action:k.Terminate,email:r});return await u(e,{options:{method:"POST",body:I({reason:i,...r&&{identity:r}})},notifyOnError:!1,params:{"execution.runId":o.runId}})}async function Ko({namespace:o,workflow:{id:t,runId:n}},e=fetch){const r=w("workflow.cancel",{namespace:o,workflowId:t});return u(r,{request:e,notifyOnError:!1,options:{method:"POST"},params:{"execution.runId":n}})}async function Do({namespace:o,workflow:{id:t,runId:n},name:e,input:r}){const i=w("workflow.signal",{namespace:o,workflowId:t,signalName:e}),c=await H(r),a=x(P).data.settings,f=(a==null?void 0:a.version)??"",d=v(f,"2.22")?{signalName:e,workflowExecution:{workflowId:t,runId:n},input:{payloads:c}}:{signalName:e,input:{payloads:c},params:{"execution.runId":n}};return u(i,{notifyOnError:!1,options:{method:"POST",body:I(d)}})}async function Lo({namespace:o,workflow:{id:t,runId:n},eventId:e,reason:r,reapplyType:i}){const c=w("workflow.reset",{namespace:o,workflowId:t}),a=x($).email,f=N({action:k.Reset,reason:r,email:a}),l={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:e,resetReapplyType:i,requestId:ro(),reason:f};return u(c,{notifyOnError:!1,options:{method:"POST",body:I(l)},params:{"execution.runId":n}})}async function _o(o,t=fetch){const n=r=>{console.error(r)},e=w("workflow",o);return u(e,{request:t,onError:n,handleError:n}).then(T)}export{Bo as a,Io as b,Ko as c,Qo as d,ho as e,qo as f,_o as g,Do as h,Uo as i,Eo as j,z as k,Lo as r,fo as s,jo as t};
