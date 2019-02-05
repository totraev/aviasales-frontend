import { Currency } from '../../redux/modules/filter';

export interface IStateProps {
  currency: Currency;
  currencyPrice: number;
}

export interface IOwnProps {
  price: number;
}

export interface IBuyButtonProps extends IStateProps, IOwnProps {}
