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
      <section className="min-h-screen w-full flex flex-col justify-center items-center py-20 px-4">
        <div className="w-full max-w-[1200px] mt-10">
          <h1 className="font-extrabold text-4xl text-center" data-aos="fade-down">About Us</h1>
          <div className="flex flex-wrap mt-20 md:grid md:grid-cols-2 md:gap-5 lg:gap-10">
            <div className="w-full md:col-start-2 md:row-start-1">
              <div className="flex justify-center" data-aos="zoom-out" data-aos-delay="500">
                <img src="/images/test-image.svg" alt="tujuan-image" width={400} />
              </div>
            </div>
            <div className="w-full self-center mt-7 md:col-start-1 md:row-start-1">
              <h1 className="text-2xl md:text-center font-bold text-secondary-color lg:text-4xl" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-sine">Tujuan Produk</h1>
              <p className="text-sm md:text-base mt-4 md:text-right" data-aos="fade-left" data-aos-delay="300">
              Banyak dari masyarakat Indonesia yang kurang paham terhadap kesehatan mentalnya sendiri karena beberapa faktor seperti minimnya pengetahuan terkait kesehatan mental. Pentingnya 
              penanganan pertama secara mandiri oleh setiap individu adalah salah satu hal yang penting serta cara yang efektif bagi mereka yang terindikasi mengalami gangguan kesehatan mental 
              dan kecemasan. Berdasarkan hal tersebut maka dapat mendasari kami untuk memilih proyek ini agar melalui fitur yang akan kita hadirkan dapat meningkatkan kesadaran setiap individu 
              terkait dengan kondisi mental baik diri sendiri ataupun kerabat.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-24 md:grid md:grid-cols-2 md:gap-5 lg:gap-10">
            <div className="w-full">
              <div className="flex justify-center" data-aos="zoom-out" data-aos-delay="500">
                <img src="/images/hero-image.svg" alt="misi-image" width={400} />
              </div>
            </div>
            <div className="w-full self-center mt-7">
              <h1 className="text-2xl md:text-center font-bold text-secondary-color lg:text-4xl" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-sine">Misi Produk</h1>
              <p className="text-sm md:text-base mt-4" data-aos="fade-left" data-aos-delay="300">
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
          <Slider {...settings} className="flex justify-center">
            {profilList.map((profil) => (
              <ProfilCard profil={profil} />
            ))}
          </Slider>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default AboutUs;
