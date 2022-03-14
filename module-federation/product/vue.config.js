const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:9001/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'product',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorld': './src/components/HelloWorld',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 9001,
  },
};
