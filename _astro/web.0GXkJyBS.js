const c={context:void 0,registry:void 0};function N(e){c.context=e}function de(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}const he=(e,t)=>e===t,Me=Symbol("solid-proxy"),pe=Symbol("solid-track"),I={equals:he};let ee=oe;const T=1,M=2,te={owned:null,cleanups:null,context:null,owner:null};var d=null;let R=null,ge=null,h=null,y=null,C=null,Y=0;function F(e,t){const n=h,s=d,i=e.length===0,r=t===void 0?s:t,f=i?te:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>E(()=>q(f)));d=f,h=null;try{return k(o,!0)}finally{h=n,d=s}}function V(e,t){t=t?Object.assign({},I,t):I;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),le(n,i));return[re.bind(n),s]}function O(e,t,n){const s=W(e,t,!1,T);B(s)}function ye(e,t,n){ee=me;const s=W(e,t,!1,T),i=j&&ie(j);i&&(s.suspense=i),s.user=!0,C?C.push(s):B(s)}function P(e,t,n){n=n?Object.assign({},I,n):I;const s=W(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,B(s),re.bind(s)}function Oe(e){return k(e,!1)}function E(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function je(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return f=>{let o;if(s){o=Array(e.length);for(let a=0;a<e.length;a++)o[a]=e[a]()}else o=e();if(r)return r=!1,f;const u=E(()=>t(o,i,f));return i=o,u}}function _e(e){ye(()=>E(e))}function ne(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Ue(){return h}function be(){return d}function De(e,t){const n=d,s=h;d=e,h=null;try{return k(t,!0)}catch(i){X(i)}finally{d=n,h=s}}function we(e){C.push.apply(C,e),e.length=0}function se(e,t){const n=Symbol("context");return{id:n,Provider:Ee(n),defaultValue:e}}function ie(e){return d&&d.context&&d.context[e.id]!==void 0?d.context[e.id]:e.defaultValue}function xe(e){const t=P(e),n=P(()=>G(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let j;function Ae(){return j||(j=se())}function re(){if(this.sources&&this.state)if(this.state===T)B(this);else{const e=y;y=null,k(()=>U(this),!1),y=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function le(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],f=R&&R.running;f&&R.disposed.has(r),(f?!r.tState:!r.state)&&(r.pure?y.push(r):C.push(r),r.observers&&fe(r)),f||(r.state=T)}if(y.length>1e6)throw y=[],new Error},!1)),t}function B(e){if(!e.fn)return;q(e);const t=Y;Se(e,e.value,t)}function Se(e,t,n){let s;const i=d,r=h;h=d=e;try{s=e.fn(t)}catch(f){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(q),e.owned=null),e.updatedAt=n+1,X(f)}finally{h=r,d=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?le(e,s):e.value=s,e.updatedAt=n)}function W(e,t,n,s=T,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==te&&(d.owned?d.owned.push(r):d.owned=[r]),r}function _(e){if(e.state===0)return;if(e.state===M)return U(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===T)B(e);else if(e.state===M){const s=y;y=null,k(()=>U(e,t[0]),!1),y=s}}function k(e,t){if(y)return e();let n=!1;t||(y=[]),C?n=!0:C=[],Y++;try{const s=e();return Ce(n),s}catch(s){n||(C=null),y=null,X(s)}}function Ce(e){if(y&&(oe(y),y=null),e)return;const t=C;C=null,t.length&&k(()=>ee(t),!1)}function oe(e){for(let t=0;t<e.length;t++)_(e[t])}function me(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_(s)}if(c.context){if(c.count){c.effects||(c.effects=[]),c.effects.push(...e.slice(0,n));return}else c.effects&&(e=[...c.effects,...e],n+=c.effects.length,delete c.effects);N()}for(t=0;t<n;t++)_(e[t])}function U(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===T?s!==t&&(!s.updatedAt||s.updatedAt<Y)&&_(s):i===M&&U(s,t)}}}function fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=M,n.pure?y.push(n):C.push(n),n.observers&&fe(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),f=n.observerSlots.pop();s<i.length&&(r.sourceSlots[f]=s,i[s]=r,n.observerSlots[s]=f)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function X(e,t=d){throw ve(e)}function G(e){if(typeof e=="function"&&!e.length)return G(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=G(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ee(e,t){return function(s){let i;return O(()=>i=E(()=>(d.context={...d.context,[e]:s.value},xe(()=>s.children))),void 0),i}}const $e=Symbol("fallback");function Q(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let s=[],i=[],r=[],f=0,o=t.length>1?[]:null;return ne(()=>Q(r)),()=>{let u=e()||[],a,l;return u[pe],E(()=>{let p=u.length,g,x,A,$,m,w,S,v,H;if(p===0)f!==0&&(Q(r),r=[],s=[],i=[],f=0,o&&(o=[])),n.fallback&&(s=[$e],i[0]=F(ae=>(r[0]=ae,n.fallback())),f=1);else if(f===0){for(i=new Array(p),l=0;l<p;l++)s[l]=u[l],i[l]=F(b);f=p}else{for(A=new Array(p),$=new Array(p),o&&(m=new Array(p)),w=0,S=Math.min(f,p);w<S&&s[w]===u[w];w++);for(S=f-1,v=p-1;S>=w&&v>=w&&s[S]===u[v];S--,v--)A[v]=i[S],$[v]=r[S],o&&(m[v]=o[S]);for(g=new Map,x=new Array(v+1),l=v;l>=w;l--)H=u[l],a=g.get(H),x[l]=a===void 0?-1:a,g.set(H,l);for(a=w;a<=S;a++)H=s[a],l=g.get(H),l!==void 0&&l!==-1?(A[l]=i[a],$[l]=r[a],o&&(m[l]=o[a]),l=x[l],g.set(H,l)):r[a]();for(l=w;l<p;l++)l in A?(i[l]=A[l],r[l]=$[l],o&&(o[l]=m[l],o[l](l))):i[l]=F(b);i=i.slice(0,f=p),s=u.slice(0)}return i});function b(p){if(r[l]=p,o){const[g,x]=V(l);return o[l]=x,t(u[l],g)}return t(u[l])}}}let ue=!1;function Ne(){ue=!0}function ke(e,t){if(ue&&c.context){const n=c.context;N(de());const s=E(()=>e(t||{}));return N(n),s}return E(()=>e(t||{}))}function Ye(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(Te(()=>e.each,e.children,t||void 0))}const He=se();function qe(e){let t=0,n,s,i,r,f;const[o,u]=V(!1),a=Ae(),l={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:o,effects:[],resolved:!1},b=be();if(c.context&&c.load){const x=c.context.id+c.context.count;let A=c.load(x);if(A&&(typeof A!="object"||A.status!=="success"?i=A:c.gather(x)),i&&i!=="$$f"){const[$,m]=V(void 0,{equals:!1});r=$,i.then(()=>{if(c.done)return m();c.gather(x),N(s),m(),N()},w=>{f=w,m()})}}const p=ie(He);p&&(n=p.register(l.inFallback));let g;return ne(()=>g&&g()),ke(a.Provider,{value:l,get children(){return P(()=>{if(f)throw f;if(s=c.context,r)return r(),r=void 0;s&&i==="$$f"&&N();const x=P(()=>e.children);return P(A=>{const $=l.inFallback(),{showContent:m=!0,showFallback:w=!0}=n?n():{};if((!$||i&&i!=="$$f")&&m)return l.resolved=!0,g&&g(),g=s=i=void 0,we(l.effects),x();if(w)return g?A:F(S=>(g=S,s&&(N({id:s.id+"f",count:0}),s=void 0),e.fallback),b)})})}})}function Le(e,t,n){let s=n.length,i=t.length,r=s,f=0,o=0,u=t[i-1].nextSibling,a=null;for(;f<i||o<r;){if(t[f]===n[o]){f++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===f){const l=r<s?o?n[o-1].nextSibling:n[r-o]:u;for(;o<r;)e.insertBefore(n[o++],l)}else if(r===o)for(;f<i;)(!a||!a.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[r-1]&&n[o]===t[i-1]){const l=t[--i].nextSibling;e.insertBefore(n[o++],t[f++].nextSibling),e.insertBefore(n[--r],l),t[i]=n[r]}else{if(!a){a=new Map;let b=o;for(;b<r;)a.set(n[b],b++)}const l=a.get(t[f]);if(l!=null)if(o<l&&l<r){let b=f,p=1,g;for(;++b<i&&b<r&&!((g=a.get(t[b]))==null||g!==l+p);)p++;if(p>l-o){const x=t[f];for(;o<l;)e.insertBefore(n[o++],x)}else e.replaceChild(n[o++],t[f++])}else f++;else t[f++].remove()}}}const J="_$DX_DELEGATE";function Pe(e,t,n,s={}){let i;return F(r=>{i=r,t===document?e():Fe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Re(e,t,n){let s;const i=()=>{const f=document.createElement("template");return f.innerHTML=e,f.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function Ve(e,t=window.document){const n=t[J]||(t[J]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,ce))}}function Ge(e,t,n){c.context&&e.isConnected||(e[t]=n)}function Ke(e,t,n){c.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function We(e,t){c.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function Xe(e,t,n){return E(()=>e(t,n))}function Fe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return D(e,t,s,n);O(i=>D(e,t(),i,n),s)}function Be(e,t,n={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=i=>globalThis._$HY.r[i],c.has=i=>i in globalThis._$HY.r,c.gather=i=>z(t,i),c.registry=new Map,c.context={id:n.renderId||"",count:0},z(t,n.renderId);const s=Pe(e,t,[...t.childNodes],n);return c.context=null,s}function Qe(e){let t,n;return!c.context||!(t=c.registry.get(n=Ie()))?e():(c.completed&&c.completed.add(t),c.registry.delete(n),t)}function Je(e){let t=e,n=0,s=[];if(c.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Ze(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=c;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;ce(s),t.shift()}}),c.events.queued=!0)}function ce(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,s,i){const r=!!c.context&&e.isConnected;if(r){!n&&(n=[...e.childNodes]);let u=[];for(let a=0;a<n.length;a++){const l=n[a];l.nodeType===8&&l.data.slice(0,2)==="!$"?l.remove():u.push(l)}n=u}for(;typeof n=="function";)n=n();if(t===n)return n;const f=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,f==="string"||f==="number"){if(r)return n;if(f==="number"&&(t=t.toString()),o){let u=n[0];u&&u.nodeType===3?u.data!==t&&(u.data=t):u=document.createTextNode(t),n=L(e,n,s,u)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||f==="boolean"){if(r)return n;n=L(e,n,s)}else{if(f==="function")return O(()=>{let u=t();for(;typeof u=="function";)u=u();n=D(e,u,n,s)}),()=>n;if(Array.isArray(t)){const u=[],a=n&&Array.isArray(n);if(K(u,t,n,i))return O(()=>n=D(e,u,n,s,!0)),()=>n;if(r){if(!u.length)return n;if(s===void 0)return[...e.childNodes];let l=u[0],b=[l];for(;(l=l.nextSibling)!==s;)b.push(l);return n=b}if(u.length===0){if(n=L(e,n,s),o)return n}else a?n.length===0?Z(e,u,s):Le(e,n,u):(n&&L(e),Z(e,u));n=u}else if(t.nodeType){if(r&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=L(e,n,s,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function K(e,t,n,s){let i=!1;for(let r=0,f=t.length;r<f;r++){let o=t[r],u=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=K(e,o,u)||i;else if(a==="function")if(s){for(;typeof o=="function";)o=o();i=K(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const l=String(o);u&&u.nodeType===3&&u.data===l?e.push(u):e.push(document.createTextNode(l))}}return i}function Z(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function L(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let f=t.length-1;f>=0;f--){const o=t[f];if(i!==o){const u=o.parentNode===e;!r&&!f?u?e.replaceChild(i,o):e.insertBefore(i,n):u&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function z(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!c.registry.has(r)&&c.registry.set(r,i)}}function Ie(){const e=c.context;return`${e.id}${e.count++}`}const ze=(...e)=>(Ne(),Be(...e));export{Me as $,Ye as F,qe as S,Je as a,P as b,V as c,Ve as d,O as e,Pe as f,Qe as g,ze as h,Fe as i,ke as j,ye as k,We as l,Ge as m,pe as n,_e as o,Ue as p,Oe as q,Ze as r,Ke as s,Re as t,Xe as u,be as v,ne as w,je as x,De as y};
