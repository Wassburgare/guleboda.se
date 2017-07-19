import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import HotSwappingIntlProvider from 'src/translations/HotSwappingIntlProvider';
import registerServiceWorker from 'src/registerServiceWorker';

import './index.scss';
import store from './store';
import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HotSwappingIntlProvider>
        <AppContainer>
          <Component />
        </AppContainer>
      </HotSwappingIntlProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('MainApp/App', () => { render(App); });
}

registerServiceWorker();
