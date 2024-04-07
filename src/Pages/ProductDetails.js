import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Divider, LinearProgress, Rating } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const StarRating = ({ rating }) => {
    if (typeof rating !== "number") {
        return null; // or handle the case when rating is undefined or not a number
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

}

function ProductDetails() {
    const { _id } = useParams();
    const [getProductData, setProductData] = useState();
    const [selectedImage, setSelectedImage] = useState("");


    const getProduct = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`, {
                method: 'GET',
                headers: {
                    projectID: 'seya0o0ygggh',
                },
            });
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

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    return (
        <div className='product-component-container'>
            <div className='product-component-box'>
                <div className='product-left'>
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


                        {selectedImage ? (
                            <img
                                src={selectedImage}
                                alt="Selected Image"
                                onClick={() => handleImageClick(selectedImage)}
                            />
                        ) : (
                            getProductData?.displayImage && (
                                <img
                                    src={getProductData?.displayImage}
                                    alt="Default Display Image"
                                // onClick={() => handleImageClick(getProductData.displayImage)}
                                />
                            )
                        )}
                    </div>

                </div>

                <div className='product-right'>
                    {(getProductData) ? (<>
                        <h5 >{getProductData.name}</h5>
                        <p>{getProductData.subCategory}</p>
                        <b>Price: &#8377; {getProductData.price}</b>
                        <span className="discounted-text">
                            Inclusive of All Taxes + Free Shipping
                        </span>

                        <section className="rating-container">
                            <StarRating rating={getProductData.ratings} />
                        </section>
                        <p className="colosrr">COLOR : {getProductData.color}</p>

                        {/* size chart */}
                        <label htmlFor="sizeChart">SIZE</label>
                        <div className="size-chart-container">
                            {getProductData.size &&
                                getProductData.size.map((size, index) => (
                                    <button
                                        key={index}
                                        className={`size-button ${getProductData.selectedSize === size ? "selected" : ""
                                            }`}
                                        onClick={() => setProductData({ ...getProductData, selectedSize: size })}
                                    >
                                        {size}
                                    </button>
                                ))}
                        </div>
                    </>
                    ) : (
                        null)}
                </div>
            </div>
            {/* <div className="product-description-container">
                <h3>Product Description</h3>
                {/* <div>{getProductData.description}</div> 
                <div dangerouslySetInnerHTML={{ __html: getProductData.description || "" }}
                    className="product-description"
                ></div>
            </div> */}

            <div className="ratings-review-container">
                <h3>Rating & Reviews</h3>
                <div className='ratings-review-section'>
                    <div className='review-section-left'>
                        {/* <h3>{getProductData.ratings}</h3> */}
                        <p>Based on 31K+ ratings and 9K+ reviews</p>
                    </div>
                    <div className='review-section-right'>
                        <h4>Product reviews</h4>
                        <p>
                            <ThumbUpIcon />
                            91% of customers recommend this brand
                        </p>
                        <Divider sx={{ marginBottom: "2rem" }} />
                    </div>
                </div>
            </div>

            <div className="aboutus-container">
                <ul>
                    <li>
                        <img
                            src={
                                "https://www.beyoung.in/desktop/images/product-details-2/product-discription-icon1.jpg"
                            }
                            alt={"icon"}
                        />
                        <p>1.5M+ Happy Beyoungsters</p>
                    </li>
                    <li>
                        <img
                            src={
                                "https://www.beyoung.in/desktop/images/product-details-2/product-discription-icon2.jpg"
                            }
                            alt={"icon"}
                        />
                        <p>15 Days Easy Returns</p>
                    </li>
                    <li>
                        <img
                            src={
                                "https://www.beyoung.in/desktop/images/product-details-2/product-discription-icon3.jpg"
                            }
                            alt={"icon"}
                        />
                        <p>Homegrown Brand</p>
                    </li>
                    <li>
                        <img
                            src={
                                "https://www.beyoung.in/desktop/images/product-details-2/product-discription-icon4.jpg"
                            }
                            alt={"icon"}
                        />
                        <p>Packed with Safety</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default ProductDetails;





{/* <div className='forImageShowing'>
                        {getProductData?.images &&
                            getProductData.images
                                .slice(0, 5)
                                .map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Image ${index}`}
                                        onClick={() => handleImageClick(image)}
                                    />
                                ))}
                        {(getProductData) ? (<>
                            <img src={getProductData.images} />

                            <img src={getProductData.displayImage} />
                        </>
                        ) : (
                            <h2>Loading...</h2>)}
                    </div> */}
