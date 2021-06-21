import React from "react";

const Checkbox = ({ label, name, type, checked }) => {
  return (
    <div>
      <input type={type} id={name} name={name} checked={checked} />
      <label for={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
