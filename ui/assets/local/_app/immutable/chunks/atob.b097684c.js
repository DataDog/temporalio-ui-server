import{B as t}from"./encode-uri.e26747e0.js";function e(o){return decodeURIComponent(window.atob(o).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""))}const i=(o,n=t)=>n?e(o):o;export{i as a};
