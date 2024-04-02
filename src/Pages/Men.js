import React, { useEffect, useState, useMemo } from 'react'
import '../styles/Men.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Men() {
    const [getProducts, setProducts] = useState([]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50 `, {
                method: 'GET',
                headers: {
                    projectId: 'yxpa71cax49z',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data.data);
            } else {
                console.log('Failed to fetch products');
            }
        } catch (error) {
            console.error('An error occurred while fetching products', error);
        }
    };
    useEffect(() => {
        fetchProduct();
    }, [])
    return (<>
        <div className='banners' >
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/1.jpg" alt='womenbannerimg' className='bannermen' />
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/8.jpg" alt='sweaterimg' className='bannermen' />
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/12.jpg" alt='hoodieimg' className='bannermen' />
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/13.jpg" alt='combosimg' className='bannermen' />

        </div >

        <div className="men-container">
            <section className="men-clothes">
                <p className="heading-men" style={{ fontSize: '100%' }}>Men's Clothing</p>
                <p className="heading-men1" style={{ marginTop: '10px' }}>Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
                <div className="for-shirts-pants">
                    {getProducts.map((seller) => (
                        <div key={seller._id}>
                            <img src={seller.displayImage} />
                            <p>{seller.name}</p>
                            <p>{seller.subCategory}</p>
                            <p><CurrencyRupeeIcon />: {seller.price}</p>

                        </div>
                    )
                    )}
                </div>
            </section >


            {/* 
            {selectedProduct && <ProductDetail product={selectedProduct} />}
            {showLoginModal && (
                <div className="popup-modal" style={loginModalStyle}>
                    <p>Please log in to add items to your wishlist.</p>
                </div>

            )}

            {showWishlistMessage && (
                <div className="popup-modal">
                    <p>Product is succesfully added to wishlist!</p>
                </div>
            )} */}
        </div >
    </>

    )
}

export default Men

/*filter={"gender":"add_your_gender"}*/