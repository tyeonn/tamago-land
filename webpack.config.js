const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      
    ]
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", "*"]
  }
};
