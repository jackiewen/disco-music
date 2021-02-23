import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import "./SmallSliderBar.scss";

interface SliderItem {
    title: string,
    coverImage: string,
    link: string
}

interface IProps {
    sliderItems: Array<SliderItem>
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

const SmallSliderBar = (props: IProps) => {
    return (
        <Slider {...settings}>
            {props.sliderItems && props.sliderItems.map((item: SliderItem, index: number) => (
            <div key={index}>
                <Link to={item.link}>
                    <div className="slider-item" style={
                        { backgroundImage: `url(${
                            item.coverImage.includes('@images/', 0) ?
                                require('@images/' + item.coverImage.replace('@images/', '')).default
                                : item.coverImage})`
                            }
                    }>
                        <span>{item.title}</span>
                    </div>
                </Link>
            </div>
            ))}
        </Slider>
    );
}

export default SmallSliderBar;