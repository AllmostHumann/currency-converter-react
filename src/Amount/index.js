import "./style.css";

const Amount = () => (
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
);

export default Amount;