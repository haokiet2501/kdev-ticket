import { Link } from 'react-router-dom'

const TicketItem = ({ ticket }) => {
    return (
        <div className='ticket-item'>
            <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
            <div>{ticket.product}</div>
            <div className={`status status-${ticket.status}`}>{ticket.status}</div>
            <Link to={`/ticket/${ticket._id}`} className="btn">
                Xem
            </Link>
        </div>
    )
}

export default TicketItem
