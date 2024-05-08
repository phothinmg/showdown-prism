//2024 May 8 , at Taungyi , Myanmar
/** 
   
   @license

   Copyright [2024] [Pho Thin Maung]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */


import Showdown from "showdown";
import type { ShowdownExtension } from "showdown";
import Prism from "prismjs";
import loadLanguages from "prismjs/components/index";
import { decode } from "he";
import { JSDOM } from "jsdom";

const lang = (text: string): string => {
    const m = text.match(/class="([^" ]+)/);
    return m ? m[1] : "";
};

const window = new JSDOM().window;

const themes: string[] = [
    "actom-dark",
    "cb",
    "coldark-dark",
    "dark",
    "holi-theme",
    "duotone-earth",
    "duotone-forest",
    "duotone-light",
    "duotone-sea",
    "duotone-space",
    "funky",
    "ghcolors",
    "gruvbox-light",
    "laserwave",
    "lucario",
    "night-owl",
    "okaidia",
    "one-dark",
    "one-light",
    "solarized-dark-atom",
    "synthwave84",
    "tomorrow",
    "twilight",
    "vs",
    "vsc-dark-plus",
    "z-touch",
];
const defaultTheme: string = "vs";

/**
 * Load a theme from cdn.jsdelivr.net.
 *
 * @param {string} theme - The theme name.
 * @returns {HTMLLinkElement} The link element of the theme.
 */
const loadTheme = (theme: string): HTMLLinkElement => {
    let themeLink;
    if (themes.includes(theme)) {
        themeLink = `https://cdn.jsdelivr.net/gh/phothinmg/prism-themes@main/theme/${theme}.min.css`;
    } else {
        themeLink = `https://cdn.jsdelivr.net/gh/phothinmg/prism-themes@main/theme/${defaultTheme}.min.css`;
    }
    const themeEl = window.document.createElement("link");
    themeEl.setAttribute("rel", "stylesheet");
    themeEl.setAttribute("href", themeLink);
    return window.document.head.appendChild(themeEl);
};

type ShowdownPrismOptions = {
    languages?: string[];
    theme?: string;
};

/**
 * A Showdown extension for Prism.js.
 *
 * This extension adds syntax highlighting to code blocks in markdown documents
 * using Prism.js. This extension is meant to be used with the Showdown library.
 *
 * @namespace ShowdownPrism
 */
const showdownPrism = (options?: ShowdownPrismOptions): ShowdownExtension => {
    /**
     * The list of languages to load.
     *
     * If not specified, the extension will load the default languages:
     * `markup`, `css`, `clike` and `javascript`.
     *
     * @memberof ShowdownPrism
     * @type {string[]}
     */
    const langs: string[] = options?.languages ?? [];

    /**
     * The theme to use.
     *
     * The extension will load the theme from cdn.jsdelivr.net.
     *
     * @memberof ShowdownPrism
     * @type {string}
     */
    const theme: string = options?.theme ?? `${defaultTheme}`;

    /**
     * Load the specified languages.
     *
     * This loads the languages from the Prism.js component repository.
     *
     * @param {string[]} langs - The list of languages to load.
     */
    loadLanguages(langs);

    /**
     * Load the specified theme.
     *
     * This loads the theme from cdn.jsdelivr.net.
     *
     * @param {string} theme - The theme name.
     * @returns {HTMLLinkElement} The link element of the theme.
     */

    loadTheme(theme);

    /**
     * The regular expression to use for replacing code blocks.
     *
     * @memberof ShowdownPrism
     * @type {RegExp}
     */
    const params = {
        left: "<pre><code\\b[^>]*>",
        right: "</code></pre>",
        flags: "g",
    };

    /**
     * Replaces the matched code block with a highlighted version using Prism.js.
     *
     * @param {string} wholematch - The entire matched code block.
     * @param {string} match - The matched code within the code block.
     * @param {string} left - The left delimiter of the code block.
     * @param {string} right - The right delimiter of the code block.
     * @return {string} The highlighted version of the code block, or the original code block if no language is specified.
     */
    const replacement = (
        wholematch: string,
        match: string,
        left: string,
        right: string
    ) => {
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

    return {
        type: "output",

        /**
         * A function that filters the given text using the Showdown helper's replaceRecursiveRegExp method.
         *
         */
        filter: (
            text: string,
            converter: Showdown.Converter,
            options: any
        ): string => {
            return Showdown.helper.replaceRecursiveRegExp(
                text,
                replacement,
                params.left,
                params.right,
                params.flags
            );
        },
    };
};

Showdown.extension("showdownPrism", showdownPrism());

export default showdownPrism;
