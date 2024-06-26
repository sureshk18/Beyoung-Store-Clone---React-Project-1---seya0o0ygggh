import React, { useEffect, useState } from 'react'
import '../styles/MenAll.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/UserProvider';
import Tshirtss from '../assests/Tshirtss.png'

function MixCloths() {
    const [getShirtData, setShirtData] = useState([]);
    const {cloth}=useAuth();
    const {gender} = useAuth();
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?&filter={"subCategory":"${cloth}"}`, {
                    method: 'GET',
                    headers: {
                        projectId: 'f104bi07c490',
                    },
                });
                // console.log("gender");
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
    }, [cloth,gender]);
    // console.log("gender");

    return (<>
        <div className='bannerss'>
            <img src={Tshirtss} style={{ width: '100%', height: 'auto',marginTop:'88px',maxWidth:'100%' }}/>
        </div>
        <div className='mens-wear'>
            <section className='productcontainer'>
                <h3 className='headingg'>Collection of Cloths</h3>
                {/* <p className="sub-headingg-mens">Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p> */}
                <div className='men-products'>
                    {getShirtData.map((seller, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product-details/${seller._id}`}>
                                    <img className='mens-img' src={seller.displayImage} alt={getShirtData.name} /></Link>
                                <h2 className='seller-details'>{seller.name}</h2>
                                <p className='seller-subCategory'>{seller.subCategory}</p>
                                {/* <p className='product-category'>{seller.name}</p> */}
                                <p className='seller-price'>Price : &#8377; {seller.price}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
        </>
    )
}

export default MixCloths;