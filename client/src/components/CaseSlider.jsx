import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Case from './Case';

const SwiperComponent = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
        centerPadding: '10px'
      };

    return (
    <Slider {...settings} className="w-full">
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />    
        <Case />
    </Slider>
    );
};

export default SwiperComponent;