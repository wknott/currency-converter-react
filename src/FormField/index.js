import React from "react";

const FormField = ({ children, labelText }) => (
  <p>
    <label class="form__label">
      <span class="form__labelText">{labelText}:</span>
      {children}
    </label>
  </p>
)

export default FormField;