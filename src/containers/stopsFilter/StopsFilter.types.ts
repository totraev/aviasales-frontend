import { MouseEventHandler } from 'react'
import { ActionCreator } from 'redux'
import {
  ToggleAllTransfersAction,
  ToggleCurrentTransferAction,
  ToggleOnlyTransferAction,
} from '../../redux/modules/filter'

export interface IStateProps {
  stopsList: [boolean, boolean, boolean, boolean]
}

export interface IDispatchProps {
  toggleAllCheckboxes: ActionCreator<ToggleAllTransfersAction>
  toggleCurrentCheckbox: ActionCreator<ToggleCurrentTransferAction>
  toggleOnlyCurrentCheckbox: ActionCreator<ToggleOnlyTransferAction>
}

export interface IStopsFilterProps extends IDispatchProps, IStateProps {}

export interface IHandlers {
  handleChange: (stops: number) => MouseEventHandler<HTMLInputElement>
  handleUncheckOther: (stops: number) => MouseEventHandler<HTMLButtonElement>
  handleChangeAll: MouseEventHandler<HTMLInputElement>
}

export interface IInnerProps extends IStopsFilterProps, IHandlers {}
