import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider, addLocaleData } from 'react-intl';
import sv from 'react-intl/locale-data/sv';
import en from 'react-intl/locale-data/en';
import localeMessages from './translations/locales/localeMessages';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...sv, ...en]);

const language = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  navigator.browserLanguage ||
  navigator.systemLanguage;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeMessages[language] || localeMessages[languageWithoutRegionCode] || localeMessages.en;

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
