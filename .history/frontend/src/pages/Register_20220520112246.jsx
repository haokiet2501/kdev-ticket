import { useState } from "react"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    return (
        <>
            <section className="">
                <h1>Đăng Kí</h1>
                <p>Vui lòng tạo một tài khoản</p>
            </section>
        </>
    )
}

export default Register
