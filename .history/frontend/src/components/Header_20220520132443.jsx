import { Link } from 'react-router-dom'
import image from '.../public/tickets.png'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <Link className='logo__customer' to='/'>
                    Ticket App
                    <img src=/>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>Đăng Nhập</Link>
                </li>
                <div className="nav__seperator"></div>
                <li>
                    <Link to='/register'>Đăng Kí</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
