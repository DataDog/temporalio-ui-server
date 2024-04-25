import{s as Ce,A as te,e as C,t as Q,a as z,b as T,d as R,f as W,g as B,h as J,j as L,B as c,C as se,Y as fe,k as O,l as j,Z as ce,m as P,D as de,_ as Te,n as w,E as De,F as he,o as Fe,c as Ne,G as Re,H as K,v as Ae}from"./scheduler.yC7E9Oae.js";import{S as He,i as Pe,t as N,g as ie,b as A,e as ue,c as x,a as $,m as ee,d as le}from"./index.OseOCDgU.js";import{g as Se}from"./spread.rEx3vLA9.js";import{I as ne}from"./icon.vcKmHtE4.js";import{c as Ve}from"./copy-to-clipboard.hiiQgcje.js";import{I as Ue}from"./icon-button.FeciUjQL.js";import{t as me}from"./tw-merge.NbP7EmZe.js";function be(a){let e,l,t;return l=new ne({props:{name:a[5]}}),{c(){e=C("span"),x(l.$$.fragment),this.h()},l(i){e=T(i,"SPAN",{class:!0});var o=R(e);$(l.$$.fragment,o),o.forEach(B),this.h()},h(){L(e,"class","icon-container svelte-xskdij")},m(i,o){O(i,e,o),ee(l,e,null),t=!0},p(i,o){const h={};o[0]&32&&(h.name=i[5]),l.$set(h)},i(i){t||(N(l.$$.fragment,i),t=!0)},o(i){A(l.$$.fragment,i),t=!1},d(i){i&&B(e),le(l)}}}function Ge(a){let e,l,t;return l=new Ue({props:{label:a[23],icon:"close"}}),l.$on("click",a[27]),{c(){e=C("div"),x(l.$$.fragment),this.h()},l(i){e=T(i,"DIV",{class:!0,"data-testid":!0});var o=R(e);$(l.$$.fragment,o),o.forEach(B),this.h()},h(){L(e,"class","clear-icon-container svelte-xskdij"),L(e,"data-testid","clear-input")},m(i,o){O(i,e,o),ee(l,e,null),t=!0},p(i,o){const h={};o[0]&8388608&&(h.label=i[23]),l.$set(h)},i(i){t||(N(l.$$.fragment,i),t=!0)},o(i){A(l.$$.fragment,i),t=!1},d(i){i&&B(e),le(l)}}}function Me(a){let e,l,t;return l=new ne({props:{name:"lock"}}),{c(){e=C("div"),x(l.$$.fragment),this.h()},l(i){e=T(i,"DIV",{class:!0});var o=R(e);$(l.$$.fragment,o),o.forEach(B),this.h()},h(){L(e,"class","disabled-icon-container svelte-xskdij")},m(i,o){O(i,e,o),ee(l,e,null),t=!0},p:Ae,i(i){t||(N(l.$$.fragment,i),t=!0)},o(i){A(l.$$.fragment,i),t=!1},d(i){i&&B(e),le(l)}}}function Oe(a){let e,l,t,i,o,h,r;const m=[Ze,Ye],E=[];function _(f,I){return f[25]?0:1}return t=_(a),i=E[t]=m[t](a),{c(){e=C("div"),l=C("button"),i.c(),this.h()},l(f){e=T(f,"DIV",{class:!0});var I=R(e);l=T(I,"BUTTON",{"aria-label":!0});var q=R(l);i.l(q),q.forEach(B),I.forEach(B),this.h()},h(){L(l,"aria-label",a[22]),L(e,"class","copy-icon-container svelte-xskdij")},m(f,I){O(f,e,I),j(e,l),E[t].m(l,null),o=!0,h||(r=P(l,"click",a[39]),h=!0)},p(f,I){let q=t;t=_(f),t!==q&&(ie(),A(E[q],1,1,()=>{E[q]=null}),ue(),i=E[t],i||(i=E[t]=m[t](f),i.c()),N(i,1),i.m(l,null)),(!o||I[0]&4194304)&&L(l,"aria-label",f[22])},i(f){o||(N(i),o=!0)},o(f){A(i),o=!1},d(f){f&&B(e),E[t].d(),h=!1,r()}}}function Ye(a){let e,l;return e=new ne({props:{name:"copy"}}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Ze(a){let e,l;return e=new ne({props:{name:"checkmark"}}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function _e(a){let e,l,t=a[1].length+"",i,o,h;return{c(){e=C("span"),l=C("span"),i=Q(t),o=Q("/"),h=Q(a[14]),this.h()},l(r){e=T(r,"SPAN",{class:!0});var m=R(e);l=T(m,"SPAN",{class:!0});var E=R(l);i=W(E,t),E.forEach(B),o=W(m,"/"),h=W(m,a[14]),m.forEach(B),this.h()},h(){L(l,"class","svelte-xskdij"),c(l,"ok",a[14]-a[1].length>5),c(l,"warn",a[14]-a[1].length<=5),c(l,"error",a[14]===a[1].length),L(e,"class","count svelte-xskdij")},m(r,m){O(r,e,m),j(e,l),j(l,i),j(e,o),j(e,h)},p(r,m){m[0]&2&&t!==(t=r[1].length+"")&&w(i,t),m[0]&16386&&c(l,"ok",r[14]-r[1].length>5),m[0]&16386&&c(l,"warn",r[14]-r[1].length<=5),m[0]&16386&&c(l,"error",r[14]===r[1].length),m[0]&16384&&w(h,r[14])},d(r){r&&B(e)}}}function ge(a){let e,l;return{c(){e=C("div"),l=Q(a[7]),this.h()},l(t){e=T(t,"DIV",{class:!0});var i=R(e);l=W(i,a[7]),i.forEach(B),this.h()},h(){L(e,"class","suffix svelte-xskdij")},m(t,i){O(t,e,i),j(e,l)},p(t,i){i[0]&128&&w(l,t[7])},d(t){t&&B(e)}}}function ze(a){let e,l,t,i,o,h,r,m,E,_,f,I,q,S,g,V,U,G,d,Y,X,b=a[5]&&be(a),Z=[{class:"input"},{disabled:a[0]},{"data-lpignore":"true"},{maxlength:m=a[14]>0?a[14]:void 0},{placeholder:a[6]},{id:a[2]},{name:a[8]},{spellcheck:a[16]},{required:a[21]},{autocomplete:a[11]},a[30]],M={};for(let u=0;u<Z.length;u+=1)M=te(M,Z[u]);const y=[Oe,Me,Ge],D=[];function p(u,s){return u[9]?0:u[0]?1:u[10]&&u[1]?2:-1}~(_=p(a))&&(f=D[_]=y[_](a));let k=a[14]&&!a[0]&&!a[15]&&_e(a),v=a[7]&&ge(a);return{c(){e=C("div"),l=C("label"),t=Q(a[3]),i=z(),o=C("div"),b&&b.c(),h=z(),r=C("input"),E=z(),f&&f.c(),I=z(),k&&k.c(),q=z(),v&&v.c(),S=z(),g=C("span"),V=Q(a[13]),this.h()},l(u){e=T(u,"DIV",{class:!0});var s=R(e);l=T(s,"LABEL",{for:!0,class:!0});var H=R(l);t=W(H,a[3]),H.forEach(B),i=J(s),o=T(s,"DIV",{class:!0});var F=R(o);b&&b.l(F),h=J(F),r=T(F,"INPUT",{class:!0,"data-lpignore":!0,maxlength:!0,placeholder:!0,id:!0,name:!0,spellcheck:!0,autocomplete:!0}),E=J(F),f&&f.l(F),I=J(F),k&&k.l(F),q=J(F),v&&v.l(F),F.forEach(B),S=J(s),g=T(s,"SPAN",{class:!0,role:!0});var ae=R(g);V=W(ae,a[13]),ae.forEach(B),s.forEach(B),this.h()},h(){L(l,"for",a[2]),L(l,"class","svelte-xskdij"),c(l,"required",a[21]),c(l,"sr-only",a[4]),se(r,M),c(r,"disabled",a[0]),c(r,"svelte-xskdij",!0),L(o,"class","input-container svelte-xskdij"),c(o,"disabled",a[0]),c(o,"error",a[20]),c(o,"unroundRight",a[17]??a[7]),c(o,"unroundLeft",a[18]),c(o,"noBorder",a[19]),c(o,"invalid",!a[12]),L(g,"class","hint-text inline-block svelte-xskdij"),L(g,"role",U=a[20]?"alert":null),c(g,"invalid",!a[12]),c(g,"error",a[20]),c(g,"hidden",!a[13]),L(e,"class",G=fe(me("flex flex-col gap-1",a[24]))+" svelte-xskdij")},m(u,s){O(u,e,s),j(e,l),j(l,t),j(e,i),j(e,o),b&&b.m(o,null),j(o,h),j(o,r),r.autofocus&&r.focus(),ce(r,a[1]),j(o,E),~_&&D[_].m(o,null),j(o,I),k&&k.m(o,null),j(o,q),v&&v.m(o,null),j(e,S),j(e,g),j(g,V),d=!0,Y||(X=[P(r,"input",a[38]),P(r,"click",de(a[32])),P(r,"input",a[33]),P(r,"keydown",de(a[34])),P(r,"change",a[35]),P(r,"focus",a[36]),P(r,"blur",a[37]),Te(a[26].call(null,r))],Y=!0)},p(u,s){(!d||s[0]&8)&&w(t,u[3]),(!d||s[0]&4)&&L(l,"for",u[2]),(!d||s[0]&2097152)&&c(l,"required",u[21]),(!d||s[0]&16)&&c(l,"sr-only",u[4]),u[5]?b?(b.p(u,s),s[0]&32&&N(b,1)):(b=be(u),b.c(),N(b,1),b.m(o,h)):b&&(ie(),A(b,1,1,()=>{b=null}),ue()),se(r,M=Se(Z,[{class:"input"},(!d||s[0]&1)&&{disabled:u[0]},{"data-lpignore":"true"},(!d||s[0]&16384&&m!==(m=u[14]>0?u[14]:void 0))&&{maxlength:m},(!d||s[0]&64)&&{placeholder:u[6]},(!d||s[0]&4)&&{id:u[2]},(!d||s[0]&256)&&{name:u[8]},(!d||s[0]&65536)&&{spellcheck:u[16]},(!d||s[0]&2097152)&&{required:u[21]},(!d||s[0]&2048)&&{autocomplete:u[11]},s[0]&1073741824&&u[30]])),s[0]&2&&r.value!==u[1]&&ce(r,u[1]),c(r,"disabled",u[0]),c(r,"svelte-xskdij",!0);let H=_;_=p(u),_===H?~_&&D[_].p(u,s):(f&&(ie(),A(D[H],1,1,()=>{D[H]=null}),ue()),~_?(f=D[_],f?f.p(u,s):(f=D[_]=y[_](u),f.c()),N(f,1),f.m(o,I)):f=null),u[14]&&!u[0]&&!u[15]?k?k.p(u,s):(k=_e(u),k.c(),k.m(o,q)):k&&(k.d(1),k=null),u[7]?v?v.p(u,s):(v=ge(u),v.c(),v.m(o,null)):v&&(v.d(1),v=null),(!d||s[0]&1)&&c(o,"disabled",u[0]),(!d||s[0]&1048576)&&c(o,"error",u[20]),(!d||s[0]&131200)&&c(o,"unroundRight",u[17]??u[7]),(!d||s[0]&262144)&&c(o,"unroundLeft",u[18]),(!d||s[0]&524288)&&c(o,"noBorder",u[19]),(!d||s[0]&4096)&&c(o,"invalid",!u[12]),(!d||s[0]&8192)&&w(V,u[13]),(!d||s[0]&1048576&&U!==(U=u[20]?"alert":null))&&L(g,"role",U),(!d||s[0]&4096)&&c(g,"invalid",!u[12]),(!d||s[0]&1048576)&&c(g,"error",u[20]),(!d||s[0]&8192)&&c(g,"hidden",!u[13]),(!d||s[0]&16777216&&G!==(G=fe(me("flex flex-col gap-1",u[24]))+" svelte-xskdij"))&&L(e,"class",G)},i(u){d||(N(b),N(f),d=!0)},o(u){A(b),A(f),d=!1},d(u){u&&B(e),b&&b.d(),~_&&D[_].d(),k&&k.d(),v&&v.d(),Y=!1,De(X)}}}function Je(a,e,l){const t=["id","value","label","labelHidden","icon","placeholder","suffix","name","copyable","disabled","clearable","autocomplete","valid","hintText","maxLength","hideCount","spellcheck","unroundRight","unroundLeft","noBorder","autoFocus","error","required","copyButtonLabel","clearButtonLabel","class"];let i=he(e,t),o,{id:h}=e,{value:r}=e,{label:m}=e,{labelHidden:E=!1}=e,{icon:_=null}=e,{placeholder:f=""}=e,{suffix:I=""}=e,{name:q=h}=e,{copyable:S=!1}=e,{disabled:g=!1}=e,{clearable:V=!1}=e,{autocomplete:U="off"}=e,{valid:G=!0}=e,{hintText:d=""}=e,{maxLength:Y=0}=e,{hideCount:X=!1}=e,{spellcheck:b=null}=e,{unroundRight:Z=!1}=e,{unroundLeft:M=!1}=e,{noBorder:y=!1}=e,{autoFocus:D=!1}=e,{error:p=!1}=e,{required:k=!1}=e,{copyButtonLabel:v=""}=e,{clearButtonLabel:u=""}=e,{class:s=""}=e;function H(n){D&&n&&n.focus()}const F=Fe();function ae(){l(1,r=""),F("clear",{})}const{copy:oe,copied:re}=Ve();Ne(a,re,n=>l(25,o=n));function ke(n){K.call(this,a,n)}function ve(n){K.call(this,a,n)}function Le(n){K.call(this,a,n)}function Be(n){K.call(this,a,n)}function je(n){K.call(this,a,n)}function Ee(n){K.call(this,a,n)}function Ie(){r=this.value,l(1,r)}const qe=n=>oe(n,r);return a.$$set=n=>{e=te(te({},e),Re(n)),l(30,i=he(e,t)),"id"in n&&l(2,h=n.id),"value"in n&&l(1,r=n.value),"label"in n&&l(3,m=n.label),"labelHidden"in n&&l(4,E=n.labelHidden),"icon"in n&&l(5,_=n.icon),"placeholder"in n&&l(6,f=n.placeholder),"suffix"in n&&l(7,I=n.suffix),"name"in n&&l(8,q=n.name),"copyable"in n&&l(9,S=n.copyable),"disabled"in n&&l(0,g=n.disabled),"clearable"in n&&l(10,V=n.clearable),"autocomplete"in n&&l(11,U=n.autocomplete),"valid"in n&&l(12,G=n.valid),"hintText"in n&&l(13,d=n.hintText),"maxLength"in n&&l(14,Y=n.maxLength),"hideCount"in n&&l(15,X=n.hideCount),"spellcheck"in n&&l(16,b=n.spellcheck),"unroundRight"in n&&l(17,Z=n.unroundRight),"unroundLeft"in n&&l(18,M=n.unroundLeft),"noBorder"in n&&l(19,y=n.noBorder),"autoFocus"in n&&l(31,D=n.autoFocus),"error"in n&&l(20,p=n.error),"required"in n&&l(21,k=n.required),"copyButtonLabel"in n&&l(22,v=n.copyButtonLabel),"clearButtonLabel"in n&&l(23,u=n.clearButtonLabel),"class"in n&&l(24,s=n.class)},a.$$.update=()=>{a.$$.dirty[0]&513&&l(0,g=g||S)},[g,r,h,m,E,_,f,I,q,S,V,U,G,d,Y,X,b,Z,M,y,p,k,v,u,s,o,H,ae,oe,re,i,D,ke,ve,Le,Be,je,Ee,Ie,qe]}class xe extends He{constructor(e){super(),Pe(this,e,Je,ze,Ce,{id:2,value:1,label:3,labelHidden:4,icon:5,placeholder:6,suffix:7,name:8,copyable:9,disabled:0,clearable:10,autocomplete:11,valid:12,hintText:13,maxLength:14,hideCount:15,spellcheck:16,unroundRight:17,unroundLeft:18,noBorder:19,autoFocus:31,error:20,required:21,copyButtonLabel:22,clearButtonLabel:23,class:24},null,[-1,-1])}}export{xe as I};
