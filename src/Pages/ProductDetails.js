import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/ProductDetails.css";
import { useAuth } from "../Context/UserProvider";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Divider, LinearProgress, Rating } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import Carticon from '../assets/carticon.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StarRating = ({ rating }) => {
  if (typeof rating !== "number") {
    return null;
  }
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const remainder = rating % 1;
  const halfStar = remainder >= 0.25 && remainder <= 0.9;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={i} />);
  }

  if (halfStar) {
    stars.push(<StarHalfIcon key="half" />);
  }

  const emptyStars = maxRating - stars.length;

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarBorderIcon key={`empty${i}`} />);
  }

  return (
    <span>
      {stars}
      {typeof rating === "number" && (
        <span className="rating-number"> ({rating.toFixed(2)})</span>
      )}
    </span>
  );
};

function ProductDetails() {
  const { _id } = useParams();
  const [getProductData, setProductData] = useState();
  const [selectedImage, setSelectedImage] = useState("");

  const getProduct = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`,
        {
          method: "GET",
          headers: {
            projectID: "f104bi07c490",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProductData(data.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("err", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [_id]);

  useEffect(() => {
    localStorage.setItem('productId',_id);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Add to cart
  const addToCart = async (id) => {
    const obj = JSON.stringify({ productId: id });
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo",
            projectID: "f104bi07c490",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        toast("Product added to cart successfully", data);
      } else {
        toast("Failed to update cart");
      }
    } catch (error) {
      console.error("An error occurred while updating cart", error);
    }
  };

  // Add to wishlist
  const addProductToFavourite = async (id) => {
    const obj = JSON.stringify({ productId: id });
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
        {
          method: "PATCH",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo",
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
  function selectSize(size) {
    console.log(size);
    setProductData((prevData) => ({
      ...prevData,
      selectedSize: size,
    }));
  }

  return (
    <>
      <ToastContainer />
      <div className="product-component-container">
        <div className="product-component-box">
          <div className="product-left">
            <div className="forImageShowing">
              {getProductData?.images &&
                getProductData?.images
                  .slice(0, 5)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index}`}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
            </div>

            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected Image"
                className="bigImage"
                onClick={() => handleImageClick(selectedImage)}
              />
            ) : (
              getProductData?.displayImage && (
                <img
                  src={getProductData?.displayImage}
                  alt="Default Display Image"
                  className="display-image"
                  onClick={() => handleImageClick(getProductData.displayImage)}
                />
              )
            )}
          </div>

          <div className="product-right">
            {getProductData ? (
              <>
                <h5>{getProductData.name}</h5>
                <p>{getProductData.subCategory}</p>
                <b>Price: &#8377; {getProductData.price}</b>
                <span className="discounted-text">
                  Inclusive of All Taxes + Free Shipping
                </span>

                <section className="rating-container">
                  <StarRating rating={getProductData.ratings} />
                </section>
                <p className="color">COLOR : {getProductData.color}</p>

                {/* Size chart */}
                <label htmlFor="sizeChart">SIZE</label>
                <div className="size-chart-container">
                  {getProductData.size &&
                    getProductData.size.map((size, index) => (
                      <button
                        key={index}
                        className={`size-button ${
                          getProductData.selectedSize === size ? "selected" : ""
                        }`}
                        onClick={() => selectSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                </div>
              </>
            ) : null}
            <label htmlFor="qty">
              QTY<sup>*</sup>
              <select name="" id="">
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

            <div className="btn-cart-buy">
              <button
                className="btn-cartt"
                onClick={() => addToCart(getProductData._id)}
              >
                add to cart
              </button>
              <button
                className="product-wishlist"
                onClick={() => addProductToFavourite(getProductData._id)}
              >
                add to wishlist
              </button>
              <button className="btn-cartt">
                <Link
                  to="/checkout"
                  style={{ color: "#0a7bba", textDecoration: "none" }}
                >
                  buy now
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="product-description-container">
          <h2>Product Description</h2>
          <br></br>
          <div
            dangerouslySetInnerHTML={{
              __html: getProductData?.description || "",
            }}
          ></div>
        </div>

        <div className="ratings-review-container">
          <h3>Rating & Reviews</h3>
          <div className="ratings-review-section">
            <div className="review-section-left">
              <h3>{getProductData?.ratings.toFixed(2)}</h3>
              <StarRating rating={getProductData?.ratings} />
              <p>Based on 31K+ ratings and 9K+ reviews</p>
            </div>
            <div className="review-section-right">
              <h4>Product reviews</h4>
              <p>
                <ThumbUpIcon />
                91% of customers recommend this brand
              </p>
              <Divider sx={{ marginBottom: "2rem" }} />
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="rating-bar">
                  <span>{rating}</span>
                  <StarBorderIcon />
                  <LinearProgress
                    style={{ width: "80%" }}
                    color="inherit"
                    variant="determinate"
                    value={60}
                  />
                  <span>80+</span>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
