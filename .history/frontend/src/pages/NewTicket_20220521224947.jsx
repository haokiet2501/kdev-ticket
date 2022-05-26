import { useState } from 'react'
import { useSelector } from 'react-redux'

const NewTicket = () => {
    const {user} = useSelector((state) => state.auth)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()


    }

    return (
        <>
            <section className='home'>
                <h1 className='home__title'>Tạo Vé Mới</h1>
                <p className='home__text'>Hãy điền vào mẫu bên dưới</p>
            </section>

            <section className='form-ticket'>
                <div className="form-ticket__group">
                    <label htmlFor="name">Tên khách hàng</label>
                    <input 
                        type="text" 
                        value={name} 
                        disabled 
                    />
                </div>

                <div className="form-ticket__group">
                    <label htmlFor="name">Email của khách hàng</label>
                    <input 
                        type="text" 
                        value={email} 
                        disabled 
                    />
                </div>

                <form action="" onSubmit={onSubmit}>
                    <label htmlFor=""></label>
                </form> 
            </section>
        </>
    )
}

export default NewTicket
