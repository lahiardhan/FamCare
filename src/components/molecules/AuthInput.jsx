import React from 'react';

function AuthInput({ type,label, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={type} className="block mb-2 text-sm">{label}</label>
      <input
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md border-secondary-color focus:border-primary-color "
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default AuthInput;
