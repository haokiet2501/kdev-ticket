import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket, reset } from '../features/tickets/ticketSlice'
import SpinnerTicket from '../components/SpinnerTicket'

const NewTicket = () => {
    const {user} = useSelector((state) => state.auth)
    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.ticket
    )
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess) {
            dispatch(reset())
            navigate('/tickets')
        }

        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTicket({product, description}))
    }

    if(isLoading) {
        return <SpinnerTicket />
    }

    return (
        <>
            <div className="ticket">
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

                    <form onSubmit={onSubmit}>
                        <div className="form-ticket__group">
                        <label htmlFor="product">Sản phẩm</label>
                        <select 
                            name="product" 
                            id="product"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                        >
                            <option value="iPhone">iPhone</option>
                            <option value="Macbook Pro">Macbook Pro</option>
                            <option value="iMac">iMac</option>
                            <option value="iPad">iPad</option>
                        </select>
                        </div>
                        <div className="form-ticket__group">
                            <label htmlFor="description">Mô tả vấn đề</label>
                            <textarea 
                                name="description" 
                                id="description" 
                                placeholder='Mô tả'
                                value={description}
                                cols="10" rows="5"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="form-ticket__gruop">
                            <button className='btn btn-block-ticket'>Tạo Vé</button>
                        </div>
                    </form> 
                </section>
            </div>
        </>
    )
}

export default NewTicket
