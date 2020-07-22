import React from "react";
import "./styles.css";

const Form = ({ amount, setAmount }) => (
  <form class="form">
    <fieldset class="form__fieldset">
      <legend class="form__legend">Przelicznik</legend>
      <p>
        <label class="form__label">
          <span class="form__labelText">Pierwsza waluta:</span>
          <select class="form__select">
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </label>
      </p>
      <p>
        <label class="form__label">
          <span class="form__labelText">Kwota:</span>
          <input
            class="form__field js-amount"
            type="number" value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </label>
      </p>
      <p>
        <label class="form__label">
          <span class="form__labelText">Druga waluta:</span>
          <select class="form__select js-selectTo">
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </label>
      </p>
    </fieldset>
  </form>
)

export default Form;