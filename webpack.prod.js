const production_items = require("./adist/webpack.prod");
module.exports = [
  production_items.general,
  production_items.prod,
  production_items.dev_bussines,
  production_items.dev_social,
  production_items.dev_social_one,
  production_items.dev_social_two,
  production_items.dev_web,
  production_items.dev_web_one,
  production_items.dev_web_two,
];
