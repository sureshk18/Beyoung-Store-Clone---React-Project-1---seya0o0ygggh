import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PriceDetails = () => {
  const [getShirtData, setShirtData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  
  async function fetchData() {
    try {
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart`,
        {
          method: "GET",
          headers: {
            projectId: "f104bi07c490",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
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

  useEffect(() => {
    fetchData();
  }, []);

  const clickMethod = () => {
    if (location.pathname == "/address") navigate("/payment");
    else {
      if (location.pathname == "/payment") {
        navigate("/payment");
      } else {
        navigate("/address");
      }
    }
  };

  return (
    <div className="price-container">
      <h2 className="">PRICE DETAILS</h2>
      {getShirtData.items?.map((seller, index) => {
        return (
          <>
            <div key={index._id} className="price-chart">
              <p>
                Total MRP (Inc. of Taxes){" "}
                <span>&#8377; {getShirtData?.totalPrice}</span>
              </p>
              <p>
                Beyoung Discont{" "}
                <span className="discount">
                  - &#8377; {Math.round((getShirtData?.totalPrice * 20) / 100)}
                </span>
              </p>
              <p>
                Shipping <span className="shipping">&#8377; 49</span>
              </p>
              <p>
                Cart Total{" "}
                <span className="cartTotal">
                  &#8377;{" "}
                  {Math.round(
                    getShirtData?.totalPrice -
                      (getShirtData?.totalPrice * 20) / 100
                  ) + 49}
                </span>
              </p>
            </div>
            <div className="py-mode">
              <h4>
                Total Amount
                <span className="totalAmount">
                  &#8377;{" "}
                  {Math.round(
                    getShirtData?.totalPrice -
                      (getShirtData?.totalPrice * 20) / 100
                  ) + 49}
                </span>
              </h4>
                  
              <h3 className="py-title">
                You Saved ₹ {Math.round((getShirtData?.totalPrice * 20) / 100)}{" "}
                on this order
              </h3>
              <br />
              <h3 className="py-title" onClick={clickMethod} style={{cursor:'pointer'}}>
                {/*<h3 className="py-title" onClick={onHandler}>*/}
                CHECKOUT SECURELY
              </h3>
              {/* <p>{location.key}</p> */}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PriceDetails;