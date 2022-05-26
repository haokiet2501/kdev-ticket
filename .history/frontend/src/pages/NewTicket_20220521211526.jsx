import { useState } from 'react'
import { useSelector } from 'react-redux'

const NewTicket = () => {
    const {user} = useSelector((state) => state.auth)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [name, setName] = useState(user.name)
    const [name, setName] = useState(user.name)

    return (
        <div>
            <h1>Ticket</h1>
        </div>
    )
}

export default NewTicket
