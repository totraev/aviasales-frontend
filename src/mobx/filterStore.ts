import { observable, action } from 'mobx'

export interface ICurrencyMap {
  eur: number
  rub: number
  usd: number
}

export class FilterStore {
  @observable public currencyMap = new Map<string, number>()
  @observable public currentCurr = 'rub'
  @observable public transfers = [true, true, true, true]

  @action public setCurrencies(currencies: ICurrencyMap) {
    this.currencyMap = new Map(Object.entries(currencies))
  }

  @action public selectCurrency(curr: string) {
    this.currentCurr = curr
  }

  @action public toggleAllCheckboxes(payload: boolean) {
    this.transfers = this.transfers.map(t => !t)
  }

  @action public toggleCurrentCheckbox(stops: number, value: boolean) {
    this.transfers[stops] = value
  }

  @action public toggleOnlyCurrentCheckbox(stops: number, value: boolean) {
    this.transfers = this.transfers.map((t, i) => (i === stops ? value : false))
  }
}
