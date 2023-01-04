import { Label, Options } from "./styled"


const Select = ({ currencies, currency, setCurrency }) => (
  <section>
    <Label>
      Wybierz walutę:
      <Options
        name="currency"
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
      >
        {currencies.map(currency => (
          <option
            key={currency.short}
            value={currency.short}
          >
            {currency.name}
          </option>
        ))};
      </Options>
    </Label>
  </section>
);

export default Select;