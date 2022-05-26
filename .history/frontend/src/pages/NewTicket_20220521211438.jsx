import { useState } from 'react'
import { useSelector } from 'react-redux'

const NewTicket = () => {
    const {user} = useSelector((state) => state.auth)
    const []
    return (
        <div>
            <h1>Ticket</h1>
        </div>
    )
}

export default NewTicket
