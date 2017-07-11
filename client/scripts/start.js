const express = require('express');
const webpack = require('webpack');
const acceptLanguageParser = require('accept-language-parser');
const connectInject = require('connect-inject');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const httpProxyMiddleware = require('http-proxy-middleware');

const webpackConfig = require('../webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use((req, res, next) => {
  const acceptLanguage = acceptLanguageParser.parse(req.headers['accept-language']);
  connectInject({
    snippet: `<script>ACCEPT_LANGUAGE = '${JSON.stringify(acceptLanguage)}'</script>`,
    rules: [{
      match: /<script[\s\S]*?>[\s\S]*?<\/script>/,
      fn: (w, s) => s + w,
    }],
  })(req, res, next);
})
.use(webpackDevMiddleware(
  compiler,
  {
    noInfo: true,
    publicPath: '',
    stats: { colors: true },
  } // eslint-disable-line comma-dangle
))
.use(webpackHotMiddleWare(compiler))
.use('/bookings', httpProxyMiddleware({
  target: 'http://localhost:3001',
}));

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Dev server running on port: ${port}`);
});
