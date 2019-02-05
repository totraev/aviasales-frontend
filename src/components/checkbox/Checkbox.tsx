import React, { SFC } from 'react';
import styles from './Checkbox.module.css';

import { stopsMessage } from '../../helpers/stops';
import { ICheckboxProps } from './Checkbox.types';

const Checkbox: SFC<ICheckboxProps> = ({
  id,
  stops,
  value,
  onClick,
  onUncheckOther,
}) => (
  <div className={styles.wrap}>
    <label className={styles.label} htmlFor={id}>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={value}
        onClick={onClick}
      />
      <span className={styles.faceChecked}/>

      {stopsMessage(stops)}
    </label>

    <div className={styles.append}>
      <button
        className={styles.uncheckOther}
        onClick={onUncheckOther}
      >
        ТОЛЬКО
      </button>
    </div>
  </div>
);

export default Checkbox;
