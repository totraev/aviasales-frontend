import React, { SFC } from 'react';
import styles from './Ticket.module.css';

import BuyButton from '../../containers/buyButton/BuyButton';
import Seporator from './Seporator';

const Ticket: SFC = () => (
  <div className={styles.ticket}>
    <div className={styles.carrier}>
      <img
        className={styles.logo}
        srcSet={`
          ${require('./images/logo.png')},
          ${require('./images/logo@2x.png')} 2x,
          ${require('./images/logo@3x.png')}
        `}
        src={require('./images/logo@3x.png')}
        alt="TK"
      />

      <BuyButton />
    </div>

    <div className={styles.info}>
      <div className={styles.segment}>
        <span className={styles.time}>09:25</span>
        <Seporator />
        <span className={styles.time}>11:45</span>
      </div>

      <div className={styles.segment}>
        <span className={styles.origin}>VVO, Владивосток</span>
        <span className={styles.destination}>Тель-Авив, TLV</span>
      </div>

      <div className={styles.segment}>
        <span className={styles.date}>9 окт 2018, Пт</span>
        <span className={styles.date}>10 окт 2018, Пт</span>
      </div>
    </div>
  </div>
);

export default Ticket;
