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
                    <p>Free Shipping on All Orders | Get Extra ₹100 OFF on Spent of ₹999 Use Code: BEYOUNG100</p>
                </div>
                <div className='navbar'>
                    <div className='nav-links'>
                        <Link to='/TrackOrders' className='track-order' style={{ fontSize: '13px', color: '#fff', }}><LocationOnOutlinedIcon style={{ height: '20px', padding: '0px ', cursor: 'pointer' }} /></Link>
                        <Link to='/TrackOrders' className='track-order' style={{ fontSize: '13px', display: 'flex', color: '#fff', gap: '10px', textDecoration: 'none' }} >TRACK YOUR ORDER</Link>
                    </div>
                    <ul className='nav-linkss'>
                        <button><Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>LOGIN</Link></button>
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
                                <li className='sub-heading'>
                                    <p className='headingdropdown'>Topwear</p>
                                    <Link className='sub-sub-link' to='/shirts'>Shirts</Link>
                                    <Link className='sub-sub-link' to='/kurtas'>Kurtas</Link>
                                    <Link className='sub-sub-link' to='/t-shirts'>T-shirts</Link>
                                    <Link className='sub-sub-link' to='/sweater'>Sweater</Link>
                                    <Link className='sub-sub-link' to='/hoodie'>Hoodie</Link>
                                    <Link className='sub-sub-link' to='/tracksuit'>TrackSuit</Link>
                                </li>

                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Bottomwear</p>
                                    <Link className='sub-sub-link' to='/shorts'>Shorts</Link>
                                    <Link className='sub-sub-link' to='/trousers'>Trousers</Link>
                                    <Link className='sub-sub-link' to='/joggers'>Joggers</Link>
                                    <Link className='sub-sub-link' to='/pyjamas'>Pyjamas</Link>
                                    <Link className='sub-sub-link' to='/jeans'>Jeans</Link>
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


            </header>
        </div>

    )
}

export default Navbar