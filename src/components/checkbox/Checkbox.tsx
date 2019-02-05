import React, { SFC } from 'react'
import styles from './Checkbox.module.css'

import classNames from 'classnames'

import { stopsMessage } from '../../helpers/stops'
import { ICheckboxProps } from './Checkbox.types'

const Checkbox: SFC<ICheckboxProps> = ({ id, stops, value, onChange, onUncheckOther }) => (
  <div className={styles.wrap}>
    <label className={styles.label} htmlFor={id}>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span
        className={classNames({
          [styles.face]: !value,
          [styles.faceChecked]: value,
        })}
      />

      {stopsMessage(stops)}
    </label>

    {onUncheckOther !== undefined && (
      <div className={styles.append}>
        <button className={styles.uncheckOther} onClick={onUncheckOther}>
          ТОЛЬКО
        </button>
      </div>
    )}
  </div>
)

export default Checkbox
