import React, { SFC } from 'react'
import { connect } from 'react-redux'
import styles from './TicketList.module.css'

import Loader from '../../components/loader/Loader'
import Ticket from '../../components/ticket/Ticket'

import { IState } from '../../redux/rootReducer'
import { filteredTicketsSelector } from '../../redux/selectors/tickets'

import { IStateProps, ITicketListProps } from './TicketList.types'

const TicketList: SFC<ITicketListProps> = ({ loading, tickets }) => (
  <div className={styles.list}>
    {loading && <Loader />}

    {!loading &&
      tickets.map(ticket => (
        <Ticket key={`${ticket.carrier}-${ticket.stops}-${ticket.price}`} ticket={ticket} />
      ))}

    {!loading && tickets.length === 0 && <div className={styles.empty}>НЕТ ПОДХОДЯЩИХ БИЛЕТОВ</div>}
  </div>
)

export default connect<IStateProps, {}, {}, IState>(state => ({
  loading: state.tickets.loading,
  tickets: filteredTicketsSelector(state),
}))(TicketList)
