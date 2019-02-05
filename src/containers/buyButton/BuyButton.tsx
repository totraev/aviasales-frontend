import React, { SFC } from 'react'
import { connect } from 'react-redux'
import styles from './BuyButton.module.css'

import { priceWithSpaces } from '../../helpers/currencies'

import { IState } from '../../redux/rootReducer'
import { IBuyButtonProps, IStateProps } from './BuyButton.types'

export const BuyButton: SFC<IBuyButtonProps> = ({ currency, currencyPrice, price }) => (
  <button className={styles.btn}>
    Купить
    <br />
    за &thinsp;
    <span className={styles[currency]}>{priceWithSpaces(Math.round(price / currencyPrice))}</span>
  </button>
)

export default connect<IStateProps, {}, {}, IState>(({ filter: { currentCurr, currencyMap } }) => ({
  currency: currentCurr,
  currencyPrice: currencyMap[currentCurr],
}))(BuyButton)
