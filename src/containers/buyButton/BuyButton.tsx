import React, { SFC } from 'react';
import styles from './BuyButton.module.css';

import { currencySign } from '../../helpers/currencies';

import { IBuyButtonProps } from './BuyButton.types';

export const BuyButton: SFC<IBuyButtonProps> = ({ currency, price }) => (
  <button className={styles.btn}>
    Купить
    <br/>
    за {price} ​{currencySign(currency)}
  </button>
);

export default BuyButton;
