import React from "react";
import Label from "../Label";
import Select from "../Select";
import { rates } from "../rates";
import { Fieldset, Field } from "./styled";

const ratesToOptions = () => (
  rates.map(({ code, currency }) => ({
    value: code,
    label: currency,
  }))
)

const Form = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency }) => (
  <form>
    <Fieldset>
      <Label labelText="Pierwsza waluta">
        <Select
          value={fromCurrency}
          setValue={setFromCurrency}
          options={ratesToOptions()}
        />
      </Label>
      <Label labelText="Kwota">
        <Field
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
    </Fieldset>
  </form>
)

export default Form;
