import React from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// import registerServiceWorker from './registerServiceWorker';
// import { Provider } from 'react-redux';

import App from './App';
// import store from './store';

render(
  // <Provider store={store}>
  // </Provider>,
  <App />,
  document.getElementById('root')
);

OfflinePluginRuntime.install();
// registerServiceWorker(); // Runs register() as default function
