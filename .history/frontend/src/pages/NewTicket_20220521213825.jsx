import { useState } from 'react'
import { useSelector } from 'react-redux'

const NewTicket = () => {
    const {user} = useSelector((state) => state.auth)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    return (
        <>
            <section className='home'>
                <h1 className='home__title'>Tạo Vé Mới</h1>
                <p className='home__text'>Hãy điền vào mẫu bên dưới</p>
            </section>

            <section className='form'></section>
        </>
    )
}

export default NewTicket
