import "./style.css"

const Currency = () => (
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
);

export default Currency;