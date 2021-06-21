import React, { useRef } from "react";

import "./toggle-switch.styles.css";

const ToggleSwitch = ({ name, label, value, checked, onChange }) => {
  const toggle = useRef();
  const checkbox = useRef();
  function handleToggle() {
    if (onChange) onChange();
    toggle.current.classList.toggle("toggled");
    checkbox.current.checked = !checkbox.current.checked;
    console.log(checkbox.current.checked);
  }
  return (
    <>
      <p>{label}</p>
      <input
        ref={checkbox}
        name={name}
        className='toggle-checkbox'
        type='checkbox'
        defaultChecked={value}
        value={value || false}
      />
      <span
        ref={toggle}
        onClick={handleToggle}
        className={checked ? "toggled toggle-switch" : "toggle-switch"}
      >
        <span className='toggle'></span>
      </span>
    </>
  );
};

export default ToggleSwitch;
