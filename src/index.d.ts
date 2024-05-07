export function showdownPrism({
    bundler,
    langs,
    theme,
    copyToClipboard,
}?: Options): ShowdownPrismExtensions;
export default showdownPrism;
/**
 * ## Showdown Extension of Prism Js for highligh code block.
 */
export type Options = {
    bundler?: boolean;
    langs?: string | string[];
    theme?: string;
    copyToClipboard?: boolean;
};
/**
 * ## Showdown Extension of Prism Js for highligh code block.
 */
export type ShowdownPrismExtensions = import("showdown").ShowdownExtensions;
