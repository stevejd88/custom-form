import React from "react";

const Checkbox = ({ label, options, type }) => {
  return (
    <div>
      <p>{label}</p>
      {options.map((option) => {
        return (
          <div className='option-group'>
            <input
              type={type}
              id={option.toLowerCase()}
              name={option.toLowerCase()}
            />
            <label for={option.toLowerCase()}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;
