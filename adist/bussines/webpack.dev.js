const path = require("path");
module.exports = {
  one: {
    entry: "./bussiness/engine.jsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].[hash].bundle.js",
      publicPath: "/"
    },
  }
};