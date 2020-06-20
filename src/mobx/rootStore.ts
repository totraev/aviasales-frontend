import { FilterStore } from './filterStore'
import { TicketsStore } from './ticketsStore'

class RootStore {
  public filterStore = new FilterStore()
  public ticketsStore = new TicketsStore(this.filterStore)
}
