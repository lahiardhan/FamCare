/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

function ButtonSlider({ value, onChange }) {
  return (
    <div className="flex flex-col">
      <input type="range" name="test" id="test" min="0" max="4" step="1" value={value} className="h-[15px] bg-secondary-color rounded-lg appearance-none cursor-pointer range-5xl dark:bg-gray-700" onChange={onChange}/>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span className="w-8 text-left">0</span>
        <span className="w-8 text-center">1</span>
        <span className="w-8 text-center">2</span>
        <span className="w-8 text-center">3</span>
        <span className="w-8 text-right">4</span>
      </div>
    </div>
  );
}

ButtonSlider.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ButtonSlider;
