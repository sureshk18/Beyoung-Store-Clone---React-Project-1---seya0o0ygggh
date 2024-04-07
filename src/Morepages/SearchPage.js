import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetails from '../Pages/ProductDetails';
import { Link, useNavigate } from 'react-router-dom';
import '../Morepages/SearchPage.css';
const SearchPage = () => {

    const searchQuery = new URLSearchParams(location.search).get('name');
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchQuery) {
                const encodedSearchQuery = encodeURIComponent(`{"name": "${searchQuery.toLowerCase()}"}`);
                const apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${encodedSearchQuery}`;

                try {
                    const response = await fetch(apiUrl, requestOptions);
                    const result = await response.json();

                    if (response.ok) {
                        if (result.status === 'success' && result.results > 0) {
                            setSearchResults(result.data);

                        } else {
                            setSearchResults([]);
                        }
                    } else {
                        console.log('Error:', result.message);
                        setSearchResults([]);
                    }
                } catch (error) {
                    console.log('Fetch Error:', error);
                    setSearchResults([]);
                }
            }
        };

        fetchSearchResults();
    }, [searchQuery]);

    const handleProductClick = (getProductData) => {
        navigate(`/product-details/${getProductData._id}`, {
        });
    };

    return (
        <div className="men-container">
            <section className="men-clothessearch">
                <p className="heading-mensearch">Search Results:</p>
                <div className="for-shirts-pants">
                    {searchResults.length > 0 ? (
                        searchResults.map((product) => (
                            <div key={product._id} onClick={() => handleProductClick(product)} id='zoom-In'>
                                <figure>
                                    <img src={getProductData.displayImage} alt={getProductData.name} loading="lazy" />
                                </figure>
                                <p className='headingsearch'>{getProductData.name}</p>
                                <p className='headingsearch1'>{getProductData.subCategory}</p>
                                <p className='headingsearch'>₹{getProductData.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </section>
            {selectedProduct && <ProductDetails product={selectedProduct} />}
        </div>
    );
};

export default SearchPage;
