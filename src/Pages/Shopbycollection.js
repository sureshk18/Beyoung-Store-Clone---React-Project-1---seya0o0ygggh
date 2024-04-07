import React from 'react'
import '../styles/WinterWear.css';

function Shopbycollection() {
    return (
        <div className="winter-container" style={{ marginTop: '160px' }}>
            <section className="winter-clothes">
                <p className="winterheading" >MENS WINTER WEARS</p>
                <p className="winter-wear-details" >Men Winter Wear - Buy Winter Wear for Men Online in India at BeYOUng. Shop Mens Winterwear Online @Best Prices. Select a wide range of latest collection on Winterwear for Men. *Free Shipping and *COD Available.</p>
                <div className="for-winter-wear">
                    {/* {getProducts.map((seller) => (
                        <div key={seller._id}>
                            <Link to={`/product-details/${seller._id}`}>
                                <img src={seller.displayImage} /></Link>
                            <h2 className='seller-details'>{seller.name}</h2>
                            <span className='seller-subCategory'>{seller.subCategory}</span>
                            <p className='seller-price'>Price:&#8377;{seller.price}</p>

                        </div>
                    )
                    )} */}
                </div>
            </section >
        </div >
    )
}

export default Shopbycollection