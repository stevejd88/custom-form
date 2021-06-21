import React from "react";

const FormInput = ({
  onChange,
  label,
  id,
  name,
  value,
  type,
  readOnly,
  disabled
}) => {
  return (
    <div className='group'>
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
      ></input>
    </div>
  );
};

export default FormInput;
