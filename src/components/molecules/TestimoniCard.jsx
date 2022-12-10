import React from 'react';
import PropTypes from 'prop-types';

function TestimoniCard({ testi, index, testiIndex }) {
  const rating = [];

  for (let i = 0; i < testi.rating; i++) {
    rating.push(<img key={i} src="/images/star.svg" alt="star-icon" />);
  };

  return (
    <div className={`min-h-[400px] w-full xs:min-h-[300px] md:min-h-[478px] lg:min-h-[364px] flex flex-col justify-between bg-[#ffffff] rounded-[30px] border border-secondary-color py-8 px-5 duration-300 ${index === testiIndex ? 'scale-100 opacity-100' : 'scale-75 lg:scale-[0.8] opacity-50'}`}>
      <div className="p-2 relative">
        <img src="/images/up-quote.svg" className="w-5 absolute top-0 left-0" alt="up-quote icon" />
        <img src="/images/down-quote.svg" className="w-5 absolute bottom-0 right-0" alt="down-quote icon" />
        <p className='m-6'>{testi.review}</p>
      </div>
      <div className="flex gap-3 mt-5">
        <div className="w-1/5">
          <img className="rounded-full" src={testi.profilePic} alt={`Profile Picture ${testi.name}`} />
        </div>
        <div>
          <h4 className="text-lg font-bold">{testi.name}</h4>
          <p className="text-sm">{testi.job}</p>
          <span className="flex mt-1">{rating}</span>
        </div>
      </div>
    </div>
  )
}

TestimoniCard.propTypes = {
  testi: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  testiIndex: PropTypes.number.isRequired,
}

export default TestimoniCard;
