!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[MediaOverlayControls]",["react"],r):"object"==typeof exports?exports["rb_wixui.thunderbolt[MediaOverlayControls]"]=r(require("react")):e["rb_wixui.thunderbolt[MediaOverlayControls]"]=r(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(e){function r(r){for(var t,a,s=r[0],l=r[1],u=r[2],c=0,p=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(d&&d(r);p.length;)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,r=0;r<i.length;r++){for(var o=i[r],t=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(t=!1)}t&&(i.splice(r--,1),e=a(a.s=o[0]))}return e}var t={},n={538:0},i=[];function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,r,o){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)a.d(o,t,function(r){return e[r]}.bind(null,t));return o},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="https://static.parastorage.com/services/editor-elements/dist/";var s=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library||[],l=s.push.bind(s);s.push=r,s=s.slice();for(var u=0;u<s.length;u++)r(s[u]);var d=l;return i.push([4661,0,1]),o()}({0:function(r,o){r.exports=e},11:function(e,r,o){"use strict";o.d(r,"g",(function(){return n})),o.d(r,"h",(function(){return i})),o.d(r,"d",(function(){return s})),o.d(r,"b",(function(){return l})),o.d(r,"e",(function(){return u})),o.d(r,"c",(function(){return d})),o.d(r,"a",(function(){return c})),o.d(r,"f",(function(){return p}));var t=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o};const n={enter:13,space:32,end:35,home:36,escape:27,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,tab:9,delete:46,a:65,z:90,pageUp:33,pageDown:34},i={space:["Spacebar"," "],enter:["Enter"]};function a(e){return r=>{r.keyCode===e&&(r.preventDefault(),r.stopPropagation(),r.currentTarget.click())}}const s=a(n.space),l=a(n.enter),u=e=>{l(e),s(e)},d=a(n.escape),c="has-custom-focus",p=(e={})=>{var r,{pressed:o,expanded:n,haspopup:i,label:a,live:s,relevant:l,current:u,owns:d,controls:c,roleDescription:p,hidden:f,disabled:b,describedBy:v,labelledBy:y,errorMessage:x,atomic:g,role:h,busy:_}=e,m=t(e,["pressed","expanded","haspopup","label","live","relevant","current","owns","controls","roleDescription","hidden","disabled","describedBy","labelledBy","errorMessage","atomic","role","busy"]);const O=null!==(r=m.tabIndex)&&void 0!==r?r:m.tabindex,j={};return a&&(j["aria-label"]=a),s&&(j["aria-live"]=s),u&&(j["aria-current"]=u),o&&(j["aria-pressed"]=o),"boolean"==typeof f&&(j["aria-hidden"]=f),"boolean"==typeof n&&(j["aria-expanded"]=n),"boolean"==typeof b&&(j["aria-disabled"]=b),"boolean"==typeof g&&(j["aria-atomic"]=g),"boolean"==typeof _&&(j["aria-busy"]=_),"string"==typeof l&&(j["aria-relevant"]=l),"string"==typeof d&&(j["aria-owns"]=d),"string"==typeof c&&(j["aria-controls"]=c),"string"==typeof p&&(j["aria-roledescription"]=p),i&&(j["aria-haspopup"]=i),"number"==typeof O&&(j.tabIndex=O),h&&(j.role=h),v&&(j["aria-describedby"]=v),y&&(j["aria-labelledby"]=y),x&&(j["aria-errormessage"]=x),j}},2528:function(e,r,o){"use strict";var t=o(0),n=o(471),i=o(369),a=o(455),s=o.n(a);r.a=({id:e,vectorImageProps:r,shouldRender:o,reducedMotion:a=!1})=>(Object(i.d)(r,e),t.createElement("div",{id:e},(o||a)&&t.createElement(n.a,Object.assign({id:"play-"+e,className:s.a.videoboxPlay},r))))},2529:function(e,r,o){"use strict";r.a={mapStateToProps:({reducedMotion:e})=>({reducedMotion:e})}},455:function(e,r,o){e.exports={"video-container":"_1OEU0",videoContainer:"_1OEU0","video-poster":"_3Nifl",videoPoster:"_3Nifl","video-poster-img":"_3mlbD",videoPosterImg:"_3mlbD",video:"uP8h2","filter-effect-svg":"_1YeVT",filterEffectSvg:"_1YeVT",videobox:"_1EyUC",mediaControlsContainer:"_36aXa",masked:"sONZ1","videobox-container":"_1zNyT",videoboxContainer:"_1zNyT","videobox-fill":"IfnBz",videoboxFill:"IfnBz","has-canvas":"_3SQDg",hasCanvas:"_3SQDg","videobox-play":"_3p8NH",videoboxPlay:"_3p8NH","videobox-audio":"_3MvZs",videoboxAudio:"_3MvZs","videobox-audio-icon":"_3p5QH",videoboxAudioIcon:"_3p5QH","videobox-audio-on":"_1USx3",videoboxAudioOn:"_1USx3","videobox-audio-off":"WjvlX",videoboxAudioOff:"WjvlX"}},4661:function(e,r,o){"use strict";o.r(r),o.d(r,"components",(function(){return i})),o.d(r,"version",(function(){return a}));var t=o(2528),n=o(2529);const i={MediaOverlayControls:{component:t.a,controller:n.a}},a="1.0.0"},5:function(e,r,o){var t;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=n.apply(null,t);a&&e.push(a)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)o.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()}})}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements/dist/rb_wixui.thunderbolt[MediaOverlayControls].70add4ec.bundle.min.js.map