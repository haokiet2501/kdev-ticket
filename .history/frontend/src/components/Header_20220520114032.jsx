import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'
                    <svg viewBox='0 0 1350 600'>
                        <text x='50%' y='50%' fill='transparent' textAnchor='middle'>
                            TICKET APP
                        </text>
                    </svg>
                </Link>
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
