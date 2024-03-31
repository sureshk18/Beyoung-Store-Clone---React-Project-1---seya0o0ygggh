import React, { useEffect, useState } from 'react'
import '../styles/Men.css';
import axios from 'axios';


function Men() {
    const [userData, setUserData] = useState([]);
    const MenList = async () => {
        try {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50', {
                headers: {
                    projectId: 'ge5upq3e1s5h'
                }
            });
            const json = response.data;
            console.log(json.data.data);
            setUserData(json.data.data);
        } catch (err) {
            console.log('Error:', err);
        }

    };
    useEffect(() => {
        MenList()
    }, [userData]);


    return (
        <div className='container'>

        </div>
    )
}

export default Men

/*filter={"gender":"add_your_gender"}*/