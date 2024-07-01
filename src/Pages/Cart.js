import React, { useEffect, useState } from 'react';
import '../styles/Mens.css';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuth } from "../Context/UserProvider";



function Cart() {
    const [getProducts, setProducts] = useState([]);
    const navigate = useNavigate();
    const { token } = useAuth();
    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
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

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="men-container" >
            <section className="men-clothess">
                <div className="heading-mens">
                    <div className='for-men-shirts-pants'>
                        {getProducts.length > 0 ? (
                            getProducts.map((seller, index) => (
                                <div key={index}>
                                   
                                    <Link to={`/product-details/${seller._id}`}>
                                        <img src={seller.displayImage} alt={seller.name} id="zoom-In" />
                                    </Link>
                                    <h2 className="seller-details">{seller.name}</h2>
                                    <span className="seller-subCategory">{seller.subCategory}</span>
                                    <p className="seller-price">Price: &#8377;{seller.price}</p>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty!</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;
