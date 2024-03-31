import React, { useEffect, useState } from 'react'
import '../styles/Combos.css';

function Combos() {

    const [featuredProducts, setFeaturedProducts] = useState([]);
    async function fetchProducts() {
        try {
            const res = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"trouser"}', {
                method: 'GET',
                headers: {
                    projectId: 'yxpa71cax49z',
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
            <section className='men-clothes'>
                <p className='heading-men'>Combos</p>
                <div className='for-shirts-pants'>
                    {featuredProducts.map((product) => (
                        <div key={product._id}>
                            <img src={product.displayImage} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Combos;