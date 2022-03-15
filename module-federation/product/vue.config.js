const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:9001/",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "product",
        filename: "remoteEntry.js",
        exposes: {
          "./HelloWorld": "./src/components/HelloWorld",
          "./ProductApp": "./src/bootstrap.js",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 9001,
  },
};
