import React from "react";
import { StyledResult } from "./styled";

const Result = ({ amount, fromCurrency, toCurrency, rates }) => (
  <StyledResult>
    {amount}&nbsp;{fromCurrency}&nbsp;= {
      (
        +amount *
        (
          rates[toCurrency] /
          rates[fromCurrency]
        )
      ).toFixed(2)
    }&nbsp;{toCurrency}
  </StyledResult>
)

export default Result;