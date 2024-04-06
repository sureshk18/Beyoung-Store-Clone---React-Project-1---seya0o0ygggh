import React, { useEffect, useState } from 'react'
import '../Men/MenAll.css';
import { Link } from 'react-router-dom';


function Sweater() {
    const [getShirtData, setShirtData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"sweater"}`, {
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
            <section className='filter-section'>
                <div className='color-filter'>
                    <p className='heading-filter'>FILTER</p>
                    <button className='choosecolor'>Choose Color</button>
                    <button>Choose Color</button>
                    <button>Choose Color</button>
                </div>
            </section>
            <section className='productcontainer'>
                <h3 className='headingg'>Men's Shirt</h3>
                <p className="sub-headingg-mens">Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
                <div className='men-products'>
                    {getShirtData.map((seller, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product-details/${seller._id}`}>
                                    <img className='mens-img' src={seller.displayImage} alt={getShirtData.name} /></Link>
                                <h2 className='product-name'>{seller.name}</h2>
                                <p className='product-category'>{seller.category}</p>
                                <p className='product-price'>Price: &#8377;{seller.price}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Sweater;