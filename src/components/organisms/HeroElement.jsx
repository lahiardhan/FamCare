import React from 'react';
import Button from '../Button';

function HeroElement() {
  return (
    <div className="relative min-h-screen flex w-full bg-gradient-to-r from-primary-color to-secondary-color justify-center">
      <div className="w-full flex flex-col justify-center text-white max-w-[1200px] xs:grid xs:grid-cols-2 px-4 sm:px-8 lg:px-20 xl:px-32">
        <img className="z-10 absolute bottom-0 left-0 w-screen" src="/images/wave.svg" alt="wave-image" />
        <div className="flex justify-center min-h-[220px] xs:col-start-2 xs:row-start-1 xs:row-end-2 xs:items-start xs:relative xs:top-1/4"> {/** Penggunaan xs:relative membuat elemen ada di posisi z-index paling atas */}
          <img src="/images/hero-image.svg" alt="hero-image" width={400} />
        </div>
        <div className="z-20 font-medium mt-6 h-fit xs:mt-0 xs:col-start-1 xs:row-start-1 xs:row-end-2 xs:relative xs:top-1/4 md:top-[30%]"> {/** Penggunaan xs:relative membuat elemen ada di posisi z-index paling atas */}
          <p className="text-sm sm:text-base lg:text-lg">Selamat datang di,</p>
          <h2 className="text-4xl font-[900]">FamCare</h2>
          <p className="text-sm sm:text-base lg:text-lg">FamCare adalah suatu platform layanan dukungan kesehatan mental sebagai upaya penanganan pertama bagi seseorang yang terindikasi mengalami gangguan kesehatan mental.
          </p>
          <Button className="mt-4" link="/about" text="Selengkapnya" />
        </div>
      </div>
    </div>
  )
}

export default HeroElement;
