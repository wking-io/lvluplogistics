import React from 'react';

export const Field = ({ name, label, value, placeholder, update }) => (
  <div className="flex flex-col mt-8 text-black">
    <label className="mb-4 font-bold" htmlFor={name}>
      {label}
    </label>
    <input
      className="border border-grey-200 focus:border-grey-300 bg-grey-200 p-4"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={({ target }) => update(target.value)}
    />
  </div>
);

export const Textarea = ({ name, label, value, update }) => (
  <div className="flex-1 flex flex-col h-full text-black mt-8">
    <label className="mb-4 font-bold" htmlFor={name}>
      {label}
    </label>
    <textarea
      className="border-grey-200 focus:border-grey-300 bg-grey-200 text-black h-full p-4"
      name={name}
      value={value}
      placeholder="Write text here..."
      onChange={({ target }) => update(target.value)}
      style={{ minHeight: '120px' }}
    />
  </div>
);
