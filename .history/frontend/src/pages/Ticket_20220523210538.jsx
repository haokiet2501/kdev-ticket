import { useSelector, useDispatch }  from 'react-redux'
import { getTicket, reset } from '../features/tickets/ticketSlice'
import Back
import Spinner from '../components/Spinner'

const Ticket = () => {
    const dispatch = useDispatch()
    const { ticket, isSuccess, isLoading } = useSelector((state) => state.tickets)


    return (
        <div>
            Ticket
        </div>
    )
}

export default Ticket
