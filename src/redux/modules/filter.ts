import { Action } from 'redux';
import { createReducer } from 'redux-create-reducer';

/**
 * Constants
 */
export const SET_CURRENCIES = 'filter/SET_CURRENCIES';
export const SELECT_CURRENCY = 'filter/SELECT_CURRENCY';
export const TOGGLE_ALL_TRANSFERS = 'filter/TOGGLE_ALL_TRANSFERS';
export const TOGGLE_CURRENT_TRANSFER = 'filter/TOGGLE_CURRENT_TRANSFER';
export const TOGGLE_ONLY_CURRENT_TRANSFER = 'filter/TOGGLE_ONLY_CURRENT_TRANSFER';

/**
 * Types
 */
interface IAction<T, P> extends Action<T> {
  payload: P;
}
interface ICurrencyMap {
  eur: number;
  rub: number;
  usd: number;
}
type ICurrency = keyof ICurrencyMap;
type ITransfers = [boolean, boolean, boolean, boolean];
interface ICheckboxPayload {
  index: number;
  value: boolean;
}

type SetCurrenciesAction = IAction<typeof SET_CURRENCIES, ICurrencyMap>;
type SelectCurrencyAction = IAction<typeof SELECT_CURRENCY, ICurrency>;
type ToggleAllTransfersAction = IAction<typeof TOGGLE_ALL_TRANSFERS, boolean>;
type ToggleCurrentTransferAction = IAction<typeof TOGGLE_CURRENT_TRANSFER, ICheckboxPayload>;
type ToggleOnlyTransferAction = IAction<typeof TOGGLE_ONLY_CURRENT_TRANSFER, ICheckboxPayload>;
type FilterAction = SetCurrenciesAction
  | SelectCurrencyAction
  | ToggleAllTransfersAction
  | ToggleCurrentTransferAction
  | ToggleOnlyTransferAction;

export interface IFilterState {
  currencyMap: ICurrencyMap;
  currentCurr: ICurrency;
  transfers: ITransfers;
}

/**
 * Action creators
 */
export function setCurrencies(payload: ICurrencyMap): SetCurrenciesAction {
  return {
    payload,
    type: SET_CURRENCIES,
  };
}

export function selectCurrency(payload: ICurrency): SelectCurrencyAction {
  return {
    payload,
    type: SELECT_CURRENCY,
  };
}

export function toggleAllTransfers(payload: boolean): ToggleAllTransfersAction {
  return {
    payload,
    type: TOGGLE_ALL_TRANSFERS,
  };
}

export function toggleCurrentTransfer(stops: number, value: boolean): ToggleCurrentTransferAction {
  return {
    payload: {
      index: stops,
      value,
    },
    type: TOGGLE_CURRENT_TRANSFER,
  };
}

export function toggleOnlyCurrentTransfer(stops: number, value: boolean): ToggleOnlyTransferAction {
  return {
    payload: {
      index: stops,
      value,
    },
    type: TOGGLE_ONLY_CURRENT_TRANSFER,
  };
}

/**
 * Filter reducer
 */
export const initialState: IFilterState = {
  currencyMap: {
    eur: 1,
    rub: 1,
    usd: 1,
  },
  currentCurr: 'rub',
  transfers: [false, false, false, false],
};

export default createReducer<IFilterState, FilterAction>(initialState, {
  [SET_CURRENCIES]: (state: IFilterState, { payload: currencyMap }: SetCurrenciesAction): IFilterState => ({
    ...state,
    currencyMap,
  }),

  [SELECT_CURRENCY]: (state: IFilterState, { payload: currentCurr }: SelectCurrencyAction): IFilterState => ({
    ...state,
    currentCurr,
  }),

  [TOGGLE_ALL_TRANSFERS]: (state: IFilterState, { payload }: ToggleAllTransfersAction): IFilterState => ({
    ...state,
    transfers: state.transfers.map(() => payload) as ITransfers,
  }),

  [TOGGLE_CURRENT_TRANSFER]: (state: IFilterState, { payload }: ToggleCurrentTransferAction): IFilterState => ({
    ...state,
    transfers: state.transfers.map((v, i) => i === payload.index ? payload.value : v) as ITransfers,
  }),

  [TOGGLE_ONLY_CURRENT_TRANSFER]: (state: IFilterState, { payload }: ToggleCurrentTransferAction): IFilterState => ({
    ...state,
    transfers: state.transfers.map((_, i) => i === payload.index ? payload.value : false) as ITransfers,
  }),
});