import React, { SFC } from 'react';
import styles from './Filter.module.css';

import CurrencyToggle from '../../containers/currencyToggle/CurrencyToggle';
import StopsFilter from '../../containers/stopsFilter/StopsFilter';

const Filter: SFC = () => (
  <div className={styles.filter}>
    <h3 className={styles.title}>ВАЛЮТА</h3>
    <CurrencyToggle
      currency="usd"
      onChange={null}
    />

    <h3 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>

    <StopsFilter stopsList={[true, true, true, true]}/>
  </div>
);

export default Filter;
