import React, { useEffect, useState } from 'react'
import '../styles/MenAll.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/UserProvider';
import Tshirtss from '../assests/Tshirtss.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function MixCloths() {
    const [getShirtData, setShirtData] = useState([]);
    const { cloth, gender } = useAuth();

    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?&filter={"gender":"${gender}","subCategory":"${cloth}"}`, {
                    method: 'GET',
                    headers: {
                        projectId: 'f104bi07c490',
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
    }, [cloth, gender]);
    // console.log("gender");

    return (<>
        <div className='bannerss'>
            <img src={Tshirtss} style={{ width: '100%', height: 'auto',marginTop:'89px', maxWidth: '100%' }} />
        </div>
        <div className='mens-wear'>
            <section className='productcontainer'>
                <h3 className='headingg'>Collection of Cloths</h3>
                <div className='men-products'>
                    {getShirtData.map((seller, index) => {
                        return (
                            <div key={index}>
                                <button className='wishlist-button' >
                                    <FavoriteBorderIcon />
                                </button>
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