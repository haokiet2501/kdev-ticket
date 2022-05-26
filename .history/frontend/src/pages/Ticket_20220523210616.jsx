import { useSelector, useDispatch }  from 'react-redux'
import { getTicket, reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const Ticket = () => {
    const dispatch = useDispatch()
    const { ticket, isSuccess, isLoading, isError, message } = useSelector((state) => state.tickets)


    return (
        <div>
            Ticket
        </div>
    )
}

export default Ticket
