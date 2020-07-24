import React from "react";
import Label from "../Label";
import Select from "../Select";
import "./styles.css";

const Form = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, exchangeRatesTable }) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Przelicznik</legend>
      <Label labelText="Pierwsza waluta">
        <Select value={fromCurrency} setValue={setFromCurrency} exchangeRatesTable={exchangeRatesTable} />
      </Label>
      <Label labelText="Kwota">
        <input
          className="form__field"
          type="number"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
      </Label>
      <Label labelText="Druga waluta">
        <Select value={toCurrency} setValue={setToCurrency} exchangeRatesTable={exchangeRatesTable} />
      </Label>
    </fieldset>
  </form>
)

export default Form;
