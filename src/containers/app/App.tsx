import React, { Component } from 'react';
import styles from './App.module.css';

import { hot } from 'react-hot-loader';

class App extends Component {
  public render() {
    return (
      <div className={styles.app}>Test</div>
    );
  }
}

export default hot(module)(App);
