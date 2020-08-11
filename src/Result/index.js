import React from "react";
import { StyledResult } from "./styled";
import { rates } from "../rates";

const Result = ({ amount, fromCurrency, toCurrency }) => (
  <StyledResult>
    {amount}&nbsp;{fromCurrency}&nbsp;= {
      (
        +amount *
        (
          rates.find(({ code }) => code === fromCurrency).mid /
          rates.find(({ code }) => code === toCurrency).mid
        )
      ).toFixed(2)
    }&nbsp;{toCurrency}
  </StyledResult>
)

export default Result;