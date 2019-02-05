import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import fetchJson from '../../api/fetchJson'

import { ICurrencyMap, setCurrencies } from '../modules/filter'
import {
  FETCH_TICKETS,
  ITicket,
  setTickets,
  startLoading,
  stopLoading,
} from '../modules/tickets'

export type Response = [ICurrencyMap, { tickets: ITicket[] }]

export function* fetchData() {
  try {
    yield put(startLoading())

    const [currencies, { tickets }]: Response = yield all([
      call(fetchJson, '/currency.json'),
      call(fetchJson, '/tickets.json'),
    ])

    yield put(setCurrencies(currencies))
    yield put(setTickets(tickets))
    yield put(stopLoading())
  } catch (e) {
    // tslint:disable-next-line
    yield call(console.log, e)
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_TICKETS, fetchData)
}

export default function* rootSaga() {
  yield all([fork(watchFetchData)])
}
