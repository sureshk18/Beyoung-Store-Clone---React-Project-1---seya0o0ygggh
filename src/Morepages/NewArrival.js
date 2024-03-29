import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import previousbutton from '../assests/previousbutton.svg';
import nextbutton from '../assests/nextbutton.svg';
import '../Morepages/NewArrival.css';


function NewArrival() {

    const [imageIndex, setImageIndex] = useState(0);
    const totalImages = 6;
    const imagesToShow = 4;
    const imageHeadings = ['Trousers', 'Shirts', 'Joggers', 'Joggers', 'Shorts', 'Shorts'];

    const visibleImages = Array.from({ length: imagesToShow }).map((_, i) => {
        const index = (imageIndex + i) % totalImages;
        const heading = imageHeadings[index];


        return (
            <div className="newarrival" key={index}>
                <Link to={`/${heading.toUpperCase()}`}>
                    <img
                        src={`https://www.beyoung.in/api/catalog/homepage-3-10/new-arrival/${index + 1}.jpg`}
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
            <p className="headaing-zone">New Arrival</p>
            <div className="saving-zone-2">
                <div onClick={prevImage}>
                    <img src={previousbutton} alt="prevbtn" className="previmage" />
                </div>
                {visibleImages}
                <div onClick={nextImage}>
                    <img src={nextbutton} alt="nextbtn" className="nextimage" />
                </div>
            </div>
        </div>
    )
}

export default NewArrival