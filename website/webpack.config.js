const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const sourceDir = path.join(__dirname, "src");
const publicDir = path.join(__dirname, "public");
const buildDir = path.join(__dirname, "build");

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(publicDir, "index.html")
});
const cleanPlugin = new CleanWebpackPlugin([buildDir]);

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(sourceDir, "index.js")]
  },
  output: {
    filename: "[name].bundle.js",
    path: buildDir
  },
  plugins: [htmlPlugin, cleanPlugin],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
