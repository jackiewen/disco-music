import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import "./StyleSliderBar.scss";
const sliderItems = require('@mockups/style-slider-items.json');

interface IProps {
    
}

const settings = {
    dots: false,
    // lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className:"style-slider",
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
            <div key={index}>
                <Link to="#" className="slider-item" style={{ backgroundImage: `url(${require('@images/styles-slider/' + item.cover_image).default})` }}>
                    <span>{item.title}</span>
                </Link>
            </div>
            ))}
        </Slider>
    );
}

export default StyleSliderBar;