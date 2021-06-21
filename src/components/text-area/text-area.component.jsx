import React from "react";

import "./text-area.styles.css";

const TextArea = ({ onChange, label, id, name, value, disabled, error }) => {
  return (
    <div className='text-area-group'>
      <label htmlFor={id}>{label}</label>
      <textarea
        className='input'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
      <p className='error'>{error.meaning}</p>
    </div>
  );
};

export default TextArea;
