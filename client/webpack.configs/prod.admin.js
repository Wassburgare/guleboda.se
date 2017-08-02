const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      'whatwg-fetch',
      './src/app/admin/index.jsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build/admin.guleboda.se'),
  },
  resolve: {
    alias: {
      AdminApp: path.resolve(__dirname, '..', 'src/app/admin'),
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
