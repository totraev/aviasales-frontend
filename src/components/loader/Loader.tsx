import React, { SFC } from 'react';
import styles from './Loader.module.css';

const Loader: SFC = () => (
  <div className={styles.loader}>
    <div className={styles.lineWrap}>
      <span className={styles.line1}/>
      <span className={styles.line2}/>
      <span className={styles.line3}/>
      <span className={styles.line4}/>
      <span className={styles.line5}/>
    </div>
  </div>
);

export default Loader;
