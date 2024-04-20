/* cspell:disable */
import { defineConfig } from "tsup";
import browserslist from "browserslist";
import {
  esbuildPluginBrowserslist,
  resolveToEsbuildTarget,
} from "esbuild-plugin-browserslist";
export default defineConfig({
  entry: ["./src/global.cts"],
  outDir: "./dist/browser",
  splitting: true,
  sourcemap: true,
  // dts: true,
  format: "iife",
  bundle: true,
  treeshake: true,
  minify: true,
  external: ["showdown", "prismjs"],
  terserOptions: {
    compress: {
      unsafe_regexp: true,
    },
  },
  esbuildPlugins:[
    esbuildPluginBrowserslist(browserslist("defaults"), {
      printUnknownTargets: false,
    }),
  ]
});
