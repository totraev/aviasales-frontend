import { observable, action, computed } from 'mobx'

import { FilterStore } from './filterStore'

export interface ITicket {
  origin: string
  origin_name: string
  destination: string
  destination_name: string
  departure_date: string
  departure_time: string
  arrival_date: string
  arrival_time: string
  carrier: string
  stops: number
  price: number
}

export class TicketsStore {
  @observable public loading = true
  @observable public tickets: ITicket[] = []

  constructor(private filterStore: FilterStore) {}

  @computed private get sortedTickets() {
    return this.tickets.slice().sort((a, b) => a.price - b.price)
  }

  @computed get filteredTickets() {
    return this.sortedTickets.filter(ticket => this.filterStore.transfers[ticket.stops])
  }

  @action fetchTickets() {}

  @action startLoading() {
    this.loading = true
  }

  @action stopLoading() {
    this.loading = false
  }

  @action setTickets(tickets: ITicket[]) {
    this.tickets = tickets
  }
}
