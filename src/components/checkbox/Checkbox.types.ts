import { FormEventHandler, MouseEventHandler } from 'react'

export interface ICheckboxProps {
  id: string
  stops: number
  value: boolean
  onChange: FormEventHandler<HTMLInputElement>
  onUncheckOther?: MouseEventHandler<HTMLButtonElement>
}
