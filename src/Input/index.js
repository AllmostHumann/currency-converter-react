import "./style.css";

const Input = ({ exchangeAmount, setExchangeAmount }) => (

        <section>
            <label className="input__label">
                Wpisz kwotę w PLN:
                <input
                    className="input__amountValue"
                    type="number"
                    min="0.01"
                    required step="0.01"
                    placeholder="Pole wymagane"
                    value={exchangeAmount}
                    onChange={({ target }) => setExchangeAmount(target.value)}
                />
            </label>
        </section>
);

export default Input;