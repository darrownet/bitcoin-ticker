const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

const common = require('./webpack.common');
const devPort = 3005;

module.exports = merge(common, {
  mode: 'development',
  target: "web",
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server'
  ],
  devServer: {
    contentBase: resolve(__dirname, '../../src/client'),
    port: devPort,
    historyApiFallback: true,
    hot: true,
    https: false,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}}
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../src/server/templates/index.html'),
      inject: true
    })
  ]
});
