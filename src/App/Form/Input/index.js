import { Label, InputField } from "./styled";

const Input = ({ exchangeAmount, setExchangeAmount, inputRef }) => (
  <section>
    <Label>
      Wpisz kwotę w PLN:
      <InputField
        type="number"
        step="0.01"
        min="0.01"
        placeholder="Pole wymagane"
        required
        value={exchangeAmount}
        onChange={({ target }) => setExchangeAmount(target.value)}
      />
    </Label>
  </section>
);

export default Input;