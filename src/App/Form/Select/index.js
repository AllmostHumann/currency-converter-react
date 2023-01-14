import { Label, Options } from "./styled"


const Select = ({ currency, setCurrency, rates }) => (
  <section>
    <Label>
      Wybierz walutę:
      <Options
        name="currency"
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
      >
        {Object.keys(rates).map(currency => (
          <option
            key={currency}
            value={currency}
          >
            {currency}
          </option>
        ))};
      </Options>
    </Label>
  </section>
);

export default Select;