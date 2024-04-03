import React from 'react'
import '../Morepages/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='footer-main-sec'>
                    <div>
                        <h4 className='footer-heading'>Need Help</h4>
                        <div className='footer-link'>
                            <a href='#'>Contact Us</a>
                            <a href='#'> Track Order</a>
                            <a href='#'>Returns & Refunds</a>
                            <a href='#'> FAQ's</a>
                            <a href='#'> Career </a>
                        </div>
                    </div>
                    <div>
                        <h4 className='footer-heading'>Company</h4>
                        <div className='footer-link'>
                            <a href='#'> About Us</a>
                            <a href='#'>  Beyoung Blog</a>
                            <a href='#'> Beyoungistan</a>
                            <a href='#'>  Collaboration</a>
                            <a href='#'>  Media </a>
                        </div>
                    </div>
                    <div>
                        <h4 className='footer-heading'>MORE INFO</h4>
                        <div className='footer-link'>
                            <a href='#'>Term and Conditions </a>
                            <a href='#'>  Privacy Policy</a>
                            <a href='#'> Shipping Policy</a>
                            <a href='#'> Sitemap </a>
                        </div>
                    </div>
                    <div>
                        <h4 className='footer-heading'>LOCATION</h4>
                        <div className='footer-link'>
                            <a href='#'>support@beyoung.in </a>
                            <span>Eklingpura Chouraha, Ahmedabad Main Road</span>
                            <span>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</span>
                        </div>
                        <h4 className='footer-heading' style={{ marginTop: '10px', marginBottom: '10px' }}>
                            DOWNLOAD THE APP
                        </h4>
                        <div className='footer-aap-links'>
                            <a href="https://play.google.com/store/apps/details?id=com.beyoungapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter%26anid%3Dadmob">
                                <img src="https://www.beyoung.in/api/catalog/footer/11Play-Store-footer.png" alt="playstore" />
                            </a>
                            <a href="https://apps.apple.com/in/app/beyoung/id1665513310">
                                <img src="https://www.beyoung.in/api/catalog/footer/12App-Store-footer.png" alt="applestore" />
                            </a>s
                        </div>
                    </div>
                </div>

                <div className='footer-content-section'>
                    <div className='why-choose-us-main'>
                        <section className='choose-heading f-toggle'><p>WHY CHOOSE US ?</p><KeyboardArrowDownOutlinedIcon style={{ color: '#f8ea54' }} /></section>
                    </div>
                    <div className='sitemap-main'>
                        <section className='choose-heading f-toggle'><p>POPULAR CATEGORIES</p><KeyboardArrowDownIcon style={{ color: '#f8ea54' }} /></section>
                    </div>

                    <div className='footer-bottom'>
                        <div className='sequre-payment'>
                            <h4 style={{ textAlign: 'left' }}>100% SECURE PAYMENT</h4>
                            <img src='https://www.beyoung.in/api/catalog/footer/Frame-payment%20-1.jpg'></img>
                        </div>
                        <div className='socila-links'>
                            <h4 style={{ textAlign: 'left' }}>LET'S BE FRIENDS</h4>
                            <div className='social-icon' >
                                <InstagramIcon style={{ marginRight: '20px' }} />
                                <FacebookIcon style={{ marginRight: '20px' }} />
                                <TwitterIcon style={{ marginRight: '20px' }} />
                                <LinkedInIcon style={{ marginRight: '20px' }} />
                                <YouTubeIcon style={{ marginRight: '20px' }} />
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2024 Beyoung Folks Pvt Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;