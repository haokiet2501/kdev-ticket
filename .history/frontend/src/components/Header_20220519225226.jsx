import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'></Link>
            </div>
        </div>
    )
}

export default Header
