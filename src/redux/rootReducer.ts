import { combineReducers } from 'redux';

import filterReducer, { IFilterState } from './modules/filter';
import ticketsReducer, { ITicketsState } from './modules/tickets';

export interface IState {
  filter: IFilterState;
  tickets: ITicketsState;
}

export default combineReducers<IState>({
  filter: filterReducer,
  tickets: ticketsReducer,
});
