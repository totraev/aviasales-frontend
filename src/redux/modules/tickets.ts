import { Action } from 'redux';
import { createReducer } from 'redux-create-reducer';

/**
 * Constants
 */
export const FETCH_TICKETS = 'tickets/FETCH_TICKETS';
export const START_LOADING = 'tickets/START_LOADING';
export const STOP_LOADING = 'tickets/STOP_LOADING';
export const SET_TICKETS = 'tickets/SET_TICKETS';

/**
 * Types
 */

export interface IAction<T, P> extends Action<T> {
  payload: P;
}
export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export type FetchTicketsAction = Action<typeof FETCH_TICKETS>;
export type StartLoadingAction = Action<typeof START_LOADING>;
export type StopLoadingAction = Action<typeof STOP_LOADING>;
export type SetTicketsAction = IAction<typeof SET_TICKETS, ITicket[]>;
export type TicketAction = StartLoadingAction | StopLoadingAction | SetTicketsAction;

export interface ITicketsState {
  tickets: ITicket[];
  loading: boolean;
}

/**
 * Action creators
 */
export function fetchTickets(): FetchTicketsAction {
  return {
    type: FETCH_TICKETS,
  };
}

export function startLoading(): StartLoadingAction {
  return {
    type: START_LOADING,
  };
}

export function stopLoading(): StopLoadingAction {
  return {
    type: STOP_LOADING,
  };
}

export function setTickets(payload: ITicket[]): SetTicketsAction {
  return {
    payload,
    type: SET_TICKETS,
  };
}

 /**
  * Tickets reducer
  */
export const initialState: ITicketsState = {
  loading: true,
  tickets: [],
};

export default createReducer<ITicketsState, TicketAction>(initialState, {
  [START_LOADING]: (state: ITicketsState): ITicketsState => ({ ...state, loading: true }),

  [STOP_LOADING]: (state: ITicketsState): ITicketsState => ({ ...state, loading: false }),

  [SET_TICKETS]: (state: ITicketsState, { payload: tickets }: SetTicketsAction): ITicketsState => ({
    ...state,
    tickets,
  }),
});
