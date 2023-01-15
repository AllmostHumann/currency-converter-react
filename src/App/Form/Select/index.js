import { Label, Options } from "./styled"


const Select = ({ rates, currencyExchange, setCurrencyExchange }) => (
  <section>
    <Label>
      Wybierz walutę:
      <Options
        name="currency"
        value={currencyExchange}
        onChange={({ target }) => setCurrencyExchange(target.value)}
      >
        {Object.keys({rates}).map(currency => (
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