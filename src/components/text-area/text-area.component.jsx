import React from "react";

import "./text-area.styles.css";

const TextArea = ({ onChange, label, id, name, value, disabled }) => {
  return (
    <div className='text-area-group'>
      <label for={id}>{label}</label>
      <textarea
        className='input'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
      <p className='error'>Field is required</p>
    </div>
  );
};

export default TextArea;
