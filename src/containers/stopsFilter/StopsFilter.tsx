import React, { SFC } from 'react'
import { connect } from 'react-redux'
import styles from './StopsFilter.module.css'

import { compose, withHandlers } from 'recompose'

import Checkbox from '../../components/checkbox/Checkbox'

import {
  toggleAllCheckboxes,
  toggleCurrentCheckbox,
  toggleOnlyCurrentCheckbox,
} from '../../redux/modules/filter'

import { IState } from '../../redux/rootReducer'
import {
  IDispatchProps,
  IHandlers,
  IInnerProps,
  IStateProps,
  IStopsFilterProps,
} from './StopsFilter.types'

export const StopsFilter: SFC<IInnerProps> = ({
  stopsList,
  handleChange,
  handleUncheckOther,
  handleChangeAll,
}) => (
  <div className={styles.stops}>
    <Checkbox
      id={`stops_all`}
      stops={-1}
      value={stopsList.every(v => v)}
      onChange={handleChangeAll}
    />

    {stopsList.map((checked, i) => (
      <Checkbox
        id={`stops_${i}`}
        key={i}
        stops={i}
        value={checked}
        onChange={handleChange(i)}
        onUncheckOther={handleUncheckOther(i)}
      />
    ))}
  </div>
)

export default compose<IInnerProps, {}>(
  connect<IStateProps, IDispatchProps, {}, IState>(
    state => ({ stopsList: state.filter.transfers }),
    {
      toggleAllCheckboxes,
      toggleCurrentCheckbox,
      toggleOnlyCurrentCheckbox,
    }
  ),
  withHandlers<IStopsFilterProps, IHandlers>({
    handleChange: ({
      stopsList,
      toggleCurrentCheckbox: toggle,
    }) => stops => () => {
      toggle(stops, !stopsList[stops])
    },
    handleChangeAll: ({ stopsList, toggleAllCheckboxes: toggle }) => () => {
      const value = stopsList.every(v => v)

      toggle(!value)
    },
    handleUncheckOther: ({
      toggleOnlyCurrentCheckbox: toggle,
    }) => stops => () => {
      toggle(stops, true)
    },
  })
)(StopsFilter)
