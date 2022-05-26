import { useEffect } from 'react'
import { useSelector, useDispatch }  from 'react-redux'
import { toast } from "react-toastify"
import { getTicket, reset, closeTicket } from '../features/tickets/ticketSlice'
import { useParams, useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const Ticket = () => {
    const { ticket, isSuccess, isLoading, isError, message } = useSelector((state) => state.tickets)
    
    const dispatch = useDispatch()
    const param = useParams()
    const navigate = useNavigate()
    const {ticketId} = useParams()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId))
        // eslint-disable-next-line
    }, [isError, message, ticketId])

    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
    }

    if(isLoading) {
        return <Spinner />
    }

    if(isError) {
        return <h3>Có Gì Đó Không Ổn</h3>
    }

    return (
        <>
            <div className="ticket__page">
                <header className="ticket__header">
                    <BackButton url='/tickets' />
                </header>
                <h2 className='ticket__id'>
                    Ticket ID: {ticket._id}
                    <div className={`status status-${ticket.status}`}>
                        {ticket.status}
                    </div>
                </h2>
                <h3>
                    Ngày tạo: {new Date(ticket.createdAt).toLocaleString('en-VN')}
                </h3>
                <div className="ticket-inline"></div>
                <div className="ticket-desc">
                    <h3>Mô tả vấn đề</h3>
                    <p>{ticket.description}</p>
                </div>

                {ticket.status !== 'closed' && (
                    <button onClick={onTicketClose} className='btn-status-ticket btn-danger'>Đóng Sản Phẩm</button>
                )}
            </div>
        </>
    )
}

export default Ticket
