import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './SliderItem';
import './SliderBar.scss';

type Props = {
    items: Array<any>
}

const SliderBar = (props: Props) => {

    const settings = {
        dots: true,
        // lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        className:"main-slider",
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
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                </Slider>
            </div>
        </div>
    );
}

export default SliderBar;