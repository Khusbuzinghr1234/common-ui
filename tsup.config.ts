import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],

  format: ["esm", "cjs"],

  dts: true,

  clean: true,

  splitting: false,

  target: "es2019",

  external: ["react", "react-native"],

  esbuildOptions(options) {
    // 🔥 THIS is the important fix
    options.resolveExtensions = [
      ".web.tsx",
      ".native.tsx",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".json"
    ];
  }
});
