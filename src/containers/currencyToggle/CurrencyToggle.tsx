import React, { SFC } from 'react';
import { connect } from 'react-redux';
import styles from './CurrencyToggle.module.css';

import classNames from 'classnames';
import { compose, withHandlers } from 'recompose';

import { IState } from '../../redux/rootReducer';
import {
  ICurrencyToggleProps,
  IDispatchProps,
  IHandlers,
  IInnerProps,
  IStateProps,
} from './CurrencyToggle.types';

import { selectCurrency } from '../../redux/modules/filter';

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

export default compose<IInnerProps, {}>(
  connect<IStateProps, IDispatchProps, {}, IState>(
    (state) => ({ currency: state.filter.currentCurr }),
    { selectCurrency },
  ),
  withHandlers<ICurrencyToggleProps, IHandlers>({
    handleBtnClassName: ({ currency: activeCurr }) => (curr) => classNames({
      [styles.btnActive]: activeCurr === curr,
      [styles.btnDefault]: activeCurr !== curr,
    }),
    handleClick: ({ selectCurrency: changeCurrency }) => (currency) => () => changeCurrency(currency),
  }),
)(CurrencyToggle);
