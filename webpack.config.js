const Common = require("./webpack.common");
const Web = require("./webpack.w.common");
const Bussiness = require("./webpack.b.common");
const Social = require("./webpack.s.common");
module.exports = [
  Common,
  Web.one,
  Web.two,
  Web.three,
  Bussiness.one,
  Social.one,
  Social.two,
  Social.three
];
