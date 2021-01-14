import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const sliderItems = require('@mockups/slider-items.json');

interface IProps {
    
}

const settings = {
    dots: true,
    // lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className:"main-slider",
    // variableWidth: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const StyleSliderBar = (props: IProps) => {

    return (
        <Slider {...settings}>
            {sliderItems && sliderItems.map((item: any, index: number) => (
                <div>
                <h3>1</h3>
              </div>
            ))}
        </Slider>
    );
}

export default StyleSliderBar;