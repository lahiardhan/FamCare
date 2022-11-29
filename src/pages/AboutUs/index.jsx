import React from 'react';
import Footer from '../../components/Footer';
import Slider from 'react-slick';
import { profilList } from '../../utils/profilList';
import ProfilCard from '../../components/molecules/ProfilCard';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function AboutUs() {
  const NextArrow = ({ onClick }) => {
    return (
      <Icon
        className="z-10 text-secondary-color text-4xl cursor-pointer duration-300 active:scale-75 absolute top-1/2 right-0"
        onClick={onClick}
        icon="material-symbols:arrow-forward-ios-rounded"
      />
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <Icon
        className="z-10 text-secondary-color text-4xl cursor-pointer duration-300 active:scale-75 absolute top-1/2 left-0"
        onClick={onClick}
        icon="material-symbols:arrow-back-ios-rounded"
      />
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section>
      <div>
        <h1 className="font-extrabold text-4xl mt-24 lg:py-7 text-center" data-aos="fade-down">About Us</h1>
      </div>
      <div className='flex flex-wrap lg:px-32 '>
        <div className='w-full self-center px-4 mt-7 md:w-1/2'>
          <h1
            className='text-2xl md:text-center font-bold text-secondary-color lg:text-4xl'
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >Tujuan Produk</h1>
          <p
            className='text-sm md:text-base mt-4 '
            data-aos="fade-left"
            data-aos-delay="300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis veritatis ipsa, natus mollitia ut excepturi tenetur amet sed doloribus magnam laudantium, cupiditate maiores doloremque quibusdam sequi non laborum alias! Blanditiis corrupti inventore dolorum magnam eligendi maiores necessitatibus at officiis tempora</p>
        </div>
        <div className='w-full self-end px-4 md:w-1/2'>
          <div
            className='mt-10'
            data-aos="zoom-out"
            data-aos-delay="500">
            <img
              src="/images/test-image.svg"
              alt="hero-image"
              width={400} />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap md:px-32 '>
        <div className='w-full self-end px-4 md:w-1/2'>
          <div className='mt-10'
            data-aos="zoom-out"
            data-aos-delay="500">
            <img src="/images/hero-image.svg" alt="hero-image" width={400} />
          </div>
        </div>
        <div className='w-full self-center px-4 mt-7 md:w-1/2'>
          <h1
            className='text-2xl font-bold text-secondary-color md:text-4xl md:text-center'
            data-aos="fade-left"
          >Misi Produk</h1>
          <p className='text-sm md:text-base mt-4 ' data-aos="fade-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis veritatis ipsa, natus mollitia ut excepturi tenetur amet sed doloribus magnam laudantium, cupiditate maiores doloremque quibusdam sequi non laborum alias! Blanditiis corrupti inventore dolorum magnam eligendi maiores necessitatibus at officiis tempora</p>
        </div>

      </div>
      <div>
        <h1 className="font-extrabold text-secondary-color text-4xl mt-24 lg:py-7 text-center" data-aos="fade-right">Meet Our Great Team</h1>
      </div>
      <Slider {...settings} className='mb-10 mx-2 sm:mx-16 md:mx-32 lg:mx-[400px]'>
        {profilList.map((profil) => (
          <ProfilCard profil={profil} />


        ))}
      </Slider>

      <Footer />
    </section>

  );
}

export default AboutUs;
