import React, { useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Beyounglogo from "../assests/Beyounglogo.svg";
import desktopnav from "../assests/desktopnav.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AuthProvider, useAuth } from "../Context/UserProvider";
import LoginModal from "../login/LoginModal";
import SignupModal from "../login/SingupModal";
// import Wishlist from '../Pages/Wishlist';
import { ClickAwayListener, Popper } from "@mui/material";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isUserLoggedIn, signInContext, signOutContext, setcloth, setGender } =
    useAuth();
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    localStorage.removeItem("tokenAvailable");
    signOutContext(token, userName);
    setIsLoggedIn(false);

    navigate("/");
    window.location.reload();
  };

  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const searchInputRef = useRef();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState("");
  // const [wishlist, setWishlist] = useState(0);

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
    // console.log(apiUrl);
    setIsSearchbarOpen(false);

    var myHeaders = new Headers();
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

    navigate(`/search?name=${value}`);
  };

  const setClothselected = (value) => {
    setcloth(value);
    navigate(`/allcloths`);
  };

  const setGenderselected = (value) => {
    console.log("gender");
    setGender(value);
  };
  // console.log("hi");

  // const addFav = () => {
  //   setWishlist();
  // };







  return (
    <>
    <div>
      <header>
        <div className="couponcode">
          <p>
            Free Shipping on All Orders | Get Extra <b>₹100</b> OFF on Spent of
            ₹999 Use Code: <b>BEYOUNG100</b>
          </p>
        </div>
        <div className="navbar">
          <div className="nav-links">
            <Link
              to="/track-orders"
              className="track-order"
              style={{ fontSize: "13px", color: "#fff" }}
            >
              <LocationOnOutlinedIcon
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              />
            </Link>
            <Link
              to="/track-orders"
              className="track-order"
              style={{
                fontSize: "12px",
                alignItems: "center",
                display: "flex",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              TRACK YOUR ORDER
            </Link>
          </div>
          <ul className="nav-linkss">
            {isUserLoggedIn || localStorage.getItem("tokenAvailable") ? (
              <>
                <div className="dropdownmyaccount">
                  <Link >
                    <button className="dropbtn1">MY ACCOUNT</button>
                  </Link>
                  <div className="dropdown-contentmyaccount">
                    <Link to="/cart" className="linked">
                      Cart
                    </Link>
                    <Link to="/wishlist" className="linked">
                      Wishlist
                    </Link>
                  </div>
                </div>
                <p className="dash">|</p>
                <button onClick={handleLogout}>LOGOUT</button>
              </>
            ) : (
              <>
                <button onClick={openLoginModal}>LOGIN</button>
                <p className="dash">|</p>
                <button onClick={openSignupModal}>SIGNUP</button>
              </>
            )}
          </ul>
        </div>

        <div className="navmain">
          <div className="navchild">
            <Link to="/">
              <img src={Beyounglogo} alt="beyoung" className="logo"></img>
            </Link>
            {/* MEN DROPDOWN MENU*/}
            <div className="dropdown">
              <Link
                className="link1"
                to="/men"
                onClick={() => setGenderselected("Men")}
              >
                MEN
              </Link>
              <div
                className="dropdown-content"
                onClick={() => setGenderselected("Men")}
              >
                <div className="sub-heading">
                  <p className="headingdropdown">Topwear</p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("shirt")}
                  >
                    Shirts
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("kurta")}
                  >
                    Kurtas
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("tshirt")}
                  >
                    T-shirts
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("sweater")}
                  >
                    Sweater
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("hoodie")}
                  >
                    Hoodie
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("tracksuit")}
                  >
                    TrackSuit
                  </p>
                </div>
                <div className="sub-heading">
                  <p className="headingdropdown">Bottomwear</p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("shorts")}
                  >
                    Shorts
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("trouser")}
                  >
                    Trousers
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("pyjamas")}
                  >
                    Pyjamas
                  </p>
                </div>
                <img src={desktopnav} className="dropdownimg"></img>
              </div>
            </div>

            {/* WOMEN DROPDOWN MENU*/}
            <div className="dropdown">
              <Link
                className="link1"
                to="/women"
                onClick={() => setGenderselected("Women")}
              >
                WOMEN
              </Link>
              <div
                className="dropdown-content"
                onClick={() => setGenderselected("Women")}
              >
                <div className="sub-heading">
                  <p className="headingdropdown">Topwear</p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("shirt")}
                  >
                    Shirts
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("tshirt")}
                  >
                    T-shirts
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("kurti")}
                  >
                    kurtis
                  </p>
                </div>
                <div className="sub-heading">
                  <p className="headingdropdown">Bottomwear</p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("jogger")}
                  >
                    Joggers
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("jeans")}
                  >
                    Jeans
                  </p>
                  <p
                    className="sub-sub-link"
                    onClick={() => setClothselected("jumpsuit")}
                  >
                    JumpSuit
                  </p>
                </div>
                <img src={desktopnav} className="dropdownimg"></img>
              </div>
            </div>
            <span>
              <Link className="link1" to="/combos">
                COMBOS
              </Link>
            </span>
            {/* <Link className='link1' to='/combos'>JOGGERS</Link>
                        <Link className='link1' to='/combos' >WINTER WEAR</Link> */}
            <Link className="link1" to="/combos">
              SHOP BY COLLECTION{" "}
            </Link>
          </div>

          <div className="nav-right">
            <SearchIcon
              style={{ width: "20px", height: "20px" }}
              onClick={handleSearchBtnClick}
            />
            <Link to="/wishlist">
              <FavoriteBorderIcon
                style={{ width: "20px", height: "20px", color: "black" }}
              />
            </Link>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon
                style={{ width: "20px", height: "20px", color: "black" }}
              />
            </Link>
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
              <div className="search-bar">
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
      </header>
      <AuthProvider>
        {" "}
        <LoginModal
          isOpen={isLoginModalOpen}
          closeModal={closeLoginModal}
          onLogin={handleLogin}
        />
      </AuthProvider>
      <SignupModal
        isOpen={isSignupModalOpen}
        closeModal={closeSignupModal}
        openLoginModal={openLoginModal}
      />
    </div>
    </>
  );
}

export default Navbar;
