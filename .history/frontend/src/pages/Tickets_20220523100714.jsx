import { useEffect } from 'react'
import { useSelector, useDispatch } from '@reduxjs/toolkit'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'

const Tickets = () => {
    const dispatch = useDispatch()
    const { isError, isLoading,  } = useE

    return (
        <div>
            Tickets
        </div>
    )
}

export default Tickets
