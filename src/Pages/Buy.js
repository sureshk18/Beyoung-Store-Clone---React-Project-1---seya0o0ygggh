import React from 'react'
import '../styles/Buy.css';

const Buy = () => {
  return (
    <div className='buy-container'>
      <h4 className='buy-heading'>shipping details</h4>
      <div>
        <input type='text' className='input-field' placeholder='Street'></input>
        <input type='text' className='input-field' placeholder='city'></input>
        <input type='text' className='input-field' placeholder='State'></input>
        <input type='text' className='input-field' placeholder='Country'></input>
        <input type='text' className='input-field' placeholder='Zip code'></input>
      </div>
    </div>
  )
}

export default Buy
