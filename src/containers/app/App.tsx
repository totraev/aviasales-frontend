import React, { Component } from "react";
import styles from "./App.module.css";

import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { compose } from "recompose";

import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";
import TicketList from "../ticketList/TicketList";

import { fetchTickets } from "../../redux/modules/tickets";
import { IDispatchProps, IProps } from "./App.types";

export class App extends Component<IProps> {
  public componentDidMount() {
    this.props.fetchTickets();
  }

  public render() {
    return (
      <div className={styles.container}>
        <Header />

        <div className={styles.contentWrap}>
          <div className={styles.sidebar}>
            <Filter />
          </div>

          <div className={styles.content}>
            <TicketList />
          </div>
        </div>
      </div>
    );
  }
}

export default compose<IDispatchProps, {}>(
  hot(module),
  connect<{}, IDispatchProps>(
    null,
    { fetchTickets }
  )
)(App);
