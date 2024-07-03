import{s as tt,e as l,t as G,a as k,b as m,d,f as J,g as i,h as C,i as ot,j as r,k as et,l as a,v as st}from"../chunks/scheduler.LRpOgQOC.js";import{S as nt,i as at,c as H,a as T,m as D,t as S,b as V,d as j}from"../chunks/index.dE1eZLcR.js";import{E as rt}from"../chunks/event-history-file-import.3HmH80XL.js";import{C as Y}from"../chunks/code-block.EVnat1Tx.js";import{L as it}from"../chunks/link.xaKiG7lk.js";import{t as $}from"../chunks/translate.HrioCK44.js";import{s as Z}from"../chunks/parse-with-big-int.e3oI4SEy.js";function ct(v){let t=$("events.api-history-link")+"",s;return{c(){s=G(t)},l(e){s=J(e,t)},m(e,x){et(e,s,x)},p:st,d(e){e&&i(s)}}}function lt(v){let t,s,e,x=$("events.import-event-history")+"",O,q,E,h,A,o,g,K="type HistoryEvent = temporal.api.history.v1.IHistoryEvent",B,I,f,P,w,M=$("events.history-expected-formats")+"",W,z,p,_,F,y,L;return h=new rt({}),f=new it({props:{newTab:!0,href:"https://github.com/temporalio/api/blob/1cd0ac0bbd8e71c7bfc9fe1900c678b432e66e5b/temporal/api/history/v1/message.proto",class:"mb-8",$$slots:{default:[ct]},$$scope:{ctx:v}}}),_=new Y({props:{content:Z(v[0]),inline:!0,copyIconTitle:$("common.copy-icon-title"),copySuccessIconTitle:$("common.copy-success-icon-title")}}),y=new Y({props:{content:Z(mt),inline:!0,copyIconTitle:$("common.copy-icon-title"),copySuccessIconTitle:$("common.copy-success-icon-title")}}),{c(){t=l("section"),s=l("nav"),e=l("h1"),O=G(x),q=k(),E=l("div"),H(h.$$.fragment),A=k(),o=l("div"),g=l("code"),g.textContent=K,B=k(),I=l("div"),H(f.$$.fragment),P=k(),w=l("h2"),W=G(M),z=k(),p=l("div"),H(_.$$.fragment),F=k(),H(y.$$.fragment),this.h()},l(n){t=m(n,"SECTION",{class:!0});var c=d(t);s=m(c,"NAV",{id:!0,class:!0,"aria-label":!0});var b=d(s);e=m(b,"H1",{class:!0,"data-testid":!0});var Q=d(e);O=J(Q,x),Q.forEach(i),q=C(b),E=m(b,"DIV",{class:!0});var R=d(E);T(h.$$.fragment,R),R.forEach(i),b.forEach(i),A=C(c),o=m(c,"DIV",{class:!0});var u=d(o);g=m(u,"CODE",{class:!0,"data-svelte-h":!0}),ot(g)!=="svelte-wdumax"&&(g.textContent=K),B=C(u),I=m(u,"DIV",{class:!0});var U=d(I);T(f.$$.fragment,U),U.forEach(i),P=C(u),w=m(u,"H2",{class:!0});var X=d(w);W=J(X,M),X.forEach(i),z=C(u),p=m(u,"DIV",{class:!0});var N=d(p);T(_.$$.fragment,N),F=C(N),T(y.$$.fragment,N),N.forEach(i),u.forEach(i),c.forEach(i),this.h()},h(){r(e,"class","text-lg font-medium"),r(e,"data-testid","import-event-history"),r(E,"class","flex gap-4"),r(s,"id","event-history"),r(s,"class","block items-center justify-between gap-4 pb-4 lg:flex"),r(s,"aria-label",$("events.import-event-history")),r(g,"class","text-md bg-slate-200 p-2 font-medium"),r(I,"class","mt-4"),r(w,"class","mt-8 text-lg font-medium"),r(p,"class","h-40 text-center"),r(o,"class","w-full md:w-1/2"),r(t,"class","flex flex-col gap-4")},m(n,c){et(n,t,c),a(t,s),a(s,e),a(e,O),a(s,q),a(s,E),D(h,E,null),a(t,A),a(t,o),a(o,g),a(o,B),a(o,I),D(f,I,null),a(o,P),a(o,w),a(w,W),a(o,z),a(o,p),D(_,p,null),a(p,F),D(y,p,null),L=!0},p(n,[c]){const b={};c&2&&(b.$$scope={dirty:c,ctx:n}),f.$set(b)},i(n){L||(S(h.$$.fragment,n),S(f.$$.fragment,n),S(_.$$.fragment,n),S(y.$$.fragment,n),L=!0)},o(n){V(h.$$.fragment,n),V(f.$$.fragment,n),V(_.$$.fragment,n),V(y.$$.fragment,n),L=!1},d(n){n&&i(t),j(h),j(f),j(_),j(y)}}}const mt="HistoryEvent[]";function ft(v){return[{events:"HistoryEvent[]"}]}class pt extends nt{constructor(t){super(),at(this,t,ft,lt,tt,{})}}function ut(v){let t,s;return t=new pt({}),{c(){H(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,x){D(t,e,x),s=!0},p:st,i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){V(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}class bt extends nt{constructor(t){super(),at(this,t,null,ut,tt,{})}}export{bt as component};
