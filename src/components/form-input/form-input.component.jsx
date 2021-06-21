import React from "react";

import "./form-input.styles.css";

const FormInput = ({
  onChange,
  label,
  id,
  name,
  value,
  type,
  placeholder,
  readOnly,
  disabled
}) => {
  return (
    <div className='text-input group'>
      <label for={id}>{label}</label>
      <input
        className='input'
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default FormInput;
