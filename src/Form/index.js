import "./style.css";
import { useState } from "react";
import { currencies } from "../Currencies/index";
import Footer from "../Footer";
import Buttons from "../Buttons";
import Result from "../Result";
import Select from "../Select";

const Form = ({ result, calculatedResult, getResult }) => {

  const [exchangeAmount, setExchangeAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(exchangeAmount, currency);
  };

  const onFormReset = () => {
    setExchangeAmount("");
    getResult("");
  };

  return (
    <form
      onSubmit={onFormSubmit}
      onReset={onFormReset}
    >
      <fieldset
        className="form__fieldset"
      >
        <legend
          className="form__legend"
        >
          Currency conventer
        </legend>
        <section
          className="form__label"
        >
          <label>
            Wpisz kwotę w PLN:
            <input
              className="form__amountValue"
              type="number"
              min="0.01"
              required step="0.01"
              placeholder="Pole wymagane"
              value={exchangeAmount}
              onChange={({ target }) => setExchangeAmount(target.value)}
            />
          </label>
        </section>
        <Select
        currency={currency}
        setCurrency={setCurrency}
        currencies={currencies}
        />
        <Result
          result={result}
        />
        <Buttons />
        <Footer />
      </fieldset>
    </form>
  );
}

export default Form;