import React, { useState, useRef, useEffect } from 'react'
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Beyounglogo from '../assests/Beyounglogo.svg';
import desktopnav from '../assests/desktopnav.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AuthProvider, useAuth } from '../Context/UserProvider';
import LoginModal from '../login/LoginModal';
import SignupModal from '../login/SingupModal';
import { ClickAwayListener, Popper } from "@mui/material";
import {
    useCartNumbers,
    useUpdateCartNumbers,
    useUpdateWishlistNumbers,
    useWishlistNumbers,
} from "../Context/CartNumberContext";


function Navbar() {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const { isUserLoggedIn, signInContext, signOutContext,setcloth,setGender} = useAuth();
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const updateCartNumber = useUpdateCartNumbers();
    // const updateWishlistNumbers = useUpdateWishlistNumbers();

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };
    const openSignupModal = () => {
        setIsSignupModalOpen(true);
    };

    const closeSignupModal = () => {
        setIsSignupModalOpen(false);
    };
    const handleLogin = (token, userName) => {
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userInfo", userName);
        setIsLoggedIn(true);
        signInContext(token, userName);
        closeLoginModal();
    };
    const handleLogout = (token, userName) => {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("userInfo");
        signOutContext(token, userName);
        setIsLoggedIn(false);
        // updateCartNumber(0);
        // updateWishlistNumbers(0);
        navigate('/');
    };


    const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const searchInputRef = useRef();
    const navigate = useNavigate(); // Move useNavigate hook here
    const [searchResults, setSearchResults] = useState("");

    const handleSearchBtnClick = (event) => {
        if (anchorEl) {
            setIsSearchbarOpen(false);
            setAnchorEl(null);
        } else {
            setIsSearchbarOpen(true);
            setAnchorEl(event.currentTarget);
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        const { value } = searchInputRef.current;

        const encodedSearchQuery = encodeURIComponent(`{"name":"${value}"}`);
        const apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${encodedSearchQuery}`;
        console.log(apiUrl);
        setIsSearchbarOpen(false);

        var myHeaders = new Headers();
        myHeaders.append("projectId", "seya0o0ygggh");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };
        try {
            const response = await fetch(apiUrl, requestOptions);
            const result = await response.json(); // Parse the response as JSON

            if (response.ok) {
                // Check if the response status is OK
                if (result.status === 'success' && result.results > 0) {
                    setSearchResults(result.data);
                } else {
                    // No products found
                    setSearchResults([]);
                }
            } else {
                // Handle non-OK response status
                console.log('Error:', result.message);
                setSearchResults([]); // Set empty array in case of an error
            }
        } catch (error) {
            console.log('Fetch Error:', error);
            setSearchResults([]); // Set empty array in case of an error
        }

        navigate(`/search?name=${value}`);
    };

    const handleWishlistClick = () => {
        if (!isUserLoggedIn) {
            openLoginModal();
        } else {
            return;
        }
    };
    const handleCartClick = () => {
        if (!isUserLoggedIn) {
            openLoginModal();
        } else {
            return;
        }
    };
    const setClothselected = (value) => {
        console.log("Hi hello")
        setcloth(value);
        navigate(`/allcloths`);
    };

    const setGenderselected = ()=>{
        setGender();
        navigate(`/gender`);
    }
    return (
        <div>
            <header>
                <div className='couponcode'>
                    <p>Free Shipping on All Orders | Get Extra <b>₹100</b> OFF on Spent of ₹999 Use Code: <b>BEYOUNG100</b></p>
                </div>
                <div className='navbar'>
                    <div className='nav-links'>
                        <Link to='/track-orders' className='track-order' style={{ fontSize: '13px', color: '#fff', }}><LocationOnOutlinedIcon style={{ height: '20px', width: '20px', cursor: 'pointer' }} /></Link>
                        <Link to='/track-orders' className='track-order' style={{ fontSize: '12px', alignItems: 'center', display: 'flex', color: '#fff', textDecoration: 'none' }} >TRACK YOUR ORDER</Link>
                    </div>
                    <ul className='nav-linkss'>
                        {isUserLoggedIn && localStorage.getItem("tokenAvailable") ? (
                            <>
                                <div className='dropdownmyaccount'>
                                    <Link >
                                        <button className="dropbtn1">MY ACCOUNT</button>
                                    </Link>
                                    <div className="dropdown-contentmyaccount">
                                        <Link to='/myprofile' className='linked'>
                                            My Profile
                                        </Link>
                                        <Link to='/orders' className='linked'>
                                            Orders
                                        </Link>
                                        <Link to='/address' className='linked'>
                                            Address
                                        </Link>
                                        <Link to='/wishlist' className='linked'>
                                            Wishlist
                                        </Link>
                                    </div>
                                </div>
                                <p className='dash'>|</p>
                                <button onClick={handleLogout}>LOGOUT</button>
                            </>
                        ) : (<>
                            <button onClick={openLoginModal}>LOGIN</button>
                            <p className='dash'>|</p>
                            <button onClick={openSignupModal}>SIGNUP</button>
                        </>)}
                    </ul>
                </div>




                <div className='navmain'>
                    <div className='navchild'>
                        <Link to='/'>
                            <img src={Beyounglogo} alt='beyoung' className='logo'></img>
                        </Link>
                        {/* MEN DROPDOWN MENU*/}
                        <div className='dropdown'>
                            <Link className='link1' to='/men' onClick={()=>setGenderselected('Men')}>MEN</Link>
                            <div className='dropdown-content'>
                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Topwear</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('shirt')}>Shirts</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('kurta')}>Kurtas</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('tshirt')}>T-shirts</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('sweater')}>Sweater</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('hoodie')}>Hoodie</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('tracksuit')}>TrackSuit</p>
                                </div>
                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Bottomwear</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('shorts')} >Shorts</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('trouser')} >Trousers</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('pyjamas')} >Pyjamas</p>
                                    {/* <Link to='/joggers' className='sub-sub-link' >Joggers</Link> */}
                                    {/* <Link to='/jeans' className='sub-sub-link' >Jeans</Link> */}
                                </div>
                                <img src={desktopnav} className='dropdownimg'></img>
                            </div>
                        </div>




                        {/* WOMEN DROPDOWN MENU*/}
                        <div className='dropdown'>
                            <Link className='link1' to='/women' onClick={()=>setGenderselected('Women')}>WOMEN</Link>
                            <div className='dropdown-content'>
                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Topwear</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('shirt')}>Shirts</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('tshirt')}>T-shirts</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('kurti')}>kurtis</p>
                                </div>
                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Bottomwear</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('jogger')}>Joggers</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('jeans')}>Jeans</p>
                                    <p className='sub-sub-link' onClick={()=>setClothselected('jumpsuit')}>JumpSuit</p>
                                </div>
                                <img src={desktopnav} className='dropdownimg'></img>
                            </div>
                        </div>
                        <Link className='link1'  to='/combos' >COMBOS</Link>
                        <Link className='link1' to='/joggers'>JOGGERS</Link>
                        <Link className='link1' to='/winterwear' >WINTER WEAR</Link>
                        <Link className='link1' to='/shopbycollection'>SHOP BY COLLECTION </Link>
                    </div>




                    <div className='nav-right'>
                        <SearchIcon style={{ width: '20px', height: '20px' }} onClick={handleSearchBtnClick} />
                        <FavoriteBorderIcon style={{ width: '20px', height: '20px' }} />
                        <ShoppingCartOutlinedIcon style={{ width: '20px', height: '20px' }} onClick={handleCartClick} />
                    </div>
                </div>


                {isSearchbarOpen && (
                    <ClickAwayListener onClickAway={handleSearchBtnClick}>
                        <Popper
                            open={isSearchbarOpen}
                            anchorEl={anchorEl}
                            placement="bottom-start"
                            style={{ width: "350px" }}
                        >
                            <div className="search-bar" >
                                <input
                                    id="searchBarInput"
                                    type="text"
                                    placeholder="Search product here..."
                                    ref={searchInputRef}
                                />
                                <button onClick={handleSearch}>Search</button>
                            </div>
                        </Popper>
                    </ClickAwayListener>
                )}
            </header >
            <AuthProvider> <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} onLogin={handleLogin} /></AuthProvider>
            <SignupModal isOpen={isSignupModalOpen} closeModal={closeSignupModal} openLoginModal={openLoginModal} />
        </div >

    )
}

export default Navbar