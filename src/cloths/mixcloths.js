import React, { useEffect, useState } from "react";
import "../styles/Mens.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/UserProvider";
import Tshirtss from "../assests/Tshirtss.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function MixCloths() {
  const [getShirtData, setShirtData] = useState([]);
  const { cloth, gender } = useAuth();
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?&filter={"gender":"${gender}","subCategory":"${cloth}"}`,
          {
            method: "GET",
            headers: {
              projectId: "f104bi07c490",
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          setShirtData(data.data);
        } else {
          console.log("Failed to fetch products");
        }
      } catch (error) {
        console.error("An error occurred while fetching products", error);
      }
    }

    fetchData();
  }, [cloth, gender]);

  //Add to Wishlist
  const addProductToFavourite = async (id) => {
    const obj = JSON.stringify({ productId: id });
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
            projectID: "f104bi07c490",
            "Content-Type": "application/json",
          },
          body: obj,
        }
      );
      if (response.ok) {
        const data = await response.json();
        toast("Product added to wishlist successfully", data);
      } else {
        toast("Failed to update wishlist");
      }
    } catch (error) {
      console.error("An error occurred while updating wishlist", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div style={{ margin: "130px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ gap: "13px", marginLeft: "20px" }}
          >
            {
              getShirtData.map((seller, index) => {
                return (
                  <div key={index} size={{ xs: 2, sm: 4, md: 8 }}>
                    <button
                      className="wishlist-button"
                      onClick={() => addProductToFavourite(seller._id)}
                    >
                      <FavoriteBorderIcon />
                    </button>
                    <Link to={`/product-details/${seller._id}`}>
                      <img
                        className="mens-img"
                        src={seller.displayImage}
                        alt={getShirtData.name}
                        style={{height:'350px',width:'100%'}}
                        spacing={3}
                      />
                    </Link>
                    <h2 className="seller-details" style={{ alignItems: "center", marginLeft: "10px" }}>{seller.name}</h2>
                    <p className="seller-subCategory" >{seller.subCategory}</p>
                    {/* <p className='product-category'>{seller.name}</p> */}
                    <p className="seller-price">
                      Price : &#8377; {seller.price}
                    </p>
                  </div>
                );
              })}
          </Grid>
        </Box>
      </div>
      
    </>
  );
}

export default MixCloths;
