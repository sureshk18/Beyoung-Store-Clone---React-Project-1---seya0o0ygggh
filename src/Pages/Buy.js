import React from 'react'
import '../styles/Buy.css';
import PaymentIcon from '@mui/icons-material/Payment';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Buy = () => {
  
  return (
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
  )
}

export default Buy
