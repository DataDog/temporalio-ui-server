import{r as n,a as b}from"../chunks/route-for-api.rPK9t_O_.js";import{b as u}from"../chunks/screaming-enums.NBZzZ07O.js";import{a as m}from"../chunks/search-attributes.Tii28BZZ.js";import{L as d}from"../chunks/layout.jb4PUw39.js";const p=async(e,s=fetch)=>{try{const t=n("search-attributes",{namespace:e}),r=await b(t,{request:s}),o={...r.customAttributes},a={...r.systemAttributes};return Object.entries(o).forEach(([c,i])=>{o[c]=u(i)}),Object.entries(a).forEach(([c,i])=>{a[c]=u(i)}),{customAttributes:o,systemAttributes:a}}catch(t){return console.error("Error fetching search attributes for namespace",e,t),{customAttributes:{},systemAttributes:{}}}},f=async({params:e,parent:s,fetch:t})=>{await s();const r=await p(e.namespace,t);m.set(r)},y=Object.freeze(Object.defineProperty({__proto__:null,load:f},Symbol.toStringTag,{value:"Module"}));export{d as component,y as universal};
