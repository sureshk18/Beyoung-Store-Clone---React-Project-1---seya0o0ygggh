import React, { useEffect, useState } from 'react';
import '../styles/address.css';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuth } from "../Context/UserProvider";




function Order() {
  // const [getProducts, setProducts] = useState([]);
  // const navigate = useNavigate();
  // const { token } = useAuth();




  // //add cart item
  // const fetchProduct = async () => {
  //   try {
  //     const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order`, {
  //       method: 'POST',
  //       headers: {
  //         projectId: 'f104bi07c490',
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setProducts(data.data.items);
  //     } else {
  //       console.log('Failed to fetch products');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred while fetching products', error);
  //   }
  // };



  // //  delete cart item
  // const handleCartDelete = async () => {
  //   try {
  //     const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order`, {
  //       method: 'DELETE',
  //       headers: {
  //         projectId: 'f104bi07c490',
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setProducts(data.data.items);
  //     } else {
  //       console.log('Failed to fetch products');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred while fetching products', error);
  //   }
  // };
  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  return (
    <div className="address-container" >
      <h3 className='heading-address'>shipping address</h3>
      <div className='form-container'>
        <div className='input-form'>
          <label>Full Name:</label>
          <input type='text' placeholder='fullname' ></input>
        </div>

        <div className='input-form'>
          <label>Phone Number:</label>
          <input type='text' placeholder='phone number' ></input>
        </div>

        <div className='input-form'>
          <label>Pincode:</label>
          <input type='text' placeholder='pincode' ></input>
        </div>

        <div className='input-form'>
          <label>Address:</label>
          <input type='text' placeholder='address' ></input>
        </div>

        <div className='input-form'>
          <label>City:</label>
          <input type='text' placeholder='city' ></input>
        </div>

        <div className='input-form'>
          <label>State:</label>
          <input type='text' placeholder='state'></input>
        </div>
        <div className='btn'>
          <button className='save-btn'>SAVE</button>
          <br/>
          <button className='cancel-btn'>CANCEL</button>
        </div>



      </div>
    </div>
  );
}

export default Order;
