import{z as r}from"./scheduler.LRpOgQOC.js";import{e as s}from"./decode-payload.GTYGO7Ut.js";import{d as i}from"./data-encoder.7fzlId9d.js";import{B as d}from"./global.zYyA-D5k.js";import{p as c,s as p}from"./parse-with-big-int.e3oI4SEy.js";const l=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(n,t)=>String.fromCharCode(parseInt(t,16)))),e=(o,n=d)=>n?l(o):o,P=o=>{if(o){const n=c(o),t=n==null?void 0:n[0];if(t)return p(t)}return""},f=o=>({metadata:{encoding:e("json/plain")},data:e(JSON.stringify(o))}),S=async o=>{let n=null;if(o){const t=JSON.parse(o);if(n=[f(t)],r(i).endpoint){const a=await s({payloads:{payloads:n}});n=(a==null?void 0:a.payloads)??null}}return n};export{S as e,P as g};
