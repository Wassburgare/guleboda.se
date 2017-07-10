const express = require('express');
const webpack = require('webpack');
const path = require('path');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const httpProxyMiddleware = require('http-proxy-middleware');

const webpackConfig = require('../webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(
  compiler,
  {
    noInfo: true,
    publicPath: '',
    stats: { colors: true },
  } // eslint-disable-line comma-dangle
));

app.use(webpackHotMiddleWare(compiler));

app.use('/', httpProxyMiddleware({
  target: 'http://localhost:3001',
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Dev server running on port: ${port}`);
});
