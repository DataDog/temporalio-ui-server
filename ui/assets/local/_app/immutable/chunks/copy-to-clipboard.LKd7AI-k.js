import{w as c}from"./entry.XbCZtbrv.js";const i=(r=2e3)=>{const o=c(!1);return{copy:async(t,e)=>{t.preventDefault(),t.stopPropagation();try{await navigator.clipboard.writeText(e),o.set(!0),setTimeout(()=>{o.set(!1)},r)}catch(a){console.error(a)}},copied:o}};export{i as c};
