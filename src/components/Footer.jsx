/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <>
        {/*Disclaimer*/}
        <div className='flex-initial w-full bg-[url("/public/images/disclaimer-images.svg")]'>
          <div className="items-center px-5 flex flex-col text-center text-white">
            <h3 className='text-xl font-bold py-[30px] lg:text-2xl'> DISCLAIMER!</h3>
            <p className='text-base font-medium border-box lg:text-lg'>Jika Anda sedang mengalami krisis psikologis yang mengancam hidup Anda,<br/>layanan ini tidak direkomendasikan.</p>
            <h3 className='text-base font-semibold py-[30px] lg:text-lg'>Silahkan hubungi 199.</h3>
          </div>
        </div>
        
        {/*Footer*/}
        <footer className='w-full bg-gradient-to-r from-secondary-color to-primary-color text-white lg:text-left'>
        <div className='container flex justify-center px-5 max-w-xl mx-auto xs:max-w-2xl md:max-w-3xl lg:flex lg:max-w-full'>
          {/*Bagian Footer Scale sm md*/}
          <div>
            {/*Bagian Vector Footer*/}
            <div className='flex flex-col lg:hidden'>
            <img src='images/footer-image.svg' alt="vector_footer" className='h-[300px] mt-20 md:h-[350px]'/>
            </div>
            {/*Bagian Tentang Kami*/}
            <div className='flex flex-col lg:hidden'>
              <h3 className='font-bold mt-20 text-center text-2xl md:text-3xl '>Tentang Kami</h3>
              <p className='mt-10 text-center text-md md:text-lg  text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint </p>
              <p className='mt-5 text-center text-md md:text-lg  text-md'><Link to="/about">Selengkapnya...</Link></p>
            </div>
            {/*Bagian Tautan Website*/}
            <div className='flex flex-col lg:hidden'>
              <h3 className='font-bold mt-20 text-center text-2xl md:text-3xl '>Tautan Website</h3>
              <ul className='font-semibold mt-10 text-center text-md md:md:text-lg  text-md'>
                  <li className='mt-5'><Link to="/">HOME</Link></li>
                  <li className='mt-5'><Link to="/test">ANXIETY TEST</Link></li>
                  <li className='mt-5'><Link to="/article">ARTICLE</Link></li>
                  <li className='mt-5'><Link to="/forum">DISCUSSION FORUM</Link></li>
                  <li className='mt-5'><Link to="/about">ABOUT US</Link></li>
              </ul>
              <p className='mt-20 pb-[25px] text-center text-md md:text-lg  text-md'>© 2022 - FamCare</p>
            </div>
          </div>
          {/*Bagian Footer Scale lg xl*/}
          <div className='hidden lg:block'>
            <div className='lg:flex flex-row flex-wrap'>
              <img src='images/footer-image.svg' alt="vector_footer" className='lg:h-[220px] mt-20 mb-10 ml-20 xl:h-[387px]'/>
              <div className='lg:flex flex-col lg:mt-[50px] ml-5 xl:mt-[70px] lg:ml-[60px]'>
                <h3 className=' text-2xl font-bold xl:text-3xl'>Tentang Kami</h3>
                <p className=' lg:w-[400px] mt-5 xl:w-[500px] text-xl xl:mt-[50px]'>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint</p>
                <p className=' lg:mt-5 xl:text-xl xl:mt-[50px]'><a href='/about'>selengkapnya...</a></p>
              </div>
              <div className='lg:flex flex-col lg:mt-[50px] ml-5 xl:mt-[70px] lg:ml-[60px]'>
                <h3 className=' text-2xl font-bold xl:text-3xl'>Tautan Website</h3>
                <ul className=' text-md xl:text-xl'>
                  <li className='pt-5'><Link to="/">HOME</Link></li>
                  <li className='pt-5'><Link to="/test">ANXIETY TEST</Link></li>
                  <li className='pt-5'><Link to="/article">ARTICLE</Link></li>
                  <li className='pt-5'><Link to="/forum">DISCUSSION FORUM</Link></li>
                  <li className='pt-5'><Link to="/about">ABOUT US</Link></li>
                </ul>
                <p className=' lg:mt-5 mb-5 xl:text-xl xl:mt-[60px]'>© 2022 - FamCare</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
  );
}

export default Footer;
