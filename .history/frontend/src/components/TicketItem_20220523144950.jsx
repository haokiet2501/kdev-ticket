import { Link } from 'react-router-dom'

const TicketItem = ({ ticket }) => {
    return (
        {ticket ? (
            <>
                <h1>Không có sản phẩm nào</h1>
            </>
        ) : (
            <>
                
            </>
        )}
    )
}

export default TicketItem
