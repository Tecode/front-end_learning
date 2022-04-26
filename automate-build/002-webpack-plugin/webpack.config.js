const path = require("path");
const { sources } = require("webpack");

class MyPlugin {
  apply(compiler) {
    // 输出 asset 到 output 目录之前执行。这个钩子 不会 被复制到子编译器
    compiler.hooks.emit.tap("MyPlugin", (compilation) => {
      const assets = compilation.getAssets();
      for (const item in assets) {
        if (Object.hasOwnProperty.call(assets, item)) {
          const element = assets[item];
          const content = element.source.source().replace(/\/\*\*+\*\//g, "");
          console.log(content, "--content");
          compilation.updateAsset(element.name, new sources.RawSource(content));
        }
      }
    });
  }
}

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dist/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: ["./markdown-loader"],
      },
    ],
  },
  plugins: [new MyPlugin()],
};
