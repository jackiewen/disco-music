import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SongItem } from '@UI';
import './SliderBar.scss';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { ISong } from '@interfaces';

const sliderItems = require('@mockups/slider-items.json');

interface IProps {
    items: Array<any>
}

const SliderBar = (props: IProps) => {

    const settings = {
        dots: true,
        // lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        className:"main-slider",
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

    return (
        <div>
            <div className="container">
                <Slider {...settings}>
                    {sliderItems && sliderItems.map((item: ISong, index: number) => (
                        <SongItem 
                            {...props}
                            key={"slider-item-" + index}
                            other={`${index + 1}. `}
                            coverImgPath={item.cover_image}
                            title={item.title}
                            author={item.author}
                            quality={item.quality}
                        />
                    ))}
                    
                </Slider>
            </div>
        </div>
    );
}

export default SliderBar;