import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

function AuthInput({ type,label, placeholder, value, onChange }) {
  const classNames = {
    input: cx('w-full px-3 py-2 border rounded-[100px] border-secondary-color duration-300 focus:ring-4 focus:ring-secondary-color focus:ring-opacity-30 focus:outline-none'),
  }
  return (
    <div>
      <label htmlFor={type} className="block mb-2 text-sm">{label}</label>
      <input
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        className={classNames.input}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

AuthInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default AuthInput;
