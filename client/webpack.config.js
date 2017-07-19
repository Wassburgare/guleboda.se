const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  entry: {
    index: [
      'whatwg-fetch',
      'react-hot-loader/patch',
      './src/app/main/index.jsx',
    ],
    admin: [
      './src/app/admin/index.jsx',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      MainApp: path.resolve(__dirname, 'src/app/main'),
      AdminApp: path.resolve(__dirname, 'src/app/admin'),
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
          },
          {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new InterpolateHtmlPlugin({ PUBLIC_URL: '' }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['index'],
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['admin'],
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'admin/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
    proxy: {
      '/bookings': 'http://localhost:3001',
    },
    contentBase: path.resolve(__dirname, 'public/'),
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false,
    },
  },
};
