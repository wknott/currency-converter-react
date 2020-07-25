import React from "react";
import "./styles.css";

const Result = ({ amount, fromCurrency, exchangeRatesTable, toCurrency }) => (
  <h2 className="result">
    {amount} {fromCurrency} = {
      (
        +amount
        * exchangeRatesTable.filter(({ code }) => code === fromCurrency)[0].mid
        / exchangeRatesTable.filter(({ code }) => code === toCurrency)[0].mid
      ).toFixed(2)} {toCurrency}
  </h2>
)

export default Result;