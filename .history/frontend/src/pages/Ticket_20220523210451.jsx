import { useSelector, useDispatch }  from 'react-redux'
import { getTicket, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'

const Ticket = () => {
    const dispatch = useDispatch()

    return (
        <div>
            Ticket
        </div>
    )
}

export default Ticket
