import { defineConfig } from "tsup"

export default defineConfig(options => {
  return {
    entry: [
      "src/*/index.ts"
    ],
    format: [
      "cjs",
      "esm"
    ],
    dts: true,
    platform: "neutral",
    splitting: false,
    sourcemap: true,
    clean: true,
    skipNodeModulesBundle: true,
    minify: !options.watch
  }
})
