import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider, addLocaleData } from 'react-intl';
import sv from 'react-intl/locale-data/sv';
import en from 'react-intl/locale-data/en';
import svMessages from './translations/locales/sv.json';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...sv, ...en]);

ReactDOM.render(
  <IntlProvider locale={'sv'} messages={svMessages}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
