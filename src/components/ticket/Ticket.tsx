import React, { SFC } from 'react';
import styles from './Ticket.module.css';

import BuyButton from '../../containers/buyButton/BuyButton';
import Seporator from './Seporator';

import { ITicketProps } from './Ticket.types';

const Ticket: SFC<ITicketProps> = ({ ticket }) => (
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

      <BuyButton currency="rub" price={21300}/>
    </div>

    <div className={styles.info}>
      <div className={styles.segment}>
        <span className={styles.time}>{ticket.departureTime}</span>
        <Seporator />
        <span className={styles.time}>{ticket.arrivalTime}</span>
      </div>

      <div className={styles.segment}>
        <span className={styles.origin}>
          {ticket.origin}, {ticket.originName}
        </span>
        <span className={styles.destination}>
          {ticket.destinationName}, {ticket.destination}
        </span>
      </div>

      <div className={styles.segment}>
        <span className={styles.date}>{ticket.departureDate}</span>
        <span className={styles.date}>{ticket.arrivalDate}</span>
      </div>
    </div>
  </div>
);

export default Ticket;
