import u from 'showdown';
import s from 'prismjs';
import { decode } from 'he';

function r(){return [{type:"output",filter:(c,f,x)=>{let g="<pre><code\\b[^>]*>",i="g",l=new RegExp(g,i),d=(a,e,o)=>{let n=e.match(/class=\"([^ \"]+)/)?.[1]??void 0;if(n){let p=`<pre class="language-${n}"><code class="language-${n}">`,t="</code></pre>",h=decode(o.substring(e.length,o.length-t.length));return p+s.highlight(h,s.languages[n],n)+t}else return a};return c.replace(l,d)}}]}u.extension("showdownPrism",r);var $=r;

export { $ as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map