const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_DIRECTORY = path.join(__dirname, ".");
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, "./src");

const config = {
  entry: [path.resolve(__dirname, "./src/index.js")],
  output: {
    filename: "messenger.js"
  },
  mode: "development",
  resolve: {
    modules: [
      path.resolve(__dirname, "./node_modules"),
      path.resolve(__dirname, "./src/index.js")
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIRECTORY, "index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(SRC_DIRECTORY, "assets"),
        to: path.join(ROOT_DIRECTORY, "build")
      }
    ])
    // new webpack.ProvidePlugin({
    //   React: "React",
    //   react: "React",
    //   "window.react": "React",
    //   "window.React": "React"
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  }
};

module.exports = config;
