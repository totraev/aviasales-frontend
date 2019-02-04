import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app/App';
import configureStore from './redux/createStore';
import rootSaga from './redux/sagas/rootSaga';

const store = configureStore({});
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
