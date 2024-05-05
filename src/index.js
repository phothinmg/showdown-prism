(function (extension) {
    if (typeof showdown !== "undefined") {
        // global (browser or nodejs global)
        extension(showdown);
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define(["showdown"], extension);
    } else if (typeof exports === "object") {
        // Node, CommonJS-like
        module.exports = extension(require("showdown"));
    } else {
        // showdown was not found so we throw
        throw Error("Could not find showdown library");
    }
})(function (showdown) {
    // loading extension into shodown
    showdown.extension("", function () {
        var showdownPrism = {
            type: "output",
            filter: (text, converter, options) => {
                const params = {
                    left: "<pre><code\\b[^>]*>",
                    right: "</code></pre>",
                    flags: "g",
                };
                const replacement = (wholeMatch, match, left, right) => {
                    const decodedMatch = decode(match);
                    const lang =
                        left.match(/class=\"([^ \"]+)/)?.[1] ?? undefined;
                    if (lang) {
                        left = `<pre class="language-${lang}"><code class="language-${lang}">`;
                        return (
                            left +
                            Prism.highlight(
                                decodedMatch,
                                Prism.languages[lang],
                                lang
                            ) +
                            right
                        );
                    } else {
                        return wholeMatch;
                    }
                };
                return showdown.helper.replaceRecursiveRegExp(
                    text,
                    replacement,
                    params.left,
                    params.right,
                    params.flags
                );
            },
        };
        return [showdownPrism];
    });
});
