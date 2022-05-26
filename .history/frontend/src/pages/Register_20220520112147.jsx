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

            </section>
        </>
    )
}

export default Register
