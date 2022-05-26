import { useState } from "react"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
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
        e.preventDefault() {
            
        }
    }

    return (
        <>
            <section className="heading">
                <h1 className="heading__title">Đăng Kí</h1>
                <p className="heading__text">Vui lòng tạo một tài khoản</p>
            </section>

            <section>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type='text' 
                            className="form-control" 
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Nhập tên của bạn'
                            onChange={onChange}
                            required
                        />
                    </div>
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
                        <input 
                            type='password2' 
                            className="form-control" 
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Xác nhận lại mật khẩu'
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block">Tạo Tài Khoản</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
