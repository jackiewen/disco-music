import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SongItem from '@UI/SongItem';
import './SliderBar.scss';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { ISong } from '@interfaces/ISong';

interface IProps {
    sliderItems: Array<any>
}

const SliderBar = (props: IProps) => {

    const settings = {
        dots: true,
        // lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        className:"main-slider",
        // variableWidth: true,
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
                    {props.sliderItems && props.sliderItems.map((item: ISong, index: number) => (
                        <SongItem
                            {...props}
                            key={index}
                            other={`${index + 1}. `}
                            coverImg={item.coverImage}
                            title={item.title}
                            author={item.author}
                            quality={item.quality}
                            songLink={item.songLink}
                            authorLink={item.authorLink}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SliderBar;