import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware, { END, Saga, Task } from 'redux-saga';

import rootReducer, { IState } from '../rootReducer';

export interface IExt {
  runSaga?: (rootSaga: Saga) => Task;
  close?: () => void;
}

export interface IStore extends Store, IExt {}

function configureProdStore(initialState: any): IStore {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore<IState, AnyAction, IExt, {}>(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

export default configureProdStore;
