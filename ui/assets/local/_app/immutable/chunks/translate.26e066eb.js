import{t as j,b as k}from"./index.e31b9884.js";import{i as n}from"./parse-with-big-int.441ec82f.js";function I(o,i,f,$){let m,b,s,t;o in k&&typeof i=="string"?(m=o,b=i):(m="common",b=o),n(i)?t=i:typeof i=="number"&&(s=i),typeof f=="number"?s=f:n(f)&&(t=f),n($)&&(t=$);const g={...s!==void 0&&{count:s},...t&&{replace:t}};return j(`${m}:${b}`,g)}export{I as t};
