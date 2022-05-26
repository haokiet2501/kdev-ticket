import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'>Ticket App</Link>
            </div>
        </div>
    )
}

export default Header
