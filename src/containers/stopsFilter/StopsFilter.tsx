import React, { SFC } from 'react';
import styles from './StopsFilter.module.css';

import { compose, withHandlers } from 'recompose';

import Checkbox from '../../components/checkbox/Checkbox';
import { IHandlers, IInnerProps, IStopsFilterProps } from './StopsFilter.types';

export const StopsFilter: SFC<IInnerProps> = ({ stopsList, handleClick, handleUncheckOther }) => (
  <div className={styles.stops}>
    {stopsList.map((checked, i) => (
      <Checkbox
        id={`stops_${i}`}
        key={i}
        stops={i}
        value={checked}
        onClick={handleClick(i)}
        onUncheckOther={handleUncheckOther(i)}
      />
    ))}
  </div>
);

export default compose<IInnerProps, IStopsFilterProps>(
  withHandlers<IStopsFilterProps, IHandlers>({
    handleClick: ({ stopsList }) => (stops) => () => {
      // tslint:disable-next-line
      console.log(stops, stopsList[stops]);
    },
    handleUncheckOther: ({ stopsList }) => (stops) => () => {
      // tslint:disable-next-line
      console.log(stops, stopsList[stops]);
    },
  }),
)(StopsFilter);
