import React, { useEffect } from 'react';
import Card from '../molecules/Card';
import AOS from 'aos';
import "aos/dist/aos.css";

function DaftarLayanan() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-light-blue mt-8 py-8 px-4 lg:mt-16 lg:py-16">
      <h2 className="text-center text-[26px] font-bold sm:text-[40px]" data-aos="fade-down">Layanan Kami</h2>
      <div className="mt-7 flex flex-wrap justify-center gap-7 lg:mt-[70px]">
        <Card
          icon="mdi:book-edit-outline" href="/test"
          title="Tes Kecemasan" bgColor="bg-gradient-to-b from-blue-500 to-blue-900"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eteiusmo."
          aosDuration="600"
        />
        <Card
          icon="zondicons:news-paper" href="/article"
          title="Artikel" bgColor="bg-gradient-to-b from-secondary-color to-[#0f8072]"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eteiusmo."
          aosDuration="1000"
        />
        <Card
          icon="fluent:chat-multiple-24-regular" href="/forum"
          title="Forum Diskusi" bgColor="bg-gradient-to-b from-purple-500 to-purple-900"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eteiusmo."
          aosDuration="1400"
        />
      </div>
    </section>
  )
}

export default DaftarLayanan;