import { observable, action } from 'mobx'

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

class TicketsStore {
  @observable public loading = true
  @observable public tickets: ITicket[] = []

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
