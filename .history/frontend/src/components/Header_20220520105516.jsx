import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <Link className='logo__customer' to='/'>Ticket App</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>Đăng Nhập</Link>
                </li>
                <li>
                    <Link to='/register'>Đăng kí</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
