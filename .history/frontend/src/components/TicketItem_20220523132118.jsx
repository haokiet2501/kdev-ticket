import { Link } from 'react-router-dom'

const TicketItem = ({ ticket }) => {
    return (
        <div className='ticket-item'>
            <div className='ticket-item__date'>
                {new Date(ticket.createdAt).toLocaleString('en-VN')}
            </div>
            <div className='ticket-item__date'>{ticket.product}</div>
            <div className={`status status-${ticket.status}`}>
                <div className="status__align">
                    {ticket.status}
                </div>
            </div>
            <Link to={`/ticket/${ticket._id}`} className="btn-ticket">
                Chi tiết
            </Link>
        </div>
    )
}

export default TicketItem
