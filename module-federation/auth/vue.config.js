const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

// require("./package.json").dependencies
// { 'core-js': '^3.8.3', 'http-server': '^0.13.0', vue: '^2.6.14' } dependencies
module.exports = {
  publicPath: "http://localhost:9002/",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "auth",
        filename: "remoteEntry.js",
        exposes: {
          "./MainComponent": "./src/components/MainComponent",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 9002,
  },
};
