/* eslint-disable react/prop-types */
import Slider from 'react-slick'
import './DetailsSliderStyle.css'
import { useRef } from 'react';
import leftArrow from '../../assets/Imgs/Details-slider-left-arrow.svg'
import rightArrow from '../../assets/Imgs/Details-slider-right-arrow.svg'

const DetailsSlider = ({ CarImages }) => {
  const slider = useRef(null);
  const keys = Object.values(CarImages);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  }
  return (
    <div className='DetailsSlider'>
      <div onClick={() => slider.current.slickPrev()}><img className='leftArrow' src={leftArrow} alt="" /></div>
      <div onClick={() => slider.current.slickNext()}><img className='rightArrow' src={rightArrow} alt="" /></div>
      <div className="slider-container">
        <Slider ref={slider} {...settings}>
       
          { keys.map((key,index) => {
            return (
              <div className='CarDetailsImg-Container' key={index}>
                <img className='CarDetailsImg' src={CarImages[key]} />
              </div>
            )

          })}
        </Slider>
      </div>
    </div>
  )
}

export default DetailsSlider