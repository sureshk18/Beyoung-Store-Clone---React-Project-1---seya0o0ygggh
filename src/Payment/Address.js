import React from 'react';
import '../styles/address.css';
import PriceDetails from './PriceDetails'

function Order() {
  return (<>
    <div className="address-container" style={{ marginTop: '80px' }} >
      <div className='form-container'>
        <h3 className='heading-address' >shipping address</h3>
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
      <div className='price-address-box'><PriceDetails />
        {/* <button style={{width:'100px',height:'40px', alignItems:'center'}} onClick={onHandler}>next</button> */}
      </div>

    </div>

  </>


  );
}

export default Order;
