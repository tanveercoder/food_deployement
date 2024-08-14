import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const slides = [
        { id: 1, src: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490', alt: 'Slide 1' },
        { id: 2, src: 'https://th.bing.com/th/id/OIP.3BJ-1stP2ELmKb3CJudBfQHaEK?rs=1&pid=ImgDetMain', alt: 'Slide 2' },
        { id: 3, src: 'https://th.bing.com/th/id/R.45a3d252e91a5b12407fa3a89b9bd0d0?rik=Z15ur%2bZmtuJDBw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fq4TlMC1.jpg&ehk=Ph%2fbNLvQGQIelMMcuFNYuMuijZ171yXA%2be%2bVGcDhccw%3d&risl=&pid=ImgRaw&r=0', alt: 'Slide 3' },
    ];

    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [totalSlides]);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-gray-900">
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 md:w-3/4 z-10">
                <SearchBar />
            </div>
            <div className="relative w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative flex-shrink-0 w-full h-full">
                        <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover opacity-70" /> {/* Adjust opacity here */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                            <h2 className="text-xl font-bold">{slide.caption}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700">
                &lt;
            </button>
            <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700">
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
