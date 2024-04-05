import React, { useEffect, useState } from 'react'
import '../Men/MenAll.css';

function Shirt() {
    const [getShirtData, setShirtData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50?&filter={"subCategory":"shirts"}', {
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
        <div className='hoodie'>
            <section className='productcontainer'>
                <h3 className='headingg'>Men's Shirt</h3>
                <p className="sub-heading">Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
                <div className='products'>
                    {getShirtData.map((seller, index) => {
                        <div key={index}>
                            <img src={seller.displayImage} />
                            <h2 style={{ marginTop: '90px' }}>{seller.name}</h2>
                            <p className='product-category'>{seller.category}</p>
                            <p className='product-price'>Price: &#8377;{seller.price}</p>
                        </div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Shirt;