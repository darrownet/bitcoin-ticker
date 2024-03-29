const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {resolve} = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'js/bundle.min.js',
    path: resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          },
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, '../../src/server/server.js'),
        to: resolve(__dirname, '../../build/server.js')
      },
      {
        from: resolve(__dirname, '../../src/server/data/challenge_data.json'),
        to: resolve(__dirname, '../../build/data/challenge_data.json')
      }
    ]),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../src/server/templates/index.html'),
      filename: './templates/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
