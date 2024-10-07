import{B as k,O as p}from"./global.zYyA-D5k.js";import{b as a}from"./paths.WD4-iIug.js";import{e as h}from"./encode-uri.Mzeiosm2.js";class i extends Error{}i.prototype.name="InvalidTokenError";function F(e){return decodeURIComponent(atob(e).replace(/(.)/g,(t,r)=>{let o=r.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}function I(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return F(t)}catch{return atob(t)}}function U(e,t){if(typeof e!="string")throw new i("Invalid token specified: must be a string");t||(t={});const r=t.header===!0?0:1,o=e.split(".")[r];if(typeof o!="string")throw new i(`Invalid token specified: missing part #${r+1}`);let s;try{s=I(o)}catch(n){throw new i(`Invalid token specified: invalid base64 for part #${r+1} (${n.message})`)}try{return JSON.parse(s)}catch(n){throw new i(`Invalid token specified: invalid json for part #${r+1} (${n.message})`)}}const $=(e,t)=>{const r=t instanceof URLSearchParams;return t&&!r&&(t=new URLSearchParams(t)),t?`${e}?${t}`:e},E=()=>`${a}/namespaces`,d=({namespace:e})=>`${a}/namespaces/${e}`,R=()=>`${a}/select-namespace`,g=e=>`${d(e)}/workflows`,O=({namespace:e,query:t,search:r,page:o})=>$(g({namespace:e}),{query:t,search:r,...o&&{page:o}}),D=e=>`${d(e)}/archival`,c=({workflow:e,run:t,...r})=>{const o=h(e);return`${g(r)}/${o}/${t}`},m=e=>`${d(e)}/schedules`,L=({namespace:e})=>`${m({namespace:e})}/create`,W=({scheduleId:e,namespace:t})=>{const r=h(e);return`${m({namespace:t})}/${r}`},A=({scheduleId:e,namespace:t})=>{const r=h(e);return`${m({namespace:t})}/${r}/edit`},N=({queryParams:e,...t})=>{const r=`${c(t)}/history`;return $(`${r}`,e)},_=({eventId:e,...t})=>`${c(t)}/history/events/${e}`,x=({eventId:e,...t})=>`${c(t)}/history/event-groups/${e}`,q=e=>`${c(e)}/workers`,z=e=>`${c(e)}/relationships`,H=e=>{const t=h(e.queue);return`${d({namespace:e.namespace})}/task-queues/${t}`},T=e=>`${c(e)}/call-stack`,j=e=>`${c(e)}/query`,B=e=>`${c(e)}/metadata`,Q=e=>`${c(e)}/pending-activities`,G=e=>{const{settings:t,searchParams:r,originUrl:o}=e;switch(t.auth.flow){case p.AuthorizationCode:default:return v(t,r,o);case p.Implicit:return y(t,r,o)}},v=(e,t,r)=>{const o=new URL(`${a}/auth/sso`,e.baseUrl);let s=e.auth.options??[];return s=[...s,"returnUrl"],s.forEach(n=>{if(!t)return;const u=t.get(n);u&&o.searchParams.set(n,u)}),!o.searchParams.get("returnUrl")&&r&&o.searchParams.set("returnUrl",r),o.toString()},y=(e,t,r)=>{const o=new URL(e.auth.authorizationUrl);o.searchParams.set("response_type","id_token"),o.searchParams.set("client_id",e.auth.clientId),o.searchParams.set("redirect_uri",r),o.searchParams.set("scope",e.auth.scopes.join(" "));const s=crypto.randomUUID();window.localStorage.setItem("nonce",s),o.searchParams.set("nonce",s);const n=crypto.randomUUID();return sessionStorage.setItem(n,t.get("returnUrl")??(r||"/")),o.searchParams.set("state",n),o.toString()};class l extends Error{}class S extends l{}class f extends l{}const J=e=>{const t=new URLSearchParams(e.substring(1)),r=t.get("id_token");if(!r)return null;if(!window.localStorage.getItem("nonce"))throw new S("No nonce in localStorage");let s;try{s=U(r)}catch(w){throw w instanceof i?new l("Invalid id_token in hash"):new l(w)}const n=t.get("state");if(!n)throw new f("No state in hash");const u=sessionStorage.getItem(n);if(!u)throw new f("Hash state missing from sessionStorage");return{redirectUrl:u,authUser:{idToken:r,name:s.name,email:s.email},stateKey:n}},K=(e="",t=k)=>{if(t){const r=new URL(`${a}/login`,window.location.origin);return r.searchParams.set("returnUrl",window.location.href),e&&r.searchParams.set("error",e),r.toString()}return`${a}/login`},M=(e,t)=>e&&t?`${a}/import/events/${e}/workflow/run/history/${t}`:`${a}/import/events`,V=({namespace:e})=>`${a}/namespaces/${e}/batch-operations`,X=({namespace:e,jobId:t})=>`${a}/namespaces/${e}/batch-operations/${t}`;export{x as A,l as O,d as a,N as b,T as c,G as d,g as e,R as f,X as g,m as h,W as i,K as j,V as k,L as l,q as m,z as n,j as o,B as p,Q as q,M as r,O as s,$ as t,A as u,H as v,_ as w,J as x,D as y,E as z};
