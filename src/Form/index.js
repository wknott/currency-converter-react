import React from "react";
import "./styles.css";
import Label from "../Label";
import Select from "../Select";
import { rates } from "../rates";

const ratesToOptions = () => (
  rates.map(({ code, currency }) => ({
    value: code,
    label: currency,
  }))
)

const Form = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency }) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Przelicznik</legend>
      <Label labelText="Pierwsza waluta">
        <Select
          value={fromCurrency}
          setValue={setFromCurrency}
          options={ratesToOptions()}
        />
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
        <Select
          value={toCurrency}
          setValue={setToCurrency}
          options={ratesToOptions()}
        />
      </Label>
    </fieldset>
  </form>
)

export default Form;