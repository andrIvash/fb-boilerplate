
var webpack = require('webpack');
var path = require('path');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

var config = {
  context: __dirname + "/source",
  devtool: 'source-map',
  entry: {
    app: ['./js/app.js', './js/second.js']
  },
  output: {
    //publicPath: '/',
    filename: 'assets/js/[name].bundle.js',
    path: __dirname + "./build"
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common",
    //   filename: "assets/scripts/common.js",
    //   minChunks: 2
    // }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true 
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new FaviconsWebpackPlugin('./favicon.png')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /(node_modules|bower_components)/,
        loader: "eslint-loader",
        options: {
            fix: true
        }
      }
    ]
  }
};
module.exports = config;


