import{N as c,b as y,ae as E,h as i,F as w,g as m,G as p,s as h,f as r,j as _,z as g,af as N,ag as b,d as A}from"./runtime.CK1UrYkP.js";let n;function F(){n=void 0}function M(a){let t=null,e=i;var f;if(i){for(t=r,n===void 0&&(n=_(document.head));n!==null&&(n.nodeType!==8||n.data!==w);)n=m(n);n===null?p(!1):n=h(m(n))}i||(f=document.head.appendChild(c()));try{y(()=>a(f),E)}finally{e&&(p(!0),n=r,h(t))}}function T(a){var t=document.createElement("template");return t.innerHTML=a,t.content}function d(a,t){var e=g;e.nodes_start===null&&(e.nodes_start=a,e.nodes_end=t)}function R(a,t){var e=(t&N)!==0,f=(t&b)!==0,s,u=!a.startsWith("<!>");return()=>{if(i)return d(r,null),r;s===void 0&&(s=T(u?a:"<!>"+a),e||(s=_(s)));var o=f?document.importNode(s,!0):s.cloneNode(!0);if(e){var v=_(o),l=o.lastChild;d(v,l)}else d(o,o);return o}}function D(a,t,e="svg"){var f=!a.startsWith("<!>"),s=`<${e}>${f?a:"<!>"+a}</${e}>`,u;return()=>{if(i)return d(r,null),r;if(!u){var o=T(s),v=_(o);u=_(v)}var l=u.cloneNode(!0);return d(l,l),l}}function I(a=""){if(!i){var t=c(a+"");return d(t,t),t}var e=r;return e.nodeType!==3&&(e.before(e=c()),h(e)),d(e,e),e}function L(){if(i)return d(r,null),r;var a=document.createDocumentFragment(),t=document.createComment(""),e=c();return a.append(t,e),d(t,e),a}function O(a,t){if(i){g.nodes_end=r,A();return}a!==null&&a.before(t)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{d as a,O as b,T as c,L as d,I as e,M as h,D as n,F as r,R as t};
