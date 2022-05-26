import { useState } from "react"
import { toast } from "react-toastify"

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

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
            <section className="heading">
                <h1 className="heading__title">Đăng Nhập</h1>
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
