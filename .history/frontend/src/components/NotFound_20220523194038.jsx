import pageNotFound from '../img/notfound.jpg'

const NotFound = () => {
    return (
        <>
            <div className="page">
                <img className='page__notfound' src={pageNotFound} alt="Page Not Found" />

                <div className="page__heading">
                    <div className="page__title">404</div>
                    <div className="page__text"></div>
                    
                </div>
            </div>
        </>
    )
}

export default NotFound
