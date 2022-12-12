import React from 'react';
import Footer from '../../components/organisms/Footer';
import Slider from 'react-slick';
import { profilList } from '../../utils/profilList';
import ProfilCard from '../../components/molecules/ProfilCard';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AboutUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <Icon
        className="z-10 text-secondary-color text-4xl cursor-pointer duration-300 active:scale-75 absolute top-1/2 right-0"
        onClick={onClick}
        icon="material-symbols:arrow-forward-ios-rounded"
      />
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <Icon
        className="z-10 text-secondary-color text-4xl cursor-pointer duration-300 active:scale-75 absolute top-1/2 left-0"
        onClick={onClick}
        icon="material-symbols:arrow-back-ios-rounded"
      />
    );
  };

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
    <>
      <section className='min-h-screen w-full flex justify-center py-20'>
        <div className="max-w-[1200px] mt-10">
          <h1 className="font-extrabold text-4xl text-center" data-aos="fade-down">About Us</h1>
          <div className='flex flex-wrap mt-10'>
            <div className='w-full self-center px-4 mt-7 md:w-1/2'>
              <h1 className='text-2xl md:text-center font-bold text-secondary-color lg:text-4xl' data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-sine">Tujuan Produk</h1>
              <p className='text-sm md:text-base mt-4' data-aos="fade-left" data-aos-delay="300">
              Banyak dari masyarakat Indonesia yang kurang paham terhadap kesehatan mentalnya sendiri karena beberapa faktor seperti minimnya pengetahuan terkait kesehatan mental. Pentingnya 
              penanganan pertama secara mandiri oleh setiap individu adalah salah satu hal yang penting serta cara yang efektif bagi mereka yang terindikasi mengalami gangguan kesehatan mental 
              dan kecemasan. Berdasarkan hal tersebut maka dapat mendasari kami untuk memilih proyek ini agar melalui fitur yang akan kita hadirkan dapat meningkatkan kesadaran setiap individu 
              terkait dengan kondisi mental baik diri sendiri ataupun kerabat.
              </p>
            </div>
            <div className='w-full self-end px-4 md:w-1/2'>
              <div className="flex justify-center" data-aos="zoom-out" data-aos-delay="500">
                <img src="/images/test-image.svg" alt="hero-image" width={400} />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap mt-10'>
            <div className='w-full self-end px-4 md:w-1/2'>
              <div className="flex justify-center" data-aos="zoom-out" data-aos-delay="500">
                <img src="/images/hero-image.svg" alt="hero-image" width={400} />
              </div>
            </div>
            <div className='w-full self-center px-4 mt-7 md:w-1/2'>
              <h1 className='text-2xl font-bold text-secondary-color md:text-4xl md:text-center' data-aos="fade-left">Misi Produk</h1>
              <p className='text-sm md:text-base mt-4' data-aos="fade-right">
                Website ini didevelop dengan memiliki beberapa fitur yakni test kecemasan, artikel, tips & trik, dan juga forum diskusi. Sehingga ketika pengguna mengakses website kemudian 
                akan diarahkan untuk dapat melakukan test kecemasan, selanjutnya ketika sudah mendapat hasil dari test tersebut baik terindikasi maupun tidak maka pengguna selanjutnya dapat 
                melakukan beberapa cara penanggulangan secara mandiri melalui fitur tips & trik. Kemudian pengguna juga dapat melihat wawasan dan isu-isu terkait dengan kesehatan mental. 
                Kemudian pengguna juga dapat berbagi pengalaman dan juga solusi terkait kesehatan mental melalui forum diskusi.
              </p>
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
        </div>
      </section>
      {/* <section className='min-h-screen flex justify-center py-20'>
        <div className="max-w-[1200px] mt-10">
          <h1 className="font-extrabold text-4xl text-center" data-aos="fade-down">About Us</h1>
          <div className='flex flex-wrap mt-10'>
            <div className='w-full self-center px-4 mt-7 md:w-1/2'>
              <h1 className='text-2xl md:text-center font-bold text-secondary-color lg:text-4xl' data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-sine">Tujuan Produk</h1>
              <p className='text-sm md:text-base mt-4' data-aos="fade-left" data-aos-delay="300">
              Banyak dari masyarakat Indonesia yang kurang paham terhadap kesehatan mentalnya sendiri karena beberapa faktor seperti minimnya pengetahuan terkait kesehatan mental. Pentingnya 
              penanganan pertama secara mandiri oleh setiap individu adalah salah satu hal yang penting serta cara yang efektif bagi mereka yang terindikasi mengalami gangguan kesehatan mental 
              dan kecemasan. Berdasarkan hal tersebut maka dapat mendasari kami untuk memilih proyek ini agar melalui fitur yang akan kita hadirkan dapat meningkatkan kesadaran setiap individu 
              terkait dengan kondisi mental baik diri sendiri ataupun kerabat.
              </p>
            </div>
            <div className='w-full self-end px-4 md:w-1/2'>
              <div className="flex justify-center" data-aos="zoom-out" data-aos-delay="500">
                <img src="/images/test-image.svg" alt="hero-image" width={400} />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap mt-10'>
            <div className='w-full self-end px-4 md:w-1/2'>
              <div className="flex justify-center" data-aos="zoom-out" data-aos-delay="500">
                <img src="/images/hero-image.svg" alt="hero-image" width={400} />
              </div>
            </div>
            <div className='w-full self-center px-4 mt-7 md:w-1/2'>
              <h1 className='text-2xl font-bold text-secondary-color md:text-4xl md:text-center' data-aos="fade-left">Misi Produk</h1>
              <p className='text-sm md:text-base mt-4' data-aos="fade-right">
                Website ini didevelop dengan memiliki beberapa fitur yakni test kecemasan, artikel, tips & trik, dan juga forum diskusi. Sehingga ketika pengguna mengakses website kemudian 
                akan diarahkan untuk dapat melakukan test kecemasan, selanjutnya ketika sudah mendapat hasil dari test tersebut baik terindikasi maupun tidak maka pengguna selanjutnya dapat 
                melakukan beberapa cara penanggulangan secara mandiri melalui fitur tips & trik. Kemudian pengguna juga dapat melihat wawasan dan isu-isu terkait dengan kesehatan mental. 
                Kemudian pengguna juga dapat berbagi pengalaman dan juga solusi terkait kesehatan mental melalui forum diskusi.
              </p>
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
        </div>
      </section> */}
    <Footer />
    </>
  );
};

export default AboutUs;
