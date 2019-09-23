const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Extract CSS
module.exports = {
  one: {
    mode: "production",
    entry: {
      head: "./social/engine.jsx",
      body : './social/successUserRegister.js'
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].[hash].bundle.js",
      publicPath: "/"
    },
    devtool: false,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public"),
      compress: true,
      //useLocalIp: true,
      port: 4000
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
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.(jpe?g|png|gif|mp3|webp)$/i,
          loaders: ["file-loader", "webp-loader?{quality:13}"]
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
    ]
  },
  two: {
    mode: "production",
    entry: {
      one: "./social/views/inicio/topBar.jsx",
      two: "./social/views/inicio/avatar/avatar.jsx",
      three: "./social/views/inicio/searchbox/search.jsx",
      four: "./social/views/boxes/registerBox.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].[hash].bundle.js",
      publicPath: "/"
    },
    devtool: false,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public"),
      compress: true,
      //useLocalIp: true,
      port: 4000
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
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.(jpe?g|png|gif|mp3|webp)$/i,
          loaders: ["file-loader", "webp-loader?{quality:13}"]
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
    ]
  },
  three : {
    mode: "production",
    entry: {
      inicio: "./social/views/inicio.jsx",
      error: "./social/views/Errors.jsx"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].[hash].bundle.js",
      publicPath: "/"
    },
    devtool: false,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public"),
      compress: true,
      //useLocalIp: true,
      port: 4000
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
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.(jpe?g|png|gif|mp3|webp)$/i,
          loaders: ["file-loader", "webp-loader?{quality:13}"]
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
    ]
  }
};
