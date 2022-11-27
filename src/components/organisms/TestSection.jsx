import React from 'react';
import ButtonSlider from '../ButtonSlider';
import Button from '../Button';
import PropTypes from 'prop-types';

function TestSection({ no, title, description, image, score, onSliderChange, next, prev, onClick }) {
  return (
    <>
      <div className='flex justify-center mt-10'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8 lg:ml-11 xl:ml-28'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>{no}/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src={`images/test-images/${image}`} className='w-[150px]'/>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-2xl font-bold uppercase w-[800px] md:text-3xl'>{title}</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-base font-medium w-[850px] md:text-lg'>“ {description} “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider value={score} onChange={onSliderChange} />
            </div>
            <div>
            </div>
          </div>
          <div className={`flex ${prev ? 'justify-between' : 'justify-end'} mt-24 md:mt-32 lg:mt-40`}>
            <Button text='Sebelumnya' link={prev} className={prev ? 'block' : 'hidden'} />
            {no !== '14' ? (
              <Button text='Selanjutnya' link={next} onClick={onClick} />
            ) : (
              <Button text='Selesai' href={next} popUpModal="finish-test-modal" onClick={onClick} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

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
}

export default TestSection;
