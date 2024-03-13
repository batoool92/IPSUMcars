import Slider from 'react-slick'
import './DetailsSliderStyle.css'
import { useRef } from 'react';
import leftArrow from '../../assets/Imgs/Details-slider-left-arrow.svg'
import rightArrow from '../../assets/Imgs/Details-slider-right-arrow.svg'


const DetailsSlider = () => {
  const slider = useRef(null);

  const DetailsCarImgs = [
    {
      img: 'src/assets/Imgs/Car-Details-Img1.jpg'
    },
    {
      img: 'src/assets/Imgs/Car-Details-Img2.jpg'
    },
    {
      img: 'src/assets/Imgs/Car-Details-Img3.jpg'
    },
    {
      img: 'src/assets/Imgs/HeroCar3.png'
    },
    {
      img: 'src/assets/Imgs/Car-Details-Img3.jpg'
    }
  ]
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
          {DetailsCarImgs.map((element, index) => {
            return (
              <div className='CarDetailsImg-Container' key={index}>
                <img className='CarDetailsImg' src={element.img} />
              </div>
            )

          })}
        </Slider>
      </div>
    </div>
  )
}

export default DetailsSlider