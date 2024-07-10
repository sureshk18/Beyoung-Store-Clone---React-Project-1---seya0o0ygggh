import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../myaccounts/myaccount.css';
import { Outlet, Navigate, Link } from "react-router-dom";
import { Avatar, CircularProgress, Grid, TextField } from "@mui/material";
import { useAuth } from "../Context/UserProvider";


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

    useEffect(() => {      
        fetchFavProducts();
    }, [isUserLoggedIn, token]);


    return (
        <div className="my-account-container" style={{marginTop:'90px'}}>
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
                    {/* <nav>
                        <Link to='/myprofile'>Profile</Link>
                        <Link to='/orders'>Order</Link>
                        <Link to='/address'>Address</Link>
                   
                    </nav> */}
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