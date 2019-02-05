import React, { SFC } from 'react';
import styles from './Seporator.module.css';

const Seporator: SFC = () => (
  <div className={styles.seporator}>
    <div className={styles.stops}>1 ПЕРЕСАДКА</div>

    <div className={styles.hr}>
      <div className={styles.line}/>
      <span className={styles.airplane}/>
    </div>
  </div>
);

export default Seporator;
