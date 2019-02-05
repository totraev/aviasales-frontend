import { MouseEventHandler } from 'react';

export interface IStopsFilterProps {
  stopsList: [boolean, boolean, boolean, boolean];
}

export interface IHandlers {
  handleClick: (stops: number) => MouseEventHandler<HTMLInputElement>;
  handleUncheckOther: (stops: number) => MouseEventHandler<HTMLButtonElement>;
}

export interface IInnerProps extends IStopsFilterProps, IHandlers {}
