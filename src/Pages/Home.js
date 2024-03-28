import React from 'react'
import { Link } from 'react-router-dom';
// import Boxer from "../assets/Boxer.png";
// import Combo from "../assets/Combo.png";

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
    </>
    )
}

export default Home