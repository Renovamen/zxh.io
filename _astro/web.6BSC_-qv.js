const u={context:void 0,registry:void 0};function N(e){u.context=e}function de(){return{...u.context,id:`${u.context.id}${u.context.count++}-`,count:0}}const he=(e,t)=>e===t,Me=Symbol("solid-proxy"),pe=Symbol("solid-track"),I={equals:he};let ee=oe;const T=1,M=2,te={owned:null,cleanups:null,context:null,owner:null};var d=null;let R=null,ge=null,h=null,y=null,m=null,Y=0;function F(e,t){const n=h,s=d,i=e.length===0,l=t===void 0?s:t,f=i?te:{owned:null,cleanups:null,context:l?l.context:null,owner:l},r=i?e:()=>e(()=>C(()=>q(f)));d=f,h=null;try{return k(r,!0)}finally{h=n,d=s}}function V(e,t){t=t?Object.assign({},I,t):I;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),le(n,i));return[re.bind(n),s]}function O(e,t,n){const s=G(e,t,!1,T);B(s)}function ye(e,t,n){ee=ve;const s=G(e,t,!1,T),i=j&&ie(j);i&&(s.suspense=i),(!n||!n.render)&&(s.user=!0),m?m.push(s):B(s)}function P(e,t,n){n=n?Object.assign({},I,n):I;const s=G(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,B(s),re.bind(s)}function Oe(e){return k(e,!1)}function C(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function je(e,t,n){const s=Array.isArray(e);let i,l=n&&n.defer;return f=>{let r;if(s){r=Array(e.length);for(let c=0;c<e.length;c++)r[c]=e[c]()}else r=e();if(l){l=!1;return}const a=C(()=>t(r,i,f));return i=r,a}}function _e(e){ye(()=>C(e))}function ne(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Ue(){return h}function xe(){return d}function De(e,t){const n=d,s=h;d=e,h=null;try{return k(t,!0)}catch(i){X(i)}finally{d=n,h=s}}function be(e){m.push.apply(m,e),e.length=0}function se(e,t){const n=Symbol("context");return{id:n,Provider:Ee(n),defaultValue:e}}function ie(e){return d&&d.context&&d.context[e.id]!==void 0?d.context[e.id]:e.defaultValue}function we(e){const t=P(e),n=P(()=>K(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let j;function Ae(){return j||(j=se())}function re(){if(this.sources&&this.state)if(this.state===T)B(this);else{const e=y;y=null,k(()=>U(this),!1),y=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function le(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],f=R&&R.running;f&&R.disposed.has(l),(f?!l.tState:!l.state)&&(l.pure?y.push(l):m.push(l),l.observers&&fe(l)),f||(l.state=T)}if(y.length>1e6)throw y=[],new Error},!1)),t}function B(e){if(!e.fn)return;q(e);const t=Y;Se(e,e.value,t)}function Se(e,t,n){let s;const i=d,l=h;h=d=e;try{s=e.fn(t)}catch(f){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(q),e.owned=null),e.updatedAt=n+1,X(f)}finally{h=l,d=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?le(e,s):e.value=s,e.updatedAt=n)}function G(e,t,n,s=T,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==te&&(d.owned?d.owned.push(l):d.owned=[l]),l}function _(e){if(e.state===0)return;if(e.state===M)return U(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===T)B(e);else if(e.state===M){const s=y;y=null,k(()=>U(e,t[0]),!1),y=s}}function k(e,t){if(y)return e();let n=!1;t||(y=[]),m?n=!0:m=[],Y++;try{const s=e();return me(n),s}catch(s){n||(m=null),y=null,X(s)}}function me(e){if(y&&(oe(y),y=null),e)return;const t=m;m=null,t.length&&k(()=>ee(t),!1)}function oe(e){for(let t=0;t<e.length;t++)_(e[t])}function ve(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_(s)}if(u.context){if(u.count){u.effects||(u.effects=[]),u.effects.push(...e.slice(0,n));return}else u.effects&&(e=[...u.effects,...e],n+=u.effects.length,delete u.effects);N()}for(t=0;t<n;t++)_(e[t])}function U(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===T?s!==t&&(!s.updatedAt||s.updatedAt<Y)&&_(s):i===M&&U(s,t)}}}function fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=M,n.pure?y.push(n):m.push(n),n.observers&&fe(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),f=n.observerSlots.pop();s<i.length&&(l.sourceSlots[f]=s,i[s]=l,n.observerSlots[s]=f)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ce(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function X(e,t=d){throw Ce(e)}function K(e){if(typeof e=="function"&&!e.length)return K(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=K(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ee(e,t){return function(s){let i;return O(()=>i=C(()=>(d.context={...d.context,[e]:s.value},we(()=>s.children))),void 0),i}}const $e=Symbol("fallback");function Q(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let s=[],i=[],l=[],f=0,r=t.length>1?[]:null;return ne(()=>Q(l)),()=>{let a=e()||[],c,o;return a[pe],C(()=>{let p=a.length,g,b,A,$,v,x,S,E,H;if(p===0)f!==0&&(Q(l),l=[],s=[],i=[],f=0,r&&(r=[])),n.fallback&&(s=[$e],i[0]=F(ae=>(l[0]=ae,n.fallback())),f=1);else if(f===0){for(i=new Array(p),o=0;o<p;o++)s[o]=a[o],i[o]=F(w);f=p}else{for(A=new Array(p),$=new Array(p),r&&(v=new Array(p)),x=0,S=Math.min(f,p);x<S&&s[x]===a[x];x++);for(S=f-1,E=p-1;S>=x&&E>=x&&s[S]===a[E];S--,E--)A[E]=i[S],$[E]=l[S],r&&(v[E]=r[S]);for(g=new Map,b=new Array(E+1),o=E;o>=x;o--)H=a[o],c=g.get(H),b[o]=c===void 0?-1:c,g.set(H,o);for(c=x;c<=S;c++)H=s[c],o=g.get(H),o!==void 0&&o!==-1?(A[o]=i[c],$[o]=l[c],r&&(v[o]=r[c]),o=b[o],g.set(H,o)):l[c]();for(o=x;o<p;o++)o in A?(i[o]=A[o],l[o]=$[o],r&&(r[o]=v[o],r[o](o))):i[o]=F(w);i=i.slice(0,f=p),s=a.slice(0)}return i});function w(p){if(l[o]=p,r){const[g,b]=V(o);return r[o]=b,t(a[o],g)}return t(a[o])}}}let ue=!1;function Ne(){ue=!0}function ke(e,t){if(ue&&u.context){const n=u.context;N(de());const s=C(()=>e(t||{}));return N(n),s}return C(()=>e(t||{}))}function Ye(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(Te(()=>e.each,e.children,t||void 0))}const He=se();function qe(e){let t=0,n,s,i,l,f;const[r,a]=V(!1),c=Ae(),o={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:r,effects:[],resolved:!1},w=xe();if(u.context&&u.load){const b=u.context.id+u.context.count;let A=u.load(b);if(A&&(typeof A!="object"||A.status!=="success"?i=A:u.gather(b)),i&&i!=="$$f"){const[$,v]=V(void 0,{equals:!1});l=$,i.then(()=>{if(u.done)return v();u.gather(b),N(s),v(),N()},x=>{f=x,v()})}}const p=ie(He);p&&(n=p.register(o.inFallback));let g;return ne(()=>g&&g()),ke(c.Provider,{value:o,get children(){return P(()=>{if(f)throw f;if(s=u.context,l)return l(),l=void 0;s&&i==="$$f"&&N();const b=P(()=>e.children);return P(A=>{const $=o.inFallback(),{showContent:v=!0,showFallback:x=!0}=n?n():{};if((!$||i&&i!=="$$f")&&v)return o.resolved=!0,g&&g(),g=s=i=void 0,be(o.effects),b();if(x)return g?A:F(S=>(g=S,s&&(N({id:s.id+"f",count:0}),s=void 0),e.fallback),w)})})}})}function Le(e,t,n){let s=n.length,i=t.length,l=s,f=0,r=0,a=t[i-1].nextSibling,c=null;for(;f<i||r<l;){if(t[f]===n[r]){f++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===f){const o=l<s?r?n[r-1].nextSibling:n[l-r]:a;for(;r<l;)e.insertBefore(n[r++],o)}else if(l===r)for(;f<i;)(!c||!c.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[l-1]&&n[r]===t[i-1]){const o=t[--i].nextSibling;e.insertBefore(n[r++],t[f++].nextSibling),e.insertBefore(n[--l],o),t[i]=n[l]}else{if(!c){c=new Map;let w=r;for(;w<l;)c.set(n[w],w++)}const o=c.get(t[f]);if(o!=null)if(r<o&&o<l){let w=f,p=1,g;for(;++w<i&&w<l&&!((g=c.get(t[w]))==null||g!==o+p);)p++;if(p>o-r){const b=t[f];for(;r<o;)e.insertBefore(n[r++],b)}else e.replaceChild(n[r++],t[f++])}else f++;else t[f++].remove()}}}const J="_$DX_DELEGATE";function Pe(e,t,n,s={}){let i;return F(l=>{i=l,t===document?e():Fe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Re(e,t,n){let s;const i=()=>{const f=document.createElement("template");return f.innerHTML=e,n?f.content.firstChild.firstChild:f.content.firstChild},l=t?()=>C(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function Ve(e,t=window.document){const n=t[J]||(t[J]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,ce))}}function Ke(e,t,n){!u.context&&(e[t]=n)}function We(e,t,n){u.context||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Ge(e,t){u.context||(t==null?e.removeAttribute("class"):e.className=t)}function Xe(e,t,n){return C(()=>e(t,n))}function Fe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return D(e,t,s,n);O(i=>D(e,t(),i,n),s)}function Be(e,t,n={}){u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=i=>globalThis._$HY.r[i],u.has=i=>i in globalThis._$HY.r,u.gather=i=>z(t,i),u.registry=new Map,u.context={id:n.renderId||"",count:0},z(t,n.renderId);const s=Pe(e,t,[...t.childNodes],n);return u.context=null,s}function Qe(e){let t,n;return!u.context||!(t=u.registry.get(n=Ie()))?e():(u.completed&&u.completed.add(t),u.registry.delete(n),t)}function Je(e){let t=e,n=0,s=[];if(u.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Ze(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;ce(s),t.shift()}}),u.events.queued=!0)}function ce(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,s,i){if(u.context){!n&&(n=[...e.childNodes]);let r=[];for(let a=0;a<n.length;a++){const c=n[a];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():r.push(c)}n=r}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,f=s!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(u.context)return n;if(l==="number"&&(t=t.toString()),f){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=L(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(u.context)return n;n=L(e,n,s)}else{if(l==="function")return O(()=>{let r=t();for(;typeof r=="function";)r=r();n=D(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],a=n&&Array.isArray(n);if(W(r,t,n,i))return O(()=>n=D(e,r,n,s,!0)),()=>n;if(u.context){if(!r.length)return n;if(s===void 0)return[...e.childNodes];let c=r[0],o=[c];for(;(c=c.nextSibling)!==s;)o.push(c);return n=o}if(r.length===0){if(n=L(e,n,s),f)return n}else a?n.length===0?Z(e,r,s):Le(e,n,r):(n&&L(e),Z(e,r));n=r}else if(t.nodeType){if(u.context&&t.parentNode)return n=f?[t]:t;if(Array.isArray(n)){if(f)return n=L(e,n,s,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function W(e,t,n,s){let i=!1;for(let l=0,f=t.length;l<f;l++){let r=t[l],a=n&&n[e.length],c;if(!(r==null||r===!0||r===!1))if((c=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=W(e,r,a)||i;else if(c==="function")if(s){for(;typeof r=="function";)r=r();i=W(e,Array.isArray(r)?r:[r],Array.isArray(a)?a:[a])||i}else e.push(r),i=!0;else{const o=String(r);a&&a.nodeType===3&&a.data===o?e.push(a):e.push(document.createTextNode(o))}}return i}function Z(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function L(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let f=t.length-1;f>=0;f--){const r=t[f];if(i!==r){const a=r.parentNode===e;!l&&!f?a?e.replaceChild(i,r):e.insertBefore(i,n):a&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function z(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],l=i.getAttribute("data-hk");(!t||l.startsWith(t))&&!u.registry.has(l)&&u.registry.set(l,i)}}function Ie(){const e=u.context;return`${e.id}${e.count++}`}const ze=(...e)=>(Ne(),Be(...e));export{Me as $,Ye as F,qe as S,Je as a,P as b,V as c,Ve as d,O as e,Pe as f,Qe as g,ze as h,Fe as i,ke as j,ye as k,Ge as l,Ke as m,pe as n,_e as o,Ue as p,Oe as q,Ze as r,We as s,Re as t,Xe as u,xe as v,ne as w,je as x,De as y};