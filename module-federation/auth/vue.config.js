const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:9002/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'auth',
        filename: 'remoteEntry.js',
        exposes: {
          './MainComponent': './src/components/MainComponent',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 9002,
  },
};
