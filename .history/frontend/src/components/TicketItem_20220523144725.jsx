import { Link } from 'react-router-dom'

const TicketItem = ({ ticket }) => {
    return (
        {ticket ? (
            <h1>Không có sản phẩm nào</h1>
        ) : 
            (
        <>
                <div className='ticket-item'>
                <div className='ticket-item__date'>
                    {new Date(ticket.createdAt).toLocaleString('en-VN')}
                </div>
                <div className='ticket-item__product'>{ticket.product}</div>
                <div className={`status status-${ticket.status}`}>
                        {ticket.status}
                </div>
                <Link to={`/ticket/${ticket._id}`} className="btn-ticket">
                    Chi tiết
                </Link>
                </div>
        </>
            )
    )
}

export default TicketItem
