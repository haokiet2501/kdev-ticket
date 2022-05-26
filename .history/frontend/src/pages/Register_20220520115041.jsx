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

    return (
        <>
            <section className="heading">
                <svg>
                    text
                </svg>
                <p>Vui lòng tạo một tài khoản</p>
            </section>

            <section>
                <form action="">
                    <div>
                        <input 
                            type='text' 
                            className="" 
                            id='name'
                            name='name'
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
