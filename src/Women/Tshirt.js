import React, { useEffect, useState } from 'react'
import '../Men/MenAll.css';
import { Link } from 'react-router-dom';


function WomenTshirt() {
    const [getShirtData, setShirtData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let filter = { "subCategory": "tshirt","gender":"Women" };
                const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${JSON.stringify(filter)}`, {
                    method: 'GET',
                    headers: {
                        projectId: 'seya0o0ygggh',
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setShirtData(data.data);
                } else {
                    console.log('Failed to fetch products');
                }
            } catch (error) {
                console.error('An error occurred while fetching products', error);
            }
        };

        fetchData()
    }, []);

    return (
        <div className='mens-wear'>
            <section className='productcontainer'>
                <h3 className='headingg'>Women's T-shirt</h3>
                <p className="sub-headingg-mens">Women's Clothing - Get your hands on stylish and comfortable clothing for women - Buy a range of ladies' clothing online at affordable prices. Beyoung offers the latest collection of Kurtis, shirts, tops, t-shirts, pants, boxers, and jeggings with existing offers and discounts. Find women's clothing for formal to weekend outings in all styles. Free Shipping | COD | S - 4XL Sizes | 15 Days Return</p>
                <div className='men-products'>
                    {getShirtData.map((seller, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product-details/${seller._id}`}>
                                    <img className='mens-img' src={seller.displayImage} alt={getShirtData.name} /></Link>
                                <h2 className='product-name'>{seller.name}</h2>
                                <p className='product-category'>{seller.subCategory}</p>
                                <p className='product-price'>Price: &#8377;{seller.price}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default WomenTshirt;