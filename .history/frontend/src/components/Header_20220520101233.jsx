import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <Link className='customer_logo' to='/'>Ticket App</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>Đăng nhập</Link>
                </li>
                <li>
                    <Link to='/register'>Đăng kí</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
