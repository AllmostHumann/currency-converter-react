import "./style.css";
import { useState } from "react";
import { currencies } from "../common/currencies";
import Info from "../Info";
import Buttons from "../Buttons";
import Result from "../Result";
import Select from "../Select";
import Input from "../Input";
import Legend from "../Legend";
import Clock from "../Clock";

const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, getResult] = useState("N/A");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(exchangeAmount, currency);
  };

  const onFormReset = () => {
    setExchangeAmount("");
    getResult("");
  };

  const calculatedResult = (exchangeAmount, currency) => {
    const {rate: exchangeRate} = currencies.find(({ short }) => short === currency);
    const {short} = currencies.find(({ short }) => short === currency);
    
    getResult((exchangeAmount / exchangeRate).toFixed(2) + " " + short);

  };

  return (

    <form
      onSubmit={onFormSubmit}
      onReset={onFormReset}
    >
      <fieldset
        className="form__fieldset"
      >
        <Legend />
        <Clock />
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
        <Info />
      </fieldset>
    </form>
  );
};


export default Form;