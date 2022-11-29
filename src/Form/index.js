import "./style.css";

const Form = () => (
  <fieldset className="form__fieldset">
    <legend
      className="form__legend">
      Currency conventer
    </legend>
    <section className="form__label">
      <label>
        Wpisz kwotę w PLN:
        <input
          className="form__amountValue"
          type="number"
          min="0.01"
          required step="0.01"
          placeholder="Pole wymagane" />
      </label>
    </section>
    <section className="form__label">
      <label>
        Wybierz walutę:
        <select className="form__currencyValue" name="currency" id="select">
          <option value="EUR">Euro (EUR)</option>
          <option value="USD">Dolar amerykański (USD)</option>
          <option value="NOK">Korona norweska (NOK)</option>
        </select>
      </label>
    </section>
    <section className="form__label">
      <label>
        Otrzymasz:
        <strong className="form__resultValue">N/A</strong>
      </label>
    </section>
    <div>
      <button className="form__Button" type="submit">Przelicz</button>
      <button className="form__Button" type="reset">Reset</button>
    </div>
    <section>
      <p>*Kursy walut pobrane z Narodowego Banku Polskiego.<br />
        Aktualne na dzień: <strong>2022-10-26</strong></p>
    </section>
  </fieldset>

);

export default Form;