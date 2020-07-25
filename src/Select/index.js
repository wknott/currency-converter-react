import React from "react";

const Select = ({ value, setValue, options }) => (
  <select
    className="form__select"
    value={value}
    onChange={({ target }) => setValue(target.value)}
  >
    {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
  </select>
)

export default Select