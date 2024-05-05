'use strict';

var i = require('showdown');
var s = require('prismjs');
var u = require('he');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);
var s__default = /*#__PURE__*/_interopDefault(s);
var u__default = /*#__PURE__*/_interopDefault(u);

var m=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var f=m((b,g)=>{var{decode:w}=u__default.default;function c(){return [{type:"output",filter:(e,x,E)=>{let o={left:"<pre><code\\b[^>]*>",right:"</code></pre>",flags:"g"},a=(d,p,t,l)=>{let h=w(p),n=t.match(/class=\"([^ \"]+)/)?.[1]??void 0;return n?(t=`<pre class="language-${n}"><code class="language-${n}">`,t+s__default.default.highlight(h,s__default.default.languages[n],n)+l):d};return i__default.default.helper.replaceRecursiveRegExp(e,a,o.left,o.right,o.flags)}}]}i__default.default.extension("showdownPrism",c);g.exports=c;});var index = f();

module.exports = index;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map