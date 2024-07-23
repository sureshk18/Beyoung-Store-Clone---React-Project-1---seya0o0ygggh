import React, { useEffect, useState, useMemo, useCallback } from "react";
import "../styles/Women.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/UserProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _debounce from "lodash/debounce";

function Women() {
  const [getProducts, setProducts] = useState([]);
  const { token } = useAuth();
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchProduct = useCallback(async () => {
    if (isFetching || !hasMore) {
      return;
    }
    try {
      setIsFetching(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=10&page=${page}&filter={"gender":"Women"}`,
        {
          method: "GET",
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        // setProducts(data.data);
        setProducts((prevData) => [...prevData, ...data.data]);
        if (data.data.length < 10) {
          setHasMore(false);
        }
        setPage((prevPage) => prevPage + 1);
      } else {
        console.log("Failed to fetch products");
        setError("Failed to fetch products");
      }
    } catch (error) {
      console.error("An error occurred while fetching products", error);
      setError("Error fetching data. Please try again.");
    } finally {
      setIsFetching(false);
    }
  }, [page, isFetching, hasMore]);

  const handleScroll = _debounce(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 500) {
      fetchProduct();
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    fetchProduct();
  }, []);

  //Add wishlist
  const addWishlist = async (id) => {
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
      <div className="women-container">
        <section className="women-clothess">
          <p className="heading-womens">WOMENS CLOTHING</p>
          <p className="heading-womenss">
            Women's Clothing - Get your hands on stylish and comfortable
            clothing for women - Buy a range of ladies' clothing online at
            affordable prices. Beyoung offers the latest collection of Kurtis,
            shirts, tops, t-shirts, pants, boxers, and jeggings with existing
            offers and discounts. Find women's clothing for formal to weekend
            outings in all styles. Free Shipping | COD | S - 4XL Sizes | 15 Days
            Return
          </p>
          <div className="for-women-shirts-pants">
            {getProducts.length > 0 &&
              getProducts.map((seller, index) => (
                <div key={index}>
                  <button
                    className="wishlist-button"
                    onClick={() => addWishlist(seller._id)}
                  >
                    <FavoriteBorderIcon />
                  </button>
                  <Link to={`/product-details/${seller._id}`}>
                    <img src={seller.displayImage} className="img" />
                  </Link>
                  <h2 className="seller-details">{seller.name}</h2>
                  <p className="seller-subCategory">{seller.subCategory}</p>
                  <p className="seller-price">Price : &#8377; {seller.price}</p>
                </div>
              ))}
            {isFetching && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!hasMore && <p>No more products to display.</p>}
          </div>
        </section>
      </div>
    </>
  );
}

export default Women;
