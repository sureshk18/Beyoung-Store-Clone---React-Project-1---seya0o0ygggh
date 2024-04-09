import React from 'react'
import '../styles/WinterWear.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Shopbycollection() {
    const [getData, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let filter = { "subCategory": "shirt" };
                const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products`, {
                    method: 'GET',
                    headers: {
                        projectId: 'seya0o0ygggh',
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setData(data.data);
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
        <>



            <div className="winter-container" style={{ marginTop: '160px' }}>

                <section className="winter-clothes">
                    <p className="winterheading" >Shopping Collection</p>
                    <p className="winter-wear-details" >Men Winter Wear - Buy Winter Wear for Men Online in India at BeYOUng. Shop Mens Winterwear Online @Best Prices. Select a wide range of latest collection on Winterwear for Men. *Free Shipping and *COD Available.</p>
                    <div className="for-winter-wear">
                        {getData.map((seller) => (
                            <div key={seller._id} >
                                <Link to={`/product-details/${seller._id}`}>
                                    <img src={seller.displayImage} /></Link>
                                <h2 className='seller-details'>{seller.name}</h2>
                                <span className='seller-subCategory'>{seller.subCategory}</span>
                                <p className='seller-price'>Price:&#8377;{seller.price}</p>

                            </div>
                        )
                        )}
                    </div>
                </section >
            </div >  </>
    )
}

export default Shopbycollection