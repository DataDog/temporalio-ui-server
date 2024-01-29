import"./index.0942deb7.js";import"./paths.742c8328.js";import"./i18next.1cfb3cb9.js";import"./data-encoder-config.e34150f0.js";import"./parse-with-big-int.0036a80a.js";import"./auth-user.6dc931ea.js";import{b as c}from"./time-format.aa1f006c.js";import{F as m}from"./is-event-type.7aa6d0ba.js";import{d}from"./screaming-enums.7a4380bd.js";import{g as l}from"./get-event-categorization.75c83097.js";import{s as f}from"./simplify-attributes.3c34b46b.js";const p=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],u=e=>{if(e.includes("RequestCancel"))return"CancelRequested";for(const t of p)if(e.includes(t))return t},g=async e=>{const t=String(e.eventId),i=d(e.eventType),n=c(String(e.eventTime)),a=u(i),o=l(i),{key:s,attributes:r}=m(e);return{...e,name:i,id:t,eventType:i,timestamp:n,classification:a,category:o,attributes:f({type:s,...r})}},F=async e=>await Promise.all(e.map(g)),k=e=>{const t={...e};return delete t.name,delete t.id,delete t.timestamp,delete t.classification,delete t.category,delete t.attributes,t};export{k as f,F as t};
