import "../styles/Buy.css";
import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import PriceDetails from "./PriceDetails";
import visapay from "../assests/visapay.png";
import { useLocation } from "react-router-dom";

function Payment() {
  const [address, setAddress] = useState("");
  // const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const quantity = useState();

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
              name: "123",
              city: "test",
              state: "Rajasthan",
              country: "INDIA",
              zipCode: "307023",
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
