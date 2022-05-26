import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import TicketItem from '../components/TicketItem'
import NotProduct from '../components/NotProduct'

const Tickets = () => {
    const dispatch = useDispatch()
    const { isLoading, tickets, isSuccess } = useSelector((state) => state.tickets)

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <BackButton url='/' />
            {getTickets ? (
                <NotProduct />
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default Tickets
