import { ShowdownExtension } from 'showdown';

/**
 * Returns an array of Showdown extensions that can be used to highlight code blocks in the output of Showdown.
 * @returns {ShowdownExtension[]} An array of Showdown extensions.
 */
declare function showdownPrism(): ShowdownExtension[];

export { showdownPrism as default };
