const { ModuleFederationPlugin } = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dependencies = require("./package.json").dependencies

console.log(dependencies);

module.exports = {
  publicPath: "http://localhost:9001/",
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
        // shared: {
        //   vue: '^2.6.14',
        //   'vue-router': '^3.2.0'
        // },
        // shared: require("./package.json").dependencies,
        shared: ['vue', 'vue-router']
      }),
    ],
  },
  devServer: {
    port: 9001,
    hot: true,
    historyApiFallback: true,
  },
};
