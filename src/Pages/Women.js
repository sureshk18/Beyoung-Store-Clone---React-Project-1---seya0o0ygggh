import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/Women.css';

function Women() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        setFeaturedProducts()
    }, [featuredProducts]);

    async function fetchProduct() {
        try {
            let filter = { "gender": "women" };

            if (selectedColorFilter !== 'All') {
                filter.color = selectedColorFilter;
            }
            if (selectedSizeFilter !== 'All') {
                filter.size = selectedSizeFilter;
            }

            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${JSON.stringify(filter)}`, {
                method: 'GET',
                headers: {
                    projectID: 'seya0o0ygggh',
                },
            });

            if (res.ok) {
                const data = await res.json();
                fetchProduct(data.data.seller)
            } else {
                console.log('Failed to fetch products');
            }
        } catch (err) {
            console.error('Error', err);
        }
    }




    return (
        <div className='women'>
            {featuredProducts.map((product) => (
                <div key={product._id}>
                    <img src={product.displayImage} />
                </div>
            )
            )}
        </div>
    )
}

export default Women