const path = require("path");
// Extract CSS
module.exports = {
  one: {
    entry: {
      head: "./social/engine.jsx",
      body : './social/successUserRegister.js'
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].social_route.js",
      publicPath: "/social"
    },
  },
  two: {
    entry: {
      one: "./social/views/inicio/topBar.jsx",
      two: "./social/views/inicio/avatar/avatar.jsx",
      three: "./social/views/inicio/searchbox/search.jsx",
      four: "./social/views/boxes/registerBox.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].social_views.js",
      publicPath: "/social"
    },
  },
  three : {
    entry: {
      inicio: "./social/views/inicio.jsx",
      error: "./social/views/Errors.jsx"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].[hash].social_views_dist.js",
      publicPath: "/social"
    },
  }
};
