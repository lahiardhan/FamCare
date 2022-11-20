import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

function DetailLayananItem({ title, image, description, buttonText, invertedPosition }) {
  return (
    <div className="max-w-[1200px] py-16 md:grid md:grid-cols-2 md:gap-5 lg:gap-10">
      <div className={`flex justify-center ${invertedPosition ? 'md:col-start-2' : null}`}>
        <img src={`/images/${image}`} alt={`Vector Ilustrasi ${title}`} className="max-w-lg" />
      </div>
      <div className={`flex flex-col justify-center mt-6 md:mt-0 ${invertedPosition ? 'md:col-start-1 md:row-start-1 md:items-end' : null}`}>
        <h3 className="text-2xl font-bold sm:text-4xl">{title}</h3>
        <p className={`mt-6 ${invertedPosition ? 'md:text-right' : null}`}>{description}</p>
        <Button className="mt-4" text={buttonText} />
      </div>
    </div>
  );
};

DetailLayananItem.propTypes = {
  title: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  buttonText: PropTypes.string.isRequired, 
  invertedPosition: PropTypes.bool,
}

export default DetailLayananItem;
