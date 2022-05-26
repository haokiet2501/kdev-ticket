import { useState } from "react"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const dispatch = useDispatch()

    const { user, isLoading, isSuccess, message } =
    useSelector(
        (state) => state.auth
    )

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <section className="register">
                <h1 className="register__title">Đăng Nhập</h1>
            </section>

            <section>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type='text' 
                            className="form-control" 
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Nhập email của bạn'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type='password' 
                            className="form-control" 
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Nhập mật khẩu của bạn'
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block">Đăng Nhập</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
