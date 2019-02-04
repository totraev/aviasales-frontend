import React, { Component } from 'react';
import styles from './App.module.css';

import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { fetchTickets } from '../../redux/modules/tickets';
import { IDispatchProps, IProps } from './App.types';

class App extends Component<IProps> {
  public componentDidMount() {
    this.props.fetchTickets();
  }

  public render() {
    return (
      <div className={styles.app}>Test 2</div>
    );
  }
}

export default compose<IDispatchProps, {}>(
  hot(module),
  connect<{}, IDispatchProps>(null, { fetchTickets }),
)(App);
