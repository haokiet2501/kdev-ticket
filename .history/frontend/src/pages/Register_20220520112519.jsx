import { useState } from "react"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const onChange = () => {
        
    }

    return (
        <>
            <section className="">
                <h1>Đăng Kí</h1>
                <p>Vui lòng tạo một tài khoản</p>
            </section>

            <section>
                <form action="">
                    <div>
                        <input 
                            type='text' 
                            className="" 
                            id='name'
                            value={name}
                            placeholder='Nhập tên của bạn'
                            onChange={onChange}
                        />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
