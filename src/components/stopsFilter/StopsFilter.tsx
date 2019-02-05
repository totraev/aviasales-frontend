import React, { SFC } from 'react';
import styles from './StopsFilter.module.css';

import Checkbox from '../checkbox/Checkbox';

const StopsFilter: SFC = () => (
  <div className={styles.stops}>
    <Checkbox />
    <Checkbox />
    <Checkbox />
    <Checkbox />
  </div>
);

export default StopsFilter;
