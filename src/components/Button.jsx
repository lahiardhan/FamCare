/* eslint-disable */
import React from 'react';

function Button({title}) {
  return (
    <>
      <button type="button" class="py-2 px-7 bg-secondary-color text-white rounded-[100px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] hover:bg-[#079C89]">
        {title}
      </button>
    </>
  );
}

export default Button;
