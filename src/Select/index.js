import "./style.css"


const Select = ({ currencies, currency, setCurrency }) => (
  <section
    className="form__label">
    <label>
      Wybierz walutę:
      <select
        className="form__currencyValue"
        name="currency"
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
      >
        {currencies.map(currency => (
          <option
            key={currency.id}
            value={currency.short}
          >
            {currency.name}
          </option>
        ))};
      </select>
    </label>
  </section>
);

export default Select;