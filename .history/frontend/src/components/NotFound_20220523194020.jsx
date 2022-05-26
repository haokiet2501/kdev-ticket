import pageNotFound from '../img/notfound.jpg'

const NotFound = () => {
    return (
        <>
            <div className="page">
                <img className='page__notfound' src={pageNotFound} alt="Page Not Found" />

                <div className="page__heading">
                    <div className="page__title"></div>
                </div>
            </div>
        </>
    )
}

export default NotFound