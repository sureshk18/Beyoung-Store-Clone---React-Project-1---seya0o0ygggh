import React, { useState } from "react";
import "../styles/address.css";
import PriceDetails from "./PriceDetails";
import { Navigate, useNavigate } from "react-router-dom";
// import Checkbox from '@mui/material/Checkbox';

function Order() {
  const [activity, setActivity] = useState("");
  const [data, setData] = useState([]);
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const Navigate = useNavigate();
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function addData() {
    setData((data) => {
      const updateList = [
        ...data,
        activity,
        phone,
        pincode,
        address,
        city,
        state,
      ];
      // console.log(updateList);
      setActivity("");
      setPhone("");
      setPincode("");
      setAddress("");
      setCity("");
      setState("");

      return updateList;
    });
  }

  function removeActivity() {
    setData([]);
  }

  // const onHandler=()=>{
  //   Navigate('/payment')
  // }

  return (
    <>
      <div className="address-container" style={{ marginTop: "80px" }}>
        <div className="form-container">
          <h3 className="heading-address">shipping address</h3>
          <div className="input-form">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="full name"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            ></input>
          </div>

          <div className="input-form">
            <label>Phone Number:</label>
            <input
              type="number"
              placeholder="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>

          <div className="input-form">
            <label>Pincode:</label>
            <input
              type="number"
              placeholder="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            ></input>
          </div>

          <div className="input-form">
            <label>Address:</label>
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>

          <div className="input-form">
            <label>City:</label>
            <input
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>

          <div className="input-form">
            <label>State:</label>
            <input
              type="text"
              placeholder="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            ></input>
          </div>
          <div className="btn">
            <button className="save-btn" onClick={addData}>
              SAVE
            </button>
            <br />
            <button className="cancel-btn" onClick={removeActivity}>
              REMOVE ADDRESS
            </button>
          </div>
          {/* <Checkbox {...label} /> */}
          {data != [] &&
            data.map((key, value) => {
              return (
                <>
                  <div key={value} style={{display:'inline-block'}}>
                    <h4>{key},</h4>
                  </div>
                </>
              );
            })}
        </div>
        <div className="price-address-box">
          <PriceDetails />
          {/* <button style={{width:'100px',height:'40px', alignItems:'center'}} onClick={onHandler}>next</button> */}
        </div>
      </div>
    </>
  );
}

export default Order;
