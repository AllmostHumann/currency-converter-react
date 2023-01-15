import { useState } from "react";
import { Clock } from "./Clock";
import { Fieldset } from "./styled";
import { useRatesData } from "./useRatesData";
import Info from "./Info";
import Buttons from "./Buttons";
import Result from "./Result";
import Select from "./Select";
import Input from "./Input";
import Legend from "./Legend";

const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState("");
  const [currencyExchange, setCurrencyExchange] = useState("EUR");
  const [result, getResult] = useState("");
  const ratesData = useRatesData();
  const { date, rates, status } = ratesData;

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(exchangeAmount, currencyExchange);
  };

  const onFormReset = () => {
    setExchangeAmount("");
    getResult("");
  };

  const calculatedResult = (exchangeAmount, currency) => {
    const exchangeRate = rates[currency];

    getResult((exchangeAmount / exchangeRate).toFixed(2) + " ");

  };

  return (

    <form
      onSubmit={onFormSubmit}
      onReset={onFormReset}
      status={status}
    >
      <Fieldset>
        <Legend />
        <Clock />
        <Input
          exchangeAmount={exchangeAmount}
          setExchangeAmount={setExchangeAmount}
        />
        <Select
          currencyExchange={currencyExchange}
          setCurrencyExchange={setCurrencyExchange}
          rates={rates}
        />
        <Result
          result={result}
        />
        <Buttons />
        <Info 
        date={date}
        />
      </Fieldset>
    </form>
  );
};


export default Form;