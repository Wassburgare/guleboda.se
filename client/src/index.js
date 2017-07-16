import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from './store';

import './index.scss';
import HotSwappingIntlProvider from './HotSwappingIntlProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
  module.hot.accept('./App', () => { render(App); });
}

registerServiceWorker();
