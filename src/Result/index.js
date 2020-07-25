import React from "react";
import "./styles.css";
import { rates } from "../rates";

const Result = ({ amount, fromCurrency, toCurrency }) => (
  <h2 className="result">
    {amount} {fromCurrency} = {
      (
        +amount *
        (
          rates.find(({ code }) => code === fromCurrency).mid /
          rates.find(({ code }) => code === toCurrency).mid
        )
      ).toFixed(2)
    } {toCurrency}
  </h2>
)

export default Result;