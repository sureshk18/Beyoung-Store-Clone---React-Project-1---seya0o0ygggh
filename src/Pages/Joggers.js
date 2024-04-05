import React from 'react'
import '../styles/Joggers.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Joggers() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    async function fetchProducts() {
        try {
            const res = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"jogger"}', {
                method: 'GET',
                headers: {
                    projectId: 'seya0o0ygggh',
                },
            });
            if (res.ok) {
                const data = await res.json();
                setFeaturedProducts(data.data);
            } else {
                console.log('Failed to fetch products');
            }
        } catch (err) {
            console.error('An error occurred while fetching products', err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='men-container'>
            <section className='filter-section'>
                <div className='color-filter'>
                    <p className='heading-menfilter'>FILTER</p>
                </div>
            </section>
            <section className='men-clothes'>
                <h2 className='heading-men'>Joggers</h2>
                <div className='for-shirts-pants'>
                    {featuredProducts.map((product) => (
                        <div key={product._id}>
                            <Link to={`/product-details/${product._id}`}>
                                <img src={product.displayImage} alt={product.name} className='img' /></Link>
                            <h3 className='product-name'>{product.name}</h3>
                            <p className='product-category'>{product.category}</p>
                            <p className='product-price'>Price: &#8377;{product.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Joggers