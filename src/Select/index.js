import React from "react";
import { StyledSelect } from "./styled";

const Select = ({ value, setValue, options }) => (
  <StyledSelect
    className="form__select"
    value={value}
    onChange={({ target }) => setValue(target.value)}
  >
    {options.map((option) => <option key={option}>{option}</option>)}
  </StyledSelect>
)

export default Select