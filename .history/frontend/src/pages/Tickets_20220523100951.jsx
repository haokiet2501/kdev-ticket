import { useEffect } from 'react'
import { useSelector, useDispatch } from '@reduxjs/toolkit'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import res from 'express/lib/response'

const Tickets = () => {
    const dispatch = useDispatch()
    const { isLoading, tickets, isSuccess } = useSelector((state) => state.tickets)

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(res)
            }
        }
    })

    useEffect(() => {
        dispatch(getTickets())
    }, dispatch)

    return (
        <div>
            Tickets
        </div>
    )
}

export default Tickets
