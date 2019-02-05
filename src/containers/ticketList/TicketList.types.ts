import { ITicket } from '../../redux/modules/tickets'

export interface IStateProps {
  loading: boolean
  tickets: ITicket[]
}

export type ITicketListProps = IStateProps
