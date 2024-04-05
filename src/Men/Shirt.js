import React, { useEffect, useState } from 'react'
import '../Men/MenAll.css';

const Shirt = () => {

    const [getShirtData, setShirtData] = useState([]);
    const fetchData = async () => {
        try {
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50?&filter={"subCategory":"shirt"}`, {
                method: 'GET',
                headers: {
                    projectId: 'seya0o0ygggh',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setShirtData(data.data);
            } else {
                console.log('Failed to fetch products');
            }
        } catch (error) {
            console.error('An error occurred while fetching products', error);
        }
    };
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='container'>
            <section className='productcontainer'>
                <p className='headingg'>Men's Shirt</p>
                <p className="sub-heading">Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
                <div className='products'>
                    {getShirtData.map((obj, index) => {
                        <div key={index}>
                            <img src={obj.displayImages} />
                            <h4>{obj.name}</h4>

                        </div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Shirt