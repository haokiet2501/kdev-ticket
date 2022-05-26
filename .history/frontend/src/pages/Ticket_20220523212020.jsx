import { useEffect } from 'react'
import { useSelector, useDispatch }  from 'react-redux'
import toast from 'react-toastify'
import { getTicket, reset } from '../features/tickets/ticketSlice'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const Ticket = () => {
    const dispatch = useDispatch()
    const { ticket, isSuccess, isLoading, isError, message } = useSelector((state) => state.tickets)

    const param = useParams()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket())
    })

    return (
        <div>
            Ticket
        </div>
    )
}

export default Ticket
