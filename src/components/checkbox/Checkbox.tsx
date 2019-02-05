import React, { SFC } from 'react';
import styles from './Checkbox.module.css';

const Checkbox: SFC = () => (
  <div className={styles.wrap}>
    <label className={styles.label}>
      <input className={styles.checkbox} type="checkbox"/>
      <span className={styles.faceChecked}/>
      1 пересадка
    </label>

    <div className={styles.append}>
      <button className={styles.uncheckOther}>ТОЛЬКО</button>
    </div>
  </div>
);

export default Checkbox;
