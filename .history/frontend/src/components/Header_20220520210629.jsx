import { Link, useNavigate } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)

    return (
        <div className='header'>
            <div className="logo">
                <Link className='logo__customer' to='/'>
                    Ticket App
                </Link>
            </div>
            <ul>
                {user ? (

                ) : 
                (<>
                    <li>
                    <Link to='/login'>Đăng Nhập</Link>
                </li>
                
                <li>
                    <Link to='/register'>Đăng Kí</Link>
                </li>
                </>)}
            </ul>
        </div>
    )
}

export default Header
