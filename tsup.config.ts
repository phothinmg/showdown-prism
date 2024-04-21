/* cspell:disable */
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir:"./dist/browser",
  splitting: true,
  sourcemap: true,
  // dts: true,
  format: "iife",
  bundle: true,
  treeshake: true,
  // minify: true,
  external: ["showdown","prismjs"],
  // terserOptions: {
  //   compress: {
  //     unsafe_regexp: true,
  //   },
  // },
});
