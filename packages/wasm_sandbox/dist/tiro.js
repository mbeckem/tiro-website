
var Tiro = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Tiro) {
  Tiro = Tiro || {};


null;var g;g||(g=typeof Tiro !== 'undefined' ? Tiro : {});var ba,ca;g.ready=new Promise(function(a,b){ba=a;ca=b});var da={},t;for(t in g)g.hasOwnProperty(t)&&(da[t]=g[t]);var ea="./this.program",w="";"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src);_scriptDir&&(w=_scriptDir);0!==w.indexOf("blob:")?w=w.substr(0,w.lastIndexOf("/")+1):w="";var fa=g.print||console.log.bind(console),ha=g.printErr||console.warn.bind(console);
for(t in da)da.hasOwnProperty(t)&&(g[t]=da[t]);da=null;g.thisProgram&&(ea=g.thisProgram);var x=0,ia;g.wasmBinary&&(ia=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!==typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1,oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|l:(e&7)<<18|f<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}
function qa(a,b,c,d){if(0<d){d=c+d-1;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var l=a.charCodeAt(++e);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0}}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ta(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&ua[c];)++c;c<<=1;if(32<c-a&&sa)return sa.decode(y.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=va[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}
function wa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)va[b>>1]=a.charCodeAt(e),b+=2;va[b>>1]=0;return b-d}function xa(a){return 2*a.length}function ya(a,b){for(var c=0,d="";!(c>=b/4);){var e=z[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}
function za(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var l=a.charCodeAt(++e);f=65536+((f&1023)<<10)|l&1023}z[b>>2]=f;b+=4;if(b+4>c)break}z[b>>2]=0;return b-d}function Aa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var Ba,A,y,va,ua,z,C,Ca,Da;
function Ea(){var a=ma.buffer;Ba=a;g.HEAP8=A=new Int8Array(a);g.HEAP16=va=new Int16Array(a);g.HEAP32=z=new Int32Array(a);g.HEAPU8=y=new Uint8Array(a);g.HEAPU16=ua=new Uint16Array(a);g.HEAPU32=C=new Uint32Array(a);g.HEAPF32=Ca=new Float32Array(a);g.HEAPF64=Da=new Float64Array(a)}var E,Fa=[],Ga=[],Ha=[];function Ia(){var a=g.preRun.shift();Fa.unshift(a)}var G=0,Ja=null,Ka=null;g.preloadedImages={};g.preloadedAudios={};
function la(a){if(g.onAbort)g.onAbort(a);ha(a);na=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ca(a);throw a;}function La(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="tiro.wasm";if(!La()){var Ma=H;H=g.locateFile?g.locateFile(Ma,w):w+Ma}function Na(){var a=H;try{if(a==H&&ia)return new Uint8Array(ia);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function Oa(){return ia||"function"!==typeof fetch?Promise.resolve().then(function(){return Na()}):fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Na()})}function Pa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.mc;"number"===typeof c?void 0===b.Fb?E.get(c)():E.get(c)(b.Fb):c(void 0===b.Fb?null:b.Fb)}}}
function I(a){this.Lb=a;this.$a=a-16;this.fc=function(b){z[this.$a+4>>2]=b};this.qb=function(){return z[this.$a+4>>2]};this.dc=function(b){z[this.$a+8>>2]=b};this.Ub=function(){return z[this.$a+8>>2]};this.ec=function(){z[this.$a>>2]=0};this.Jb=function(b){A[this.$a+12>>0]=b?1:0};this.Tb=function(){return 0!=A[this.$a+12>>0]};this.Ab=function(b){A[this.$a+13>>0]=b?1:0};this.Mb=function(){return 0!=A[this.$a+13>>0]};this.Xb=function(b,c){this.fc(b);this.dc(c);this.ec();this.Jb(!1);this.Ab(!1)};this.Eb=
function(){z[this.$a>>2]=z[this.$a>>2]+1};this.cc=function(){var b=z[this.$a>>2];z[this.$a>>2]=b-1;return 1===b}}
function J(a){this.Gb=function(){K(this.$a);this.$a=0};this.tb=function(b){z[this.$a>>2]=b};this.mb=function(){return z[this.$a>>2]};this.sb=function(b){z[this.$a+4>>2]=b};this.xb=function(){return this.$a+4};this.Sb=function(){return z[this.$a+4>>2]};this.Vb=function(){if(Qa(this.nb().qb()))return z[this.mb()>>2];var b=this.Sb();return 0!==b?b:this.mb()};this.nb=function(){return new I(this.mb())};void 0===a?(this.$a=Ra(8),this.sb(0)):this.$a=a}var L=[],Sa=0;
function Ta(a){return K((new I(a)).$a)}function Ua(a){if(a.cc()&&!a.Mb()){var b=a.Ub();b&&E.get(b)(a.Lb);Ta(a.Lb)}}var M=0;function Va(){var a=L.pop();a||la("no exception to throw");var b=a.nb(),c=a.mb();b.Mb()?a.Gb():(L.push(a),b.Ab(!0),b.Jb(!1),Sa++);M=c;throw c;}function Wa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Xa=void 0;function N(a){for(var b="";y[a];)b+=Xa[y[a++]];return b}var Ya={},O={},Za={};
function $a(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function ab(a,b){a=$a(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function bb(a){var b=Error,c=ab(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var cb=void 0;function P(a){throw new cb(a);}var db=void 0;function eb(a){throw new db(a);}
function fb(a,b,c){function d(k){k=c(k);k.length!==a.length&&eb("Mismatched type converter count");for(var m=0;m<a.length;++m)Q(a[m],k[m])}a.forEach(function(k){Za[k]=b});var e=Array(b.length),f=[],l=0;b.forEach(function(k,m){O.hasOwnProperty(k)?e[m]=O[k]:(f.push(k),Ya.hasOwnProperty(k)||(Ya[k]=[]),Ya[k].push(function(){e[m]=O[k];++l;l===f.length&&d(e)}))});0===f.length&&d(e)}
function Q(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||P('type "'+d+'" must have a positive integer typeid pointer');if(O.hasOwnProperty(a)){if(c.Wb)return;P("Cannot register type '"+d+"' twice")}O[a]=b;delete Za[a];Ya.hasOwnProperty(a)&&(b=Ya[a],delete Ya[a],b.forEach(function(e){e()}))}function gb(a){P(a.Za.bb.ab.name+" instance already deleted")}var hb=!1;function ib(){}
function jb(a){--a.count.value;0===a.count.value&&(a.eb?a.fb.kb(a.eb):a.bb.ab.kb(a.$a))}function kb(a){if("undefined"===typeof FinalizationGroup)return kb=function(b){return b},a;hb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.$a?jb(c):console.warn("object already deleted: "+c.$a)});kb=function(b){hb.register(b,b.Za,b.Za);return b};ib=function(b){hb.unregister(b.Za)};return kb(a)}var lb=void 0,mb=[];
function nb(){for(;mb.length;){var a=mb.pop();a.Za.lb=!1;a["delete"]()}}function R(){}var ob={};function pb(a,b,c){if(void 0===a[b].hb){var d=a[b];a[b]=function(){a[b].hb.hasOwnProperty(arguments.length)||P("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].hb+")!");return a[b].hb[arguments.length].apply(this,arguments)};a[b].hb=[];a[b].hb[d.wb]=d}}
function qb(a,b){g.hasOwnProperty(a)?(P("Cannot register public name '"+a+"' twice"),pb(g,a,a),g.hasOwnProperty(void 0)&&P("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),g[a].hb[void 0]=b):g[a]=b}function rb(a,b,c,d,e,f,l,k){this.name=a;this.constructor=b;this.ob=c;this.kb=d;this.gb=e;this.Qb=f;this.vb=l;this.Pb=k;this.$b=[]}
function sb(a,b,c){for(;b!==c;)b.vb||P("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.vb(a),b=b.gb;return a}function tb(a,b){if(null===b)return this.Hb&&P("null is not a valid "+this.name),0;b.Za||P('Cannot pass "'+ub(b)+'" as a '+this.name);b.Za.$a||P("Cannot pass deleted object as a pointer of type "+this.name);return sb(b.Za.$a,b.Za.bb.ab,this.ab)}
function vb(a,b){if(null===b){this.Hb&&P("null is not a valid "+this.name);if(this.zb){var c=this.ac();null!==a&&a.push(this.kb,c);return c}return 0}b.Za||P('Cannot pass "'+ub(b)+'" as a '+this.name);b.Za.$a||P("Cannot pass deleted object as a pointer of type "+this.name);!this.yb&&b.Za.bb.yb&&P("Cannot convert argument of type "+(b.Za.fb?b.Za.fb.name:b.Za.bb.name)+" to parameter type "+this.name);c=sb(b.Za.$a,b.Za.bb.ab,this.ab);if(this.zb)switch(void 0===b.Za.eb&&P("Passing raw pointer to smart pointer is illegal"),
this.hc){case 0:b.Za.fb===this?c=b.Za.eb:P("Cannot convert argument of type "+(b.Za.fb?b.Za.fb.name:b.Za.bb.name)+" to parameter type "+this.name);break;case 1:c=b.Za.eb;break;case 2:if(b.Za.fb===this)c=b.Za.eb;else{var d=b.clone();c=this.bc(c,S(function(){d["delete"]()}));null!==a&&a.push(this.kb,c)}break;default:P("Unsupporting sharing policy")}return c}
function wb(a,b){if(null===b)return this.Hb&&P("null is not a valid "+this.name),0;b.Za||P('Cannot pass "'+ub(b)+'" as a '+this.name);b.Za.$a||P("Cannot pass deleted object as a pointer of type "+this.name);b.Za.bb.yb&&P("Cannot convert argument of type "+b.Za.bb.name+" to parameter type "+this.name);return sb(b.Za.$a,b.Za.bb.ab,this.ab)}function xb(a){return this.fromWireType(C[a>>2])}function yb(a,b,c){if(b===c)return a;if(void 0===c.gb)return null;a=yb(a,b,c.gb);return null===a?null:c.Pb(a)}
var zb={};function Ab(a,b){for(void 0===b&&P("ptr should not be undefined");a.gb;)b=a.vb(b),a=a.gb;return zb[b]}function Bb(a,b){b.bb&&b.$a||eb("makeClassHandle requires ptr and ptrType");!!b.fb!==!!b.eb&&eb("Both smartPtrType and smartPtr must be specified");b.count={value:1};return kb(Object.create(a,{Za:{value:b}}))}
function T(a,b,c,d){this.name=a;this.ab=b;this.Hb=c;this.yb=d;this.zb=!1;this.kb=this.bc=this.ac=this.Nb=this.hc=this.Zb=void 0;void 0!==b.gb?this.toWireType=vb:(this.toWireType=d?tb:wb,this.ib=null)}function Cb(a,b){g.hasOwnProperty(a)||eb("Replacing nonexistant public symbol");g[a]=b;g[a].wb=void 0}
function Db(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=g["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=E.get(b).apply(null,c);return d}}function Eb(a,b){a=N(a);var c=a.includes("j")?Db(a,b):E.get(b);"function"!==typeof c&&P("unknown function pointer with signature "+a+": "+b);return c}var Fb=void 0;function Gb(a){a=Hb(a);var b=N(a);K(a);return b}
function Ib(a,b){function c(f){e[f]||O[f]||(Za[f]?Za[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};b.forEach(c);throw new Fb(a+": "+d.map(Gb).join([", "]));}function Jb(a,b){for(var c=[],d=0;d<a;d++)c.push(z[(b>>2)+d]);return c}function Kb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function Lb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=ab(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}var Mb=[],U=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Nb(a){4<a&&0===--U[a].Ib&&(U[a]=void 0,Mb.push(a))}
function S(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Mb.length?Mb.pop():U.length;U[b]={Ib:1,value:a};return b}}function ub(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Ob(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ca[c>>2])};case 3:return function(c){return this.fromWireType(Da[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Rb(a,b,c){switch(b){case 0:return c?function(d){return A[d]}:function(d){return y[d]};case 1:return c?function(d){return va[d>>1]}:function(d){return ua[d>>1]};case 2:return c?function(d){return z[d>>2]}:function(d){return C[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function V(a){a||P("Cannot use deleted val. handle = "+a);return U[a].value}function Sb(a,b){var c=O[a];void 0===c&&P(b+" has unknown type "+Gb(a));return c}
function Tb(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=Sb(z[(b>>2)+d],"parameter "+d);return c}var Ub={};function Vb(a){var b=Ub[a];return void 0===b?N(a):b}var Wb=[];function Xb(a){var b=Wb.length;Wb.push(a);return b}var Yb;Yb=function(){return performance.now()};var Zb={};
function $b(){if(!ac){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ea||"./this.program"},b;for(b in Zb)void 0===Zb[b]?delete a[b]:a[b]=Zb[b];var c=[];for(b in a)c.push(b+"="+a[b]);ac=c}return ac}var ac,bc=[null,[],[]];function cc(a){return 0===a%4&&(0!==a%100||0===a%400)}function dc(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}
var ec=[31,29,31,30,31,30,31,31,30,31,30,31],fc=[31,28,31,30,31,30,31,31,30,31,30,31];function gc(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(cc(a.getFullYear())?ec:fc)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function hc(a,b,c,d){function e(h,p,u){for(h="number"===typeof h?h.toString():h||"";h.length<p;)h=u[0]+h;return h}function f(h,p){return e(h,p,"0")}function l(h,p){function u(D){return 0>D?-1:0<D?1:0}var r;0===(r=u(h.getFullYear()-p.getFullYear()))&&0===(r=u(h.getMonth()-p.getMonth()))&&(r=u(h.getDate()-p.getDate()));return r}function k(h){switch(h.getDay()){case 0:return new Date(h.getFullYear()-1,11,29);case 1:return h;case 2:return new Date(h.getFullYear(),0,3);case 3:return new Date(h.getFullYear(),
0,2);case 4:return new Date(h.getFullYear(),0,1);case 5:return new Date(h.getFullYear()-1,11,31);case 6:return new Date(h.getFullYear()-1,11,30)}}function m(h){h=gc(new Date(h.cb+1900,0,1),h.Db);var p=new Date(h.getFullYear()+1,0,4),u=k(new Date(h.getFullYear(),0,4));p=k(p);return 0>=l(u,h)?0>=l(p,h)?h.getFullYear()+1:h.getFullYear():h.getFullYear()-1}var n=z[d+40>>2];d={kc:z[d>>2],jc:z[d+4>>2],Bb:z[d+8>>2],ub:z[d+12>>2],pb:z[d+16>>2],cb:z[d+20>>2],Cb:z[d+24>>2],Db:z[d+28>>2],nc:z[d+32>>2],ic:z[d+
36>>2],lc:n?n?pa(y,n,void 0):"":""};c=c?pa(y,c,void 0):"";n={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var q in n)c=c.replace(new RegExp(q,"g"),n[q]);var B="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
v="January February March April May June July August September October November December".split(" ");n={"%a":function(h){return B[h.Cb].substring(0,3)},"%A":function(h){return B[h.Cb]},"%b":function(h){return v[h.pb].substring(0,3)},"%B":function(h){return v[h.pb]},"%C":function(h){return f((h.cb+1900)/100|0,2)},"%d":function(h){return f(h.ub,2)},"%e":function(h){return e(h.ub,2," ")},"%g":function(h){return m(h).toString().substring(2)},"%G":function(h){return m(h)},"%H":function(h){return f(h.Bb,
2)},"%I":function(h){h=h.Bb;0==h?h=12:12<h&&(h-=12);return f(h,2)},"%j":function(h){return f(h.ub+dc(cc(h.cb+1900)?ec:fc,h.pb-1),3)},"%m":function(h){return f(h.pb+1,2)},"%M":function(h){return f(h.jc,2)},"%n":function(){return"\n"},"%p":function(h){return 0<=h.Bb&&12>h.Bb?"AM":"PM"},"%S":function(h){return f(h.kc,2)},"%t":function(){return"\t"},"%u":function(h){return h.Cb||7},"%U":function(h){var p=new Date(h.cb+1900,0,1),u=0===p.getDay()?p:gc(p,7-p.getDay());h=new Date(h.cb+1900,h.pb,h.ub);return 0>
l(u,h)?f(Math.ceil((31-u.getDate()+(dc(cc(h.getFullYear())?ec:fc,h.getMonth()-1)-31)+h.getDate())/7),2):0===l(u,p)?"01":"00"},"%V":function(h){var p=new Date(h.cb+1901,0,4),u=k(new Date(h.cb+1900,0,4));p=k(p);var r=gc(new Date(h.cb+1900,0,1),h.Db);return 0>l(r,u)?"53":0>=l(p,r)?"01":f(Math.ceil((u.getFullYear()<h.cb+1900?h.Db+32-u.getDate():h.Db+1-u.getDate())/7),2)},"%w":function(h){return h.Cb},"%W":function(h){var p=new Date(h.cb,0,1),u=1===p.getDay()?p:gc(p,0===p.getDay()?1:7-p.getDay()+1);h=
new Date(h.cb+1900,h.pb,h.ub);return 0>l(u,h)?f(Math.ceil((31-u.getDate()+(dc(cc(h.getFullYear())?ec:fc,h.getMonth()-1)-31)+h.getDate())/7),2):0===l(u,p)?"01":"00"},"%y":function(h){return(h.cb+1900).toString().substring(2)},"%Y":function(h){return h.cb+1900},"%z":function(h){h=h.ic;var p=0<=h;h=Math.abs(h)/60;return(p?"+":"-")+String("0000"+(h/60*100+h%60)).slice(-4)},"%Z":function(h){return h.lc},"%%":function(){return"%"}};for(q in n)c.includes(q)&&(c=c.replace(new RegExp(q,"g"),n[q](d)));q=ic(c);
if(q.length>b)return 0;A.set(q,a);return q.length-1}for(var jc=Array(256),kc=0;256>kc;++kc)jc[kc]=String.fromCharCode(kc);Xa=jc;cb=g.BindingError=bb("BindingError");db=g.InternalError=bb("InternalError");R.prototype.isAliasOf=function(a){if(!(this instanceof R&&a instanceof R))return!1;var b=this.Za.bb.ab,c=this.Za.$a,d=a.Za.bb.ab;for(a=a.Za.$a;b.gb;)c=b.vb(c),b=b.gb;for(;d.gb;)a=d.vb(a),d=d.gb;return b===d&&c===a};
R.prototype.clone=function(){this.Za.$a||gb(this);if(this.Za.rb)return this.Za.count.value+=1,this;var a=kb,b=Object,c=b.create,d=Object.getPrototypeOf(this),e=this.Za;a=a(c.call(b,d,{Za:{value:{count:e.count,lb:e.lb,rb:e.rb,$a:e.$a,bb:e.bb,eb:e.eb,fb:e.fb}}}));a.Za.count.value+=1;a.Za.lb=!1;return a};R.prototype["delete"]=function(){this.Za.$a||gb(this);this.Za.lb&&!this.Za.rb&&P("Object already scheduled for deletion");ib(this);jb(this.Za);this.Za.rb||(this.Za.eb=void 0,this.Za.$a=void 0)};
R.prototype.isDeleted=function(){return!this.Za.$a};R.prototype.deleteLater=function(){this.Za.$a||gb(this);this.Za.lb&&!this.Za.rb&&P("Object already scheduled for deletion");mb.push(this);1===mb.length&&lb&&lb(nb);this.Za.lb=!0;return this};T.prototype.Rb=function(a){this.Nb&&(a=this.Nb(a));return a};T.prototype.Kb=function(a){this.kb&&this.kb(a)};T.prototype.argPackAdvance=8;T.prototype.readValueFromPointer=xb;T.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
T.prototype.fromWireType=function(a){function b(){return this.zb?Bb(this.ab.ob,{bb:this.Zb,$a:c,fb:this,eb:a}):Bb(this.ab.ob,{bb:this,$a:a})}var c=this.Rb(a);if(!c)return this.Kb(a),null;var d=Ab(this.ab,c);if(void 0!==d){if(0===d.Za.count.value)return d.Za.$a=c,d.Za.eb=a,d.clone();d=d.clone();this.Kb(a);return d}d=this.ab.Qb(c);d=ob[d];if(!d)return b.call(this);d=this.yb?d.Ob:d.pointerType;var e=yb(c,this.ab,d.ab);return null===e?b.call(this):this.zb?Bb(d.ab.ob,{bb:d,$a:e,fb:this,eb:a}):Bb(d.ab.ob,
{bb:d,$a:e})};g.getInheritedInstanceCount=function(){return Object.keys(zb).length};g.getLiveInheritedInstances=function(){var a=[],b;for(b in zb)zb.hasOwnProperty(b)&&a.push(zb[b]);return a};g.flushPendingDeletes=nb;g.setDelayFunction=function(a){lb=a;mb.length&&lb&&lb(nb)};Fb=g.UnboundTypeError=bb("UnboundTypeError");g.count_emval_handles=function(){for(var a=0,b=5;b<U.length;++b)void 0!==U[b]&&++a;return a};g.get_first_emval=function(){for(var a=5;a<U.length;++a)if(void 0!==U[a])return U[a];return null};
function ic(a){var b=Array(ra(a)+1);qa(a,b,0,b.length);return b}
var Rc={o:function(a){return Ra(a+16)+16},p:function(a){a=new J(a);var b=a.nb();b.Tb()||(b.Jb(!0),Sa--);b.Ab(!1);L.push(a);b.Eb();return a.Vb()},oa:function(){if(!L.length)return 0;var a=L[L.length-1];a.nb().Eb();return a.mb()},R:function(a){a&&Ua(new I(a))},v:function(){W(0);var a=L.pop();Ua(a.nb());a.Gb();M=0},b:function(){var a=M;if(!a)return x=0;var b=(new I(a)).qb(),c=new J;c.tb(a);c.sb(a);if(!b)return x=0,c.$a|0;a=Array.prototype.slice.call(arguments);for(var d=0;d<a.length;d++){var e=a[d];
if(0===e||e===b)break;if(lc(e,b,c.xb()))return x=e,c.$a|0}x=b;return c.$a|0},k:function(){var a=M;if(!a)return x=0;var b=(new I(a)).qb(),c=new J;c.tb(a);c.sb(a);if(!b)return x=0,c.$a|0;a=Array.prototype.slice.call(arguments);for(var d=0;d<a.length;d++){var e=a[d];if(0===e||e===b)break;if(lc(e,b,c.xb()))return x=e,c.$a|0}x=b;return c.$a|0},r:function(){var a=M;if(!a)return x=0;var b=(new I(a)).qb(),c=new J;c.tb(a);c.sb(a);if(!b)return x=0,c.$a|0;a=Array.prototype.slice.call(arguments);for(var d=0;d<
a.length;d++){var e=a[d];if(0===e||e===b)break;if(lc(e,b,c.xb()))return x=e,c.$a|0}x=b;return c.$a|0},ja:function(){var a=M;if(!a)return x=0;var b=(new I(a)).qb(),c=new J;c.tb(a);c.sb(a);if(!b)return x=0,c.$a|0;a=Array.prototype.slice.call(arguments);for(var d=0;d<a.length;d++){var e=a[d];if(0===e||e===b)break;if(lc(e,b,c.xb()))return x=e,c.$a|0}x=b;return c.$a|0},q:Ta,Q:function(a){a&&(new I(a)).Eb()},S:Va,ma:function(a){if(a){var b=new J;b.tb(a);a=b.nb();L.push(b);a.Ab(!0);Va()}},s:function(a,b,
c){(new I(a)).Xb(b,c);M=a;Sa++;throw a;},g:function(){return Sa},i:function(a){a=new J(a);var b=a.mb();M||(M=b);a.Gb();throw b;},ea:function(){},va:function(a,b,c,d,e){var f=Wa(c);b=N(b);Q(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,k){return k?d:e},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var k=A;else if(2===c)k=va;else if(4===c)k=z;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[l>>f])},ib:null})},W:function(a,b,c,d,
e,f,l,k,m,n,q,B,v){q=N(q);f=Eb(e,f);k&&(k=Eb(l,k));n&&(n=Eb(m,n));v=Eb(B,v);var h=$a(q);qb(h,function(){Ib("Cannot construct "+q+" due to unbound types",[d])});fb([a,b,c],d?[d]:[],function(p){p=p[0];if(d){var u=p.ab;var r=u.ob}else r=R.prototype;p=ab(h,function(){if(Object.getPrototypeOf(this)!==D)throw new cb("Use 'new' to construct "+q);if(void 0===F.jb)throw new cb(q+" has no accessible constructor");var Z=F.jb[arguments.length];if(void 0===Z)throw new cb("Tried to invoke ctor of "+q+" with invalid number of parameters ("+
arguments.length+") - expected ("+Object.keys(F.jb).toString()+") parameters instead!");return Z.apply(this,arguments)});var D=Object.create(r,{constructor:{value:p}});p.prototype=D;var F=new rb(q,p,D,v,u,f,k,n);u=new T(q,F,!0,!1);r=new T(q+"*",F,!1,!1);var ja=new T(q+" const*",F,!1,!0);ob[a]={pointerType:r,Ob:ja};Cb(h,p);return[u,r,ja]})},ya:function(a,b,c,d,e,f){0<b||la("Assertion failed: undefined");var l=Jb(b,c);e=Eb(d,e);var k=[f],m=[];fb([],[a],function(n){n=n[0];var q="constructor "+n.name;
void 0===n.ab.jb&&(n.ab.jb=[]);if(void 0!==n.ab.jb[b-1])throw new cb("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");n.ab.jb[b-1]=function(){Ib("Cannot construct "+n.name+" due to unbound types",l)};fb([],l,function(B){n.ab.jb[b-1]=function(){arguments.length!==b-1&&P(q+" called with "+arguments.length+" arguments, expected "+(b-1));m.length=
0;k.length=b;for(var v=1;v<b;++v)k[v]=B[v].toWireType(m,arguments[v-1]);v=e.apply(null,k);Kb(m);return B[0].fromWireType(v)};return[]});return[]})},N:function(a,b,c,d,e,f,l,k){var m=Jb(c,d);b=N(b);f=Eb(e,f);fb([],[a],function(n){function q(){Ib("Cannot call "+B+" due to unbound types",m)}n=n[0];var B=n.name+"."+b;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);k&&n.ab.$b.push(b);var v=n.ab.ob,h=v[b];void 0===h||void 0===h.hb&&h.className!==n.name&&h.wb===c-2?(q.wb=c-2,q.className=n.name,v[b]=q):(pb(v,
b,B),v[b].hb[c-2]=q);fb([],m,function(p){var u=B,r=n,D=f,F=p.length;2>F&&P("argTypes array size mismatch! Must at least get return value and 'this' types!");var ja=null!==p[1]&&null!==r,Z=!1;for(r=1;r<p.length;++r)if(null!==p[r]&&void 0===p[r].ib){Z=!0;break}var Pb="void"!==p[0].name,aa="",ka="";for(r=0;r<F-2;++r)aa+=(0!==r?", ":"")+"arg"+r,ka+=(0!==r?", ":"")+"arg"+r+"Wired";u="return function "+$a(u)+"("+aa+") {\nif (arguments.length !== "+(F-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+
(F-2)+" args!');\n}\n";Z&&(u+="var destructors = [];\n");var Qb=Z?"destructors":"null";aa="throwBindingError invoker fn runDestructors retType classParam".split(" ");D=[P,D,l,Kb,p[0],p[1]];ja&&(u+="var thisWired = classParam.toWireType("+Qb+", this);\n");for(r=0;r<F-2;++r)u+="var arg"+r+"Wired = argType"+r+".toWireType("+Qb+", arg"+r+"); // "+p[r+2].name+"\n",aa.push("argType"+r),D.push(p[r+2]);ja&&(ka="thisWired"+(0<ka.length?", ":"")+ka);u+=(Pb?"var rv = ":"")+"invoker(fn"+(0<ka.length?", ":"")+
ka+");\n";if(Z)u+="runDestructors(destructors);\n";else for(r=ja?1:2;r<p.length;++r)F=1===r?"thisWired":"arg"+(r-2)+"Wired",null!==p[r].ib&&(u+=F+"_dtor("+F+"); // "+p[r].name+"\n",aa.push(F+"_dtor"),D.push(p[r].ib));Pb&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n");aa.push(u+"}\n");p=Lb(aa).apply(null,D);void 0===v[b].hb?(p.wb=c-2,v[b]=p):v[b].hb[c-2]=p;return[]});return[]})},ua:function(a,b){b=N(b);Q(a,{name:b,fromWireType:function(c){var d=U[c].value;Nb(c);return d},toWireType:function(c,
d){return S(d)},argPackAdvance:8,readValueFromPointer:xb,ib:null})},T:function(a,b,c){c=Wa(c);b=N(b);Q(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError('Cannot convert "'+ub(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Ob(b,c),ib:null})},B:function(a,b,c,d,e){function f(n){return n}b=N(b);-1===e&&(e=4294967295);var l=Wa(c);if(0===d){var k=32-8*c;f=function(n){return n<<k>>>k}}var m=b.includes("unsigned");
Q(a,{name:b,fromWireType:f,toWireType:function(n,q){if("number"!==typeof q&&"boolean"!==typeof q)throw new TypeError('Cannot convert "'+ub(q)+'" to '+this.name);if(q<d||q>e)throw new TypeError('Passing a number "'+ub(q)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+e+"]!");return m?q>>>0:q|0},argPackAdvance:8,readValueFromPointer:Rb(b,l,0!==d),ib:null})},z:function(a,b,c){function d(f){f>>=2;var l=C;return new e(Ba,l[f+1],l[f])}var e=[Int8Array,
Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=N(c);Q(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Wb:!0})},U:function(a,b){b=N(b);var c="std::string"===b;Q(a,{name:b,fromWireType:function(d){var e=C[d>>2];if(c)for(var f=d+4,l=0;l<=e;++l){var k=d+4+l;if(l==e||0==y[k]){f=f?pa(y,f,k-f):"";if(void 0===m)var m=f;else m+=String.fromCharCode(0),m+=f;f=k+1}}else{m=Array(e);for(l=0;l<e;++l)m[l]=String.fromCharCode(y[d+4+l]);m=m.join("")}K(d);
return m},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var f="string"===typeof e;f||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||P("Cannot pass non-string to std::string");var l=(c&&f?function(){return ra(e)}:function(){return e.length})(),k=Ra(4+l+1);C[k>>2]=l;if(c&&f)qa(e,y,k+4,l+1);else if(f)for(f=0;f<l;++f){var m=e.charCodeAt(f);255<m&&(K(k),P("String has UTF-16 code units that do not fit in 8 bits"));y[k+4+f]=m}else for(f=0;f<l;++f)y[k+
4+f]=e[f];null!==d&&d.push(K,k);return k},argPackAdvance:8,readValueFromPointer:xb,ib:function(d){K(d)}})},L:function(a,b,c){c=N(c);if(2===b){var d=ta;var e=wa;var f=xa;var l=function(){return ua};var k=1}else 4===b&&(d=ya,e=za,f=Aa,l=function(){return C},k=2);Q(a,{name:c,fromWireType:function(m){for(var n=C[m>>2],q=l(),B,v=m+4,h=0;h<=n;++h){var p=m+4+h*b;if(h==n||0==q[p>>k])v=d(v,p-v),void 0===B?B=v:(B+=String.fromCharCode(0),B+=v),v=p+b}K(m);return B},toWireType:function(m,n){"string"!==typeof n&&
P("Cannot pass non-string to C++ string type "+c);var q=f(n),B=Ra(4+q+b);C[B>>2]=q>>k;e(n,B+4,q+b);null!==m&&m.push(K,B);return B},argPackAdvance:8,readValueFromPointer:xb,ib:function(m){K(m)}})},wa:function(a,b){b=N(b);Q(a,{Yb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},P:function(a,b,c){a=V(a);b=Sb(b,"emval::as");var d=[],e=S(d);z[c>>2]=e;return b.toWireType(d,a)},za:function(a,b,c,d){a=V(a);c=Tb(b,c);for(var e=Array(b),f=0;f<b;++f){var l=c[f];e[f]=l.readValueFromPointer(d);
d+=l.argPackAdvance}a=a.apply(void 0,e);return S(a)},Z:function(a,b,c,d){a=Wb[a];b=V(b);c=Vb(c);a(b,c,null,d)},ta:Nb,Aa:function(a,b){b=Tb(a,b);for(var c=b[0],d=c.name+"_$"+b.slice(1).map(function(n){return n.name}).join("_")+"$",e=["retType"],f=[c],l="",k=0;k<a-1;++k)l+=(0!==k?", ":"")+"arg"+k,e.push("argType"+k),f.push(b[1+k]);d="return function "+$a("methodCaller_"+d)+"(handle, name, destructors, args) {\n";var m=0;for(k=0;k<a-1;++k)d+="    var arg"+k+" = argType"+k+".readValueFromPointer(args"+
(m?"+"+m:"")+");\n",m+=b[k+1].argPackAdvance;d+="    var rv = handle[name]("+l+");\n";for(k=0;k<a-1;++k)b[k+1].deleteObject&&(d+="    argType"+k+".deleteObject(arg"+k+");\n");c.Yb||(d+="    return retType.toWireType(destructors, rv);\n");e.push(d+"};\n");a=Lb(e).apply(null,f);return Xb(a)},na:function(a,b){a=V(a);b=V(b);return S(a[b])},X:function(a){4<a&&(U[a].Ib+=1)},aa:function(){return S([])},M:function(a){return S(Vb(a))},Y:function(){return S({})},ka:function(a){Kb(U[a].value);Nb(a)},Ba:function(a,
b,c){a=V(a);b=V(b);c=V(c);a[b]=c},fa:function(a,b){a=Sb(a,"_emval_take_value");a=a.readValueFromPointer(b);return S(a)},V:function(){la()},xa:function(a,b){if(0===a)a=Date.now();else if(1===a||4===a)a=Yb();else return z[mc()>>2]=28,-1;z[b>>2]=a/1E3|0;z[b+4>>2]=a%1E3*1E6|0;return 0},la:function(a,b,c){y.copyWithin(a,b,b+c)},K:function(a){var b=y.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,
d)-Ba.byteLength+65535>>>16);Ea();var e=1;break a}catch(f){}e=void 0}if(e)return!0}return!1},qa:function(a,b){var c=0;$b().forEach(function(d,e){var f=b+c;e=z[a+4*e>>2]=f;for(f=0;f<d.length;++f)A[e++>>0]=d.charCodeAt(f);A[e>>0]=0;c+=d.length+1});return 0},ra:function(a,b){var c=$b();z[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});z[b>>2]=d;return 0},sa:function(a,b,c,d){for(var e=0,f=0;f<c;f++){for(var l=z[b+8*f>>2],k=z[b+(8*f+4)>>2],m=0;m<k;m++){var n=y[l+m],q=bc[a];0===n||10===n?
((1===a?fa:ha)(pa(q,0)),q.length=0):q.push(n)}e+=k}z[d>>2]=e;return 0},a:function(){return x},x:nc,I:oc,H:pc,u:qc,e:rc,c:sc,m:tc,n:uc,G:vc,A:wc,O:xc,F:yc,ca:zc,ba:Ac,_:Bc,da:Cc,d:Dc,h:Ec,ha:Fc,ia:Gc,j:Hc,ga:Ic,f:Jc,l:Kc,t:Lc,D:Mc,w:Nc,C:Oc,E:Pc,$:Qc,y:function(a){return a},J:function(a){x=a},pa:function(a,b,c,d){return hc(a,b,c,d)}};
(function(){function a(e){g.asm=e.exports;ma=g.asm.Ca;Ea();E=g.asm.Oa;Ga.unshift(g.asm.Da);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ja&&(clearInterval(Ja),Ja=null),Ka&&(e=Ka,Ka=null,e()))}function b(e){a(e.instance)}function c(e){return Oa().then(function(f){return WebAssembly.instantiate(f,d)}).then(e,function(f){ha("failed to asynchronously prepare wasm: "+f);la(f)})}var d={a:Rc};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return ha("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return ia||"function"!==typeof WebAssembly.instantiateStreaming||La()||"function"!==typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){ha("wasm streaming compile failed: "+f);ha("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ca);return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Da).apply(null,arguments)};var Ra=g._malloc=function(){return(Ra=g._malloc=g.asm.Ea).apply(null,arguments)},K=g._free=function(){return(K=g._free=g.asm.Fa).apply(null,arguments)},mc=g.___errno_location=function(){return(mc=g.___errno_location=g.asm.Ga).apply(null,arguments)},Hb=g.___getTypeName=function(){return(Hb=g.___getTypeName=g.asm.Ha).apply(null,arguments)};
g.___embind_register_native_and_builtin_types=function(){return(g.___embind_register_native_and_builtin_types=g.asm.Ia).apply(null,arguments)};
var X=g.stackSave=function(){return(X=g.stackSave=g.asm.Ja).apply(null,arguments)},Y=g.stackRestore=function(){return(Y=g.stackRestore=g.asm.Ka).apply(null,arguments)},W=g._setThrew=function(){return(W=g._setThrew=g.asm.La).apply(null,arguments)},lc=g.___cxa_can_catch=function(){return(lc=g.___cxa_can_catch=g.asm.Ma).apply(null,arguments)},Qa=g.___cxa_is_pointer_type=function(){return(Qa=g.___cxa_is_pointer_type=g.asm.Na).apply(null,arguments)},Sc=g.dynCall_ji=function(){return(Sc=g.dynCall_ji=g.asm.Pa).apply(null,
arguments)},Tc=g.dynCall_j=function(){return(Tc=g.dynCall_j=g.asm.Qa).apply(null,arguments)},Uc=g.dynCall_ijj=function(){return(Uc=g.dynCall_ijj=g.asm.Ra).apply(null,arguments)},Vc=g.dynCall_ijjiii=function(){return(Vc=g.dynCall_ijjiii=g.asm.Sa).apply(null,arguments)},Wc=g.dynCall_vijj=function(){return(Wc=g.dynCall_vijj=g.asm.Ta).apply(null,arguments)};g.dynCall_jiji=function(){return(g.dynCall_jiji=g.asm.Ua).apply(null,arguments)};
g.dynCall_viijii=function(){return(g.dynCall_viijii=g.asm.Va).apply(null,arguments)};g.dynCall_iiiiij=function(){return(g.dynCall_iiiiij=g.asm.Wa).apply(null,arguments)};g.dynCall_iiiiijj=function(){return(g.dynCall_iiiiijj=g.asm.Xa).apply(null,arguments)};g.dynCall_iiiiiijj=function(){return(g.dynCall_iiiiiijj=g.asm.Ya).apply(null,arguments)};function rc(a,b){var c=X();try{return E.get(a)(b)}catch(d){Y(c);if(d!==d+0&&"longjmp"!==d)throw d;W(1,0)}}
function Jc(a,b,c,d){var e=X();try{E.get(a)(b,c,d)}catch(f){Y(e);if(f!==f+0&&"longjmp"!==f)throw f;W(1,0)}}function Ec(a,b){var c=X();try{E.get(a)(b)}catch(d){Y(c);if(d!==d+0&&"longjmp"!==d)throw d;W(1,0)}}function sc(a,b,c){var d=X();try{return E.get(a)(b,c)}catch(e){Y(d);if(e!==e+0&&"longjmp"!==e)throw e;W(1,0)}}function Hc(a,b,c){var d=X();try{E.get(a)(b,c)}catch(e){Y(d);if(e!==e+0&&"longjmp"!==e)throw e;W(1,0)}}
function oc(a,b,c,d){var e=X();try{return E.get(a)(b,c,d)}catch(f){Y(e);if(f!==f+0&&"longjmp"!==f)throw f;W(1,0)}}function Dc(a){var b=X();try{E.get(a)()}catch(c){Y(b);if(c!==c+0&&"longjmp"!==c)throw c;W(1,0)}}function Kc(a,b,c,d,e){var f=X();try{E.get(a)(b,c,d,e)}catch(l){Y(f);if(l!==l+0&&"longjmp"!==l)throw l;W(1,0)}}function pc(a){var b=X();try{return E.get(a)()}catch(c){Y(b);if(c!==c+0&&"longjmp"!==c)throw c;W(1,0)}}
function Lc(a,b,c,d,e,f){var l=X();try{E.get(a)(b,c,d,e,f)}catch(k){Y(l);if(k!==k+0&&"longjmp"!==k)throw k;W(1,0)}}function tc(a,b,c,d){var e=X();try{return E.get(a)(b,c,d)}catch(f){Y(e);if(f!==f+0&&"longjmp"!==f)throw f;W(1,0)}}function vc(a,b,c,d,e,f){var l=X();try{return E.get(a)(b,c,d,e,f)}catch(k){Y(l);if(k!==k+0&&"longjmp"!==k)throw k;W(1,0)}}function uc(a,b,c,d,e){var f=X();try{return E.get(a)(b,c,d,e)}catch(l){Y(f);if(l!==l+0&&"longjmp"!==l)throw l;W(1,0)}}
function wc(a,b,c,d,e,f,l){var k=X();try{return E.get(a)(b,c,d,e,f,l)}catch(m){Y(k);if(m!==m+0&&"longjmp"!==m)throw m;W(1,0)}}function qc(a,b,c,d,e){var f=X();try{return E.get(a)(b,c,d,e)}catch(l){Y(f);if(l!==l+0&&"longjmp"!==l)throw l;W(1,0)}}function Mc(a,b,c,d,e,f,l){var k=X();try{E.get(a)(b,c,d,e,f,l)}catch(m){Y(k);if(m!==m+0&&"longjmp"!==m)throw m;W(1,0)}}function nc(a,b){var c=X();try{return E.get(a)(b)}catch(d){Y(c);if(d!==d+0&&"longjmp"!==d)throw d;W(1,0)}}
function Gc(a,b,c){var d=X();try{E.get(a)(b,c)}catch(e){Y(d);if(e!==e+0&&"longjmp"!==e)throw e;W(1,0)}}function Fc(a,b,c){var d=X();try{E.get(a)(b,c)}catch(e){Y(d);if(e!==e+0&&"longjmp"!==e)throw e;W(1,0)}}function Ic(a,b,c,d){var e=X();try{E.get(a)(b,c,d)}catch(f){Y(e);if(f!==f+0&&"longjmp"!==f)throw f;W(1,0)}}function xc(a,b,c,d,e,f,l,k){var m=X();try{return E.get(a)(b,c,d,e,f,l,k)}catch(n){Y(m);if(n!==n+0&&"longjmp"!==n)throw n;W(1,0)}}
function Nc(a,b,c,d,e,f,l,k){var m=X();try{E.get(a)(b,c,d,e,f,l,k)}catch(n){Y(m);if(n!==n+0&&"longjmp"!==n)throw n;W(1,0)}}function yc(a,b,c,d,e,f,l,k,m,n,q,B){var v=X();try{return E.get(a)(b,c,d,e,f,l,k,m,n,q,B)}catch(h){Y(v);if(h!==h+0&&"longjmp"!==h)throw h;W(1,0)}}function Oc(a,b,c,d,e,f,l,k,m,n,q){var B=X();try{E.get(a)(b,c,d,e,f,l,k,m,n,q)}catch(v){Y(B);if(v!==v+0&&"longjmp"!==v)throw v;W(1,0)}}
function Pc(a,b,c,d,e,f,l,k,m,n,q,B,v,h,p,u){var r=X();try{E.get(a)(b,c,d,e,f,l,k,m,n,q,B,v,h,p,u)}catch(D){Y(r);if(D!==D+0&&"longjmp"!==D)throw D;W(1,0)}}function Cc(a,b){var c=X();try{return Sc(a,b)}catch(d){Y(c);if(d!==d+0&&"longjmp"!==d)throw d;W(1,0)}}function zc(a,b,c,d,e){var f=X();try{return Uc(a,b,c,d,e)}catch(l){Y(f);if(l!==l+0&&"longjmp"!==l)throw l;W(1,0)}}function Ac(a,b,c,d,e,f,l,k){var m=X();try{return Vc(a,b,c,d,e,f,l,k)}catch(n){Y(m);if(n!==n+0&&"longjmp"!==n)throw n;W(1,0)}}
function Qc(a,b,c,d,e,f){var l=X();try{Wc(a,b,c,d,e,f)}catch(k){Y(l);if(k!==k+0&&"longjmp"!==k)throw k;W(1,0)}}function Bc(a){var b=X();try{return Tc(a)}catch(c){Y(b);if(c!==c+0&&"longjmp"!==c)throw c;W(1,0)}}var Xc;Ka=function Yc(){Xc||Zc();Xc||(Ka=Yc)};
function Zc(){function a(){if(!Xc&&(Xc=!0,g.calledRun=!0,!na)){Pa(Ga);ba(g);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var b=g.postRun.shift();Ha.unshift(b)}Pa(Ha)}}if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ia();Pa(Fa);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);a()},1)):a())}}g.run=Zc;
if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();Zc();


  return Tiro.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Tiro;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Tiro; });
else if (typeof exports === 'object')
  exports["Tiro"] = Tiro;
