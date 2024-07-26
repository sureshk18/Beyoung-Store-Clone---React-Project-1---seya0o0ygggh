import "../styles/Buy.css";
import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import PriceDetails from "./PriceDetails";
import visapay from '../assests/visapay.png';

function Payment() {
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
      <div style={{marginTop:'30px',marginRight:'5%',width:'70%'}}>
    <PriceDetails/>
    </div>
    </div>
    {/* <img className="pay-image" src={visapay}/> */}
    </>
  );
}

export default Payment;
