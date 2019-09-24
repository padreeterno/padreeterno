const dev_bussines = require("./bussines/webpack.dev");
const dev_social = require("./social/webpack.dev");
const dev_web = require("./web/webpack.dev");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Extract CSS
module.exports = {
  general : {
    mode: "production",
    devtool: false,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(jpe?g|png|gif|mp3|webp)$/i,
          loaders: ["file-loader", "webp-loader?{quality:13}"]
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: false,
                reloadAll: true
              }
            },
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      })
    ],
  },
  prod : {
    entry: "./run.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].bundle.js",
      publicPath: "/"
    },
  },
  dev_bussines : dev_bussines.one,
  dev_social : dev_social.one,
  dev_social_one : dev_social.two,
  dev_social_two : dev_social.three,
  dev_web : dev_web.one,
  dev_web_one : dev_web.two,
  dev_web_two : dev_web.three,
};
