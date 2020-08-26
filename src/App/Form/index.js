import React from "react";
import Label from "./Label";
import Select from "./Select";
import { Fieldset, Field } from "./styled";

const Form = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, rates }) => {

  return (
    <form>
      <Fieldset>
        <Label labelText="Pierwsza waluta">
          <Select
            value={fromCurrency}
            setValue={setFromCurrency}
            options={Object.keys(rates)}
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
            options={Object.keys(rates)}
          />
        </Label>
      </Fieldset>
    </form>
  )
}

export default Form;
