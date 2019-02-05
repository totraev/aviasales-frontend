import React, { SFC } from 'react';
import styles from './CurrencyToggle.module.css';

const CurrencyToggle: SFC = () => (
  <div className={styles.toggle}>
    <button className={styles.btnActive}>RUB</button>
    <button className={styles.btnDefault}>USD</button>
    <button className={styles.btnDefault}>EUR</button>
  </div>
);

export default CurrencyToggle;
