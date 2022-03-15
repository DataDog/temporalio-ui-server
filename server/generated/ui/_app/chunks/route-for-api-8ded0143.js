var e=Object.defineProperty;var T=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var _=(o,n,c)=>n in o?e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[n]=c,l=(o,n)=>{for(var c in n||(n={}))y.call(n,c)&&_(o,c,n[c]);if(T)for(var c of T(n))A.call(n,c)&&_(o,c,n[c]);return o};import{D as g}from"./vendor-81c0e211.js";import{n as d}from"./notifications-5747bfcc.js";import{i as $}from"./is-network-error-ac7c8caf.js";const O=g(null),v=o=>{if(q(o)){d.add("error",`${o.statusCode} ${o.statusText}`);return}if($(o))throw d.add("error",`${o.statusCode} ${o.statusText}`),O.set(o),o;typeof o=="string"&&d.add("error",o),o instanceof Error&&d.add("error",o.message)},q=o=>$(o)?o.statusCode===403||o.statusCode===401:!1,C=o=>typeof o=="function",U=(o,n)=>{const c=n instanceof URLSearchParams;return n&&!c&&(n=new URLSearchParams(n)),n?`${o}?${n}`:o},H=o=>o.message!==void 0&&typeof o.message=="string",F=async(o,n={},c=10)=>{const{params:t={},request:i=fetch,token:u,shouldRetry:k=!1,notifyOnError:P=!0,onError:E,retryInterval:h=5e3}=n;let{options:I}=n;const V=u?{next_page_token:u}:{},x=new URLSearchParams(l(l({},t),V)),L=U(o,x);try{I=N(I);const s=await i(L,I),f=await s.json(),{status:R,statusText:S}=s;if(!s.ok)if(E&&C(E))E({status:R,statusText:S,body:f});else throw{statusCode:s.status,statusText:s.statusText,response:s};return f}catch(s){if(P){if(v(s),k&&c>0)return new Promise(f=>{setTimeout(()=>{f(F(o,n,c-1))},h)})}else throw s}},N=o=>{const n=l({credentials:"include"},o);return n.headers=D(o==null?void 0:o.headers),n},D=o=>{o||(o={});const n="_csrf=",c="X-CSRF-TOKEN";try{let i=document.cookie.split(";").find(u=>u.includes(n));i&&!o[c]&&(i=i.trim().slice(n.length),o[c]=i)}catch(t){console.error(t)}return o};let w="";w.endsWith("/")&&(w=w.slice(0,-1));const K=o=>o.split("/").map(n=>encodeURIComponent(n)).join("/"),b=o=>(o.startsWith("/")&&(o=o.slice(1)),`${w}/api/v1/${K(o)}`);function X(o,n){const c={cluster:"/cluster",settings:"/settings",user:"/me",namespaces:"/namespaces","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/workflows/archived`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.executionId}/executions/${n==null?void 0:n.runId}`,"workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.executionId}/executions/${n==null?void 0:n.runId}/terminate`,events:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.executionId}/executions/${n==null?void 0:n.runId}/events`,query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.executionId}/executions/${n==null?void 0:n.runId}/query`};return b(c[o])}export{X as a,C as b,v as h,H as i,O as n,F as r};
