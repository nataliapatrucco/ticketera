module.exports = {
  mode: "development",
  entry: "./src/app/index.js",
  output: {
    path: __dirname + "/src/public",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"],
          plugins: ["react-hot-loader/babel"]
        }
      }
    ]
  },
  devtool: "source-map"
};
