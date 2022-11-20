import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ text, href, className }) {
  return (
    <button type="button" className={`${className} py-2 px-7 bg-secondary-color text-white text-base font-semibold cursor-pointer max-w-fit rounded-full duration-200 hover:bg-[#079C89] sm:text-lg`}>
      <Link to={href}>
        {text}
      </Link>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
}

export default Button;
