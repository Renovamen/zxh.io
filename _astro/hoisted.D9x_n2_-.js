import"./hoisted.ChQ-AT7g.js";import{m as c}from"./medium-zoom.esm.CHfgT04g.js";const r=c();r.attach(":not(a) > img:not(.no-zoom)");const l=()=>{location.hash&&document.querySelector(decodeURIComponent(location.hash))?.scrollIntoView({behavior:"smooth"})},s=i=>{const t=i,o=t.target.closest("a");if(!t.defaultPrevented&&o&&t.button===0&&o.target!=="_blank"&&o.rel!=="external"&&!o.download&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.altKey){const a=new URL(o.href);if(a.origin!==window.location.origin)return;t.preventDefault();const{pathname:e,hash:n}=a;n&&(!e||e===location.pathname)?(window.history.replaceState({},"",n),l()):window.location.href=e+n}},h=document.querySelector(".post .content");h?.addEventListener("click",s,{passive:!1});