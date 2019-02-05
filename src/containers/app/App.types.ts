import { ActionCreator, AnyAction } from "redux";

export interface IProps {
  fetchTickets: ActionCreator<AnyAction>;
}

export interface IDispatchProps {
  fetchTickets: ActionCreator<AnyAction>;
}
