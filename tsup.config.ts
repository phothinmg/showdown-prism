/* cspell:disable */
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.mts"],
  outDir:"./dist",
  splitting: true,
  sourcemap: true,
  dts: true,
  format: "esm",
  bundle: true,
  treeshake: true,
  minify: true,
  external: ["showdown","prismjs","he"],
  terserOptions: {
    compress: {
      unsafe_regexp: true,
    },
  },
});