import React from 'react'
import '../styles/WinterWear.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Joggers.css';
import PalazzoPants from '../assests/PalazzoPants.jpg'

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

    return (<>
        <div className='banner-jogger'>
            <img src={PalazzoPants} alt='palazoPants' className='plazzo-pants'></img>
        </div>
        <div className='men-container'>
            <section className='men-clothes'>
                <h2 className='heading-men'>Joggers</h2>
                <div className='for-shirts-pants'>
                    {featuredProducts.map((product) => (
                        <div key={product._id}>
                            <Link to={`/product-details/${product._id}`}>
                                <img src={product.displayImage} alt={product.name} className='img' /></Link>
                            <h3 className='product-name'>{product.name}</h3>
                            <p className='product-category'>{product.subCategory}</p>
                            <p className='product-price'>Price: &#8377;{product.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </>
    )
}

export default Joggers