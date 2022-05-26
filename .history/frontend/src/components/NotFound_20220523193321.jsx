import pageNotFound from '../img/notfound.jpg'

const NotFound = () => {
    return (
        <>
            <div className="page">
                <img className='page__' src={pageNotFound} alt="Page Not Found" />
            </div>
        </>
    )
}

export default NotFound
