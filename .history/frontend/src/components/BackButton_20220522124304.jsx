import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BackButton = ({ url }) => {
    return (
        <>
            <Link to={url} className="btn-back container">
                <FaArrowCircleLeft /> Trở Về
            </Link>
        </>
    )
}

export default BackButton
