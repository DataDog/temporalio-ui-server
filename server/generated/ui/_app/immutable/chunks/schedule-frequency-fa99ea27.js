import{r as m,a as p}from"./route-for-api-4583a1c4.js";import{s as $}from"./parse-with-big-int-f9a90488.js";import{v as k}from"./toaster-ae3b14ff.js";import{S as w,i as D,s as H,k as v,l as S,m as b,h as f,n as _,b as y,B as q,M as I,N as C,q as g,a as L,r as E,c as R,K as T,u as M}from"./index-3630b6f8.js";import{g as j,w as B,m as F}from"./calendar-12fe709d.js";const X=async(l,e=fetch)=>{let n="";const c=a=>{var i;return n=((i=a==null?void 0:a.body)==null?void 0:i.message)??`Error fetching schedules: ${a.status}: ${a.statusText}`},s=m("schedules",{namespace:l}),{schedules:o,nextPageToken:t}=await p(s,{params:{},onError:c,request:e})??{schedules:[],nextPageToken:""};return{schedules:o,nextPageToken:String(t),error:n}};async function Y(l,e=fetch){const n=m("schedule",l);return p(n,{request:e})}async function Z(l,e=fetch){const n=m("schedule.delete",l);return p(n,{request:e,options:{method:"DELETE"}})}async function ee({namespace:l,body:e}){let n="";const c=t=>{var a;return n=((a=t==null?void 0:t.body)==null?void 0:a.message)??`Error creating schedule: ${t.status}: ${t.statusText}`},s=m("schedules",{namespace:l}),{conflictToken:o}=await p(s,{options:{method:"POST",body:$({request_id:k(),...e})},shouldRetry:!1,onError:c});return{conflictToken:o,error:n}}async function te({namespace:l,scheduleId:e,body:n}){let c="";const s=t=>{var a;return c=((a=t==null?void 0:t.body)==null?void 0:a.message)??`Error editing schedule: ${t.status}: ${t.statusText}`},o=m("schedule",{namespace:l,scheduleId:e});return await p(o,{options:{method:"POST",body:$({request_id:k(),...n})},shouldRetry:!1,onError:s}),{error:c}}async function se({namespace:l,scheduleId:e,reason:n}){const c={patch:{pause:n}},s=m("schedule",{namespace:l,scheduleId:e});return await p(s,{options:{method:"PATCH",body:$({...c,request_id:k()})},shouldRetry:!1,onError:o=>console.error(o)})}async function ae({namespace:l,scheduleId:e,reason:n}){const c={patch:{unpause:n}},s=m("schedule",{namespace:l,scheduleId:e});return await p(s,{options:{method:"PATCH",body:$({...c,request_id:k()})},shouldRetry:!1})}const ne=({preset:l,month:e,dayOfMonth:n,dayOfWeek:c,hour:s,minute:o})=>{let t="";const a=!s||!parseInt(s)||parseInt(s)<12?"am":"pm",r=`${(!s||!parseInt(s)?"12":parseInt(s)<=12?s:(parseInt(s)-12).toString()).padStart(2,"0")}:${o?o.padStart(2,"0"):"00"}${a}`;if(l==="week"){const u=j.find(d=>d.value===c);u?t=`${u.label} at ${r}`:t=`${c.split(",").map(P=>B.find(A=>A.value===P).label).join(", ")} at ${r}`}else if(l==="month")if(e==="*")t=`Every ${n} of the month at ${r}`;else{const d=e.split(",").map(h=>F.find(x=>x.value===h).label).join(", ");t=`Every ${n} of ${d} at ${r}`}return t},N=(l="",e=!1)=>{let n="";if(!l)return n;const c=parseInt(l.slice(0,-1)),s=Math.floor(c/(60*60*24));let o=c-(s>0?s*60*60*24:0);const t=Math.floor(o/(60*60));o=o-(t>0?t*60*60:0);const a=Math.floor(o/60),i=a>0?o-a*60:o,r=`${t?t.toString().padStart(2,"0"):"00"}hrs`,u=`${a?a.toString().padStart(2,"0"):"00"}min`,d=`${i?i.toString().padStart(2,"0"):"00"}sec`,h=e?"Offset":"Every";return s?n=`${h} ${s}days:${r}:${u}:${d}`:t?n=`${h} ${r}:${u}:${d}`:a?n=`${h} ${u}:${d}`:i&&(n=`${h} ${d}`),n};function U(l){let e,n=N(l[1])+"",c,s,o,t=N(l[2],!0)+"",a;return{c(){e=v("p"),c=g(n),s=L(),o=v("p"),a=g(t),this.h()},l(i){e=S(i,"P",{"data-testid":!0});var r=b(e);c=E(r,n),r.forEach(f),s=R(i),o=S(i,"P",{"data-testid":!0});var u=b(o);a=E(u,t),u.forEach(f),this.h()},h(){_(e,"data-testid","schedule-interval-frequency"),_(o,"data-testid","schedule-phase-frequency")},m(i,r){y(i,e,r),T(e,c),y(i,s,r),y(i,o,r),T(o,a)},p:q,d(i){i&&f(e),i&&f(s),i&&f(o)}}}function W(l){var o;let e,n=(((o=l[0])==null?void 0:o.comment)??"")+"",c,s;return{c(){e=v("p"),c=g(n),s=g(" UTC"),this.h()},l(t){e=S(t,"P",{"data-testid":!0});var a=b(e);c=E(a,n),s=E(a," UTC"),a.forEach(f),this.h()},h(){_(e,"data-testid","schedule-calendar-frequency")},m(t,a){y(t,e,a),T(e,c),T(e,s)},p(t,a){var i;a&1&&n!==(n=(((i=t[0])==null?void 0:i.comment)??"")+"")&&M(c,n)},d(t){t&&f(e)}}}function K(l){let e,n;function c(t,a){return t[0]?W:U}let s=c(l),o=s(l);return{c(){e=v("div"),o.c(),this.h()},l(t){e=S(t,"DIV",{class:!0});var a=b(e);o.l(a),a.forEach(f),this.h()},h(){_(e,"class",n="flex flex-col "+l[3].class)},m(t,a){y(t,e,a),o.m(e,null)},p(t,[a]){s===(s=c(t))&&o?o.p(t,a):(o.d(1),o=s(t),o&&(o.c(),o.m(e,null))),a&8&&n!==(n="flex flex-col "+t[3].class)&&_(e,"class",n)},i:q,o:q,d(t){t&&f(e),o.d()}}}function O(l,e,n){let{calendar:c=void 0}=e,{interval:s=void 0}=e;const o=s==null?void 0:s.interval,t=s==null?void 0:s.phase;return l.$$set=a=>{n(3,e=I(I({},e),C(a))),"calendar"in a&&n(0,c=a.calendar),"interval"in a&&n(4,s=a.interval)},e=C(e),[c,o,t,e,s]}class oe extends w{constructor(e){super(),D(this,e,O,K,H,{calendar:0,interval:4})}}export{oe as S,Y as a,ne as b,ee as c,Z as d,te as e,X as f,se as p,ae as u};
