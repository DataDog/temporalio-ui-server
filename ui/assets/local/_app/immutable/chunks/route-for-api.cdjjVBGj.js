import{B as u}from"./global.zYyA-D5k.js";import{g as A}from"./auth-user.fsUIZvFn.js";import{w as q}from"./entry.injf451c.js";import{t as x}from"./toaster.Tfe_sdCg.js";import{h as g}from"./has.iatLMeUG.js";import{i as C}from"./is-network-error.m1ZFLdb3.js";import{j as e,t as R}from"./route-for.duuylwQH.js";import{i as F}from"./persist-store.HXPJB37Z.js";import{z as O}from"./scheduler.LRpOgQOC.js";import{b as P}from"./paths.WD4-iIug.js";import{p as W}from"./stores.-4L9-oZW.js";const N=q(null),S=(c,n=x,i=N,s=u)=>{if(!(c instanceof DOMException&&c.name==="AbortError"))throw typeof c=="string"?n.push({variant:"error",message:c}):c.report=!1,c instanceof Error&&n.push({variant:"error",message:c.message}),b(c)&&s&&window.location.assign(e(c==null?void 0:c.message)),I(c)&&s&&window.location.assign(e(c==null?void 0:c.message)),C(c)&&(n.push({variant:"error",message:`${c.statusCode} ${c.statusText}`}),i.set(c)),c},sn=(c,n=u)=>{var s;const i=`${c==null?void 0:c.status} ${(s=c==null?void 0:c.body)==null?void 0:s.message}`;if(b(c)&&n){window.location.assign(e(i));return}if(I(c)&&n){window.location.assign(e(i));return}},b=c=>T(c,401),I=c=>T(c,403),T=(c,n)=>g(c,"statusCode")?c.statusCode===n:g(c,"status")?c.status===n:!1,on=c=>(c==null?void 0:c.message)!==void 0&&typeof(c==null?void 0:c.message)=="string",ln=async(c,n={})=>{const{params:i={},request:s=fetch,token:l,notifyOnError:t=!0,handleError:f=S,onError:k,isBrowser:$=u}=n;let{options:w}=n,d=new URLSearchParams;if(i!=null&&i.entries)d=i,l&&d.set("nextPageToken",l);else{const o=l?{next_page_token:l}:{};d=new URLSearchParams({...i,...o})}const v=R(c,d);try{w=z(w,$),c.endsWith("api/v1/settings")||(w=await _(w,$));const o=await s(v,w),h=await o.json(),{status:U,statusText:E}=o;if(!o.ok)if(k&&F(k))k({status:U,statusText:E,body:h});else throw{statusCode:o.status,statusText:o.statusText,response:o,message:(h==null?void 0:h.message)??o.statusText};return h}catch(o){if(t)f(o);else throw o}},z=(c,n=u)=>{const i={credentials:"include",...c};return i.headers=B(c==null?void 0:c.headers,n),i},_=async(c,n=u)=>{const{accessToken:i,idToken:s}=A();return globalThis!=null&&globalThis.AccessToken?c.headers=await y(c==null?void 0:c.headers,globalThis.AccessToken,n):(i||s)&&(c.headers=await y(c==null?void 0:c.headers,async()=>i??s,n)),s&&(c.headers=L(c==null?void 0:c.headers,s,n)),c},y=async(c,n,i=u)=>{if(c||(c={}),!i)return c;try{const s=await n();s&&(c.Authorization=`Bearer ${s}`)}catch(s){console.error(s)}return c},L=(c={},n,i=u)=>(i&&n&&(c["Authorization-Extras"]=n),c),B=(c,n=u)=>{if(c||(c={}),c["Caller-Type"]="operator",!n)return c;const i="_csrf=",s="X-CSRF-TOKEN";try{let t=document.cookie.split(";").find(f=>f.includes(i));t&&!c[s]&&(t=t.trim().slice(i.length),c[s]=t)}catch(l){console.error(l)}return c};function J(c=u){const n="",i=!n.startsWith("http");let s="";return i?s=c?window.location.origin+n:"":s=n,s.endsWith("/")&&(s=s.slice(0,-1)),s}const D=(c,n)=>c?c.replace("%namespace%",n):"",H=c=>{var t,f;let n="";const i=(t=O(W).data)==null?void 0:t.webUrl,s=i&&c,l=((f=globalThis==null?void 0:globalThis.AppConfig)==null?void 0:f.apiUrl)&&c;return s?n=i:l?(console.warn("Using fallback api url, web url not found"),n=D(globalThis.AppConfig.apiUrl,c)):n=J(),n.endsWith("/")&&(n=n.slice(0,-1)),n=`${n}${P}`,n},K=c=>(c.startsWith("/")&&(c=c.slice(1)),`/api/v1/${c}`),M=(c,n)=>`${H(n)}${c}`,X=c=>Object.keys(c??{}).reduce((n,i)=>(n[i]=encodeURIComponent(encodeURIComponent(c[i])),n),{namespace:"",workflowId:"",scheduleId:"",queue:"",queryType:"",signalName:"",batchJobId:"",activityId:""});function G(c,n,i=!0){i&&(n=X(n));const s={cluster:"/cluster-info",systemInfo:"/system-info","events.ascending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/history`,"events.descending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/history-reverse`,namespaces:"/namespaces",namespace:`/namespaces/${n==null?void 0:n.namespace}`,query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/query/${n.queryType}`,schedule:`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,"schedule.patch":`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}/patch`,"schedule.edit":`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}/update`,schedules:`/namespaces/${n==null?void 0:n.namespace}/schedules`,"search-attributes":`/namespaces/${n.namespace}/search-attributes`,settings:"/settings","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,"task-queue.compatibility":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}/worker-build-id-compatibility`,user:"/me","worker-task-reachability":`/namespaces/${n==null?void 0:n.namespace}/worker-task-reachability`,"workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/terminate`,"workflow.cancel":`/namespaces/${n.namespace}/workflows/${n.workflowId}/cancel`,"workflow.signal":`/namespaces/${n.namespace}/workflows/${n.workflowId}/signal/${n.signalName}`,"workflow.reset":`/namespaces/${n.namespace}/workflows/${n.workflowId}/reset`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/archived-workflows`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`,"workflows.count":`/namespaces/${n==null?void 0:n.namespace}/workflow-count`,"activity.complete":`/namespaces/${n.namespace}/activities/complete-by-id`,"activity.fail":`/namespaces/${n.namespace}/activities/fail-by-id`,"batch-operations.list":`/namespaces/${n.namespace}/batch-operations`,"batch-operations":`/namespaces/${n.namespace}/batch-operations/${n==null?void 0:n.batchJobId}`};return K(s[c])}function tn(c,n,i=!0){const s=G(c,n,i);return M(s,n==null?void 0:n.namespace)}export{ln as a,H as b,sn as c,b as d,I as e,J as g,S as h,on as i,N as n,G as p,tn as r};
