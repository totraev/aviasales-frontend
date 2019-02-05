import React, { SFC } from 'react';
import styles from './CurrencyToggle.module.css';

import classNames from 'classnames';
import { withHandlers } from 'recompose';

import { ICurrencyToggleProps, IHandlers, IInnerProps } from './CurrencyToggle.types';

export const CurrencyToggle: SFC<IInnerProps> = ({ handleBtnClassName, handleClick }) => (
  <div className={styles.toggle}>
    <button
      className={handleBtnClassName('rub')}
      onClick={handleClick('rub')}
      children="RUB"
    />
    <button
      className={handleBtnClassName('usd')}
      onClick={handleClick('usd')}
      children="USD"
    />
    <button
      className={handleBtnClassName('eur')}
      onClick={handleClick('eur')}
      children="EUR"
    />
  </div>
);

export default withHandlers<ICurrencyToggleProps, IHandlers>({
  handleBtnClassName: ({ currency: activeCurr }) => (curr) => classNames({
    [styles.btnActive]: activeCurr === curr,
    [styles.btnDefault]: activeCurr !== curr,
  }),
  handleClick: ({ onChange }) => (currency) => () => onChange(currency),
})(CurrencyToggle);
