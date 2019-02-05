import { MouseEventHandler } from 'react';

export interface ICheckboxProps {
  id: string;
  stops: number;
  value: boolean;
  onClick: MouseEventHandler<HTMLInputElement>;
  onUncheckOther: MouseEventHandler<HTMLButtonElement>;
}
