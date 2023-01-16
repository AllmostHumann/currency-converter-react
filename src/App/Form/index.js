import { useState } from "react";
import { Clock } from "./Clock";
import { Fieldset, ErrorText, LoadingText, Loading, Spinner } from "./styled";
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
  const [result, getResult] = useState();
  const ratesData = useRatesData();
  const { date, rates, status } = ratesData;

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(exchangeAmount, currencyExchange);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setExchangeAmount("");
    getResult();
  };

  const calculatedResult = (exchangeAmount, currency) => {
    const exchangeRate = rates[currency];

    getResult({
      sourceAmount: +exchangeAmount,
      targetAmount: exchangeAmount * exchangeRate,
      currency,
    });
  };

  return (

    <form
      onSubmit={onFormSubmit}
      onReset={onFormReset}
    >
      {status === "error" ? (
        <ErrorText>
          Coś się popsuło!<br />
          Sprawdz połączenie z internetem, a następnie spróbuj odświeżyć stronę.
        </ErrorText>
      ) : status !== "succes" ? (
        <>
          <LoadingText>
            Trwa ładowanie danych z Europejskiego Banku Centralnego...
          </LoadingText>
          <Loading>
            <Spinner />
          </Loading>
        </>
      ) : (
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
      )}
    </form>
  );
};

export default Form;