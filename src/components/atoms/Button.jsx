/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Button({ text, href, link, target, className, popUpModal, onClick }) {
  const classNames = {
    button: cx('py-2 px-7 bg-secondary-color text-white text-base font-semibold cursor-pointer rounded-full duration-200 hover:bg-[#079C89] focus:ring-4 focus:ring-secondary-color focus:ring-opacity-30 focus:outline-none sm:text-lg')
  }

  return (
    <button 
      type="button"
      data-modal-toggle={popUpModal}
      onClick={onClick}
      className={`${className} ${classNames.button}`}
    >
      {href ? 
        <a href={href} target={target}>
          {text}
        </a>
        :
        <Link to={link}>
          {text}
        </Link>
      }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  popUpModal: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
