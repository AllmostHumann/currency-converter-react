import { Label, InputField } from "./styled";

const Input = ({ exchangeAmount, setExchangeAmount }) => (
  <section>
    <Label>
      Wpisz kwotę w PLN:
      <InputField
        type="number"
        min="0.01"
        required step="0.01"
        placeholder="Pole wymagane"
        value={exchangeAmount}
        onChange={({ target }) => setExchangeAmount(target.value)}
      />
    </Label>
  </section>
);

export default Input;