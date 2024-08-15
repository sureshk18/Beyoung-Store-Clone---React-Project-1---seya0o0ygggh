import React, { useEffect, useState } from "react";
import PriceDetails from "../Payment/PriceDetails";
import "../styles/Payment.css";

const PaymentCheckout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  //   const [data, setData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  {
    /*local storage data
  useEffect(() => {
    const storedData = localStorage.getItem("items");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data]);
  */
  }

  async function fetchDataProduct() {
    try {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/order${_id}`,
        {
          method: "POST",
          headers: {
            projectId: "f104bi07c490",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
          },
          body: {
            productId: { _id },
            quantity: 1,
            addressType: "HOME",
            address: {
              city: "jaipur",
              state: "Rajasthan",
              country: "India",
              zipCode: "30032",
            },
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShirtData(data.data.data);
        // console.log(data.data.data);
      } else {
        console.log("Failed to fetch products");
      }
    } catch (error) {
      console.error("An error occurred while fetching products", error);
    }
  }

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    // if (!name || !email || !phone) {
    if (!name || !email ) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Order details:", {
      name,
      email,
      // phone,
      paymentMethod,
    });

    // Clear the error message and set orderPlaced to true
    setError("");
    setOrderPlaced(true);
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="paymentt-container">
        <h4 className="pay-heading">CHOOSE PAYMENT METHOD</h4>
        
          <div className="input-field">
          <div className="input-fieldd">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
        
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* <div>
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div> */}
          </div>
          <div className="payment-method">
            <div className="card">
              <label>
                <input
                className="radio-buttons"
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={handlePaymentMethodChange}
                />
                Debit/Credit Card
              </label>
            </div>
            <div className="card">
              <label>
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          {paymentMethod === "card" && (
            <div className="cardDetails">
              <label>Card Details:</label>
              <input
                className="card-input"
                type="text"
                maxLength={19}
                placeholder="Card Number"
                required
              />
              <input
                className="card-input"
                type="text"
                maxLength={4}
                placeholder="Expiration Date (MM/YY)"
                required
              />
              <input
                className="card-input"
                type="text"
                maxLength={3}
                placeholder="CVC"
                required
              />
            </div>
          )}
          {error && <div style={{ color: "red" }}>{error}</div>}
        

        {orderPlaced && (
          <div style={{ marginTop: "20px", color: "green" }}>
            <h3>Order Placed Successfully!</h3>
            <p>Thank you for your order, {name}!</p>
          </div>
        )}
          
      </div>
      <div>{/* <PriceDetails/> */}</div>
      <button className="payment-btn" type="submit">PLACE ORDER</button>
          </form>
    </>
  );
};

export default PaymentCheckout;
