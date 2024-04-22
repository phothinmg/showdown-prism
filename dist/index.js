'use strict';

var i = require('showdown');
var g = require('prismjs/components/index.js');
var s = require('prismjs');
var w = require('he');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);
var g__default = /*#__PURE__*/_interopDefault(g);
var s__default = /*#__PURE__*/_interopDefault(s);
var w__default = /*#__PURE__*/_interopDefault(w);

var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var x=u((y,c)=>{var{decode:f}=w__default.default;g__default.default.silent=!0;g__default.default();function a(){return [{type:"output",filter:(e,E,S)=>{let n={left:"<pre><code\\b[^>]*>",right:"</code></pre>",flags:"g"},d=(l,p,t,h)=>{let m=f(p),o=t.match(/class=\"([^ \"]+)/)?.[1]??void 0;return o?(t=`<pre class="language-${o}"><code class="language-${o}">`,t+s__default.default.highlight(m,s__default.default.languages[o],o)+h):l};return i__default.default.helper.replaceRecursiveRegExp(e,d,n.left,n.right,n.flags)}}]}i__default.default.extension("showdownPrism",a);c.exports=a;});var index = x();

module.exports = index;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map