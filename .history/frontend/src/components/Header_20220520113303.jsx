import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <Link className='logo__customer' to='/'>
                    <svg viewBox='0 0 1350 600'>
                        <text x></text>
                    </svg>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>Đăng Nhập</Link>
                </li>
                <li>
                    <Link to='/register'>Đăng Kí</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
