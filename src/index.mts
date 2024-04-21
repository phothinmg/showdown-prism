import Showdown, { ShowdownExtension } from "showdown";
import loadLanguages from "prismjs/components/index.js";
import Prism from "prismjs";
import pkg from "he";
const { decode } = pkg;
loadLanguages.silent = true;
loadLanguages();
/**
 * Returns an array of Showdown extensions that can be used to highlight code blocks in the output of Showdown.
 * @returns {ShowdownExtension[]} An array of Showdown extensions.
 */

function showdownPrism(): ShowdownExtension[] {
  const ext: ShowdownExtension[] = [
    {
      type: "output",
      filter: (text, converter, options) => {
        const params = {
          left: "<pre><code\\b[^>]*>",
          right: "</code></pre>",
          flags: "g",
        };
        const replacement = (
          wholeMatch: string,
          match: string,
          left: string,
          right: string
        ) => {
          const decodedMatch = decode(match);
          const lang = left.match(/class=\"([^ \"]+)/)?.[1] ?? undefined;
          if (lang) {
            left = `<pre class="language-${lang}"><code class="language-${lang}">`;
            return (
              left +
              Prism.highlight(decodedMatch, Prism.languages[lang], lang) +
              right
            );
          } else {
            return wholeMatch;
          }
        };
        return Showdown.helper.replaceRecursiveRegExp(
          text,
          replacement,
          params.left,
          params.right,
          params.flags
        );
      },
    },
  ];
  return ext;
}

Showdown.extension("showdownPrism", showdownPrism);

export default showdownPrism;

