import React from "react";
import "./styles.css";

const Label = ({ children, labelText }) => (
  <p>
    <label className="label">
      {labelText}:
      {children}
    </label>
  </p>
)

export default Label;