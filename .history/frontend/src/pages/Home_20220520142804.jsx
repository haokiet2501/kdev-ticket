import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className='home'>
                <h1 className='home__title'>Bạn cần giúp gì?</h1>
                <p className='home__text'>Vui lòng chọn một tùy chọn bên dưới</p>
            </section>

            <Link to='/new-ticket' className='btn btn-reverse btn-block'>
                Tạo Vé
            </Link>
            
        </>
    )
}

export default Home
