import React from "react";

const TextArea = ({ onChange, label, id, name, value, disabled }) => {
  return (
    <div className='group'>
      <label for={id}>{label}</label>
      <textarea
        className='input'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
    </div>
  );
};

export default TextArea;
