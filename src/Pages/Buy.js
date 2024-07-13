import '../styles/Buy.css';
import PaymentIcon from '@mui/icons-material/Payment';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useEffect, useState } from 'react'
import '../styles/Mens.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import Address from '../Payment/Address';


function BuyProduct() {
  const [getShirtData, setShirtData] = useState([]);
  const { cloth, gender } = useAuth();
  const navigate = useNavigate();
  const { token } = useAuth();



  async function fetchData() {
    try {
      const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
        method: 'GET',
        headers: {
          projectId: 'f104bi07c490',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setShirtData(data.data.items);
      } else {
        console.log('Failed to fetch products');
      }
    } catch (error) {
      console.error('An error occurred while fetching products', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [cloth]);




  return (<>
    <div className='buy-container'>
      <div className='buy-header'>
        <ul >
          <li className='list'>
            <span><ShoppingCartOutlinedIcon /></span>
            <span>My cart</span>
          </li>
          <li className='list'>
            <span><LocationOnOutlinedIcon /></span>
            <span>Address</span>
          </li>
          <li className='list'>
            <span><PaymentIcon /></span>
            <span>Payment</span>
          </li>
        </ul>
      </div>
      <div>
      </div>
    </div>




    <div className='buy-container2'>
      <div className='buy-containerr'>
        <div className='buy-containerr-data'>
          <div className='buy-containerr-data2'>
            {getShirtData?.map((seller, index) => {
              return (<>
                <div key={index}>
                  <img className='buy-image' src={seller.product.displayImage} />
                </div>
                
                <article className='article'>
                  <h4 className='product-check-name'>{seller.product.name}</h4>
                  <p className='product-check-name'>Price : &#8377; {seller.product.price}</p>
                  <p className='product-check-name'>{seller.color}</p>
                  <p className='product-check-name'>Size: {seller.size}</p>
                </article>
              </>
              )
            })}
          </div>
        </div>
      </div>
    </div>

    <Address/>
  </>
  )
}

export default BuyProduct;