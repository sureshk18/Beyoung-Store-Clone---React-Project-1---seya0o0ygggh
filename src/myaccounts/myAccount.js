import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../myaccounts/myaccount.css';
import { Outlet, Navigate, Link } from "react-router-dom";
import { Avatar, CircularProgress, Grid, TextField } from "@mui/material";
import { useAuth } from "../Context/UserProvider";
import { NavLink } from "react-router-dom";

function MyAccount() {
    const { user: name, isUserLoggedIn, signInContext, signOutContext, token } = useAuth();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogout = (token, userName) => {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("userInfo");
        signOutContext(token, userName);
        setIsLoggedIn(false);

        navigate('/');
    };

    const isSmallScreen = useMediaQuery("(max-width:768px)");
    const [collapsActive, setCollapsActive] = useState(false);
    const collapsRef = useRef(null);
    const toggelCollaps = () => {
        setCollapsActive(!collapsActive);
    };


    const [favProductList, setFavProductList] = useState([]);

    useEffect(() => {
        const fetchFavProducts = async () => {
            if (!isUserLoggedIn) {
                // Handle the case when the user is not logged in
                return;
            }

            try {
                const myHeaders = new Headers();
                myHeaders.append('projectId', 'yxpa71cax49z');
                myHeaders.append('Authorization', `Bearer ${token}`);

                const requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow',
                };

                const response = await fetch(
                    'https://academics.newtonschool.co/api/v1/ecommerce/wishlist',
                    requestOptions
                );
                const data = await response.json();

                console.log('Fetched favorite products:', data);

                const listOfFavProducts = data.data.items || [];
                setFavProductList(listOfFavProducts);
            } catch (error) {
                console.error('Error fetching favorite products:', error);
            }
        };

        fetchFavProducts();
    }, [isUserLoggedIn, token]);


    return (
        <div className="my-account-container">
            <section className="my-ac-left-section">
                <div className="upper-sec">
                    <Stack
                        sx={{ margin: "1rem" }}
                        alignItems="center"
                        justifyContent="center"
                        spacing={0.7}
                    >
                        <Avatar
                            sx={{ height: "100px", width: "100px", background: "black" }}
                        >
                            {name
                                .split(" ")
                                .map((word) => word[0].toUpperCase())
                                .join(" ")}
                        </Avatar>
                        <Typography sx={{ textTransform: "uppercase" }} variant="h6">
                            {name}
                        </Typography>
                        <Typography sx={{ color: "gray" }} variant="subtitle1">
                            #Beyoungster
                        </Typography>
                    </Stack>
                </div>
                {isSmallScreen && (
                    <button onClick={toggelCollaps} className="profile-btn-collaps">
                        <KeyboardDoubleArrowDownIcon />
                    </button>
                )}
                <div
                    className={`lower-sec ${collapsActive ? "collaps-active" : ""}`}
                    ref={collapsRef}
                >
                    <nav>
                        <NavLink to={`/myprofile`}>Profile</NavLink>
                        <NavLink to={`/orders`}>Order</NavLink>
                        <NavLink to={`/address`}>Address</NavLink>
                        <NavLink to={`/wishlist`}>Wishlist</NavLink>
                    </nav>
                    <button onClick={handleLogout}>logout</button>
                </div>
            </section>
            <section className="my-ac-right-section">
                <Outlet />
            </section>

        </div>
    )
}


export default MyAccount