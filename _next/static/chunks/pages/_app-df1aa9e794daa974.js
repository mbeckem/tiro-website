(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7866:function(t,r,n){"use strict";n.d(r,{v:function(){return e}});var e={CENTER:"center",LEFT:"left",RIGHT:"right"}},3149:function(t,r,n){"use strict";n.d(r,{iNe:function(){return m},Csj:function(){return j},q01:function(){return Y},ZoI:function(){return q},tsZ:function(){return K},ILo:function(){return W},EpL:function(){return Z},RfN:function(){return H},cO4:function(){return D},GjQ:function(){return z},Pyr:function(){return B},rr$:function(){return T},ur0:function(){return S},jce:function(){return x},SDr:function(){return Q},ZOf:function(){return M},T5o:function(){return F},LIC:function(){return X},xrj:function(){return J},I3C:function(){return V},_qo:function(){return $},Wmm:function(){return dt},znr:function(){return L},GPh:function(){return tt},lnC:function(){return I},IYJ:function(){return G},brc:function(){return C},IRm:function(){return R},Auc:function(){return rt},hlT:function(){return ot},Kyb:function(){return nt},ktp:function(){return et},QhV:function(){return U},Qyt:function(){return k},HC1:function(){return O},aSe:function(){return it},KrR:function(){return ut},cDM:function(){return ft},Lf7:function(){return st},qEr:function(){return at},Mfv:function(){return ct},G7x:function(){return gt},bIF:function(){return ht},SHB:function(){return lt},YSh:function(){return pt},aXM:function(){return yt},vMw:function(){return _},_7B:function(){return P},yZ9:function(){return N},Fcr:function(){return vt},sfD:function(){return bt},NL3:function(){return mt}});var e=n(7866),o=0,i=1,u=2,f=3,s=4,a=n(3450),c="bottom",h="left",l="right",p="top";var y,g,d,v,w=n(3542),b="bp3";"undefined"!==typeof w&&(b=null!==(v=null!==(g=null===(y=w.env)||void 0===y?void 0:y.BLUEPRINT_NAMESPACE)&&void 0!==g?g:null===(d=w.env)||void 0===d?void 0:d.REACT_APP_BLUEPRINT_NAMESPACE)&&void 0!==v?v:b);var m=b+"-active",E=b+"-align-left",A=b+"-align-right",B=b+"-dark",T=b+"-disabled",S=b+"-fill",x=b+"-fixed-top",L=b+"-interactive",I=b+"-large",C=b+"-loading",R=b+"-minimal",U=b+"-outlined",O=b+"-small",N=b+"-vertical",M=(Et(p),Et(c),Et(h),Et(l),wt(o),wt(i),wt(u),wt(f),wt(s),mt(a.S.PRIMARY),mt(a.S.SUCCESS),mt(a.S.WARNING),mt(a.S.DANGER),b+"-focus-disabled"),P=b+"-ui-text",k=b+"-running-text",_=b+"-text-large",j=b+"-blockquote",D=b+"-code",z=b+"-code-block",F=b+"-heading",G=b+"-list",Y=b+"-button",q=Y+"-group",K=Y+"-spinner",W=Y+"-text",Z=b+"-callout",H=Z+"-icon",Q=b+"-flex-expander",X=b+"-html-table",J=X+"-bordered",V=X+"-condensed",$=X+"-striped",tt=b+"-label",rt=b+"-navbar",nt=rt+"-group",et=rt+"-heading",ot=rt+"-divider",it=b+"-spinner",ut=it+"-animation",ft=it+"-head",st=b+"-no-spin",at=it+"-track",ct=b+"-tab",ht=ct+"-indicator",lt=ht+"-wrapper",pt=ct+"-list",yt=ct+"-panel",gt=ct+"s",dt=b+"-icon";function vt(t){switch(t){case e.v.LEFT:return E;case e.v.RIGHT:return A;default:return}}function wt(t){if(void 0!==t)return b+"-elevation-"+t}function bt(t){if(null!=t)return 0===t.indexOf(b+"-icon-")?t:b+"-icon-"+t}function mt(t){if(null!=t&&t!==a.S.NONE)return b+"-intent-"+t.toLowerCase()}function Et(t){if(void 0!==t)return b+"-position-"+t}},3450:function(t,r,n){"use strict";n.d(r,{S:function(){return e}});var e={NONE:"none",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning",DANGER:"danger"}},314:function(t,r,n){t.exports=n(6112)},3542:function(t,r,n){"use strict";var e,o;t.exports=(null===(e=n.g.process)||void 0===e?void 0:e.env)&&"object"===typeof(null===(o=n.g.process)||void 0===o?void 0:o.env)?n.g.process:n(2351)},3394:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9693)}])},144:function(t,r,n){"use strict";n.d(r,{qw:function(){return i},QK:function(){return u},TP:function(){return f}});var e=n(1299),o=n(9644).Buffer,i=1;function u(t){var r,n=JSON.stringify({v:i,s:t.source});return r=n,(0,e.C5)()?btoa(r):o.from(r,"binary").toString("base64")}function f(t){if(t.startsWith("#")&&(t=t.substring(1)),""!==t){var r,n=(r=t,(0,e.C5)()?atob(r):o.from(r,"base64").toString("binary")),u=JSON.parse(n);if("object"!==typeof u)throw new Error("expected an object");var f=u.v;if(f!==i)throw new Error("state version version mismatch (expected ".concat(i,", got ").concat(f,")"));var s,a=u.s;if("string"!==typeof a)throw new Error("source should be a string (got ".concat("undefined"===typeof a?"undefined":(s=a)&&"undefined"!==typeof Symbol&&s.constructor===Symbol?"symbol":typeof s,")"));return{version:f,source:a}}}},9693:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return l}});var e=n(2322),o=n(3149),i=function(){function t(t,r){var n=this;this.container=t,this.className=r,this.isRunning=!1,this.handleKeyDown=function(t){9===t.which&&(n.reset(),n.container.addEventListener("mousedown",n.handleMouseDown))},this.handleMouseDown=function(){n.reset(),n.container.classList.add(n.className),n.container.addEventListener("keydown",n.handleKeyDown)}}return t.prototype.isActive=function(){return this.isRunning},t.prototype.start=function(){this.container.addEventListener("mousedown",this.handleMouseDown),this.isRunning=!0},t.prototype.stop=function(){this.reset(),this.isRunning=!1},t.prototype.reset=function(){this.container.classList.remove(this.className),this.container.removeEventListener("keydown",this.handleKeyDown),this.container.removeEventListener("mousedown",this.handleMouseDown)},t}(),u="undefined"!==typeof document?new i(document.documentElement,o.ZOf):{isActive:function(){return!0},start:function(){return!0},stop:function(){return!0}},f=function(){return u.start()},s=n(7729),a=(n(2581),n(9761));function c(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function h(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),e.forEach((function(r){c(t,r,n[r])}))}return t}f();var l=function(t){var r=t.Component,n=t.pageProps;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.default,{children:(0,e.jsx)("link",{rel:"shortcut icon",href:(0,a.wE)("favicon.ico")})}),(0,e.jsx)(r,h({},n))," "]})}},9761:function(t,r,n){"use strict";n.d(r,{Kz:function(){return i},vH:function(){return u},rx:function(){return f},oN:function(){return s},UD:function(){return a},Uo:function(){return h},f_:function(){return l},wE:function(){return p}});var e=n(144),o=(0,n(314).default)().publicRuntimeConfig.basePath;function i(){return"/"}function u(t){var r="";return t&&(r="#"+(0,e.QK)({source:t})),"/sandbox".concat(r)}function f(){return"/docs"}function s(t){return"".concat("/docs/api","/").concat(t)}function a(){return s("index_files")}function c(t){return"/docs/".concat(t)}var h={reference:function(){return c("reference")},standardLibrary:function(){return c("stdlib")}},l={gettingStarted:function(){return c("libtiro/getting-started")},embeddersGuide:function(){return c("libtiro/embedders-guide")}};function p(t){var r=o;return!r||r.endsWith("/")||t.startsWith("/")||(r+="/"),r+=t}},1299:function(t,r,n){"use strict";function e(){return!0}function o(){return!1}n.d(r,{C5:function(){return e},sk:function(){return o}})},9644:function(t){!function(){var r={991:function(t,r){"use strict";r.byteLength=function(t){var r=s(t),n=r[0],e=r[1];return 3*(n+e)/4-e},r.toByteArray=function(t){var r,n,i=s(t),u=i[0],f=i[1],a=new o(function(t,r,n){return 3*(r+n)/4-n}(0,u,f)),c=0,h=f>0?u-4:u;for(n=0;n<h;n+=4)r=e[t.charCodeAt(n)]<<18|e[t.charCodeAt(n+1)]<<12|e[t.charCodeAt(n+2)]<<6|e[t.charCodeAt(n+3)],a[c++]=r>>16&255,a[c++]=r>>8&255,a[c++]=255&r;2===f&&(r=e[t.charCodeAt(n)]<<2|e[t.charCodeAt(n+1)]>>4,a[c++]=255&r);1===f&&(r=e[t.charCodeAt(n)]<<10|e[t.charCodeAt(n+1)]<<4|e[t.charCodeAt(n+2)]>>2,a[c++]=r>>8&255,a[c++]=255&r);return a},r.fromByteArray=function(t){for(var r,e=t.length,o=e%3,i=[],u=16383,f=0,s=e-o;f<s;f+=u)i.push(c(t,f,f+u>s?s:f+u));1===o?(r=t[e-1],i.push(n[r>>2]+n[r<<4&63]+"==")):2===o&&(r=(t[e-2]<<8)+t[e-1],i.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return i.join("")};for(var n=[],e=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,f=i.length;u<f;++u)n[u]=i[u],e[i.charCodeAt(u)]=u;function s(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=r),[n,n===r?0:4-n%4]}function a(t){return n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t]}function c(t,r,n){for(var e,o=[],i=r;i<n;i+=3)e=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),o.push(a(e));return o.join("")}e["-".charCodeAt(0)]=62,e["_".charCodeAt(0)]=63},293:function(t,r,n){"use strict";var e=n(991),o=n(759),i="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=s,r.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},r.INSPECT_MAX_BYTES=50;var u=2147483647;function f(t){if(t>u)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,s.prototype),r}function s(t,r,n){if("number"===typeof t){if("string"===typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return a(t,r,n)}function a(t,r,n){if("string"===typeof t)return function(t,r){"string"===typeof r&&""!==r||(r="utf8");if(!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var n=0|g(t,r),e=f(n),o=e.write(t,r);o!==n&&(e=e.slice(0,o));return e}(t,r);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(G(t,ArrayBuffer)||t&&G(t.buffer,ArrayBuffer))return p(t,r,n);if("undefined"!==typeof SharedArrayBuffer&&(G(t,SharedArrayBuffer)||t&&G(t.buffer,SharedArrayBuffer)))return p(t,r,n);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var e=t.valueOf&&t.valueOf();if(null!=e&&e!==t)return s.from(e,r,n);var o=function(t){if(s.isBuffer(t)){var r=0|y(t.length),n=f(r);return 0===n.length||t.copy(n,0,0,r),n}if(void 0!==t.length)return"number"!==typeof t.length||Y(t.length)?f(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(o)return o;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return s.from(t[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return c(t),f(t<0?0:0|y(t))}function l(t){for(var r=t.length<0?0:0|y(t.length),n=f(r),e=0;e<r;e+=1)n[e]=255&t[e];return n}function p(t,r,n){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(n||0))throw new RangeError('"length" is outside of buffer bounds');var e;return e=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),Object.setPrototypeOf(e,s.prototype),e}function y(t){if(t>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return 0|t}function g(t,r){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||G(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,e=arguments.length>2&&!0===arguments[2];if(!e&&0===n)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return D(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return z(t).length;default:if(o)return e?-1:D(t).length;r=(""+r).toLowerCase(),o=!0}}function d(t,r,n){var e=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,r,n);case"utf8":case"utf-8":return L(this,r,n);case"ascii":return C(this,r,n);case"latin1":case"binary":return R(this,r,n);case"base64":return x(this,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,r,n);default:if(e)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),e=!0}}function v(t,r,n){var e=t[r];t[r]=t[n],t[n]=e}function w(t,r,n,e,o){if(0===t.length)return-1;if("string"===typeof n?(e=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Y(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"===typeof r&&(r=s.from(r,e)),s.isBuffer(r))return 0===r.length?-1:b(t,r,n,e,o);if("number"===typeof r)return r&=255,"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,n):Uint8Array.prototype.lastIndexOf.call(t,r,n):b(t,[r],n,e,o);throw new TypeError("val must be string, number or Buffer")}function b(t,r,n,e,o){var i,u=1,f=t.length,s=r.length;if(void 0!==e&&("ucs2"===(e=String(e).toLowerCase())||"ucs-2"===e||"utf16le"===e||"utf-16le"===e)){if(t.length<2||r.length<2)return-1;u=2,f/=2,s/=2,n/=2}function a(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(o){var c=-1;for(i=n;i<f;i++)if(a(t,i)===a(r,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===s)return c*u}else-1!==c&&(i-=i-c),c=-1}else for(n+s>f&&(n=f-s),i=n;i>=0;i--){for(var h=!0,l=0;l<s;l++)if(a(t,i+l)!==a(r,l)){h=!1;break}if(h)return i}return-1}function m(t,r,n,e){n=Number(n)||0;var o=t.length-n;e?(e=Number(e))>o&&(e=o):e=o;var i=r.length;e>i/2&&(e=i/2);for(var u=0;u<e;++u){var f=parseInt(r.substr(2*u,2),16);if(Y(f))return u;t[n+u]=f}return u}function E(t,r,n,e){return F(D(r,t.length-n),t,n,e)}function A(t,r,n,e){return F(function(t){for(var r=[],n=0;n<t.length;++n)r.push(255&t.charCodeAt(n));return r}(r),t,n,e)}function B(t,r,n,e){return A(t,r,n,e)}function T(t,r,n,e){return F(z(r),t,n,e)}function S(t,r,n,e){return F(function(t,r){for(var n,e,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)e=(n=t.charCodeAt(u))>>8,o=n%256,i.push(o),i.push(e);return i}(r,t.length-n),t,n,e)}function x(t,r,n){return 0===r&&n===t.length?e.fromByteArray(t):e.fromByteArray(t.slice(r,n))}function L(t,r,n){n=Math.min(t.length,n);for(var e=[],o=r;o<n;){var i,u,f,s,a=t[o],c=null,h=a>239?4:a>223?3:a>191?2:1;if(o+h<=n)switch(h){case 1:a<128&&(c=a);break;case 2:128===(192&(i=t[o+1]))&&(s=(31&a)<<6|63&i)>127&&(c=s);break;case 3:i=t[o+1],u=t[o+2],128===(192&i)&&128===(192&u)&&(s=(15&a)<<12|(63&i)<<6|63&u)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:i=t[o+1],u=t[o+2],f=t[o+3],128===(192&i)&&128===(192&u)&&128===(192&f)&&(s=(15&a)<<18|(63&i)<<12|(63&u)<<6|63&f)>65535&&s<1114112&&(c=s)}null===c?(c=65533,h=1):c>65535&&(c-=65536,e.push(c>>>10&1023|55296),c=56320|1023&c),e.push(c),o+=h}return I(e)}r.kMaxLength=u,s.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(t,r,n){return a(t,r,n)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(t,r,n){return function(t,r,n){return c(t),t<=0?f(t):void 0!==r?"string"===typeof n?f(t).fill(r,n):f(t).fill(r):f(t)}(t,r,n)},s.allocUnsafe=function(t){return h(t)},s.allocUnsafeSlow=function(t){return h(t)},s.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==s.prototype},s.compare=function(t,r){if(G(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),G(r,Uint8Array)&&(r=s.from(r,r.offset,r.byteLength)),!s.isBuffer(t)||!s.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var n=t.length,e=r.length,o=0,i=Math.min(n,e);o<i;++o)if(t[o]!==r[o]){n=t[o],e=r[o];break}return n<e?-1:e<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===r)for(r=0,n=0;n<t.length;++n)r+=t[n].length;var e=s.allocUnsafe(r),o=0;for(n=0;n<t.length;++n){var i=t[n];if(G(i,Uint8Array)&&(i=s.from(i)),!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(e,o),o+=i.length}return e},s.byteLength=g,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)v(this,r,r+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)v(this,r,r+3),v(this,r+1,r+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)v(this,r,r+7),v(this,r+1,r+6),v(this,r+2,r+5),v(this,r+3,r+4);return this},s.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?L(this,0,t):d.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=r.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},i&&(s.prototype[i]=s.prototype.inspect),s.prototype.compare=function(t,r,n,e,o){if(G(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===n&&(n=t?t.length:0),void 0===e&&(e=0),void 0===o&&(o=this.length),r<0||n>t.length||e<0||o>this.length)throw new RangeError("out of range index");if(e>=o&&r>=n)return 0;if(e>=o)return-1;if(r>=n)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(e>>>=0),u=(n>>>=0)-(r>>>=0),f=Math.min(i,u),a=this.slice(e,o),c=t.slice(r,n),h=0;h<f;++h)if(a[h]!==c[h]){i=a[h],u=c[h];break}return i<u?-1:u<i?1:0},s.prototype.includes=function(t,r,n){return-1!==this.indexOf(t,r,n)},s.prototype.indexOf=function(t,r,n){return w(this,t,r,n,!0)},s.prototype.lastIndexOf=function(t,r,n){return w(this,t,r,n,!1)},s.prototype.write=function(t,r,n,e){if(void 0===r)e="utf8",n=this.length,r=0;else if(void 0===n&&"string"===typeof r)e=r,n=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(n)?(n>>>=0,void 0===e&&(e="utf8")):(e=n,n=void 0)}var o=this.length-r;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var i=!1;;)switch(e){case"hex":return m(this,t,r,n);case"utf8":case"utf-8":return E(this,t,r,n);case"ascii":return A(this,t,r,n);case"latin1":case"binary":return B(this,t,r,n);case"base64":return T(this,t,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,r,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);for(var n="",e=0;e<r;)n+=String.fromCharCode.apply(String,t.slice(e,e+=4096));return n}function C(t,r,n){var e="";n=Math.min(t.length,n);for(var o=r;o<n;++o)e+=String.fromCharCode(127&t[o]);return e}function R(t,r,n){var e="";n=Math.min(t.length,n);for(var o=r;o<n;++o)e+=String.fromCharCode(t[o]);return e}function U(t,r,n){var e=t.length;(!r||r<0)&&(r=0),(!n||n<0||n>e)&&(n=e);for(var o="",i=r;i<n;++i)o+=q[t[i]];return o}function O(t,r,n){for(var e=t.slice(r,n),o="",i=0;i<e.length;i+=2)o+=String.fromCharCode(e[i]+256*e[i+1]);return o}function N(t,r,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>n)throw new RangeError("Trying to access beyond buffer length")}function M(t,r,n,e,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(n+e>t.length)throw new RangeError("Index out of range")}function P(t,r,n,e,o,i){if(n+e>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function k(t,r,n,e,i){return r=+r,n>>>=0,i||P(t,0,n,4),o.write(t,r,n,e,23,4),n+4}function _(t,r,n,e,i){return r=+r,n>>>=0,i||P(t,0,n,8),o.write(t,r,n,e,52,8),n+8}s.prototype.slice=function(t,r){var n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t);var e=this.subarray(t,r);return Object.setPrototypeOf(e,s.prototype),e},s.prototype.readUIntLE=function(t,r,n){t>>>=0,r>>>=0,n||N(t,r,this.length);for(var e=this[t],o=1,i=0;++i<r&&(o*=256);)e+=this[t+i]*o;return e},s.prototype.readUIntBE=function(t,r,n){t>>>=0,r>>>=0,n||N(t,r,this.length);for(var e=this[t+--r],o=1;r>0&&(o*=256);)e+=this[t+--r]*o;return e},s.prototype.readUInt8=function(t,r){return t>>>=0,r||N(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,r){return t>>>=0,r||N(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,r){return t>>>=0,r||N(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,r){return t>>>=0,r||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,r){return t>>>=0,r||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,r,n){t>>>=0,r>>>=0,n||N(t,r,this.length);for(var e=this[t],o=1,i=0;++i<r&&(o*=256);)e+=this[t+i]*o;return e>=(o*=128)&&(e-=Math.pow(2,8*r)),e},s.prototype.readIntBE=function(t,r,n){t>>>=0,r>>>=0,n||N(t,r,this.length);for(var e=r,o=1,i=this[t+--e];e>0&&(o*=256);)i+=this[t+--e]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},s.prototype.readInt8=function(t,r){return t>>>=0,r||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,r){t>>>=0,r||N(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,r){t>>>=0,r||N(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,r){return t>>>=0,r||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,r){return t>>>=0,r||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,r){return t>>>=0,r||N(t,4,this.length),o.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,r){return t>>>=0,r||N(t,4,this.length),o.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,r){return t>>>=0,r||N(t,8,this.length),o.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,r){return t>>>=0,r||N(t,8,this.length),o.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,r,n,e){(t=+t,r>>>=0,n>>>=0,e)||M(this,t,r,n,Math.pow(2,8*n)-1,0);var o=1,i=0;for(this[r]=255&t;++i<n&&(o*=256);)this[r+i]=t/o&255;return r+n},s.prototype.writeUIntBE=function(t,r,n,e){(t=+t,r>>>=0,n>>>=0,e)||M(this,t,r,n,Math.pow(2,8*n)-1,0);var o=n-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+n},s.prototype.writeUInt8=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,1,255,0),this[r]=255&t,r+1},s.prototype.writeUInt16LE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},s.prototype.writeUInt16BE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},s.prototype.writeUInt32LE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},s.prototype.writeUInt32BE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},s.prototype.writeIntLE=function(t,r,n,e){if(t=+t,r>>>=0,!e){var o=Math.pow(2,8*n-1);M(this,t,r,n,o-1,-o)}var i=0,u=1,f=0;for(this[r]=255&t;++i<n&&(u*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+n},s.prototype.writeIntBE=function(t,r,n,e){if(t=+t,r>>>=0,!e){var o=Math.pow(2,8*n-1);M(this,t,r,n,o-1,-o)}var i=n-1,u=1,f=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+n},s.prototype.writeInt8=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},s.prototype.writeInt16LE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},s.prototype.writeInt16BE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},s.prototype.writeInt32LE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},s.prototype.writeInt32BE=function(t,r,n){return t=+t,r>>>=0,n||M(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},s.prototype.writeFloatLE=function(t,r,n){return k(this,t,r,!0,n)},s.prototype.writeFloatBE=function(t,r,n){return k(this,t,r,!1,n)},s.prototype.writeDoubleLE=function(t,r,n){return _(this,t,r,!0,n)},s.prototype.writeDoubleBE=function(t,r,n){return _(this,t,r,!1,n)},s.prototype.copy=function(t,r,n,e){if(!s.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),e||0===e||(e=this.length),r>=t.length&&(r=t.length),r||(r=0),e>0&&e<n&&(e=n),e===n)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),t.length-r<e-n&&(e=t.length-r+n);var o=e-n;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,n,e);else if(this===t&&n<r&&r<e)for(var i=o-1;i>=0;--i)t[i+r]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,e),r);return o},s.prototype.fill=function(t,r,n,e){if("string"===typeof t){if("string"===typeof r?(e=r,r=0,n=this.length):"string"===typeof n&&(e=n,n=this.length),void 0!==e&&"string"!==typeof e)throw new TypeError("encoding must be a string");if("string"===typeof e&&!s.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(1===t.length){var o=t.charCodeAt(0);("utf8"===e&&o<128||"latin1"===e)&&(t=o)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;var i;if(r>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"===typeof t)for(i=r;i<n;++i)this[i]=t;else{var u=s.isBuffer(t)?t:s.from(t,e),f=u.length;if(0===f)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-r;++i)this[i+r]=u[i%f]}return this};var j=/[^+/0-9A-Za-z-_]/g;function D(t,r){var n;r=r||1/0;for(var e=t.length,o=null,i=[],u=0;u<e;++u){if((n=t.charCodeAt(u))>55295&&n<57344){if(!o){if(n>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===e){(r-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(r-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((r-=1)<0)break;i.push(n)}else if(n<2048){if((r-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((r-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function z(t){return e.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(j,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function F(t,r,n,e){for(var o=0;o<e&&!(o+n>=r.length||o>=t.length);++o)r[o+n]=t[o];return o}function G(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function Y(t){return t!==t}var q=function(){for(var t="0123456789abcdef",r=new Array(256),n=0;n<16;++n)for(var e=16*n,o=0;o<16;++o)r[e+o]=t[n]+t[o];return r}()},759:function(t,r){r.read=function(t,r,n,e,o){var i,u,f=8*o-e-1,s=(1<<f)-1,a=s>>1,c=-7,h=n?o-1:0,l=n?-1:1,p=t[r+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=f;c>0;i=256*i+t[r+h],h+=l,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=e;c>0;u=256*u+t[r+h],h+=l,c-=8);if(0===i)i=1-a;else{if(i===s)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,e),i-=a}return(p?-1:1)*u*Math.pow(2,i-e)},r.write=function(t,r,n,e,o,i){var u,f,s,a=8*i-o-1,c=(1<<a)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=e?0:i-1,y=e?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=c):(u=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-u))<1&&(u--,s*=2),(r+=u+h>=1?l/s:l*Math.pow(2,1-h))*s>=2&&(u++,s/=2),u+h>=c?(f=0,u=c):u+h>=1?(f=(r*s-1)*Math.pow(2,o),u+=h):(f=r*Math.pow(2,h-1)*Math.pow(2,o),u=0));o>=8;t[n+p]=255&f,p+=y,f/=256,o-=8);for(u=u<<o|f,a+=o;a>0;t[n+p]=255&u,p+=y,u/=256,a-=8);t[n+p-y]|=128*g}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}},u=!0;try{r[t](i,i.exports,e),u=!1}finally{u&&delete n[t]}return i.exports}e.ab="//";var o=e(293);t.exports=o}()},2581:function(){},2351:function(t){!function(){var r={162:function(t){var r,n,e=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var f,s=[],a=!1,c=-1;function h(){a&&f&&(a=!1,f.length?s=f.concat(s):c=-1,s.length&&l())}function l(){if(!a){var t=u(h);a=!0;for(var r=s.length;r;){for(f=s,s=[];++c<r;)f&&f[c].run();c=-1,r=s.length}f=null,a=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(r){return n.call(this,t)}}}(t)}}function p(t,r){this.fun=t,this.array=r}function y(){}e.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];s.push(new p(t,r)),1!==s.length||a||u(l)},p.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=y,e.addListener=y,e.once=y,e.off=y,e.removeListener=y,e.removeAllListeners=y,e.emit=y,e.prependListener=y,e.prependOnceListener=y,e.listeners=function(t){return[]},e.binding=function(t){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(t){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}},u=!0;try{r[t](i,i.exports,e),u=!1}finally{u&&delete n[t]}return i.exports}e.ab="//";var o=e(162);t.exports=o}()},7729:function(t,r,n){t.exports=n(5913)}},function(t){var r=function(r){return t(t.s=r)};t.O(0,[774,179],(function(){return r(3394),r(3642)}));var n=t.O();_N_E=n}]);