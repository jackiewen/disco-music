import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import "./StyleSliderBar.scss";

interface SliderItem {
    title: string,
    cover_image: string
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
                <div className="slider-item" style={
                    { backgroundImage: `url(${
                        item.cover_image.includes('@images/', 0) ?
                            require('@images/' + item.cover_image.replace('@images/', '')).default
                            : item.cover_image})`
                        }
                }>
                    <span>{item.title}</span>
                </div>
            </div>
            ))}
        </Slider>
    );
}

export default SmallSliderBar;