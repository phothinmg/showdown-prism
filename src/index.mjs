import Showdown from "showdown";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Prism = require("prismjs");
import pkg from "he";
const { decode } = pkg;
const loadLanguages = require("prismjs/components/");
/**
 * @namespace ShowdownPrism
 */

/**
 * @memberof ShowdownPrism
 * @type {string[]}
 */
const themes = ["actom-dark", "cb", "coldark-dark", "dark", "holi-theme"];

/**
 * **Langguage from "class" from code tag**
 *
 * @function lang
 * @memberof ShowdownPrism
 *
 * @param {string | undefined} text
 * @returns {string}
 */
const lang = (text) => {
    const m = text.match(/class="([^" ]+)/);
    return m ? m[1] : "";
};
/**
 * ## Showdown Extension of Prism Js for highligh code block.
 * 
 * 
 * @memberof ShowdownPrism
 * @typedef {{bundler?: boolean; langs?: string | string[]; theme?: string, copyToClipboard?: boolean}}Options
 * @typedef {import("showdown").ShowdownExtensions}ShowdownPrismExtensions
 * @param {Options}
 * ---
 *
 * **1.bundler : boolean**
 *   - Default false
 *   - If you use Webpack or another bundler set to true, as this will cause Webpack to include all languages and plugins.
 *   - If true , next parameter langs will disable.
 *
 * **2.langs :  string | string[ ]**
 *   - Prismjs will load the default languages: markup, css, clike and javascript.
 *   - You can load more languages with the options.langs.
 *   - Only available bundler was false.
 *
 * **3.theme : string**
 *  - Available themes
 *  - This create  link tag of available themes in your html head element.
 *
 * **4.copyToClipboard :  boolean**
 *  - Default false
 *  - Do not confuse with Prism Js plugin , copy-to-clipboard
 *
 * ---
 * 
 * 
 * 
 * @example
 * 
 * import Showdown from "showdown";
 * import {showdownPrism} from "showdown-prism";
 *
 * const converter = new Showdown.Converter({
 //_others_options,
 *  extensions: [showdownPrism({langs:["bash"], theme: "holi-theme",copyToClipboard: true})],
 * });
 // convert to HTML
 * converter.makeHtml(markdown-contents);
 * 
 * 
 *  
 *
 *  @returns {ShowdownPrismExtensions}
 *
 *
 */

export const showdownPrism = ({
    bundler = false,
    langs = [],
    theme = "dark",
    copyToClipboard = false,
} = {}) => {
    const params = {
        left: "<pre><code\\b[^>]*>",
        right: "</code></pre>",
        flags: "g",
    };
    if (!bundler) {
        loadLanguages(langs);
        loadLanguages.silent = true;
    }

    /**
     * Replaces the matched code block with a highlighted version using Prism.js.
     *
     * @param {string} wholematch - The entire matched code block.
     * @param {string} match - The matched code within the code block.
     * @param {string} left - The left delimiter of the code block.
     * @param {string} right - The right delimiter of the code block.
     * @return {string} The highlighted version of the code block, or the original code block if no language is specified.
     */
    const replacement = (wholematch, match, left, right) => {
        match = decode(match);
        const lan = lang(left);
        if (lan !== "") {
            left = `<pre class="language-${lan}"><code class="language-${lan}">`;
            right = `</code></pre>`;
            const highlighted = Prism.highlight(
                match,
                Prism.languages[lan],
                lan
            );
            return left + highlighted + right;
        } else {
            return wholematch;
        }
    };
    return [
        {
            type: "output",
            /**
             * A function that filters the given text using the Showdown helper's replaceRecursiveRegExp method.
             *
             * @param {string} text - The text to be filtered.
             * @param {function} converter - The converter function to be used for filtering.
             * @param {object} options - The options object for the filtering process.
             * @return {string} The filtered text.
             */
            filter: function (text, converter, options) {
                return Showdown.helper.replaceRecursiveRegExp(
                    text,
                    replacement,
                    params.left,
                    params.right,
                    params.flags
                );
            },
        },
        {
            type: "output",
            /**
             * Generates a theme tag based on the given theme and returns the modified text.
             *
             * @param {string} text - The text to be modified.
             * @param {function} converter - The converter function.
             * @param {object} options - The options object.
             * @return {string} The modified text with the theme tag.
             */
            filter: (text, converter, options) => {
                let themeTag;
                if (themes.includes(theme)) {
                    themeTag = `
            <script>
               function loadCss(){
                const themeEl = window.document.createElement("link");
                themeEl.setAttribute("rel", "stylesheet");
                themeEl.setAttribute(
                  "href",
                  "https://cdn.jsdelivr.net/gh/phothinmg/prism-themes@main/theme/${theme}.min.css"
                );
                window.document.head.appendChild(themeEl);
               };
               loadCss();
            </script>
            `;
                } else {
                    themeTag = `<div></div>`;
                }
                return text + themeTag;
            },
        },
        {
            type: "output",
            /**
             * A description of the entire function.
             *
             * @param {type} text - description of parameter
             * @param {type} converter - description of parameter
             * @param {type} options - description of parameter
             * @return {type} description of return value
             */
            filter: (text, converter, options) => {
                let copyButton;
                if (copyToClipboard) {
                    copyButton = `
          <br>
          <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.11/dist/clipboard.min.js"></script>
          <br>
          <script src="https://kit.fontawesome.com/b9ad49dae6.js" crossorigin="anonymous"></script>
    
          <script>
          const codeBlocks = window.document.querySelectorAll("pre");
          codeBlocks.forEach((codeBlock) => {
            const toolBar = window.document.createElement("div");
            toolBar.id = "e1847";
            const button = window.document.createElement("button");
            button.innerHTML = \` <i class="fa-regular fa-clipboard"></i>\`;
            codeBlock.parentNode.insertBefore(toolBar, codeBlock);
            toolBar.appendChild(button);
            const clipboard = new ClipboardJS(button, {
              target: function (trigger) {
                return trigger.parentNode.nextElementSibling;
              },
            });
            clipboard.on("success", (event) => {
              event.clearSelection();
              event.trigger.innerHTML = \`<i class="fa-solid fa-circle-check"></i>\`;
              setTimeout(() => {
                event.trigger.innerHTML = \`<i class="fa-regular fa-clipboard"></i>\`;
              }, 2000);
            });
          });
          </script>
          <br>
          <script>
          function e1847() {
            const styleEl = window.document.createElement("style");
            styleEl.innerText =[
                '#e1847 {',
                  'background-color: inherit;',
                  'color: inherit;',
                  'font: inherit;',
                  'display: flex;',
                  'flex-direction: row;',
                  'justify-content: flex-end;',
                 'margin: 0%;',
                  'height: fit-content;',
                '}',
                '#e1847 > button {',
                  'background-color: inherit;',
                  'color: inherit;',
                  'font: inherit;',
                  'border: none;',
                '}'
              ].join('');
            window.document.head.appendChild(styleEl);
          }
          e1847();
          </script>
          `;
                } else {
                    copyButton = `<div></div>`;
                }
                return text + copyButton;
            },
        },
    ];
};
Showdown.extension("showdownPrism", showdownPrism());

export default showdownPrism;
