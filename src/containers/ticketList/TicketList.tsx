import React, { SFC } from 'react';
import styles from './TicketList.module.css';

import Ticket from '../../components/ticket/Ticket';

const TicketList: SFC = () => (
  <div className={styles.list}>
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
  </div>
);

export default TicketList;
