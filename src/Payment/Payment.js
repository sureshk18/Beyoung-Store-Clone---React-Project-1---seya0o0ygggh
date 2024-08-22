// import "../styles/Buy.css";
// import React, { useEffect, useState } from "react";
// import "../styles/Payment.css";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
// import PriceDetails from "./PriceDetails";
// import visapay from "../assests/visapay.png";
// import { useLocation } from "react-router-dom";
// import Address from "../Payment/Address";
// import OrderSummary from "./OrderSummary";
// // import Box from '@mui/material/Box';
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// function Payment(props) {
//   const [address, setAddress] = useState({
//     city: "",
//     state: "",
//     country: "",
//     zipCode: "",
//   });
//   const [data, setData] = useState([]);
//   const location = useLocation();
//   console.log(location);
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const [value, setValue] = useState([]);
//   const[number,setNumber]  =useState("");
//   const [name, setName] = useState("");
//   const [mm, setMm] = useState("");
//   const [yy, setYy] = useState("");
//   const [cvv,setCvv] = useState("");

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

//   async function fetchDataProduct() {
//     try {
//       const res = await fetch(
//         `https://academics.newtonschool.co/api/v1/ecommerce/order${_id}`,
//         {
//           method: "POST",
//           headers: {
//             projectId: "f104bi07c490",
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
//           },
//           body: {
//             productId: { _id },
//             quantity: 1,
//             addressType: "HOME",
//             address: {
//               city: "jaipur",
//               state: "Rajasthan",
//               country: "India",
//               zipCode: "30032",
//             },
//           },
//         }
//       );
//       if (res.ok) {
//         const data = await res.json();
//         setShirtData(data.data.data);
//         // console.log(data.data.data);
//       } else {
//         console.log("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching products", error);
//     }
//   }

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   function handleChange(e) {
//     setValue(e.target.value);
//   }

//   // const [user, setUser] = useState(null);
//   // useEffect(() => {
//   //   const storedData = localStorage.getItem("items");
//   //   if (storedData) {
//   //     setData(JSON.parse(storedData));
//   //   }
//   // }, []);
//   // localStorage.setItem("items", JSON.stringify(data));

//   useEffect(() => {
//     // localStorage.getItem("items", JSON.stringify(data));
//     fetchDataProduct();
//   }, []);

//   return (
//     <>
//       <div className="payment-container">
//         <form onSubmit={handleSubmit}>
//           <div className="pay-box">
//             <p className="pay-heading">CHOOSE PAYMENT METHOD</p>
//             <div className="pay-card">
//               {/* <div className="css-d2uv7k">
//                 <span>
//                   <CreditCardTwoToneIcon />
//                   Debit/Credit card
//                 </span>
//               </div> */}
//               <div className="css-ab0z5a">
//                 <span>Card</span>
//                 <input
//                   type="radio"
//                   label="Credit/Debit Card"
//                   value="card"
//                   checked={paymentMethod === "card"}
//                   onChange={handlePaymentMethodChange}
//                 />
//               </div>
//               <div className="css-ab0z5a">
//                 <span>cash on delivery</span>
//                 <input
//                   type="radio"
//                   placeholder="Cash on Delivery"
//                   value="cod"
//                   checked={paymentMethod === "cod"}
//                   onChange={handlePaymentMethodChange}
//                 />
//               </div>
//             </div>
//             {paymentMethod === "card" && (
//               <>
//                 {" "}
//                 <div className="css-mftlzs">
//                   <div>Enter Your Debit/Credit Card Details</div>
//                   <form className="css-1u9zz6k">
//                     <div className="css-1292orw">
//                       <input
//                         type="number"
//                         placeholder="Card number"
//                         value={number}
//                         onChange={(e) => setNumber(e.target.value) }
//                         required
//                       />
//                     </div>

//                     <div className="css-1292orw">
//                       <input
//                         type="text"
//                         placeholder="Name On The Card"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                       />
//                     </div>

//                     <span>Valid through (mm/yy)</span>

//                     <div className="css-1qoyb3">
//                       <div className="css-uo6s9x">
//                         <div>
//                           <input
//                             placeholder="MM"
//                             maxLength="2"
//                             // type="number"
//                             value={mm}
//                             onChange={(e) => setMm(e.target.value)}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <input
//                             placeholder="YY"
//                             maxLength="4"
//                             // type="number"
//                             value={yy}
//                             onChange={(e) => setYy(e.target.value)}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="css-dekg0">
//                         <div>
//                           <input
//                             placeholder="CVV"
//                             maxLength="3"
//                             value={cvv}
//                             // type="number"
//                             onChange={(e) => setCvv(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </>
//             )}
//             {/* <button type="submit">Place Order</button> */}
//           </div>
//         </form>

//         <div>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                 Order Placed
//               </Typography>
//             </Box>
//           </Modal>
//           <Button onClick={handleOpen} disabled={!value}>
//             Place Order
//           </Button>
//         </div>

//         {/* <div style={{ marginTop: "30px", marginRight: "5%", width: "70%" }}>
//           <PriceDetails />
//         </div> */}
//       </div>
//       {/* <img className="pay-image" src={visapay}/> */}
//     </>
//   );
// }

// export default Payment;

// // src/CheckoutPage.js
// import React, { useState } from "react";
// import { Button, Form, Container, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import OrderSummary from "../Payment/OrderSummary";
// import '../styles/Payment.css';

// const CheckoutPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [showSummary, setShowSummary] = useState(false);
//   const navigate = useNavigate();

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setShowSummary(true);
//   };

//   return (
//     <>
//     <div className="payment-container">
//     {/* <Container style={{ marginTop: "90px", height:'auto'}}> */}
//         <h2>Payment Information</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="paymentMethod">
//             <Form.Label>Payment Method</Form.Label>
//             <Form.Check
//               type="radio"
//               label="Credit/Debit Card"
//               value="card"
//               checked={paymentMethod === "card"}
//               onChange={handlePaymentMethodChange}
//             />
//             <Form.Check
//               type="radio"
//               label="Cash on Delivery"
//               value="cod"
//               checked={paymentMethod === "cod"}
//               onChange={handlePaymentMethodChange}
//             />
//           </Form.Group>

//           {paymentMethod === "card" && (
//             <>
//               <Form.Group controlId="cardNumber">
//                 <Form.Label>Card Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter card number"
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="expiryDate">
//                 <Form.Label>Expiry Date</Form.Label>
//                 <Form.Control type="text" placeholder="MM/YY" required />
//               </Form.Group>
//               <Form.Group controlId="cvv">
//                 <Form.Label>CVV</Form.Label>
//                 <Form.Control type="text" placeholder="CVV" required />
//               </Form.Group>
//             </>
//           )}
//           <Button type="submit">Place Order</Button>
//         </Form>
//         <Modal show={showSummary} onHide={() => setShowSummary(false)}>
//           {/* <OrderSummary /> */}
//         </Modal>
//       {/* </Container> */}
//     </div>

//     {/* PriceDetails  */}

//     </>
//   );
// };

// export default CheckoutPage;

//=-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import "../styles/Buy.css";
// import React, { useEffect, useState } from "react";
// import "../styles/Payment.css";
// import Box from "@mui/material/Box";
// import { useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// function Payment(props) {
//   const [address, setAddress] = useState({
//     city: "",
//     state: "",
//     country: "",
//     zipCode: "",
//   });
//   const [data, setData] = useState([]);
//   const location = useLocation();
//   console.log(location);
//   const [paymentMethod, setPaymentMethod] = useState("cod");
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   // const [value, setValue] = useState("");
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

//   async function fetchDataProduct() {
//     try {
//       const res = await fetch(
//         `https://academics.newtonschool.co/api/v1/ecommerce/order${_id}`,
//         {
//           method: "POST",
//           headers: {
//             projectId: "f104bi07c490",
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
//           },
//           body: {
//             productId: { _id },
//             quantity: 1,
//             addressType: "HOME",
//             address: {
//               city: "jaipur",
//               state: "Rajasthan",
//               country: "India",
//               zipCode: "30032",
//             },
//           },
//         }
//       );
//       if (res.ok) {
//         const data = await res.json();
//         setShirtData(data.data.data);
//       } else {
//         console.log("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching products", error);
//     }
//   }

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Order details:', {
//       name,
//       email,
//       phone,
//       paymentMethod});
//       setOrderPlaced(true);
//   };
  

//   function handleNumberChange(e) {
//     setNumber(e.target.value);
//   }
//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   useEffect(() => {
//     fetchDataProduct();
//   }, []);

//   return (
//     <>
//       <div className="payment-container">
//         <form onSubmit={handleSubmit}>
//           <div className="pay-box">
//             <p className="pay-heading">CHOOSE PAYMENT METHOD</p>
//             <div className="pay-card">
//               <div className="css-ab0z5a">
//                 <span>Card</span>
//                 <input
//                   type="radio"
//                   value="card"
//                   checked={paymentMethod === "card"}
//                   onChange={handlePaymentMethodChange}
//                 />
//               </div>
//               <div className="css-ab0z5a">
//                 <span>cash on delivery</span>
//                 <input
//                   type="radio"
//                   value="cod"
//                   checked={paymentMethod === "cod"}
//                   onChange={handlePaymentMethodChange}
//                 />
//               </div>
//             </div>
//             {paymentMethod === "card" && (
//               <>
//                 {" "}
//                 <div className="css-mftlzs">
//                   <div>Enter Your Debit/Credit Card Details</div>
                 
//                     <div className="css-1292orw">
//                       <input
//                         type="number"
//                         placeholder="Card number"
//                         value={number}
//                         onChange={handleNumberChange}
//                         required
//                       />
//                     </div>

//                     <div className="css-1292orw">
//                       <input
//                         type="text"
//                         placeholder="Name On The Card"
//                         value={name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
               
//                 </div>
//               </>
//             )}
//             {/* <button type="submit">Place Order</button> */}
//           </div>

//           <div>
//             <Modal open={open} onClose={handleClose}>
//               <Box sx={style}>Order Placed successfully</Box>
//             </Modal>
//             <Button onClick={handleOpen} disabled={!name}>
//               Place Order
//             </Button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Payment;



// src/Payment.js

import React, { useState } from 'react';

const Payment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [error, setError] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!name || !email || !phone) {
            setError('Please fill in all fields.');
            return;
        }

        // Simulate order placement
        console.log('Order details:', {
            name,
            email,
            phone,
            paymentMethod,
        });
        
        // Clear the error message and set orderPlaced to true
        setError('');
        setOrderPlaced(true);
    };

    return (
        <div style={{marginTop:'90px'}}>
            <h2>Payment Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={handlePaymentMethodChange}
                        />
                        Pay with Card
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={handlePaymentMethodChange}
                        />
                        Cash on Delivery (COD)
                    </label>
                </div>
                {paymentMethod === 'card' && (
                    <div>
                        <label>Card Details:</label>
                        <input
                            type="text"
                            placeholder="Card Number"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Expiration Date (MM/YY)"
                            required
                        />
                        <input
                            type="text"
                            placeholder="CVC"
                            required
                        />
                    </div>
                )}
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Place Order</button>
            </form>

            {orderPlaced && (
                <div style={{ marginTop: '20px', color: 'green' }}>
                    <h3>Order Placed Successfully!</h3>
                    <p>Thank you for your order, {name}!</p>
                </div>
            )}
        </div>
    );
};

