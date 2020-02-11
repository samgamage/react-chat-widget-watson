const config = require("./webpack.config.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

config.mode = "production";

config.plugins = config.plugins.concat([
  new UglifyJsPlugin({
    extractComments: true,
    uglifyOptions: {
      compress: true
    }
  })
]);

module.exports = config;
