import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/index.ts"],
    outDir: "./out",
    // splitting: true,
    // sourcemap: true,
    // dts: true,
    format: "iife",
    bundle: true,
    treeshake: true,
    globalName: "repackMd",
    // minify: true,
});
