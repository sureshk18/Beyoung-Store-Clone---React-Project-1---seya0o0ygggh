import { useEffect, useState } from 'react';
import Boxer from "../assests/Boxer.jpg";
import Combo from "../assests/Combo.jpg";
import '../styles/Home.css';
import CashBackSliders from '../Morepages/Cashbacksliders';
import ShirtsImages from '../Morepages/ShirtsImages';
import NewArrival from '../Morepages/NewArrival';
import FreeShipping from '../Morepages/FreeShipping';
import MenHome from '../Morepages/MenHome';
import Womens from '../Morepages/Womens';


function Home() {
    const images = [
        { src: Combo, alt: 'Combo Image', id: 'combo' },
        { src: Boxer, alt: 'Boxer Image', id: 'boxer' },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3000 milliseconds

        return () => clearInterval(intervalId);
    }, [images]);



    return (<>
        <div className="slide">
            <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                key={images[currentImageIndex].id}
                className="sliderimg"
                loading="lazy"
            />
        </div>

        <CashBackSliders />
        <ShirtsImages />
        <FreeShipping />
        <MenHome />
        <Womens />

    </>
    )
}

export default Home;