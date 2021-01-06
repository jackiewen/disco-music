import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                    <div>
                        <img src={"https://data.chiasenhac.com/data/cover/134/133126.jpg"} />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SliderBar;