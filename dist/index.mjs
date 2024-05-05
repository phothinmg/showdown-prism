import r from 'showdown';
import t from 'prismjs';
import p from 'he';

var{decode:h}=p;function s(){return [{type:"output",filter:(i,m,w)=>{let n={left:"<pre><code\\b[^>]*>",right:"</code></pre>",flags:"g"},c=(g,a,o,d)=>{let l=h(a),e=o.match(/class=\"([^ \"]+)/)?.[1]??void 0;return e?(o=`<pre class="language-${e}"><code class="language-${e}">`,o+t.highlight(l,t.languages[e],e)+d):g};return r.helper.replaceRecursiveRegExp(i,c,n.left,n.right,n.flags)}}]}r.extension("showdownPrism",s);var P=s;

export { P as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map