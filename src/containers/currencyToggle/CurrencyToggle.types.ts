import { MouseEventHandler } from 'react';

export type Currency = 'eur' | 'rub' | 'usd';

export interface ICurrencyToggleProps {
  currency: Currency;
  onChange: (currency: Currency) => void;
}

export interface IHandlers {
  handleBtnClassName: (currency: Currency) => string;
  handleClick: (currency: Currency) => MouseEventHandler<HTMLButtonElement>;
}

export interface IInnerProps extends ICurrencyToggleProps, IHandlers {}
