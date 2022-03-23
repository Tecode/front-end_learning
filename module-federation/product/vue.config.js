const { ModuleFederationPlugin } = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      new ModuleFederationPlugin({
        name: "product",
        filename: "remoteEntry.js",
        exposes: {
          "./HelloWorld": "./src/components/HelloWorld",
          "./ProductApp": "./src/bootstrap",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 9001,
    hot: true,
    historyApiFallback: true,
  },
};