export default Payment;


// import React, { useState } from 'react';

// const PaymentCheckout = () => {
//   const [productID, setProductID] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [addressType, setAddressType] = useState('HOME');
//   const [address, setAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: ''
//   });

//   const handleOrder = async () => {
//     const url = `https://academics.newtonschool.co/api/v1/ecommerce/order`;

//     const orderData = {
//       productId: productID,
//       quantity: quantity,
//       addressType: addressType,
//       address: address
//     };

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
//           'projectID': 'Your_ProjectId',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(orderData)
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log('Order placed successfully:', result);
//       } else {
//         console.error('Error placing order:', result);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//     }
//   };

//   return (
//     <div style={{marginTop:'90px'}}>
//       <h1>Place Your Order</h1>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         handleOrder();
//       }}>
//         <input
//           type="text"
//           placeholder="Product ID"
//           value={productID}
//           onChange={(e) => setProductID(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//         />
//         <select
//           value={addressType}
//           onChange={(e) => setAddressType(e.target.value)}
//         >
//           <option value="HOME">Home</option>
//           <option value="OFFICE">Office</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Street"
//           value={address.street}
//           onChange={(e) => setAddress({ ...address, street: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           value={address.city}
//           onChange={(e) => setAddress({ ...address, city: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="State"
//           value={address.state}
//           onChange={(e) => setAddress({ ...address, state: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Country"
//           value={address.country}
//           onChange={(e) => setAddress({ ...address, country: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Zip Code"
//           value={address.zipCode}
//           onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
//         />
//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentCheckout;



























