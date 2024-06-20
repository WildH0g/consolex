(function(_,C){typeof exports=="object"&&typeof module<"u"?C(exports):typeof define=="function"&&define.amd?define(["exports"],C):(_=typeof globalThis<"u"?globalThis:_||self,C(_.init={}))})(this,function(_){"use strict";function C(e){return Array.isArray(e)&&Array.isArray(e==null?void 0:e[0])}function ce(e){return typeof e=="object"&&!Array.isArray(e)}function nt(e){return Array.isArray(e)&&e.every(ce)}const T={isTwoDimAr:C,isObject:ce,isObjectArray:nt};function V(e,t={}){let{addIndices:r}=t;r===void 0&&(r=!0);const a=!T.isTwoDimAr(e);a&&(e=it(e,"table(TwoDimArray)"));const o=[...e[0]];if(!a&&r){r==="row-only"&&e.shift(),e.forEach((c,u)=>c.unshift(u+""));let n;r===!0&&(n=new Array(e[0].length).fill().map((c,u)=>u===0?"(index)":u-1+"")),r==="row-only"&&(n=["(index)",...o]),e.unshift(n)}e=e.map(n=>n.map(st));const i=e.reduce((n,c)=>{const u=c.map(v=>(v+"").length);return n.length?n.map((v,p)=>v<u[p]?u[p]:v):u},[]);return e.reduce((n,c,u)=>{const v=c.map((p,g)=>ot(p,i[g]));return n.length&&(n+=`
`),u===1&&(n+=`|${v.map(p=>p.replace(/\|/g,"-")).join("|").replace(/[^|]/g,"-")}|
`.replace(/\|-/g,"| ").replace(/-\|/g," |")),n+`|${v.join("|")}|`},"")}function ot(e,t){e+="";const r=1,a=t-e.length-r+2;return`${" ".repeat(r)}${e}${" ".repeat(a)}`}function st(e){if(typeof e!="object")return e;let t=JSON.stringify(e);return t.length>25&&(t=t.substring(0,21)+"..."),t}function it(e,t){return e=e+"",e.length>25&&(e=e.slice(0,21)+"..."),[["Error","Source","Input"],["Invalid argument",t,e]]}function ct(e){if(!T.isObject(e))throw"This is not an object";const t=["(index)","Value"];let r=ft(e,t).map(o=>o.map(i=>i&&i!==void 0?i:"")).map(o=>{const i=t.length-o.length;for(let s=0;s<i;s++)o.push("");return o});const a=[t,...r];return V(a,{addIndices:!1})}function ut(e){return Array.isArray?e.reduce((t,r,a)=>(t[a]=r,t),{}):e}function ue(e,t,r,a){return e.forEach(o=>{t.indexOf(o[0])===-1&&t.push(o[0])}),e.reduce((o,[i,s])=>{if(T.isObject(s))return ue(Object.entries(s),t,r,!1);const n=t.findIndex(c=>c===i);return o[n]=s,[...o].map(c=>c!==void 0?c:a?"":"{...}")},[r,""])}function ft(e,t){return Object.entries(e).map(([o,i])=>{let s=!1;return Array.isArray(i)&&(i=ut(i),s=!0),T.isObject(i)?ue(Object.entries(i),t,o,s):[o,i]})}function lt(e){if(!T.isObjectArray(e))throw"This is not an object array";const t={};let r=-1;const a=[];let o=[];for(const s of e){const n=Object.entries(s),c=new Array(n.length).fill("");n.forEach(([u,v])=>{u in t||(t[u]=++r,a.push(u)),c[t[u]]=v}),o.push(c)}o.forEach(s=>{for(let n=0;n<s.length;n++)n in s||(s[n]="")}),o.forEach(s=>{if(s.length===a.length)return;const n=a.length-s.length;for(let c=0;c<n;c++)s.push("")});const i=[a,...o];return V(i,{addIndices:"row-only"})}const pt=e=>e;function vt(){globalThis.require=globalThis.require||pt}var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function gt(){this.__data__=[],this.size=0}var bt=gt;function ht(e,t){return e===t||e!==e&&t!==t}var fe=ht,$t=fe;function dt(e,t){for(var r=e.length;r--;)if($t(e[r][0],t))return r;return-1}var M=dt,_t=M,Tt=Array.prototype,jt=Tt.splice;function Ot(e){var t=this.__data__,r=_t(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():jt.call(t,r,1),--this.size,!0}var At=Ot,mt=M;function St(e){var t=this.__data__,r=mt(t,e);return r<0?void 0:t[r][1]}var Ct=St,It=M;function wt(e){return It(this.__data__,e)>-1}var Pt=wt,xt=M;function Et(e,t){var r=this.__data__,a=xt(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var Mt=Et,Lt=bt,Dt=At,Ft=Ct,Gt=Pt,Bt=Mt;function j(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}j.prototype.clear=Lt,j.prototype.delete=Dt,j.prototype.get=Ft,j.prototype.has=Gt,j.prototype.set=Bt;var L=j,Ut=L;function Nt(){this.__data__=new Ut,this.size=0}var Kt=Nt;function Ht(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var Rt=Ht;function Vt(e){return this.__data__.get(e)}var zt=Vt;function kt(e){return this.__data__.has(e)}var qt=kt,Wt=typeof E=="object"&&E&&E.Object===Object&&E,le=Wt,Yt=le,Jt=typeof self=="object"&&self&&self.Object===Object&&self,Xt=Yt||Jt||Function("return this")(),y=Xt,Zt=y,Qt=Zt.Symbol,z=Qt,pe=z,ve=Object.prototype,er=ve.hasOwnProperty,tr=ve.toString,I=pe?pe.toStringTag:void 0;function rr(e){var t=er.call(e,I),r=e[I];try{e[I]=void 0;var a=!0}catch{}var o=tr.call(e);return a&&(t?e[I]=r:delete e[I]),o}var ar=rr,nr=Object.prototype,or=nr.toString;function sr(e){return or.call(e)}var ir=sr,ye=z,cr=ar,ur=ir,fr="[object Null]",lr="[object Undefined]",ge=ye?ye.toStringTag:void 0;function pr(e){return e==null?e===void 0?lr:fr:ge&&ge in Object(e)?cr(e):ur(e)}var D=pr;function vr(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var w=vr,yr=D,gr=w,br="[object AsyncFunction]",hr="[object Function]",$r="[object GeneratorFunction]",dr="[object Proxy]";function _r(e){if(!gr(e))return!1;var t=yr(e);return t==hr||t==$r||t==br||t==dr}var be=_r,Tr=y,jr=Tr["__core-js_shared__"],Or=jr,k=Or,he=function(){var e=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ar(e){return!!he&&he in e}var mr=Ar,Sr=Function.prototype,Cr=Sr.toString;function Ir(e){if(e!=null){try{return Cr.call(e)}catch{}try{return e+""}catch{}}return""}var $e=Ir,wr=be,Pr=mr,xr=w,Er=$e,Mr=/[\\^$.*+?()[\]{}|]/g,Lr=/^\[object .+?Constructor\]$/,Dr=Function.prototype,Fr=Object.prototype,Gr=Dr.toString,Br=Fr.hasOwnProperty,Ur=RegExp("^"+Gr.call(Br).replace(Mr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Nr(e){if(!xr(e)||Pr(e))return!1;var t=wr(e)?Ur:Lr;return t.test(Er(e))}var Kr=Nr;function Hr(e,t){return e==null?void 0:e[t]}var Rr=Hr,Vr=Kr,zr=Rr;function kr(e,t){var r=zr(e,t);return Vr(r)?r:void 0}var h=kr,qr=h,Wr=y,Yr=qr(Wr,"Map"),q=Yr,Jr=h,Xr=Jr(Object,"create"),F=Xr,de=F;function Zr(){this.__data__=de?de(null):{},this.size=0}var Qr=Zr;function ea(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ta=ea,ra=F,aa="__lodash_hash_undefined__",na=Object.prototype,oa=na.hasOwnProperty;function sa(e){var t=this.__data__;if(ra){var r=t[e];return r===aa?void 0:r}return oa.call(t,e)?t[e]:void 0}var ia=sa,ca=F,ua=Object.prototype,fa=ua.hasOwnProperty;function la(e){var t=this.__data__;return ca?t[e]!==void 0:fa.call(t,e)}var pa=la,va=F,ya="__lodash_hash_undefined__";function ga(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=va&&t===void 0?ya:t,this}var ba=ga,ha=Qr,$a=ta,da=ia,_a=pa,Ta=ba;function O(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}O.prototype.clear=ha,O.prototype.delete=$a,O.prototype.get=da,O.prototype.has=_a,O.prototype.set=Ta;var ja=O,_e=ja,Oa=L,Aa=q;function ma(){this.size=0,this.__data__={hash:new _e,map:new(Aa||Oa),string:new _e}}var Sa=ma;function Ca(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Ia=Ca,wa=Ia;function Pa(e,t){var r=e.__data__;return wa(t)?r[typeof t=="string"?"string":"hash"]:r.map}var G=Pa,xa=G;function Ea(e){var t=xa(this,e).delete(e);return this.size-=t?1:0,t}var Ma=Ea,La=G;function Da(e){return La(this,e).get(e)}var Fa=Da,Ga=G;function Ba(e){return Ga(this,e).has(e)}var Ua=Ba,Na=G;function Ka(e,t){var r=Na(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var Ha=Ka,Ra=Sa,Va=Ma,za=Fa,ka=Ua,qa=Ha;function A(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}A.prototype.clear=Ra,A.prototype.delete=Va,A.prototype.get=za,A.prototype.has=ka,A.prototype.set=qa;var Wa=A,Ya=L,Ja=q,Xa=Wa,Za=200;function Qa(e,t){var r=this.__data__;if(r instanceof Ya){var a=r.__data__;if(!Ja||a.length<Za-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new Xa(a)}return r.set(e,t),this.size=r.size,this}var en=Qa,tn=L,rn=Kt,an=Rt,nn=zt,on=qt,sn=en;function m(e){var t=this.__data__=new tn(e);this.size=t.size}m.prototype.clear=rn,m.prototype.delete=an,m.prototype.get=nn,m.prototype.has=on,m.prototype.set=sn;var cn=m;function un(e,t){for(var r=-1,a=e==null?0:e.length;++r<a&&t(e[r],r,e)!==!1;);return e}var fn=un,ln=h,pn=function(){try{var e=ln(Object,"defineProperty");return e({},"",{}),e}catch{}}(),vn=pn,Te=vn;function yn(e,t,r){t=="__proto__"&&Te?Te(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var je=yn,gn=je,bn=fe,hn=Object.prototype,$n=hn.hasOwnProperty;function dn(e,t,r){var a=e[t];(!($n.call(e,t)&&bn(a,r))||r===void 0&&!(t in e))&&gn(e,t,r)}var Oe=dn,_n=Oe,Tn=je;function jn(e,t,r,a){var o=!r;r||(r={});for(var i=-1,s=t.length;++i<s;){var n=t[i],c=a?a(r[n],e[n],n,r,e):void 0;c===void 0&&(c=e[n]),o?Tn(r,n,c):_n(r,n,c)}return r}var B=jn;function On(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var An=On;function mn(e){return e!=null&&typeof e=="object"}var P=mn,Sn=D,Cn=P,In="[object Arguments]";function wn(e){return Cn(e)&&Sn(e)==In}var Pn=wn,Ae=Pn,xn=P,me=Object.prototype,En=me.hasOwnProperty,Mn=me.propertyIsEnumerable,Ln=Ae(function(){return arguments}())?Ae:function(e){return xn(e)&&En.call(e,"callee")&&!Mn.call(e,"callee")},Dn=Ln,Fn=Array.isArray,W=Fn,U={exports:{}};function Gn(){return!1}var Bn=Gn;U.exports,function(e,t){var r=y,a=Bn,o=t&&!t.nodeType&&t,i=o&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===o,n=s?r.Buffer:void 0,c=n?n.isBuffer:void 0,u=c||a;e.exports=u}(U,U.exports);var Se=U.exports,Un=9007199254740991,Nn=/^(?:0|[1-9]\d*)$/;function Kn(e,t){var r=typeof e;return t=t??Un,!!t&&(r=="number"||r!="symbol"&&Nn.test(e))&&e>-1&&e%1==0&&e<t}var Hn=Kn,Rn=9007199254740991;function Vn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rn}var Ce=Vn,zn=D,kn=Ce,qn=P,Wn="[object Arguments]",Yn="[object Array]",Jn="[object Boolean]",Xn="[object Date]",Zn="[object Error]",Qn="[object Function]",eo="[object Map]",to="[object Number]",ro="[object Object]",ao="[object RegExp]",no="[object Set]",oo="[object String]",so="[object WeakMap]",io="[object ArrayBuffer]",co="[object DataView]",uo="[object Float32Array]",fo="[object Float64Array]",lo="[object Int8Array]",po="[object Int16Array]",vo="[object Int32Array]",yo="[object Uint8Array]",go="[object Uint8ClampedArray]",bo="[object Uint16Array]",ho="[object Uint32Array]",l={};l[uo]=l[fo]=l[lo]=l[po]=l[vo]=l[yo]=l[go]=l[bo]=l[ho]=!0,l[Wn]=l[Yn]=l[io]=l[Jn]=l[co]=l[Xn]=l[Zn]=l[Qn]=l[eo]=l[to]=l[ro]=l[ao]=l[no]=l[oo]=l[so]=!1;function $o(e){return qn(e)&&kn(e.length)&&!!l[zn(e)]}var _o=$o;function To(e){return function(t){return e(t)}}var Y=To,N={exports:{}};N.exports,function(e,t){var r=le,a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===a,s=i&&r.process,n=function(){try{var c=o&&o.require&&o.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}}();e.exports=n}(N,N.exports);var J=N.exports,jo=_o,Oo=Y,Ie=J,we=Ie&&Ie.isTypedArray,Ao=we?Oo(we):jo,mo=Ao,So=An,Co=Dn,Io=W,wo=Se,Po=Hn,xo=mo,Eo=Object.prototype,Mo=Eo.hasOwnProperty;function Lo(e,t){var r=Io(e),a=!r&&Co(e),o=!r&&!a&&wo(e),i=!r&&!a&&!o&&xo(e),s=r||a||o||i,n=s?So(e.length,String):[],c=n.length;for(var u in e)(t||Mo.call(e,u))&&!(s&&(u=="length"||o&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Po(u,c)))&&n.push(u);return n}var Pe=Lo,Do=Object.prototype;function Fo(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Do;return e===r}var X=Fo;function Go(e,t){return function(r){return e(t(r))}}var xe=Go,Bo=xe,Uo=Bo(Object.keys,Object),No=Uo,Ko=X,Ho=No,Ro=Object.prototype,Vo=Ro.hasOwnProperty;function zo(e){if(!Ko(e))return Ho(e);var t=[];for(var r in Object(e))Vo.call(e,r)&&r!="constructor"&&t.push(r);return t}var ko=zo,qo=be,Wo=Ce;function Yo(e){return e!=null&&Wo(e.length)&&!qo(e)}var Ee=Yo,Jo=Pe,Xo=ko,Zo=Ee;function Qo(e){return Zo(e)?Jo(e):Xo(e)}var Z=Qo,es=B,ts=Z;function rs(e,t){return e&&es(t,ts(t),e)}var as=rs;function ns(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var os=ns,ss=w,is=X,cs=os,us=Object.prototype,fs=us.hasOwnProperty;function ls(e){if(!ss(e))return cs(e);var t=is(e),r=[];for(var a in e)a=="constructor"&&(t||!fs.call(e,a))||r.push(a);return r}var ps=ls,vs=Pe,ys=ps,gs=Ee;function bs(e){return gs(e)?vs(e,!0):ys(e)}var Q=bs,hs=B,$s=Q;function ds(e,t){return e&&hs(t,$s(t),e)}var _s=ds,K={exports:{}};K.exports,function(e,t){var r=y,a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===a,s=i?r.Buffer:void 0,n=s?s.allocUnsafe:void 0;function c(u,v){if(v)return u.slice();var p=u.length,g=n?n(p):new u.constructor(p);return u.copy(g),g}e.exports=c}(K,K.exports);var Ts=K.exports;function js(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}var Os=js;function As(e,t){for(var r=-1,a=e==null?0:e.length,o=0,i=[];++r<a;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i}var ms=As;function Ss(){return[]}var Me=Ss,Cs=ms,Is=Me,ws=Object.prototype,Ps=ws.propertyIsEnumerable,Le=Object.getOwnPropertySymbols,xs=Le?function(e){return e==null?[]:(e=Object(e),Cs(Le(e),function(t){return Ps.call(e,t)}))}:Is,ee=xs,Es=B,Ms=ee;function Ls(e,t){return Es(e,Ms(e),t)}var Ds=Ls;function Fs(e,t){for(var r=-1,a=t.length,o=e.length;++r<a;)e[o+r]=t[r];return e}var De=Fs,Gs=xe,Bs=Gs(Object.getPrototypeOf,Object),Fe=Bs,Us=De,Ns=Fe,Ks=ee,Hs=Me,Rs=Object.getOwnPropertySymbols,Vs=Rs?function(e){for(var t=[];e;)Us(t,Ks(e)),e=Ns(e);return t}:Hs,Ge=Vs,zs=B,ks=Ge;function qs(e,t){return zs(e,ks(e),t)}var Ws=qs,Ys=De,Js=W;function Xs(e,t,r){var a=t(e);return Js(e)?a:Ys(a,r(e))}var Be=Xs,Zs=Be,Qs=ee,ei=Z;function ti(e){return Zs(e,ei,Qs)}var ri=ti,ai=Be,ni=Ge,oi=Q;function si(e){return ai(e,oi,ni)}var ii=si,ci=h,ui=y,fi=ci(ui,"DataView"),li=fi,pi=h,vi=y,yi=pi(vi,"Promise"),gi=yi,bi=h,hi=y,$i=bi(hi,"Set"),di=$i,_i=h,Ti=y,ji=_i(Ti,"WeakMap"),Oi=ji,te=li,re=q,ae=gi,ne=di,oe=Oi,Ue=D,S=$e,Ne="[object Map]",Ai="[object Object]",Ke="[object Promise]",He="[object Set]",Re="[object WeakMap]",Ve="[object DataView]",mi=S(te),Si=S(re),Ci=S(ae),Ii=S(ne),wi=S(oe),$=Ue;(te&&$(new te(new ArrayBuffer(1)))!=Ve||re&&$(new re)!=Ne||ae&&$(ae.resolve())!=Ke||ne&&$(new ne)!=He||oe&&$(new oe)!=Re)&&($=function(e){var t=Ue(e),r=t==Ai?e.constructor:void 0,a=r?S(r):"";if(a)switch(a){case mi:return Ve;case Si:return Ne;case Ci:return Ke;case Ii:return He;case wi:return Re}return t});var se=$,Pi=Object.prototype,xi=Pi.hasOwnProperty;function Ei(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&xi.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Mi=Ei,Li=y,Di=Li.Uint8Array,Fi=Di,ze=Fi;function Gi(e){var t=new e.constructor(e.byteLength);return new ze(t).set(new ze(e)),t}var ie=Gi,Bi=ie;function Ui(e,t){var r=t?Bi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Ni=Ui,Ki=/\w*$/;function Hi(e){var t=new e.constructor(e.source,Ki.exec(e));return t.lastIndex=e.lastIndex,t}var Ri=Hi,ke=z,qe=ke?ke.prototype:void 0,We=qe?qe.valueOf:void 0;function Vi(e){return We?Object(We.call(e)):{}}var zi=Vi,ki=ie;function qi(e,t){var r=t?ki(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Wi=qi,Yi=ie,Ji=Ni,Xi=Ri,Zi=zi,Qi=Wi,ec="[object Boolean]",tc="[object Date]",rc="[object Map]",ac="[object Number]",nc="[object RegExp]",oc="[object Set]",sc="[object String]",ic="[object Symbol]",cc="[object ArrayBuffer]",uc="[object DataView]",fc="[object Float32Array]",lc="[object Float64Array]",pc="[object Int8Array]",vc="[object Int16Array]",yc="[object Int32Array]",gc="[object Uint8Array]",bc="[object Uint8ClampedArray]",hc="[object Uint16Array]",$c="[object Uint32Array]";function dc(e,t,r){var a=e.constructor;switch(t){case cc:return Yi(e);case ec:case tc:return new a(+e);case uc:return Ji(e,r);case fc:case lc:case pc:case vc:case yc:case gc:case bc:case hc:case $c:return Qi(e,r);case rc:return new a;case ac:case sc:return new a(e);case nc:return Xi(e);case oc:return new a;case ic:return Zi(e)}}var _c=dc,Tc=w,Ye=Object.create,jc=function(){function e(){}return function(t){if(!Tc(t))return{};if(Ye)return Ye(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),Oc=jc,Ac=Oc,mc=Fe,Sc=X;function Cc(e){return typeof e.constructor=="function"&&!Sc(e)?Ac(mc(e)):{}}var Ic=Cc,wc=se,Pc=P,xc="[object Map]";function Ec(e){return Pc(e)&&wc(e)==xc}var Mc=Ec,Lc=Mc,Dc=Y,Je=J,Xe=Je&&Je.isMap,Fc=Xe?Dc(Xe):Lc,Gc=Fc,Bc=se,Uc=P,Nc="[object Set]";function Kc(e){return Uc(e)&&Bc(e)==Nc}var Hc=Kc,Rc=Hc,Vc=Y,Ze=J,Qe=Ze&&Ze.isSet,zc=Qe?Vc(Qe):Rc,kc=zc,qc=cn,Wc=fn,Yc=Oe,Jc=as,Xc=_s,Zc=Ts,Qc=Os,eu=Ds,tu=Ws,ru=ri,au=ii,nu=se,ou=Mi,su=_c,iu=Ic,cu=W,uu=Se,fu=Gc,lu=w,pu=kc,vu=Z,yu=Q,gu=1,bu=2,hu=4,et="[object Arguments]",$u="[object Array]",du="[object Boolean]",_u="[object Date]",Tu="[object Error]",tt="[object Function]",ju="[object GeneratorFunction]",Ou="[object Map]",Au="[object Number]",rt="[object Object]",mu="[object RegExp]",Su="[object Set]",Cu="[object String]",Iu="[object Symbol]",wu="[object WeakMap]",Pu="[object ArrayBuffer]",xu="[object DataView]",Eu="[object Float32Array]",Mu="[object Float64Array]",Lu="[object Int8Array]",Du="[object Int16Array]",Fu="[object Int32Array]",Gu="[object Uint8Array]",Bu="[object Uint8ClampedArray]",Uu="[object Uint16Array]",Nu="[object Uint32Array]",f={};f[et]=f[$u]=f[Pu]=f[xu]=f[du]=f[_u]=f[Eu]=f[Mu]=f[Lu]=f[Du]=f[Fu]=f[Ou]=f[Au]=f[rt]=f[mu]=f[Su]=f[Cu]=f[Iu]=f[Gu]=f[Bu]=f[Uu]=f[Nu]=!0,f[Tu]=f[tt]=f[wu]=!1;function H(e,t,r,a,o,i){var s,n=t&gu,c=t&bu,u=t&hu;if(r&&(s=o?r(e,a,o,i):r(e)),s!==void 0)return s;if(!lu(e))return e;var v=cu(e);if(v){if(s=ou(e),!n)return Qc(e,s)}else{var p=nu(e),g=p==tt||p==ju;if(uu(e))return Zc(e,n);if(p==rt||p==et||g&&!o){if(s=c||g?{}:iu(e),!n)return c?tu(e,Xc(s,e)):eu(e,Jc(s,e))}else{if(!f[p])return o?e:{};s=su(e,p,n)}}i||(i=new qc);var x=i.get(e);if(x)return x;i.set(e,s),pu(e)?e.forEach(function(b){s.add(H(b,t,r,b,e,i))}):fu(e)&&e.forEach(function(b,d){s.set(d,H(b,t,r,d,e,i))});var R=u?c?au:ru:c?yu:vu,at=v?void 0:R(e);return Wc(at||e,function(b,d){at&&(d=b,b=e[d]),Yc(s,d,H(b,t,r,d,e,i))}),s}var Ku=H,Hu=Ku,Ru=1,Vu=4;function zu(e){return Hu(e,Ru|Vu)}var ku=zu;const qu=yt(ku);vt();const Wu=function(){const e=new WeakMap,t=["table"],r=["log","warn","error"],a=new WeakMap;class o{constructor(){return o.instance||(e.set(this,!1),a.set(this,[]),r.forEach(n=>this[n]=console[n]),o.instance=this),o.instance}polyfill(){return this.isPolyfilled?this:(t.forEach(n=>{n in Object.getPrototypeOf(console)||(Object.getPrototypeOf(console)[n]=this[n].bind(this))}),e.set(this,!0),this)}get isPolyfilled(){return e.get(this)}table(n,c={returnOnly:!1}){const u={isTwoDimAr:V,isObject:ct,isObjectArray:lt},v=qu(n),p=Object.keys(u).reduce((x,R)=>!x&&T[R](v)?u[R]:x,null);if(p===null)throw new Error("Cannot convert input to table");const g=i(p(v),this);return c.returnOnly||console.log(g),g}tree(n,c){console.log('⏳ Method "tree" not implemented yet')}assert(){console.log('⏳ Method "assert" not implemented yet')}group(){console.log('⏳ Method "group" not implemented yet')}dir(){console.log('⏳ Method "dir" not implemented yet')}count(){console.log('⏳ Method "count" not implemented yet')}countReset(){console.log('⏳ Method "countReset" not implemented yet')}help(){console.log('⏳ Method "help" not implemented yet')}}o.instance=null;function i(s,n){return a.get(n).push(s),s}return o}();_.ConsolAS=Wu,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
