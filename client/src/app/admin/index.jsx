import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import HotSwappingIntlProvider from 'src/locale/HotSwappingIntlProvider';
import registerServiceWorker from 'src/registerServiceWorker';

// import './index.scss';
// import store from './store';
import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}

registerServiceWorker();
