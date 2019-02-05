import React, { SFC } from 'react';
import styles from './TicketList.module.css';

import Ticket from '../../components/ticket/Ticket';

const ticket = {
  arrivalDate: '12.05.18',
  arrivalTime: '23:50',
  carrier: 'S7',
  departureDate: '12.05.18',
  departureTime: '17:20',
  destination: 'TLV',
  destinationName: 'Тель-Авив',
  origin: 'VVO',
  originName: 'Владивосток',
  price: 13100,
  stops: 1,
};

const TicketList: SFC = () => (
  <div className={styles.list}>
    <Ticket ticket={ticket}/>
    <Ticket ticket={ticket}/>
    <Ticket ticket={ticket}/>
    <Ticket ticket={ticket}/>
    <Ticket ticket={ticket}/>
    <Ticket ticket={ticket}/>
  </div>
);

export default TicketList;
