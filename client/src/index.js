import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.scss';
import HotSwappingIntlProvider from './HotSwappingIntlProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <HotSwappingIntlProvider>
      <App />
    </HotSwappingIntlProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
