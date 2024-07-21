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
import Payment from '../Payment/Payment';
import { Stepper } from 'react-form-stepper';




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




  //item remove from checkout 

  const handleRemove = async () => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
        method: 'DELETE',
        headers: {
          projectId: 'f104bi07c490',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProducts(data.data.items);
      } else {
        console.log('Failed to remove product from wishlist');
      }
    } catch (error) {
      console.error('Delete error', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [cloth]);



  return (<>
    {/* <div className='buy-container'>
      <div className='buy-header'>
        <ul >
          <li className='list'>
            <span><ShoppingCartOutlinedIcon /></span>
            <span>My cart</span>
          </li>
          <li className='list'>
            <Link to='/Address'><span><LocationOnOutlinedIcon /></span>
            <span>Address</span></Link>
          </li>
          <li className='list'>
            <Link to='/payment'><span><PaymentIcon /></span>
            <span>Payment</span></Link>
          </li>
        </ul>
      </div>
      <div>
      </div>
    </div> */}




    <div className='buy-container2'>
      <div className='buy-containerr'>
        <div className='buy-containerr-data'>
          <div className='buy-containerr-data2'>
            {getShirtData?.map((seller, index) => {
              return (<>
                <div key={index}>
                  <img className='buy-image' src={seller.product.displayImage} />
                  <button className='handleremove' onClick={handleRemove}>remove</button>
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
        <div className='price-container'>
          <h2 className=''>PRICE DETAILS</h2>
          {getShirtData?.map((seller, index) => {
            return (<>
              <div key={index} className='price-chart'>
                <p>Total MRP (Inc. of Taxes) <span>&#8377; {seller.product.totalPrice}</span></p>
                <p>Beyoung Discont <span>&#8377;</span></p>
                <p>Shipping <span>&#8377; </span></p>
                <p>Cart Total <span>&#8377;</span></p>
              </div>
              <div className='py-mode'>
                <h4 >Total Amount
                <span>&#8377; 12</span></h4>
              <h3 className='py-title' >You Saved ₹630 on this order</h3>
              <br/>
              <h3 className='py-title' >CHECKOUT SECURELY</h3>
              </div>
            </>)
          })}
        </div>
      </div>

    </div>


    {/* <Address/>
    <Payment/> */}
  </>
  )
}

export default BuyProduct;