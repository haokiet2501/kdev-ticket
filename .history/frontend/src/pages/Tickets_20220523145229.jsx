import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import TicketItem from '../components/TicketItem'

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
            <div className="tickets">
                <h1 className='tickets__title'>TICKET</h1>
                <div className="tickets__heading">
                    <div>Thời gian</div>
                    <div>Sản phẩm</div>
                    <div>Trạng thái</div>
                </div>
                <>
                    
                </>
            </div>
        </>
    )
}

export default Tickets
