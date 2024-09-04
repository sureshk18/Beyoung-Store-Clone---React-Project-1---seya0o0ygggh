import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import PriceDetails from "./PriceDetails";
import { useParams, Link } from "react-router-dom";

const PaymentCheckout = () => {
  const [itemData, setItemData] = useState([]);
  // const [paymentMethod, setPaymentMethod] = useState("");
  const [addressType, setAddressType] = useState("HOME");
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const { _id } = useParams();

  async function fetchOrderData() {
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
            "productId": "{{_id}}",
            "quantity": 2,
            "addressType": "HOME",
            "address": {
              "street": "123 main st",
              "city": "Pindwara",
              "state": "Rajasthan",
              "country": "India",
              "zipcode": "307022",
            },
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setItemData(data.data);
        // console.log(data.data);
      } else {
        console.log("Failed to fetch products");
      }
    } catch (error) {
      console.error("An error occurred while fetching products", error);
    }
  }

  useEffect(() => {
    fetchOrderData();
  }, []);

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

  // useEffect(() => {
  //   const storedData = localStorage.getItem('myDataKey');
  //   if (storedData) {
  //     setAddress(JSON.parse(storedData));
  //   }
  // }, []);

  // const handlePaymentMethodChange = (event) => {
  //   setPaymentMethod(event.target.value);
  // };

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
      <div className="PaymentPage__Parent" >
        <div className="PaymentPage__child">
          <div className="PaymentPage__PaymentOptions">

            {/*PAYMENT OPTION*/}
            <div className="payment-method">
              <div className="card">
                <label>
                  <input
                    className="btn-radio"
                    type="radio"
                    onChange={radioHandleChange}
                    checked={isRadioSelected}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
            <p style={{padding:'10px', fontWeight:'400'}}>More Payments Options<br/>
            Will Be Added Soon</p>
          </div>


          {/*PRICE CHART */}
          <div className="PaymentPage__AddressAndCheckout">
            <div className="price-chartt"><PriceDetails /> </div>     
          </div>



          {/*USER ADDRESS DETAILS */}
          <form
            onSubmit={handleSubmit}
            className="PaymentPage__AddressAndCheckout"
          >
            <lable className="shoppingAddress">SHIPPING ADDRESS: </lable>
            <select
              className="input-name1"
              value={addressType}
              onChange={(e) => setAddressType(e.target.value)}
            >
              <option value="HOME">Home</option>
              <option value="OFFICE">Office</option>
            </select>

            <div className="input-name1">
            <h3><b>Name: </b>{address.name}</h3>
              <p><b>Street: </b>{address.street}</p>
              <p><b>City: </b> {address.city}</p>
              <p><b>State: </b> {address.state}</p>
              <p><b>Zipcode: </b> {address.zipCode}</p>
              <p><b>Country: </b>{address.country}</p>
            </div>
            <Link to="/thankyou">
              <button className="payment-btn" disabled={!isRadioSelected} >
                PLACE ORDER
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentCheckout;
