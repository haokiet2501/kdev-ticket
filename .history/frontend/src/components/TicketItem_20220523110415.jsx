import { Link } from 'react-router-dom'

const TicketItem = ({ ticket }) => {
    return (
        <div className='ticket-item'>
            <div>{new Date(ticket.createdAt).to}</div>
        </div>
    )
}

export default TicketItem
