import pageNotFound from '../img/notfound.jpg'

const NotFound = () => {
    return (
        <>
            <div className="page">
                <img className='page__found' src={pageNotFound} alt="Page Not Found" />
            </div>
        </>
    )
}

export default NotFound
