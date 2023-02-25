import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClassCard from './ClassCard'

const SwiperComponent = () => {

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    let sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
        centerPadding: '10px'
      };
 

  return (
    <Slider {...sliderSettings} className="flex flex-wrap container">
       <div className="px-4">
          <ClassCard />
        </div>
        <div className="px-4">
          <ClassCard />
        </div>
        <div className="px-4">
          <ClassCard />
        </div>
        <div className="px-4">
          <ClassCard />
        </div>
        <div className="px-4">
          <ClassCard />
        </div>
        <div className="px-4">
          <ClassCard />
        </div>
        <div className="px-4">
          <ClassCard />
        </div>
        <div className="px-4">
          <ClassCard />
        </div>
    </Slider>
  )
}

export default SwiperComponent