import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="home-container">
                <section className='home'>
                    <h1 className='home__title'>Bạn cần giúp gì?</h1>
                    <p className='home__text'>Vui lòng chọn một tùy chọn bên dưới</p>
                </section>
                
                <div className="home__ticket">
                    <Link to='/new-ticket' className='btn btn-reverse btn-block'>
                        Tạo Sản Phẩm
                    </Link>
                    <Link to='/tickets' className='btn btn-block'>
                        Xem Sản Phẩm
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home
