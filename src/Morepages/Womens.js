import React from 'react'
import '../Morepages/NewArrival.css'
import { useState } from 'react';
import { Link } from 'react';
import previousbutton from '../assests/previousbutton.svg';
import nextbutton from '../assests/nextbutton.svg';

function Womens() {
    const [imageIndex, setImageIndex] = useState(0);
    const totalImages = 6;

    const images = [
        {
            urll: 'https://images.bewakoof.com/t1080/women-s-white-oversized-shirt-ldos0010-597295-1687245417-1.jpg',
            heading: 'ShirtsWomen',
        },
        {
            urll: 'https://images.bewakoof.com/t1080/women-s-blue-all-over-floral-printed-jumpsuit-542455-1663655561-1.jpg',
            heading: 'JumpsuitWomen',
        },
        {
            urll: 'https://images.bewakoof.com/t1080/women-s-printed-long-kurta-318369-1663921086-1.jpg',
            heading: 'KurtisWomen',
        },
        {
            urll: 'https://images.bewakoof.com/t1080/women-s-pink-all-over-printed-oversized-casual-pants-589668-1692782369-1.jpg',
            heading: 'JoggersWomen',
        },
        {
            urll: 'https://images.bewakoof.com/t1080/women-s-purple-jeans-y114822-595971-1686142594-1.jpg',
            heading: 'JeansWomen',
        },
        {
            urll: 'https://images.bewakoof.com/t1080/women-s-purple-sundays-we-do-nothing-graphic-printed-boyfriend-t-shirt-505581-1655817269-1.jpg',
            heading: 'Tshirtswomen',
        }

    ];

    const imagesToShow = 4;
    const visibleImagess = Array.from({ length: imagesToShow }).map((_, i) => {
        const index = (imageIndex + i) % totalImages;
        const { urll, heading } = images[index];
        return (
            <div className="newarrival" key={index}>
                <Link to={`/${heading.toUpperCase()}`}>
                    <img
                        src={urll}
                        alt={`img${index + 1}`}
                        className="newarrivalimg"
                    />
                    <p className="newarrrivalheading">{heading}</p>
                </Link>
            </div>
        );
    });

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + imagesToShow) % totalImages);
    };

    const prevImage = () => {
        const newIndex =
            imageIndex - imagesToShow < 0
                ? totalImages - (totalImages % imagesToShow) - imagesToShow
                : imageIndex - imagesToShow;
        setImageIndex(newIndex);
    };


    return (
        <div className="big-saving-zone">
            <h1 className='for-men'>FOR WOMEN</h1>
            <div className="saving-zone-2">
                <div onClick={prevImage}>
                    <img src={previousbutton} alt="prevbtn" className="previmage" />
                </div>
                {/* {visibleImagess} */}
                <div onClick={nextImage}>
                    <img src={nextbutton} alt="nextbtn" className="nextimage" />
                </div>
            </div>
            <div className="scolll">
                <img src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/strip/scrolling-strip.jpg" alt="scrollimg" className="scrolllimage" />

            </div>
        </div>
    );
};

export default Womens;