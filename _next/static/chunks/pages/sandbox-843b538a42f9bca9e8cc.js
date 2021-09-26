(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{6562:function(e,t,n){"use strict";var r=n(7467);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));var o=r=i(i({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};u(n(2784));var a=u(n(6790));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},6223:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(2784))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},6790:function(e,t,n){"use strict";var r=n(2473),o=n(3382),i=n(7467);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,d=(l=n(2784))&&l.__esModule?l:{default:l},f=n(6718),p=n(6223);var h=[],y=[],m=!1;function b(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var v=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=d.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new v(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!m&&"function"===typeof n.webpack&&!n.suspense){var i=n.webpack();y.push((function(e){var t,n=s(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=n.suspense?function(e,t){return d.default.createElement(n.lazy,u(u({},e),{},{ref:t}))}:function(e,t){o();var i=d.default.useContext(p.LoadableContext),a=f.useSubscription(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return a.preload=function(){return!n.suspense&&o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}(b,e)}function g(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return g(e,t)}))}_.preloadAll=function(){return new Promise((function(e,t){g(h).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};g(y,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var j=_;t.default=j},1679:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(8912),o=(n(2784),n(2322)),i=function(e){var t=e.href,n=e.className,i=e.children,a=e.showIcon,u=(void 0===a||a)&&(0,o.jsx)(r.JO,{icon:"share",iconSize:12,style:{verticalAlign:"baseline",paddingLeft:"4px"}});return(0,o.jsxs)("a",{className:n,href:t,rel:"noopener noreferrer",target:"_blank",children:[i,u]})}},2581:function(e,t,n){"use strict";n.d(t,{A:function(){return _}});var r,o=n(7460),i=n(2784),a=n(9097),u=n(8912),s=n(9569),c=n(2779),l=n.n(c),d=n(1494);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){return i.createElement("svg",f({viewBox:"0 0 16 16",width:32},e),r||(r=i.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))},h=n(7603),y=n(1679),m=n(8857),b=n.n(m),v=n(2322),_=(0,i.memo)((function(e){var t=e.fullHeight,n=void 0!==t&&t,r=e.children,i={};return n&&(i.overflow="hidden"),(0,v.jsxs)("div",{className:l()(b().container,(0,o.Z)({},b().fullHeight,n)),children:[(0,v.jsx)("header",{className:b().header,children:(0,v.jsx)(g,{siteTitle:d.Z.title})}),(0,v.jsx)("main",{className:b().content,style:i,children:r})]})})),g=function(e){return(0,v.jsxs)(u.wp,{className:l()(s.Pyr,b().nav),children:[(0,v.jsxs)(u.wp.Group,{children:[(0,v.jsx)(u.wp.Heading,{children:(0,v.jsx)(a.default,{href:h.Kz(),children:(0,v.jsx)("a",{className:l()(b().title,b().pageLink),children:e.siteTitle})})}),(0,v.jsx)(a.default,{href:h.rx(),children:(0,v.jsx)("a",{className:b().pageLink,children:"Documentation"})}),(0,v.jsx)(a.default,{href:h.vH(),children:(0,v.jsx)("a",{className:b().pageLink,children:"Sandbox"})})]}),(0,v.jsx)(u.wp.Group,{align:"right",children:(0,v.jsxs)(y.d,{className:b().pageLink,showIcon:!1,href:"https://github.com/mbeckem/tiro",children:[(0,v.jsx)(p,{className:b().icon}),"Github"]})})]})}},2704:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(2784),o=n(7729),i=n(1494),a=n(2322),u=(0,r.memo)((function(e){var t=e.title,n=e.description,r=void 0===n?"":n,u=(e.meta,Array.isArray(t)?t:[t]),s=i.Z.title+": "+u.join(" - "),c=r||i.Z.description;return(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:s}),(0,a.jsx)("meta",{name:"description",content:c}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:s}),(0,a.jsx)("meta",{property:"og:description",content:c}),(0,a.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,a.jsx)("meta",{property:"twitter:creator",content:i.Z.author.name}),(0,a.jsx)("meta",{property:"twitter:title",content:s}),(0,a.jsx)("meta",{property:"twitter:description",content:c})]})}))},1494:function(e,t){"use strict";t.Z={title:"tiro",description:"The tiro Programming Language",author:{name:"Michael Beckemeyer",githubProfile:"https://github.com/mbeckem/"}}},586:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(7460),o=n(9207),i=n(2847),a=n.n(i),u=n(2784),s=n(5237),c=n(9569),l=n(2581),d=n(2704),f=n(9200),p=n(5201),h=n(2322);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=(0,s.default)((0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(774),n.e(190),n.e(16)]).then(n.bind(n,1016));case 2:return e.abrupt("return",e.sent.Sandbox);case 3:case"end":return e.stop()}}),e)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[1016]},modules:["sandbox.tsx -> @components/sandbox"]}}),v='\nimport std;\n\nexport func main() {\n    const object = "World";\n    std.print("Hello ${object}!");\n}\n'.trimStart();function _(){var e=(0,u.useState)(!1),t=e[0],n=e[1],r=(0,u.useState)(!1),o=r[0],i=r[1];(0,u.useEffect)((function(){setTimeout((function(){return i(!0)}),200)}),[]);var a=(0,u.useMemo)(g,void 0),s=(0,u.useState)(null!==a&&void 0!==a?a:{version:p.qw,source:v}),f=s[0],y=s[1],_=(0,u.useCallback)((function(e){y((function(t){return m(m({},t),{},{source:e})}))}),[]);(0,u.useEffect)((function(){!function(e){var t=(0,p.QK)(e),n=new URL(window.location.href);n.hash="#".concat(t),window.history.replaceState(null,"",n.href)}(f)}),[f]);var j=t&&o,w=(0,h.jsx)("div",{style:{width:"100%",height:"100%",visibility:j?"visible":"hidden"},children:(0,h.jsx)(b,{initialSource:f.source,onReady:function(){return n(!0)},onSourceChanged:_})}),O=j?null:(0,h.jsx)("div",{style:{position:"absolute",marginTop:"50px",textAlign:"center",width:"100%"},className:c.vMw,children:"Loading Sandbox..."});return(0,h.jsxs)(l.A,{fullHeight:!0,children:[(0,h.jsx)(d.H,{title:"Sandbox"}),O,w]})}function g(){if(!(0,f.sk)()){var e=new URL(window.location.href);try{return(0,p.TP)(e.hash)}catch(t){return void console.error("Failed to parse sandbox state from url",t)}}}},7812:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sandbox",function(){return n(586)}])},8857:function(e){e.exports={container:"Layout_container__QVNsN",fullHeight:"Layout_fullHeight__1D3uW",header:"Layout_header__2ZJ77",content:"Layout_content__3r5bY",nav:"Layout_nav__3Jv66",title:"Layout_title__WylHX",pageLink:"Layout_pageLink__3DA3h",icon:"Layout_icon__3qbZj"}},5237:function(e,t,n){e.exports=n(6562)},9207:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,s,"next",e)}function s(e){r(a,o,i,u,s,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[774,165,158,888,179],(function(){return t=7812,e(e.s=t);var t}));var t=e.O();_N_E=t}]);