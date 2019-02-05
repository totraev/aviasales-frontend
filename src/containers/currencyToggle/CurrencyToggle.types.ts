import { MouseEventHandler } from "react";
import { selectCurrency } from "../../redux/modules/filter";

export type Currency = "eur" | "rub" | "usd";

export interface IStateProps {
  currency: Currency;
}

export interface IDispatchProps {
  selectCurrency: typeof selectCurrency;
}

export interface ICurrencyToggleProps extends IStateProps, IDispatchProps {}

export interface IHandlers {
  handleBtnClassName: (currency: Currency) => string;
  handleClick: (currency: Currency) => MouseEventHandler<HTMLButtonElement>;
}

export interface IInnerProps extends ICurrencyToggleProps, IHandlers {}
