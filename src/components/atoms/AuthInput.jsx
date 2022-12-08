import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

function AuthInput({ type, id, label, placeholder, value, onChange, className, autoComplete }) {
  const classNames = {
    input: cx('w-full px-3 py-2 border rounded-[100px] border-secondary-color duration-300 focus:ring-4 focus:ring-secondary-color focus:ring-opacity-30 focus:outline-none'),
  }
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 text-sm">{label}</label>
      <input 
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames.input}
        autoComplete={autoComplete}
      />
    </div>
  )
}

AuthInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default AuthInput;
