import React, { useEffect, useState } from "react";
import "../styles/address.css";
import PriceDetails from "./PriceDetails";
import { useNavigate } from "react-router-dom";
import PaymentCheckout from "../Payment/PaymentCheckout";

function Order() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("items");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("items", JSON.stringify(data));
    }
  }, [data]);

  function addData() {
    if (name && phone && pincode && address && city && state) {
      const newEntry = { name, phone, pincode, address, city, state };
      setData((prevData) => [...prevData, newEntry]);

      setName("");
      setPhone("");
      setPincode("");
      setAddress("");
      setCity("");
      setState("");
    } else {
      alert("Please fill in all the fields");
    }
  }

  function removeActivity() {
    setData([]);
    localStorage.removeItem("items");
  }

  // const onPaymentHandler = () => {
  //   navigate("/payment");
  // };

  return (
    <>
      <div className="address-container" >
        <div className="form-container">
          <h3 className="heading-address">Shipping Address</h3>
          <div className="input-form">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-form">
            <label>Phone Number:</label>
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input-form">
            <label>Zipcode:</label>
            <input
              type="number"
              placeholder="Zipcode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>

          <div className="input-form">
            <label>Address:</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="input-form">
            <label>City:</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="input-form">
            <label>State:</label>
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="btn">
            <button className="save-btn" onClick={addData}>
              SAVE
            </button>
            <br />
            <button className="cancel-btn" onClick={removeActivity}>
              CANCEL
            </button>
          </div>
        </div>

        <div className="price-address-box">
          <div className="address-data">
            {data.map((item, index) => (
              <div key={index} style={{ display: "inline-block", textTransform: 'capitalize' }}>
                <p><strong>Name: </strong> {item.name}</p>
                <p><strong>Address:</strong> {item.address}, {item.city}, {item.state}, {item.pincode}</p>
                <p><strong>Phone:</strong> {item.phone}</p>
              </div>
            ))}
          </div>

          <div className="product-price-1">
            <PriceDetails />
            </div>
        </div>
      </div>
    </>
  );
}

export default Order;
