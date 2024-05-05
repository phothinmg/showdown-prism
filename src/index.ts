import Showdown, { ShowdownExtension } from "showdown";
import Prism from "prismjs";
import pkg from 'he';
const { decode } = pkg;



/**
 * Returns an array of Showdown extensions that can be used to highlight code blocks in the output of Showdown.
 * @returns {ShowdownExtension[]} An array of Showdown extensions.
 */

function showdownPrism(): ShowdownExtension[] {
    const ext: ShowdownExtension[] = [
        {
            type: "output",
            filter: (text, converter, options) => {
                const left = "<pre><code\\b[^>]*>";
                const right = "</code></pre>";
                const flags = "g";
                const re = new RegExp(left, flags);
                const replacement = (
                    wholeMatch: string,
                    leftMatch: string,
                    rightMatch: string
                ) => {
                    const lang =
                        leftMatch.match(/class=\"([^ \"]+)/)?.[1] ?? undefined;
                    if (lang) {
                        const langLeft = `<pre class="language-${lang}"><code class="language-${lang}">`;
                        const langRight = `</code></pre>`;
                        const decodedMatch = decode(
                            rightMatch.substring(leftMatch.length, rightMatch.length - langRight.length)
                        );
                        return (
                            langLeft +
                            Prism.highlight(decodedMatch, Prism.languages[lang], lang) +
                            langRight
                        );
                    } else {
                        return wholeMatch;
                    }
                };
                return text.replace(re, replacement);
            },
        },
    ];
    return ext;
}

Showdown.extension("showdownPrism", showdownPrism);

export default showdownPrism;


