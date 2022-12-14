import React from 'react';
import Footer from '../../components/organisms/Footer';
import DaftarLayanan from '../../components/organisms/DaftarLayanan';
import DetailLayanan from '../../components/organisms/DetailLayanan';
import HeroElement from '../../components/organisms/HeroElement';
import TestimoniSection from '../../components/organisms/TestimoniSection';

function LandingPage() {
  return (
    <>
      {/* HERO */}
      <HeroElement />

      {/* MAIN */}
      <section id="main" className="min-h-screen overflow-x-hidden">
        {/* LAYANAN */}
        <DaftarLayanan />

        {/* DETAIL LAYANAN */}
        <DetailLayanan />

        {/* TESTIMONIAL */}
        <TestimoniSection />
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;
