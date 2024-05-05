import u from 'showdown';
import s from 'prismjs';
import w from 'he';

var{decode:m}=w;function r(){return [{type:"output",filter:(c,x,E)=>{let g="<pre><code\\b[^>]*>",i="g",l=new RegExp(g,i),d=(a,e,o)=>{let n=e.match(/class=\"([^ \"]+)/)?.[1]??void 0;if(n){let p=`<pre class="language-${n}"><code class="language-${n}">`,t="</code></pre>",h=m(o.substring(e.length,o.length-t.length));return p+s.highlight(h,s.languages[n],n)+t}else return a};return c.replace(l,d)}}]}u.extension("showdownPrism",r);var k=r;

export { k as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map