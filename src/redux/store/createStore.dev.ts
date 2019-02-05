import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createImmutableStateMiddleware from 'redux-immutable-state-invariant';
import loggerMiddleware from 'redux-logger';
import createSagaMiddleware, { END, Saga, Task } from 'redux-saga';

import rootReducer, { IState } from '../rootReducer';

export interface IExt {
  runSaga?: (rootSaga: Saga) => Task;
  close?: () => void;
}

export interface IStore extends Store, IExt {}

function configureDevStore(initialState: IState): IStore {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore<IState, AnyAction, IExt, {}>(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        loggerMiddleware,
        createImmutableStateMiddleware(),
      ),
    ),
  );

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextRootReducer = require('../rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

export default configureDevStore;
