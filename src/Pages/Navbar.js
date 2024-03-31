import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import Beyounglogo from '../assests/Beyounglogo.svg';
import desktopnav from '../assests/desktopnav.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

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
                        <button>LOGIN</button>
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
                                    <a className='sub-sub-link' href='/shirts'>Shirts</a>
                                    <a className='sub-sub-link' href='/kurtas'>Kurtas</a>
                                    <a className='sub-sub-link' href='/t-shirts'>T-shirts</a>
                                    <a className='sub-sub-link' href='/sweater'>Sweater</a>
                                    <a className='sub-sub-link' href='/hoodie'>Hoodie</a>
                                    <a className='sub-sub-link' href='/tracksuit'>TrackSuit</a>
                                </div>

                                <div className='sub-heading'>
                                    <p className='headingdropdown'>Bottomwear</p>
                                    <a className='sub-sub-link' href='/shorts'>Shorts</a>
                                    <a className='sub-sub-link' href='/trousers'>Trousers</a>
                                    <a className='sub-sub-link' href='/joggers'>Joggers</a>
                                    <a className='sub-sub-link' href='/pyjamas'>Pyjamas</a>
                                    <a className='sub-sub-link' href='/jeans'>Jeans</a>
                                </div>

                                <img src={desktopnav} className='dropdownimg'></img>
                            </div>
                            <div className='dropdown'>
                                <Link className='link1' to='/women'>WOMEN</Link>
                                <div className='dropdown-content'>
                                    <div className='sub-heading'>
                                        <p className='headingdropdown'>Topwear</p>
                                        <a className='sub-sub-link' href='/shirtsWomen'>Shirts</a>
                                        <a className='sub-sub-link' href='/tshirtsWomen'>T-shirts</a>
                                        <a className='sub-sub-link' href='/kurtisWomen'>kurtis</a>
                                    </div>

                                    <div className='sub-heading'>
                                        <p className='headingdropdown'>Bottomwear</p>
                                        <a className='sub-sub-link' href='/joggersWomen'>Joggers</a>
                                        <a className='sub-sub-link' href='/pyjamasWomen'>Jeans</a>
                                        <a className='sub-sub-link' href='/jeansWomen'>JumpSuit</a>
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
                </div>
            </header>
        </div>

    )
}

export default Navbar