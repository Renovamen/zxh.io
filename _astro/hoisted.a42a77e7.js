import"./Layout.astro_astro_type_script_index_1_lang.4e9846a5.js";import{d as i}from"./index.7c1a8f4d.js";import"./runtime-core.esm-bundler.090b03fb.js";const r=()=>{location.hash&&document.querySelector(decodeURIComponent(location.hash))?.scrollIntoView({behavior:"smooth"})},l=o=>{const t=o.target.closest("a");if(!o.defaultPrevented&&t&&o.button===0&&t.target!=="_blank"&&t.rel!=="external"&&!t.download&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey){const a=new URL(t.href);if(a.origin!==window.location.origin)return;o.preventDefault();const{pathname:e,hash:n}=a;n&&(!e||e===location.pathname)?(window.history.replaceState({},"",n),r()):window.location.href=e+n}},c=document.querySelector(".post");i(c,"click",l,{passive:!1});
