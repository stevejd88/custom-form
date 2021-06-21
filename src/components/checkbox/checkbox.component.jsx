import React from "react";

import "./checkbox-styles.css";

const Checkbox = ({ label, name, type, checked }) => {
  return (
    <div className='check-field'>
      <input type={type} id={name} name={name} checked={checked} />
      <label for={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
