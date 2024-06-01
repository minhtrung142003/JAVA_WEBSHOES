import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';  
import slider1 from "../../../assets/img/slides1.jpg"
import slider2 from "../../../assets/img/slides2.jpg";
import slider3 from "../../../assets/img/slides4.jpg";

const Slide = ({ imgSrc }) => {
  return (
    <div>
      <img src={imgSrc} alt="Slide" />
    </div>
  );
};

const SlideSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const SlideData = [
  { imgSrc: slider1 },
  { imgSrc: slider2 },
  { imgSrc: slider3 },
];

const CustomSlider = () => {
  return (
    <Slider {...SlideSettings}>
      {SlideData.map((slide, index) => (
        <Slide key={index} imgSrc={slide.imgSrc} />
      ))}
    </Slider>



  );
};

export default CustomSlider;
