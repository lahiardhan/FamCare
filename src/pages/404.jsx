import React, { useEffect } from 'react';
import Button from '../components/atoms/Button';
import AOS from 'aos';
import "aos/dist/aos.css";

function Page404() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  } ,[]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20">
      <div className="w-full max-w-[600px] flex flex-col items-center">
        <img src="/images/page-not-found.svg" alt="404-[Page Not Found]" className="w-full" data-aos="zoom-in" />
        <div data-aos="zoom-in">
          <Button text="Kembali ke Beranda" link="/" className="z-10 mt-10" />
        </div>
      </div>
    </section>
  );
}

export default Page404;
