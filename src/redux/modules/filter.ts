import { Action } from "redux";
import { createReducer } from "redux-create-reducer";

/**
 * Constants
 */
export const SET_CURRENCIES = "filter/SET_CURRENCIES";
export const SELECT_CURRENCY = "filter/SELECT_CURRENCY";
export const TOGGLE_ALL_TRANSFERS = "filter/TOGGLE_ALL_TRANSFERS";
export const TOGGLE_CURRENT_TRANSFER = "filter/TOGGLE_CURRENT_TRANSFER";
export const TOGGLE_ONLY_CURRENT_TRANSFER =
  "filter/TOGGLE_ONLY_CURRENT_TRANSFER";

/**
 * Types
 */
export interface IAction<T, P> extends Action<T> {
  payload: P;
}
export interface ICurrencyMap {
  eur: number;
  rub: number;
  usd: number;
}
export type Currency = keyof ICurrencyMap;
export type ITransfers = [boolean, boolean, boolean, boolean];
export interface ICheckboxPayload {
  index: number;
  value: boolean;
}

export type SetCurrenciesAction = IAction<typeof SET_CURRENCIES, ICurrencyMap>;
export type SelectCurrencyAction = IAction<typeof SELECT_CURRENCY, Currency>;
export type ToggleAllTransfersAction = IAction<
  typeof TOGGLE_ALL_TRANSFERS,
  boolean
>;
export type ToggleCurrentTransferAction = IAction<
  typeof TOGGLE_CURRENT_TRANSFER,
  ICheckboxPayload
>;
export type ToggleOnlyTransferAction = IAction<
  typeof TOGGLE_ONLY_CURRENT_TRANSFER,
  ICheckboxPayload
>;
export type FilterAction =
  | SetCurrenciesAction
  | SelectCurrencyAction
  | ToggleAllTransfersAction
  | ToggleCurrentTransferAction
  | ToggleOnlyTransferAction;

export interface IFilterState {
  currencyMap: ICurrencyMap;
  currentCurr: Currency;
  transfers: ITransfers;
}

/**
 * Action creators
 */
export function setCurrencies(payload: ICurrencyMap): SetCurrenciesAction {
  return {
    payload,
    type: SET_CURRENCIES
  };
}

export function selectCurrency(payload: Currency): SelectCurrencyAction {
  return {
    payload,
    type: SELECT_CURRENCY
  };
}

export function toggleAllCheckboxes(
  payload: boolean
): ToggleAllTransfersAction {
  return {
    payload,
    type: TOGGLE_ALL_TRANSFERS
  };
}

export function toggleCurrentCheckbox(
  stops: number,
  value: boolean
): ToggleCurrentTransferAction {
  return {
    payload: {
      index: stops,
      value
    },
    type: TOGGLE_CURRENT_TRANSFER
  };
}

export function toggleOnlyCurrentCheckbox(
  stops: number,
  value: boolean
): ToggleOnlyTransferAction {
  return {
    payload: {
      index: stops,
      value
    },
    type: TOGGLE_ONLY_CURRENT_TRANSFER
  };
}

/**
 * Filter reducer
 */
export const initialState: IFilterState = {
  currencyMap: {
    eur: 1,
    rub: 1,
    usd: 1
  },
  currentCurr: "rub",
  transfers: [true, true, true, true]
};

export default createReducer<IFilterState, FilterAction>(initialState, {
  [SET_CURRENCIES]: (
    state: IFilterState,
    { payload: currencyMap }: SetCurrenciesAction
  ): IFilterState => ({
    ...state,
    currencyMap
  }),

  [SELECT_CURRENCY]: (
    state: IFilterState,
    { payload: currentCurr }: SelectCurrencyAction
  ): IFilterState => ({
    ...state,
    currentCurr
  }),

  [TOGGLE_ALL_TRANSFERS]: (
    state: IFilterState,
    { payload }: ToggleAllTransfersAction
  ): IFilterState => ({
    ...state,
    transfers: state.transfers.map(() => payload) as ITransfers
  }),

  [TOGGLE_CURRENT_TRANSFER]: (
    state: IFilterState,
    { payload }: ToggleCurrentTransferAction
  ): IFilterState => ({
    ...state,
    transfers: state.transfers.map((v, i) =>
      i === payload.index ? payload.value : v
    ) as ITransfers
  }),

  [TOGGLE_ONLY_CURRENT_TRANSFER]: (
    state: IFilterState,
    { payload }: ToggleCurrentTransferAction
  ): IFilterState => ({
    ...state,
    transfers: state.transfers.map((_, i) =>
      i === payload.index ? payload.value : false
    ) as ITransfers
  })
});
