import React, { useState } from "react";
import Slider from "react-slick";
import { useWindowResize } from "beautiful-react-hooks";

const getSlidesConfig = width => {
    const settings = {
        slidesToShow: 0,
        slidesToScroll: 0
    }
    if(width < 460) {
        settings.slidesToShow = 2;
        settings.slidesToScroll = 1;
    } else if (width < 640) {
        settings.slidesToShow = 3;
        settings.slidesToScroll = 1;
    } else if (width > 640 && width < 768) {
        settings.slidesToShow = 4;
        settings.slidesToScroll = 1;
    } else if (width > 768 && width < 1024) {
        settings.slidesToShow = 4;
        settings.slidesToScroll = 1;
    } else if (width > 1024 && width < 1280) {
        settings.slidesToShow = 4;
        settings.slidesToScroll = 1;
    } else if (width > 1280 && width < 1536) {
        settings.slidesToShow = 4;
        settings.slidesToScroll = 1;
    } else {
        settings.slidesToShow = 4;
        settings.slidesToScroll = 1;
    }
    return settings;
}

const Carousel = ({ settingsOverrides }) => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useWindowResize((event) => setWindowWidth(window.innerWidth));


    const settings = {
        dots: true,
        speed: 500,
        cssEase: "linear",
        infinite: true,
        ...getSlidesConfig(windowWidth),
        ...settingsOverrides
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="h-32 w-32 relative cursor-pointer mb-5 lg:ml-5">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-md"></div>
                    <div className="absolute inset-0 transform  hover:scale-110 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-md">
                            <img src="/kblogo.png" alt="knightsbridge logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-md"></div>
                    <div className="absolute inset-0 transform  hover:scale-110 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-md">
                            <img src="/lwigston.png" className="py-2" alt="knightsbridge logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-md"></div>
                    <div className="absolute inset-0 transform  hover:scale-110 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-md">
                            <img src="/loadby.jpg" className="py-5" alt="knightsbridge logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-md"></div>
                    <div className="absolute inset-0 transform  hover:scale-110 transition duration-300">
                        <div className="h-full w-full bg-white rounded-lg shadow-md">
                            <img src="/lclarendon.png" className="py-5" alt="knightsbridge logo" />
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default Carousel;