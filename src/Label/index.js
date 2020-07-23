import React from "react";

const Label = ({ children, labelText }) => (
  <p>
    <label className="form__label">
      <span className="form__labelText">{labelText}:</span>
      {children}
    </label>
  </p>
)

export default Label;