import{z as a}from"./scheduler.LRpOgQOC.js";import{p as m}from"./stores.zceJZ__p.js";import{t as w}from"./translate.HrioCK44.js";import{a as k}from"./auth-user.UIpnvKPu.js";import{c as P,o as j,p as z,i as F,v as x,s as p,a as R,b as O}from"./data-encoder-config.1YBJGWYz.js";import{h as f,b as W}from"./has.iatLMeUG.js";import{s as C,p as _}from"./parse-with-big-int.e3oI4SEy.js";const E=(e,n=P,o=j)=>{var c;return a(o)&&a(n)||((c=e==null?void 0:e.codec)==null?void 0:c.endpoint)||a(n)||""},S=(e,n=z,o=P,s=j)=>{var d,r;const c=a(s)&&a(o),i=(d=e==null?void 0:e.codec)!=null&&d.endpoint?!!((r=e==null?void 0:e.codec)!=null&&r.passAccessToken):!!a(n);return c?!!a(n):i},q=(e,n=F,o=P,s=j)=>{var d,r;const c=a(s)&&a(o),i=(d=e==null?void 0:e.codec)!=null&&d.endpoint?!!((r=e==null?void 0:e.codec)!=null&&r.includeCredentials):!!a(n);return c?!!a(n):i};async function L({payloads:e,namespace:n=a(m).params.namespace,settings:o=a(m).data.settings,accessToken:s=a(k).accessToken}){const c=E(o),i=S(o),d=q(o),r={"Content-Type":"application/json","X-Namespace":n};if(i)if(x(c))r.Authorization=`Bearer ${s}`;else return p(),e;const u=d?{headers:r,credentials:"include",method:"POST",body:C(e)}:{headers:r,method:"POST",body:C(e)};return fetch(c+"/decode",u).then(t=>{if(f(t,"ok")&&!t.ok)throw{statusCode:t.status,statusText:t.statusText,response:t,message:w("common.decode-failed")};return t.json()}).then(t=>(R(),t)).catch(t=>(p(t),e))}async function M({payloads:e,namespace:n=a(m).params.namespace,settings:o=a(m).data.settings,accessToken:s=a(k).accessToken}){const c=E(o),i=S(o),d=q(o),r={"Content-Type":"application/json","X-Namespace":n};if(i)if(x(c))r.Authorization=`Bearer ${s}`;else return p(),e;const u=d?{headers:r,credentials:"include",method:"POST",body:C(e)}:{headers:r,method:"POST",body:C(e)};return fetch(c+"/encode",u).then(t=>{if(f(t,"ok")&&!t.ok)throw{statusCode:t.status,statusText:t.statusText,response:t,message:w("common.encode-failed")};return t.json()}).then(t=>(R(),t)).catch(t=>{throw p(t),t})}const b=e=>Array.isArray(e)?e:[e];function h(e,n=!0){var s;if(e===null)return e;const o=O(String(((s=e==null?void 0:e.metadata)==null?void 0:s.encoding)??""));if(e!=null&&e.metadata&&(e.metadata.encodingDecoded=o),o!=null&&o.startsWith("json/"))try{const c=_(O(String((e==null?void 0:e.data)??"")));return n?c:{...e,data:c}}catch(c){console.warn("Could not parse payload: ",c)}return o==="binary/null"?n?null:{...e,data:null}:e}const Q=(e,n=!0)=>{if(f(e,"searchAttributes")&&f(e.searchAttributes,"indexedFields")){const o=e.searchAttributes.indexedFields;Object.entries(o).forEach(([s,c])=>{o[s]=h(c,n)})}else if(f(e,"searchAttributes")){const o=e.searchAttributes;Object.entries(o).forEach(([s,c])=>{o[s]=h(c,n)})}if(f(e,"memo")&&f(e.memo,"fields")){const o=e.memo.fields;Object.entries(o).forEach(([s,c])=>{o[s]=h(c,n)})}if(f(e,"header")&&f(e.header,"fields")){const o=e.header.fields;Object.entries(o).forEach(([s,c])=>{o[s]=h(c,n)})}if(f(e,"queryResult")){const o=e==null?void 0:e.queryResult;Object.entries(o).forEach(([s,c])=>{o[s]=h(c,n)})}return e},B=e=>async(n,o=!0)=>{if(E(e)){const s=await L({payloads:{payloads:n},settings:e});return((s==null?void 0:s.payloads)??[]).map(c=>h(c,o))}else return n.map(s=>h(s,o))},T=(e,...n)=>{for(const o of n)if(e===o)return!0;return!1},I=async(e,n=a(m).params.namespace,o=a(m).data.settings,s=a(k).accessToken)=>{const c=B(o);if(e)for(const i of Object.keys(e))if(T(i,"payloads","encodedAttributes")&&e[i]){const d=b(e[i]),r=await c(d);e[i]=T(i,"encodedAttributes")?r[0]:r}else{const d=e[i];W(d)&&(e[i]=await I(d,n,o,s))}return e},N=async(e,n,o,s,c=!0)=>{if(!e)return e;const i=B(o),d={...e};if(e)for(const r of Object.keys(d))if(T(r,"payloads","encodedAttributes")&&d[r]){const u=b(d[r]),l=await i(u,c);d[r]=T(r,"encodedAttributes")?l[0]:l}else{const u=d[r];W(u)&&(d[r]=await N(u,n,o,s,c))}return d},V=async({attributes:e,namespace:n,settings:o,accessToken:s})=>await I(e,n,o,s);export{S as a,q as b,N as c,Q as d,M as e,V as f,E as g,h};
