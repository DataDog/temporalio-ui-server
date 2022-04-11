var $=Object.defineProperty,D=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var F=(t,i,e)=>i in t?$(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,w=(t,i)=>{for(var e in i||(i={}))M.call(i,e)&&F(t,e,i[e]);if(O)for(var e of O(i))_.call(i,e)&&F(t,e,i[e]);return t},q=(t,i)=>D(t,G(i));import{aq as K,aJ as L}from"./vendor-65a13680.js";import{s as A,d as B,a as H}from"./data-converter-config-66bb0804.js";import{a as N}from"./atob-5f9d7101.js";import{f as U}from"./format-date-46453f38.js";import{g as z}from"./get-event-categorization-90555be0.js";import{s as Q}from"./simplify-attributes-a375d023.js";const V=(t,i)=>{if(!t)return{hasWebsocket:!1,websocket:null,closeSocket:function(){return null}};try{v=new L(`ws://localhost:${t}/`,w({packMessage:e=>JSON.stringify(e),unpackMessage:e=>JSON.parse(e),attachRequestId:(e,r)=>Object.assign({requestId:r},e),extractRequestId:e=>e&&e.requestId},i)),v.onError(()=>{console.error("A WebSocket error occurred.")})}catch{A()}return v.open(),{hasWebsocket:!0,websocket:v,closeSocket:function(){return v.close()}}};let v=null;var j;const X=(j=K(B))!=null?j:null,Y=V(X);async function Z(t,i){if(!i.isOpened)try{await i.open()}catch{A()}return i.isOpened?i.sendRequest({payload:JSON.stringify(t)}).then(r=>{H();try{return JSON.parse(r.content)}catch{return r.content}}).catch(()=>{A()}):Promise.resolve(t)}function m(t){var e,r;const i=N(String((r=(e=t==null?void 0:t.metadata)==null?void 0:e.encoding)!=null?r:""));switch(t.metadata.encodingDecoded=i,i){case"json/plain":case"json/protobuf":try{return JSON.parse(N(String(t.data)))}catch{}}return t}const tt=async(t,i)=>{var o,c,u,a,l,k,C,g,W,y,I,R;const e=t,r=(a=(u=(o=e==null?void 0:e.input)==null?void 0:o.payloads)!=null?u:(c=e==null?void 0:e.result)==null?void 0:c.payloads)!=null?a:null;if(r){let s;const d=i!=null?i:Y;(i==null?void 0:i.hasWebsocket)?s=await Promise.all((r!=null?r:[]).map(async P=>await Z(P,d.websocket))):s=r.map(m),((l=e==null?void 0:e.input)==null?void 0:l.payloads)&&(e.input.payloads=s),((k=e==null?void 0:e.result)==null?void 0:k.payloads)&&(e.result.payloads=s)}if((C=e==null?void 0:e.searchAttributes)==null?void 0:C.indexedFields){const s=(g=e==null?void 0:e.searchAttributes)==null?void 0:g.indexedFields;Object.entries(s).forEach(([d,E])=>{s[d]=m(E)})}if((W=e==null?void 0:e.memo)==null?void 0:W.fields){const s=(y=e==null?void 0:e.memo)==null?void 0:y.fields;Object.entries(s).forEach(([d,E])=>{s[d]=m(E)})}if((I=e==null?void 0:e.header)==null?void 0:I.fields){const s=(R=e==null?void 0:e.header)==null?void 0:R.fields;Object.entries(s).forEach(([d,E])=>{s[d]=m(E)})}if(e==null?void 0:e.queryResult){const s=e==null?void 0:e.queryResult;Object.entries(s).forEach(([d,E])=>{s[d]=m(E)})}return e},et=["workflowExecutionStartedEventAttributes","workflowExecutionCompletedEventAttributes","workflowExecutionFailedEventAttributes","workflowExecutionTimedOutEventAttributes","workflowTaskStartedEventAttributes","workflowTaskScheduledEventAttributes","workflowTaskCompletedEventAttributes","workflowTaskTimedOutEventAttributes","workflowTaskFailedEventAttributes","activityTaskScheduledEventAttributes","activityTaskCompletedEventAttributes","activityTaskStartedEventAttributes","activityTaskFailedEventAttributes","activityTaskTimedOutEventAttributes","timerStartedEventAttributes","timerFiredEventAttributes","activityTaskCancelRequestedEventAttributes","activityTaskCanceledEventAttributes","timerCanceledEventAttributes","markerRecordedEventAttributes","workflowExecutionSignaledEventAttributes","workflowExecutionTerminatedEventAttributes","workflowExecutionCancelRequestedEventAttributes","workflowExecutionCanceledEventAttributes","requestCancelExternalWorkflowExecutionInitiatedEventAttributes","requestCancelExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionCancelRequestedEventAttributes","workflowExecutionContinuedAsNewEventAttributes","startChildWorkflowExecutionInitiatedEventAttributes","startChildWorkflowExecutionFailedEventAttributes","childWorkflowExecutionStartedEventAttributes","childWorkflowExecutionCompletedEventAttributes","childWorkflowExecutionFailedEventAttributes","childWorkflowExecutionCanceledEventAttributes","childWorkflowExecutionTimedOutEventAttributes","childWorkflowExecutionTerminatedEventAttributes","signalExternalWorkflowExecutionInitiatedEventAttributes","signalExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionSignaledEventAttributes","upsertWorkflowSearchAttributesEventAttributes"],it=t=>{for(const i of et)if(i in t)return i},rt=(t,i)=>t[i],nt=t=>{const i=it(t),e=rt(t,i);return{key:i,attributes:e}},n=t=>i=>Boolean(i[t]),Rt=n("workflowExecutionCompletedEventAttributes"),b=n("activityTaskScheduledEventAttributes"),st=n("activityTaskStartedEventAttributes"),ot=n("activityTaskCompletedEventAttributes"),at=n("activityTaskFailedEventAttributes"),ct=n("activityTaskTimedOutEventAttributes"),S=n("timerStartedEventAttributes"),ut=n("timerFiredEventAttributes"),dt=n("activityTaskCancelRequestedEventAttributes"),lt=n("activityTaskCanceledEventAttributes"),Et=n("timerCanceledEventAttributes"),p=n("markerRecordedEventAttributes"),T=n("workflowExecutionSignaledEventAttributes"),x=n("startChildWorkflowExecutionInitiatedEventAttributes"),ft=n("childWorkflowExecutionStartedEventAttributes"),kt=n("childWorkflowExecutionCompletedEventAttributes"),h=n("signalExternalWorkflowExecutionInitiatedEventAttributes"),J=t=>{if(b(t)||x(t)||S(t)||h(t)||T(t)||p(t))return t.id;if(st(t))return String(t.activityTaskStartedEventAttributes.scheduledEventId);if(lt(t))return String(t.activityTaskCanceledEventAttributes.scheduledEventId);if(dt(t))return String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId);if(at(t))return String(t.activityTaskFailedEventAttributes.scheduledEventId);if(ct(t))return String(t.activityTaskTimedOutEventAttributes.scheduledEventId);if(ot(t))return String(t.activityTaskCompletedEventAttributes.scheduledEventId);if(ft(t))return String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId);if(kt(t))return String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId);if(ut(t))return String(t.timerFiredEventAttributes.startedEventId);if(Et(t))return String(t.timerCanceledEventAttributes.startedEventId)},vt=t=>{var i,e,r,o,c,u,a,l,k;if(!!t){if(b(t))return(e=(i=t.activityTaskScheduledEventAttributes)==null?void 0:i.activityType)==null?void 0:e.name;if(S(t))return`Timer ${(r=t.timerStartedEventAttributes)==null?void 0:r.timerId} (${(o=t.timerStartedEventAttributes)==null?void 0:o.startToFireTimeout})`;if(h(t))return`Signal: ${(c=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:c.signalName}`;if(T(t))return`Signal received: ${(u=t.workflowExecutionSignaledEventAttributes)==null?void 0:u.signalName}`;if(p(t))return`Marker: ${(a=t.markerRecordedEventAttributes)==null?void 0:a.markerName}`;if(x(t))return`Child Workflow: ${(k=(l=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:l.workflowType)==null?void 0:k.name}`}},f=t=>{const i=J(t),e=vt(t),{timestamp:r,category:o,classification:c}=t,u=t,a=new Map,l=new Set;return a.set(t.id,t),l.add(t.id),{id:i,name:e,events:a,eventIds:l,initialEvent:u,timestamp:r,category:o,classification:c}},mt=t=>{if(b(t)||x(t)||S(t)||h(t)||T(t)||p(t))return f(t)},wt=(t,i)=>{!t||(t.events.set(i.id,i),t.eventIds.add(i.id),t.timestamp=i.timestamp)},At=t=>{const i={};for(const e of t){const r=J(e),o=mt(e);o?i[o.id]=o:wt(i[r],e)}return Object.values(i)},bt=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],St=t=>{if(t.includes("RequestCancel"))return"CancelRequested";for(const i of bt)if(t.includes(i))return i};async function pt(t){const{key:i,attributes:e}=nt(t),r=await tt(e);return w({type:i},r)}const Tt=async t=>{const i=String(t.eventId),e=t.eventType,r=U(String(t.eventTime)),o=St(e),c=z(e),u=await pt(t).then(a=>Q(a));return q(w({},t),{attributes:u,eventType:e,classification:o,category:c,id:i,name:e,timestamp:r})},Ot=async t=>{const i=await Promise.all(t.map(Tt)),e=At(i);return{events:i,eventGroups:e}};export{Rt as i,Ot as t};
