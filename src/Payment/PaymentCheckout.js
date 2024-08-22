

import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PriceDetails from "./PriceDetails";


const PaymentCheckout = () => {
  const [itemData, setItemData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [addressType, setAddressType] = useState("HOME");
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("items"));
    if (savedData && savedData.length > 0) {
      setAddress({
        name: savedData[0].name,
        street: savedData[0].address,
        city: savedData[0].city,
        state: savedData[0].state,
        country: "India",
        zipCode: savedData[0].pincode,
      });
    }
  }, []);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !address.name ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.country ||
      !address.zipCode
    ) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setOrderPlaced(true);
  };

  const radioHandleChange = () => {
    setIsRadioSelected(true);
  };

  return (
    <>
      <div className="PaymentPage__Parent">
        <div className="PaymentPage__child">
          <div className="PaymentPage__PaymentOptions">
            <div className="payment-method">
              <div className="card">
                <label>
                  <input
                    className="radio-buttons"
                    type="radio"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={handlePaymentMethodChange}
                    required
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
          </div>
          <form
            onSubmit={handleSubmit}
            className="PaymentPage__AddressAndCheckout"
          >
            {/* <div className="paymentt-container"> */}
            <input
              type="radio"
              onChange={radioHandleChange}
              checked={isRadioSelected}
            />
            <lable className="shoppingAddress">Shipping Address: </lable>
            <select
              className="input-name1"
              value={addressType}
              onChange={(e) => setAddressType(e.target.value)}
            >
              <option value="HOME">Home</option>
              <option value="OFFICE">Office</option>
            </select>
            <input
              className="input-name1"
              type="text"
              value={address.name}
              placeholder="Name"
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              required
            />
            <input
              type="text"
              className="input-name1"
              placeholder="Street"
              value={address.street}
              onChange={(e) =>
                setAddress({ ...address, street: e.target.value })
              }
              required
            />
            <input
              className="input-name1"
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              required
            />
            <input
              className="input-name1"
              type="text"
              placeholder="State"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
              required
            />
            <input
              className="input-name1"
              type="text"
              placeholder="Country"
              value={address.country}
              onChange={(e) =>
                setAddress({ ...address, country: e.target.value })
              }
              required
            />
            <input
              className="input-name1"
              type="number"
              placeholder="Zip Code"
              value={address.zipCode}
              onChange={(e) =>
                setAddress({ ...address, zipCode: e.target.value })
              }
              required
            />
            {/* </div> */}
            <div className="">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  {orderPlaced && (
                    <div
                      style={{
                        margin: "20px",
                        textAlign: "center",
                        color: "green",
                      }}
                    >
                      <h3>Order Placed Successfully!</h3>
                      <p
                        style={{
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        Thank you, {address.name}
                      </p>
                    </div>
                  )}
                </Box>
              </Modal>
            </div>
            <button
              className="payment-btn"
              type="submit"
              onClick={handleOpen}
              disabled={!isRadioSelected}
            >
              PLACE ORDER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentCheckout;


//API call and set radio btn and productID and quantity
// button highlight