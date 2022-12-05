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
        className="w-full px-3 py-2 border rounded-[100px] border-secondary-color duration-300 focus:ring-4 focus:ring-secondary-color focus:ring-opacity-30 focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default AuthInput;
