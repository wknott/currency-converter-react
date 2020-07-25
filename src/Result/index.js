import React from "react";
import "./styles.css";
import { rates } from "../rates";

const Result = ({ amount, fromCurrency, toCurrency }) => (
  <h2 className="result">
    {amount} {fromCurrency} = {
      (
        +amount *
        (
          rates.filter(({ code }) => code === fromCurrency)[0].mid /
          rates.filter(({ code }) => code === toCurrency)[0].mid
        )
      ).toFixed(2)
    } {toCurrency}
  </h2>
)

export default Result;