import{w as a}from"./singletons.48f03b6d.js";import{p as e}from"./persist-store.31efb6ee.js";import{h as n}from"./has.76169e44.js";const d=e("endpoint",null,!0),u=e("passAccessToken",!1,!0),l=e("includeCredentials",!1,!0),f=e("overrideRemoteCodecConfiguration",!1,!0),o=a("notRequested"),t=a("");function p(s){o.set("error"),s&&n(s,"message")&&typeof s.message=="string"?t.set(s.message):t.set("")}function m(){o.set("success")}export{t as a,m as b,d as c,l as i,o as l,f as o,u as p,p as s};
