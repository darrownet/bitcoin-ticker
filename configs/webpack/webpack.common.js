const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, '../../src/client'),
  entry: ['./index.js', './styles/styles.scss'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{
              outputPath: './images',
              publicPath: '/images',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  performance: {
    hints: false,
  },
};
