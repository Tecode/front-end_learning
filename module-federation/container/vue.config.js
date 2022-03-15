const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./package.json");

module.exports = {
  publicPath: "http://localhost:8080/",

  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    /* module federation plugin import */
    config.plugin("module-federation-plugin").use(ModuleFederationPlugin, [
      {
        name: "container",
        filename: "remoteEntry.js",
        remotes: {
          auth: "auth@http://localhost:9002/remoteEntry.js",
          product: "product@http://localhost:9001/remoteEntry.js",
        },
        shared: require("./package.json").dependencies,
      },
    ]);
  },

  devServer: {
    port: 8080,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
