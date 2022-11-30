import "./style.css";
import { useState } from "react";
import { currencies } from "../Currencies/index";
import Footer from "../Footer";
import Buttons from "../Buttons";
import Result from "../Result";
import Select from "../Select";
import Input from "../Input";

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
        <Input 
        exchangeAmount={exchangeAmount}
        setExchangeAmount={setExchangeAmount}
        />
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