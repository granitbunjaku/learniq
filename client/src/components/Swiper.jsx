import React, { useContext, useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseCard } from './CourseCard'
import { CContext } from '../context/CoursesContext';

const SwiperComponent = () => {
  const {courses} = useContext(CContext)
  const [slidesToShow, setSlidesToShow] = useState(4);

  const fiveCourses = courses.length > 0 ? courses.slice(0, 5) : [];
  
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
    infinite: true, // set infinite to false
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
  };
 

  return (
    <Slider key={courses.length} {...sliderSettings} className="container ml-20 mb-16">
      {fiveCourses.map(course => (
        <div className="px-4" key={course.id}>
          <CourseCard title={course.title} about={course.about} price={course.price} id={course.id} image={course.image}/>
        </div>
      ))}
    </Slider>
  )
}

export default SwiperComponent