import{s as Ae}from"./entry.D9zjHTX3.js";import{b as C,n as _e,d as Y,t as pe}from"./disclose-version.CyiHV5aD.js";import{C as me,b as Re,h as j,d as Ee,B as Te,L as ve,Z as Ge,_ as re,s as F,G as J,f as E,aw as O,$ as he,e as ke,a0 as Le,z as oe,ax as le,ay as Ne,K as Se,az as Me,k as ze,j as Ie,N as Oe,I as Pe,y as De,aA as X,aB as $,a2 as Be,Q as de,aC as ge,aD as Ze,aE as Fe,g as Je,Y as Ke,aF as Ue,aG as Ye,t as G,p as ye,o as be,q as x,m as W,v as T,r as A,W as M,ac as z,n as K}from"./runtime.CK1UrYkP.js";import{c as We,d as qe,e as Qe,n as Xe,f as $e,s as en}from"./render.Cxvi0-sJ.js";import{p as He,i as P}from"./props.BmtQFnm_.js";import{h as nn,s as I}from"./snippet.FHTMrK6v.js";function tn(e,n){if(n){const t=document.body;e.autofocus=!0,me(()=>{document.activeElement===t&&e.focus()})}}function An(e,n){return n}function an(e,n,t,a){for(var i=[],u=n.length,_=0;_<u;_++)Ne(n[_].e,i,!0);var c=u>0&&i.length===0&&t!==null;if(c){var h=t.parentNode;Se(h),h.append(t),a.clear(),w(e,n[0].prev,n[u-1].next)}Me(i,()=>{for(var g=0;g<u;g++){var m=n[g];c||(a.delete(m.k),w(e,m.prev,m.next)),ze(m.e,!c)}})}function sn(e,n,t,a,i,u=null){var _=e,c={flags:n,items:new Map,first:null},h=(n&ge)!==0;if(h){var g=e;_=j?F(Ie(g)):g.appendChild(Oe())}j&&Ee();var m=null,H=!1;Re(()=>{var y=t(),o=Te(y)?y:y==null?[]:ve(y),r=o.length;if(H&&r===0)return;H=r===0;let s=!1;if(j){var k=_.data===Ge;k!==(r===0)&&(_=re(),F(_),J(!1),s=!0)}if(j){for(var d=null,f,p=0;p<r;p++){if(E.nodeType===8&&E.data===Pe){_=E,s=!0,J(!1);break}var b=o[p],l=a(b,p);f=je(E,c,d,null,b,l,p,i,n),c.items.set(l,f),d=f}r>0&&F(re())}if(!j){var v=De;rn(o,c,_,i,n,(v.f&O)!==0,a)}u!==null&&(r===0?m?he(m):m=ke(()=>u(_)):m!==null&&Le(m,()=>{m=null})),s&&J(!0),t()}),j&&(_=E)}function rn(e,n,t,a,i,u,_,c){var ne,te,ae,ie;var h=(i&Ze)!==0,g=(i&(X|$))!==0,m=e.length,H=n.items,y=n.first,o=y,r,s=null,k,d=[],f=[],p,b,l,v;if(h)for(v=0;v<m;v+=1)p=e[v],b=_(p,v),l=H.get(b),l!==void 0&&((ne=l.a)==null||ne.measure(),(k??(k=new Set)).add(l));for(v=0;v<m;v+=1){if(p=e[v],b=_(p,v),l=H.get(b),l===void 0){var D=o?o.e.nodes_start:t;s=je(D,n,s,s===null?n.first:s.next,p,b,v,a,i),H.set(b,s),d=[],f=[],o=s.next;continue}if(g&&on(l,p,v,i),l.e.f&O&&(he(l.e),h&&((te=l.a)==null||te.unfix(),(k??(k=new Set)).delete(l))),l!==o){if(r!==void 0&&r.has(l)){if(d.length<f.length){var S=f[0],V;s=S.prev;var ee=d[0],B=d[d.length-1];for(V=0;V<d.length;V+=1)ce(d[V],S,t);for(V=0;V<f.length;V+=1)r.delete(f[V]);w(n,ee.prev,B.next),w(n,s,ee),w(n,B,S),o=S,s=B,v-=1,d=[],f=[]}else r.delete(l),ce(l,o,t),w(n,l.prev,l.next),w(n,l,s===null?n.first:s.next),w(n,s,l),s=l;continue}for(d=[],f=[];o!==null&&o.k!==b;)(u||!(o.e.f&O))&&(r??(r=new Set)).add(o),f.push(o),o=o.next;if(o===null)continue;l=o}d.push(l),s=l,o=l.next}if(o!==null||r!==void 0){for(var R=r===void 0?[]:ve(r);o!==null;)(u||!(o.e.f&O))&&R.push(o),o=o.next;var Z=R.length;if(Z>0){var xe=i&ge&&m===0?t:null;if(h){for(v=0;v<Z;v+=1)(ae=R[v].a)==null||ae.measure();for(v=0;v<Z;v+=1)(ie=R[v].a)==null||ie.fix()}an(n,R,xe,H)}}h&&me(()=>{var se;if(k!==void 0)for(l of k)(se=l.a)==null||se.apply()}),oe.first=n.first&&n.first.e,oe.last=s&&s.e}function on(e,n,t,a){a&X&&le(e.v,n),a&$?le(e.i,t):e.i=t}function je(e,n,t,a,i,u,_,c,h,g){var m=(h&X)!==0,H=(h&Fe)===0,y=m?H?Be(i):de(i):i,o=h&$?de(_):_,r={i:o,v:y,k:u,a:null,e:null,prev:t,next:a};try{return r.e=ke(()=>c(e,y,o),j),r.e.prev=t&&t.e,r.e.next=a&&a.e,t===null?n.first=r:(t.next=r,t.e.next=r.e),a!==null&&(a.prev=r,a.e.prev=r.e),r}finally{}}function ce(e,n,t){for(var a=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,u=e.e.nodes_start;u!==a;){var _=Je(u);i.before(u),u=_}}function w(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function Ve(e){var n,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Ve(e[n]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function ln(){for(var e,n,t=0,a="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Ve(e))&&(a&&(a+=" "),a+=n);return a}function dn(e){return typeof e=="object"?ln(e):e??""}function cn(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function q(e,n,t,a){var i=e.__attributes??(e.__attributes={});j&&(i[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||i[n]!==(i[n]=t)&&(n==="style"&&"__styles"in e&&(e.__styles={}),n==="loading"&&(e[Ye]=t),t==null?e.removeAttribute(n):typeof t!="string"&&we(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function fe(e,n,t,a,i=!1,u=!1,_=!1){var c=n||{},h=e.tagName==="OPTION";for(var g in n)g in t||(t[g]=null);t.class&&(t.class=dn(t.class)),a!==void 0&&(t.class=t.class?t.class+" "+a:a);var m=we(e),H=e.__attributes??(e.__attributes={});for(const d in t){let f=t[d];if(h&&d==="value"&&f==null){e.value=e.__value="",c[d]=f;continue}var y=c[d];if(f!==y){c[d]=f;var o=d[0]+d[1];if(o!=="$$"){if(o==="on"){const p={},b="$$"+d;let l=d.slice(2);var r=$e(l);if(We(l)&&(l=l.slice(0,-7),p.capture=!0),!r&&y){if(f!=null)continue;e.removeEventListener(l,c[b],p),c[b]=null}if(f!=null)if(r)e[`__${l}`]=f,Qe([l]);else{let v=function(D){c[d].call(this,D)};c[b]=qe(l,e,v,p)}else r&&(e[`__${l}`]=void 0)}else if(d==="style"&&f!=null)e.style.cssText=f+"";else if(d==="autofocus")tn(e,!!f);else if(d==="__value"||d==="value"&&f!=null)e.value=e[d]=e.__value=f;else if(d==="selected"&&h)cn(e,f);else{var s=d;i||(s=Xe(s));var k=s==="defaultValue"||s==="defaultChecked";if(f==null&&!u&&!k)if(H[d]=null,s==="value"||s==="checked"){let p=e;if(s==="value"){let b=p.defaultValue;p.removeAttribute(s),p.defaultValue=b}else{let b=p.defaultChecked;p.removeAttribute(s),p.defaultChecked=b}}else e.removeAttribute(d);else k||m.includes(s)&&(u||typeof f!="string")?e[s]=f:typeof f!="function"&&(j&&(s==="src"||s==="href"||s==="srcset")||q(e,s,f))}d==="style"&&"__styles"in e&&(e.__styles={})}}}return c}var ue=new Map;function we(e){var n=ue.get(e.nodeName);if(n)return n;ue.set(e.nodeName,n=[]);for(var t,a=e,i=Element.prototype;i!==a;){t=Ue(a);for(var u in t)t[u].set&&n.push(u);a=Ke(a)}return n}function Rn(e,n,t){var a=e.__className,i=fn(n);j&&e.className===i?e.__className=i:(a!==i||j&&e.className!==i)&&(n==null&&!t?e.removeAttribute("class"):e.className=i,e.__className=i)}function fn(e,n){return(e??"")+""}function un(e,n,t){if(t){if(e.classList.contains(n))return;e.classList.add(n)}else{if(!e.classList.contains(n))return;e.classList.remove(n)}}function U(e,n,t,a){var i=e.__styles??(e.__styles={});i[n]!==t&&(i[n]=t,t==null?e.style.removeProperty(n):e.style.setProperty(n,t,""))}const L=(e,n)=>!n||!e.startsWith(n)?e:e.substring(n.length),Q=(e,n)=>!n||!e.endsWith(n)?e:e.substring(0,e.length-n.length),Ce=(e,n)=>e.endsWith(n)?e:e+n,En=(e,n)=>{const{name:t}=e,i=(o=>o?Q(L(Q(o,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null);if(!i)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const u=e.homepage??null,_=!e.private&&!!e.exports&&e.version!=="0.0.1",c=_?"https://www.npmjs.com/package/"+e.name:null,h=_&&i?i+"/blob/main/CHANGELOG.md":null,g=_n(t),m=i?L(i,"https://github.com/").split("/")[0]:null,H=u?Ce(u,"/")+(e.logo?L(e.logo,"/"):"favicon.png"):null,y=e.logo_alt??`logo for ${g}`;return{package_json:e,src_json:n,name:t,repo_name:g,repo_url:i,owner_name:m,homepage_url:u,logo_url:H,logo_alt:y,npm_url:c,changelog_url:h,published:_}},_n=e=>e[0]==="@"?e.split("/")[1]:e,pn=()=>{const e=Ae;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},Tn={subscribe(e){return pn().page.subscribe(e)}},mn=e=>Q(L(L(e,"https://"),"www."),"/");var vn=_e("<path></path>"),hn=_e("<svg><!><!></svg>");function kn(e,n){be(n,!0);const t=He(n,"shrink",3,!0),a=z(()=>n.fill??n.data.fill??"var(--text_color, #000)"),i=z(()=>n.width??n.size),u=z(()=>n.height??n.size),_=z(()=>{var o,r,s,k;return(o=n.data.attrs)!=null&&o.style&&((r=n.attrs)!=null&&r.style)?Ce(n.data.attrs.style,";")+" "+n.attrs.style:((s=n.data.attrs)==null?void 0:s.style)??((k=n.attrs)==null?void 0:k.style)});var c=hn();let h;var g=x(c);{var m=o=>{var r=Y(),s=W(r);nn(s,()=>n.data.raw,!0,!1),C(o,r)};P(g,o=>{n.data.raw&&o(m)})}var H=T(g);{var y=o=>{var r=Y(),s=W(r);sn(s,16,()=>n.data.paths,k=>k,(k,d)=>{var f=vn();let p;G(()=>p=fe(f,p,{fill:M(a),...d},"svelte-16ciom8",!0)),C(k,f)}),C(o,r)};P(H,o=>{n.data.paths&&o(y)})}A(c),G(()=>{h=fe(c,h,{viewBox:n.data.viewBox??"0 0 100 100",...n.data.attrs,...n.attrs,"aria-label":n.label??n.data.label,style:M(_),class:n.classes},"svelte-16ciom8",!0),un(c,"inline",n.inline),U(c,"width",M(i)),U(c,"height",M(u)),U(c,"flex-shrink",t()?1:0)}),C(e,c),ye()}const Gn={label:"a pixelated green oak acorn with a glint of sun",paths:[{fill:"#6f974c",d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},{fill:"#5e853f",d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},{fill:"#6f492b",d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},{fill:"#3b730f",d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},{fill:"#473323",d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},{fill:"#2e6006",d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},{fill:"#34251a",d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"}]},N={label:"a friendly brown spider facing you",fill:"#84522a",paths:[{d:"M 26.253917,88.532336 29.904106,71.394855 40.667193,53.342811 40.258534,49.99234 38.417407,49.000991 22.876908,50.369035 9.4865496,53.880193 2.3019024,57.978424 0.42708056,57.27994 7.2642726,51.086985 20.811326,45.373351 37.960128,42.356792 39.354818,40.107008 38.229925,38.149883 26.030989,27.105568 14.46539,21.861786 8.0479986,18.615387 l -0.41428,-1.710463 8.2789464,1.499862 13.012873,5.003724 13.447448,10.696856 1.680801,-0.729547 0.222439,-1.343157 -3.983998,-12.128053 -5.730215,-9.573597 -0.823624,-5.1744052 1.16944,-1.165102 2.604334,6.3355162 6.612025,7.08777 4.874534,11.55989 2.800804,0.515574 4.48815,-1.359246 1.521623,-8.687062 5.685014,-8.620764 2.75965,-6.8316782 1.094578,1.128569 -1.293029,5.4222362 -4.084776,11.06803 -0.484994,8.377408 0.194311,1.192896 1.42954,1.700726 11.563936,-10.644623 9.878262,-8.331535 8.732915,-3.390708 -0.387305,1.402757 -5.294686,3.023816 -10.445054,10.705792 -9.561599,13.627899 -0.438945,1.602755 1.001398,1.666754 17.376932,3.986302 9.537375,6.940531 4.325785,4.636405 0.211208,1.557106 -6.15842,-4.279925 -10.413771,-5.155697 -15.838715,-1.696223 -0.83461,1.144484 0.774499,2.593247 9.737644,16.194355 3.925704,17.214082 0.07146,10.277289 -1.706242,1.13628 -2.009721,-9.21637 -5.894265,-16.88027 -12.292087,-17.295813 -4.177778,-0.585888 -7.294671,2.935716 -11.138052,16.645915 -6.462422,17.752509 -1.634756,7.206641 -2.070766,-1.52923 z"}]},Ln={label:"a fuzzy tuft of green moss",fill:"#3db33d",paths:N.paths,attrs:{style:"transform: scaleX(-1) rotate(180deg)"}},Nn={label:"a green sauropod wearing a brown belt",paths:[{fill:"#5e853f",d:"M 18.067186,15.969407 C 21.788999,13.893836 17.949371,0.38957847 10.927436,0.04361599 4.8719565,-0.25473037 1.7349173,7.4851976 0.94704854,15.249287 c -0.92008807,9.06705 -1.79155525,17.669932 0.59969726,28.291532 2.4805689,12.269719 7.0800447,23.952702 13.1393162,34.8823 6.000724,10.5946 6.775015,20.816886 4.701503,21.478748 -0.03241,0.01035 -0.07998,0.06265 0.04147,0.06596 1.294211,0.03532 10.640814,0.04592 10.677563,-0.05295 0.485896,-1.307172 -3.047914,-6.728008 -1.423246,-8.607633 1.949043,-2.254904 17.430713,0.186565 21.929,0.285178 9.05576,0.198523 17.000796,-1.770745 18.230176,-0.990103 1.997906,1.268647 0.07692,8.622864 -1.734662,9.31776 -0.123669,0.04744 -0.0605,0.05786 8.7e-5,0.05776 1.355848,-0.0022 8.671284,0.02064 9.113066,-0.03424 1.109966,-0.137881 1.121155,-9.535235 1.329075,-10.418319 C 77.607043,89.2834 96.053852,85.109995 99.112049,70.368973 103.63141,48.584901 86.877032,39.05263 85.950278,39.29966 83.317032,40.001563 101.56057,48.396651 91.102193,67.902384 88.018737,73.653284 77.350057,79.523245 75.685258,79.119008 73.64059,78.622534 65.09671,63.091297 52.400901,65.836332 43.234666,67.818217 41.919113,72.011159 30.91062,71.457371 23.396234,71.079356 15.879493,62.020499 10.825044,44.977744 8.7853926,38.10038 7.9304392,31.282385 7.7195376,25.924892 7.3556266,16.68053 7.7329856,12.199716 7.7329856,12.199716 c 0,0 7.0326794,5.610875 10.3342004,3.769691 z"},{fill:"#6f492b",d:"m 51.811124,91.579144 c -0.338516,0.300927 1.649325,0.223227 1.91566,0.125562 10.084215,-3.697658 13.756737,-6.313605 15.083689,-19.379753 0.213532,-2.102603 -6.814409,-6.279564 -6.854038,-5.131405 -0.399472,11.573929 -1.610604,16.392773 -10.086139,24.32687"},{fill:"#34251a",d:"m 57.712693,87.945562 c 0,0 1.995464,1.865412 2.68268,1.964956 0.765874,0.110938 4.011805,-1.572536 4.056136,-2.519526 0.05138,-1.097583 -3.559853,-3.060285 -3.559853,-3.060285"},{fill:"#34251a",d:"m 61.598583,82.940048 c 0,0 3.423751,3.095396 4.286346,2.851789 0.676123,-0.190945 2.567214,-3.369081 2.28239,-4.177499 -0.333199,-0.945723 -5.337842,-1.790867 -5.337842,-1.790867"},{fill:"#34251a",d:"m 63.187415,78.383306 c 0,0 4.923745,1.759016 5.668289,1.154079 0.551751,-0.448294 1.380932,-3.505132 1.032166,-4.129317 -0.767431,-1.37347 -5.791186,-3.388548 -5.791186,-3.388548"}]};N.paths;N.paths;N.paths;N.paths;const Sn={label:"a friendly orange pixelated spider facing you",fill:"#f4672f",paths:[{d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"}]},gn={label:"the GitHub logo, an octocat silhouette",paths:[{d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z","fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)"}],viewBox:"0 0 1024 1024"};var yn=pe('<div class="root_url svelte-cs8o0f"><a> </a></div>'),bn=pe('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function Mn(e,n){be(n,!0);const t=He(n,"root_url",3,null);var a=bn(),i=x(a);I(i,()=>n.children??K);var u=T(i,2),_=x(u);I(_,()=>n.logo_header??K);var c=T(_,2),h=x(c);{var g=r=>{var s=Y(),k=W(s);I(k,()=>n.logo),C(r,s)},m=r=>{kn(r,{data:gn,size:"var(--icon_size_lg)"})};P(h,r=>{n.logo?r(g):r(m,!1)})}A(c);var H=T(c,2);I(H,()=>n.logo_footer??K),A(u);var y=T(u,2);{var o=r=>{var s=yn(),k=x(s),d=x(k,!0);G(()=>en(d,mn(t()))),A(k),A(s),G(()=>q(k,"href",t())),C(r,s)};P(y,r=>{t()&&r(o)})}A(a),G(()=>q(c,"href",n.pkg.repo_url)),C(e,a),ye()}const zn={name:"@ryanatkn/belt",version:"0.29.0",description:"utility belt for JS",glyph:"🦕",logo:"logo.svg",logo_alt:"a green sauropod wearing a brown utility belt",motto:"ancient not extinct",public:!0,license:"MIT",homepage:"https://belt.ryanatkn.com/",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},repository:{type:"git",url:"git+https://github.com/ryanatkn/belt.git"},bugs:"https://github.com/ryanatkn/belt/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy",benchmark:"gro run src/benchmarks/slugify_benchmark.ts"},type:"module",engines:{node:">=20.17"},keywords:["js","typescript","utilities","web"],peerDependencies:{"@types/node":"^22.7.4","esm-env":"^1.1.4"},peerDependenciesMeta:{"@types/node":{optional:!0},"esm-env":{optional:!0}},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/eslint-config":"^0.6.0","@ryanatkn/fuz":"^0.131.5","@ryanatkn/gro":"^0.148.0","@ryanatkn/moss":"^0.21.1","@sveltejs/adapter-static":"^3.0.8","@sveltejs/kit":"^2.15.1","@sveltejs/package":"^2.3.7","@sveltejs/vite-plugin-svelte":"^4.0.0","@types/node":"^22.10.3",eslint:"^9.17.0","eslint-plugin-svelte":"^2.46.1",prettier:"^3.4.2","prettier-plugin-svelte":"^3.3.2",svelte:"^5.16.0","svelte-check":"^4.1.1",tinybench:"^3.1.0",tslib:"^2.8.1",typescript:"^5.7.2","typescript-eslint":"^8.19.0",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{"./package.json":"./package.json","./array.js":{types:"./dist/array.d.ts",default:"./dist/array.js"},"./async.js":{types:"./dist/async.d.ts",default:"./dist/async.js"},"./colors.js":{types:"./dist/colors.d.ts",default:"./dist/colors.js"},"./counter.js":{types:"./dist/counter.d.ts",default:"./dist/counter.js"},"./dom.js":{types:"./dist/dom.d.ts",default:"./dist/dom.js"},"./error.js":{types:"./dist/error.d.ts",default:"./dist/error.js"},"./fetch.js":{types:"./dist/fetch.d.ts",default:"./dist/fetch.js"},"./function.js":{types:"./dist/function.d.ts",default:"./dist/function.js"},"./id.js":{types:"./dist/id.d.ts",default:"./dist/id.js"},"./iterator.js":{types:"./dist/iterator.d.ts",default:"./dist/iterator.js"},"./json.js":{types:"./dist/json.d.ts",default:"./dist/json.js"},"./log.js":{types:"./dist/log.d.ts",default:"./dist/log.js"},"./map.js":{types:"./dist/map.d.ts",default:"./dist/map.js"},"./maths.js":{types:"./dist/maths.d.ts",default:"./dist/maths.js"},"./object.js":{types:"./dist/object.d.ts",default:"./dist/object.js"},"./path.js":{types:"./dist/path.d.ts",default:"./dist/path.js"},"./print.js":{types:"./dist/print.d.ts",default:"./dist/print.js"},"./process.js":{types:"./dist/process.d.ts",default:"./dist/process.js"},"./random_alea.js":{types:"./dist/random_alea.d.ts",default:"./dist/random_alea.js"},"./random.js":{types:"./dist/random.d.ts",default:"./dist/random.js"},"./regexp.js":{types:"./dist/regexp.d.ts",default:"./dist/regexp.js"},"./result.js":{types:"./dist/result.d.ts",default:"./dist/result.js"},"./string.js":{types:"./dist/string.d.ts",default:"./dist/string.js"},"./throttle.js":{types:"./dist/throttle.d.ts",default:"./dist/throttle.js"},"./timings.js":{types:"./dist/timings.d.ts",default:"./dist/timings.js"},"./types.js":{types:"./dist/types.d.ts",default:"./dist/types.js"},"./url.js":{types:"./dist/url.d.ts",default:"./dist/url.js"}}},In={name:"@ryanatkn/belt",version:"0.29.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./array.js":{path:"array.ts",declarations:[{name:"EMPTY_ARRAY",kind:"variable"},{name:"to_array",kind:"function"},{name:"remove_unordered",kind:"function"},{name:"to_next",kind:"function"}]},"./async.js":{path:"async.ts",declarations:[{name:"Async_Status",kind:"type"},{name:"wait",kind:"function"},{name:"is_promise",kind:"function"},{name:"Deferred",kind:"type"},{name:"create_deferred",kind:"function"}]},"./colors.js":{path:"colors.ts",declarations:[{name:"Hsl",kind:"type"},{name:"Hue",kind:"type"},{name:"Saturation",kind:"type"},{name:"Lightness",kind:"type"},{name:"Rgb",kind:"type"},{name:"Red",kind:"type"},{name:"Green",kind:"type"},{name:"Blue",kind:"type"},{name:"rgb_to_hex",kind:"function"},{name:"hex_to_rgb",kind:"function"},{name:"hex_string_to_rgb",kind:"function"},{name:"rgb_to_hex_string",kind:"function"},{name:"to_hex_component",kind:"function"},{name:"rgb_to_hsl",kind:"function"},{name:"hsl_to_rgb",kind:"function"},{name:"hue_to_rgb_component",kind:"function"},{name:"hsl_to_hex",kind:"function"},{name:"hsl_to_hex_string",kind:"function"},{name:"hsl_to_string",kind:"function"},{name:"hex_string_to_hsl",kind:"function"},{name:"parse_hsl_string",kind:"function"}]},"./counter.js":{path:"counter.ts",declarations:[{name:"Counter",kind:"type"},{name:"Create_Counter",kind:"type"},{name:"create_counter",kind:"function"}]},"./dom.js":{path:"dom.ts",declarations:[{name:"is_editable",kind:"function"},{name:"inside_editable",kind:"function"},{name:"is_interactive",kind:"function"},{name:"swallow",kind:"function"},{name:"handle_target_value",kind:"function"},{name:"is_iframed",kind:"function"}]},"./error.js":{path:"error.ts",declarations:[{name:"Unreachable_Error",kind:"class"},{name:"unreachable",kind:"function"}]},"./fetch.js":{path:"fetch.ts",declarations:[{name:"Fetch_Value_Options",kind:"type"},{name:"fetch_value",kind:"function"},{name:"Fetch_Value_Cache_Key",kind:"variable"},{name:"Fetch_Value_Cache_Item",kind:"variable"},{name:"Fetch_Value_Cache",kind:"variable"},{name:"to_fetch_value_cache_key",kind:"function"},{name:"serialize_cache",kind:"function"},{name:"deserialize_cache",kind:"function"}]},"./function.js":{path:"function.ts",declarations:[{name:"noop",kind:"function"},{name:"noop_async",kind:"function"},{name:"resolved",kind:"variable"},{name:"identity",kind:"function"},{name:"Lazy",kind:"type"},{name:"lazy",kind:"function"}]},"./id.js":{path:"id.ts",declarations:[{name:"Uuid",kind:"type"},{name:"is_uuid",kind:"function"},{name:"UUID_MATCHER",kind:"variable"},{name:"Client_Id_Creator",kind:"type"},{name:"create_client_id_creator",kind:"function"}]},"./iterator.js":{path:"iterator.ts",declarations:[{name:"count_iterator",kind:"function"}]},"./json.js":{path:"json.ts",declarations:[{name:"Json",kind:"type"},{name:"Json_Primitive",kind:"type"},{name:"Json_Object",kind:"type"},{name:"Json_Array",kind:"type"},{name:"Json_Type",kind:"type"},{name:"to_json_type",kind:"function"},{name:"canonicalize",kind:"function"},{name:"embed_json",kind:"function"}]},"./log.js":{path:"log.ts",declarations:[{name:"Log_Level",kind:"type"},{name:"to_log_level_value",kind:"function"},{name:"configure_log_level",kind:"function"},{name:"configure_log_colors",kind:"function"},{name:"Log",kind:"type"},{name:"Logger_State",kind:"type"},{name:"Logger_Prefixes_And_Suffixes_Getter",kind:"type"},{name:"Base_Logger",kind:"class"},{name:"Logger",kind:"class"},{name:"System_Logger",kind:"class"}]},"./map.js":{path:"map.ts",declarations:[{name:"sort_map",kind:"function"},{name:"compare_simple_map_entries",kind:"function"}]},"./maths.js":{path:"maths.ts",declarations:[{name:"clamp",kind:"function"},{name:"lerp",kind:"function"},{name:"round",kind:"function"},{name:"GR",kind:"variable"},{name:"GR_i",kind:"variable"},{name:"GR_2",kind:"variable"},{name:"GR_2i",kind:"variable"},{name:"GR_3",kind:"variable"},{name:"GR_3i",kind:"variable"},{name:"GR_4",kind:"variable"},{name:"GR_4i",kind:"variable"},{name:"GR_5",kind:"variable"},{name:"GR_5i",kind:"variable"},{name:"GR_6",kind:"variable"},{name:"GR_6i",kind:"variable"},{name:"GR_7",kind:"variable"},{name:"GR_7i",kind:"variable"},{name:"GR_8",kind:"variable"},{name:"GR_8i",kind:"variable"},{name:"GR_9",kind:"variable"},{name:"GR_9i",kind:"variable"}]},"./object.js":{path:"object.ts",declarations:[{name:"is_plain_object",kind:"function"},{name:"map_record",kind:"function"},{name:"omit",kind:"function"},{name:"pick_by",kind:"function"},{name:"omit_undefined",kind:"function"},{name:"reorder",kind:"function"},{name:"EMPTY_OBJECT",kind:"variable"},{name:"traverse",kind:"function"}]},"./path.js":{path:"path.ts",declarations:[{name:"parse_path_parts",kind:"function"},{name:"parse_path_segments",kind:"function"},{name:"parse_path_pieces",kind:"function"},{name:"Path_Piece",kind:"type"},{name:"slugify",kind:"function"}]},"./print.js":{path:"print.ts",declarations:[{name:"st",kind:"function"},{name:"set_colors",kind:"function"},{name:"print_key_value",kind:"function"},{name:"print_ms",kind:"function"},{name:"print_number_with_separators",kind:"function"},{name:"print_string",kind:"function"},{name:"print_number",kind:"function"},{name:"print_boolean",kind:"function"},{name:"print_value",kind:"function"},{name:"print_error",kind:"function"},{name:"print_timing",kind:"function"},{name:"print_timings",kind:"function"},{name:"print_log_label",kind:"function"}]},"./process.js":{path:"process.ts",declarations:[{name:"Spawned_Process",kind:"type"},{name:"Spawned",kind:"type"},{name:"Spawn_Result",kind:"type"},{name:"spawn",kind:"function"},{name:"Spawned_Out",kind:"type"},{name:"spawn_out",kind:"function"},{name:"spawn_process",kind:"function"},{name:"print_child_process",kind:"function"},{name:"global_spawn",kind:"variable"},{name:"register_global_spawn",kind:"function"},{name:"despawn",kind:"function"},{name:"despawn_all",kind:"function"},{name:"attach_process_error_handlers",kind:"function"},{name:"print_spawn_result",kind:"function"},{name:"Restartable_Process",kind:"type"},{name:"spawn_restartable_process",kind:"function"}]},"./random_alea.js":{path:"random_alea.ts",declarations:[{name:"Alea",kind:"type"},{name:"create_random_alea",kind:"function"},{name:"masher",kind:"function"}]},"./random.js":{path:"random.ts",declarations:[{name:"random_float",kind:"function"},{name:"random_int",kind:"function"},{name:"random_boolean",kind:"function"},{name:"random_item",kind:"function"},{name:"shuffle",kind:"function"}]},"./regexp.js":{path:"regexp.ts",declarations:[{name:"escape_regexp",kind:"function"}]},"./result.js":{path:"result.ts",declarations:[{name:"Result",kind:"type"},{name:"OK",kind:"variable"},{name:"NOT_OK",kind:"variable"},{name:"unwrap",kind:"function"},{name:"Result_Error",kind:"class"},{name:"unwrap_error",kind:"function"}]},"./string.js":{path:"string.ts",declarations:[{name:"truncate",kind:"function"},{name:"strip_start",kind:"function"},{name:"strip_end",kind:"function"},{name:"strip_after",kind:"function"},{name:"strip_before",kind:"function"},{name:"ensure_start",kind:"function"},{name:"ensure_end",kind:"function"},{name:"deindent",kind:"function"},{name:"plural",kind:"function"},{name:"count_graphemes",kind:"function"},{name:"strip_ansi",kind:"function"}]},"./throttle.js":{path:"throttle.ts",declarations:[{name:"Throttle_Options",kind:"type"},{name:"throttle",kind:"function"}]},"./timings.js":{path:"timings.ts",declarations:[{name:"Stopwatch",kind:"type"},{name:"create_stopwatch",kind:"function"},{name:"Timings_Key",kind:"type"},{name:"Timings",kind:"class"}]},"./types.js":{path:"types.ts",declarations:[{name:"Omit_Strict",kind:"type"},{name:"Pick_Union",kind:"type"},{name:"Keyof_Union",kind:"type"},{name:"Partial_Except",kind:"type"},{name:"Partial_Only",kind:"type"},{name:"Partial_Values",kind:"type"},{name:"Assignable",kind:"type"},{name:"Defined",kind:"type"},{name:"Not_Null",kind:"type"},{name:"Array_Element",kind:"type"},{name:"Flavored",kind:"type"},{name:"Flavor",kind:"type"},{name:"Branded",kind:"type"},{name:"Brand",kind:"type"}]},"./url.js":{path:"url.ts",declarations:[{name:"format_url",kind:"function"}]}}};export{Mn as L,kn as S,U as a,fe as b,En as c,In as d,zn as e,mn as f,Nn as g,sn as h,Ce as i,An as j,Rn as k,L as l,Q as m,Gn as n,Ln as o,Tn as p,N as q,Sn as r,q as s,un as t};
