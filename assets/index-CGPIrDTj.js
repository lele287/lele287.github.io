(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const fe={},ar=[],An=()=>{},Ku=()=>!1,_o=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vo=n=>n.startsWith("onUpdate:"),Re=Object.assign,Cl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Kh=Object.prototype.hasOwnProperty,ie=(n,t)=>Kh.call(n,t),Bt=Array.isArray,lr=n=>ls(n)==="[object Map]",ju=n=>ls(n)==="[object Set]",pc=n=>ls(n)==="[object Date]",Gt=n=>typeof n=="function",_e=n=>typeof n=="string",Rn=n=>typeof n=="symbol",oe=n=>n!==null&&typeof n=="object",Zu=n=>(oe(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),Ju=Object.prototype.toString,ls=n=>Ju.call(n),jh=n=>ls(n).slice(8,-1),Qu=n=>ls(n)==="[object Object]",Pl=n=>_e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=Rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Zh=/-\w/g,Ge=xo(n=>n.replace(Zh,t=>t.slice(1).toUpperCase())),Jh=/\B([A-Z])/g,Oi=xo(n=>n.replace(Jh,"-$1").toLowerCase()),Mo=xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),No=xo(n=>n?`on${Mo(n)}`:""),Tn=(n,t)=>!Object.is(n,t),Fo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},tf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Qh=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let mc;const So=()=>mc||(mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=_e(i)?id(i):Jr(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(_e(n)||oe(n))return n}const td=/;(?![^(]*\))/g,ed=/:([^]+)/,nd=/\/\*[^]*?\*\//g;function id(n){const t={};return n.replace(nd,"").split(td).forEach(e=>{if(e){const i=e.split(ed);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function yo(n){let t="";if(_e(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=yo(n[e]);i&&(t+=i+" ")}else if(oe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sd=Rl(rd);function ef(n){return!!n||n===""}function od(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ll(n[i],t[i]);return e}function Ll(n,t){if(n===t)return!0;let e=pc(n),i=pc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Rn(n),i=Rn(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?od(n,t):!1;if(e=oe(n),i=oe(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Ll(n[o],t[o]))return!1}}return String(n)===String(t)}const nf=n=>!!(n&&n.__v_isRef===!0),ce=n=>_e(n)?n:n==null?"":Bt(n)||oe(n)&&(n.toString===Ju||!Gt(n.toString))?nf(n)?ce(n.value):JSON.stringify(n,rf,2):String(n),rf=(n,t)=>nf(t)?rf(n,t.value):lr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Oo(i,s)+" =>"]=r,e),{})}:ju(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Oo(e))}:Rn(t)?Oo(t):oe(t)&&!Bt(t)&&!Qu(t)?String(t):t,Oo=(n,t="")=>{var e;return Rn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class ad{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&we&&(we.active?(this.parent=we,this.index=(we.scopes||(we.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const r=this.scopes.slice();for(t=0,e=r.length;t<e;t++)r[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=we;try{return we=this,t()}finally{we=e}}}on(){++this._on===1&&(this.prevScope=we,we=this)}off(){if(this._on>0&&--this._on===0){if(we===this)we=this.prevScope;else{let t=we;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(e=0,i=r.length;e<i;e++)r[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ld(){return we}let ue;const Bo=new WeakSet;class sf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&(we.active?we.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bo.has(this)&&(Bo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gc(this),lf(this);const t=ue,e=mn;ue=this,mn=!0;try{return this.fn()}finally{cf(this),ue=t,mn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ul(t);this.deps=this.depsTail=void 0,gc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ra(this)&&this.run()}get dirty(){return Ra(this)}}let of=0,Gr,kr;function af(n,t=!1){if(n.flags|=8,t){n.next=kr,kr=n;return}n.next=Gr,Gr=n}function Dl(){of++}function Il(){if(--of>0)return;if(kr){let t=kr;for(kr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Gr;){let t=Gr;for(Gr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function lf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function cf(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),Ul(i),cd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Ra(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(uf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function uf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qr)||(n.globalVersion=Qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ra(n))))return;n.flags|=2;const t=n.dep,e=ue,i=mn;ue=n,mn=!0;try{lf(n);const r=n.fn(n._value);(t.version===0||Tn(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{ue=e,mn=i,cf(n),n.flags&=-3}}function Ul(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Ul(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function cd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let mn=!0;const ff=[];function qn(){ff.push(mn),mn=!1}function Yn(){const n=ff.pop();mn=n===void 0?!0:n}function gc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ue;ue=void 0;try{t()}finally{ue=e}}}let Qr=0;class ud{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!mn||ue===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ue)e=this.activeLink=new ud(ue,this),ue.deps?(e.prevDep=ue.depsTail,ue.depsTail.nextDep=e,ue.depsTail=e):ue.deps=ue.depsTail=e,hf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ue.depsTail,e.nextDep=void 0,ue.depsTail.nextDep=e,ue.depsTail=e,ue.deps===e&&(ue.deps=i)}return e}trigger(t){this.version++,Qr++,this.notify(t)}notify(t){Dl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Il()}}}function hf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)hf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ca=new WeakMap,Li=Symbol(""),Pa=Symbol(""),ts=Symbol("");function Ie(n,t,e){if(mn&&ue){let i=Ca.get(n);i||Ca.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Nl),r.map=i,r.key=e),r.track()}}function Hn(n,t,e,i,r,s){const o=Ca.get(n);if(!o){Qr++;return}const a=l=>{l&&l.trigger()};if(Dl(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&Pl(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ts||!Rn(d)&&d>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(ts)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Li)),lr(n)&&a(o.get(Pa)));break;case"delete":l||(a(o.get(Li)),lr(n)&&a(o.get(Pa)));break;case"set":lr(n)&&a(o.get(Li));break}}Il()}function Hi(n){const t=ne(n);return t===n?t:(Ie(t,"iterate",ts),on(n)?t:t.map(_n))}function Eo(n){return Ie(n=ne(n),"iterate",ts),n}function Sn(n,t){return $n(n)?pr(Di(n)?_n(t):t):_n(t)}const fd={__proto__:null,[Symbol.iterator](){return zo(this,Symbol.iterator,n=>Sn(this,n))},concat(...n){return Hi(this).concat(...n.map(t=>Bt(t)?Hi(t):t))},entries(){return zo(this,"entries",n=>(n[1]=Sn(this,n[1]),n))},every(n,t){return Ln(this,"every",n,t,void 0,arguments)},filter(n,t){return Ln(this,"filter",n,t,e=>e.map(i=>Sn(this,i)),arguments)},find(n,t){return Ln(this,"find",n,t,e=>Sn(this,e),arguments)},findIndex(n,t){return Ln(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ln(this,"findLast",n,t,e=>Sn(this,e),arguments)},findLastIndex(n,t){return Ln(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ln(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ho(this,"includes",n)},indexOf(...n){return Ho(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return Ho(this,"lastIndexOf",n)},map(n,t){return Ln(this,"map",n,t,void 0,arguments)},pop(){return Cr(this,"pop")},push(...n){return Cr(this,"push",n)},reduce(n,...t){return _c(this,"reduce",n,t)},reduceRight(n,...t){return _c(this,"reduceRight",n,t)},shift(){return Cr(this,"shift")},some(n,t){return Ln(this,"some",n,t,void 0,arguments)},splice(...n){return Cr(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Cr(this,"unshift",n)},values(){return zo(this,"values",n=>Sn(this,n))}};function zo(n,t,e){const i=Eo(n),r=i[t]();return i!==n&&!on(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const hd=Array.prototype;function Ln(n,t,e,i,r,s){const o=Eo(n),a=o!==n&&!on(n),l=o[t];if(l!==hd[t]){const f=l.apply(n,s);return a?_n(f):f}let c=e;o!==n&&(a?c=function(f,d){return e.call(this,Sn(n,f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function _c(n,t,e,i){const r=Eo(n),s=r!==n&&!on(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Sn(n,c)),e.call(this,c,Sn(n,u),f,n)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,n)}));const l=r[t](o,...i);return a?Sn(n,l):l}function Ho(n,t,e){const i=ne(n);Ie(i,"iterate",ts);const r=i[t](...e);return(r===-1||r===!1)&&zl(e[0])?(e[0]=ne(e[0]),i[t](...e)):r}function Cr(n,t,e=[]){qn(),Dl();const i=ne(n)[t].apply(n,e);return Il(),Yn(),i}const dd=Rl("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Rn));function pd(n){Rn(n)||(n=String(n));const t=ne(this);return Ie(t,"has",n),t.hasOwnProperty(n)}class pf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?Td:vf:s?_f:gf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!r){let l;if(o&&(l=fd[e]))return l;if(e==="hasOwnProperty")return pd}const a=Reflect.get(t,e,Fe(t)?t:i);if((Rn(e)?df.has(e):dd(e))||(r||Ie(t,"get",e),s))return a;if(Fe(a)){const l=o&&Pl(e)?a:a.value;return r&&oe(l)?Da(l):l}return oe(a)?r?Da(a):Ol(a):a}}class mf extends pf{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Bt(t)&&Pl(e);if(!this._isShallow){const c=$n(s);if(!on(i)&&!$n(i)&&(s=ne(s),i=ne(i)),!o&&Fe(s)&&!Fe(i))return c||(s.value=i),!0}const a=o?Number(e)<t.length:ie(t,e),l=Reflect.set(t,e,i,Fe(t)?t:r);return t===ne(r)&&l&&(a?Tn(i,s)&&Hn(t,"set",e,i):Hn(t,"add",e,i)),l}deleteProperty(t,e){const i=ie(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Hn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Rn(e)||!df.has(e))&&Ie(t,"has",e),i}ownKeys(t){return Ie(t,"iterate",Bt(t)?"length":Li),Reflect.ownKeys(t)}}class md extends pf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const gd=new mf,_d=new md,vd=new mf(!0);const La=n=>n,_s=n=>Reflect.getPrototypeOf(n);function xd(n,t,e){return function(...i){const r=this.__v_raw,s=ne(r),o=lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?La:t?pr:_n;return!t&&Ie(s,"iterate",l?Pa:Li),Re(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function vs(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Md(n,t){const e={get(r){const s=this.__v_raw,o=ne(s),a=ne(r);n||(Tn(r,a)&&Ie(o,"get",r),Ie(o,"get",a));const{has:l}=_s(o),c=t?La:n?pr:_n;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ie(ne(r),"iterate",Li),r.size},has(r){const s=this.__v_raw,o=ne(s),a=ne(r);return n||(Tn(r,a)&&Ie(o,"has",r),Ie(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ne(a),c=t?La:n?pr:_n;return!n&&Ie(l,"iterate",Li),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Re(e,n?{add:vs("add"),set:vs("set"),delete:vs("delete"),clear:vs("clear")}:{add(r){const s=ne(this),o=_s(s),a=ne(r),l=!t&&!on(r)&&!$n(r)?a:r;return o.has.call(s,l)||Tn(r,l)&&o.has.call(s,r)||Tn(a,l)&&o.has.call(s,a)||(s.add(l),Hn(s,"add",l,l)),this},set(r,s){!t&&!on(s)&&!$n(s)&&(s=ne(s));const o=ne(this),{has:a,get:l}=_s(o);let c=a.call(o,r);c||(r=ne(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Tn(s,u)&&Hn(o,"set",r,s):Hn(o,"add",r,s),this},delete(r){const s=ne(this),{has:o,get:a}=_s(s);let l=o.call(s,r);l||(r=ne(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Hn(s,"delete",r,void 0),c},clear(){const r=ne(this),s=r.size!==0,o=r.clear();return s&&Hn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=xd(r,n,t)}),e}function Fl(n,t){const e=Md(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ie(e,r)&&r in i?e:i,r,s)}const Sd={get:Fl(!1,!1)},yd={get:Fl(!1,!0)},Ed={get:Fl(!0,!1)};const gf=new WeakMap,_f=new WeakMap,vf=new WeakMap,Td=new WeakMap;function bd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ol(n){return $n(n)?n:Bl(n,!1,gd,Sd,gf)}function Ad(n){return Bl(n,!1,vd,yd,_f)}function Da(n){return Bl(n,!0,_d,Ed,vf)}function Bl(n,t,e,i,r){if(!oe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=bd(jh(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function Di(n){return $n(n)?Di(n.__v_raw):!!(n&&n.__v_isReactive)}function $n(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function zl(n){return n?!!n.__v_raw:!1}function ne(n){const t=n&&n.__v_raw;return t?ne(t):n}function wd(n){return!ie(n,"__v_skip")&&Object.isExtensible(n)&&tf(n,"__v_skip",!0),n}const _n=n=>oe(n)?Ol(n):n,pr=n=>oe(n)?Da(n):n;function Fe(n){return n?n.__v_isRef===!0:!1}function Pr(n){return Rd(n,!1)}function Rd(n,t){return Fe(n)?n:new Cd(n,t)}class Cd{constructor(t,e){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ne(t),this._value=e?t:_n(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||on(t)||$n(t);t=i?t:ne(t),Tn(t,e)&&(this._rawValue=t,this._value=i?t:_n(t),this.dep.trigger())}}function Me(n){return Fe(n)?n.value:n}const Pd={get:(n,t,e)=>t==="__v_raw"?n:Me(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Fe(r)&&!Fe(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function xf(n){return Di(n)?n:new Proxy(n,Pd)}class Ld{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return af(this,!0),!0}get value(){const t=this.dep.track();return uf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Dd(n,t,e=!1){let i,r;return Gt(n)?i=n:(i=n.get,r=n.set),new Ld(i,r,e)}const xs={},no=new WeakMap;let Ti;function Id(n,t=!1,e=Ti){if(e){let i=no.get(e);i||no.set(e,i=[]),i.push(n)}}function Ud(n,t,e=fe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=g=>r?g:on(g)||r===!1||r===0?ai(g,1):ai(g);let u,f,d,p,v=!1,M=!1;if(Fe(n)?(f=()=>n.value,v=on(n)):Di(n)?(f=()=>c(n),v=!0):Bt(n)?(M=!0,v=n.some(g=>Di(g)||on(g)),f=()=>n.map(g=>{if(Fe(g))return g.value;if(Di(g))return c(g);if(Gt(g))return l?l(g,2):g()})):Gt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){qn();try{d()}finally{Yn()}}const g=Ti;Ti=u;try{return l?l(n,3,[p]):n(p)}finally{Ti=g}}:f=An,t&&r){const g=f,D=r===!0?1/0:r;f=()=>ai(g(),D)}const m=ld(),h=()=>{u.stop(),m&&m.active&&Cl(m.effects,u)};if(s&&t){const g=t;t=(...D)=>{const R=g(...D);return h(),R}}let w=M?new Array(n.length).fill(xs):xs;const T=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(t){const D=u.run();if(g||r||v||(M?D.some((R,P)=>Tn(R,w[P])):Tn(D,w))){d&&d();const R=Ti;Ti=u;try{const P=[D,w===xs?void 0:M&&w[0]===xs?[]:w,p];w=D,l?l(t,3,P):t(...P)}finally{Ti=R}}}else u.run()};return a&&a(T),u=new sf(f),u.scheduler=o?()=>o(T,!1):T,p=g=>Id(g,!1,u),d=u.onStop=()=>{const g=no.get(u);if(g){if(l)l(g,4);else for(const D of g)D();no.delete(u)}},t?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ai(n,t=1/0,e){if(t<=0||!oe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Fe(n))ai(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)ai(n[i],t,e);else if(ju(n)||lr(n))n.forEach(i=>{ai(i,t,e)});else if(Qu(n)){for(const i in n)ai(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ai(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(n,t,e,i){try{return i?n(...i):n()}catch(r){To(r,t,e)}}function vn(n,t,e,i){if(Gt(n)){const r=cs(n,t,e,i);return r&&Zu(r)&&r.catch(s=>{To(s,t,e)}),r}if(Bt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(vn(n[s],t,e,i));return r}}function To(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||fe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){qn(),cs(s,null,10,[n,l,c]),Yn();return}}Nd(n,e,r,i,o)}function Nd(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const Ve=[];let Mn=-1;const cr=[];let oi=null,nr=0;const Mf=Promise.resolve();let io=null;function Sf(n){const t=io||Mf;return n?t.then(this?n.bind(this):n):t}function Fd(n){let t=Mn+1,e=Ve.length;for(;t<e;){const i=t+e>>>1,r=Ve[i],s=es(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Hl(n){if(!(n.flags&1)){const t=es(n),e=Ve[Ve.length-1];!e||!(n.flags&2)&&t>=es(e)?Ve.push(n):Ve.splice(Fd(t),0,n),n.flags|=1,yf()}}function yf(){io||(io=Mf.then(Tf))}function Od(n){if(!Bt(n))oi&&n.id===-1?oi.splice(nr+1,0,n):n.flags&1||(cr.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)cr.push(n[t]);yf()}function vc(n,t,e=Mn+1){for(;e<Ve.length;e++){const i=Ve[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ve.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ef(n){if(cr.length){const t=[...new Set(cr)].sort((e,i)=>es(e)-es(i));if(cr.length=0,oi){for(let e=0;e<t.length;e++)oi.push(t[e]);return}for(oi=t,nr=0;nr<oi.length;nr++){const e=oi[nr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}oi=null,nr=0}}const es=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tf(n){try{for(Mn=0;Mn<Ve.length;Mn++){const t=Ve[Mn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),cs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Mn<Ve.length;Mn++){const t=Ve[Mn];t&&(t.flags&=-2)}Mn=-1,Ve.length=0,Ef(),io=null,(Ve.length||cr.length)&&Tf()}}let dn=null,bf=null;function ro(n){const t=dn;return dn=n,bf=n&&n.type.__scopeId||null,t}function Bd(n,t=dn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ao(-1);const s=ro(t),o=Ii.length;let a;try{a=n(...r)}finally{for(let l=Ii.length;l>o;l--)Zf();ro(s),i._d&&ao(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function mi(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qn(),vn(l,e,8,[n.el,a,n,t]),Yn())}}function zd(n,t){if(Ue){let e=Ue.provides;const i=Ue.parent&&Ue.parent.provides;i===e&&(e=Ue.provides=Object.create(i)),e[n]=t}}function Ys(n,t,e=!1){const i=Hp();if(i||ur){let r=ur?ur._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const Hd=Symbol.for("v-scx"),Vd=()=>Ys(Hd);function Vo(n,t,e){return Af(n,t,e)}function Af(n,t,e=fe){const{immediate:i,deep:r,flush:s,once:o}=e,a=Re({},e),l=t&&i||!t&&s!=="post";let c;if(rs){if(s==="sync"){const p=Vd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=An,p.resume=An,p.pause=An,p}}const u=Ue;a.call=(p,v,M)=>vn(p,u,v,M);let f=!1;s==="post"?a.scheduler=p=>{$e(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():Hl(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Ud(n,t,a);return rs&&(c?c.push(d):l&&d()),d}function Gd(n,t,e){const i=this.proxy,r=_e(n)?n.includes(".")?wf(i,n):()=>i[n]:n.bind(i,i);let s;Gt(t)?s=t:(s=t.handler,e=t);const o=us(this),a=Af(r,s.bind(i),e);return o(),a}function wf(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const kd=Symbol("_vte"),bo=n=>n.__isTeleport,Go=Symbol("_leaveCb");function Wd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Kn){t=e;break}}return t}function Rf(n){if(!Gl(n))return bo(n.type)&&n.children?Wd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function Vl(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Vl(bo(e.type)&&Rf(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Xd(n,t){return Gt(n)?Re({name:n.name},t,{setup:n}):n}function Cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const so=new WeakMap;function Wr(n,t,e,i,r=!1){if(Bt(n)){n.forEach((M,m)=>Wr(M,t&&(Bt(t)?t[m]:t),e,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wr(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Xl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState,d=ne(f),p=f===fe?Ku:M=>xc(u,M)?!1:ie(d,M),v=(M,m)=>!(m&&xc(u,m));if(c!=null&&c!==l){if(Mc(t),_e(c))u[c]=null,p(c)&&(f[c]=null);else if(Fe(c)){const M=t;v(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(Gt(l))cs(l,a,12,[o,u]);else{const M=_e(l),m=Fe(l);if(M||m){const h=()=>{if(n.f){const w=M?p(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)Bt(w)&&Cl(w,s);else if(Bt(w))w.includes(s)||w.push(s);else if(M)u[l]=[s],p(l)&&(f[l]=u[l]);else{const T=[s];v(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else M?(u[l]=o,p(l)&&(f[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{h(),so.delete(n)};w.id=-1,so.set(n,w),$e(w,e)}else Mc(n),h()}}}function Mc(n){const t=so.get(n);t&&(t.flags|=8,so.delete(n))}So().requestIdleCallback;So().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,Gl=n=>n.type.__isKeepAlive;function qd(n,t){Pf(n,"a",t)}function Yd(n,t){Pf(n,"da",t)}function Pf(n,t,e=Ue){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ao(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Gl(r.parent.vnode)&&$d(i,t,e,r),r=r.parent}}function $d(n,t,e,i){const r=Ao(t,n,i,!0);If(()=>{Cl(i[t],r)},e)}function Ao(n,t,e=Ue,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{qn();const a=us(e),l=vn(t,e,n,o);return a(),Yn(),l});return i?r.unshift(s):r.push(s),s}}const Zn=n=>(t,e=Ue)=>{(!rs||n==="sp")&&Ao(n,(...i)=>t(...i),e)},Kd=Zn("bm"),Lf=Zn("m"),jd=Zn("bu"),Zd=Zn("u"),Df=Zn("bum"),If=Zn("um"),Jd=Zn("sp"),Qd=Zn("rtg"),tp=Zn("rtc");function ep(n,t=Ue){Ao("ec",n,t)}const np="components";function ip(n,t){return sp(np,n,!0,t)||n}const rp=Symbol.for("v-ndc");function sp(n,t,e=!0,i=!1){const r=dn||Ue;if(r){const s=r.type;{const a=Xp(s,!1);if(a&&(a===t||a===Ge(t)||a===Mo(Ge(t))))return s}const o=Sc(r[n]||s[n],t)||Sc(r.appContext[n],t);return!o&&i?s:o}}function Sc(n,t){return n&&(n[t]||n[Ge(t)]||n[Mo(Ge(t))])}function gi(n,t,e,i){let r;const s=e,o=Bt(n);if(o||_e(n)){const a=o&&Di(n);let l=!1,c=!1;a&&(l=!on(n),c=$n(n),n=Eo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=t(l?c?pr(_n(n[u])):_n(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(oe(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}const Ia=n=>n?th(n)?Xl(n):Ia(n.parent):null,qr=Re(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ia(n.parent),$root:n=>Ia(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Nf(n),$forceUpdate:n=>n.f||(n.f=()=>{Hl(n.update)}),$nextTick:n=>n.n||(n.n=Sf.bind(n.proxy)),$watch:n=>Gd.bind(n)}),ko=(n,t)=>n!==fe&&!n.__isScriptSetup&&ie(n,t),op={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(ko(i,t))return o[t]=1,i[t];if(r!==fe&&ie(r,t))return o[t]=2,r[t];if(ie(s,t))return o[t]=3,s[t];if(e!==fe&&ie(e,t))return o[t]=4,e[t];Ua&&(o[t]=0)}}const c=qr[t];let u,f;if(c)return t==="$attrs"&&Ie(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==fe&&ie(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ie(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return ko(r,t)?(r[t]=e,!0):i!==fe&&ie(i,t)?(i[t]=e,!0):ie(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==fe&&a[0]!=="$"&&ie(n,a)||ko(t,a)||ie(s,a)||ie(i,a)||ie(qr,a)||ie(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ie(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function yc(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ua=!0;function ap(n){const t=Nf(n),e=n.proxy,i=n.ctx;Ua=!1,t.beforeCreate&&Ec(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:M,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:T,unmounted:g,render:D,renderTracked:R,renderTriggered:P,errorCaptured:O,serverPrefetch:b,expose:E,inheritAttrs:U,components:tt,directives:K,filters:rt}=t;if(c&&lp(c,i,null),o)for(const Q in o){const H=o[Q];Gt(H)&&(i[Q]=H.bind(e))}if(r){const Q=r.call(e,e);oe(Q)&&(n.data=Ol(Q))}if(Ua=!0,s)for(const Q in s){const H=s[Q],dt=Gt(H)?H.bind(e,e):Gt(H.get)?H.get.bind(e,e):An,St=!Gt(H)&&Gt(H.set)?H.set.bind(e):An,bt=ir({get:dt,set:St});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>bt.value,set:It=>bt.value=It})}if(a)for(const Q in a)Uf(a[Q],i,e,Q);if(l){const Q=Gt(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(H=>{zd(H,Q[H])})}u&&Ec(u,n,"c");function J(Q,H){Bt(H)?H.forEach(dt=>Q(dt.bind(e))):H&&Q(H.bind(e))}if(J(Kd,f),J(Lf,d),J(jd,p),J(Zd,v),J(qd,M),J(Yd,m),J(ep,O),J(tp,R),J(Qd,P),J(Df,w),J(If,g),J(Jd,b),Bt(E))if(E.length){const Q=n.exposed||(n.exposed={});E.forEach(H=>{Object.defineProperty(Q,H,{get:()=>e[H],set:dt=>e[H]=dt,enumerable:!0})})}else n.exposed||(n.exposed={});D&&n.render===An&&(n.render=D),U!=null&&(n.inheritAttrs=U),tt&&(n.components=tt),K&&(n.directives=K),b&&Cf(n)}function lp(n,t,e=An){Bt(n)&&(n=Na(n));for(const i in n){const r=n[i];let s;oe(r)?"default"in r?s=Ys(r.from||i,r.default,!0):s=Ys(r.from||i):s=Ys(r),Fe(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Ec(n,t,e){vn(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Uf(n,t,e,i){let r=i.includes(".")?wf(e,i):()=>e[i];if(_e(n)){const s=t[n];Gt(s)&&Vo(r,s)}else if(Gt(n))Vo(r,n.bind(e));else if(oe(n))if(Bt(n))n.forEach(s=>Uf(s,t,e,i));else{const s=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(s)&&Vo(r,s,n)}}function Nf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>oo(l,c,o,!0)),oo(l,t,o)),oe(t)&&s.set(t,l),l}function oo(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&oo(n,s,e,!0),r&&r.forEach(o=>oo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=cp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const cp={data:Tc,props:bc,emits:bc,methods:Br,computed:Br,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Br,directives:Br,watch:fp,provide:Tc,inject:up};function Tc(n,t){return t?n?function(){return Re(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function up(n,t){return Br(Na(n),Na(t))}function Na(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Be(n,t){return n?[...new Set([].concat(n,t))]:t}function Br(n,t){return n?Re(Object.create(null),n,t):t}function bc(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Re(Object.create(null),yc(n),yc(t??{})):t}function fp(n,t){if(!n)return t;if(!t)return n;const e=Re(Object.create(null),n);for(const i in t)e[i]=Be(n[i],t[i]);return e}function Ff(){return{app:null,config:{isNativeTag:Ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function dp(n,t){return function(i,r=null){Gt(i)||(i=Re({},i)),r!=null&&!oe(r)&&(r=null);const s=Ff(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:hp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Yp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Gt(u.install)?(o.add(u),u.install(c,...f)):Gt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Jt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Xl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ur;ur=c;try{return u()}finally{ur=f}}};return c}}let ur=null;const pp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Ge(t)}Modifiers`]||n[`${Oi(t)}Modifiers`];function mp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||fe;let r=e;const s=t.startsWith("update:"),o=s&&pp(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>_e(u)?u.trim():u)),o.number&&(r=e.map(Qh)));let a,l=i[a=No(t)]||i[a=No(Ge(t))];!l&&s&&(l=i[a=No(Oi(t))]),l&&vn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vn(c,n,6,r)}}const gp=new WeakMap;function Of(n,t,e=!1){const i=e?gp:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Gt(n)){const l=c=>{const u=Of(c,t,!0);u&&(a=!0,Re(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(oe(n)&&i.set(n,null),null):(Bt(s)?s.forEach(l=>o[l]=null):Re(o,s),oe(n)&&i.set(n,o),o)}function wo(n,t){return!n||!_o(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(n,t[0].toLowerCase()+t.slice(1))||ie(n,Oi(t))||ie(n,t))}function Ac(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:v,inheritAttrs:M}=n,m=ro(n);let h,w;try{if(e.shapeFlag&4){const g=r||i,D=g;h=yn(c.call(D,g,u,f,p,d,v)),w=a}else{const g=t;h=yn(g.length>1?g(f,{attrs:a,slots:o,emit:l}):g(f,null)),w=t.props?a:_p(a)}}catch(g){Ii.length=0,To(g,n,1),h=Jt(Kn)}let T=h;if(w&&M!==!1){const g=Object.keys(w),{shapeFlag:D}=T;g.length&&D&7&&(s&&g.some(vo)&&(w=vp(w,s)),T=mr(T,w,!1,!0))}if(e.dirs&&(T=mr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition){const g=bo(T.type)&&Rf(T)||T;Vl(g,e.transition)}return h=T,ro(m),h}const _p=n=>{let t;for(const e in n)(e==="class"||e==="style"||_o(e))&&((t||(t={}))[e]=n[e]);return t},vp=(n,t)=>{const e={};for(const i in n)(!vo(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function xp(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?wc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Bf(o,i,d)&&!wo(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wc(i,o,c):!0:!!o;return!1}function wc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Bf(t,n,s)&&!wo(e,s))return!0}return!1}function Bf(n,t,e){const i=n[e],r=t[e];return e==="style"&&oe(i)&&oe(r)?!Ll(i,r):i!==r}function Mp({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const zf={},Hf=()=>Object.create(zf),Vf=n=>Object.getPrototypeOf(n)===zf;function Sp(n,t,e,i=!1){const r={},s=Hf();n.propsDefaults=Object.create(null),Gf(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Ad(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function yp(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ne(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(wo(n.emitsOptions,d))continue;const p=t[d];if(l)if(ie(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const v=Ge(d);r[v]=Fa(l,a,v,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Gf(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!ie(t,f)&&((u=Oi(f))===f||!ie(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Fa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!ie(t,f))&&(delete s[f],c=!0)}c&&Hn(n.attrs,"set","")}function Gf(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Vr(l))continue;const c=t[l];let u;r&&ie(r,u=Ge(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ne(e),c=a||fe;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Fa(r,l,f,c[f],n,!ie(c,f))}}return o}function Fa(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Gt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=us(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Oi(e))&&(i=!0))}return i}const Ep=new WeakMap;function kf(n,t,e=!1){const i=e?Ep:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Gt(n)){const u=f=>{l=!0;const[d,p]=kf(f,t,!0);Re(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return oe(n)&&i.set(n,ar),ar;if(Bt(s))for(let u=0;u<s.length;u++){const f=Ge(s[u]);Rc(f)&&(o[f]=fe)}else if(s)for(const u in s){const f=Ge(u);if(Rc(f)){const d=s[u],p=o[f]=Bt(d)||Gt(d)?{type:d}:Re({},d),v=p.type;let M=!1,m=!0;if(Bt(v))for(let h=0;h<v.length;++h){const w=v[h],T=Gt(w)&&w.name;if(T==="Boolean"){M=!0;break}else T==="String"&&(m=!1)}else M=Gt(v)&&v.name==="Boolean";p[0]=M,p[1]=m,(M||ie(p,"default"))&&a.push(f)}}const c=[o,a];return oe(n)&&i.set(n,c),c}function Rc(n){return n[0]!=="$"&&!Vr(n)}const kl=n=>n==="_"||n==="_ctx"||n==="$stable",Wl=n=>Bt(n)?n.map(yn):[yn(n)],Tp=(n,t,e)=>{if(t._n)return t;const i=Bd((...r)=>Wl(t(...r)),e);return i._c=!1,i},Wf=(n,t,e)=>{const i=n._ctx;for(const r in n){if(kl(r))continue;const s=n[r];if(Gt(s))t[r]=Tp(r,s,i);else if(s!=null){const o=Wl(s);t[r]=()=>o}}},Xf=(n,t)=>{const e=Wl(t);n.slots.default=()=>e},qf=(n,t,e)=>{for(const i in t)(e||!kl(i))&&(n[i]=t[i])},bp=(n,t,e)=>{const i=n.slots=Hf();if(n.vnode.shapeFlag&32){const r=t._;r?(qf(i,t,e),e&&tf(i,"_",r,!0)):Wf(t,i)}else t&&Xf(n,t)},Ap=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=fe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:qf(r,t,e):(s=!t.$stable,Wf(t,r)),o=t}else t&&(Xf(n,t),o={default:1});if(s)for(const a in r)!kl(a)&&o[a]==null&&delete r[a]},$e=Lp;function wp(n){return Rp(n)}function Rp(n,t){const e=So();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=An,insertStaticContent:v}=n,M=(A,L,S,nt=null,$=null,q=null,j=void 0,st=null,Y=!!L.dynamicChildren)=>{if(A===L)return;A&&!Lr(A,L)&&(nt=mt(A),It(A,$,q,!0),A=null),L.patchFlag===-2&&(Y=!1,L.dynamicChildren=null);const{type:x,ref:_,shapeFlag:C}=L;switch(x){case Ro:m(A,L,S,nt);break;case Kn:h(A,L,S,nt);break;case $s:A==null&&w(L,S,nt,j);break;case De:tt(A,L,S,nt,$,q,j,st,Y);break;default:C&1?D(A,L,S,nt,$,q,j,st,Y):C&6?K(A,L,S,nt,$,q,j,st,Y):(C&64||C&128)&&x.process(A,L,S,nt,$,q,j,st,Y,Ht)}_!=null&&$?Wr(_,A&&A.ref,q,L||A,!L):_==null&&A&&A.ref!=null&&Wr(A.ref,null,q,A,!0)},m=(A,L,S,nt)=>{if(A==null)i(L.el=a(L.children),S,nt);else{const $=L.el=A.el;L.children!==A.children&&c($,L.children)}},h=(A,L,S,nt)=>{A==null?i(L.el=l(L.children||""),S,nt):L.el=A.el},w=(A,L,S,nt)=>{[A.el,A.anchor]=v(A.children,L,S,nt,A.el,A.anchor)},T=({el:A,anchor:L},S,nt)=>{let $;for(;A&&A!==L;)$=d(A),i(A,S,nt),A=$;i(L,S,nt)},g=({el:A,anchor:L})=>{let S;for(;A&&A!==L;)S=d(A),r(A),A=S;r(L)},D=(A,L,S,nt,$,q,j,st,Y)=>{if(L.type==="svg"?j="svg":L.type==="math"&&(j="mathml"),A==null)R(L,S,nt,$,q,j,st,Y);else{const x=A.el&&A.el._isVueCE?A.el:null;try{x&&x._beginPatch(),b(A,L,$,q,j,st,Y)}finally{x&&x._endPatch()}}},R=(A,L,S,nt,$,q,j,st)=>{let Y,x;const{props:_,shapeFlag:C,transition:z,dirs:k}=A;if(Y=A.el=o(A.type,q,_&&_.is,_),C&8?u(Y,A.children):C&16&&O(A.children,Y,null,nt,$,Wo(A,q),j,st),k&&mi(A,null,nt,"created"),P(Y,A,A.scopeId,j,nt),_){for(const ht in _)ht!=="value"&&!Vr(ht)&&s(Y,ht,null,_[ht],q,nt);"value"in _&&s(Y,"value",null,_.value,q),(x=_.onVnodeBeforeMount)&&xn(x,nt,A)}k&&mi(A,null,nt,"beforeMount");const G=Cp($,z);G&&z.beforeEnter(Y),i(Y,L,S),((x=_&&_.onVnodeMounted)||G||k)&&$e(()=>{try{x&&xn(x,nt,A),G&&z.enter(Y),k&&mi(A,null,nt,"mounted")}finally{}},$)},P=(A,L,S,nt,$)=>{if(S&&p(A,S),nt)for(let q=0;q<nt.length;q++)p(A,nt[q]);if($){let q=$.subTree;if(L===q||jf(q.type)&&(q.ssContent===L||q.ssFallback===L)){const j=$.vnode;P(A,j,j.scopeId,j.slotScopeIds,$.parent)}}},O=(A,L,S,nt,$,q,j,st,Y=0)=>{for(let x=Y;x<A.length;x++){const _=A[x]=st?zn(A[x]):yn(A[x]);M(null,_,L,S,nt,$,q,j,st)}},b=(A,L,S,nt,$,q,j)=>{const st=L.el=A.el;let{patchFlag:Y,dynamicChildren:x,dirs:_}=L;Y|=A.patchFlag&16;const C=A.props||fe,z=L.props||fe;let k;if(S&&_i(S,!1),(k=z.onVnodeBeforeUpdate)&&xn(k,S,L,A),_&&mi(L,A,S,"beforeUpdate"),S&&_i(S,!0),x&&(!A.dynamicChildren||A.dynamicChildren.length!==x.length)&&(Y=0,j=!1,x=null),(C.innerHTML&&z.innerHTML==null||C.textContent&&z.textContent==null)&&u(st,""),x?E(A.dynamicChildren,x,st,S,nt,Wo(L,$),q):j||H(A,L,st,null,S,nt,Wo(L,$),q,!1),Y>0){if(Y&16)U(st,C,z,S,$);else if(Y&2&&C.class!==z.class&&s(st,"class",null,z.class,$),Y&4&&s(st,"style",C.style,z.style,$),Y&8){const G=L.dynamicProps;for(let ht=0;ht<G.length;ht++){const at=G[ht],ft=C[at],Pt=z[at];(Pt!==ft||at==="value")&&s(st,at,ft,Pt,$,S)}}Y&1&&A.children!==L.children&&u(st,L.children)}else!j&&x==null&&U(st,C,z,S,$);((k=z.onVnodeUpdated)||_)&&$e(()=>{k&&xn(k,S,L,A),_&&mi(L,A,S,"updated")},nt)},E=(A,L,S,nt,$,q,j)=>{for(let st=0;st<L.length;st++){const Y=A[st],x=L[st],_=Y.el&&(Y.type===De||!Lr(Y,x)||Y.shapeFlag&198)?f(Y.el):S;M(Y,x,_,null,nt,$,q,j,!0)}},U=(A,L,S,nt,$)=>{if(L!==S){if(L!==fe)for(const q in L)!Vr(q)&&!(q in S)&&s(A,q,L[q],null,$,nt);for(const q in S){if(Vr(q))continue;const j=S[q],st=L[q];j!==st&&q!=="value"&&s(A,q,st,j,$,nt)}"value"in S&&s(A,"value",L.value,S.value,$)}},tt=(A,L,S,nt,$,q,j,st,Y)=>{const x=L.el=A?A.el:a(""),_=L.anchor=A?A.anchor:a("");let{patchFlag:C,dynamicChildren:z,slotScopeIds:k}=L;k&&(st=st?st.concat(k):k),A==null?(i(x,S,nt),i(_,S,nt),O(L.children||[],S,_,$,q,j,st,Y)):C>0&&C&64&&z&&A.dynamicChildren&&A.dynamicChildren.length===z.length?(E(A.dynamicChildren,z,S,$,q,j,st),(L.key!=null||$&&L===$.subTree)&&Yf(A,L,!0)):H(A,L,S,_,$,q,j,st,Y)},K=(A,L,S,nt,$,q,j,st,Y)=>{L.slotScopeIds=st,A==null?L.shapeFlag&512?$.ctx.activate(L,S,nt,j,Y):rt(L,S,nt,$,q,j,Y):ot(A,L,Y)},rt=(A,L,S,nt,$,q,j)=>{const st=A.component=zp(A,nt,$);if(Gl(A)&&(st.ctx.renderer=Ht),Vp(st,!1,j),st.asyncDep){if($&&$.registerDep(st,J,j),!A.el){const Y=st.subTree=Jt(Kn);h(null,Y,L,S),A.placeholder=Y.el}}else J(st,A,L,S,$,q,j)},ot=(A,L,S)=>{const nt=L.component=A.component;if(xp(A,L,S))if(nt.asyncDep&&!nt.asyncResolved){Q(nt,L,S);return}else nt.next=L,nt.update();else L.el=A.el,nt.vnode=L},J=(A,L,S,nt,$,q,j)=>{const st=()=>{if(A.isMounted){let{next:C,bu:z,u:k,parent:G,vnode:ht}=A;{const _t=$f(A);if(_t){C&&(C.el=ht.el,Q(A,C,j)),_t.asyncDep.then(()=>{$e(()=>{A.isUnmounted||x()},$)});return}}let at=C,ft;_i(A,!1),C?(C.el=ht.el,Q(A,C,j)):C=ht,z&&Fo(z),(ft=C.props&&C.props.onVnodeBeforeUpdate)&&xn(ft,G,C,ht),_i(A,!0);const Pt=Ac(A),lt=A.subTree;A.subTree=Pt,M(lt,Pt,f(lt.el),mt(lt),A,$,q),C.el=Pt.el,at===null&&Mp(A,Pt.el),k&&$e(k,$),(ft=C.props&&C.props.onVnodeUpdated)&&$e(()=>xn(ft,G,C,ht),$)}else{let C;const{el:z,props:k}=L,{bm:G,m:ht,parent:at,root:ft,type:Pt}=A,lt=Xr(L);_i(A,!1),G&&Fo(G),!lt&&(C=k&&k.onVnodeBeforeMount)&&xn(C,at,L),_i(A,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(Pt,A.parent?A.parent.type:void 0);const _t=A.subTree=Ac(A);M(null,_t,S,nt,A,$,q),L.el=_t.el}if(ht&&$e(ht,$),!lt&&(C=k&&k.onVnodeMounted)){const _t=L;$e(()=>xn(C,at,_t),$)}(L.shapeFlag&256||at&&Xr(at.vnode)&&at.vnode.shapeFlag&256)&&A.a&&$e(A.a,$),A.isMounted=!0,L=S=nt=null}};A.scope.on();const Y=A.effect=new sf(st);A.scope.off();const x=A.update=Y.run.bind(Y),_=A.job=Y.runIfDirty.bind(Y);_.i=A,_.id=A.uid,Y.scheduler=()=>Hl(_),_i(A,!0),x()},Q=(A,L,S)=>{L.component=A;const nt=A.vnode.props;A.vnode=L,A.next=null,yp(A,L.props,nt,S),Ap(A,L.children,S),qn(),vc(A),Yn()},H=(A,L,S,nt,$,q,j,st,Y=!1)=>{const x=A&&A.children,_=A?A.shapeFlag:0,C=L.children,{patchFlag:z,shapeFlag:k}=L;if(z>0){if(z&128){St(x,C,S,nt,$,q,j,st,Y);return}else if(z&256){dt(x,C,S,nt,$,q,j,st,Y);return}}k&8?(_&16&&Tt(x,$,q),C!==x&&u(S,C)):_&16?k&16?St(x,C,S,nt,$,q,j,st,Y):Tt(x,$,q,!0):(_&8&&u(S,""),k&16&&O(C,S,nt,$,q,j,st,Y))},dt=(A,L,S,nt,$,q,j,st,Y)=>{A=A||ar,L=L||ar;const x=A.length,_=L.length,C=Math.min(x,_);let z;for(z=0;z<C;z++){const k=L[z]=Y?zn(L[z]):yn(L[z]);M(A[z],k,S,null,$,q,j,st,Y)}x>_?Tt(A,$,q,!0,!1,C):O(L,S,nt,$,q,j,st,Y,C)},St=(A,L,S,nt,$,q,j,st,Y)=>{let x=0;const _=L.length;let C=A.length-1,z=_-1;for(;x<=C&&x<=z;){const k=A[x],G=L[x]=Y?zn(L[x]):yn(L[x]);if(Lr(k,G))M(k,G,S,null,$,q,j,st,Y);else break;x++}for(;x<=C&&x<=z;){const k=A[C],G=L[z]=Y?zn(L[z]):yn(L[z]);if(Lr(k,G))M(k,G,S,null,$,q,j,st,Y);else break;C--,z--}if(x>C){if(x<=z){const k=z+1,G=k<_?L[k].el:nt;for(;x<=z;)M(null,L[x]=Y?zn(L[x]):yn(L[x]),S,G,$,q,j,st,Y),x++}}else if(x>z)for(;x<=C;)It(A[x],$,q,!0),x++;else{const k=x,G=x,ht=new Map;for(x=G;x<=z;x++){const pt=L[x]=Y?zn(L[x]):yn(L[x]);pt.key!=null&&ht.set(pt.key,x)}let at,ft=0;const Pt=z-G+1;let lt=!1,_t=0;const wt=new Array(Pt);for(x=0;x<Pt;x++)wt[x]=0;for(x=k;x<=C;x++){const pt=A[x];if(ft>=Pt){It(pt,$,q,!0);continue}let Ft;if(pt.key!=null)Ft=ht.get(pt.key);else for(at=G;at<=z;at++)if(wt[at-G]===0&&Lr(pt,L[at])){Ft=at;break}Ft===void 0?It(pt,$,q,!0):(wt[Ft-G]=x+1,Ft>=_t?_t=Ft:lt=!0,M(pt,L[Ft],S,null,$,q,j,st,Y),ft++)}const Ut=lt?Pp(wt):ar;for(at=Ut.length-1,x=Pt-1;x>=0;x--){const pt=G+x,Ft=L[pt],Vt=L[pt+1],re=pt+1<_?Vt.el||Kf(Vt):nt;wt[x]===0?M(null,Ft,S,re,$,q,j,st,Y):lt&&(at<0||x!==Ut[at]?bt(Ft,S,re,2):at--)}}},bt=(A,L,S,nt,$=null)=>{const{el:q,type:j,transition:st,children:Y,shapeFlag:x}=A;if(x&6){bt(A.component.subTree,L,S,nt);return}if(x&128){A.suspense.move(L,S,nt);return}if(x&64){j.move(A,L,S,Ht);return}if(j===De){i(q,L,S);for(let C=0;C<Y.length;C++)bt(Y[C],L,S,nt);i(A.anchor,L,S);return}if(j===$s){T(A,L,S);return}if(nt!==2&&x&1&&st)if(nt===0)st.persisted&&!q[Go]?i(q,L,S):(st.beforeEnter(q),i(q,L,S),$e(()=>st.enter(q),$));else{const{leave:C,delayLeave:z,afterLeave:k}=st,G=()=>{A.ctx.isUnmounted?r(q):i(q,L,S)},ht=()=>{const at=q._isLeaving||!!q[Go];q._isLeaving&&q[Go](!0),st.persisted&&!at?G():C(q,()=>{G(),k&&k()})};z?z(q,G,ht):ht()}else i(q,L,S)},It=(A,L,S,nt=!1,$=!1)=>{const{type:q,props:j,ref:st,children:Y,dynamicChildren:x,shapeFlag:_,patchFlag:C,dirs:z,cacheIndex:k,memo:G}=A;if(C===-2&&($=!1),st!=null&&(qn(),Wr(st,null,S,A,!0),Yn()),k!=null&&(L.renderCache[k]=void 0),_&256){L.ctx.deactivate(A);return}const ht=_&1&&z,at=!Xr(A);let ft;if(at&&(ft=j&&j.onVnodeBeforeUnmount)&&xn(ft,L,A),_&6)ut(A.component,S,nt);else{if(_&128){A.suspense.unmount(S,nt);return}ht&&mi(A,null,L,"beforeUnmount"),_&64?A.type.remove(A,L,S,Ht,nt):x&&!x.hasOnce&&(q!==De||C>0&&C&64)?Tt(x,L,S,!1,!0):(q===De&&C&384||!$&&_&16)&&Tt(Y,L,S),nt&&Qt(A)}const Pt=G!=null&&k==null;(at&&(ft=j&&j.onVnodeUnmounted)||ht||Pt)&&$e(()=>{ft&&xn(ft,L,A),ht&&mi(A,null,L,"unmounted"),Pt&&(A.el=null)},S)},Qt=A=>{const{type:L,el:S,anchor:nt,transition:$}=A;if(L===De){et(S,nt);return}if(L===$s){g(A);return}const q=()=>{r(S),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(A.shapeFlag&1&&$&&!$.persisted){const{leave:j,delayLeave:st}=$,Y=()=>j(S,q);st?st(A.el,q,Y):Y()}else q()},et=(A,L)=>{let S;for(;A!==L;)S=d(A),r(A),A=S;r(L)},ut=(A,L,S)=>{const{bum:nt,scope:$,job:q,subTree:j,um:st,m:Y,a:x}=A;Cc(Y),Cc(x),nt&&Fo(nt),$.stop(),q&&(q.flags|=8,It(j,A,L,S)),st&&$e(st,L),$e(()=>{A.isUnmounted=!0},L)},Tt=(A,L,S,nt=!1,$=!1,q=0)=>{for(let j=q;j<A.length;j++)It(A[j],L,S,nt,$)},mt=A=>{if(A.shapeFlag&6)return mt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const L=d(A.anchor||A.el),S=L&&L[kd];return S?d(S):L};let Ct=!1;const Nt=(A,L,S)=>{let nt;A==null?L._vnode&&(It(L._vnode,null,null,!0),nt=L._vnode.component):M(L._vnode||null,A,L,null,null,null,S),L._vnode=A,Ct||(Ct=!0,vc(nt),Ef(),Ct=!1)},Ht={p:M,um:It,m:bt,r:Qt,mt:rt,mc:O,pc:H,pbc:E,n:mt,o:n};return{render:Nt,hydrate:void 0,createApp:dp(Nt)}}function Wo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function _i({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Cp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Yf(n,t,e=!1){const i=n.children,r=t.children;if(Bt(i)&&Bt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=zn(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Yf(o,a)),a.type===Ro&&(a.patchFlag===-1&&(a=r[s]=zn(a)),a.el=o.el),a.type===Kn&&!a.el&&(a.el=o.el)}}function Pp(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function $f(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$f(t)}function Cc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Kf(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Kf(t.subTree):null}const jf=n=>n.__isSuspense;function Lp(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):Od(n)}const De=Symbol.for("v-fgt"),Ro=Symbol.for("v-txt"),Kn=Symbol.for("v-cmt"),$s=Symbol.for("v-stc"),Ii=[];let en=null;function Ae(n=!1){Ii.push(en=n?null:[])}function Zf(){Ii.pop(),en=Ii[Ii.length-1]||null}let ns=1;function ao(n,t=!1){ns+=n,n<0&&en&&t&&(en.hasOnce=!0)}function Jf(n){return n.dynamicChildren=ns>0?en||ar:null,Zf(),ns>0&&en&&en.push(n),n}function Ye(n,t,e,i,r,s){return Jf(V(n,t,e,i,r,s,!0))}function Oa(n,t,e,i,r){return Jf(Jt(n,t,e,i,r,!0))}function lo(n){return n?n.__v_isVNode===!0:!1}function Lr(n,t){return n.type===t.type&&n.key===t.key}const Qf=({key:n})=>n??null,Ks=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?_e(n)||Fe(n)||Gt(n)?{i:dn,r:n,k:t,f:!!e}:n:null);function V(n,t=null,e=null,i=0,r=null,s=n===De?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Qf(t),ref:t&&Ks(t),scopeId:bf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return a?(co(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=_e(e)?8:16),ns>0&&!o&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const Jt=Dp;function Dp(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===rp)&&(n=Kn),lo(n)){const a=mr(n,t,!0);return e&&co(a,e),ns>0&&!s&&en&&(a.shapeFlag&6?en[en.indexOf(n)]=a:en.push(a)),a.patchFlag=-2,a}if(qp(n)&&(n=n.__vccOpts),t){t=Ip(t);let{class:a,style:l}=t;a&&!_e(a)&&(t.class=yo(a)),oe(l)&&(zl(l)&&!Bt(l)&&(l=Re({},l)),t.style=Jr(l))}const o=_e(n)?1:jf(n)?128:bo(n)?64:oe(n)?4:Gt(n)?2:0;return V(n,t,e,i,r,o,s,!0)}function Ip(n){return n?zl(n)||Vf(n)?Re({},n):n:null}function mr(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?Fp(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Qf(c),ref:t&&t.ref?e&&s?Bt(s)?s.concat(Ks(t)):[s,Ks(t)]:Ks(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==De?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mr(n.ssContent),ssFallback:n.ssFallback&&mr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vl(u,l.clone(u)),u}function $t(n=" ",t=0){return Jt(Ro,null,n,t)}function Up(n,t){const e=Jt($s,null,n);return e.staticCount=t,e}function Np(n="",t=!1){return t?(Ae(),Oa(Kn,null,n)):Jt(Kn,null,n)}function yn(n){return n==null||typeof n=="boolean"?Jt(Kn):Bt(n)?Jt(De,null,n.slice()):lo(n)?zn(n):Jt(Ro,null,String(n))}function zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mr(n)}function co(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),co(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Vf(t)?t._ctx=dn:r===3&&dn&&(dn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Gt(t)){if(i&65){co(n,{default:t});return}t={default:t,_ctx:dn},e=32}else t=String(t),i&64?(e=16,t=[$t(t)]):e=8;n.children=t,n.shapeFlag|=e}function Fp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=yo([t.class,i.class]));else if(r==="style")t.style=Jr([t.style,i.style]);else if(_o(r)){const s=t[r],o=i[r];o&&s!==o&&!(Bt(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!vo(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function xn(n,t,e,i=null){vn(n,t,7,[e,i])}const Op=Ff();let Bp=0;function zp(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Op,s={uid:Bp++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(i,r),emitsOptions:Of(i,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=mp.bind(null,s),n.ce&&n.ce(s),s}let Ue=null;const Hp=()=>Ue||dn;let uo,is;{const n=So(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};uo=t("__VUE_INSTANCE_SETTERS__",e=>Ue=e),is=t("__VUE_SSR_SETTERS__",e=>rs=e)}const us=n=>{const t=Ue;return uo(n),n.scope.on(),()=>{n.scope.off(),uo(t)}},Pc=()=>{Ue&&Ue.scope.off(),uo(null)};function th(n){return n.vnode.shapeFlag&4}let rs=!1;function Vp(n,t=!1,e=!1){t&&is(t);const{props:i,children:r}=n.vnode,s=th(n);Sp(n,i,s,t),bp(n,r,e||t);const o=s?Gp(n,t):void 0;return t&&is(!1),o}function Gp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,op);const{setup:i}=e;if(i){qn();const r=n.setupContext=i.length>1?Wp(n):null,s=us(n),o=cs(i,n,0,[n.props,r]),a=Zu(o);if(Yn(),s(),(a||n.sp)&&!Xr(n)&&Cf(n),a){if(o.then(Pc,Pc),t)return o.then(l=>{is(!0);try{Lc(n,l,t)}finally{is(!1)}}).catch(l=>{To(l,n,0)});n.asyncDep=o}else Lc(n,o)}else eh(n)}function Lc(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:oe(t)&&(n.setupState=xf(t)),eh(n)}function eh(n,t,e){const i=n.type;n.render||(n.render=i.render||An);{const r=us(n);qn();try{ap(n)}finally{Yn(),r()}}}const kp={get(n,t){return Ie(n,"get",""),n[t]}};function Wp(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,kp),slots:n.slots,emit:n.emit,expose:t}}function Xl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xf(wd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in qr)return qr[e](n)},has(t,e){return e in t||e in qr}})):n.proxy}function Xp(n,t=!0){return Gt(n)?n.displayName||n.name:n.name||t&&n.__name}function qp(n){return Gt(n)&&"__vccOpts"in n}const ir=(n,t)=>Dd(n,t,rs);function Ba(n,t,e){try{ao(-1);const i=arguments.length;return i===2?oe(t)&&!Bt(t)?lo(t)?Jt(n,null,[t]):Jt(n,t):Jt(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&lo(e)&&(e=[e]),Jt(n,t,e))}finally{ao(1)}}const Yp="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let za;const Dc=typeof window<"u"&&window.trustedTypes;if(Dc)try{za=Dc.createPolicy("vue",{createHTML:n=>n})}catch{}const nh=za?n=>za.createHTML(n):n=>n,$p="http://www.w3.org/2000/svg",Kp="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,Ic=Bn&&Bn.createElement("template"),jp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Bn.createElementNS($p,n):t==="mathml"?Bn.createElementNS(Kp,n):e?Bn.createElement(n,{is:e}):Bn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Ic.innerHTML=nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ic.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Zp=Symbol("_vtc");function Jp(n,t,e){const i=n[Zp];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Uc=Symbol("_vod"),Qp=Symbol("_vsh"),tm=Symbol(""),em=/(?:^|;)\s*display\s*:/;function nm(n,t,e){const i=n.style,r=_e(e);let s=!1;if(e&&!r){if(t)if(_e(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&zr(i,a,"")}else for(const o in t)e[o]==null&&zr(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?rm(n,o,!_e(t)&&t?t[o]:void 0,a)||zr(i,o,a):zr(i,o,"")}}else if(r){if(t!==e){const o=i[tm];o&&(e+=";"+o),i.cssText=e,s=em.test(e)}}else t&&n.removeAttribute("style");Uc in n&&(n[Uc]=s?i.display:"",n[Qp]&&(i.display="none"))}const Nc=/\s*!important$/;function zr(n,t,e){if(Bt(e))e.forEach(i=>zr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=im(n,t);Nc.test(e)?n.setProperty(Oi(i),e.replace(Nc,""),"important"):n[i]=e}}const Fc=["Webkit","Moz","ms"],Xo={};function im(n,t){const e=Xo[t];if(e)return e;let i=Ge(t);if(i!=="filter"&&i in n)return Xo[t]=i;i=Mo(i);for(let r=0;r<Fc.length;r++){const s=Fc[r]+i;if(s in n)return Xo[t]=s}return t}function rm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&_e(i)&&e===i}const Oc="http://www.w3.org/1999/xlink";function Bc(n,t,e,i,r,s=sd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Oc,t.slice(6,t.length)):n.setAttributeNS(Oc,t,e):e==null||s&&!ef(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Rn(e)?String(e):e)}function zc(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?nh(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=ef(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function sm(n,t,e,i){n.addEventListener(t,e,i)}function om(n,t,e,i){n.removeEventListener(t,e,i)}const Hc=Symbol("_vei");function am(n,t,e,i,r=null){const s=n[Hc]||(n[Hc]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=um(t);if(i){const c=s[t]=dm(i,r);sm(n,a,c,l)}else o&&(om(n,a,o,l),s[t]=void 0)}}const lm=/(Once|Passive|Capture)$/,cm=/^on:?(?:Once|Passive|Capture)$/;function um(n){let t,e;for(;(e=n.match(lm))&&!cm.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Oi(n.slice(2)),t]}let qo=0;const fm=Promise.resolve(),hm=()=>qo||(fm.then(()=>qo=0),qo=Date.now());function dm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const r=e.value;if(Bt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&vn(c,t,5,a)}}else vn(r,t,5,[i])};return e.value=n,e.attached=hm(),e}const Vc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,pm=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Jp(n,i,o):t==="style"?nm(n,e,i):_o(t)?vo(t)||am(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mm(n,t,i,o))?(zc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Bc(n,t,i,o,s,t!=="value")):n._isVueCE&&(gm(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!_e(i)))?zc(n,Ge(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Bc(n,t,i,o))};function mm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Vc(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vc(t)&&_e(e)?!1:t in n}function gm(n,t){const e=n._def.props;if(!e)return!1;const i=Ge(t);return Array.isArray(e)?e.some(r=>Ge(r)===i):Object.keys(e).some(r=>Ge(r)===i)}const _m=Re({patchProp:pm},jp);let Gc;function vm(){return Gc||(Gc=wp(_m))}const xm=((...n)=>{const t=vm().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Sm(i);if(!r)return;const s=t._component;!Gt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,Mm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function Mm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sm(n){return _e(n)?document.querySelector(n):n}/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ms={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=({size:n,strokeWidth:t=2,absoluteStrokeWidth:e,color:i,iconNode:r,name:s,class:o,...a},{slots:l})=>Ba("svg",{...Ms,width:n||Ms.width,height:n||Ms.height,stroke:i||Ms.stroke,"stroke-width":e?Number(t)*24/Number(n):t,class:["lucide",`lucide-${ym(s??"icon")}`],...a},[...r.map(c=>Ba(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=(n,t)=>(e,{slots:i})=>Ba(Em,{...e,iconNode:t,name:n},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=Jn("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=Jn("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=Jn("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=Jn("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=Jn("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=Jn("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=Jn("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=Jn("MapPinIcon",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=Jn("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ql="171",Cm=0,Xc=1,Pm=2,ih=1,Lm=2,On=3,fi=0,ke=1,Vn=2,ci=0,fr=1,Ui=2,qc=3,Yc=4,Dm=5,wi=100,Im=101,Um=102,Nm=103,Fm=104,Om=200,Bm=201,zm=202,Hm=203,Ha=204,Va=205,Vm=206,Gm=207,km=208,Wm=209,Xm=210,qm=211,Ym=212,$m=213,Km=214,Ga=0,ka=1,Wa=2,gr=3,Xa=4,qa=5,Ya=6,$a=7,rh=0,jm=1,Zm=2,ui=0,Jm=1,Qm=2,tg=3,eg=4,ng=5,ig=6,rg=7,sh=300,_r=301,vr=302,Ka=303,ja=304,Co=306,Za=1e3,Ci=1001,Ja=1002,gn=1003,sg=1004,Ss=1005,bn=1006,$o=1007,Pi=1008,jn=1009,oh=1010,ah=1011,ss=1012,Yl=1013,Ni=1014,Gn=1015,fs=1016,$l=1017,Kl=1018,xr=1020,lh=35902,ch=1021,uh=1022,pn=1023,fh=1024,hh=1025,hr=1026,Mr=1027,dh=1028,jl=1029,ph=1030,Zl=1031,Jl=1033,js=33776,Zs=33777,Js=33778,Qs=33779,Qa=35840,tl=35841,el=35842,nl=35843,il=36196,rl=37492,sl=37496,ol=37808,al=37809,ll=37810,cl=37811,ul=37812,fl=37813,hl=37814,dl=37815,pl=37816,ml=37817,gl=37818,_l=37819,vl=37820,xl=37821,to=36492,Ml=36494,Sl=36495,mh=36283,yl=36284,El=36285,Tl=36286,og=3200,ag=3201,gh=0,lg=1,li="",Qe="srgb",Sr="srgb-linear",fo="linear",ae="srgb",Gi=7680,$c=519,cg=512,ug=513,fg=514,_h=515,hg=516,dg=517,pg=518,mg=519,Kc=35044,jc="300 es",kn=2e3,ho=2001;class Tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const Yr=Math.PI/180,os=180/Math.PI;function br(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function Ql(n,t){return(n%t+t)%t}function gg(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function _g(n,t,e){return n!==t?(e-n)/(t-n):0}function $r(n,t,e){return(1-e)*n+e*t}function vg(n,t,e,i){return $r(n,t,1-Math.exp(-e*i))}function xg(n,t=1){return t-Math.abs(Ql(n,t*2)-t)}function Mg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function yg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Eg(n,t){return n+Math.random()*(t-n)}function Tg(n){return n*(.5-Math.random())}function bg(n){n!==void 0&&(Zc=n);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ag(n){return n*Yr}function wg(n){return n*os}function Rg(n){return(n&n-1)===0&&n!==0}function Cg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lg(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),f=s((t-i)/2),d=o((t-i)/2),p=s((i-t)/2),v=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Kr={DEG2RAD:Yr,RAD2DEG:os,generateUUID:br,clamp:qt,euclideanModulo:Ql,mapLinear:gg,inverseLerp:_g,lerp:$r,damp:vg,pingpong:xg,smoothstep:Mg,smootherstep:Sg,randInt:yg,randFloat:Eg,randFloatSpread:Tg,seededRandom:bg,degToRad:Ag,radToDeg:wg,isPowerOfTwo:Rg,ceilPowerOfTwo:Cg,floorPowerOfTwo:Pg,setQuaternionFromProperEuler:Lg,normalize:ze,denormalize:rr};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,r,s,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],M=r[0],m=r[3],h=r[6],w=r[1],T=r[4],g=r[7],D=r[2],R=r[5],P=r[8];return s[0]=o*M+a*w+l*D,s[3]=o*m+a*T+l*R,s[6]=o*h+a*g+l*P,s[1]=c*M+u*w+f*D,s[4]=c*m+u*T+f*R,s[7]=c*h+u*g+f*P,s[2]=d*M+p*w+v*D,s[5]=d*m+p*T+v*R,s[8]=d*h+p*g+v*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=e*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=f*M,t[1]=(r*c-u*i)*M,t[2]=(a*i-r*o)*M,t[3]=d*M,t[4]=(u*e-r*l)*M,t[5]=(r*s-a*e)*M,t[6]=p*M,t[7]=(i*l-c*e)*M,t[8]=(o*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new Wt;function vh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dg(){const n=po("canvas");return n.style.display="block",n}const Jc={};function sr(n){n in Jc||(Jc[n]=!0,console.warn(n))}function Ig(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Ug(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ng(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fg(){const n={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?fo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sr]:{primaries:t,whitePoint:i,transfer:fo,toXYZ:Qc,fromXYZ:tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Qc,fromXYZ:tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),n}const Zt=Fg();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class Og{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=po("canvas")),ki.width=t.width,ki.height=t.height;const i=ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=po("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bg=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jo(r[o].image)):s.push(jo(r[o]))}else s=jo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Og.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zg=0;class Ke extends Tr{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=Ci,r=Ci,s=bn,o=Pi,a=pn,l=jn,c=Ke.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=br(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=sh;Ke.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],M=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,g=(p+1)/2,D=(h+1)/2,R=(u+d)/4,P=(f+M)/4,O=(v+m)/4;return T>g&&T>D?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=P/i):g>D?g<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),i=R/r,s=O/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=P/s,r=O/s),this.set(i,r,s,e),this}let w=Math.sqrt((m-v)*(m-v)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(f-M)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hg extends Tr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ke(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Hg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mh extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vg extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],M=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=M;return}if(f!==M||l!==d||c!==p||u!==v){let m=1-a;const h=l*d+c*p+u*v+f*M,w=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const D=Math.sqrt(T),R=Math.atan2(D,h*w);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}const g=a*w;if(l=l*m+d*g,c=c*m+p*g,u=u*m+v*g,f=f*m+M*g,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return t[e]=a*v+u*f+l*p-c*d,t[e+1]=l*v+u*d+c*f-a*p,t[e+2]=c*v+u*p+a*d-l*f,t[e+3]=u*v-a*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new I,eu=new hs;class ds{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),Es.subVectors(this.max,Dr),Wi.subVectors(t.a,Dr),Xi.subVectors(t.b,Dr),qi.subVectors(t.c,Dr),ti.subVectors(Xi,Wi),ei.subVectors(qi,Xi),vi.subVectors(Wi,qi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!Jo(e,Wi,Xi,qi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,Wi,Xi,qi,Es))?!1:(Ts.crossVectors(ti,ei),e=[Ts.x,Ts.y,Ts.z],Jo(e,Wi,Xi,qi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,ys=new ds,Wi=new I,Xi=new I,qi=new I,ti=new I,ei=new I,vi=new I,Dr=new I,Es=new I,Ts=new I,xi=new I;function Jo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xi.fromArray(n,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gg=new ds,Ir=new I,Qo=new I;class ps{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Gg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);const e=Ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ir,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(Qo)),this.expandByPoint(Ir.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new I,ta=new I,bs=new I,ni=new I,ea=new I,As=new I,na=new I;class tc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ta.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ta);const s=t.distanceTo(e)*.5,o=-this.direction.dot(bs),a=ni.dot(this.direction),l=-ni.dot(bs),c=ni.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const M=1/u;f*=M,d*=M,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ta).addScaledVector(bs,d),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,r,s){ea.subVectors(e,t),As.subVectors(i,t),na.crossVectors(ea,As);let o=this.direction.dot(na),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const l=a*this.direction.dot(As.crossVectors(ni,As));if(l<0)return null;const c=a*this.direction.dot(ea.cross(ni));if(c<0||l+c>o)return null;const u=-a*ni.dot(na);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,r,s,o,a,l,c,u,f,d,p,v,M,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,d,p,v,M,m)}set(t,e,i,r,s,o,a,l,c,u,f,d,p,v,M,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Yi.setFromMatrixColumn(t,0).length(),s=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*f,v=a*u,M=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+v*c,e[5]=d-M*c,e[9]=-a*l,e[2]=M-d*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,v=c*u,M=c*f;e[0]=d+M*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,v=c*u,M=c*f;e[0]=d-M*a,e[4]=-o*f,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=M-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*f,v=a*u,M=a*f;e[0]=l*u,e[4]=v*c-p,e[8]=d*c+M,e[1]=l*f,e[5]=M*c+d,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,v=a*l,M=a*c;e[0]=l*u,e[4]=M-d*f,e[8]=v*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+v,e[10]=d-M*f}else if(t.order==="XZY"){const d=o*l,p=o*c,v=a*l,M=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+M,e[5]=o*u,e[9]=p*f-v,e[2]=v*f-p,e[6]=a*u,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kg,t,Wg)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ii.crossVectors(i,Ze),ii.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ii.crossVectors(i,Ze)),ii.normalize(),ws.crossVectors(Ze,ii),r[0]=ii.x,r[4]=ws.x,r[8]=Ze.x,r[1]=ii.y,r[5]=ws.y,r[9]=Ze.y,r[2]=ii.z,r[6]=ws.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],M=i[6],m=i[10],h=i[14],w=i[3],T=i[7],g=i[11],D=i[15],R=r[0],P=r[4],O=r[8],b=r[12],E=r[1],U=r[5],tt=r[9],K=r[13],rt=r[2],ot=r[6],J=r[10],Q=r[14],H=r[3],dt=r[7],St=r[11],bt=r[15];return s[0]=o*R+a*E+l*rt+c*H,s[4]=o*P+a*U+l*ot+c*dt,s[8]=o*O+a*tt+l*J+c*St,s[12]=o*b+a*K+l*Q+c*bt,s[1]=u*R+f*E+d*rt+p*H,s[5]=u*P+f*U+d*ot+p*dt,s[9]=u*O+f*tt+d*J+p*St,s[13]=u*b+f*K+d*Q+p*bt,s[2]=v*R+M*E+m*rt+h*H,s[6]=v*P+M*U+m*ot+h*dt,s[10]=v*O+M*tt+m*J+h*St,s[14]=v*b+M*K+m*Q+h*bt,s[3]=w*R+T*E+g*rt+D*H,s[7]=w*P+T*U+g*ot+D*dt,s[11]=w*O+T*tt+g*J+D*St,s[15]=w*b+T*K+g*Q+D*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],v=t[3],M=t[7],m=t[11],h=t[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+M*(+e*l*p-e*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+e*c*f-e*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-e*l*f+e*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],v=t[12],M=t[13],m=t[14],h=t[15],w=f*m*c-M*d*c+M*l*p-a*m*p-f*l*h+a*d*h,T=v*d*c-u*m*c-v*l*p+o*m*p+u*l*h-o*d*h,g=u*M*c-v*f*c+v*a*p-o*M*p-u*a*h+o*f*h,D=v*f*l-u*M*l-v*a*d+o*M*d+u*a*m-o*f*m,R=e*w+i*T+r*g+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=w*P,t[1]=(M*d*s-f*m*s-M*r*p+i*m*p+f*r*h-i*d*h)*P,t[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*h+i*l*h)*P,t[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*P,t[4]=T*P,t[5]=(u*m*s-v*d*s+v*r*p-e*m*p-u*r*h+e*d*h)*P,t[6]=(v*l*s-o*m*s-v*r*c+e*m*c+o*r*h-e*l*h)*P,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*p+e*l*p)*P,t[8]=g*P,t[9]=(v*f*s-u*M*s-v*i*p+e*M*p+u*i*h-e*f*h)*P,t[10]=(o*M*s-v*a*s+v*i*c-e*M*c-o*i*h+e*a*h)*P,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*p-e*a*p)*P,t[12]=D*P,t[13]=(u*M*r-v*f*r+v*i*d-e*M*d-u*i*m+e*f*m)*P,t[14]=(v*a*r-o*M*r-v*i*l+e*M*l+o*i*m-e*a*m)*P,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,v=s*f,M=o*u,m=o*f,h=a*f,w=l*c,T=l*u,g=l*f,D=i.x,R=i.y,P=i.z;return r[0]=(1-(M+h))*D,r[1]=(p+g)*D,r[2]=(v-T)*D,r[3]=0,r[4]=(p-g)*R,r[5]=(1-(d+h))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(v+T)*P,r[9]=(m-w)*P,r[10]=(1-(d+M))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],un.copy(this);const c=1/s,u=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,e.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=kn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let p,v;if(a===kn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ho)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=kn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),d=(e+t)*c,p=(i+r)*u;let v,M;if(a===kn)v=(o+s)*f,M=-2*f;else if(a===ho)v=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yi=new I,un=new he,kg=new I(0,0,0),Wg=new I(1,1,1),ii=new I,ws=new I,Ze=new I,nu=new he,iu=new hs;class Cn{constructor(t=0,e=0,i=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xg=0;const ru=new I,$i=new hs,Un=new he,Rs=new I,Ur=new I,qg=new I,Yg=new hs,su=new I(1,0,0),ou=new I(0,1,0),au=new I(0,0,1),lu={type:"added"},$g={type:"removed"},Ki={type:"childadded",child:null},ia={type:"childremoved",child:null};class Te extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new I,e=new Cn,i=new hs,r=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new Wt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(su,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(su,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rs.copy(t):Rs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ur,Rs,this.up):Un.lookAt(Rs,Ur,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Un),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lu),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($g),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lu),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,qg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Yg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Te.DEFAULT_UP=new I(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new I,Nn=new I,ra=new I,Fn=new I,ji=new I,Zi=new I,cu=new I,sa=new I,oa=new I,aa=new I,la=new le,ca=new le,ua=new le;class hn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),fn.subVectors(t,e),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){fn.subVectors(r,e),Nn.subVectors(i,e),ra.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(Nn),l=fn.dot(ra),c=Nn.dot(Nn),u=Nn.dot(ra),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return la.setScalar(0),ca.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,i),ua.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(la,s.x),o.addScaledVector(ca,s.y),o.addScaledVector(ua,s.z),o}static isFrontFacing(t,e,i,r){return fn.subVectors(i,e),Nn.subVectors(t,e),fn.cross(Nn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),fn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,i),Zi.subVectors(s,i),sa.subVectors(t,i);const l=ji.dot(sa),c=Zi.dot(sa);if(l<=0&&c<=0)return e.copy(i);oa.subVectors(t,r);const u=ji.dot(oa),f=Zi.dot(oa);if(u>=0&&f<=u)return e.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ji,o);aa.subVectors(t,s);const p=ji.dot(aa),v=Zi.dot(aa);if(v>=0&&p<=v)return e.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Zi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return cu.subVectors(s,r),a=(f-u)/(f-u+(p-v)),e.copy(r).addScaledVector(cu,a);const h=1/(m+M+d);return o=M*h,a=d*h,e.copy(i).addScaledVector(ji,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function fa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=Ql(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=fa(o,s,t+1/3),this.g=fa(o,s,t),this.b=fa(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=yh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Zt.fromWorkingColorSpace(Le.copy(this),t),Math.round(qt(Le.r*255,0,255))*65536+Math.round(qt(Le.g*255,0,255))*256+Math.round(qt(Le.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Le.copy(this),e);const i=Le.r,r=Le.g,s=Le.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Qe){Zt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,r=Le.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Cs);const i=$r(ri.h,Cs.h,e),r=$r(ri.s,Cs.s,e),s=$r(ri.l,Cs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Kt;Kt.NAMES=yh;let Kg=0;class Bi extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=br(),this.name="",this.type="Material",this.blending=fr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Va,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ha&&(i.blendSrc=this.blendSrc),this.blendDst!==Va&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yr extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new I,Ps=new Dt;class wn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=rr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}}class Eh extends wn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Th extends wn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class We extends wn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let jg=0;const sn=new he,ha=new Te,Ji=new I,Je=new ds,Nr=new ds,Ee=new I;class Xe extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Th:Eh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Je.min,Nr.min),Je.expandByPoint(Ee),Ee.addVectors(Je.max,Nr.max),Je.expandByPoint(Ee)):(Je.expandByPoint(Nr.min),Je.expandByPoint(Nr.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ee.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),Ee.add(Ji)),r=Math.max(r,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new I,l[O]=new I;const c=new I,u=new I,f=new I,d=new Dt,p=new Dt,v=new Dt,M=new I,m=new I;function h(O,b,E){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(U),a[O].add(M),a[b].add(M),a[E].add(M),l[O].add(m),l[b].add(m),l[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,b=w.length;O<b;++O){const E=w[O],U=E.start,tt=E.count;for(let K=U,rt=U+tt;K<rt;K+=3)h(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const T=new I,g=new I,D=new I,R=new I;function P(O){D.fromBufferAttribute(r,O),R.copy(D);const b=a[O];T.copy(b),T.sub(D.multiplyScalar(D.dot(b))).normalize(),g.crossVectors(R,b);const U=g.dot(l[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,U)}for(let O=0,b=w.length;O<b;++O){const E=w[O],U=E.start,tt=E.count;for(let K=U,rt=U+tt;K<rt;K+=3)P(t.getX(K+0)),P(t.getX(K+1)),P(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new wn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new he,Mi=new tc,Ls=new ps,fu=new I,Ds=new I,Is=new I,Us=new I,da=new I,Ns=new I,hu=new I,Fs=new I;class Ne extends Te{constructor(t=new Xe,e=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(da.fromBufferAttribute(f,t),o?Ns.addScaledVector(da,u):Ns.addScaledVector(da.sub(e),u))}e.add(Ns)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(Ls.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ls,fu)===null||Mi.origin.distanceToSquared(fu)>(t.far-t.near)**2))&&(uu.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(uu),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=d.length;v<M;v++){const m=d[v],h=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=w,D=T;g<D;g+=3){const R=a.getX(g),P=a.getX(g+1),O=a.getX(g+2);r=Os(this,h,t,i,c,u,f,R,P,O),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=v,h=M;m<h;m+=3){const w=a.getX(m),T=a.getX(m+1),g=a.getX(m+2);r=Os(this,o,t,i,c,u,f,w,T,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=d.length;v<M;v++){const m=d[v],h=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=w,D=T;g<D;g+=3){const R=g,P=g+1,O=g+2;r=Os(this,h,t,i,c,u,f,R,P,O),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,h=M;m<h;m+=3){const w=m,T=m+1,g=m+2;r=Os(this,o,t,i,c,u,f,w,T,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Zg(n,t,e,i,r,s,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===fi,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:n}}function Os(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ds),n.getVertexPosition(l,Is),n.getVertexPosition(c,Us);const u=Zg(n,t,e,i,Ds,Is,Us,hu);if(u){const f=new I;hn.getBarycoord(hu,Ds,Is,Us,f),r&&(u.uv=hn.getInterpolatedAttribute(r,a,l,c,f,new Dt)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,l,c,f,new Dt)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,f,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal(Ds,Is,Us,d.normal),u.face=d,u.barycoord=f}return u}class Ar extends Xe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(f,2));function v(M,m,h,w,T,g,D,R,P,O,b){const E=g/P,U=D/O,tt=g/2,K=D/2,rt=R/2,ot=P+1,J=O+1;let Q=0,H=0;const dt=new I;for(let St=0;St<J;St++){const bt=St*U-K;for(let It=0;It<ot;It++){const Qt=It*E-tt;dt[M]=Qt*w,dt[m]=bt*T,dt[h]=rt,c.push(dt.x,dt.y,dt.z),dt[M]=0,dt[m]=0,dt[h]=R>0?1:-1,u.push(dt.x,dt.y,dt.z),f.push(It/P),f.push(1-St/O),Q+=1}}for(let St=0;St<O;St++)for(let bt=0;bt<P;bt++){const It=d+bt+ot*St,Qt=d+bt+ot*(St+1),et=d+(bt+1)+ot*(St+1),ut=d+(bt+1)+ot*St;l.push(It,Qt,ut),l.push(Qt,et,ut),H+=6}a.addGroup(p,H,b),p+=H,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=Er(n[e]);for(const r in i)t[r]=i[r]}return t}function Jg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Qg={clone:Er,merge:He};var t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=e_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ah extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new I,du=new Dt,pu=new Dt;class tn extends Ah{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,du,pu),e.subVectors(pu,du)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,tr=1;class n_ extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Qi,tr,t,e);r.layers=this.layers,this.add(r);const s=new tn(Qi,tr,t,e);s.layers=this.layers,this.add(s);const o=new tn(Qi,tr,t,e);o.layers=this.layers,this.add(o);const a=new tn(Qi,tr,t,e);a.layers=this.layers,this.add(a);const l=new tn(Qi,tr,t,e);l.layers=this.layers,this.add(l);const c=new tn(Qi,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wh extends Ke{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:_r,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class i_ extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new wh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ar(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:ci});s.uniforms.tEquirect.value=e;const o=new Ne(r,s),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=bn),new n_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class r_ extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const pa=new I,s_=new I,o_=new Wt;class bi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=pa.subVectors(i,e).cross(s_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||o_.getNormalMatrix(t),r=this.coplanarPoint(pa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new ps,Bs=new I;class ec{constructor(t=new bi,e=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],M=r[10],m=r[11],h=r[12],w=r[13],T=r[14],g=r[15];if(i[0].setComponents(l-s,d-c,m-p,g-h).normalize(),i[1].setComponents(l+s,d+c,m+p,g+h).normalize(),i[2].setComponents(l+o,d+u,m+v,g+w).normalize(),i[3].setComponents(l-o,d-u,m-v,g-w).normalize(),i[4].setComponents(l-a,d-f,m-M,g-T).normalize(),e===kn)i[5].setComponents(l+a,d+f,m+M,g+T).normalize();else if(e===ho)i[5].setComponents(a,f,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Bs.x=r.normal.x>0?t.max.x:t.min.x,Bs.y=r.normal.y>0?t.max.y:t.min.y,Bs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rh extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mo=new I,go=new I,mu=new he,Fr=new tc,zs=new ps,ma=new I,gu=new I;class nc extends Te{constructor(t=new Xe,e=new Rh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)mo.fromBufferAttribute(e,r-1),go.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=mo.distanceTo(go);t.setAttribute("lineDistance",new We(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(r),zs.radius+=s,t.ray.intersectsSphere(zs)===!1)return;mu.copy(r).invert(),Fr.copy(t.ray).applyMatrix4(mu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let M=p,m=v-1;M<m;M+=c){const h=u.getX(M),w=u.getX(M+1),T=Hs(this,t,Fr,l,h,w);T&&e.push(T)}if(this.isLineLoop){const M=u.getX(v-1),m=u.getX(p),h=Hs(this,t,Fr,l,M,m);h&&e.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let M=p,m=v-1;M<m;M+=c){const h=Hs(this,t,Fr,l,M,M+1);h&&e.push(h)}if(this.isLineLoop){const M=Hs(this,t,Fr,l,v-1,p);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hs(n,t,e,i,r,s){const o=n.geometry.attributes.position;if(mo.fromBufferAttribute(o,r),go.fromBufferAttribute(o,s),e.distanceSqToSegment(mo,go,ma,gu)>i)return;ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:gu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}class Ch extends nc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ph extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _u=new he,bl=new tc,Vs=new ps,Gs=new I;class Lh extends Te{constructor(t=new Xe,e=new Ph){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,t.ray.intersectsSphere(Vs)===!1)return;_u.copy(r).invert(),bl.copy(t.ray).applyMatrix4(_u);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,M=p;v<M;v++){const m=c.getX(v);Gs.fromBufferAttribute(f,m),vu(Gs,m,l,r,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,M=p;v<M;v++)Gs.fromBufferAttribute(f,v),vu(Gs,v,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vu(n,t,e,i,r,s,o){const a=bl.distanceSqToPoint(n);if(a<e){const l=new I;bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Wn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Dh extends Ke{constructor(t,e,i,r,s,o,a,l,c,u=hr){if(u!==hr&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hr&&(i=Ni),i===void 0&&u===Mr&&(i=xr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Dt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,r=[],s=[],o=[],a=new I,l=new he;for(let p=0;p<=t;p++){const v=p/t;r[p]=this.getTangentAt(v,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(qt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(qt(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let v=1;v<=t;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ih extends Qn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class a_ extends Ih{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ic(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const ks=new I,ga=new ic,_a=new ic,va=new ic;class rc extends Qn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new I){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ks.subVectors(r[0],r[1]).add(r[0]),c=ks);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ks.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ks),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);M<1e-4&&(M=1),v<1e-4&&(v=M),m<1e-4&&(m=M),ga.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,v,M,m),_a.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,v,M,m),va.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,v,M,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),_a.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),va.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(ga.calc(l),_a.calc(l),va.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xu(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function l_(n,t){const e=1-n;return e*e*t}function c_(n,t){return 2*(1-n)*n*t}function u_(n,t){return n*n*t}function jr(n,t,e,i){return l_(n,t)+c_(n,e)+u_(n,i)}function f_(n,t){const e=1-n;return e*e*e*t}function h_(n,t){const e=1-n;return 3*e*e*n*t}function d_(n,t){return 3*(1-n)*n*n*t}function p_(n,t){return n*n*n*t}function Zr(n,t,e,i,r){return f_(n,t)+h_(n,e)+d_(n,i)+p_(n,r)}class m_ extends Qn{constructor(t=new Dt,e=new Dt,i=new Dt,r=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Dt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zr(t,r.x,s.x,o.x,a.x),Zr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class g_ extends Qn{constructor(t=new I,e=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zr(t,r.x,s.x,o.x,a.x),Zr(t,r.y,s.y,o.y,a.y),Zr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class __ extends Qn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v_ extends Qn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x_ extends Qn{constructor(t=new Dt,e=new Dt,i=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Dt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(jr(t,r.x,s.x,o.x),jr(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends Qn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(jr(t,r.x,s.x,o.x),jr(t,r.y,s.y,o.y),jr(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M_ extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(xu(a,l.x,c.x,u.x,f.x),xu(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Dt().fromArray(r))}return this}}var S_=Object.freeze({__proto__:null,ArcCurve:a_,CatmullRomCurve3:rc,CubicBezierCurve:m_,CubicBezierCurve3:g_,EllipseCurve:Ih,LineCurve:__,LineCurve3:v_,QuadraticBezierCurve:x_,QuadraticBezierCurve3:Uh,SplineCurve:M_});class Po extends Xe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,d=e/l,p=[],v=[],M=[],m=[];for(let h=0;h<u;h++){const w=h*d-o;for(let T=0;T<c;T++){const g=T*f-s;v.push(g,-w,0),M.push(0,0,1),m.push(T/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const T=w+c*h,g=w+c*(h+1),D=w+1+c*(h+1),R=w+1+c*h;p.push(T,g,R),p.push(g,D,R)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.width,t.height,t.widthSegments,t.heightSegments)}}class as extends Xe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new I,d=new I,p=[],v=[],M=[],m=[];for(let h=0;h<=i;h++){const w=[],T=h/i;let g=0;h===0&&o===0?g=.5/e:h===i&&l===Math.PI&&(g=-.5/e);for(let D=0;D<=e;D++){const R=D/e;f.x=-t*Math.cos(r+R*s)*Math.sin(o+T*a),f.y=t*Math.cos(o+T*a),f.z=t*Math.sin(r+R*s)*Math.sin(o+T*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),m.push(R+g,1-T),w.push(c++)}u.push(w)}for(let h=0;h<i;h++)for(let w=0;w<e;w++){const T=u[h][w+1],g=u[h][w],D=u[h+1][w],R=u[h+1][w+1];(h!==0||o>0)&&p.push(T,g,R),(h!==i-1||l<Math.PI)&&p.push(g,D,R)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lo extends Xe{constructor(t=new Uh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new Dt;let u=new I;const f=[],d=[],p=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new We(f,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(p,2));function M(){for(let T=0;T<e;T++)m(T);m(s===!1?e:0),w(),h()}function m(T){u=t.getPointAt(T/e,u);const g=o.normals[T],D=o.binormals[T];for(let R=0;R<=r;R++){const P=R/r*Math.PI*2,O=Math.sin(P),b=-Math.cos(P);l.x=b*g.x+O*D.x,l.y=b*g.y+O*D.y,l.z=b*g.z+O*D.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function h(){for(let T=1;T<=e;T++)for(let g=1;g<=r;g++){const D=(r+1)*(T-1)+(g-1),R=(r+1)*T+(g-1),P=(r+1)*T+g,O=(r+1)*(T-1)+g;v.push(D,R,O),v.push(R,P,O)}}function w(){for(let T=0;T<=e;T++)for(let g=0;g<=r;g++)c.x=T/e,c.y=g/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lo(new S_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Nh extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class y_ extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class E_ extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const xa=new he,Mu=new I,Su=new I;class Fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yu=new he,Or=new I,Ma=new I;class T_ extends Fh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Or.setFromMatrixPosition(t.matrixWorld),i.position.copy(Or),Ma.copy(i.position),Ma.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ma),i.updateMatrixWorld(),r.makeTranslation(-Or.x,-Or.y,-Or.z),yu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class b_ extends sc{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new T_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Oh extends Ah{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class A_ extends Fh{constructor(){super(new Oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w_ extends sc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new A_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class R_ extends sc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class C_ extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class P_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eu(){return performance.now()}function Tu(n,t,e,i){const r=L_(i);switch(e){case ch:return n*t;case fh:return n*t;case hh:return n*t*2;case dh:return n*t/r.components*r.byteLength;case jl:return n*t/r.components*r.byteLength;case ph:return n*t*2/r.components*r.byteLength;case Zl:return n*t*2/r.components*r.byteLength;case uh:return n*t*3/r.components*r.byteLength;case pn:return n*t*4/r.components*r.byteLength;case Jl:return n*t*4/r.components*r.byteLength;case js:case Zs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(n,16)*Math.max(t,8)/4;case Qa:case el:return Math.max(n,8)*Math.max(t,8)/2;case il:case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case to:case Ml:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case mh:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L_(n){switch(n){case jn:case oh:return{byteLength:1,components:1};case ss:case ah:case fs:return{byteLength:2,components:1};case $l:case Kl:return{byteLength:2,components:4};case Ni:case Yl:case Gn:return{byteLength:4,components:1};case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function D_(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],M=f[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const M=f[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ix=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ux=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:I_,alphahash_pars_fragment:U_,alphamap_fragment:N_,alphamap_pars_fragment:F_,alphatest_fragment:O_,alphatest_pars_fragment:B_,aomap_fragment:z_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:G_,begin_vertex:k_,beginnormal_vertex:W_,bsdfs:X_,iridescence_fragment:q_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:j_,clipping_planes_vertex:Z_,color_fragment:J_,color_pars_fragment:Q_,color_pars_vertex:tv,color_vertex:ev,common:nv,cube_uv_reflection_fragment:iv,defaultnormal_vertex:rv,displacementmap_pars_vertex:sv,displacementmap_vertex:ov,emissivemap_fragment:av,emissivemap_pars_fragment:lv,colorspace_fragment:cv,colorspace_pars_fragment:uv,envmap_fragment:fv,envmap_common_pars_fragment:hv,envmap_pars_fragment:dv,envmap_pars_vertex:pv,envmap_physical_pars_fragment:bv,envmap_vertex:mv,fog_vertex:gv,fog_pars_vertex:_v,fog_fragment:vv,fog_pars_fragment:xv,gradientmap_pars_fragment:Mv,lightmap_pars_fragment:Sv,lights_lambert_fragment:yv,lights_lambert_pars_fragment:Ev,lights_pars_begin:Tv,lights_toon_fragment:Av,lights_toon_pars_fragment:wv,lights_phong_fragment:Rv,lights_phong_pars_fragment:Cv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Lv,lights_fragment_begin:Dv,lights_fragment_maps:Iv,lights_fragment_end:Uv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:Fv,logdepthbuf_pars_vertex:Ov,logdepthbuf_vertex:Bv,map_fragment:zv,map_pars_fragment:Hv,map_particle_fragment:Vv,map_particle_pars_fragment:Gv,metalnessmap_fragment:kv,metalnessmap_pars_fragment:Wv,morphinstance_vertex:Xv,morphcolor_vertex:qv,morphnormal_vertex:Yv,morphtarget_pars_vertex:$v,morphtarget_vertex:Kv,normal_fragment_begin:jv,normal_fragment_maps:Zv,normal_pars_fragment:Jv,normal_pars_vertex:Qv,normal_vertex:t0,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:s0,opaque_fragment:o0,packing:a0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:u0,dithering_pars_fragment:f0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:v0,skinning_pars_vertex:x0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:y0,specularmap_pars_fragment:E0,tonemapping_fragment:T0,tonemapping_pars_fragment:b0,transmission_fragment:A0,transmission_pars_fragment:w0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:P0,worldpos_vertex:L0,background_vert:D0,background_frag:I0,backgroundCube_vert:U0,backgroundCube_frag:N0,cube_vert:F0,cube_frag:O0,depth_vert:B0,depth_frag:z0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:k0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:$0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:Z0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:tx,meshphong_frag:ex,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:rx,meshtoon_frag:sx,points_vert:ox,points_frag:ax,shadow_vert:lx,shadow_frag:cx,sprite_vert:ux,sprite_frag:fx},gt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},En={basic:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:He([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:He([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:He([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:He([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:He([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:He([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:He([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:He([gt.lights,gt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};En.physical={uniforms:He([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ws={r:0,b:0,g:0},yi=new Cn,hx=new he;function dx(n,t,e,i,r,s,o){const a=new Kt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function v(T){let g=T.isScene===!0?T.background:null;return g&&g.isTexture&&(g=(T.backgroundBlurriness>0?e:t).get(g)),g}function M(T){let g=!1;const D=v(T);D===null?h(a,l):D&&D.isColor&&(h(D,1),g=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,g){const D=v(g);D&&(D.isCubeTexture||D.mapping===Co)?(u===void 0&&(u=new Ne(new Ar(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Er(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(g.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(yi)),u.material.toneMapped=Zt.getTransfer(D.colorSpace)!==ae,(f!==D||d!==D.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=D,d=D.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Ne(new Po(2,2),new hi({name:"BackgroundMaterial",uniforms:Er(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(D.colorSpace)!==ae,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=D,d=D.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,g){T.getRGB(Ws,bh(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,g,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(T,g=1){a.set(T),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(a,l)},render:M,addToRenderList:m,dispose:w}}function px(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(E,U,tt,K,rt){let ot=!1;const J=f(K,tt,U);s!==J&&(s=J,c(s.object)),ot=p(E,K,tt,rt),ot&&v(E,K,tt,rt),rt!==null&&t.update(rt,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,g(E,U,tt,K),rt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,U,tt){const K=tt.wireframe===!0;let rt=i[E.id];rt===void 0&&(rt={},i[E.id]=rt);let ot=rt[U.id];ot===void 0&&(ot={},rt[U.id]=ot);let J=ot[K];return J===void 0&&(J=d(l()),ot[K]=J),J}function d(E){const U=[],tt=[],K=[];for(let rt=0;rt<e;rt++)U[rt]=0,tt[rt]=0,K[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:tt,attributeDivisors:K,object:E,attributes:{},index:null}}function p(E,U,tt,K){const rt=s.attributes,ot=U.attributes;let J=0;const Q=tt.getAttributes();for(const H in Q)if(Q[H].location>=0){const St=rt[H];let bt=ot[H];if(bt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),St===void 0||St.attribute!==bt||bt&&St.data!==bt.data)return!0;J++}return s.attributesNum!==J||s.index!==K}function v(E,U,tt,K){const rt={},ot=U.attributes;let J=0;const Q=tt.getAttributes();for(const H in Q)if(Q[H].location>=0){let St=ot[H];St===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(St=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(St=E.instanceColor));const bt={};bt.attribute=St,St&&St.data&&(bt.data=St.data),rt[H]=bt,J++}s.attributes=rt,s.attributesNum=J,s.index=K}function M(){const E=s.newAttributes;for(let U=0,tt=E.length;U<tt;U++)E[U]=0}function m(E){h(E,0)}function h(E,U){const tt=s.newAttributes,K=s.enabledAttributes,rt=s.attributeDivisors;tt[E]=1,K[E]===0&&(n.enableVertexAttribArray(E),K[E]=1),rt[E]!==U&&(n.vertexAttribDivisor(E,U),rt[E]=U)}function w(){const E=s.newAttributes,U=s.enabledAttributes;for(let tt=0,K=U.length;tt<K;tt++)U[tt]!==E[tt]&&(n.disableVertexAttribArray(tt),U[tt]=0)}function T(E,U,tt,K,rt,ot,J){J===!0?n.vertexAttribIPointer(E,U,tt,rt,ot):n.vertexAttribPointer(E,U,tt,K,rt,ot)}function g(E,U,tt,K){M();const rt=K.attributes,ot=tt.getAttributes(),J=U.defaultAttributeValues;for(const Q in ot){const H=ot[Q];if(H.location>=0){let dt=rt[Q];if(dt===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor)),dt!==void 0){const St=dt.normalized,bt=dt.itemSize,It=t.get(dt);if(It===void 0)continue;const Qt=It.buffer,et=It.type,ut=It.bytesPerElement,Tt=et===n.INT||et===n.UNSIGNED_INT||dt.gpuType===Yl;if(dt.isInterleavedBufferAttribute){const mt=dt.data,Ct=mt.stride,Nt=dt.offset;if(mt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<H.locationSize;Ht++)h(H.location+Ht,mt.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ht=0;Ht<H.locationSize;Ht++)m(H.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Ht=0;Ht<H.locationSize;Ht++)T(H.location+Ht,bt/H.locationSize,et,St,Ct*ut,(Nt+bt/H.locationSize*Ht)*ut,Tt)}else{if(dt.isInstancedBufferAttribute){for(let mt=0;mt<H.locationSize;mt++)h(H.location+mt,dt.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let mt=0;mt<H.locationSize;mt++)m(H.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let mt=0;mt<H.locationSize;mt++)T(H.location+mt,bt/H.locationSize,et,St,bt*ut,bt/H.locationSize*mt*ut,Tt)}}else if(J!==void 0){const St=J[Q];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(H.location,St);break;case 3:n.vertexAttrib3fv(H.location,St);break;case 4:n.vertexAttrib4fv(H.location,St);break;default:n.vertexAttrib1fv(H.location,St)}}}}w()}function D(){O();for(const E in i){const U=i[E];for(const tt in U){const K=U[tt];for(const rt in K)u(K[rt].object),delete K[rt];delete U[tt]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const tt in U){const K=U[tt];for(const rt in K)u(K[rt].object),delete K[rt];delete U[tt]}delete i[E.id]}function P(E){for(const U in i){const tt=i[U];if(tt[E.id]===void 0)continue;const K=tt[E.id];for(const rt in K)u(K[rt].object),delete K[rt];delete tt[E.id]}}function O(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:m,disableUnusedAttributes:w}}function mx(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];e.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let M=0;M<f;M++)v+=u[M]*d[M];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gx(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==pn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==jn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Gn&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:g,vertexTextures:D,maxSamples:R}}function _x(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new bi,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,T=w*4;let g=h.clippingState||null;l.value=g,g=u(v,d,T,p);for(let D=0;D!==T;++D)g[D]=e[D];h.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,v){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const h=p+M*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,g=p;T!==M;++T,g+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function vx(n){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=_r:a===ja&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ka||a===ja)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new i_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const or=4,bu=[.125,.215,.35,.446,.526,.582],Ri=20,Sa=new Oh,Au=new Kt;let ya=null,Ea=0,Ta=0,ba=!1;const Ai=(1+Math.sqrt(5))/2,er=1/Ai,wu=[new I(-Ai,er,0),new I(Ai,er,0),new I(-er,0,Ai),new I(er,0,Ai),new I(0,Ai,-er),new I(0,Ai,er),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ya=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ya,Ea,Ta),this._renderer.xr.enabled=ba,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ya=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:fs,format:pn,colorSpace:Sr,depthBuffer:!1},r=Cu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(s)),this._blurMaterial=Mx(s,t,e)}return r}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,i,r){const a=new tn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Au),u.toneMapping=ui,u.autoClear=!1;const p=new yr({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),v=new Ne(new Ar,p);let M=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,M=!0):(p.color.copy(Au),M=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const T=this._cubeSize;Xs(r,w*T,h>2?T:0,T,T),u.setRenderTarget(r),M&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===_r||t.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Sa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wu[(r-s-1)%wu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ne(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),M=s/v,m=isFinite(s)?1+Math.floor(u*M):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const h=[];let w=0;for(let P=0;P<Ri;++P){const O=P/M,b=Math.exp(-O*O/2);h.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=v,d.mipInt.value=T-i;const g=this._sizeLods[r],D=3*g*(r>T-or?r-T+or:0),R=4*(this._cubeSize-g);Xs(e,D,R,3*g,2*g),l.setRenderTarget(e),l.render(f,Sa)}}function xx(n){const t=[],e=[],i=[];let r=n;const s=n-or+1+bu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-or?l=bu[o-n+or-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,M=3,m=2,h=1,w=new Float32Array(M*v*p),T=new Float32Array(m*v*p),g=new Float32Array(h*v*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,O=R>2?0:-1,b=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];w.set(b,M*v*R),T.set(d,m*v*R);const E=[R,R,R,R,R,R];g.set(E,h*v*R)}const D=new Xe;D.setAttribute("position",new wn(w,M)),D.setAttribute("uv",new wn(T,m)),D.setAttribute("faceIndex",new wn(g,h)),t.push(D),r>or&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cu(n,t,e){const i=new Fi(n,t,e);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Mx(n,t,e){const i=new Float32Array(Ri),r=new I(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Pu(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Lu(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ka||l===ja,u=l===_r||l===vr;if(c||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ru(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Ru(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function yx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ex(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let M=0;if(p!==null){const w=p.array;M=p.version;for(let T=0,g=w.length;T<g;T+=3){const D=w[T+0],R=w[T+1],P=w[T+2];d.push(D,R,R,P,P,D)}}else if(v!==void 0){const w=v.array;M=v.version;for(let T=0,g=w.length/3-1;T<g;T+=3){const D=T+0,R=T+1,P=T+2;d.push(D,R,R,P,P,D)}}else return;const m=new(vh(d)?Th:Eh)(d,1);m.version=M;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Tx(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),e.update(p,i,1)}function c(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,d*o,v),e.update(p,i,v))}function u(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];e.update(m,i,1)}function f(d,p,v,M){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],M[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,M,0,v);let h=0;for(let w=0;w<v;w++)h+=p[w]*M[w];e.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Ax(n,t,e){const i=new WeakMap,r=new le;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let g=0;v===!0&&(g=1),M===!0&&(g=2),m===!0&&(g=3);let D=a.attributes.position.count*g,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*R*4*f),O=new Mh(P,D,R,f);O.type=Gn,O.needsUpdate=!0;const b=g*4;for(let U=0;U<f;U++){const tt=h[U],K=w[U],rt=T[U],ot=D*R*4*U;for(let J=0;J<tt.count;J++){const Q=J*b;v===!0&&(r.fromBufferAttribute(tt,J),P[ot+Q+0]=r.x,P[ot+Q+1]=r.y,P[ot+Q+2]=r.z,P[ot+Q+3]=0),M===!0&&(r.fromBufferAttribute(K,J),P[ot+Q+4]=r.x,P[ot+Q+5]=r.y,P[ot+Q+6]=r.z,P[ot+Q+7]=0),m===!0&&(r.fromBufferAttribute(rt,J),P[ot+Q+8]=r.x,P[ot+Q+9]=r.y,P[ot+Q+10]=r.z,P[ot+Q+11]=rt.itemSize===4?r.w:1)}}d={count:f,texture:O,size:new Dt(D,R)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const M=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function wx(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const zh=new Ke,Du=new Dh(1,1),Hh=new Mh,Vh=new Vg,Gh=new wh,Iu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function wr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Iu[r];if(s===void 0&&(s=new Float32Array(r),Iu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Do(n,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Rx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function Px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function Lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function Dx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Ou.set(i),n.uniformMatrix2fv(this.addr,!1,Ou),ye(e,i)}}function Ix(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),ye(e,i)}}function Ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Nu.set(i),n.uniformMatrix4fv(this.addr,!1,Nu),ye(e,i)}}function Nx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function Ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function Bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function zx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function Vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function Gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function kx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Du.compareFunction=_h,s=Du):s=zh,e.setTexture2D(t||s,r)}function Wx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Vh,r)}function Xx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Gh,r)}function qx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Hh,r)}function Yx(n){switch(n){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function $x(n,t){n.uniform1fv(this.addr,t)}function Kx(n,t){const e=wr(t,this.size,2);n.uniform2fv(this.addr,e)}function jx(n,t){const e=wr(t,this.size,3);n.uniform3fv(this.addr,e)}function Zx(n,t){const e=wr(t,this.size,4);n.uniform4fv(this.addr,e)}function Jx(n,t){const e=wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qx(n,t){const e=wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tM(n,t){const e=wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function eM(n,t){n.uniform1iv(this.addr,t)}function nM(n,t){n.uniform2iv(this.addr,t)}function iM(n,t){n.uniform3iv(this.addr,t)}function rM(n,t){n.uniform4iv(this.addr,t)}function sM(n,t){n.uniform1uiv(this.addr,t)}function oM(n,t){n.uniform2uiv(this.addr,t)}function aM(n,t){n.uniform3uiv(this.addr,t)}function lM(n,t){n.uniform4uiv(this.addr,t)}function cM(n,t,e){const i=this.cache,r=t.length,s=Do(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||zh,s[o])}function uM(n,t,e){const i=this.cache,r=t.length,s=Do(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Vh,s[o])}function fM(n,t,e){const i=this.cache,r=t.length,s=Do(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Gh,s[o])}function hM(n,t,e){const i=this.cache,r=t.length,s=Do(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Hh,s[o])}function dM(n){switch(n){case 5126:return $x;case 35664:return Kx;case 35665:return jx;case 35666:return Zx;case 35674:return Jx;case 35675:return Qx;case 35676:return tM;case 5124:case 35670:return eM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}class pM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yx(e.type)}}class mM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dM(e.type)}}class gM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Bu(n,t){n.seq.push(t),n.map[t.id]=t}function _M(n,t,e){const i=n.name,r=i.length;for(Aa.lastIndex=0;;){const s=Aa.exec(i),o=Aa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Bu(e,c===void 0?new pM(a,n,t):new mM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new gM(a),Bu(e,f)),e=f}}}class eo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);_M(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function zu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vM=37297;let xM=0;function MM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Hu=new Wt;function SM(n){Zt._getMatrix(Hu,Zt.workingColorSpace,n);const t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case fo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+MM(n.getShaderSource(t),o)}else return r}function yM(n,t){const e=SM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function EM(n,t){let e;switch(t){case Jm:e="Linear";break;case Qm:e="Reinhard";break;case tg:e="Cineon";break;case eg:e="ACESFilmic";break;case ig:e="AgX";break;case rg:e="Neutral";break;case ng:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new I;function TM(){Zt.getLuminanceCoefficients(qs);const n=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function AM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Hr(n){return n!==""}function Gu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ku(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const RM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(RM,PM)}const CM=new Map;function PM(n,t){let e=Xt[t];if(e===void 0){const i=CM.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}const LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(n){return n.replace(LM,DM)}function DM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function IM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function UM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case vr:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function FM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rh:t="ENVMAP_BLENDING_MULTIPLY";break;case jm:t="ENVMAP_BLENDING_MIX";break;case Zm:t="ENVMAP_BLENDING_ADD";break}return t}function OM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function BM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=IM(e),c=UM(e),u=NM(e),f=FM(e),d=OM(e),p=bM(e),v=AM(s),M=r.createProgram();let m,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Hr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Hr).join(`
`),h.length>0&&(h+=`
`)):(m=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),h=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Xt.tonemapping_pars_fragment:"",e.toneMapping!==ui?EM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,yM("linearToOutputTexel",e.outputColorSpace),TM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Al(o),o=Gu(o,e),o=ku(o,e),a=Al(a),a=Gu(a,e),a=ku(a,e),o=Wu(o),a=Wu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=w+m+o,g=w+h+a,D=zu(r,r.VERTEX_SHADER,T),R=zu(r,r.FRAGMENT_SHADER,g);r.attachShader(M,D),r.attachShader(M,R),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(U){if(n.debug.checkShaderErrors){const tt=r.getProgramInfoLog(M).trim(),K=r.getShaderInfoLog(D).trim(),rt=r.getShaderInfoLog(R).trim();let ot=!0,J=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,D,R);else{const Q=Vu(r,D,"vertex"),H=Vu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+tt+`
`+Q+`
`+H)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(K===""||rt==="")&&(J=!1);J&&(U.diagnostics={runnable:ot,programLog:tt,vertexShader:{log:K,prefix:m},fragmentShader:{log:rt,prefix:h}})}r.deleteShader(D),r.deleteShader(R),O=new eo(r,M),b=wM(r,M)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(M,vM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=R,this}let zM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new VM(t),e.set(t,i)),i}}class VM{constructor(t){this.id=zM++,this.code=t,this.usedTimes=0}}function GM(n,t,e,i,r,s,o){const a=new Sh,l=new HM,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,U,tt,K){const rt=tt.fog,ot=K.geometry,J=b.isMeshStandardMaterial?tt.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||J),H=Q&&Q.mapping===Co?Q.image.height:null,dt=v[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const St=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,bt=St!==void 0?St.length:0;let It=0;ot.morphAttributes.position!==void 0&&(It=1),ot.morphAttributes.normal!==void 0&&(It=2),ot.morphAttributes.color!==void 0&&(It=3);let Qt,et,ut,Tt;if(dt){const se=En[dt];Qt=se.vertexShader,et=se.fragmentShader}else Qt=b.vertexShader,et=b.fragmentShader,l.update(b),ut=l.getVertexShaderID(b),Tt=l.getFragmentShaderID(b);const mt=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Nt=K.isInstancedMesh===!0,Ht=K.isBatchedMesh===!0,de=!!b.map,A=!!b.matcap,L=!!Q,S=!!b.aoMap,nt=!!b.lightMap,$=!!b.bumpMap,q=!!b.normalMap,j=!!b.displacementMap,st=!!b.emissiveMap,Y=!!b.metalnessMap,x=!!b.roughnessMap,_=b.anisotropy>0,C=b.clearcoat>0,z=b.dispersion>0,k=b.iridescence>0,G=b.sheen>0,ht=b.transmission>0,at=_&&!!b.anisotropyMap,ft=C&&!!b.clearcoatMap,Pt=C&&!!b.clearcoatNormalMap,lt=C&&!!b.clearcoatRoughnessMap,_t=k&&!!b.iridescenceMap,wt=k&&!!b.iridescenceThicknessMap,Ut=G&&!!b.sheenColorMap,pt=G&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,Vt=!!b.specularColorMap,re=!!b.specularIntensityMap,N=ht&&!!b.transmissionMap,vt=ht&&!!b.thicknessMap,Z=!!b.gradientMap,it=!!b.alphaMap,yt=b.alphaTest>0,Mt=!!b.alphaHash,kt=!!b.extensions;let me=ui;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(me=n.toneMapping);const Ce={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:Qt,fragmentShader:et,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&K._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&K.instanceColor!==null,instancingMorph:Nt&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Sr,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:A,envMap:L,envMapMode:L&&Q.mapping,envMapCubeUVHeight:H,aoMap:S,lightMap:nt,bumpMap:$,normalMap:q,displacementMap:d&&j,emissiveMap:st,normalMapObjectSpace:q&&b.normalMapType===lg,normalMapTangentSpace:q&&b.normalMapType===gh,metalnessMap:Y,roughnessMap:x,anisotropy:_,anisotropyMap:at,clearcoat:C,clearcoatMap:ft,clearcoatNormalMap:Pt,clearcoatRoughnessMap:lt,dispersion:z,iridescence:k,iridescenceMap:_t,iridescenceThicknessMap:wt,sheen:G,sheenColorMap:Ut,sheenRoughnessMap:pt,specularMap:Ft,specularColorMap:Vt,specularIntensityMap:re,transmission:ht,transmissionMap:N,thicknessMap:vt,gradientMap:Z,opaque:b.transparent===!1&&b.blending===fr&&b.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Mt,combine:b.combine,mapUv:de&&M(b.map.channel),aoMapUv:S&&M(b.aoMap.channel),lightMapUv:nt&&M(b.lightMap.channel),bumpMapUv:$&&M(b.bumpMap.channel),normalMapUv:q&&M(b.normalMap.channel),displacementMapUv:j&&M(b.displacementMap.channel),emissiveMapUv:st&&M(b.emissiveMap.channel),metalnessMapUv:Y&&M(b.metalnessMap.channel),roughnessMapUv:x&&M(b.roughnessMap.channel),anisotropyMapUv:at&&M(b.anisotropyMap.channel),clearcoatMapUv:ft&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:pt&&M(b.sheenRoughnessMap.channel),specularMapUv:Ft&&M(b.specularMap.channel),specularColorMapUv:Vt&&M(b.specularColorMap.channel),specularIntensityMapUv:re&&M(b.specularIntensityMap.channel),transmissionMapUv:N&&M(b.transmissionMap.channel),thicknessMapUv:vt&&M(b.thicknessMap.channel),alphaMapUv:it&&M(b.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(q||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ot.attributes.uv&&(de||it),fog:!!rt,useFog:b.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ct,skinning:K.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:It,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:st&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vn,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function h(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)E.push(U),E.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(w(E,b),T(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function w(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function T(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function g(b){const E=v[b.type];let U;if(E){const tt=En[E];U=Qg.clone(tt.uniforms)}else U=b.uniforms;return U}function D(b,E){let U;for(let tt=0,K=u.length;tt<K;tt++){const rt=u[tt];if(rt.cacheKey===E){U=rt,++U.usedTimes;break}}return U===void 0&&(U=new BM(n,E,b,s),u.push(U)),U}function R(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:g,acquireProgram:D,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:O}}function kM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function WM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,p,v,M,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:M,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=M,h.group=m),t++,h}function a(f,d,p,v,M,m){const h=o(f,d,p,v,M,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):e.push(h)}function l(f,d,p,v,M,m){const h=o(f,d,p,v,M,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||WM),i.length>1&&i.sort(d||qu),r.length>1&&r.sort(d||qu)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function XM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yu,n.set(i,[o])):r>=s.length?(o=new Yu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Kt};break;case"SpotLight":e={position:new I,direction:new I,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function YM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $M=0;function KM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jM(n){const t=new qM,e=YM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new he,o=new he;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,v=0,M=0,m=0,h=0,w=0,T=0,g=0,D=0,R=0,P=0;c.sort(KM);for(let b=0,E=c.length;b<E;b++){const U=c[b],tt=U.color,K=U.intensity,rt=U.distance,ot=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=tt.r*K,f+=tt.g*K,d+=tt.b*K;else if(U.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(U.sh.coefficients[J],K);P++}else if(U.isDirectionalLight){const J=t.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,H=e.get(U);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ot,i.directionalShadowMatrix[p]=U.shadow.matrix,w++}i.directional[p]=J,p++}else if(U.isSpotLight){const J=t.get(U);J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(tt).multiplyScalar(K),J.distance=rt,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,i.spot[M]=J;const Q=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,Q.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[M]=Q.matrix,U.castShadow){const H=e.get(U);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=ot,g++}M++}else if(U.isRectAreaLight){const J=t.get(U);J.color.copy(tt).multiplyScalar(K),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=J,m++}else if(U.isPointLight){const J=t.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),J.distance=U.distance,J.decay=U.decay,U.castShadow){const Q=U.shadow,H=e.get(U);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=ot,i.pointShadowMatrix[v]=U.shadow.matrix,T++}i.point[v]=J,v++}else if(U.isHemisphereLight){const J=t.get(U);J.skyColor.copy(U.color).multiplyScalar(K),J.groundColor.copy(U.groundColor).multiplyScalar(K),i.hemi[h]=J,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==v||O.spotLength!==M||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==w||O.numPointShadows!==T||O.numSpotShadows!==g||O.numSpotMaps!==D||O.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=g+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,O.directionalLength=p,O.pointLength=v,O.spotLength=M,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=w,O.numPointShadows=T,O.numSpotShadows=g,O.numSpotMaps=D,O.numLightProbes=P,i.version=$M++)}function l(c,u){let f=0,d=0,p=0,v=0,M=0;const m=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const T=c[h];if(T.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),f++}else if(T.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(T.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const g=i.rectArea[v];g.position.setFromMatrixPosition(T.matrixWorld),g.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),g.halfWidth.set(T.width*.5,0,0),g.halfHeight.set(0,T.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const g=i.point[d];g.position.setFromMatrixPosition(T.matrixWorld),g.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const g=i.hemi[M];g.direction.setFromMatrixPosition(T.matrixWorld),g.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function $u(n){const t=new jM(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ZM(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new $u(n),t.set(r,[a])):s>=o.length?(a=new $u(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tS(n,t,e){let i=new ec;const r=new Dt,s=new Dt,o=new le,a=new y_({depthPacking:ag}),l=new E_,c={},u=e.maxTextureSize,f={[fi]:ke,[ke]:fi,[Vn]:Vn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:JM,fragmentShader:QM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Xe;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ne(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let h=this.type;this.render=function(R,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),tt=n.state;tt.setBlending(ci),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const K=h!==On&&this.type===On,rt=h===On&&this.type!==On;for(let ot=0,J=R.length;ot<J;ot++){const Q=R[ot],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const dt=H.getFrameExtents();if(r.multiply(dt),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/dt.x),r.x=s.x*dt.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/dt.y),r.y=s.y*dt.y,H.mapSize.y=s.y)),H.map===null||K===!0||rt===!0){const bt=this.type!==On?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(r.x,r.y,bt),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const St=H.getViewportCount();for(let bt=0;bt<St;bt++){const It=H.getViewport(bt);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),tt.viewport(o),H.updateMatrices(Q,bt),i=H.getFrustum(),g(P,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===On&&w(H,O),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(b,E,U)};function w(R,P){const O=t.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,O,d,M,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,O,p,M,null)}function T(R,P,O,b){let E=null;const U=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)E=U;else if(E=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const tt=E.uuid,K=P.uuid;let rt=c[tt];rt===void 0&&(rt={},c[tt]=rt);let ot=rt[K];ot===void 0&&(ot=E.clone(),rt[K]=ot,P.addEventListener("dispose",D)),E=ot}if(E.visible=P.visible,E.wireframe=P.wireframe,b===On?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const tt=n.properties.get(E);tt.light=O}return E}function g(R,P,O,b,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===On)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const K=t.update(R),rt=R.material;if(Array.isArray(rt)){const ot=K.groups;for(let J=0,Q=ot.length;J<Q;J++){const H=ot[J],dt=rt[H.materialIndex];if(dt&&dt.visible){const St=T(R,dt,b,E);R.onBeforeShadow(n,R,P,O,K,St,H),n.renderBufferDirect(O,null,K,St,R,H),R.onAfterShadow(n,R,P,O,K,St,H)}}}else if(rt.visible){const ot=T(R,rt,b,E);R.onBeforeShadow(n,R,P,O,K,ot,null),n.renderBufferDirect(O,null,K,ot,R,null),R.onAfterShadow(n,R,P,O,K,ot,null)}}const tt=R.children;for(let K=0,rt=tt.length;K<rt;K++)g(tt[K],P,O,b,E)}function D(R){R.target.removeEventListener("dispose",D);for(const O in c){const b=c[O],E=R.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const eS={[Ga]:ka,[Wa]:Ya,[Xa]:$a,[gr]:qa,[ka]:Ga,[Ya]:Wa,[$a]:Xa,[qa]:gr};function nS(n,t){function e(){let N=!1;const vt=new le;let Z=null;const it=new le(0,0,0,0);return{setMask:function(yt){Z!==yt&&!N&&(n.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){N=yt},setClear:function(yt,Mt,kt,me,Ce){Ce===!0&&(yt*=me,Mt*=me,kt*=me),vt.set(yt,Mt,kt,me),it.equals(vt)===!1&&(n.clearColor(yt,Mt,kt,me),it.copy(vt))},reset:function(){N=!1,Z=null,it.set(-1,0,0,0)}}}function i(){let N=!1,vt=!1,Z=null,it=null,yt=null;return{setReversed:function(Mt){if(vt!==Mt){const kt=t.get("EXT_clip_control");vt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const me=yt;yt=null,this.setClear(me)}vt=Mt},getReversed:function(){return vt},setTest:function(Mt){Mt?mt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(Mt){Z!==Mt&&!N&&(n.depthMask(Mt),Z=Mt)},setFunc:function(Mt){if(vt&&(Mt=eS[Mt]),it!==Mt){switch(Mt){case Ga:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case qa:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=Mt}},setLocked:function(Mt){N=Mt},setClear:function(Mt){yt!==Mt&&(vt&&(Mt=1-Mt),n.clearDepth(Mt),yt=Mt)},reset:function(){N=!1,Z=null,it=null,yt=null,vt=!1}}}function r(){let N=!1,vt=null,Z=null,it=null,yt=null,Mt=null,kt=null,me=null,Ce=null;return{setTest:function(se){N||(se?mt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(se){vt!==se&&!N&&(n.stencilMask(se),vt=se)},setFunc:function(se,an,Pn){(Z!==se||it!==an||yt!==Pn)&&(n.stencilFunc(se,an,Pn),Z=se,it=an,yt=Pn)},setOp:function(se,an,Pn){(Mt!==se||kt!==an||me!==Pn)&&(n.stencilOp(se,an,Pn),Mt=se,kt=an,me=Pn)},setLocked:function(se){N=se},setClear:function(se){Ce!==se&&(n.clearStencil(se),Ce=se)},reset:function(){N=!1,vt=null,Z=null,it=null,yt=null,Mt=null,kt=null,me=null,Ce=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],v=null,M=!1,m=null,h=null,w=null,T=null,g=null,D=null,R=null,P=new Kt(0,0,0),O=0,b=!1,E=null,U=null,tt=null,K=null,rt=null;const ot=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=Q>=2);let dt=null,St={};const bt=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),Qt=new le().fromArray(bt),et=new le().fromArray(It);function ut(N,vt,Z,it){const yt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(N,Mt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<Z;kt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(vt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return Mt}const Tt={};Tt[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(gr),$(!1),q(Xc),mt(n.CULL_FACE),S(ci);function mt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ct(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Nt(N,vt){return f[N]!==vt?(n.bindFramebuffer(N,vt),f[N]=vt,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=vt),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ht(N,vt){let Z=p,it=!1;if(N){Z=d.get(vt),Z===void 0&&(Z=[],d.set(vt,Z));const yt=N.textures;if(Z.length!==yt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,kt=yt.length;Mt<kt;Mt++)Z[Mt]=n.COLOR_ATTACHMENT0+Mt;Z.length=yt.length,it=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,it=!0);it&&n.drawBuffers(Z)}function de(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const A={[wi]:n.FUNC_ADD,[Im]:n.FUNC_SUBTRACT,[Um]:n.FUNC_REVERSE_SUBTRACT};A[Nm]=n.MIN,A[Fm]=n.MAX;const L={[Om]:n.ZERO,[Bm]:n.ONE,[zm]:n.SRC_COLOR,[Ha]:n.SRC_ALPHA,[Xm]:n.SRC_ALPHA_SATURATE,[km]:n.DST_COLOR,[Vm]:n.DST_ALPHA,[Hm]:n.ONE_MINUS_SRC_COLOR,[Va]:n.ONE_MINUS_SRC_ALPHA,[Wm]:n.ONE_MINUS_DST_COLOR,[Gm]:n.ONE_MINUS_DST_ALPHA,[qm]:n.CONSTANT_COLOR,[Ym]:n.ONE_MINUS_CONSTANT_COLOR,[$m]:n.CONSTANT_ALPHA,[Km]:n.ONE_MINUS_CONSTANT_ALPHA};function S(N,vt,Z,it,yt,Mt,kt,me,Ce,se){if(N===ci){M===!0&&(Ct(n.BLEND),M=!1);return}if(M===!1&&(mt(n.BLEND),M=!0),N!==Dm){if(N!==m||se!==b){if((h!==wi||g!==wi)&&(n.blendEquation(n.FUNC_ADD),h=wi,g=wi),se)switch(N){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.ONE,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,T=null,D=null,R=null,P.set(0,0,0),O=0,m=N,b=se}return}yt=yt||vt,Mt=Mt||Z,kt=kt||it,(vt!==h||yt!==g)&&(n.blendEquationSeparate(A[vt],A[yt]),h=vt,g=yt),(Z!==w||it!==T||Mt!==D||kt!==R)&&(n.blendFuncSeparate(L[Z],L[it],L[Mt],L[kt]),w=Z,T=it,D=Mt,R=kt),(me.equals(P)===!1||Ce!==O)&&(n.blendColor(me.r,me.g,me.b,Ce),P.copy(me),O=Ce),m=N,b=!1}function nt(N,vt){N.side===Vn?Ct(n.CULL_FACE):mt(n.CULL_FACE);let Z=N.side===ke;vt&&(Z=!Z),$(Z),N.blending===fr&&N.transparent===!1?S(ci):S(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const it=N.stencilWrite;a.setTest(it),it&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){E!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),E=N)}function q(N){N!==Cm?(mt(n.CULL_FACE),N!==U&&(N===Xc?n.cullFace(n.BACK):N===Pm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),U=N}function j(N){N!==tt&&(J&&n.lineWidth(N),tt=N)}function st(N,vt,Z){N?(mt(n.POLYGON_OFFSET_FILL),(K!==vt||rt!==Z)&&(n.polygonOffset(vt,Z),K=vt,rt=Z)):Ct(n.POLYGON_OFFSET_FILL)}function Y(N){N?mt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function x(N){N===void 0&&(N=n.TEXTURE0+ot-1),dt!==N&&(n.activeTexture(N),dt=N)}function _(N,vt,Z){Z===void 0&&(dt===null?Z=n.TEXTURE0+ot-1:Z=dt);let it=St[Z];it===void 0&&(it={type:void 0,texture:void 0},St[Z]=it),(it.type!==N||it.texture!==vt)&&(dt!==Z&&(n.activeTexture(Z),dt=Z),n.bindTexture(N,vt||Tt[N]),it.type=N,it.texture=vt)}function C(){const N=St[dt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){Qt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Qt.copy(N))}function pt(N){et.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function Ft(N,vt){let Z=c.get(vt);Z===void 0&&(Z=new WeakMap,c.set(vt,Z));let it=Z.get(N);it===void 0&&(it=n.getUniformBlockIndex(vt,N.name),Z.set(N,it))}function Vt(N,vt){const it=c.get(vt).get(N);l.get(vt)!==it&&(n.uniformBlockBinding(vt,it,N.__bindingPointIndex),l.set(vt,it))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},dt=null,St={},f={},d=new WeakMap,p=[],v=null,M=!1,m=null,h=null,w=null,T=null,g=null,D=null,R=null,P=new Kt(0,0,0),O=0,b=!1,E=null,U=null,tt=null,K=null,rt=null,Qt.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:mt,disable:Ct,bindFramebuffer:Nt,drawBuffers:Ht,useProgram:de,setBlending:S,setMaterial:nt,setFlipSided:$,setCullFace:q,setLineWidth:j,setPolygonOffset:st,setScissorTest:Y,activeTexture:x,bindTexture:_,unbindTexture:C,compressedTexImage2D:z,compressedTexImage3D:k,texImage2D:_t,texImage3D:wt,updateUBOMapping:Ft,uniformBlockBinding:Vt,texStorage2D:Pt,texStorage3D:lt,texSubImage2D:G,texSubImage3D:ht,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Ut,viewport:pt,reset:re}}function iS(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,_){return p?new OffscreenCanvas(x,_):po("canvas")}function M(x,_,C){let z=1;const k=Y(x);if((k.width>C||k.height>C)&&(z=C/Math.max(k.width,k.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(z*k.width),ht=Math.floor(z*k.height);f===void 0&&(f=v(G,ht));const at=_?v(G,ht):f;return at.width=G,at.height=ht,at.getContext("2d").drawImage(x,0,0,G,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+G+"x"+ht+")."),at}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),x;return x}function m(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function w(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(x,_,C,z,k=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=_;if(_===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),_===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),_===n.RGBA){const ht=k?fo:Zt.getTransfer(z);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=ht===ae?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function g(x,_){let C;return x?_===null||_===Ni||_===xr?C=n.DEPTH24_STENCIL8:_===Gn?C=n.DEPTH32F_STENCIL8:_===ss&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ni||_===xr?C=n.DEPTH_COMPONENT24:_===Gn?C=n.DEPTH_COMPONENT32F:_===ss&&(C=n.DEPTH_COMPONENT16),C}function D(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==gn&&x.minFilter!==bn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function R(x){const _=x.target;_.removeEventListener("dispose",R),O(_),_.isVideoTexture&&u.delete(_)}function P(x){const _=x.target;_.removeEventListener("dispose",P),E(_)}function O(x){const _=i.get(x);if(_.__webglInit===void 0)return;const C=x.source,z=d.get(C);if(z){const k=z[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&b(x),Object.keys(z).length===0&&d.delete(C)}i.remove(x)}function b(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const C=x.source,z=d.get(C);delete z[_.__cacheKey],o.memory.textures--}function E(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let k=0;k<_.__webglFramebuffer[z].length;k++)n.deleteFramebuffer(_.__webglFramebuffer[z][k]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=x.textures;for(let z=0,k=C.length;z<k;z++){const G=i.get(C[z]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(C[z])}i.remove(x)}let U=0;function tt(){U=0}function K(){const x=U;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),U+=1,x}function rt(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function ot(x,_){const C=i.get(x);if(x.isVideoTexture&&j(x),x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(C,x,_);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function J(x,_){const C=i.get(x);if(x.version>0&&C.__version!==x.version){et(C,x,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function Q(x,_){const C=i.get(x);if(x.version>0&&C.__version!==x.version){et(C,x,_);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function H(x,_){const C=i.get(x);if(x.version>0&&C.__version!==x.version){ut(C,x,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const dt={[Za]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},St={[gn]:n.NEAREST,[sg]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},bt={[cg]:n.NEVER,[mg]:n.ALWAYS,[ug]:n.LESS,[_h]:n.LEQUAL,[fg]:n.EQUAL,[pg]:n.GEQUAL,[hg]:n.GREATER,[dg]:n.NOTEQUAL};function It(x,_){if(_.type===Gn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===bn||_.magFilter===$o||_.magFilter===Ss||_.magFilter===Pi||_.minFilter===bn||_.minFilter===$o||_.minFilter===Ss||_.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,dt[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,dt[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,dt[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,St[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,St[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,bt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Ss&&_.minFilter!==Pi||_.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Qt(x,_){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",R));const z=_.source;let k=d.get(z);k===void 0&&(k={},d.set(z,k));const G=rt(_);if(G!==x.__cacheKey){k[G]===void 0&&(k[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),k[G].usedTimes++;const ht=k[x.__cacheKey];ht!==void 0&&(k[x.__cacheKey].usedTimes--,ht.usedTimes===0&&b(_)),x.__cacheKey=G,x.__webglTexture=k[G].texture}return C}function et(x,_,C){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const k=Qt(x,_),G=_.source;e.bindTexture(z,x.__webglTexture,n.TEXTURE0+C);const ht=i.get(G);if(G.version!==ht.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const at=Zt.getPrimaries(Zt.workingColorSpace),ft=_.colorSpace===li?null:Zt.getPrimaries(_.colorSpace),Pt=_.colorSpace===li||at===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let lt=M(_.image,!1,r.maxTextureSize);lt=st(_,lt);const _t=s.convert(_.format,_.colorSpace),wt=s.convert(_.type);let Ut=T(_.internalFormat,_t,wt,_.colorSpace,_.isVideoTexture);It(z,_);let pt;const Ft=_.mipmaps,Vt=_.isVideoTexture!==!0,re=ht.__version===void 0||k===!0,N=G.dataReady,vt=D(_,lt);if(_.isDepthTexture)Ut=g(_.format===Mr,_.type),re&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,Ut,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Ut,lt.width,lt.height,0,_t,wt,null));else if(_.isDataTexture)if(Ft.length>0){Vt&&re&&e.texStorage2D(n.TEXTURE_2D,vt,Ut,Ft[0].width,Ft[0].height);for(let Z=0,it=Ft.length;Z<it;Z++)pt=Ft[Z],Vt?N&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,pt.width,pt.height,_t,wt,pt.data):e.texImage2D(n.TEXTURE_2D,Z,Ut,pt.width,pt.height,0,_t,wt,pt.data);_.generateMipmaps=!1}else Vt?(re&&e.texStorage2D(n.TEXTURE_2D,vt,Ut,lt.width,lt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,_t,wt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,lt.width,lt.height,0,_t,wt,lt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Ut,Ft[0].width,Ft[0].height,lt.depth);for(let Z=0,it=Ft.length;Z<it;Z++)if(pt=Ft[Z],_.format!==pn)if(_t!==null)if(Vt){if(N)if(_.layerUpdates.size>0){const yt=Tu(pt.width,pt.height,_.format,_.type);for(const Mt of _.layerUpdates){const kt=pt.data.subarray(Mt*yt/pt.data.BYTES_PER_ELEMENT,(Mt+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Mt,pt.width,pt.height,1,_t,kt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,pt.width,pt.height,lt.depth,_t,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ut,pt.width,pt.height,lt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,pt.width,pt.height,lt.depth,_t,wt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ut,pt.width,pt.height,lt.depth,0,_t,wt,pt.data)}else{Vt&&re&&e.texStorage2D(n.TEXTURE_2D,vt,Ut,Ft[0].width,Ft[0].height);for(let Z=0,it=Ft.length;Z<it;Z++)pt=Ft[Z],_.format!==pn?_t!==null?Vt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,pt.width,pt.height,_t,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Ut,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?N&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,pt.width,pt.height,_t,wt,pt.data):e.texImage2D(n.TEXTURE_2D,Z,Ut,pt.width,pt.height,0,_t,wt,pt.data)}else if(_.isDataArrayTexture)if(Vt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Ut,lt.width,lt.height,lt.depth),N)if(_.layerUpdates.size>0){const Z=Tu(lt.width,lt.height,_.format,_.type);for(const it of _.layerUpdates){const yt=lt.data.subarray(it*Z/lt.data.BYTES_PER_ELEMENT,(it+1)*Z/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,_t,wt,yt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,_t,wt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,lt.width,lt.height,lt.depth,0,_t,wt,lt.data);else if(_.isData3DTexture)Vt?(re&&e.texStorage3D(n.TEXTURE_3D,vt,Ut,lt.width,lt.height,lt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,_t,wt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,lt.width,lt.height,lt.depth,0,_t,wt,lt.data);else if(_.isFramebufferTexture){if(re)if(Vt)e.texStorage2D(n.TEXTURE_2D,vt,Ut,lt.width,lt.height);else{let Z=lt.width,it=lt.height;for(let yt=0;yt<vt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Ut,Z,it,0,_t,wt,null),Z>>=1,it>>=1}}else if(Ft.length>0){if(Vt&&re){const Z=Y(Ft[0]);e.texStorage2D(n.TEXTURE_2D,vt,Ut,Z.width,Z.height)}for(let Z=0,it=Ft.length;Z<it;Z++)pt=Ft[Z],Vt?N&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,_t,wt,pt):e.texImage2D(n.TEXTURE_2D,Z,Ut,_t,wt,pt);_.generateMipmaps=!1}else if(Vt){if(re){const Z=Y(lt);e.texStorage2D(n.TEXTURE_2D,vt,Ut,Z.width,Z.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,wt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Ut,_t,wt,lt);m(_)&&h(z),ht.__version=G.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ut(x,_,C){if(_.image.length!==6)return;const z=Qt(x,_),k=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+C);const G=i.get(k);if(k.version!==G.__version||z===!0){e.activeTexture(n.TEXTURE0+C);const ht=Zt.getPrimaries(Zt.workingColorSpace),at=_.colorSpace===li?null:Zt.getPrimaries(_.colorSpace),ft=_.colorSpace===li||ht===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,lt=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!Pt&&!lt?_t[it]=M(_.image[it],!0,r.maxCubemapSize):_t[it]=lt?_.image[it].image:_.image[it],_t[it]=st(_,_t[it]);const wt=_t[0],Ut=s.convert(_.format,_.colorSpace),pt=s.convert(_.type),Ft=T(_.internalFormat,Ut,pt,_.colorSpace),Vt=_.isVideoTexture!==!0,re=G.__version===void 0||z===!0,N=k.dataReady;let vt=D(_,wt);It(n.TEXTURE_CUBE_MAP,_);let Z;if(Pt){Vt&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ft,wt.width,wt.height);for(let it=0;it<6;it++){Z=_t[it].mipmaps;for(let yt=0;yt<Z.length;yt++){const Mt=Z[yt];_.format!==pn?Ut!==null?Vt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Mt.width,Mt.height,Ut,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Mt.width,Mt.height,Ut,pt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Ft,Mt.width,Mt.height,0,Ut,pt,Mt.data)}}}else{if(Z=_.mipmaps,Vt&&re){Z.length>0&&vt++;const it=Y(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ft,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Ut,pt,_t[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,_t[it].width,_t[it].height,0,Ut,pt,_t[it].data);for(let yt=0;yt<Z.length;yt++){const kt=Z[yt].image[it].image;Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,kt.width,kt.height,Ut,pt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Ft,kt.width,kt.height,0,Ut,pt,kt.data)}}else{Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ut,pt,_t[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,Ut,pt,_t[it]);for(let yt=0;yt<Z.length;yt++){const Mt=Z[yt];Vt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Ut,pt,Mt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Ft,Ut,pt,Mt.image[it])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),G.__version=k.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Tt(x,_,C,z,k,G){const ht=s.convert(C.format,C.colorSpace),at=s.convert(C.type),ft=T(C.internalFormat,ht,at,C.colorSpace),Pt=i.get(_),lt=i.get(C);if(lt.__renderTarget=_,!Pt.__hasExternalTextures){const _t=Math.max(1,_.width>>G),wt=Math.max(1,_.height>>G);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,G,ft,_t,wt,_.depth,0,ht,at,null):e.texImage2D(k,G,ft,_t,wt,0,ht,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,k,lt.__webglTexture,0,$(_)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,k,lt.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(x,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const z=_.depthTexture,k=z&&z.isDepthTexture?z.type:null,G=g(_.stencilBuffer,k),ht=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=$(_);q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,G,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,x)}else{const z=_.textures;for(let k=0;k<z.length;k++){const G=z[k],ht=s.convert(G.format,G.colorSpace),at=s.convert(G.type),ft=T(G.internalFormat,ht,at,G.colorSpace),Pt=$(_);C&&q(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ft,_.width,_.height):q(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,ft,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ft,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ot(_.depthTexture,0);const k=z.__webglTexture,G=$(_);if(_.depthTexture.format===hr)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(_.depthTexture.format===Mr)q(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Nt(x){const _=i.get(x),C=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const k=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",k)};z.addEventListener("dispose",k),_.__depthDisposeCallback=k}_.__boundDepthTexture=z}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Ct(_.__webglFramebuffer,x)}else if(C){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),mt(_.__webglDepthbuffer[z],x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),mt(_.__webglDepthbuffer,x,!1);else{const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(x,_,C){const z=i.get(x);_!==void 0&&Tt(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Nt(x)}function de(x){const _=x.texture,C=i.get(x),z=i.get(_);x.addEventListener("dispose",P);const k=x.textures,G=x.isWebGLCubeRenderTarget===!0,ht=k.length>1;if(ht||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[at]=[];for(let ft=0;ft<_.mipmaps.length;ft++)C.__webglFramebuffer[at][ft]=n.createFramebuffer()}else C.__webglFramebuffer[at]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)C.__webglFramebuffer[at]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ht)for(let at=0,ft=k.length;at<ft;at++){const Pt=i.get(k[at]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&q(x)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let at=0;at<k.length;at++){const ft=k[at];C.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[at]);const Pt=s.convert(ft.format,ft.colorSpace),lt=s.convert(ft.type),_t=T(ft.internalFormat,Pt,lt,ft.colorSpace,x.isXRRenderTarget===!0),wt=$(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,_t,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,C.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(C.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),It(n.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Tt(C.__webglFramebuffer[at][ft],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else Tt(C.__webglFramebuffer[at],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let at=0,ft=k.length;at<ft;at++){const Pt=k[at],lt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),It(n.TEXTURE_2D,Pt),Tt(C.__webglFramebuffer,x,Pt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Pt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(at=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,z.__webglTexture),It(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Tt(C.__webglFramebuffer[ft],x,_,n.COLOR_ATTACHMENT0,at,ft);else Tt(C.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,at,0);m(_)&&h(at),e.unbindTexture()}x.depthBuffer&&Nt(x)}function A(x){const _=x.textures;for(let C=0,z=_.length;C<z;C++){const k=_[C];if(m(k)){const G=w(x),ht=i.get(k).__webglTexture;e.bindTexture(G,ht),h(G),e.unbindTexture()}}}const L=[],S=[];function nt(x){if(x.samples>0){if(q(x)===!1){const _=x.textures,C=x.width,z=x.height;let k=n.COLOR_BUFFER_BIT;const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(x),at=_.length>1;if(at)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const Pt=i.get(_[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,C,z,0,0,C,z,k,n.NEAREST),l===!0&&(L.length=0,S.length=0,L.push(n.COLOR_ATTACHMENT0+ft),x.depthBuffer&&x.resolveDepthBuffer===!1&&(L.push(G),S.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const Pt=i.get(_[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $(x){return Math.min(r.maxSamples,x.samples)}function q(x){const _=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function j(x){const _=o.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function st(x,_){const C=x.colorSpace,z=x.format,k=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==Sr&&C!==li&&(Zt.getTransfer(C)===ae?(z!==pn||k!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function Y(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=tt,this.setTexture2D=ot,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ht,this.setupRenderTarget=de,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=q}function rS(n,t){function e(i,r=li){let s;const o=Zt.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===ss)return n.UNSIGNED_SHORT;if(i===Yl)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===fs)return n.HALF_FLOAT;if(i===ch)return n.ALPHA;if(i===uh)return n.RGB;if(i===pn)return n.RGBA;if(i===fh)return n.LUMINANCE;if(i===hh)return n.LUMINANCE_ALPHA;if(i===hr)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===dh)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===ph)return n.RG;if(i===Zl)return n.RG_INTEGER;if(i===Jl)return n.RGBA_INTEGER;if(i===js||i===Zs||i===Js||i===Qs)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===tl||i===el||i===nl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===rl||i===sl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===il||i===rl)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ol||i===al||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ol)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ul)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===to||i===Ml||i===Sl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===to)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===yl||i===El||i===Tl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===to)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const sS={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),h=this._getHandJoint(c,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const oS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ke,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new hi({vertexShader:oS,fragmentShader:aS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cS extends Tr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const M=new lS,m=e.getContextAttributes();let h=null,w=null;const T=[],g=[],D=new Dt;let R=null;const P=new tn;P.viewport=new le;const O=new tn;O.viewport=new le;const b=[P,O],E=new C_;let U=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=T[et];return ut===void 0&&(ut=new wa,T[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=T[et];return ut===void 0&&(ut=new wa,T[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=T[et];return ut===void 0&&(ut=new wa,T[et]=ut),ut.getHandSpace()};function K(et){const ut=g.indexOf(et.inputSource);if(ut===-1)return;const Tt=T[ut];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,c||o),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function rt(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",rt),r.removeEventListener("inputsourceschange",ot);for(let et=0;et<T.length;et++){const ut=g[et];ut!==null&&(g[et]=null,T[et].disconnect(ut))}U=null,tt=null,M.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,w=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",rt),r.addEventListener("inputsourceschange",ot),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Fi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,Tt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Mr:hr,Tt=m.stencil?xr:Ni);const Ct={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Ct),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Fi(d.textureWidth,d.textureHeight,{format:pn,type:jn,depthTexture:new Dh(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qt.setContext(r),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ot(et){for(let ut=0;ut<et.removed.length;ut++){const Tt=et.removed[ut],mt=g.indexOf(Tt);mt>=0&&(g[mt]=null,T[mt].disconnect(Tt))}for(let ut=0;ut<et.added.length;ut++){const Tt=et.added[ut];let mt=g.indexOf(Tt);if(mt===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=g.length){g.push(Tt),mt=Nt;break}else if(g[Nt]===null){g[Nt]=Tt,mt=Nt;break}if(mt===-1)break}const Ct=T[mt];Ct&&Ct.connect(Tt)}}const J=new I,Q=new I;function H(et,ut,Tt){J.setFromMatrixPosition(ut.matrixWorld),Q.setFromMatrixPosition(Tt.matrixWorld);const mt=J.distanceTo(Q),Ct=ut.projectionMatrix.elements,Nt=Tt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),de=Ct[14]/(Ct[10]+1),A=(Ct[9]+1)/Ct[5],L=(Ct[9]-1)/Ct[5],S=(Ct[8]-1)/Ct[0],nt=(Nt[8]+1)/Nt[0],$=Ht*S,q=Ht*nt,j=mt/(-S+nt),st=j*-S;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(st),et.translateZ(j),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ct[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Y=Ht+j,x=de+j,_=$-st,C=q+(mt-st),z=A*de/x*Y,k=L*de/x*Y;et.projectionMatrix.makePerspective(_,C,z,k,Y,x),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function dt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;let ut=et.near,Tt=et.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),E.near=O.near=P.near=ut,E.far=O.far=P.far=Tt,(U!==E.near||tt!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,tt=E.far),P.layers.mask=et.layers.mask|2,O.layers.mask=et.layers.mask|4,E.layers.mask=P.layers.mask|O.layers.mask;const mt=et.parent,Ct=E.cameras;dt(E,mt);for(let Nt=0;Nt<Ct.length;Nt++)dt(Ct[Nt],mt);Ct.length===2?H(E,P,O):E.projectionMatrix.copy(P.projectionMatrix),St(et,E,mt)};function St(et,ut,Tt){Tt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=os*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(E)};let bt=null;function It(et,ut){if(u=ut.getViewerPose(c||o),v=ut,u!==null){const Tt=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let mt=!1;Tt.length!==E.cameras.length&&(E.cameras.length=0,mt=!0);for(let Nt=0;Nt<Tt.length;Nt++){const Ht=Tt[Nt];let de=null;if(p!==null)de=p.getViewport(Ht);else{const L=f.getViewSubImage(d,Ht);de=L.viewport,Nt===0&&(t.setRenderTargetTextures(w,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(w))}let A=b[Nt];A===void 0&&(A=new tn,A.layers.enable(Nt),A.viewport=new le,b[Nt]=A),A.matrix.fromArray(Ht.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Ht.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(de.x,de.y,de.width,de.height),Nt===0&&(E.matrix.copy(A.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),mt===!0&&E.cameras.push(A)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Nt=f.getDepthInformation(Tt[0]);Nt&&Nt.isValid&&Nt.texture&&M.init(t,Nt,r.renderState)}}for(let Tt=0;Tt<T.length;Tt++){const mt=g[Tt],Ct=T[Tt];mt!==null&&Ct!==void 0&&Ct.update(mt,ut,c||o)}bt&&bt(et,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),v=null}const Qt=new Bh;Qt.setAnimationLoop(It),this.setAnimationLoop=function(et){bt=et},this.dispose=function(){}}}const Ei=new Cn,uS=new he;function fS(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,bh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,T,g){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,g)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),M(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,w,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ke&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ke&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=t.get(h),T=w.envMap,g=w.envMapRotation;T&&(m.envMap.value=T,Ei.copy(g),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(uS.makeRotationFromEuler(Ei)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=T*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ke&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){const w=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hS(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const g=T.program;i.uniformBlockBinding(w,g)}function c(w,T){let g=r[w.id];g===void 0&&(v(w),g=u(w),r[w.id]=g,w.addEventListener("dispose",m));const D=T.program;i.updateUBOMapping(w,D);const R=t.render.frame;s[w.id]!==R&&(d(w),s[w.id]=R)}function u(w){const T=f();w.__bindingPointIndex=T;const g=n.createBuffer(),D=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,g),g}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const T=r[w.id],g=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,P=g.length;R<P;R++){const O=Array.isArray(g[R])?g[R]:[g[R]];for(let b=0,E=O.length;b<E;b++){const U=O[b];if(p(U,R,b,D)===!0){const tt=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let rt=0;for(let ot=0;ot<K.length;ot++){const J=K[ot],Q=M(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,tt+rt,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,rt),rt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,tt,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,T,g,D){const R=w.value,P=T+"_"+g;if(D[P]===void 0)return typeof R=="number"||typeof R=="boolean"?D[P]=R:D[P]=R.clone(),!0;{const O=D[P];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return D[P]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function v(w){const T=w.uniforms;let g=0;const D=16;for(let P=0,O=T.length;P<O;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let E=0,U=b.length;E<U;E++){const tt=b[E],K=Array.isArray(tt.value)?tt.value:[tt.value];for(let rt=0,ot=K.length;rt<ot;rt++){const J=K[rt],Q=M(J),H=g%D,dt=H%Q.boundary,St=H+dt;g+=dt,St!==0&&D-St<Q.storage&&(g+=D-St),tt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=g,g+=Q.storage}}}const R=g%D;return R>0&&(g+=D-R),w.__size=g,w.__cache={},this}function M(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const g=o.indexOf(T.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class dS{constructor(t={}){const{canvas:e=Dg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),M=new Int32Array(4);let m=null,h=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=ui,this.toneMappingExposure=1;const g=this;let D=!1,R=0,P=0,O=null,b=-1,E=null;const U=new le,tt=new le;let K=null;const rt=new Kt(0);let ot=0,J=e.width,Q=e.height,H=1,dt=null,St=null;const bt=new le(0,0,J,Q),It=new le(0,0,J,Q);let Qt=!1;const et=new ec;let ut=!1,Tt=!1;const mt=new he,Ct=new he,Nt=new I,Ht=new le,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function L(){return O===null?H:1}let S=i;function nt(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ql}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),S===null){const F="webgl2";if(S=nt(F,y),S===null)throw nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $,q,j,st,Y,x,_,C,z,k,G,ht,at,ft,Pt,lt,_t,wt,Ut,pt,Ft,Vt,re,N;function vt(){$=new yx(S),$.init(),Vt=new rS(S,$),q=new gx(S,$,t,Vt),j=new nS(S,$),q.reverseDepthBuffer&&d&&j.buffers.depth.setReversed(!0),st=new bx(S),Y=new kM,x=new iS(S,$,j,Y,q,Vt,st),_=new vx(g),C=new Sx(g),z=new D_(S),re=new px(S,z),k=new Ex(S,z,st,re),G=new wx(S,k,z,st),Ut=new Ax(S,q,x),lt=new _x(Y),ht=new GM(g,_,C,$,q,re,lt),at=new fS(g,Y),ft=new XM,Pt=new ZM($),wt=new dx(g,_,C,j,G,p,l),_t=new tS(g,G,q),N=new hS(S,st,q,j),pt=new mx(S,$,st),Ft=new Tx(S,$,st),st.programs=ht.programs,g.capabilities=q,g.extensions=$,g.properties=Y,g.renderLists=ft,g.shadowMap=_t,g.state=j,g.info=st}vt();const Z=new cS(g,S);this.xr=Z,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const y=$.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(J,Q,!1))},this.getSize=function(y){return y.set(J,Q)},this.setSize=function(y,F,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,Q=F,e.width=Math.floor(y*H),e.height=Math.floor(F*H),W===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(J*H,Q*H).floor()},this.setDrawingBufferSize=function(y,F,W){J=y,Q=F,H=W,e.width=Math.floor(y*W),e.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(bt)},this.setViewport=function(y,F,W,X){y.isVector4?bt.set(y.x,y.y,y.z,y.w):bt.set(y,F,W,X),j.viewport(U.copy(bt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,F,W,X){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,F,W,X),j.scissor(tt.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(y){j.setScissorTest(Qt=y)},this.setOpaqueSort=function(y){dt=y},this.setTransparentSort=function(y){St=y},this.getClearColor=function(y){return y.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(y=!0,F=!0,W=!0){let X=0;if(y){let B=!1;if(O!==null){const ct=O.texture.format;B=ct===Jl||ct===Zl||ct===jl}if(B){const ct=O.texture.type,xt=ct===jn||ct===Ni||ct===ss||ct===xr||ct===$l||ct===Kl,Et=wt.getClearColor(),At=wt.getClearAlpha(),Ot=Et.r,zt=Et.g,Rt=Et.b;xt?(v[0]=Ot,v[1]=zt,v[2]=Rt,v[3]=At,S.clearBufferuiv(S.COLOR,0,v)):(M[0]=Ot,M[1]=zt,M[2]=Rt,M[3]=At,S.clearBufferiv(S.COLOR,0,M))}else X|=S.COLOR_BUFFER_BIT}F&&(X|=S.DEPTH_BUFFER_BIT),W&&(X|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),wt.dispose(),ft.dispose(),Pt.dispose(),Y.dispose(),_.dispose(),C.dispose(),G.dispose(),re.dispose(),N.dispose(),ht.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ac),Z.removeEventListener("sessionend",lc),di.stop()};function it(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=st.autoReset,F=_t.enabled,W=_t.autoUpdate,X=_t.needsUpdate,B=_t.type;vt(),st.autoReset=y,_t.enabled=F,_t.autoUpdate=W,_t.needsUpdate=X,_t.type=B}function Mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function kt(y){const F=y.target;F.removeEventListener("dispose",kt),me(F)}function me(y){Ce(y),Y.remove(y)}function Ce(y){const F=Y.get(y).programs;F!==void 0&&(F.forEach(function(W){ht.releaseProgram(W)}),y.isShaderMaterial&&ht.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,X,B,ct){F===null&&(F=de);const xt=B.isMesh&&B.matrixWorld.determinant()<0,Et=Wh(y,F,W,X,B);j.setMaterial(X,xt);let At=W.index,Ot=1;if(X.wireframe===!0){if(At=k.getWireframeAttribute(W),At===void 0)return;Ot=2}const zt=W.drawRange,Rt=W.attributes.position;let Yt=zt.start*Ot,te=(zt.start+zt.count)*Ot;ct!==null&&(Yt=Math.max(Yt,ct.start*Ot),te=Math.min(te,(ct.start+ct.count)*Ot)),At!==null?(Yt=Math.max(Yt,0),te=Math.min(te,At.count)):Rt!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,Rt.count));const ve=te-Yt;if(ve<0||ve===1/0)return;re.setup(B,X,Et,W,At);let ge,jt=pt;if(At!==null&&(ge=z.get(At),jt=Ft,jt.setIndex(ge)),B.isMesh)X.wireframe===!0?(j.setLineWidth(X.wireframeLinewidth*L()),jt.setMode(S.LINES)):jt.setMode(S.TRIANGLES);else if(B.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),j.setLineWidth(Lt*L()),B.isLineSegments?jt.setMode(S.LINES):B.isLineLoop?jt.setMode(S.LINE_LOOP):jt.setMode(S.LINE_STRIP)}else B.isPoints?jt.setMode(S.POINTS):B.isSprite&&jt.setMode(S.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)jt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($.get("WEBGL_multi_draw"))jt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Lt=B._multiDrawStarts,be=B._multiDrawCounts,ee=B._multiDrawCount,ln=At?z.get(At).bytesPerElement:1,zi=Y.get(X).currentProgram.getUniforms();for(let je=0;je<ee;je++)zi.setValue(S,"_gl_DrawID",je),jt.render(Lt[je]/ln,be[je])}else if(B.isInstancedMesh)jt.renderInstances(Yt,ve,B.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Lt);jt.renderInstances(Yt,ve,be)}else jt.render(Yt,ve)};function se(y,F,W){y.transparent===!0&&y.side===Vn&&y.forceSinglePass===!1?(y.side=ke,y.needsUpdate=!0,gs(y,F,W),y.side=fi,y.needsUpdate=!0,gs(y,F,W),y.side=Vn):gs(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),h=Pt.get(W),h.init(F),T.push(h),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),y!==W&&y.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const X=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let xt=0;xt<ct.length;xt++){const Et=ct[xt];se(Et,W,B),X.add(Et)}else se(ct,W,B),X.add(ct)}),T.pop(),h=null,X},this.compileAsync=function(y,F,W=null){const X=this.compile(y,F,W);return new Promise(B=>{function ct(){if(X.forEach(function(xt){Y.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){B(y);return}setTimeout(ct,10)}$.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let an=null;function Pn(y){an&&an(y)}function ac(){di.stop()}function lc(){di.start()}const di=new Bh;di.setAnimationLoop(Pn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(y){an=y,Z.setAnimationLoop(y),y===null?di.stop():di.start()},Z.addEventListener("sessionstart",ac),Z.addEventListener("sessionend",lc),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),y.isScene===!0&&y.onBeforeRender(g,y,F,O),h=Pt.get(y,T.length),h.init(F),T.push(h),Ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(Ct),Tt=this.localClippingEnabled,ut=lt.init(this.clippingPlanes,Tt),m=ft.get(y,w.length),m.init(),w.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ct=g.xr.getDepthSensingMesh();ct!==null&&Io(ct,F,-1/0,g.sortObjects)}Io(y,F,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(dt,St),A=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,A&&wt.addToRenderList(m,y),this.info.render.frame++,ut===!0&&lt.beginShadows();const W=h.state.shadowsArray;_t.render(W,y,F),ut===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(h.setupLights(),F.isArrayCamera){const ct=F.cameras;if(B.length>0)for(let xt=0,Et=ct.length;xt<Et;xt++){const At=ct[xt];uc(X,B,y,At)}A&&wt.render(y);for(let xt=0,Et=ct.length;xt<Et;xt++){const At=ct[xt];cc(m,y,At,At.viewport)}}else B.length>0&&uc(X,B,y,F),A&&wt.render(y),cc(m,y,F);O!==null&&(x.updateMultisampleRenderTarget(O),x.updateRenderTargetMipmap(O)),y.isScene===!0&&y.onAfterRender(g,y,F),re.resetDefaultState(),b=-1,E=null,T.pop(),T.length>0?(h=T[T.length-1],ut===!0&&lt.setGlobalState(g.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Io(y,F,W,X){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||et.intersectsSprite(y)){X&&Ht.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);const xt=G.update(y),Et=y.material;Et.visible&&m.push(y,xt,Et,W,Ht.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||et.intersectsObject(y))){const xt=G.update(y),Et=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ht.copy(y.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ht.copy(xt.boundingSphere.center)),Ht.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(Et)){const At=xt.groups;for(let Ot=0,zt=At.length;Ot<zt;Ot++){const Rt=At[Ot],Yt=Et[Rt.materialIndex];Yt&&Yt.visible&&m.push(y,xt,Yt,W,Ht.z,Rt)}}else Et.visible&&m.push(y,xt,Et,W,Ht.z,null)}}const ct=y.children;for(let xt=0,Et=ct.length;xt<Et;xt++)Io(ct[xt],F,W,X)}function cc(y,F,W,X){const B=y.opaque,ct=y.transmissive,xt=y.transparent;h.setupLightsView(W),ut===!0&&lt.setGlobalState(g.clippingPlanes,W),X&&j.viewport(U.copy(X)),B.length>0&&ms(B,F,W),ct.length>0&&ms(ct,F,W),xt.length>0&&ms(xt,F,W),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function uc(y,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[X.id]===void 0&&(h.state.transmissionRenderTarget[X.id]=new Fi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?fs:jn,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ct=h.state.transmissionRenderTarget[X.id],xt=X.viewport||U;ct.setSize(xt.z,xt.w);const Et=g.getRenderTarget();g.setRenderTarget(ct),g.getClearColor(rt),ot=g.getClearAlpha(),ot<1&&g.setClearColor(16777215,.5),g.clear(),A&&wt.render(W);const At=g.toneMapping;g.toneMapping=ui;const Ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),ut===!0&&lt.setGlobalState(g.clippingPlanes,X),ms(y,W,X),x.updateMultisampleRenderTarget(ct),x.updateRenderTargetMipmap(ct),$.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Rt=0,Yt=F.length;Rt<Yt;Rt++){const te=F[Rt],ve=te.object,ge=te.geometry,jt=te.material,Lt=te.group;if(jt.side===Vn&&ve.layers.test(X.layers)){const be=jt.side;jt.side=ke,jt.needsUpdate=!0,fc(ve,W,X,ge,jt,Lt),jt.side=be,jt.needsUpdate=!0,zt=!0}}zt===!0&&(x.updateMultisampleRenderTarget(ct),x.updateRenderTargetMipmap(ct))}g.setRenderTarget(Et),g.setClearColor(rt,ot),Ot!==void 0&&(X.viewport=Ot),g.toneMapping=At}function ms(y,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ct=y.length;B<ct;B++){const xt=y[B],Et=xt.object,At=xt.geometry,Ot=X===null?xt.material:X,zt=xt.group;Et.layers.test(W.layers)&&fc(Et,F,W,At,Ot,zt)}}function fc(y,F,W,X,B,ct){y.onBeforeRender(g,F,W,X,B,ct),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(g,F,W,X,y,ct),B.transparent===!0&&B.side===Vn&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,g.renderBufferDirect(W,F,X,B,y,ct),B.side=fi,B.needsUpdate=!0,g.renderBufferDirect(W,F,X,B,y,ct),B.side=Vn):g.renderBufferDirect(W,F,X,B,y,ct),y.onAfterRender(g,F,W,X,B,ct)}function gs(y,F,W){F.isScene!==!0&&(F=de);const X=Y.get(y),B=h.state.lights,ct=h.state.shadowsArray,xt=B.state.version,Et=ht.getParameters(y,B.state,ct,F,W),At=ht.getProgramCacheKey(Et);let Ot=X.programs;X.environment=y.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(y.isMeshStandardMaterial?C:_).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ot===void 0&&(y.addEventListener("dispose",kt),Ot=new Map,X.programs=Ot);let zt=Ot.get(At);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===xt)return dc(y,Et),zt}else Et.uniforms=ht.getUniforms(y),y.onBeforeCompile(Et,g),zt=ht.acquireProgram(Et,At),Ot.set(At,zt),X.uniforms=Et.uniforms;const Rt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=lt.uniform),dc(y,Et),X.needsLights=qh(y),X.lightsStateVersion=xt,X.needsLights&&(Rt.ambientLightColor.value=B.state.ambient,Rt.lightProbe.value=B.state.probe,Rt.directionalLights.value=B.state.directional,Rt.directionalLightShadows.value=B.state.directionalShadow,Rt.spotLights.value=B.state.spot,Rt.spotLightShadows.value=B.state.spotShadow,Rt.rectAreaLights.value=B.state.rectArea,Rt.ltc_1.value=B.state.rectAreaLTC1,Rt.ltc_2.value=B.state.rectAreaLTC2,Rt.pointLights.value=B.state.point,Rt.pointLightShadows.value=B.state.pointShadow,Rt.hemisphereLights.value=B.state.hemi,Rt.directionalShadowMap.value=B.state.directionalShadowMap,Rt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Rt.spotShadowMap.value=B.state.spotShadowMap,Rt.spotLightMatrix.value=B.state.spotLightMatrix,Rt.spotLightMap.value=B.state.spotLightMap,Rt.pointShadowMap.value=B.state.pointShadowMap,Rt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function hc(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=eo.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function dc(y,F){const W=Y.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Wh(y,F,W,X,B){F.isScene!==!0&&(F=de),x.resetTextureUnits();const ct=F.fog,xt=X.isMeshStandardMaterial?F.environment:null,Et=O===null?g.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Sr,At=(X.isMeshStandardMaterial?C:_).get(X.envMap||xt),Ot=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,zt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!W.morphAttributes.position,Yt=!!W.morphAttributes.normal,te=!!W.morphAttributes.color;let ve=ui;X.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ve=g.toneMapping);const ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=ge!==void 0?ge.length:0,Lt=Y.get(X),be=h.state.lights;if(ut===!0&&(Tt===!0||y!==E)){const Oe=y===E&&X.id===b;lt.setState(X,y,Oe)}let ee=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==be.state.version||Lt.outputColorSpace!==Et||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==At||X.fog===!0&&Lt.fog!==ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==lt.numPlanes||Lt.numIntersection!==lt.numIntersection)||Lt.vertexAlphas!==Ot||Lt.vertexTangents!==zt||Lt.morphTargets!==Rt||Lt.morphNormals!==Yt||Lt.morphColors!==te||Lt.toneMapping!==ve||Lt.morphTargetsCount!==jt)&&(ee=!0):(ee=!0,Lt.__version=X.version);let ln=Lt.currentProgram;ee===!0&&(ln=gs(X,F,B));let zi=!1,je=!1,Rr=!1;const pe=ln.getUniforms(),nn=Lt.uniforms;if(j.useProgram(ln.program)&&(zi=!0,je=!0,Rr=!0),X.id!==b&&(b=X.id,je=!0),zi||E!==y){j.buffers.depth.getReversed()?(mt.copy(y.projectionMatrix),Ug(mt),Ng(mt),pe.setValue(S,"projectionMatrix",mt)):pe.setValue(S,"projectionMatrix",y.projectionMatrix),pe.setValue(S,"viewMatrix",y.matrixWorldInverse);const qe=pe.map.cameraPosition;qe!==void 0&&qe.setValue(S,Nt.setFromMatrixPosition(y.matrixWorld)),q.logarithmicDepthBuffer&&pe.setValue(S,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(S,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,je=!0,Rr=!0)}if(B.isSkinnedMesh){pe.setOptional(S,B,"bindMatrix"),pe.setOptional(S,B,"bindMatrixInverse");const Oe=B.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),pe.setValue(S,"boneTexture",Oe.boneTexture,x))}B.isBatchedMesh&&(pe.setOptional(S,B,"batchingTexture"),pe.setValue(S,"batchingTexture",B._matricesTexture,x),pe.setOptional(S,B,"batchingIdTexture"),pe.setValue(S,"batchingIdTexture",B._indirectTexture,x),pe.setOptional(S,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(S,"batchingColorTexture",B._colorsTexture,x));const rn=W.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Ut.update(B,W,ln),(je||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,pe.setValue(S,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(nn.envMap.value=At,nn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(nn.envMapIntensity.value=F.environmentIntensity),je&&(pe.setValue(S,"toneMappingExposure",g.toneMappingExposure),Lt.needsLights&&Xh(nn,Rr),ct&&X.fog===!0&&at.refreshFogUniforms(nn,ct),at.refreshMaterialUniforms(nn,X,H,Q,h.state.transmissionRenderTarget[y.id]),eo.upload(S,hc(Lt),nn,x)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(eo.upload(S,hc(Lt),nn,x),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(S,"center",B.center),pe.setValue(S,"modelViewMatrix",B.modelViewMatrix),pe.setValue(S,"normalMatrix",B.normalMatrix),pe.setValue(S,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Oe=X.uniformsGroups;for(let qe=0,Uo=Oe.length;qe<Uo;qe++){const pi=Oe[qe];N.update(pi,ln),N.bind(pi,ln)}}return ln}function Xh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function qh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,F,W){Y.get(y.texture).__webglTexture=F,Y.get(y.depthTexture).__webglTexture=W;const X=Y.get(y);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const W=Y.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,W=0){O=y,R=F,P=W;let X=!0,B=null,ct=!1,xt=!1;if(y){const At=Y.get(y);if(At.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(S.FRAMEBUFFER,null),X=!1;else if(At.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(At.__hasExternalTextures)x.rebindTextures(y,Y.get(y.texture).__webglTexture,Y.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&Y.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Ot=y.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(xt=!0);const zt=Y.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?B=zt[F][W]:B=zt[F],ct=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?B=Y.get(y).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[W]:B=zt,U.copy(y.viewport),tt.copy(y.scissor),K=y.scissorTest}else U.copy(bt).multiplyScalar(H).floor(),tt.copy(It).multiplyScalar(H).floor(),K=Qt;if(j.bindFramebuffer(S.FRAMEBUFFER,B)&&X&&j.drawBuffers(y,B),j.viewport(U),j.scissor(tt),j.setScissorTest(K),ct){const At=Y.get(y.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,W)}else if(xt){const At=Y.get(y.texture),Ot=F||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,At.__webglTexture,W||0,Ot)}b=-1},this.readRenderTargetPixels=function(y,F,W,X,B,ct,xt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){j.bindFramebuffer(S.FRAMEBUFFER,Et);try{const At=y.texture,Ot=At.format,zt=At.type;if(!q.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-X&&W>=0&&W<=y.height-B&&S.readPixels(F,W,X,B,Vt.convert(Ot),Vt.convert(zt),ct)}finally{const At=O!==null?Y.get(O).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,F,W,X,B,ct,xt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){const At=y.texture,Ot=At.format,zt=At.type;if(!q.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-X&&W>=0&&W<=y.height-B){j.bindFramebuffer(S.FRAMEBUFFER,Et);const Rt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Rt),S.bufferData(S.PIXEL_PACK_BUFFER,ct.byteLength,S.STREAM_READ),S.readPixels(F,W,X,B,Vt.convert(Ot),Vt.convert(zt),0);const Yt=O!==null?Y.get(O).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,Yt);const te=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Ig(S,te,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Rt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ct),S.deleteBuffer(Rt),S.deleteSync(te),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,W=0){y.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(y.image.width*X),ct=Math.floor(y.image.height*X),xt=F!==null?F.x:0,Et=F!==null?F.y:0;x.setTexture2D(y,0),S.copyTexSubImage2D(S.TEXTURE_2D,W,0,0,xt,Et,B,ct),j.unbindTexture()};const Yh=S.createFramebuffer(),$h=S.createFramebuffer();this.copyTextureToTexture=function(y,F,W=null,X=null,B=0,ct=null){y.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],F=arguments[2],ct=arguments[3]||0,W=null),ct===null&&(B!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=B,B=0):ct=0);let xt,Et,At,Ot,zt,Rt,Yt,te,ve;const ge=y.isCompressedTexture?y.mipmaps[ct]:y.image;if(W!==null)xt=W.max.x-W.min.x,Et=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Ot=W.min.x,zt=W.min.y,Rt=W.isBox3?W.min.z:0;else{const rn=Math.pow(2,-B);xt=Math.floor(ge.width*rn),Et=Math.floor(ge.height*rn),y.isDataArrayTexture?At=ge.depth:y.isData3DTexture?At=Math.floor(ge.depth*rn):At=1,Ot=0,zt=0,Rt=0}X!==null?(Yt=X.x,te=X.y,ve=X.z):(Yt=0,te=0,ve=0);const jt=Vt.convert(F.format),Lt=Vt.convert(F.type);let be;F.isData3DTexture?(x.setTexture3D(F,0),be=S.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),be=S.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),be=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,F.unpackAlignment);const ee=S.getParameter(S.UNPACK_ROW_LENGTH),ln=S.getParameter(S.UNPACK_IMAGE_HEIGHT),zi=S.getParameter(S.UNPACK_SKIP_PIXELS),je=S.getParameter(S.UNPACK_SKIP_ROWS),Rr=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ge.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ge.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ot),S.pixelStorei(S.UNPACK_SKIP_ROWS,zt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Rt);const pe=y.isDataArrayTexture||y.isData3DTexture,nn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const rn=Y.get(y),Oe=Y.get(F),qe=Y.get(rn.__renderTarget),Uo=Y.get(Oe.__renderTarget);j.bindFramebuffer(S.READ_FRAMEBUFFER,qe.__webglFramebuffer),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,Uo.__webglFramebuffer);for(let pi=0;pi<At;pi++)pe&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Y.get(y).__webglTexture,B,Rt+pi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,ct,ve+pi)),S.blitFramebuffer(Ot,zt,xt,Et,Yt,te,xt,Et,S.DEPTH_BUFFER_BIT,S.NEAREST);j.bindFramebuffer(S.READ_FRAMEBUFFER,null),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||Y.has(y)){const rn=Y.get(y),Oe=Y.get(F);j.bindFramebuffer(S.READ_FRAMEBUFFER,Yh),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,$h);for(let qe=0;qe<At;qe++)pe?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,rn.__webglTexture,B,Rt+qe):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,rn.__webglTexture,B),nn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Oe.__webglTexture,ct,ve+qe):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Oe.__webglTexture,ct),B!==0?S.blitFramebuffer(Ot,zt,xt,Et,Yt,te,xt,Et,S.COLOR_BUFFER_BIT,S.NEAREST):nn?S.copyTexSubImage3D(be,ct,Yt,te,ve+qe,Ot,zt,xt,Et):S.copyTexSubImage2D(be,ct,Yt,te,Ot,zt,xt,Et);j.bindFramebuffer(S.READ_FRAMEBUFFER,null),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else nn?y.isDataTexture||y.isData3DTexture?S.texSubImage3D(be,ct,Yt,te,ve,xt,Et,At,jt,Lt,ge.data):F.isCompressedArrayTexture?S.compressedTexSubImage3D(be,ct,Yt,te,ve,xt,Et,At,jt,ge.data):S.texSubImage3D(be,ct,Yt,te,ve,xt,Et,At,jt,Lt,ge):y.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ct,Yt,te,xt,Et,jt,Lt,ge.data):y.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ct,Yt,te,ge.width,ge.height,jt,ge.data):S.texSubImage2D(S.TEXTURE_2D,ct,Yt,te,xt,Et,jt,Lt,ge);S.pixelStorei(S.UNPACK_ROW_LENGTH,ee),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ln),S.pixelStorei(S.UNPACK_SKIP_PIXELS,zi),S.pixelStorei(S.UNPACK_SKIP_ROWS,je),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Rr),ct===0&&F.generateMipmaps&&S.generateMipmap(be),j.unbindTexture()},this.copyTextureToTexture3D=function(y,F,W=null,X=null,B=0){return y.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,y=arguments[2],F=arguments[3],B=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,W,X,B)},this.initRenderTarget=function(y){Y.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),j.unbindTexture()},this.resetState=function(){R=0,P=0,O=null,j.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}function pS(n){return{pixelRatio:Math.min(2,Math.max(1,n.pixelRatio??1)),reduceMotion:n.reduceMotion??!1}}function mS(n,t=requestAnimationFrame,e=cancelAnimationFrame){let i=null;const r=s=>{n(s),i=t(r)};return{start:()=>{i===null&&(i=t(r))},stop:()=>{i!==null&&e(i),i=null}}}const wl=(n,t,e)=>{const i=Kr.degToRad(90-n),r=Kr.degToRad(t+180);return new I(-e*Math.sin(i)*Math.cos(r),e*Math.cos(i),e*Math.sin(i)*Math.sin(r))},kh=(n,t)=>new Rh({color:n,transparent:!0,opacity:t,blending:Ui});function gS(n){const t=new Wn,e=kh(54472,.18);for(let i=-60;i<=60;i+=30){const r=Array.from({length:97},(s,o)=>wl(i,o*3.75-180,n));t.add(new Ch(new Xe().setFromPoints(r),e))}for(let i=-150;i<180;i+=30){const r=Array.from({length:65},(s,o)=>wl(o*2.5-80,i,n));t.add(new nc(new Xe().setFromPoints(r),e))}return t}const _S=[[[58,-132],[48,-118],[38,-123],[22,-105],[12,-86],[30,-78],[47,-62],[60,-78]],[[12,-80],[-5,-76],[-22,-68],[-40,-61],[-55,-70],[-34,-48],[-8,-35],[7,-52]],[[70,-10],[57,12],[44,3],[36,22],[15,32],[-10,25],[-34,18],[-20,44],[7,51],[35,42],[56,31]],[[58,34],[66,72],[55,110],[45,142],[22,120],[8,96],[23,78],[36,55]],[[-12,112],[-25,114],[-39,143],[-26,154],[-11,138]]];function vS(n){const t=new Wn,e=kh(8187623,.72);return _S.forEach(i=>{const r=i.map(([a,l])=>wl(a,l,n)),s=new rc(r,!0,"centripetal"),o=new Lo(s,120,.006,4,!0);t.add(new Ne(o,new yr({color:8187623,transparent:!0,opacity:.8,blending:Ui}))),t.add(new Ch(new Xe().setFromPoints(r),e))}),t}function xS(n){const t=new Wn,e=new I(0,0,n),i=e.clone().normalize(),r=new I(0,1,0),s=new I().crossVectors(r,i).normalize(),o=new I().crossVectors(i,s).normalize(),a=[.3,.55,.4,.78,.5,.68,.36,.6,.44,.27],l=new Nh({color:54472,emissive:473666,roughness:.35,metalness:.15});return a.forEach((c,u)=>{const f=new Ar(.075,.075,c);f.translate(0,0,c/2);const d=new Ne(f,l),p=u%5,v=Math.floor(u/5);d.position.copy(e).add(s.clone().multiplyScalar((p-2)*.085)).add(o.clone().multiplyScalar((v-.5)*.1)),d.quaternion.setFromUnitVectors(new I(0,0,1),i),t.add(d)}),t}function MS(n){const t=new Wn,e=new rc(Array.from({length:65},(s,o)=>{const a=o/64*Math.PI*2;return new I(Math.cos(a)*n,Math.sin(a)*n*.34,Math.sin(a)*n)}),!0),i=new Ne(new Lo(e,180,.008,6,!0),new yr({color:16096779,transparent:!0,opacity:.82,blending:Ui}));i.rotation.z=-.34,i.rotation.x=.2,t.add(i);const r=new Ne(new as(.035,16,16),new yr({color:16096779}));return r.position.copy(e.getPoint(.07)),i.add(r),t}function SS(){const n=[];for(let e=0;e<460;e+=1){const i=2.2+Kr.seededRandom(e*3+1)*2.8,r=Kr.seededRandom(e*3+2)*Math.PI*2,s=Math.acos(2*Kr.seededRandom(e*3+3)-1);n.push(i*Math.sin(s)*Math.cos(r),i*Math.cos(s),i*Math.sin(s)*Math.sin(r))}const t=new Xe;return t.setAttribute("position",new We(n,3)),new Lh(t,new Ph({color:7053245,size:.012,transparent:!0,opacity:.5,blending:Ui}))}function yS(n,t={}){const e=pS(t),i=new dS({canvas:n,antialias:!0,alpha:!0});i.setPixelRatio(e.pixelRatio),i.outputColorSpace=Qe;const r=new r_,s=new tn(34,1,.1,100);s.position.set(0,-.15,7.4);const o=new Wn,a=0;o.rotation.set(-.06,a,.02),r.add(o),o.add(new Ne(new as(1.62,96,96),new Nh({color:728363,emissive:330774,roughness:.72,metalness:.12,transparent:!0,opacity:.96}))),o.add(gS(1.64),vS(1.67),xS(1.68),MS(2.05));const l=new Ne(new as(1.78,64,64),new yr({color:54472,transparent:!0,opacity:.055,side:ke,blending:Ui}));o.add(l);const c=SS();r.add(c),r.add(new R_(7907012,.74));const u=new w_(12122355,3);u.position.set(-3,4,5),r.add(u);const f=new b_(54472,16,8);f.position.set(2.8,-1.3,2.6),r.add(f);let d=0,p=0;const v=g=>{d=(g.clientX/window.innerWidth-.5)*.36,p=(g.clientY/window.innerHeight-.5)*.2};window.addEventListener("pointermove",v,{passive:!0});const M=()=>{const{width:g,height:D}=n.getBoundingClientRect();g===0||D===0||(i.setSize(g,D,!1),s.aspect=g/D,s.updateProjectionMatrix())};M();const m=new ResizeObserver(M);m.observe(n);const h=new P_,w=()=>{const g=h.getElapsedTime(),D=e.reduceMotion?0:Math.sin(g*.28)*.05;o.rotation.y+=(a+d+D-o.rotation.y)*.025,o.rotation.x+=(-.06-p-o.rotation.x)*.025,e.reduceMotion||(c.rotation.y=g*.018,l.scale.setScalar(1+Math.sin(g*1.4)*.008)),i.render(r,s)},T=mS(w);return e.reduceMotion?w():T.start(),()=>{T.stop(),m.disconnect(),window.removeEventListener("pointermove",v),r.traverse(g=>{(g instanceof Ne||g instanceof nc||g instanceof Lh)&&(g.geometry.dispose(),(Array.isArray(g.material)?g.material:[g.material]).forEach(R=>R.dispose()))}),i.dispose()}}const ES={id:"关于我",class:"hero"},TS={class:"nav"},bS={class:"nav-links"},AS={class:"nav-cta",href:"#联系"},wS={class:"hero-inner"},RS={class:"hero-copy"},CS={class:"role"},PS={class:"hero-lead"},LS={class:"hero-actions"},DS={class:"button primary",href:"#项目"},IS={class:"button ghost",href:"https://lele287.github.io",target:"_blank",rel:"noreferrer"},US={class:"hero-meta"},NS={class:"hero-visual"},FS={class:"globe is-ready"},OS={class:"globe-caption"},BS={class:"globe-coord"},zS={class:"stats"},HS={id:"技能",class:"section skills-section"},VS={class:"section-inner"},GS={class:"skills-layout"},kS={class:"skills-list"},WS={class:"skill-row-top"},XS={class:"skill-track"},qS={class:"capability-note"},YS={class:"note-orbit"},$S={id:"经历",class:"section experience-section"},KS={class:"section-inner"},jS={class:"timeline"},ZS={class:"timeline-period"},JS={class:"timeline-content"},QS={key:0,class:"timeline-tags"},ty={id:"项目",class:"section projects-section"},ey={class:"section-inner"},ny={class:"projects-layout"},iy={class:"project-list"},ry=["aria-pressed","onClick"],sy={class:"project-code"},oy={class:"project-name"},ay={class:"project-type"},ly={class:"detail-top"},cy={class:"project-tags"},uy={class:"selected-project-details"},fy={class:"project-detail-body"},hy={class:"detail-coord"},dy={id:"联系",class:"contact-section"},py={class:"contact-inner"},my={class:"contact-links"},gy={href:"mailto:2622552870@qq.com"},_y=["aria-expanded"],vy={href:"https://github.com/lele287",target:"_blank",rel:"noreferrer"},xy={href:"https://lele287.github.io",target:"_blank",rel:"noreferrer"},My=Xd({__name:"App",setup(n){const t=[{name:"Vue 2 / Vue 3",level:95,group:"FRAMEWORK"},{name:"JavaScript / ES6",level:92,group:"LANGUAGE"},{name:"Mapbox GL / Cesium",level:91,group:"GEOSPATIAL"},{name:"HTML5 / CSS3",level:90,group:"FRONTEND"},{name:"TypeScript / Vite",level:86,group:"TOOLING"},{name:"ECharts / WebGL",level:84,group:"VISUALIZATION"},{name:"Node.js / Python",level:78,group:"BACKEND"},{name:"MySQL / Axios",level:76,group:"DATA"}],e=[{start:"2023.11",company:"苏州大圜科技有限公司",role:"前端负责人",summary:"主导GIS方向技术研发，构建气象预测平台、乡村积分治理系统、洪水演进分析仿真模拟系统，负责从需求分析到架构设计的全流程工作。",tags:["Vue3 + TS","MapboxGL","Cesium","小程序","APP","业务架构"]},{start:"2021.08",end:"2023.11",company:"苏州超擎图形软件科技发展有限公司",role:"WebGIS 前端",summary:"负责 MapboxGL、Cesium 二维与三维地图开发，参与田长制、影像云和超擎时空 Studio 等核心产品。",tags:["Vue3 + TS","MapboxGL","Cesium","业务架构"]},{start:"2020.08",end:"2021.08",company:"苏州群睿信息科技有限公司",role:"微信小程序开发",summary:"负责 NeTOP 站点管理、门店维修小程序，完成组件化页面、请求封装和 ECharts 流量分析。"}],i=[{code:"01",title:"田长制平台",type:"PC 管理端 + 大屏",color:"#00d4c8",summary:"服务于耕地保护和粮食生产安全的综合 GIS 平台，覆盖网格、事件、任务与卫片业务。",details:["使用 Vue3 + TypeScript 搭建项目，以 iView 构建基础界面并封装 Axios 前后端交互。","通过 MapboxGL 展示和操作网格信息，使用 ECharts 完成业务数据统计。","开发登录、注册和用户管理，涵盖路由、区域及所属网格配置。","完成仪表盘、事件、任务、卫片和网格等核心业务模块。"],tags:["Vue3","TypeScript","MapboxGL","ECharts","Axios"]},{code:"02",title:"影像云平台",type:"PC 平台",color:"#67a7ff",summary:"集海量数据管理、发布与分析于一体的云平台，支持影像、高程、矢量和三维模型。",details:["使用 MapboxGL 展示影像服务、切片服务和公共服务，使用 Cesium 加载三维与模型服务。","负责图层数据、服务数据的新增、编辑、查询和删除流程。","开发通用、高程、扩展及批量图层创建，支持颜色表、NDVI 与 NDWI 等渲染能力。","实现链接、二维码及社交平台分享，并开发任务、卫星、投影和坐标系等系统模块。"],tags:["MapboxGL","Cesium","Vue","NDVI / NDWI","三维模型"]},{code:"03",title:"超擎时空 Studio",type:"综合产品平台",color:"#f4b35c",summary:"连接影像云与矢量云的时空产品平台，统一管理空间数据服务和地图应用模板。",details:["参与数据服务、模板管理、应用管理和系统管理等业务模块开发。","基于 MapboxGL 与 Cesium 开发 2D、3D、AI、ND 等地图模板。","实现等级符号、分段和单值图模板，为用户提供多种可配置渲染效果。"],tags:["MapboxGL","Cesium","模板引擎","2D / 3D","WebGIS"]},{code:"04",title:"NeTOP 站点管理",type:"微信小程序",color:"#c18cff",summary:"面向连锁站点资产与门店维修的微信小程序，覆盖设备、日志、信号和流量查询。",details:["采用原生微信小程序与 VantWeapp 构建页面，使用 Axios 封装请求和响应预处理。","使用 ECharts 展示流量信息与排行，并通过分包加载优化首次启动速度。","结合 iconfont、Flex 与 rpx 完成多设备响应式适配。","与后端协作完成站点数据、门店设备装拆换及卡片信息等业务整合。"],tags:["微信小程序","VantWeapp","ECharts","分包加载","响应式"]}],r=Pr(new Date),s=Pr(""),o=Pr(!1),a=Pr(0),l=Pr(null);let c=0,u=0,f=()=>{};const d=ir(()=>r.value.getFullYear()),p=ir(()=>`${d.value}.${String(r.value.getMonth()+1).padStart(2,"0")}`),v=(T,g)=>Math.max(0,(d.value-T)*12+r.value.getMonth()-(g-1)),M=(T,g)=>(v(T,g)/12).toFixed(1),m=ir(()=>d.value-1999),h=ir(()=>i[a.value]),w=ir(()=>[{value:M(2020,8),label:"总工龄 / YEARS"},{value:M(2021,8),label:"GIS 开发 / YEARS"},{value:M(2020,8),label:"前端开发 / YEARS"},{value:String(m.value),label:"年龄 / AGE"}]);return Lf(async()=>{const T="Frontend WebGIS Engineer";let g=0;u=window.setInterval(()=>{s.value=T.slice(0,++g),g>=T.length&&window.clearInterval(u)},58),c=window.setInterval(()=>{r.value=new Date},3600*1e3),await Sf(),l.value&&(f=yS(l.value,{pixelRatio:window.devicePixelRatio,reduceMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches}))}),Df(()=>{window.clearInterval(c),window.clearInterval(u),f()}),(T,g)=>{const D=ip("Layers3");return Ae(),Ye("main",null,[V("section",ES,[g[24]||(g[24]=V("div",{class:"hero-grid"},null,-1)),V("nav",TS,[g[6]||(g[6]=V("a",{class:"brand",href:"#关于我"},[V("span",null,"❯"),$t(" ./kangle_portfolio ")],-1)),V("div",bS,[g[2]||(g[2]=V("a",{href:"#关于我"},"[关于我]",-1)),g[3]||(g[3]=V("a",{href:"#技能"},"[能力]",-1)),g[4]||(g[4]=V("a",{href:"#经历"},"[经历]",-1)),g[5]||(g[5]=V("a",{href:"#项目"},"[项目]",-1)),V("a",AS,[Jt(Me(Yo)),g[1]||(g[1]=$t(" cd ./contact ",-1))])])]),V("div",wS,[V("div",RS,[g[14]||(g[14]=V("div",{class:"availability"},[V("span",{class:"live-dot"}),$t(" process: available_for_work ")],-1)),g[15]||(g[15]=V("p",{class:"eyebrow"},[V("span",null,"const"),$t(" profile = { birth: 1999, school: '商丘学院', major: '大数据技术与应用' } ")],-1)),g[16]||(g[16]=V("h1",null,[$t(" 吕康乐 "),V("span",null,"LV_KANGLE")],-1)),V("div",CS,[g[7]||(g[7]=V("span",null,"$ whoami --role",-1)),$t(" "+ce(s.value)+" ",1),g[8]||(g[8]=V("b",null,"_",-1))]),V("p",PS,[g[9]||(g[9]=V("span",{class:"comment"},"//",-1)),$t(" "+ce(M(2020,8))+" 年前端开发经历，将地图数据、三维场景和业务逻辑组装成清晰可用的数字化产品。熟悉 MapboxGL、Cesium 与 Vue 全家桶，长期在真实项目中处理空间数据与交互体验。 ",1)]),V("div",LS,[V("a",DS,[g[10]||(g[10]=$t(" ./view-projects ",-1)),Jt(Me(Vi))]),V("a",IS,[g[11]||(g[11]=$t(" open --project-site ",-1)),Jt(Me(Vi))])]),V("div",US,[V("span",null,[Jt(Me(Wc)),g[12]||(g[12]=$t(" location: suzhou_cn ",-1))]),V("span",null,[Jt(Me(Yo)),g[13]||(g[13]=$t(" 2622552870@qq.com ",-1))])])]),V("div",NS,[V("div",FS,[V("canvas",{ref_key:"globeCanvas",ref:l,class:"globe-canvas","aria-label":"动态三维地球"},null,512),V("span",OS,[Jt(Me(Tm)),g[17]||(g[17]=$t(" WEBGL RENDERING ",-1))]),V("span",BS,[$t(ce(p.value)+" ",1),g[18]||(g[18]=V("br",null,null,-1)),g[19]||(g[19]=$t(" 31.2989° N ",-1)),g[20]||(g[20]=V("br",null,null,-1)),g[21]||(g[21]=$t(" 120.5853° E ",-1))]),g[22]||(g[22]=V("span",{class:"globe-axis"},[$t(" LAYER STACK "),V("br"),$t(" IMAGERY / ACTIVE "),V("br"),$t(" TERRAIN / ACTIVE "),V("br"),$t(" BUILDING / ACTIVE ")],-1))]),g[23]||(g[23]=Up('<div class="globe-telemetry"><div><span class="terminal-dots"><i></i><i></i><i></i></span><b>globe.render()</b><em>RUNNING</em></div><div><p><span>$</span> scene: WGS84 / ORBITAL_VIEW </p><p><span>$</span> data: realtime / fps: 60 </p><p><span>$</span> renderer: WebGL2 / THREE.JS </p></div></div>',1))])]),V("div",zS,[(Ae(!0),Ye(De,null,gi(w.value,R=>(Ae(),Ye("div",{key:R.label},[V("strong",null,ce(R.value),1),V("span",null,ce(R.label),1)]))),128))])]),V("section",HS,[V("div",VS,[g[28]||(g[28]=V("div",{class:"section-heading"},[V("div",{class:"section-label"},[V("span",null,"kang@portfolio:~$"),V("i",null,"01"),$t(" core capabilities ")]),V("h2",null,[$t(" 把复杂的空间数据 "),V("br"),V("em",null,"变成可用的界面")]),V("p",null,"从地图图层、交互逻辑到数据可视化，覆盖 WebGIS 产品从需求梳理到上线交付的完整链路。")],-1)),V("div",GS,[V("div",kS,[(Ae(),Ye(De,null,gi(t,(R,P)=>V("div",{key:R.name,class:"skill-row"},[V("div",WS,[V("span",null,ce(String(P+1).padStart(2,"0")),1),V("b",null,ce(R.name),1),V("small",null,ce(R.group),1),V("strong",null,ce(R.level)+"%",1)]),V("div",XS,[V("i",{style:Jr({width:`${R.level}%`})},null,4)])])),64))]),V("div",qS,[V("div",YS,[Jt(D),g[25]||(g[25]=V("span",null,"GIS",-1))]),g[26]||(g[26]=V("p",null,"地图是我的工作台，三维是我用来讲清楚数据的另一种语言。",-1)),g[27]||(g[27]=V("div",{class:"note-grid"},[V("span",null,"DOM / BOM"),V("span",null,"REST / AJAX"),V("span",null,"WMS / WFS"),V("span",null,"2D + 3D")],-1))])])])]),V("section",$S,[V("div",KS,[g[31]||(g[31]=V("div",{class:"section-label"},[V("span",null,"kang@portfolio:~$"),V("i",null,"02"),$t(" experience ")],-1)),g[32]||(g[32]=V("div",{class:"experience-head"},[V("h2",null,[$t(" 在真实业务里 "),V("br"),V("em",null,"持续构建")]),V("p",null,"从小程序到时空平台，始终围绕前端体验和空间数据展开。")],-1)),V("div",jS,[g[30]||(g[30]=V("div",{class:"timeline-line"},null,-1)),(Ae(),Ye(De,null,gi(e,R=>V("article",{key:R.company,class:"timeline-item"},[g[29]||(g[29]=V("span",{class:"timeline-dot"},null,-1)),V("div",ZS,ce(R.start)+" — "+ce(R.end||p.value),1),V("div",JS,[V("h3",null,ce(R.company),1),V("span",null,ce(R.role),1),V("p",null,ce(R.summary),1),R.tags?(Ae(),Ye("div",QS,[(Ae(!0),Ye(De,null,gi(R.tags,P=>(Ae(),Ye("b",{key:P},ce(P),1))),128))])):Np("",!0)])])),64))])])]),V("section",ty,[V("div",ey,[g[35]||(g[35]=V("div",{class:"section-label"},[V("span",null,"kang@portfolio:~$"),V("i",null,"03"),$t(" selected projects ")],-1)),g[36]||(g[36]=V("div",{class:"projects-head"},[V("h2",null,"项目经历"),V("p",null,"项目概述始终展示，职责与实现细节可按需展开。")],-1)),V("div",ny,[V("div",iy,[(Ae(),Ye(De,null,gi(i,(R,P)=>V("button",{key:R.code,class:yo(["project-item",{active:a.value===P}]),"aria-pressed":a.value===P,onClick:O=>a.value=P},[V("span",sy,ce(R.code),1),V("span",oy,ce(R.title),1),V("span",ay,ce(R.type),1),Jt(Me(Vi))],10,ry)),64))]),(Ae(),Ye("article",{key:h.value.code,class:"project-detail selected-project",style:Jr({"--project-color":h.value.color})},[V("div",ly,[V("span",null,"PROJECT_"+ce(h.value.code),1)]),V("h3",null,ce(h.value.title),1),V("p",null,ce(h.value.summary),1),V("div",cy,[(Ae(!0),Ye(De,null,gi(h.value.tags,R=>(Ae(),Ye("span",{key:R},ce(R),1))),128))]),V("details",uy,[V("summary",null,[g[33]||(g[33]=V("span",null,"查看项目详情",-1)),Jt(Me(bm))]),V("div",fy,[(Ae(!0),Ye(De,null,gi(h.value.details,(R,P)=>(Ae(),Ye("p",{key:R},[V("span",null,ce(String(P+1).padStart(2,"0")),1),$t(" "+ce(R),1)]))),128))])]),V("div",hy,[Jt(Me(Wc)),g[34]||(g[34]=V("span",null,"江苏省 · GIS / DIGITAL PLATFORM",-1))])],4))])])]),V("section",dy,[V("div",py,[g[41]||(g[41]=V("div",{class:"contact-intro"},[V("div",{class:"section-label"},[V("span",null,"kang@portfolio:~$"),V("i",null,"04"),$t(" contact ")]),V("h2",null,[$t(" 让下一张地图 "),V("br"),V("em",null,"更有意义")]),V("p",null,"期待与关注空间数据、可视化和数字化产品的团队交流。"),V("div",{class:"contact-status"},[V("span",{class:"live-dot"}),$t(" available_for_frontend_and_webgis ")])],-1)),V("div",my,[V("a",gy,[Jt(Me(Yo)),g[37]||(g[37]=V("span",null,[V("small",null,"EMAIL"),$t(" 2622552870@qq.com ")],-1)),Jt(Me(Vi))]),V("button",{type:"button","aria-expanded":o.value,onClick:g[0]||(g[0]=R=>o.value=!o.value)},[Jt(Me(Rm)),V("span",null,[g[38]||(g[38]=V("small",null,"PHONE",-1)),$t(" "+ce(o.value?"150 9381 6550":"click_to_reveal"),1)]),o.value?(Ae(),Oa(Me(Am),{key:0})):(Ae(),Oa(Me(wm),{key:1}))],8,_y),V("a",vy,[Jt(Me(kc)),g[39]||(g[39]=V("span",null,[V("small",null,"GITHUB"),$t(" github.com/lele287 ")],-1)),Jt(Me(Vi))]),V("a",xy,[Jt(Me(kc)),g[40]||(g[40]=V("span",null,[V("small",null,"PROJECT SITE"),$t(" lele287.github.io ")],-1)),Jt(Me(Vi))])])])]),V("footer",null,[V("span",null,"© "+ce(d.value)+" 吕康乐 · WEBGIS FRONTEND ENGINEER",1),g[42]||(g[42]=V("span",null,"BUILT WITH VUE 3 / TYPESCRIPT / THREE.JS",-1))])])}}});xm(My).mount("#root");
