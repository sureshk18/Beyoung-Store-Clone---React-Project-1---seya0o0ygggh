import React, { useState, useRef, useEffect } from 'react'
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Beyounglogo from '../assests/Beyounglogo.svg';
import desktopnav from '../assests/desktopnav.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Navbar() {
    // Searching a product
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
        myHeaders.append("projectId", "yxpa71cax49z");

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
                    // Products found, update the state with the data
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
            // Handle fetch error
            console.log('Fetch Error:', error);
            setSearchResults([]); // Set empty array in case of an error
        }

        navigate(`/search?name=${value}`);
    };


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
                        <button >LOGIN</button>
                        <p className='dash'>|</p>
                        <button>SIGNUP</button>
                    </ul>
                </div>

                <div className='navmain'>
                    <div className='navchild'>
                        <Link to='/'>
                            <img src={Beyounglogo} alt='beyoung' className='logo'></img>
                        </Link>

                        {/* MEN DROPDOWN MENU*/}

                        <div className='dropdown'>
                            <Link className='link1' to='/men'>MEN</Link>
                            <div className='dropdown-content'>
                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Topwear</p>
                                    <Link to='/shirts' className='sub-sub-link' >Shirts</Link>
                                    <Link to='/kurtas' className='sub-sub-link' >Kurtas</Link>
                                    <Link to='/t-shirts' className='sub-sub-link' >T-shirts</Link>
                                    <Link to='/sweater' className='sub-sub-link' >Sweater</Link>
                                    <Link to='/hoodie' className='sub-sub-link' >Hoodie</Link>
                                    <Link to='/tracksuit' className='sub-sub-link' >TrackSuit</Link>
                                </div>

                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Bottomwear</p>
                                    <Link to='/shorts' className='sub-sub-link' >Shorts</Link>
                                    <Link to='/trousers' className='sub-sub-link' >Trousers</Link>
                                    <Link to='/pyjamas' className='sub-sub-link' >Pyjamas</Link>
                                    {/* <Link to='/joggers' className='sub-sub-link' >Joggers</Link> */}
                                    {/* <Link to='/jeans' className='sub-sub-link' >Jeans</Link> */}
                                </div>

                                <img src={desktopnav} className='dropdownimg'></img>
                            </div>
                        </div>

                        {/* MEN DROPDOWN MENU*/}

                        <div className='dropdown'>
                            <Link className='link1' to='/women'>WOMEN</Link>
                            <div className='dropdown-content'>
                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Topwear</p>
                                    <Link className='sub-sub-link' to='/shirtsWomen'>Shirts</Link>
                                    <Link className='sub-sub-link' to='/tshirtsWomen'>T-shirts</Link>
                                    <Link className='sub-sub-link' to='/kurtisWomen'>kurtis</Link>
                                </div>

                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Bottomwear</p>
                                    <Link className='sub-sub-link' to='/joggersWomen'>Joggers</Link>
                                    <Link className='sub-sub-link' to='/jeansWomen'>Jeans</Link>
                                    <Link className='sub-sub-link' to='/jumpsuit'>JumpSuit</Link>
                                </div>
                                <img src={desktopnav} className='dropdownimg'></img>
                            </div>
                        </div>
                        <Link className='link1' to='/combos'>COMBOS</Link>
                        <Link className='link1' to='/joggers'>JOGGERS</Link>
                        <Link className='link1' to='/winterwear'>WINTER WEAR</Link>
                        <Link className='link1' to='/shopbycollection'>SHOP BY COLLECTION </Link>


                    </div>
                    <div className='nav-right'>
                        <Link to={'/search'}><SearchIcon style={{ width: '20px', height: '20px' }} /></Link>
                        <FavoriteBorderIcon style={{ width: '20px', height: '20px' }} />
                        <ShoppingCartOutlinedIcon style={{ width: '20px', height: '20px' }} />
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
                                    placeholder="Search entire store here..."
                                    ref={searchInputRef}
                                />
                                <button onClick={handleSearch}>Search</button>
                            </div>
                        </Popper>
                    </ClickAwayListener>
                )}

            </header >
        </div >

    )
}

export default Navbar