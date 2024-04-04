import React from 'react'
import '../Morepages/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



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
                    {/* <div className='why-choose-us-main'>
                        <section className='choose-heading f-toggle'><p>WHY CHOOSE US ?</p><KeyboardArrowDownOutlinedIcon style={{ color: '#f8ea54' }} /></section>
                    </div>
                    <div className='sitemap-main'>
                        <section className='choose-heading f-toggle'><p>POPULAR CATEGORIES</p><KeyboardArrowDownIcon style={{ color: '#f8ea54' }} /></section>
                    </div> */}
                    <Divider style={{ backgroundColor: "white" }} />
                    <Accordion style={{ backgroundColor: "transparent", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#F8EA49" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ margin: 0, padding: 0 }}
                        >
                            <h4 style={{ color: '#F8EA49', fontSize: '15px' }}>WHY CHOOSE US?</h4>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontSize: '12px' }}>
                            Online Shopping Site <br />
                            India's Best Online Shopping Site for Fashion and Lifestyle <br />
                            Started in 2018, Beyoung is the Best Site for online shopping in
                            India when it comes to a vast collection of men's and women's
                            fashion. The latest trends and styles are showcased here, yes at
                            your favorite online fashion store. Well, if fashion is medicine,
                            then Be Young is the chemist shop where you can do your online
                            shopping for fashion with ease. Nothing to brag about, but we are
                            the classic blend of 'Creativity' and 'Style'. Get The Young Out
                            with Beyoung, our slogan says a lot about us. Our website is filled
                            with the cool outfits that you always crave. Indeed, online shopping
                            for women and men at Beyoung is hassle-free that in just a few
                            clicks, one can purchase whatever he/she wants. A one-stop
                            destination for all your shopping needs, Beyoung caters to each
                            taste and need of every personality. The premium quality, affordable
                            style, and trending graphics go into the making of our vast
                            collection of men's and Women's Clothing. So, go ahead and indulge
                            with India's best online shopping website for fashion. To know more
                            about us, scroll below!
                        </AccordionDetails>
                    </Accordion>
                    <Divider style={{ backgroundColor: "white" }} />

                    <Accordion style={{ backgroundColor: "transparent", color: "white" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "#F8EA49" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ margin: 0, padding: 0 }}
                        >
                            <h4 style={{ color: '#F8EA49', fontSize: '15px' }}>POPULAR CATEGORIES</h4>
                        </AccordionSummary>
                        <AccordionDetails style={{ fontSize: '12px' }}>
                            Topwear: Half Sleeve T-Shirts | Full Sleeve T-Shirts | Men's Shirts
                            | Printed T-Shirts | Plain T-Shirts | Polo T-Shirts | Plus Size
                            T-Shirts | Combos <br />
                            Theme Based T Shirts: Ipl T Shirts | Men's Travel T-shirts | Gym T
                            Shirts | Quotes T Shirt | Cartoon T Shirt | Entrepreneur T-Shirts |
                            Student T Shirts | Funky T Shirts <br />
                            Winter Collection: Hoodies for Men | Sweatshirts for Men | Jackets
                            for Men
                        </AccordionDetails>
                    </Accordion>
                    <Divider style={{ backgroundColor: "white" }} />
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