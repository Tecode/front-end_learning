const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJSON = require("./package.json")


module.exports = {
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        filename: 'remoteEntry.js',
        remotes: {
          auth: 'auth@http://localhost:9002/remoteEntry.js',
          product: 'product@http://localhost:9001/remoteEntry.js',
        },
        shared: packageJSON.dependencies
      }),
    ]
  }
}