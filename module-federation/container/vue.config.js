const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJSON = require("./package.json")


module.exports = {
  devServer: {
    port: 8081,
    historyApiFallback: true
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          // marketing: "marketing@http://localhost:8081/remoteEntry.js",
          // auth: "auth@http://localhost:8082/remoteEntry.js",
          // dashboard: "dashboard@http://localhost:8083/remoteEntry.js"
        },
        shared: packageJSON.dependencies
      }),
    ]
  }
}