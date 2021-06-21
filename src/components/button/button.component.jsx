import React from "react";

import "./button.styles.css";

const Button = ({ type, label }) => {
  return <button type={type}>{label}</button>;
};

export default Button;
