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
  requiredField
}) => {
  return (
    <div className='text-area-group'>
      <label htmlFor={id}>
        {label} {requiredField && <span className='required-field'>*</span>}
      </label>
      <textarea
        className='input'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
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
