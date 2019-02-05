import React, { SFC } from "react";
import styles from "./Ticket.module.css";

import BuyButton from "../../containers/buyButton/BuyButton";
import Seporator from "./Seporator";

import { formatDate } from "../../helpers/date";

import { ITicketProps } from "./Ticket.types";

const Ticket: SFC<ITicketProps> = ({ ticket }) => (
  <div className={styles.ticket}>
    <div className={styles.carrier}>
      <img
        className={styles.logo}
        srcSet={`
          ${require("./images/logo.png")},
          ${require("./images/logo@2x.png")} 2x,
          ${require("./images/logo@3x.png")}
        `}
        src={require("./images/logo@3x.png")}
        alt="TK"
      />

      <BuyButton price={ticket.price} />
    </div>

    <div className={styles.info}>
      <div className={styles.segment}>
        <span className={styles.time}>{ticket.departure_time}</span>
        <Seporator stops={ticket.stops} />
        <span className={styles.time}>{ticket.arrival_time}</span>
      </div>

      <div className={styles.segment}>
        <span className={styles.origin}>
          {ticket.origin}, {ticket.origin_name}
        </span>
        <span className={styles.destination}>
          {ticket.destination_name}, {ticket.destination}
        </span>
      </div>

      <div className={styles.segment}>
        <span className={styles.date}>{formatDate(ticket.departure_date)}</span>
        <span className={styles.date}>{formatDate(ticket.arrival_date)}</span>
      </div>
    </div>
  </div>
);

export default Ticket;
