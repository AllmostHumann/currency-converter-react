import "./style.css";
import React, { useState } from "react";
import { currencies } from "../Currencies/index";
import Footer from "../Footer";
import Buttons from "../Buttons";
import Result from "../Result";
import Select from "../Select";
import Input from "../Input";
import Legend from "../Legend";

const Form = () => {

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

  const [result, getResult] = useState();

  const calculatedResult = (exchangeAmount, currency) => {
    const exchangeRate = currencies.find(({ short }) => short === currency).rate;
    const short = currencies.find(({ short }) => short === currency).short;

    getResult((exchangeAmount / exchangeRate).toFixed(2) + " " + short);

  };

  return (
    
      <form
        onSubmit={onFormSubmit}
        onReset={onFormReset}
        result={result}
      >
        <fieldset
          className="form__fieldset"
        >
          <Legend />
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

};


export default Form;