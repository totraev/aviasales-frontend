import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/css/main.css';
import './assets/fonts/stylesheet.css';

import App from './containers/app/App';

import configureStore from './redux/createStore';
import { initialState} from './redux/rootReducer';
import rootSaga from './redux/sagas/rootSaga';

const store = configureStore(initialState);
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
