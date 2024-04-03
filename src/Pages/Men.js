import React, { useEffect, useState, useMemo } from 'react'
import '../styles/Mens.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Men() {
    const [getProducts, setProducts] = useState([]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50 `, {
                method: 'GET',
                headers: {
                    projectId: 'yxpa71cax49z',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data.data);
            } else {
                console.log('Failed to fetch products');
            }
        } catch (error) {
            console.error('An error occurred while fetching products', error);
        }
    };
    useEffect(() => {
        fetchProduct();
    }, [])
    return (<>
        <div className='banners' >
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/1.jpg" alt='womenbannerimg' className='bannermen' />
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/8.jpg" alt='sweaterimg' className='bannermen' />
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/12.jpg" alt='hoodieimg' className='bannermen' />
            <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/13.jpg" alt='combosimg' className='bannermen' />

        </div >

        <div className="men-container">
            <section className="men-clothess">
                <p className="heading-mens" >Men's Clothing</p>
                <p className="heading-menss" >Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
                <div className="for-men-shirts-pants">
                    {getProducts.map((seller) => (
                        <div key={seller._id}>
                            <img src={seller.displayImage} className='img' loading='lazy' />
                            <h2 className='seller-details'>{seller.name}</h2>
                            <span className='seller-subCategory'>{seller.subCategory}</span>
                            <p className='seller-price'>Price:&#8377;{seller.price}</p>

                        </div>
                    )
                    )}
                </div>
            </section >
        </div >
    </>

    )
}

export default Men

/*filter={"gender":"add_your_gender"}*/