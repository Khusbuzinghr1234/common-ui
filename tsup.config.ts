import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,

  /**
   * THIS keeps tamagui config in the bundle
   */
  noExternal: ["tamagui", "@tamagui/*"],
});
