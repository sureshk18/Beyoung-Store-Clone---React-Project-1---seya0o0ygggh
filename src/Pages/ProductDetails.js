import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';

function ProductDetails() {
    const { _id } = useParams();
    const [getProductData, setProductData] = useState();

    const getProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/:${_id}`, {
                method: 'GET',
                headers: {
                    projectID: 'seya0o0ygggh',
                },
            });
            if (!response.ok) {
                const data = await response.json();
                setProductData(data.data);
            } else {
                console.log("error");
            }
        } catch (error) {
            console.error("err", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [_id]);


    return (
        <div className='single-product-component'>
            {/* <h1 >Single Product ID: {getProductData?._id}</h1> */}
            {getProductData ? (
                <div className='single-product'>
                    <img src={getProductData.displayImage} alt={getProductData.title} />
                    <div className='single-product-details'>
                        <h2>{getProductData.data?.name}</h2>
                        <p>{getProductData.data?.subCategory}</p>
                    </div>
                </div>
            ) : (
                <p className='loader'>Loading....</p>
            )}
        </div>
    )
}

export default ProductDetails