import Header from "../Header";
import Form from "../Form";
import Container from "../Container";
import { currencies } from "../Currency/index";
import { useState } from "react";

function App() {

  const [result, getResult] = useState();

  const calculatedResult = (exchangeAmount, currency) => {
    const exchangeRate = currencies.find(({ short }) => short === currency).rate;
    const short = currencies.find(({ short }) => short === currency).short;

    getResult((exchangeAmount / exchangeRate).toFixed(2) + " " + short);

  };

  return (
    <Container>
      <Header
        title="Czinkciarz.peel" />
      <Form
        calculatedResult={calculatedResult}
        getResult={getResult}
        result={result}
      />
    </Container>
  );
}

export default App;
