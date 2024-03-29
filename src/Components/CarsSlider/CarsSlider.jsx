/* eslint-disable react/prop-types */
import './CarsSliderStyle.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '/assets/Imgs/nextArrow.svg'
import PrevArrow from '/assets/Imgs/prevArrow.svg'
import { useRef } from 'react';


const CarsSlider = () => {
    const slider = useRef(null);

    const Slides = [
        {
            Category: "BMW",
            CarImg: '/IPSUMcars/assets/Imgs/BMW.png'
        },
        {
            Category: "Bugatti",
            CarImg: '/IPSUMcars/assets/Imgs/Bugatti.png'
        },
        {
            Category: "Audi",
            CarImg: '/IPSUMcars/assets/Imgs/Audi.png'
        },
        {
            Category: "honda",
            CarImg: '/IPSUMcars/assets/Imgs/honda.png'
        },
        {
            Category: "BMW",
            CarImg: '/IPSUMcars/assets/Imgs/BMW.png'
        },
        {
            Category: "honda",
            CarImg: '/IPSUMcars/assets/Imgs/honda.png'
        },
        {
            Category: "Bugatti",
            CarImg: '/IPSUMcars/assets/Imgs/Bugatti.png'
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 3,
       
        // variableWidth: true,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 718,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 485,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className='slider'>
            <div onClick={()=> slider.current.slickPrev()} className='PrevArrowContainer'><img className='PrevArrow' src={PrevArrow} alt="" /></div>
            <div onClick={()=> slider.current.slickNext()} className='NextArrowContainer'> <img className='NextArrow' src={NextArrow} alt="" /></div>
            <div className='sliderBackground'></div>
            <div className='slider-container'>
                <div>
                    <Slider ref={slider} {...settings}>
                        {Slides.map((element, index) => {
                            return (
                                <div key={index} className='SlideContainer'>
                                    <h3 className='CarType'>{element.Category}</h3>
                                    <div className='SlideImageContainer'> </div>
                                    <img className='SlideImage' src={element.CarImg} alt="" />
                                </div>
                            )

                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CarsSlider