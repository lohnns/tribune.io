const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const sourceDir = path.join(__dirname, "src");
const publicDir = path.join(__dirname, "public");
const buildDir = path.join(__dirname, "build");

module.exports = {
  entry: {
    app: path.resolve(sourceDir, "index.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: buildDir
  },
  plugins: [
    new CleanWebpackPlugin([buildDir]),
    new HtmlWebpackPlugin({
      template: path.resolve(publicDir, "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
