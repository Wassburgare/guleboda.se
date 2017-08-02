const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.configs/prod.common.js');
const adminConfig = require('./webpack.configs/prod.admin.js');
const mainConfig = require('./webpack.configs/prod.main.js');

module.exports = [
  webpackMerge(commonConfig, mainConfig),
  webpackMerge(commonConfig, adminConfig),
];
