import { useState } from "react";
import { Clock } from "./Clock";
import { Fieldset, ErrorText, LoadingText, Loading, Spinner } from "./styled";
import { useRatesData, } from "./useRatesData";
import Info from "./Info";
import Buttons from "./Buttons";
import Result from "./Result";
import Select from "./Select";
import Input from "./Input";
import Legend from "./Legend";
import moment from "moment/moment";

const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState("");
  const [currencyExchange, setCurrencyExchange] = useState("EUR");
  const [result, getResult] = useState();
  const { loadingStatus, ratesData } = useRatesData();
  const { date, rates } = ratesData;

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

  switch (loadingStatus) {

    case "error":
      return (
        <ErrorText>
          Dzwońcie po Proboszcza! Coś się popsuło!<br />
          Sprawdz połączenie z internetem, a następnie spróbuj odświeżyć stronę.
        </ErrorText>
      );
    case "loading":
      return (
        <>
          <LoadingText>
            Trwa ładowanie danych z Europejskiego Banku Centralnego...
          </LoadingText>
          <Loading>
            <Spinner />
          </Loading>
        </>
      );
    case "success":
      return (
        <form
          onSubmit={onFormSubmit}
          onReset={onFormReset}
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
              date={moment(date).format('DD.MM.YYYY')}
            />
          </Fieldset>
        </form >
      );
      default:
        return;
  };
}
  export default Form;