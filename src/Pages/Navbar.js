import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import Beyounglogo from '../assests/Beyounglogo.svg';
import desktopnav from '../assests/desktopnav.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {

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
                                    <Link to='/joggers' className='sub-sub-link' >Joggers</Link>
                                    <Link to='/pyjamas' className='sub-sub-link' >Pyjamas</Link>
                                    <Link to='/jeans' className='sub-sub-link' >Jeans</Link>
                                </div>

                                <img src={desktopnav} className='dropdownimg'></img>
                            </div>
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
                                        <Link className='sub-sub-link' to='/pyjamasWomen'>Jeans</Link>
                                        <Link className='sub-sub-link' to='/jeansWomen'>JumpSuit</Link>
                                    </div>
                                    <img src={desktopnav} className='dropdownimg'></img>
                                </div>
                                <Link className='link1' to='/combos'>COMBOS</Link>
                                <Link className='link1' to='/joggers'>JOGGERS</Link>
                                <Link className='link1' to='/winterwear'>WINTER WEAR</Link>
                                <Link className='link1' to='/shopbycollection'>SHOP BY COLLECTION </Link>
                            </div>
                        </div>
                    </div>
                    <div className='nav-right'>
                        <SearchIcon style={{ width: '20px', height: '20px' }} />
                        <FavoriteBorderIcon style={{ width: '20px', height: '20px' }} />
                        <ShoppingCartOutlinedIcon style={{ width: '20px', height: '20px' }} />
                    </div>
                </div>


            </header >
        </div >

    )
}

export default Navbar