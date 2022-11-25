/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

function ButtonSlider() {
  return (
    <>
      <input type="range" name="test" id="test" min="0" max="5" step="1" value="0" className="w-[300px] h-[15px] h-3 bg-secondary-color rounded-lg appearance-none cursor-pointer range-5xl dark:bg-gray-700"/>
    </>
    
    
  );
}

ButtonSlider.propTypes = {
  
}

export default ButtonSlider;
