var resolve = require("path").resolve;
var webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.md$/,
        use: ['vue-loader', {
          loader: resolve(__dirname, "../index.js"),
          options: {wrapper: 'div', raw: true}
        }],
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
