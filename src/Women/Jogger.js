import React from 'react'
import '../Men/MenAll.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Jogger() {
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
        <div className='mens-wear'>
            <section className='productcontainer'>
                <h2 className='headingg'>Women'S Jogger</h2>
                <p className="sub-headingg-mens">Women's Clothing - Get your hands on stylish and comfortable clothing for women - Buy a range of ladies' clothing online at affordable prices. Beyoung offers the latest collection of Kurtis, shirts, tops, t-shirts, pants, boxers, and jeggings with existing offers and discounts. Find women's clothing for formal to weekend outings in all styles. Free Shipping | COD | S - 4XL Sizes | 15 Days Return</p>
                <div className='men-products'>
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

export default Jogger