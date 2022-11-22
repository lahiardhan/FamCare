import React from 'react';
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
      <section id="main" className="min-h-screen">
        {/* LAYANAN */}
        <DaftarLayanan />
        <p>test</p>

        {/* DETAIL LAYANAN */}
        <DetailLayanan />

        {/* TESTIMONIAL */}
        <TestimoniSection />
      </section>
    </>
  );
}

export default LandingPage;
