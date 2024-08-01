import "../styles/Buy.css";
import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import PriceDetails from "./PriceDetails";
import visapay from "../assests/visapay.png";
import { json } from "react-router-dom";

function Payment() {
  const [address,setAddress] = useState('')
  // const navigate = useNavigate();

 

  async function fetchDataProduct() {
    try {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/order`,
        {
          method: "POST",
          headers: {
            projectId: "f104bi07c490",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
          },
          body: {
            productId: "66829fdc95e389fb12359fdc",
            quantity: 1,
            addressType: "HOME",
            address: {
              street: "test@hey.com",
              city: "test@hey.com",
              state: "Rajasthan",
              country: "INDIA",
              zipCode: "307023",
            },
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShirtData(data.data);
        console.log(data.data);
      } else {
        console.log("Failed to fetch products");
      }
    } catch (error) {
      console.error("An error occurred while fetching products", error);
    }
  }

  // const [user, setUser] = useState(null);

  useEffect(() => {
    // const userData = localStorage.getItem('user');
    // if(userData){
    //   setUser(JSON.parse(userData));
    // }

    fetchDataProduct();
  }, []);

  return (
    <>
      <div className="payment-container">
        <div className="pay-box">
          <p className="pay-heading">CHOOSE PAYMENT METHOD</p>
          <div className="pay-card">
            <div className="css-d2uv7k">
              <span>
                <CreditCardTwoToneIcon />
                Debit/Credit card
              </span>
            </div>
            <div className="css-ab0z5a">
              <span>Cash on Delivery</span>
            </div>
          </div>

          <div className="css-mftlzs">
            <div>Enter Your Debit/Credit Card Details</div>
            <form className="css-1u9zz6k">
              <div className="css-1292orw">
                <input type="number" placeholder="Card number" />
              </div>

              <div className="css-1292orw">
                <input type="text" placeholder="Name On The Card" />
              </div>

              <span>Valid through (mm/yy)</span>

              <div className="css-1qoyb3">
                <div className="css-uo6s9x">
                  <div>
                    <input placeholder="MM" maxLength="2" type="number" />
                  </div>
                  <div>
                    <input placeholder="YY" maxLength="2" type="number" />
                  </div>
                </div>
                <div className="css-dekg0">
                  <div>
                    <input placeholder="CVV" maxLength="3" type="number" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ marginTop: "30px", marginRight: "5%", width: "70%" }}>
          
          <PriceDetails />
        </div>
      </div>
      {/* <img className="pay-image" src={visapay}/> */}
    </>
  );
}

export default Payment;

// src/components/Checkout.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Checkout = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     paymentMethod: 'cash',
//     creditCardNumber: '',
//     creditCardExpiry: '',
//     creditCardCvc: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     // Prepare data for the API
//     const orderData = {
//       name: formData.name,
//       email: formData.email,
//       address: formData.address,
//       paymentMethod: formData.paymentMethod,
//       ...(formData.paymentMethod === 'credit' && {
//         creditCardNumber: formData.creditCardNumber,
//         creditCardExpiry: formData.creditCardExpiry,
//         creditCardCvc: formData.creditCardCvc,
//       }),
//     };

//     try {
//       // Replace with your API endpoint
//       const response = await axios.post('https://academics.newtonschool.co/api/v1/ecommerce/order', orderData);
//       setSuccess('Order placed successfully!');
//     } catch (err) {
//       setError('Failed to place order. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{marginTop:'80px'}}>
//       <h2>Checkout</h2>
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Payment Method:</label>
//           <select
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//           >
//             <option value="cash">Cash on Delivery</option>
//             <option value="credit">Credit Card</option>
//           </select>
//         </div>
//         {formData.paymentMethod === 'credit' && (
//           <>
//             <div>
//               <label>Credit Card Number:</label>
//               <input
//                 type="text"
//                 name="creditCardNumber"
//                 value={formData.creditCardNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Expiry Date:</label>
//               <input
//                 type="text"
//                 name="creditCardExpiry"
//                 value={formData.creditCardExpiry}
//                 onChange={handleChange}
//                 required
//                 placeholder="MM/YY"
//               />
//             </div>
//             <div>
//               <label>CVC:</label>
//               <input
//                 type="text"
//                 name="creditCardCvc"
//                 value={formData.creditCardCvc}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </>
//         )}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Processing...' : 'Place Order'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
