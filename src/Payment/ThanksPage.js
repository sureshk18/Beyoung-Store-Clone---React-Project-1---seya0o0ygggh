import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/ThanksPage.css';
import congrats from "../assests/congrats.png";



const ThanksPage = () => {
  const [cartItem, setCartitem] = useState([]);
 
  const deleteResponse = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart`,
        {
          method: "DELETE",
          headers: {
            projectId: "f104bi07c490",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCartitem(data.data.items);
      } else {
        console.log("Failed to fetch products");
      }
    } catch (error) {
      console.error("An error occurred while fetching products", error);
    }
  };
  useEffect(() => {
    deleteResponse();
  }, []);


  return (
      <>
      <div className="thankyou__Parent">
      <div className="thankyou__child">
        <img src={congrats} className='congrats'/>
        <h3>You Have SuccessFully Placed Your Order</h3>
        <Link to="/">
          <button onClick={deleteResponse} className="thankyoubutton">Click here to shop More</button>
        </Link>
      </div>
    </div>
      </>
  )
}

export default ThanksPage
