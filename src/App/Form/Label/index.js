import React from "react";
import { StyledLabel } from "./styled";

const Label = ({ children, labelText }) => (
  <p>
    <StyledLabel>
      {labelText}:
      {children}
    </StyledLabel>
  </p>
)

export default Label;