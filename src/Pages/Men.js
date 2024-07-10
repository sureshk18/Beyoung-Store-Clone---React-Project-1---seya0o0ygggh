import React, { useEffect, useState } from 'react';
import '../styles/Mens.css';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAuth } from "../Context/UserProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import _debounce from "lodash/debounce";


function Men() {
    const [getProducts, setProducts] = useState([]);
    const navigate = useNavigate();
    const { token } = useAuth();
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const fetchProduct = async () => {
        if (isFetching) {
            return;
        }
        try {
            setIsFetching(true);
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=10&page=${page}&filter={"gender":"Men"}`, {
                method: 'GET',
                headers: {
                    projectId: 'f104bi07c490',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data.data);
                setProducts((prevData) => [...prevData, ...data.data]);
                setPage((prevPage) => [prevPage + 1]);
            } else {
                console.log('Failed to fetch products');
            }
        } catch (error) {
            console.error('An error occurred while fetching products', error);
            setError("Error fetching data. Please try again.");
        } finally {
            setIsFetching(false);
        };
    };
    const handleScroll = _debounce(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            fetchProduct();
        }
    }, 200); // Adjust the debounce delay as needed
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        fetchProduct();
    }, []);

    //Add to Wishlist
    const addWishlist = async (id) => {
        const obj = JSON.stringify({ "productId": id });
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`,
                    projectID: 'f104bi07c490',
                    'Content-Type': 'application/json'
                },
                body: obj,
            });
            if (response.ok) {
                const data = await response.json();
                toast('Product added to wishlist successfully', data);
            } else {
                toast('Failed to update wishlist');
            }
        } catch (error) {
            console.error('An error occurred while updating wishlist', error);
        }
    };

    {/*
    // Infinite scrolling
    const[data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [isFetching,setIsFetching] = useState(false);
    const [error,setError] = useState(null);
    const config={
        headers:{
            projectId:""
        },
    };

    const fetchData=async()=>{
        if(isFetching){
            return;
        }
        try{
            setIsFetching(true);
            const res = await axios.get()(
                `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=10&page=${page}`,config
            );
            setData((prevData)=>[...prevData,...res.data.data]);
            setPage((prePage)=>prePage+1);
        }catch(error){
            console.error("Error fetching data:", error);
            setError("Error fetching data. Please try again.");
        }finally{
            setIsFetching(false);
        }
    };
    const handleScroll = _debounce(()=>{
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetchData();
      }
    },200);
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    },[handleScroll]);

    useEffect(()=>{
        fetchData();
    },[])
    */}





    return (
        <>
            <ToastContainer />
            {/* <div className='banners'>
                <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/1.jpg" alt='banner' className='bannermen' />
                <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/8.jpg" alt='sweater' className='bannermen' />
                <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/12.jpg" alt='hoodie' className='bannermen' />
                <img src="https://www.beyoung.in/api/catalog/filtericon/new/new/13.jpg" alt='combos' className='bannermen' />
            </div> */}
            <div className="men-container">
                <section className="men-clothess">
                    <p className="heading-mens">Men's Clothing</p>
                    <p className="heading-menss">
                        Men's Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of clothing. Scroll below to check it out.
                    </p>
                    <div className="for-men-shirts-pants">
                        {getProducts.length > 0 &&
                            getProducts.map((product, index) => (
                                <div key={index}>
                                    <div>
                                        <button className='wishlist-button' onClick={() => addWishlist(product._id)} >
                                            <FavoriteBorderIcon />
                                        </button>
                                        <Link to={`/product-details/${product._id}`}>
                                            <img src={product.displayImage} alt={product.name} id='zoom-In' />
                                        </Link>
                                        <h2 className='seller-details'>{product.name}</h2>
                                        <span className='seller-subCategory'>{product.subCategory}</span>
                                        <p className='seller-price'>Price: &#8377; {product.price}</p>
                                    </div>
                                </div>
                            ))}
                        {isFetching && <p>Loading...</p>}
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Men;
