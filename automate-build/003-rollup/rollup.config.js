import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import { terser } from "rollup-plugin-terser";

export default {
  input: ["src/index.js", "src/entry.js"],
  output: {
    dir: "dist",
    // file: "dist/bundle.js",
    format: "amd"
  },
  // 使用插件
  plugins: [json(), resolve(), commonjs()],
};
