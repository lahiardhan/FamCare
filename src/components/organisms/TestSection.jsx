import React, { useState } from 'react';
import ButtonSlider from '../atoms/ButtonSlider';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';
import TestModal from '../molecules/TestModal';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Icon } from '@iconify/react';

function TestSection({ no, title, description, image, score, onSliderChange, next, prev, onClick }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="relative min-h-screen max-h-screen flex flex-wrap justify-center px-4">
      <div className="max-w-[850px] h-screen flex flex-col justify-between pt-20 pb-5">
        <div>
          <div className="relative flex flex-row justify-between">
            <TestModal showModal={showModal} />
            <p className="text-lg font-semibold opacity-60 color-black"><span className="text-blue-500">{no}</span>/14</p>
            <div className="z-10 text-2xl text-secondary-color cursor-pointer" onClick={toggleModal}>
              {showModal? <Icon icon="carbon:close-filled" /> : <Icon icon="bi:info-circle-fill" />}
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
              <div className='flex justify-center mt-14'>
                <img src={`images/test-images/${image}`} className='w-[150px]'/>
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col items-center flex-wrap">
            <h3 className="text-xl font-bold mt-6 lg:mt-8 uppercase max-w-[800px] md:text-3xl">{title}</h3>
            <p className="text-sm font-medium mt-3 lg:mt-5 md:text-lg">{description}</p>
            <div className="w-full max-w-3xl mt-2.5 lg:mt-4">
              <ButtonSlider value={score} onChange={onSliderChange} />
            </div>
          </div>
        </div>
        <div className={`flex ${prev ? 'justify-between' : 'justify-end'}`}>
          <Button text='Sebelumnya' link={prev} className={prev ? 'block' : 'hidden'} />
          {no !== '14' ? (
            <Button text='Selanjutnya' link={next} onClick={onClick} />
          ) : (
            <Button text='Selesai' href={next} popUpModal="finish-test-modal" onClick={onClick} />
          )}
        </div>
      </div>
    </section>
  );
};

TestSection.propTypes = {
  no: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  score: PropTypes.string.isRequired, 
  onSliderChange: PropTypes.func.isRequired, 
  next: PropTypes.string, 
  prev: PropTypes.string, 
  onClick: PropTypes.string, 
};

export default TestSection;
