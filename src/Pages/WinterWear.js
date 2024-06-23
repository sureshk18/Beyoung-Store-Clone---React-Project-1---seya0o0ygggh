import React, { useEffect, useState } from 'react'
import '../styles/WinterWear.css';
import blackfriday from '../assests/black-friday.jpg';
import { Link } from 'react-router-dom';


function WinterWear() {
    const [getProducts, setProducts] = useState([]);
    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"sweater"}`, {
                method: 'GET',
                headers: {
                    projectId: 'seya0o0ygggh',
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
        <div className='bannersweater' >
            <img src={blackfriday} alt='womenbannerimg' style={{ width: '100%', height: 'auto' }} />

        </div >

        <div className="winter-container">
            <section className="winter-clothes">
                <p className="winterheading" >MENS WINTER WEARS</p>
                <p className="winter-wear-details" >Men Winter Wear - Buy Winter Wear for Men Online in India at BeYOUng. Shop Mens Winterwear Online @Best Prices. Select a wide range of latest collection on Winterwear for Men. *Free Shipping and *COD Available.</p>
                <div className="for-winter-wear">
                    {getProducts.map((seller) => (
                        <div key={seller._id}>
                            <Link to={`/product-details/${seller._id}`}>
                                <img src={seller.displayImage} /></Link>
                            <h2 className='seller-details'>{seller.name}</h2>
                            <span className='seller-subCategory'>{seller.subCategory}</span>
                            <p className='seller-price'>Price : &#8377; {seller.price}</p>

                        </div>
                    )
                    )}
                </div>
            </section >
        </div >
    </>

    )
}

export default WinterWear

/*filter={"gender":"add_your_gender"}*/