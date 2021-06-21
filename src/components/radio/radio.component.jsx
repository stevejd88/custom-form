import React from "react";

const Radio = ({ label, name, options, type, onChange }) => {
  return (
    <div className='radio-group'>
      <p>{label}</p>
      {options.map((option) => {
        return (
          <div className='radio-group'>
            <input
              type={type}
              id={option.toLowerCase()}
              name={name}
              value={option.toLowerCase()}
              onChange={onChange}
            />
            <label for={option.toLowerCase()}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
