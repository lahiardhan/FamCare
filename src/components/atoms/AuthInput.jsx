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
        className="w-full px-3 py-2 border rounded-[100px] border-secondary-color duration-300 focus:shadow-[0_0_0_5px_#C2DBFE] focus:border-secondary-color focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default AuthInput;
