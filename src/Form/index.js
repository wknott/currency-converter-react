import React from "react";
import Label from "../Label";
import Select from "../Select";
import { Fieldset, Field } from "./styled";

const Form = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, rates }) => {
  const ratesToOptions = () => (
    rates.map(({ code }) => ({
      value: code,
      label: code,
    }))
  )

  return (
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
}

export default Form;
