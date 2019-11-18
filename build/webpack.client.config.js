const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, "../src/entry-client.js")
  },
  output: {
    filename: "js/[name].[hash:7].js",
    path: path.resolve(__dirname, "../dist/client")
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../public/index.html')
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../dist/client")]
    }),
    new VueSSRClientPlugin()
  ]
});
