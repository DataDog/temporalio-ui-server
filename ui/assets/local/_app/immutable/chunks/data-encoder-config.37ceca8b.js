import{w as a}from"./index.1302fd9b.js";import{p as t}from"./persist-store.d8264c86.js";import{h as o}from"./has.f5323580.js";const c=s=>(s==null?void 0:s.substring(0,8))==="https://",n=s=>(s==null?void 0:s.substring(0,7))==="http://",f=s=>n(s)||c(s),d=t("endpoint",null,!0),m=t("passAccessToken",!1,!0),p=t("includeCredentials",!1,!0),g=t("overrideRemoteCodecConfiguration",!1,!0),r=a("notRequested"),e=a("");function v(s){r.set("error"),s&&o(s,"message")&&typeof s.message=="string"?e.set(s.message):e.set("")}function C(){r.set("success")}export{f as a,C as b,d as c,e as d,p as i,r as l,g as o,m as p,v as s,c as v};
