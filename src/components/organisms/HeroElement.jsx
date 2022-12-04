import React, { useEffect } from 'react';
import Button from '../atoms/Button';
import AOS from 'aos';
import "aos/dist/aos.css";

function HeroElement() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative min-h-screen flex w-full bg-gradient-to-r from-primary-color to-secondary-color justify-center">
      <div className="w-full flex flex-col justify-center text-white max-w-[1200px] xs:grid xs:grid-cols-2 px-4 sm:px-8 lg:px-20 xl:px-32">
        <img className="z-10 absolute bottom-0 left-0 w-screen" src="/images/wave.svg" alt="wave-image" />
        <div className="flex justify-center min-h-[220px] h-fit xs:col-start-2 xs:row-start-1 xs:row-end-2 xs:items-start xs:relative xs:top-1/4">
          <img src="/images/hero-image.svg" alt="hero-image" width={400} />
        </div>
        <div className="z-20 font-medium mt-6 h-fit xs:mt-0 xs:col-start-1 xs:row-start-1 xs:row-end-2 xs:relative xs:top-1/4 md:top-[30%]">
          <p className="text-sm sm:text-base lg:text-lg" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">Selamat datang di,</p>
          <h2 className="text-4xl font-[900]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">FamCare</h2>
          <p className="text-sm sm:text-base lg:text-lg" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">FamCare adalah platform  layanan kesehatan dukungan mental Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
            <Button className="mt-4" link="/about" text="Selengkapnya" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroElement;
