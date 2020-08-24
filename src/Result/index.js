import React from "react";
import { StyledResult } from "./styled";

const Result = ({ amount, fromCurrency, toCurrency, rates }) => (
  <StyledResult>
    {amount}&nbsp;{fromCurrency}&nbsp;= {
      (
        +amount *
        (
          rates.find(({ code }) => code === toCurrency).rate /
          rates.find(({ code }) => code === fromCurrency).rate
        )
      ).toFixed(2)
    }&nbsp;{toCurrency}
  </StyledResult>
)

export default Result;