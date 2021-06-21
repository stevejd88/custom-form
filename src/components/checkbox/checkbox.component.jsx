import React from "react";

import "./checkbox-styles.css";

const Checkbox = ({ id, handleClick, isChecked, value, label }) => {
  return (
    <div className='check-field'>
      <input
        type='checkbox'
        id={id}
        onClick={handleClick}
        checked={isChecked}
        value={value}
      />{" "}
      {label}
      {/* <label htmlFor={name}>{label}</label> */}
    </div>
  );
};

export default Checkbox;
