const __vite__fileDeps=["assets/chunks/VPLocalSearchBox.Czep0yo6.js","assets/chunks/framework.Ca-K8nms.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as k,c as N,w as e2,h as lo,o as m,a as z,b as _,n as fo,g as vo,u,m as V2,e as K3,i as i1,r as D,f as B,j as C,k as H,l as U1,p as S,q as O,s as J2,t as e3,v as mo,x as _4,y as V,z as t2,A as I,B as uo,C as po,D as B1,T as g1,E as b1,F as ho,G as y2,H as Ho,I as zo,J as r3,K as J,L as c2,M as q,N as r2,_ as F,O as Vo,P as Mo,Q as Co,R as V6,S as x1,U as a1,V as G4,W as O5,X as Lo,Y as go,Z as o1,$ as E5,a0 as Q3,a1 as U5,a2 as Z3,a3 as bo,a4 as xo,a5 as X4,a6 as yo,a7 as I5,a8 as No,a9 as ko,aa as wo,ab as j5,ac as So,ad as Ao,ae as _o}from"./framework.Ca-K8nms.js";var q5=typeof global=="object"&&global&&global.Object===Object&&global,Po=typeof self=="object"&&self&&self.Object===Object&&self,s2=q5||Po||Function("return this")(),b2=s2.Symbol,W5=Object.prototype,To=W5.hasOwnProperty,Bo=W5.toString,A1=b2?b2.toStringTag:void 0;function $o(c){var a=To.call(c,A1),e=c[A1];try{c[A1]=void 0;var r=!0}catch{}var s=Bo.call(c);return r&&(a?c[A1]=e:delete c[A1]),s}var Fo=Object.prototype,Do=Fo.toString;function Ro(c){return Do.call(c)}var Oo="[object Null]",Eo="[object Undefined]",m8=b2?b2.toStringTag:void 0;function t1(c){return c==null?c===void 0?Eo:Oo:m8&&m8 in Object(c)?$o(c):Ro(c)}function P2(c){return c!=null&&typeof c=="object"}var Uo="[object Symbol]";function J3(c){return typeof c=="symbol"||P2(c)&&t1(c)==Uo}function G5(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var T2=Array.isArray,Io=1/0,u8=b2?b2.prototype:void 0,p8=u8?u8.toString:void 0;function X5(c){if(typeof c=="string")return c;if(T2(c))return G5(c,X5)+"";if(J3(c))return p8?p8.call(c):"";var a=c+"";return a=="0"&&1/c==-Io?"-0":a}var jo=/\s/;function qo(c){for(var a=c.length;a--&&jo.test(c.charAt(a)););return a}var Wo=/^\s+/;function Go(c){return c&&c.slice(0,qo(c)+1).replace(Wo,"")}function M2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var h8=NaN,Xo=/^[-+]0x[0-9a-f]+$/i,Yo=/^0b[01]+$/i,Ko=/^0o[0-7]+$/i,Qo=parseInt;function Y4(c){if(typeof c=="number")return c;if(J3(c))return h8;if(M2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=M2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=Go(c);var e=Yo.test(c);return e||Ko.test(c)?Qo(c.slice(2),e?2:8):Xo.test(c)?h8:+c}var H8=1/0,Zo=17976931348623157e292;function Jo(c){if(!c)return c===0?c:0;if(c=Y4(c),c===H8||c===-H8){var a=c<0?-1:1;return a*Zo}return c===c?c:0}function z8(c){var a=Jo(c),e=a%1;return a===a?e?a-e:a:0}function c4(c){return c}var ct="[object AsyncFunction]",at="[object Function]",et="[object GeneratorFunction]",rt="[object Proxy]";function M6(c){if(!M2(c))return!1;var a=t1(c);return a==at||a==et||a==ct||a==rt}var P4=s2["__core-js_shared__"],d8=function(){var c=/[^.]+$/.exec(P4&&P4.keys&&P4.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function st(c){return!!d8&&d8 in c}var nt=Function.prototype,it=nt.toString;function l1(c){if(c!=null){try{return it.call(c)}catch{}try{return c+""}catch{}}return""}var ot=/[\\^$.*+?()[\]{}|]/g,tt=/^\[object .+?Constructor\]$/,lt=Function.prototype,ft=Object.prototype,vt=lt.toString,mt=ft.hasOwnProperty,ut=RegExp("^"+vt.call(mt).replace(ot,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function pt(c){if(!M2(c)||st(c))return!1;var a=M6(c)?ut:tt;return a.test(l1(c))}function ht(c,a){return c==null?void 0:c[a]}function f1(c,a){var e=ht(c,a);return pt(e)?e:void 0}var I1=f1(s2,"WeakMap"),D3=I1&&new I1,Y5=D3?function(c,a){return D3.set(c,a),c}:c4,V8=Object.create,a4=function(){function c(){}return function(a){if(!M2(a))return{};if(V8)return V8(a);c.prototype=a;var e=new c;return c.prototype=void 0,e}}();function j1(c){return function(){var a=arguments;switch(a.length){case 0:return new c;case 1:return new c(a[0]);case 2:return new c(a[0],a[1]);case 3:return new c(a[0],a[1],a[2]);case 4:return new c(a[0],a[1],a[2],a[3]);case 5:return new c(a[0],a[1],a[2],a[3],a[4]);case 6:return new c(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new c(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var e=a4(c.prototype),r=c.apply(e,a);return M2(r)?r:e}}var Ht=1;function zt(c,a,e){var r=a&Ht,s=j1(c);function n(){var i=this&&this!==s2&&this instanceof n?s:c;return i.apply(r?e:this,arguments)}return n}function C6(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}var dt=Math.max;function K5(c,a,e,r){for(var s=-1,n=c.length,i=e.length,o=-1,t=a.length,l=dt(n-i,0),f=Array(t+l),v=!r;++o<t;)f[o]=a[o];for(;++s<i;)(v||s<n)&&(f[e[s]]=c[s]);for(;l--;)f[o++]=c[s++];return f}var Vt=Math.max;function Q5(c,a,e,r){for(var s=-1,n=c.length,i=-1,o=e.length,t=-1,l=a.length,f=Vt(n-o,0),v=Array(f+l),h=!r;++s<f;)v[s]=c[s];for(var p=s;++t<l;)v[p+t]=a[t];for(;++i<o;)(h||s<n)&&(v[p+e[i]]=c[s++]);return v}function Mt(c,a){for(var e=c.length,r=0;e--;)c[e]===a&&++r;return r}function L6(){}var Ct=4294967295;function h1(c){this.__wrapped__=c,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ct,this.__views__=[]}h1.prototype=a4(L6.prototype);h1.prototype.constructor=h1;function Lt(){}var Z5=D3?function(c){return D3.get(c)}:Lt,M8={},gt=Object.prototype,bt=gt.hasOwnProperty;function xt(c){for(var a=c.name+"",e=M8[a],r=bt.call(M8,a)?e.length:0;r--;){var s=e[r],n=s.func;if(n==null||n==c)return s.name}return a}function H1(c,a){this.__wrapped__=c,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=void 0}H1.prototype=a4(L6.prototype);H1.prototype.constructor=H1;function g6(c,a){var e=-1,r=c.length;for(a||(a=Array(r));++e<r;)a[e]=c[e];return a}function yt(c){if(c instanceof h1)return c.clone();var a=new H1(c.__wrapped__,c.__chain__);return a.__actions__=g6(c.__actions__),a.__index__=c.__index__,a.__values__=c.__values__,a}var Nt=Object.prototype,kt=Nt.hasOwnProperty;function R3(c){if(P2(c)&&!T2(c)&&!(c instanceof h1)){if(c instanceof H1)return c;if(kt.call(c,"__wrapped__"))return yt(c)}return new H1(c)}R3.prototype=L6.prototype;R3.prototype.constructor=R3;function wt(c){var a=xt(c),e=R3[a];if(typeof e!="function"||!(a in h1.prototype))return!1;if(c===e)return!0;var r=Z5(e);return!!r&&c===r[0]}var St=800,At=16,_t=Date.now;function J5(c){var a=0,e=0;return function(){var r=_t(),s=At-(r-e);if(e=r,s>0){if(++a>=St)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}var c7=J5(Y5),Pt=/\{\n\/\* \[wrapped with (.+)\] \*/,Tt=/,? & /;function Bt(c){var a=c.match(Pt);return a?a[1].split(Tt):[]}var $t=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;function Ft(c,a){var e=a.length;if(!e)return c;var r=e-1;return a[r]=(e>1?"& ":"")+a[r],a=a.join(e>2?", ":" "),c.replace($t,`{
/* [wrapped with `+a+`] */
`)}function Dt(c){return function(){return c}}var O3=function(){try{var c=f1(Object,"defineProperty");return c({},"",{}),c}catch{}}(),Rt=O3?function(c,a){return O3(c,"toString",{configurable:!0,enumerable:!1,value:Dt(a),writable:!0})}:c4,b6=J5(Rt);function x6(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}function Ot(c,a,e,r){for(var s=c.length,n=e+-1;++n<s;)if(a(c[n],n,c))return n;return-1}function Et(c){return c!==c}function Ut(c,a,e){for(var r=e-1,s=c.length;++r<s;)if(c[r]===a)return r;return-1}function It(c,a,e){return a===a?Ut(c,a,e):Ot(c,Et,e)}function jt(c,a){var e=c==null?0:c.length;return!!e&&It(c,a,0)>-1}var qt=1,Wt=2,Gt=8,Xt=16,Yt=32,Kt=64,Qt=128,Zt=256,Jt=512,cl=[["ary",Qt],["bind",qt],["bindKey",Wt],["curry",Gt],["curryRight",Xt],["flip",Jt],["partial",Yt],["partialRight",Kt],["rearg",Zt]];function al(c,a){return x6(cl,function(e){var r="_."+e[0];a&e[1]&&!jt(c,r)&&c.push(r)}),c.sort()}function a7(c,a,e){var r=a+"";return b6(c,Ft(r,al(Bt(r),e)))}var el=1,rl=2,sl=4,nl=8,C8=32,L8=64;function e7(c,a,e,r,s,n,i,o,t,l){var f=a&nl,v=f?i:void 0,h=f?void 0:i,p=f?n:void 0,g=f?void 0:n;a|=f?C8:L8,a&=~(f?L8:C8),a&sl||(a&=~(el|rl));var b=[c,a,s,p,v,g,h,o,t,l],L=e.apply(void 0,b);return wt(c)&&c7(L,b),L.placeholder=r,a7(L,c,a)}function y6(c){var a=c;return a.placeholder}var il=9007199254740991,ol=/^(?:0|[1-9]\d*)$/;function N6(c,a){var e=typeof c;return a=a??il,!!a&&(e=="number"||e!="symbol"&&ol.test(c))&&c>-1&&c%1==0&&c<a}var tl=Math.min;function ll(c,a){for(var e=c.length,r=tl(a.length,e),s=g6(c);r--;){var n=a[r];c[r]=N6(n,e)?s[n]:void 0}return c}var g8="__lodash_placeholder__";function q1(c,a){for(var e=-1,r=c.length,s=0,n=[];++e<r;){var i=c[e];(i===a||i===g8)&&(c[e]=g8,n[s++]=e)}return n}var fl=1,vl=2,ml=8,ul=16,pl=128,hl=512;function k6(c,a,e,r,s,n,i,o,t,l){var f=a&pl,v=a&fl,h=a&vl,p=a&(ml|ul),g=a&hl,b=h?void 0:j1(c);function L(){for(var d=arguments.length,M=Array(d),y=d;y--;)M[y]=arguments[y];if(p)var x=y6(L),P=Mt(M,x);if(r&&(M=K5(M,r,s,p)),n&&(M=Q5(M,n,i,p)),d-=P,p&&d<l){var A=q1(M,x);return e7(c,a,k6,L.placeholder,e,M,A,o,t,l-d)}var $=v?e:this,U=h?$[c]:c;return d=M.length,o?M=ll(M,o):g&&d>1&&M.reverse(),f&&t<d&&(M.length=t),this&&this!==s2&&this instanceof L&&(U=b||j1(U)),U.apply($,M)}return L}function Hl(c,a,e){var r=j1(c);function s(){for(var n=arguments.length,i=Array(n),o=n,t=y6(s);o--;)i[o]=arguments[o];var l=n<3&&i[0]!==t&&i[n-1]!==t?[]:q1(i,t);if(n-=l.length,n<e)return e7(c,a,k6,s.placeholder,void 0,i,l,void 0,void 0,e-n);var f=this&&this!==s2&&this instanceof s?r:c;return C6(f,this,i)}return s}var zl=1;function dl(c,a,e,r){var s=a&zl,n=j1(c);function i(){for(var o=-1,t=arguments.length,l=-1,f=r.length,v=Array(f+t),h=this&&this!==s2&&this instanceof i?n:c;++l<f;)v[l]=r[l];for(;t--;)v[l++]=arguments[++o];return C6(h,s?e:this,v)}return i}var b8="__lodash_placeholder__",T4=1,Vl=2,Ml=4,x8=8,_1=128,y8=256,Cl=Math.min;function Ll(c,a){var e=c[1],r=a[1],s=e|r,n=s<(T4|Vl|_1),i=r==_1&&e==x8||r==_1&&e==y8&&c[7].length<=a[8]||r==(_1|y8)&&a[7].length<=a[8]&&e==x8;if(!(n||i))return c;r&T4&&(c[2]=a[2],s|=e&T4?0:Ml);var o=a[3];if(o){var t=c[3];c[3]=t?K5(t,o,a[4]):o,c[4]=t?q1(c[3],b8):a[4]}return o=a[5],o&&(t=c[5],c[5]=t?Q5(t,o,a[6]):o,c[6]=t?q1(c[5],b8):a[6]),o=a[7],o&&(c[7]=o),r&_1&&(c[8]=c[8]==null?a[8]:Cl(c[8],a[8])),c[9]==null&&(c[9]=a[9]),c[0]=a[0],c[1]=s,c}var gl="Expected a function",N8=1,bl=2,B4=8,$4=16,F4=32,k8=64,w8=Math.max;function xl(c,a,e,r,s,n,i,o){var t=a&bl;if(!t&&typeof c!="function")throw new TypeError(gl);var l=r?r.length:0;if(l||(a&=~(F4|k8),r=s=void 0),i=i===void 0?i:w8(z8(i),0),o=o===void 0?o:z8(o),l-=s?s.length:0,a&k8){var f=r,v=s;r=s=void 0}var h=t?void 0:Z5(c),p=[c,a,e,r,s,f,v,n,i,o];if(h&&Ll(p,h),c=p[0],a=p[1],e=p[2],r=p[3],s=p[4],o=p[9]=p[9]===void 0?t?0:c.length:w8(p[9]-l,0),!o&&a&(B4|$4)&&(a&=~(B4|$4)),!a||a==N8)var g=zt(c,a,e);else a==B4||a==$4?g=Hl(c,a,o):(a==F4||a==(N8|F4))&&!s.length?g=dl(c,a,e,r):g=k6.apply(void 0,p);var b=h?Y5:c7;return a7(b(g,p),c,a)}function r7(c,a,e){a=="__proto__"&&O3?O3(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function w6(c,a){return c===a||c!==c&&a!==a}var yl=Object.prototype,Nl=yl.hasOwnProperty;function S6(c,a,e){var r=c[a];(!(Nl.call(c,a)&&w6(r,e))||e===void 0&&!(a in c))&&r7(c,a,e)}function y1(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var o=a[n],t=void 0;t===void 0&&(t=c[o]),s?r7(e,o,t):S6(e,o,t)}return e}var S8=Math.max;function s7(c,a,e){return a=S8(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=S8(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var o=Array(a+1);++s<a;)o[s]=r[s];return o[a]=e(i),C6(c,this,o)}}function n7(c,a){return b6(s7(c,a,c4),c+"")}var kl=9007199254740991;function i7(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=kl}function s3(c){return c!=null&&i7(c.length)&&!M6(c)}function wl(c,a,e){if(!M2(e))return!1;var r=typeof a;return(r=="number"?s3(e)&&N6(a,e.length):r=="string"&&a in e)?w6(e[a],c):!1}function Sl(c){return n7(function(a,e){var r=-1,s=e.length,n=s>1?e[s-1]:void 0,i=s>2?e[2]:void 0;for(n=c.length>3&&typeof n=="function"?(s--,n):void 0,i&&wl(e[0],e[1],i)&&(n=s<3?void 0:n,s=1),a=Object(a);++r<s;){var o=e[r];o&&c(a,o,r,n)}return a})}var Al=Object.prototype;function e4(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||Al;return c===e}function _l(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var Pl="[object Arguments]";function A8(c){return P2(c)&&t1(c)==Pl}var o7=Object.prototype,Tl=o7.hasOwnProperty,Bl=o7.propertyIsEnumerable,t7=A8(function(){return arguments}())?A8:function(c){return P2(c)&&Tl.call(c,"callee")&&!Bl.call(c,"callee")};function $l(){return!1}var l7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_8=l7&&typeof module=="object"&&module&&!module.nodeType&&module,Fl=_8&&_8.exports===l7,P8=Fl?s2.Buffer:void 0,Dl=P8?P8.isBuffer:void 0,f7=Dl||$l,Rl="[object Arguments]",Ol="[object Array]",El="[object Boolean]",Ul="[object Date]",Il="[object Error]",jl="[object Function]",ql="[object Map]",Wl="[object Number]",Gl="[object Object]",Xl="[object RegExp]",Yl="[object Set]",Kl="[object String]",Ql="[object WeakMap]",Zl="[object ArrayBuffer]",Jl="[object DataView]",cf="[object Float32Array]",af="[object Float64Array]",ef="[object Int8Array]",rf="[object Int16Array]",sf="[object Int32Array]",nf="[object Uint8Array]",of="[object Uint8ClampedArray]",tf="[object Uint16Array]",lf="[object Uint32Array]",G={};G[cf]=G[af]=G[ef]=G[rf]=G[sf]=G[nf]=G[of]=G[tf]=G[lf]=!0;G[Rl]=G[Ol]=G[Zl]=G[El]=G[Jl]=G[Ul]=G[Il]=G[jl]=G[ql]=G[Wl]=G[Gl]=G[Xl]=G[Yl]=G[Kl]=G[Ql]=!1;function ff(c){return P2(c)&&i7(c.length)&&!!G[t1(c)]}function A6(c){return function(a){return c(a)}}var v7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$1=v7&&typeof module=="object"&&module&&!module.nodeType&&module,vf=$1&&$1.exports===v7,D4=vf&&q5.process,z1=function(){try{var c=$1&&$1.require&&$1.require("util").types;return c||D4&&D4.binding&&D4.binding("util")}catch{}}(),T8=z1&&z1.isTypedArray,mf=T8?A6(T8):ff,uf=Object.prototype,pf=uf.hasOwnProperty;function m7(c,a){var e=T2(c),r=!e&&t7(c),s=!e&&!r&&f7(c),n=!e&&!r&&!s&&mf(c),i=e||r||s||n,o=i?_l(c.length,String):[],t=o.length;for(var l in c)(a||pf.call(c,l))&&!(i&&(l=="length"||s&&(l=="offset"||l=="parent")||n&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||N6(l,t)))&&o.push(l);return o}function u7(c,a){return function(e){return c(a(e))}}var hf=u7(Object.keys,Object),Hf=Object.prototype,zf=Hf.hasOwnProperty;function df(c){if(!e4(c))return hf(c);var a=[];for(var e in Object(c))zf.call(c,e)&&e!="constructor"&&a.push(e);return a}function n3(c){return s3(c)?m7(c):df(c)}var Vf=Object.prototype,Mf=Vf.hasOwnProperty,Cf=Sl(function(c,a){if(e4(a)||s3(a)){y1(a,n3(a),c);return}for(var e in a)Mf.call(a,e)&&S6(c,e,a[e])});function Lf(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var gf=Object.prototype,bf=gf.hasOwnProperty;function xf(c){if(!M2(c))return Lf(c);var a=e4(c),e=[];for(var r in c)r=="constructor"&&(a||!bf.call(c,r))||e.push(r);return e}function _6(c){return s3(c)?m7(c,!0):xf(c)}var yf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nf=/^\w*$/;function kf(c,a){if(T2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||J3(c)?!0:Nf.test(c)||!yf.test(c)||a!=null&&c in Object(a)}var W1=f1(Object,"create");function wf(){this.__data__=W1?W1(null):{},this.size=0}function Sf(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var Af="__lodash_hash_undefined__",_f=Object.prototype,Pf=_f.hasOwnProperty;function Tf(c){var a=this.__data__;if(W1){var e=a[c];return e===Af?void 0:e}return Pf.call(a,c)?a[c]:void 0}var Bf=Object.prototype,$f=Bf.hasOwnProperty;function Ff(c){var a=this.__data__;return W1?a[c]!==void 0:$f.call(a,c)}var Df="__lodash_hash_undefined__";function Rf(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=W1&&a===void 0?Df:a,this}function e1(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}e1.prototype.clear=wf;e1.prototype.delete=Sf;e1.prototype.get=Tf;e1.prototype.has=Ff;e1.prototype.set=Rf;function Of(){this.__data__=[],this.size=0}function r4(c,a){for(var e=c.length;e--;)if(w6(c[e][0],a))return e;return-1}var Ef=Array.prototype,Uf=Ef.splice;function If(c){var a=this.__data__,e=r4(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():Uf.call(a,e,1),--this.size,!0}function jf(c){var a=this.__data__,e=r4(a,c);return e<0?void 0:a[e][1]}function qf(c){return r4(this.__data__,c)>-1}function Wf(c,a){var e=this.__data__,r=r4(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function B2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}B2.prototype.clear=Of;B2.prototype.delete=If;B2.prototype.get=jf;B2.prototype.has=qf;B2.prototype.set=Wf;var G1=f1(s2,"Map");function Gf(){this.size=0,this.__data__={hash:new e1,map:new(G1||B2),string:new e1}}function Xf(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function s4(c,a){var e=c.__data__;return Xf(a)?e[typeof a=="string"?"string":"hash"]:e.map}function Yf(c){var a=s4(this,c).delete(c);return this.size-=a?1:0,a}function Kf(c){return s4(this,c).get(c)}function Qf(c){return s4(this,c).has(c)}function Zf(c,a){var e=s4(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function I2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}I2.prototype.clear=Gf;I2.prototype.delete=Yf;I2.prototype.get=Kf;I2.prototype.has=Qf;I2.prototype.set=Zf;var Jf="Expected a function";function P6(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(Jf);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(P6.Cache||I2),e}P6.Cache=I2;var cv=500;function av(c){var a=P6(c,function(r){return e.size===cv&&e.clear(),r}),e=a.cache;return a}var ev=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rv=/\\(\\)?/g,sv=av(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(ev,function(e,r,s,n){a.push(s?n.replace(rv,"$1"):r||e)}),a});function nv(c){return c==null?"":X5(c)}function T6(c,a){return T2(c)?c:kf(c,a)?[c]:sv(nv(c))}var iv=1/0;function p7(c){if(typeof c=="string"||J3(c))return c;var a=c+"";return a=="0"&&1/c==-iv?"-0":a}function ov(c,a){a=T6(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[p7(a[e++])];return e&&e==r?c:void 0}function B6(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var B8=b2?b2.isConcatSpreadable:void 0;function tv(c){return T2(c)||t7(c)||!!(B8&&c&&c[B8])}function lv(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=tv),s||(s=[]);++n<i;){var o=c[n];e(o)?B6(s,o):s[s.length]=o}return s}function fv(c){var a=c==null?0:c.length;return a?lv(c):[]}function vv(c){return b6(s7(c,void 0,fv),c+"")}var $6=u7(Object.getPrototypeOf,Object),mv="[object Object]",uv=Function.prototype,pv=Object.prototype,h7=uv.toString,hv=pv.hasOwnProperty,Hv=h7.call(Object);function H7(c){if(!P2(c)||t1(c)!=mv)return!1;var a=$6(c);if(a===null)return!0;var e=hv.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&h7.call(e)==Hv}var zv=1,dv=32,E3=n7(function(c,a,e){var r=zv;if(e.length){var s=q1(e,y6(E3));r|=dv}return xl(c,r,a,e,s)});E3.placeholder={};function Vv(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function Mv(){this.__data__=new B2,this.size=0}function Cv(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function Lv(c){return this.__data__.get(c)}function gv(c){return this.__data__.has(c)}var bv=200;function xv(c,a){var e=this.__data__;if(e instanceof B2){var r=e.__data__;if(!G1||r.length<bv-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new I2(r)}return e.set(c,a),this.size=e.size,this}function N1(c){var a=this.__data__=new B2(c);this.size=a.size}N1.prototype.clear=Mv;N1.prototype.delete=Cv;N1.prototype.get=Lv;N1.prototype.has=gv;N1.prototype.set=xv;function yv(c,a){return c&&y1(a,n3(a),c)}function Nv(c,a){return c&&y1(a,_6(a),c)}var z7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$8=z7&&typeof module=="object"&&module&&!module.nodeType&&module,kv=$8&&$8.exports===z7,F8=kv?s2.Buffer:void 0,D8=F8?F8.allocUnsafe:void 0;function wv(c,a){if(a)return c.slice();var e=c.length,r=D8?D8(e):new c.constructor(e);return c.copy(r),r}function Sv(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function d7(){return[]}var Av=Object.prototype,_v=Av.propertyIsEnumerable,R8=Object.getOwnPropertySymbols,F6=R8?function(c){return c==null?[]:(c=Object(c),Sv(R8(c),function(a){return _v.call(c,a)}))}:d7;function Pv(c,a){return y1(c,F6(c),a)}var Tv=Object.getOwnPropertySymbols,V7=Tv?function(c){for(var a=[];c;)B6(a,F6(c)),c=$6(c);return a}:d7;function Bv(c,a){return y1(c,V7(c),a)}function M7(c,a,e){var r=a(c);return T2(c)?r:B6(r,e(c))}function $v(c){return M7(c,n3,F6)}function C7(c){return M7(c,_6,V7)}var K4=f1(s2,"DataView"),Q4=f1(s2,"Promise"),Z4=f1(s2,"Set"),O8="[object Map]",Fv="[object Object]",E8="[object Promise]",U8="[object Set]",I8="[object WeakMap]",j8="[object DataView]",Dv=l1(K4),Rv=l1(G1),Ov=l1(Q4),Ev=l1(Z4),Uv=l1(I1),N2=t1;(K4&&N2(new K4(new ArrayBuffer(1)))!=j8||G1&&N2(new G1)!=O8||Q4&&N2(Q4.resolve())!=E8||Z4&&N2(new Z4)!=U8||I1&&N2(new I1)!=I8)&&(N2=function(c){var a=t1(c),e=a==Fv?c.constructor:void 0,r=e?l1(e):"";if(r)switch(r){case Dv:return j8;case Rv:return O8;case Ov:return E8;case Ev:return U8;case Uv:return I8}return a});var Iv=Object.prototype,jv=Iv.hasOwnProperty;function qv(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&jv.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var q8=s2.Uint8Array;function D6(c){var a=new c.constructor(c.byteLength);return new q8(a).set(new q8(c)),a}function Wv(c,a){var e=a?D6(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.byteLength)}var Gv=/\w*$/;function Xv(c){var a=new c.constructor(c.source,Gv.exec(c));return a.lastIndex=c.lastIndex,a}var W8=b2?b2.prototype:void 0,G8=W8?W8.valueOf:void 0;function Yv(c){return G8?Object(G8.call(c)):{}}function Kv(c,a){var e=a?D6(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.length)}var Qv="[object Boolean]",Zv="[object Date]",Jv="[object Map]",cm="[object Number]",am="[object RegExp]",em="[object Set]",rm="[object String]",sm="[object Symbol]",nm="[object ArrayBuffer]",im="[object DataView]",om="[object Float32Array]",tm="[object Float64Array]",lm="[object Int8Array]",fm="[object Int16Array]",vm="[object Int32Array]",mm="[object Uint8Array]",um="[object Uint8ClampedArray]",pm="[object Uint16Array]",hm="[object Uint32Array]";function Hm(c,a,e){var r=c.constructor;switch(a){case nm:return D6(c);case Qv:case Zv:return new r(+c);case im:return Wv(c,e);case om:case tm:case lm:case fm:case vm:case mm:case um:case pm:case hm:return Kv(c,e);case Jv:return new r;case cm:case rm:return new r(c);case am:return Xv(c);case em:return new r;case sm:return Yv(c)}}function zm(c){return typeof c.constructor=="function"&&!e4(c)?a4($6(c)):{}}var dm="[object Map]";function Vm(c){return P2(c)&&N2(c)==dm}var X8=z1&&z1.isMap,Mm=X8?A6(X8):Vm,Cm="[object Set]";function Lm(c){return P2(c)&&N2(c)==Cm}var Y8=z1&&z1.isSet,gm=Y8?A6(Y8):Lm,bm=1,xm=2,ym=4,L7="[object Arguments]",Nm="[object Array]",km="[object Boolean]",wm="[object Date]",Sm="[object Error]",g7="[object Function]",Am="[object GeneratorFunction]",_m="[object Map]",Pm="[object Number]",b7="[object Object]",Tm="[object RegExp]",Bm="[object Set]",$m="[object String]",Fm="[object Symbol]",Dm="[object WeakMap]",Rm="[object ArrayBuffer]",Om="[object DataView]",Em="[object Float32Array]",Um="[object Float64Array]",Im="[object Int8Array]",jm="[object Int16Array]",qm="[object Int32Array]",Wm="[object Uint8Array]",Gm="[object Uint8ClampedArray]",Xm="[object Uint16Array]",Ym="[object Uint32Array]",W={};W[L7]=W[Nm]=W[Rm]=W[Om]=W[km]=W[wm]=W[Em]=W[Um]=W[Im]=W[jm]=W[qm]=W[_m]=W[Pm]=W[b7]=W[Tm]=W[Bm]=W[$m]=W[Fm]=W[Wm]=W[Gm]=W[Xm]=W[Ym]=!0;W[Sm]=W[g7]=W[Dm]=!1;function F1(c,a,e,r,s,n){var i,o=a&bm,t=a&xm,l=a&ym;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!M2(c))return c;var f=T2(c);if(f){if(i=qv(c),!o)return g6(c,i)}else{var v=N2(c),h=v==g7||v==Am;if(f7(c))return wv(c,o);if(v==b7||v==L7||h&&!s){if(i=t||h?{}:zm(c),!o)return t?Bv(c,Nv(i,c)):Pv(c,yv(i,c))}else{if(!W[v])return s?c:{};i=Hm(c,v,o)}}n||(n=new N1);var p=n.get(c);if(p)return p;n.set(c,i),gm(c)?c.forEach(function(L){i.add(F1(L,a,e,L,c,n))}):Mm(c)&&c.forEach(function(L,d){i.set(d,F1(L,a,e,d,c,n))});var g=l?t?C7:$v:t?_6:n3,b=f?void 0:g(c);return x6(b||c,function(L,d){b&&(d=L,L=c[d]),S6(i,d,F1(L,a,e,d,c,n))}),i}var Km=1,Qm=4;function Zm(c){return F1(c,Km|Qm)}function Jm(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),o=i.length;o--;){var t=i[++s];if(e(n[t],t,n)===!1)break}return a}}var cu=Jm();function au(c,a){return c&&cu(c,a,n3)}function eu(c,a){return function(e,r){if(e==null)return e;if(!s3(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var ru=eu(au),R4=function(){return s2.Date.now()},su="Expected a function",nu=Math.max,iu=Math.min;function J4(c,a,e){var r,s,n,i,o,t,l=0,f=!1,v=!1,h=!0;if(typeof c!="function")throw new TypeError(su);a=Y4(a)||0,M2(e)&&(f=!!e.leading,v="maxWait"in e,n=v?nu(Y4(e.maxWait)||0,a):n,h="trailing"in e?!!e.trailing:h);function p(A){var $=r,U=s;return r=s=void 0,l=A,i=c.apply(U,$),i}function g(A){return l=A,o=setTimeout(d,a),f?p(A):i}function b(A){var $=A-t,U=A-l,j=a-$;return v?iu(j,n-U):j}function L(A){var $=A-t,U=A-l;return t===void 0||$>=a||$<0||v&&U>=n}function d(){var A=R4();if(L(A))return M(A);o=setTimeout(d,b(A))}function M(A){return o=void 0,h&&r?p(A):(r=s=void 0,i)}function y(){o!==void 0&&clearTimeout(o),l=0,r=t=s=o=void 0}function x(){return o===void 0?i:M(R4())}function P(){var A=R4(),$=L(A);if(r=arguments,s=this,t=A,$){if(o===void 0)return g(t);if(v)return clearTimeout(o),o=setTimeout(d,a),p(t)}return o===void 0&&(o=setTimeout(d,a)),i}return P.cancel=y,P.flush=x,P}function ou(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function tu(c){return typeof c=="function"?c:c4}function X1(c,a){var e=T2(c)?x6:ru;return e(c,tu(a))}function lu(c,a){return a.length<2?c:ov(c,Vv(a,0,-1))}function K8(c){return P2(c)&&c.nodeType===1&&!H7(c)}function fu(c){return c==null}function vu(c,a){return a=T6(a,c),c=lu(c,a),c==null||delete c[p7(ou(a))]}function mu(c){return H7(c)?void 0:c}var uu=1,pu=2,hu=4,x7=vv(function(c,a){var e={};if(c==null)return e;var r=!1;a=G5(a,function(n){return n=T6(n,c),r||(r=n.length>1),n}),y1(c,C7(c),e),r&&(e=F1(e,uu|pu|hu,mu));for(var s=a.length;s--;)vu(e,a[s]);return e}),Hu="Expected a function";function zu(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(Hu);return M2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),J4(c,a,{leading:r,maxWait:a,trailing:s})}function du(c){return a=>{X1(c,e=>{a.use(e)})}}const j2=c=>(c.install=a=>{const e=(c==null?void 0:c.name)||"UnnamedComponent";a.component(e,c)},c),q2=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e};function Q8(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function w(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Q8(Object(e),!0).forEach(function(r){Z(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):Q8(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function U3(c){"@babel/helpers - typeof";return U3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},U3(c)}function Vu(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function Mu(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Cu(c,a,e){return a&&Mu(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function Z(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function R6(c,a){return gu(c)||xu(c,a)||y7(c,a)||Nu()}function i3(c){return Lu(c)||bu(c)||y7(c)||yu()}function Lu(c){if(Array.isArray(c))return c6(c)}function gu(c){if(Array.isArray(c))return c}function bu(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function xu(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,o;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(t){n=!0,o=t}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw o}}return r}}function y7(c,a){if(c){if(typeof c=="string")return c6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c6(c,a)}}function c6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function yu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Z8=function(){},O6={},N7={},k7=null,w7={mark:Z8,measure:Z8};try{typeof window<"u"&&(O6=window),typeof document<"u"&&(N7=document),typeof MutationObserver<"u"&&(k7=MutationObserver),typeof performance<"u"&&(w7=performance)}catch{}var ku=O6.navigator||{},J8=ku.userAgent,c5=J8===void 0?"":J8,O2=O6,Y=N7,a5=k7,L3=w7;O2.document;var $2=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",S7=~c5.indexOf("MSIE")||~c5.indexOf("Trident/"),g3,b3,x3,y3,N3,w2="___FONT_AWESOME___",a6=16,A7="fa",_7="svg-inline--fa",r1="data-fa-i2svg",e6="data-fa-pseudo-element",wu="data-fa-pseudo-element-pending",E6="data-prefix",U6="data-icon",e5="fontawesome-i2svg",Su="async",Au=["HTML","HEAD","STYLE","SCRIPT"],P7=function(){try{return!0}catch{return!1}}(),X="classic",Q="sharp",I6=[X,Q];function o3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[X]}})}var Y1=o3((g3={},Z(g3,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Z(g3,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),g3)),K1=o3((b3={},Z(b3,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z(b3,Q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),b3)),Q1=o3((x3={},Z(x3,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z(x3,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),x3)),_u=o3((y3={},Z(y3,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z(y3,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),y3)),Pu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,T7="fa-layers-text",Tu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bu=o3((N3={},Z(N3,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z(N3,Q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),N3)),B7=[1,2,3,4,5,6,7,8,9,10],$u=B7.concat([11,12,13,14,15,16,17,18,19,20]),Fu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Z1=new Set;Object.keys(K1[X]).map(Z1.add.bind(Z1));Object.keys(K1[Q]).map(Z1.add.bind(Z1));var Du=[].concat(I6,i3(Z1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q2.GROUP,Q2.SWAP_OPACITY,Q2.PRIMARY,Q2.SECONDARY]).concat(B7.map(function(c){return"".concat(c,"x")})).concat($u.map(function(c){return"w-".concat(c)})),D1=O2.FontAwesomeConfig||{};function Ru(c){var a=Y.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Ou(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(Y&&typeof Y.querySelector=="function"){var Eu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Eu.forEach(function(c){var a=R6(c,2),e=a[0],r=a[1],s=Ou(Ru(e));s!=null&&(D1[r]=s)})}var $7={styleDefault:"solid",familyDefault:"classic",cssPrefix:A7,replacementClass:_7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};D1.familyPrefix&&(D1.cssPrefix=D1.familyPrefix);var d1=w(w({},$7),D1);d1.autoReplaceSvg||(d1.observeMutations=!1);var T={};Object.keys($7).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){d1[c]=e,R1.forEach(function(r){return r(T)})},get:function(){return d1[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){d1.cssPrefix=a,R1.forEach(function(e){return e(T)})},get:function(){return d1.cssPrefix}});O2.FontAwesomeConfig=T;var R1=[];function Uu(c){return R1.push(c),function(){R1.splice(R1.indexOf(c),1)}}var R2=a6,C2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Iu(c){if(!(!c||!$2)){var a=Y.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=Y.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return Y.head.insertBefore(a,r),c}}var ju="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J1(){for(var c=12,a="";c-- >0;)a+=ju[Math.random()*62|0];return a}function k1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function j6(c){return c.classList?k1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function F7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qu(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(F7(c[e]),'" ')},"").trim()}function n4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function q6(c){return c.size!==C2.size||c.x!==C2.x||c.y!==C2.y||c.rotate!==C2.rotate||c.flipX||c.flipY}function Wu(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(n," ").concat(i," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:t,path:l}}function Gu(c){var a=c.transform,e=c.width,r=e===void 0?a6:e,s=c.height,n=s===void 0?a6:s,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&S7?t+="translate(".concat(a.x/R2-r/2,"em, ").concat(a.y/R2-n/2,"em) "):o?t+="translate(calc(-50% + ".concat(a.x/R2,"em), calc(-50% + ").concat(a.y/R2,"em)) "):t+="translate(".concat(a.x/R2,"em, ").concat(a.y/R2,"em) "),t+="scale(".concat(a.size/R2*(a.flipX?-1:1),", ").concat(a.size/R2*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var Xu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function D7(){var c=A7,a=_7,e=T.cssPrefix,r=T.replacementClass,s=Xu;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(r))}return s}var r5=!1;function O4(){T.autoAddCss&&!r5&&(Iu(D7()),r5=!0)}var Yu={mixout:function(){return{dom:{css:D7,insertCss:O4}}},hooks:function(){return{beforeDOMElementCreation:function(){O4()},beforeI2svg:function(){O4()}}}},S2=O2||{};S2[w2]||(S2[w2]={});S2[w2].styles||(S2[w2].styles={});S2[w2].hooks||(S2[w2].hooks={});S2[w2].shims||(S2[w2].shims=[]);var d2=S2[w2],R7=[],Ku=function c(){Y.removeEventListener("DOMContentLoaded",c),I3=1,R7.map(function(a){return a()})},I3=!1;$2&&(I3=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),I3||Y.addEventListener("DOMContentLoaded",Ku));function Qu(c){$2&&(I3?setTimeout(c,0):R7.push(c))}function t3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?F7(c):"<".concat(a," ").concat(qu(r),">").concat(n.map(t3).join(""),"</").concat(a,">")}function s5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var E4=function(a,e,r,s){var n=Object.keys(a),i=n.length,o=e,t,l,f;for(r===void 0?(t=1,f=a[n[0]]):(t=0,f=r);t<i;t++)l=n[t],f=o(f,a[l],l,a);return f};function Zu(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function r6(c){var a=Zu(c);return a.length===1?a[0].toString(16):null}function Ju(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function n5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function s6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=n5(a);typeof d2.hooks.addPack=="function"&&!s?d2.hooks.addPack(c,n5(a)):d2.styles[c]=w(w({},d2.styles[c]||{}),n),c==="fas"&&s6("fa",a)}var k3,w3,S3,m1=d2.styles,cp=d2.shims,ap=(k3={},Z(k3,X,Object.values(Q1[X])),Z(k3,Q,Object.values(Q1[Q])),k3),W6=null,O7={},E7={},U7={},I7={},j7={},ep=(w3={},Z(w3,X,Object.keys(Y1[X])),Z(w3,Q,Object.keys(Y1[Q])),w3);function rp(c){return~Du.indexOf(c)}function sp(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!rp(s)?s:null}var q7=function(){var a=function(n){return E4(m1,function(i,o,t){return i[t]=E4(o,n,{}),i},{})};O7=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var o=n[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){s[t.toString(16)]=i})}return s}),E7=a(function(s,n,i){if(s[i]=i,n[2]){var o=n[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){s[t]=i})}return s}),j7=a(function(s,n,i){var o=n[2];return s[i]=i,o.forEach(function(t){s[t]=i}),s});var e="far"in m1||T.autoFetchSvg,r=E4(cp,function(s,n){var i=n[0],o=n[1],t=n[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(s.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:o,iconName:t}),s},{names:{},unicodes:{}});U7=r.names,I7=r.unicodes,W6=i4(T.styleDefault,{family:T.familyDefault})};Uu(function(c){W6=i4(c.styleDefault,{family:T.familyDefault})});q7();function G6(c,a){return(O7[c]||{})[a]}function np(c,a){return(E7[c]||{})[a]}function Z2(c,a){return(j7[c]||{})[a]}function W7(c){return U7[c]||{prefix:null,iconName:null}}function ip(c){var a=I7[c],e=G6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function E2(){return W6}var X6=function(){return{prefix:null,iconName:null,rest:[]}};function i4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?X:e,s=Y1[r][c],n=K1[r][c]||K1[r][s],i=c in d2.styles?c:null;return n||i||null}var i5=(S3={},Z(S3,X,Object.keys(Q1[X])),Z(S3,Q,Object.keys(Q1[Q])),S3);function o4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},Z(a,X,"".concat(T.cssPrefix,"-").concat(X)),Z(a,Q,"".concat(T.cssPrefix,"-").concat(Q)),a),i=null,o=X;(c.includes(n[X])||c.some(function(l){return i5[X].includes(l)}))&&(o=X),(c.includes(n[Q])||c.some(function(l){return i5[Q].includes(l)}))&&(o=Q);var t=c.reduce(function(l,f){var v=sp(T.cssPrefix,f);if(m1[f]?(f=ap[o].includes(f)?_u[o][f]:f,i=f,l.prefix=f):ep[o].indexOf(f)>-1?(i=f,l.prefix=i4(f,{family:o})):v?l.iconName=v:f!==T.replacementClass&&f!==n[X]&&f!==n[Q]&&l.rest.push(f),!s&&l.prefix&&l.iconName){var h=i==="fa"?W7(l.iconName):{},p=Z2(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||p||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!m1.far&&m1.fas&&!T.autoFetchSvg&&(l.prefix="fas")}return l},X6());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===Q&&(m1.fass||T.autoFetchSvg)&&(t.prefix="fass",t.iconName=Z2(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=E2()||"fas"),t}var op=function(){function c(){Vu(this,c),this.definitions={}}return Cu(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=w(w({},e.definitions[o]||{}),i[o]),s6(o,i[o]);var t=Q1[X][o];t&&s6(t,i[o]),q7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],o=i.prefix,t=i.iconName,l=i.icon,f=l[2];e[o]||(e[o]={}),f.length>0&&f.forEach(function(v){typeof v=="string"&&(e[o][v]=l)}),e[o][t]=l}),e}}]),c}(),o5=[],u1={},p1={},tp=Object.keys(p1);function lp(c,a){var e=a.mixoutsTo;return o5=c,u1={},Object.keys(p1).forEach(function(r){tp.indexOf(r)===-1&&delete p1[r]}),o5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),U3(s[i])==="object"&&Object.keys(s[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=s[i][o]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){u1[i]||(u1[i]=[]),u1[i].push(n[i])})}r.provides&&r.provides(p1)}),e}function n6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=u1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function s1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=u1[c]||[];s.forEach(function(n){n.apply(null,e)})}function A2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return p1[c]?p1[c].apply(null,a):void 0}function i6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||E2();if(a)return a=Z2(e,a)||a,s5(G7.definitions,e,a)||s5(d2.styles,e,a)}var G7=new op,fp=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,s1("noAuto")},vp={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $2?(s1("beforeI2svg",a),A2("pseudoElements2svg",a),A2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Qu(function(){up({autoReplaceSvgRoot:e}),s1("watch",a)})}},mp={icon:function(a){if(a===null)return null;if(U3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=i4(a[0]);return{prefix:r,iconName:Z2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(Pu))){var s=o4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||E2(),iconName:Z2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=E2();return{prefix:n,iconName:Z2(n,a)||a}}}},m2={noAuto:fp,config:T,dom:vp,parse:mp,library:G7,findIconDefinition:i6,toHtml:t3},up=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?Y:e;(Object.keys(d2.styles).length>0||T.autoFetchSvg)&&$2&&T.autoReplaceSvg&&m2.dom.i2svg({node:r})};function t4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return t3(r)})}}),Object.defineProperty(c,"node",{get:function(){if($2){var r=Y.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function pp(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(q6(i)&&e.found&&!r.found){var o=e.width,t=e.height,l={x:o/t/2,y:.5};s.style=n4(w(w({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function hp(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(w({},s),{},{id:i}),children:r}]}]}function Y6(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,o=c.symbol,t=c.title,l=c.maskId,f=c.titleId,v=c.extra,h=c.watchable,p=h===void 0?!1:h,g=r.found?r:e,b=g.width,L=g.height,d=s==="fak",M=[T.replacementClass,n?"".concat(T.cssPrefix,"-").concat(n):""].filter(function(j){return v.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(v.classes).join(" "),y={children:[],attributes:w(w({},v.attributes),{},{"data-prefix":s,"data-icon":n,class:M,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(L)})},x=d&&!~v.classes.indexOf("fa-fw")?{width:"".concat(b/L*16*.0625,"em")}:{};p&&(y.attributes[r1]=""),t&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||J1())},children:[t]}),delete y.attributes.title);var P=w(w({},y),{},{prefix:s,iconName:n,main:e,mask:r,maskId:l,transform:i,symbol:o,styles:w(w({},x),v.styles)}),A=r.found&&e.found?A2("generateAbstractMask",P)||{children:[],attributes:{}}:A2("generateAbstractIcon",P)||{children:[],attributes:{}},$=A.children,U=A.attributes;return P.children=$,P.attributes=U,o?hp(P):pp(P)}function t5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,l=w(w(w({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});t&&(l[r1]="");var f=w({},i.styles);q6(s)&&(f.transform=Gu({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var v=n4(f);v.length>0&&(l.style=v);var h=[];return h.push({tag:"span",attributes:l,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function Hp(c){var a=c.content,e=c.title,r=c.extra,s=w(w(w({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=n4(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var U4=d2.styles;function o6(c){var a=c[0],e=c[1],r=c.slice(4),s=R6(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var zp={found:!1,width:512,height:512};function dp(c,a){!P7&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function t6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=E2()),new Promise(function(r,s){if(A2("missingIconAbstract"),e==="fa"){var n=W7(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&U4[a]&&U4[a][c]){var i=U4[a][c];return r(o6(i))}dp(c,a),r(w(w({},zp),{},{icon:T.showMissingIcons&&c?A2("missingIconAbstract")||{}:{}}))})}var l5=function(){},l6=T.measurePerformance&&L3&&L3.mark&&L3.measure?L3:{mark:l5,measure:l5},T1='FA "6.5.2"',Vp=function(a){return l6.mark("".concat(T1," ").concat(a," begins")),function(){return X7(a)}},X7=function(a){l6.mark("".concat(T1," ").concat(a," ends")),l6.measure("".concat(T1," ").concat(a),"".concat(T1," ").concat(a," begins"),"".concat(T1," ").concat(a," ends"))},K6={begin:Vp,end:X7},T3=function(){};function f5(c){var a=c.getAttribute?c.getAttribute(r1):null;return typeof a=="string"}function Mp(c){var a=c.getAttribute?c.getAttribute(E6):null,e=c.getAttribute?c.getAttribute(U6):null;return a&&e}function Cp(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function Lp(){if(T.autoReplaceSvg===!0)return B3.replace;var c=B3[T.autoReplaceSvg];return c||B3.replace}function gp(c){return Y.createElementNS("http://www.w3.org/2000/svg",c)}function bp(c){return Y.createElement(c)}function Y7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?gp:bp:e;if(typeof c=="string")return Y.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(Y7(i,{ceFn:r}))}),s}function xp(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var B3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(Y7(s),e)}),e.getAttribute(r1)===null&&T.keepOriginalSource){var r=Y.createComment(xp(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~j6(e).indexOf(T.replacementClass))return B3.replace(a);var s=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(o,t){return t===T.replacementClass||t.match(s)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(o){return t3(o)}).join(`
`);e.setAttribute(r1,""),e.innerHTML=i}};function v5(c){c()}function K7(c,a){var e=typeof a=="function"?a:T3;if(c.length===0)e();else{var r=v5;T.mutateApproach===Su&&(r=O2.requestAnimationFrame||v5),r(function(){var s=Lp(),n=K6.begin("mutate");c.map(s),n(),e()})}}var Q6=!1;function Q7(){Q6=!0}function f6(){Q6=!1}var j3=null;function m5(c){if(a5&&T.observeMutations){var a=c.treeCallback,e=a===void 0?T3:a,r=c.nodeCallback,s=r===void 0?T3:r,n=c.pseudoElementsCallback,i=n===void 0?T3:n,o=c.observeMutationsRoot,t=o===void 0?Y:o;j3=new a5(function(l){if(!Q6){var f=E2();k1(l).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!f5(v.addedNodes[0])&&(T.searchPseudoElements&&i(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&T.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&f5(v.target)&&~Fu.indexOf(v.attributeName))if(v.attributeName==="class"&&Mp(v.target)){var h=o4(j6(v.target)),p=h.prefix,g=h.iconName;v.target.setAttribute(E6,p||f),g&&v.target.setAttribute(U6,g)}else Cp(v.target)&&s(v.target)})}}),$2&&j3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yp(){j3&&j3.disconnect()}function Np(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),e}function kp(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=o4(j6(c));return s.prefix||(s.prefix=E2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=np(s.prefix,c.innerText)||G6(s.prefix,r6(c.innerText))),!s.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function wp(c){var a=k1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||J1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Sp(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function u5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=kp(c),r=e.iconName,s=e.prefix,n=e.rest,i=wp(c),o=n6("parseNodeAttributes",{},c),t=a.styleParser?Np(c):[];return w({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:C2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:t,attributes:i}},o)}var Ap=d2.styles;function Z7(c){var a=T.autoReplaceSvg==="nest"?u5(c,{styleParser:!1}):u5(c);return~a.extra.classes.indexOf(T7)?A2("generateLayersText",c,a):A2("generateSvgReplacementMutation",c,a)}var U2=new Set;I6.map(function(c){U2.add("fa-".concat(c))});Object.keys(Y1[X]).map(U2.add.bind(U2));Object.keys(Y1[Q]).map(U2.add.bind(U2));U2=i3(U2);function p5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$2)return Promise.resolve();var e=Y.documentElement.classList,r=function(v){return e.add("".concat(e5,"-").concat(v))},s=function(v){return e.remove("".concat(e5,"-").concat(v))},n=T.autoFetchSvg?U2:I6.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ap));n.includes("fa")||n.push("fa");var i=[".".concat(T7,":not([").concat(r1,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(r1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=k1(c.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),s("complete");else return Promise.resolve();var t=K6.begin("onTree"),l=o.reduce(function(f,v){try{var h=Z7(v);h&&f.push(h)}catch(p){P7||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,v){Promise.all(l).then(function(h){K7(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),t(),f()})}).catch(function(h){t(),v(h)})})}function _p(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Z7(c).then(function(e){e&&K7([e],a)})}function Pp(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:i6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:i6(s||{})),c(r,w(w({},e),{},{mask:s}))}}var Tp=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?C2:r,n=e.symbol,i=n===void 0?!1:n,o=e.mask,t=o===void 0?null:o,l=e.maskId,f=l===void 0?null:l,v=e.title,h=v===void 0?null:v,p=e.titleId,g=p===void 0?null:p,b=e.classes,L=b===void 0?[]:b,d=e.attributes,M=d===void 0?{}:d,y=e.styles,x=y===void 0?{}:y;if(a){var P=a.prefix,A=a.iconName,$=a.icon;return t4(w({type:"icon"},a),function(){return s1("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(h?M["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(g||J1()):(M["aria-hidden"]="true",M.focusable="false")),Y6({icons:{main:o6($),mask:t?o6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:A,transform:w(w({},C2),s),symbol:i,title:h,maskId:f,titleId:g,extra:{attributes:M,styles:x,classes:L}})})}},Bp={mixout:function(){return{icon:Pp(Tp)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=p5,e.nodeCallback=_p,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?Y:r,n=e.callback,i=n===void 0?function(){}:n;return p5(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,o=r.prefix,t=r.transform,l=r.symbol,f=r.mask,v=r.maskId,h=r.extra;return new Promise(function(p,g){Promise.all([t6(s,o),f.iconName?t6(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var L=R6(b,2),d=L[0],M=L[1];p([e,Y6({icons:{main:d,mask:M},prefix:o,iconName:s,transform:t,symbol:l,maskId:v,title:n,titleId:i,extra:h,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,o=e.styles,t=n4(o);t.length>0&&(s.style=t);var l;return q6(i)&&(l=A2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:s}}}},$p={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return t4({type:"layer"},function(){s1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(i3(n)).join(" ")},children:i}]})}}}},Fp={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,o=i===void 0?[]:i,t=r.attributes,l=t===void 0?{}:t,f=r.styles,v=f===void 0?{}:f;return t4({type:"counter",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),Hp({content:e.toString(),title:n,extra:{attributes:l,styles:v,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(i3(o))}})})}}}},Dp={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?C2:s,i=r.title,o=i===void 0?null:i,t=r.classes,l=t===void 0?[]:t,f=r.attributes,v=f===void 0?{}:f,h=r.styles,p=h===void 0?{}:h;return t4({type:"text",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),t5({content:e,transform:w(w({},C2),n),title:o,extra:{attributes:v,styles:p,classes:["".concat(T.cssPrefix,"-layers-text")].concat(i3(l))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,o=null,t=null;if(S7){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/l,t=f.height/l}return T.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,t5({content:e.innerHTML,width:o,height:t,transform:n,title:s,extra:i,watchable:!0})])}}},Rp=new RegExp('"',"ug"),h5=[1105920,1112319];function Op(c){var a=c.replace(Rp,""),e=Ju(a,0),r=e>=h5[0]&&e<=h5[1],s=a.length===2?a[0]===a[1]:!1;return{value:r6(s?a[0]:a),isSecondary:r||s}}function H5(c,a){var e="".concat(wu).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=k1(c.children),i=n.filter(function($){return $.getAttribute(e6)===a})[0],o=O2.getComputedStyle(c,a),t=o.getPropertyValue("font-family").match(Tu),l=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),r();if(t&&f!=="none"&&f!==""){var v=o.getPropertyValue("content"),h=~["Sharp"].indexOf(t[2])?Q:X,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?K1[h][t[2].toLowerCase()]:Bu[h][l],g=Op(v),b=g.value,L=g.isSecondary,d=t[0].startsWith("FontAwesome"),M=G6(p,b),y=M;if(d){var x=ip(b);x.iconName&&x.prefix&&(M=x.iconName,p=x.prefix)}if(M&&!L&&(!i||i.getAttribute(E6)!==p||i.getAttribute(U6)!==y)){c.setAttribute(e,y),i&&c.removeChild(i);var P=Sp(),A=P.extra;A.attributes[e6]=a,t6(M,p).then(function($){var U=Y6(w(w({},P),{},{icons:{main:$,mask:X6()},prefix:p,iconName:y,extra:A,watchable:!0})),j=Y.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(j,c.firstChild):c.appendChild(j),j.outerHTML=U.map(function(K){return t3(K)}).join(`