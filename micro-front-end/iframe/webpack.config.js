const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ebk",
    projectName: "iframe",
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 9001
    },
  });
};
