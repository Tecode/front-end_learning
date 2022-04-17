const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    // index2: "./src/index2.js",
    // 插件分包
    // index: "./src/index.js",
    // index2: { import: "./src/index2.js", dependOn: "shared" },
    // shared: ["lodash"],

    // index2: "./src/index2.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash:6].bundle.js",
    chunkFilename: "js/chunk_[name].js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  externals: {
    lodash: "_",
  },
  optimization: {
    runtimeChunk: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
    chunkIds: "deterministic",
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 20000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      javascript: path.resolve(__dirname, "src/javascript/"),
      images: path.resolve(__dirname, "src/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: true, esModule: false },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: true, esModule: false },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "img/[name].[hash:6].[ext]",
              limit: 1024 * 100,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ linkType: "text/css" }),
    new HtmlWebpackPlugin({ template: "./index.html", title: "自动化构建" }),
  ],
};
