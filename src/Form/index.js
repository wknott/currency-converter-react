import React from "react";
import "./styles.css";
import FormField from "../FormField";

const Form = ({ amount, setAmount }) => (
  <form class="form">
    <fieldset class="form__fieldset">
      <legend class="form__legend">Przelicznik</legend>
      <FormField labelText="Pierwsza waluta">
        <select class="form__select">
          <option>PLN</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
      </FormField>
      <FormField labelText="Kwota">
        <input
          class="form__field"
          type="number"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
      </FormField>
      <FormField labelText="Druga waluta">
        <select class="form__select js-selectTo">
          <option>PLN</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
      </FormField>
    </fieldset>
  </form>
)

export default Form;