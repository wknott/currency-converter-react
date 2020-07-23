import React from "react";

const Select = ({ value, setValue, exchangeRatesTable }) => (
  <select
    className="form__select"
    value={value}
    onChange={({ target }) => setValue(target.value)}
  >
    {exchangeRatesTable.map(({ code, currency }) => <option key={code} value={code}>{currency}</option>)}
  </select>
)

export default Select