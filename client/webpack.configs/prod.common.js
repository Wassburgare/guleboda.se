const path = require('path');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'static/css/[name].[contenthash].css',
  publicPath: '../../../',
});

module.exports = {
  bail: true,
  devtool: 'source-map',
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
              publicPath: '../../../',
            },
          },
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '..', 'src'),
            options: {
              compact: true,
            },
          },
          {
            test: /\.s?css$/,
            use: extractSass.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: true,
                  },
                },
                {
                  loader: 'sass-loader',
                },
              ],
            }),
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
              publicPath: '../../../',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new InterpolateHtmlPlugin({ PUBLIC_URL: '' }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
        drop_console: true,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
    extractSass,
    new CopyWebpackPlugin([{ from: 'public', to: '', ignore: 'public/*.html' }]),
  ],
};
