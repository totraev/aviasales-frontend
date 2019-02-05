import React, { SFC } from 'react'
import styles from './Seporator.module.css'

import { stopsMessage } from '../../helpers/stops'

import { ISeporatorProps } from './Seporator.types'

const Seporator: SFC<ISeporatorProps> = ({ stops }) => (
  <div className={styles.seporator}>
    <div className={styles.stops}>{stopsMessage(stops)}</div>

    <div className={styles.hr}>
      <div className={styles.line} />
      <span className={styles.airplane} />
    </div>
  </div>
)

export default Seporator
