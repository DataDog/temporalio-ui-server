import{r as y,a as l}from"./route-for-api.e3a9ee2e.js";async function m(n,r=fetch){const o=y("task-queue",n),a=await l(o,{request:r,params:{taskQueueType:"1"}}),s=await l(o,{request:r,params:{taskQueueType:"2"}});s.pollers.forEach(e=>{e.taskQueueTypes=["ACTIVITY"]}),a.pollers.forEach(e=>{e.taskQueueTypes=["WORKFLOW"]});const i=e=>(t,u)=>{const c=t[u.identity]||{lastAccessTime:void 0,taskQueueTypes:[]};return t[u.identity]={lastAccessTime:!c.lastAccessTime||c.lastAccessTime<u.lastAccessTime?u.lastAccessTime:c.lastAccessTime,taskQueueTypes:c.taskQueueTypes.concat([e])},t};s.pollers.filter(e=>a.pollers.some(t=>{if(e.identity===t.identity)return e.taskQueueTypes=[...t.taskQueueTypes,...e.taskQueueTypes],e})),s.pollers.reduce(i("ACTIVITY"),a.pollers.reduce(i("WORKFLOW"),{}));const T=s.pollers.length?s.pollers:a.pollers,p=s.pollers.length?s.taskQueueStatus:a.taskQueueStatus;return{pollers:T,taskQueueStatus:p}}export{m as g};
