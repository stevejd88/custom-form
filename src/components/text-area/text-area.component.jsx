import React from "react";

import "./text-area.styles.css";

const TextArea = ({
  onChange,
  label,
  id,
  name,
  value,
  disabled,
  error,
  onBlur,
  touched,
  requiredField,
  placeholder
}) => {
  return (
    <div className='text-area-group'>
      <label htmlFor={id}>
        {label} {requiredField && <span className='required-field'>&#42;</span>}
      </label>
      <textarea
        className='input'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
      ></textarea>
      {touched.meaningOfLife && value ? (
        <p className='success'>Answer recorded</p>
      ) : (
        <p className='error'>{error.meaning}</p>
      )}
    </div>
  );
};

export default TextArea;
