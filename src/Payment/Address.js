import React from 'react';
import '../styles/address.css';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuth } from "../Context/UserProvider";
import PriceDetails from './PriceDetails'




function Order() {
  const navigate = useNavigate();

  const onPyHandler = () => {
    navigate('/Payment');
  }




  return (
    <div className="address-container" style={{ marginTop: '80px' }} >
      <h3 className='heading-address' >shipping address</h3>
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
          <br />
          <button className='cancel-btn'>CANCEL</button>
        </div>



      </div>
      <div >
        <PriceDetails />
      </div>
      <button onClick={onPyHandler}>next</button>
    </div>


  );
}

export default Order;
