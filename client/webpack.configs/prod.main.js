const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      'whatwg-fetch',
      './src/app/main/index.jsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build/guleboda.se'),
  },
  resolve: {
    alias: {
      MainApp: path.resolve(__dirname, '..', 'src/app/main'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['index'],
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
};