//no final but just near by final page 

// import React, { useEffect, useState } from "react";
// import "../styles/Payment.css";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import PriceDetails from "./PriceDetails";
// import { useLocation } from "react-router-dom";

// const PaymentCheckout = () => {
//   const [itemData, setItemData] = useState([]);
//   const [paymentMethod, setPaymentMethod] = useState("cod");
//   const [error, setError] = useState("");
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [addressType, setAddressType] = useState("HOME");
//   const [address, setAddress] = useState({
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     country: "",
//     zipCode: "",
//   });

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "1px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("items"));
//     if (savedData && savedData.length > 0) {
//       setAddress({
//         name: savedData[0].name,
//         street: savedData[0].address,
//         city: savedData[0].city,
//         state: savedData[0].state,
//         country: "India",
//         zipCode: savedData[0].pincode,
//       });
//     }
//   }, []);

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (
//       !address.name ||
//       !address.street ||
//       !address.city ||
//       !address.state ||
//       !address.country ||
//       !address.zipCode
//     ) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     setError("");
//     setOrderPlaced(true);
//   };

//   return (
//     <>
//       <h2 className="pay-heading">100% secure payment</h2>
//       <div>
//         <div className="checkout-container">
//         <form onSubmit={handleSubmit}>
//           <div className="paymentt-container">
//             <select
//               className="input-name1"
//               value={addressType}
//               onChange={(e) => setAddressType(e.target.value)}
//             >
//               <option value="HOME">Home</option>
//               <option value="OFFICE">Office</option>
//             </select>
//             <input
//               className="input-name1"
//               type="text"
//               value={address.name}
//               placeholder="Name"
//               onChange={(e) => setAddress({ ...address, name: e.target.value })}
//               required
//             />

//             <input
//               type="text"
//               className="input-name1"
//               placeholder="Street"
//               value={address.street}
//               onChange={(e) =>
//                 setAddress({ ...address, street: e.target.value })
//               }
//               required
//             />
//             <input
//               className="input-name1"
//               type="text"
//               placeholder="City"
//               value={address.city}
//               onChange={(e) => setAddress({ ...address, city: e.target.value })}
//               required
//             />
//             <input
//               className="input-name1"
//               type="text"
//               placeholder="State"
//               value={address.state}
//               onChange={(e) =>
//                 setAddress({ ...address, state: e.target.value })
//               }
//               required
//             />
//             <input
//               className="input-name1"
//               type="text"
//               placeholder="Country"
//               value={address.country}
//               onChange={(e) =>
//                 setAddress({ ...address, country: e.target.value })
//               }
//               required
//             />
//             <input
//               className="input-name1"
//               type="number"
//               placeholder="Zip Code"
//               value={address.zipCode}
//               onChange={(e) =>
//                 setAddress({ ...address, zipCode: e.target.value })
//               }
//               required
//             />

//             <div className="payment-method">
//               <div className="card">
//                 <label>
//                   <input
//                     className="radio-buttons"
//                     type="radio"
//                     value="card"
//                     checked={paymentMethod === "card"}
//                     onChange={handlePaymentMethodChange}
//                   />
//                   Debit/Credit Card
//                 </label>
//               </div>
//               <div className="card">
//                 <label>
//                   <input
//                     type="radio"
//                     value="cod"
//                     checked={paymentMethod === "cod"}
//                     onChange={handlePaymentMethodChange}
//                   />
//                   Cash on Delivery
//                 </label>
//               </div>
//             </div>
//             {paymentMethod === "card" && (
//               <div className="cardDetails">
//                 <label>Card Details:</label>
//                 <input
//                   className="card-input"
//                   type="text"
//                   maxLength={19}
//                   placeholder="Card Number"
//                   required
//                 />
//                 <input
//                   className="card-input"
//                   type="text"
//                   maxLength={4}
//                   placeholder="Expiration Date (MM/YY)"
//                   required
//                 />
//                 <input
//                   className="card-input"
//                   type="text"
//                   maxLength={3}
//                   placeholder="CVC"
//                   required
//                 />
//               </div>
//             )}
//             {error && <div style={{ color: "red" }}>{error}</div>}
//           </div>
//           <div  className="checkout-price-container">
//             <PriceDetails />
//           </div>
//           <div className="">
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//             >
//               <Box sx={style}>
//                 {orderPlaced && (
//                   <div
//                     style={{
//                       margin: "20px",
//                       textAlign: "center",
//                       color: "green",
//                     }}
//                   >
//                     <h3>Order Placed Successfully!</h3>
//                     <p
//                       style={{
//                         textTransform: "capitalize",
//                         textAlign: "center",
//                       }}
//                     >
//                       Thank you, {address.name}
//                     </p>
//                   </div>
//                 )}
//               </Box>
//             </Modal>
//           </div>
//           <button className="payment-btn" type="submit" onClick={handleOpen}>
//             PLACE ORDER
//           </button>
//         </form>
//       </div>
//       </div>
//     </>
//   );
// };

// export default PaymentCheckout;