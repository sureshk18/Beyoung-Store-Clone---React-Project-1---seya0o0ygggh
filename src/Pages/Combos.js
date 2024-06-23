import React, { useEffect, useState } from 'react'
import '../styles/Combos.css';
import { Link } from 'react-router-dom';
import comboImage from '../assests/comboImage.jpg';

function Combos() {

    const [featuredProducts, setFeaturedProducts] = useState([]);
    async function fetchProducts() {
        try {
            const res = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"trouser"}', {
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
        <div className='banner-combo'>
            <img src={comboImage} alt='combos' className='cargo'></img>
        </div>
        <div className='men-container'>
            {/* <section className='filter-section'>
                <div className='color-filter'>
                    <p className='heading-menfilter'>FILTER</p>
                </div>
            </section> */}
            <section className='men-clothes'>
                <h2 className='heading-men'>MEN'S TROUSERS</h2>
                <p className='heading-men1'>Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
                <div className='for-shirts-pants'>
                    {featuredProducts.map((product) => (
                        <div key={product._id}>
                            <Link to={`/product-details/${product._id}`}>
                                <img src={product.displayImage} alt={product.name} className='img' /></Link>
                            <h3 className='seller-details'>{product.name}</h3>
                            <p className='seller-subCategory'>{product.subCategory}</p>
                            <p className='seller-price'>Price: &#8377; {product.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </>
    )
}

export default Combos;