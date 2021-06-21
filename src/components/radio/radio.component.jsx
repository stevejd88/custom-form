import React from "react";

import "./radio.styles.css";

const Radio = ({ label, name, options, type, onChange }) => {
  return (
    <div className='radio'>
      <p>{label}</p>
      {options.map((option) => {
        return (
          <div className='radio-group'>
            <input
              className='radio-input'
              type={type}
              id={option.toLowerCase()}
              name={name}
              value={option.toLowerCase()}
              onChange={onChange}
            />
            <label htmlFor={option.toLowerCase()}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
