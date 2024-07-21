import React, { useEffect, useState } from 'react';
import '../styles/Wishlist.css';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuth } from "../Context/UserProvider";



function Wishlist() {
    const [getProducts, setProducts] = useState([]);
    const navigate = useNavigate();
    const { token } = useAuth();

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
                method: 'GET',
                headers: {
                    projectId: 'f104bi07c490',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data.data.items);
            } else {
                console.log('Failed to fetch products');
            }
        } catch (error) {
            console.error('An error occurred while fetching products', error);
        }
    };


    //item remove from wishlist 

    const HandleWishListDelete = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
                method: 'DELETE',
                headers: {
                    projectId: 'f104bi07c490',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data.data.items);
            } else {
                console.log('Failed to remove product from wishlist');
            }
        } catch (error) {
            console.error('Delete error', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <div className="men-container">
                <section className="men-clothess">
                <div className='for-men-shirts-pants'>
                    {getProducts.length > 0 ? (
                        getProducts.map((seller, index) => (
                            <div key={index} >
                                <img src={seller.products.displayImage} alt={seller.name} className='wishlist-img' />
                                <p className='seller-details'>{seller.products.name}</p>
                                <p className="seller-price">Price: &#8377;{seller.products.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className='wish-msg'>Your wishlist is empty!</p>
                    )}
                </div>
                <div>
                    <button className='btn-remove' onClick={HandleWishListDelete}>
                        Remove
                    </button>
                </div>
                </section>
            </div>
        </>
    );
}

export default Wishlist;



