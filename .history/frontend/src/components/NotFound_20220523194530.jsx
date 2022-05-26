import pageNotFound from '../img/notfound.jpg'

const NotFound = () => {
    return (
        <>
            <div className="page">
                <img className='page__notfound' src={pageNotFound} alt="Page Not Found" />

                <div className="page__heading">
                    <div className="page__title">404</div>
                    <div className="page__text">Bạn đang truy cập 1 trang không tồn tại. Đừng lo, hãy quay về trang chủ</div>
                    <button className='btn-'>
                        Trang chủ
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotFound
