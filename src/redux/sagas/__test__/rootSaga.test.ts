import { all, call, put } from 'redux-saga/effects'

import { fetchData, Response } from '../rootSaga'

import fetchJson from '../../../api/fetchJson'

import { setCurrencies } from '../../modules/filter'
import { setTickets, startLoading, stopLoading } from '../../modules/tickets'

describe('Root saga', () => {
  it('Should fetch data', () => {
    const gen = fetchData()

    const tickets = [
      {
        arrival_date: '12.05.18',
        arrival_time: '22:10',
        carrier: 'TK',
        departure_date: '12.05.18',
        departure_time: '16:20',
        destination: 'TLV',
        destination_name: 'Тель-Авив',
        origin: 'VVO',
        origin_name: 'Владивосток',
        price: 12400,
        stops: 3,
      },
    ]
    const res: Response = [{ eur: 1, rub: 1, usd: 1 }, { tickets }]

    expect(gen.next().value).toEqual(put(startLoading()))
    expect(gen.next().value).toEqual(
      all([call(fetchJson, '/currency.json'), call(fetchJson, '/tickets.json')])
    )
    expect(gen.next(res).value).toEqual(
      put(setCurrencies({ eur: 1, rub: 1, usd: 1 }))
    )
    expect(gen.next().value).toEqual(put(setTickets(tickets)))
    expect(gen.next().value).toEqual(put(stopLoading()))
  })
})
