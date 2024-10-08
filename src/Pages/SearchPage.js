import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductDetails from "../Pages/ProductDetails";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SearchPage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("name");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery) {
        const encodedSearchQuery = encodeURIComponent(
          `{"name": "${searchQuery.toLowerCase()}"}`
        );
        const apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${encodedSearchQuery}`;

        const myHeaders = new Headers();
        myHeaders.append("projectId", "f104bi07c490");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
        try {
          const response = await fetch(apiUrl, requestOptions);
          const result = await response.json();

          if (response.ok) {
            if (result.status === "success" && result.results > 0) {
              setSearchResults(result.data);
            } else {
              setSearchResults([]);
            }
          } else {
            console.log("Error:", result.message);
            setSearchResults([]);
          }
        } catch (error) {
          console.log("Fetch Error:", error);
          setSearchResults([]);
        }
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleProductClick = (_id) => {
    navigate(`/ProductDetails${_id}`);
  };
  ProductDetails();

  return (
    <div className="men-containerrr">
      <section className="men-clothessearch">
        <p className="heading-mensearch">Search Results:</p>
        <div className="for-men-shirts-pants">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div
                key={product._id}
                onClick={() => handleProductClick(product)}
                id="zoom-In"
              >
                <figure>
                  <button className="wishlist-button">
                    <FavoriteBorderIcon />
                  </button>
                  <Link to={`/ProductDetails/${product._id}`}>
                    <img
                      src={product.displayImage}
                      alt={product.name}
                      id="zoom-In"
                    />
                  </Link>
                </figure>
                <p className="seller-details">{product.name}</p>
                <p className="seller-subCategory">{product.subCategory}</p>
                <p className="seller-price">Price: &#8377; {product.price}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </section>
      {selectedProduct && <ProductDetails product={setSelectedProduct} />}
    </div>
  );
};

export default SearchPage;
