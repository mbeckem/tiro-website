_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/QYh":function(e,t,r){"use strict";var n=r("O5Wi"),o=r("zQIG"),i=r("8mBC");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var l,f=(l=r("ERkP"))&&l.__esModule?l:{default:l},d=r("D3Vl"),p=r("4smK");var b=[],h=[],y=!1;function v(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function m(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=v(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function O(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:O,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var i=r.webpack();h.push((function(e){var t,r=c(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(u){r.e(u)}finally{r.f()}}))}var u=function(e,t){o();var i=f.default.useContext(p.LoadableContext),u=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),f.default.useMemo((function(){return u.loading||u.error?f.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:n.retry}):u.loaded?r.render(u.loaded,e):null}),[e,u])};return u.preload=function(){return o()},u.displayName="LoadableComponent",f.default.forwardRef(u)}var g=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return w(v,e)}function j(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return j(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(m,e)},_.preloadAll=function(){return new Promise((function(e,t){j(b).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};j(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var P=_;t.default=P},"0lfv":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value";if(null===e||void 0===e)throw new Error("Expected ".concat(t," to be defined."))}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value";return n(e,t),e}function i(){return!1}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i}))},"4smK":function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("ERkP"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},AU4o:function(e,t,r){"use strict";var n=r("O5Wi");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var r=u.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));if(n=i(i({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=u.default.Map;var o={},a=e.modules();Object.keys(a).forEach((function(e){var t=a[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,c(r,n);delete n.ssr}return r(n)};a(r("ERkP"));var u=a(r("/QYh"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},JbA0:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sandbox",function(){return r("pD07")}])},"O+IG":function(e,t,r){"use strict";function n(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(s){return void r(s)}a.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var u=e.apply(t,r);function a(e){n(u,o,i,a,c,"next",e)}function c(e){n(u,o,i,a,c,"throw",e)}a(void 0)}))}}r.d(t,"a",(function(){return o}))},hNT8:function(e,t,r){e.exports=r("AU4o")},pD07:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var n=r("jg1C"),o=r("LHL8"),i=r("IebI"),u=r.n(i),a=r("O+IG"),c=r("ERkP"),s=r("hNT8"),l=r.n(s),f=r("E+iK"),d=r("soUV"),p=r("1Yd/"),b=r("0lfv");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=l()(Object(a.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(17).then(r.bind(null,"U2xs"));case 2:return e.abrupt("return",e.sent.Sandbox);case 3:case"end":return e.stop()}}),e)}))),{ssr:!1,loadableGenerated:{webpack:function(){return["U2xs"]},modules:["sandbox.tsx -> @components/sandbox"]}}),m='\nimport std;\n\nexport func main() {\n    const object = "World";\n    std.print("Hello ${object}!");\n}\n'.trimStart();function O(){var e=Object(c.useState)(!1),t=e[0],r=e[1],o=Object(c.useState)(!1),i=o[0],u=o[1];Object(c.useEffect)((function(){setTimeout((function(){return u(!0)}),200)}),[]);var a=Object(c.useMemo)(w,void 0),s=Object(c.useState)(null!==a&&void 0!==a?a:{version:1,source:m}),l=s[0],b=s[1],h=Object(c.useCallback)((function(e){b((function(t){return y(y({},t),{},{source:e})}))}),[]);Object(c.useEffect)((function(){!function(e){var t=JSON.stringify({v:e.version,s:e.source}),r=btoa(t),n=new URL(window.location.href);n.hash="#".concat(r),window.history.replaceState(null,"",n.href)}(l)}),[l]);var O=t&&i,g=Object(n.jsx)("div",{style:{width:"100%",height:"100%",visibility:O?"visible":"hidden"},children:Object(n.jsx)(v,{initialSource:l.source,onReady:function(){return r(!0)},onSourceChanged:h})}),_=O?null:Object(n.jsx)("div",{style:{position:"absolute",marginTop:"50px",textAlign:"center",width:"100%"},className:f.a.TEXT_LARGE,children:"Loading Sandbox..."});return Object(n.jsxs)(d.a,{fullHeight:!0,children:[Object(n.jsx)(p.a,{title:"Sandbox"}),_,g]})}function w(){if(!Object(b.b)()){var e=new URL(window.location.href).hash;if(""!==e&&"#"!==e)try{var t=atob(e.substring(1)),r=JSON.parse(t);if("object"!==typeof r)throw new Error("expected an object");var n=r.v;if(1!==n)throw new Error("state version version mismatch (expected ".concat(1,", got ").concat(n,")"));var o=r.s;if("string"!==typeof o)throw new Error("source should be a string (got ".concat(typeof o,")"));return{version:n,source:o}}catch(i){return void console.error("Failed to parse sandbox state from url",i)}}}}},[["JbA0",0,2,5,1,3,4]]]);