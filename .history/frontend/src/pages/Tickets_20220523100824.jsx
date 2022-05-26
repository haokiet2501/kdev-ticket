import { useEffect } from 'react'
import { useSelector, useDispatch } from '@reduxjs/toolkit'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const Tickets = () => {
    const dispatch = useDispatch()
    const { isError, isLoading,  } = useSelector((state) => state.tickets)

    

    return (
        <div>
            Tickets
        </div>
    )
}

export default Tickets
