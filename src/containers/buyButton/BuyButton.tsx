import React, { SFC } from 'react';
import styles from './BuyButton.module.css';

const BuyButton: SFC = () => (
  <button className={styles.btn}>
    Купить
    <br/>
    за 21 032 ​₽
  </button>
);

export default BuyButton;
