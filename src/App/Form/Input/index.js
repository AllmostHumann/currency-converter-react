import { Label, InputField } from "./styled";

const Input = ({ exchangeAmount, setExchangeAmount, inputRef }) => (
  <section>
    <Label>
      Wpisz kwotę w PLN:
      <InputField
        type="number"
        required
        step="0.01"
        min="0.01"
        placeholder="Pole wymagane"
        ref={inputRef}
        value={exchangeAmount}
        onChange={({ target }) => setExchangeAmount(target.value)}
      />
    </Label>
  </section>
);

export default Input;