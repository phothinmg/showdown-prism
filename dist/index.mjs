import r from 'showdown';
import s from 'prismjs/components/index.js';
import t from 'prismjs';
import u from 'he';

var{decode:h}=u;s.silent=!0;s();function i(){return [{type:"output",filter:(a,w,f)=>{let o={left:"<pre><code\\b[^>]*>",right:"</code></pre>",flags:"g"},g=(c,d,n,l)=>{let p=h(d),e=n.match(/class=\"([^ \"]+)/)?.[1]??void 0;return e?(n=`<pre class="language-${e}"><code class="language-${e}">`,n+t.highlight(p,t.languages[e],e)+l):c};return r.helper.replaceRecursiveRegExp(a,g,o.left,o.right,o.flags)}}]}r.extension("showdownPrism",i);var R=i;

export { R as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map