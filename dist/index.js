import h from 'showdown';
import s from 'prismjs';
import { decode } from 'he';
import w from 'prismjs/components/index';

function r(){return [{type:"output",filter:(g,x,E)=>{let c="<pre><code\\b[^>]*>",i="g",l=new RegExp(c,i),a=(d,e,o)=>{w();let n=e.match(/class=\"([^ \"]+)/)?.[1]??void 0;if(n){let p=`<pre class="language-${n}"><code class="language-${n}">`,t="</code></pre>",u=decode(o.substring(e.length,o.length-t.length));return p+s.highlight(u,s.languages[n],n)+t}else return d};return g.replace(l,a)}}]}h.extension("showdownPrism",r);var v=r;

export { v as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map