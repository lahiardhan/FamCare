import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { testimoniList } from '../../utils/testimoniList';
import TestimoniCard from '../molecules/TestimoniCard';

function TestimoniSection() {
  const [testiIndex, setTestiIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <Icon
        className="z-10 text-secondary-color text-xl cursor-pointer duration-300 active:scale-75 absolute top-1/2 right-0"
        onClick={onClick}
        icon="material-symbols:arrow-forward-ios-rounded"
      />
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <Icon
        className="z-10 text-secondary-color text-xl cursor-pointer duration-300 active:scale-75 absolute top-1/2 left-0"
        onClick={onClick}
        icon="material-symbols:arrow-back-ios-rounded"
      />
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0",
    class: 'flex justify-center',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setTestiIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      }
    ],
  };

  return (
    <section id="testimoni" className="w-full flex flex-col items-center py-8 px-4 lg:py-16 overflow-hidden">
      <div className="w-screen max-w-5xl px-2">
        <h3 className="text-center text-[26px] font-bold sm:text-[40px]">Kata Mereka Tentang FamCare</h3>
        <div className="w-full my-10">
          <Slider className="flex justify-center" {...settings}>
            {testimoniList.map((testi, index) => (
              <TestimoniCard key={index} testi={testi} index={index} testiIndex={testiIndex} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TestimoniSection;
