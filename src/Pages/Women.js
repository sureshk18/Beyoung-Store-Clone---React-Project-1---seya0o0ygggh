import React, { useEffect, useState, useMemo } from 'react'
import '../styles/Women.css';
import womenBanner from '../assests/womenBanner.jpg';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import addWishlist from '../Pages/Men';


function Women() {
    const [getProducts, setProducts] = useState([]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100&filter={"gender":"Women"}`, {
                method: 'GET',
                headers: {
                    projectId: 'f104bi07c490',
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

    //Add wishlist
    const addWishlist = async (id) => {
        const obj = JSON.stringify({ "productId": id });
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
                    projectID: 'f104bi07c490',
                    'Content-Type': 'application/json'
                },
                body: obj,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Wishlist updated', data);
            } else {
                console.log('Failed to update wishlist');
            }
        } catch (error) {
            console.error('An error occurred while updating wishlist', error);
        }
    };



    return (<>
        <div className='banners' >
            <img src={womenBanner} alt='womenbannerimg' className='bannerwomen' style={{ width: '100%', height: 'auto' }} />
        </div >
        <div className="women-container">
            <section className="women-clothess">
                <p className="heading-womens" >WOMENS CLOTHING</p>
                <p className="heading-womenss" >Women's Clothing - Get your hands on stylish and comfortable clothing for women - Buy a range of ladies' clothing online at affordable prices. Beyoung offers the latest collection of Kurtis, shirts, tops, t-shirts, pants, boxers, and jeggings with existing offers and discounts. Find women's clothing for formal to weekend outings in all styles. Free Shipping | COD | S - 4XL Sizes | 15 Days Return</p>
                <div className="for-women-shirts-pants">
                    {getProducts.map((seller) => (
                        <div key={seller._id}>
                            <button className='wishlist-button' onClick={() => addWishlist(getProducts._id)} >
                                <FavoriteBorderIcon />
                            </button>
                            <Link to={`/product-details/${seller._id}`}>
                                <img src={seller.displayImage} className='img' /></Link>
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

export default Women

/*filter={"gender":"add_your_gender"}*/