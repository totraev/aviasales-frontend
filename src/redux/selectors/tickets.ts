import { createSelector } from 'reselect';

import { ITransfers } from '../modules/filter';
import { ITicket } from '../modules/tickets';
import { IState } from '../rootReducer';

const ticketsSelector = (state: IState): ITicket[] => state.tickets.tickets;
const filterSelector = (state: IState): ITransfers => state.filter.transfers;

export const sortedTicketsSelector = createSelector<IState, ITicket[], ITicket[]>(
  ticketsSelector,
  (tickets) => tickets.slice().sort((a, b) => a.price - b.price),
);

export const filteredTicketsSelector = createSelector<IState, ITicket[], ITransfers, ITicket[]>(
  sortedTicketsSelector,
  filterSelector,
  (tickets, filter) => tickets.filter((ticket) => filter[ticket.stops]),
);
