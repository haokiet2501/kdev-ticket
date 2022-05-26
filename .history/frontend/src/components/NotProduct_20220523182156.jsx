import notProduct from '../img/product.png'

const NotProduct = () => {
    return (
        <>
            <div className="product">
                <img className='product__banner' src={notProduct} alt="Not Product" />
                <div className="product__text">
                    Sản phẩm 
                </div>
            </div>
        </>
    )
}

export default NotProduct
