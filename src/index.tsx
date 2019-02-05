import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'whatwg-fetch'
import './assets/css/main.css'
import './assets/fonts/stylesheet.css'

import App from './containers/app/App'

import { initialState } from './redux/rootReducer'
import rootSaga from './redux/sagas/rootSaga'

// tslint:disable-next-line
const store = require('./redux/store/createStore').default(initialState)
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
