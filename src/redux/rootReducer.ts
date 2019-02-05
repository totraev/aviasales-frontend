import { combineReducers } from 'redux'

import filterReducer, { IFilterState, initialState as filter } from './modules/filter'
import ticketsReducer, { initialState as tickets, ITicketsState } from './modules/tickets'

export interface IState {
  filter: IFilterState
  tickets: ITicketsState
}

export const initialState: IState = {
  filter,
  tickets,
}

export default combineReducers<IState>({
  filter: filterReducer,
  tickets: ticketsReducer,
})
