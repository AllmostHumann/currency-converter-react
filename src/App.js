import Header from "./Header";
import Amount from "./Amount";
import Buttons from "./Buttons";
import Currency from "./Currency";
import Result from "./Result";
import Footer from "./Footer";
import Form from "./Form";
import Container from "./Container";

function App() {

  return (
    <Container>
      <Header
        title="Czinkciarz.peel" />
      <Form>
        <Amount />
        <Currency />
        <Result />
        <Buttons />
        <Footer />
      </Form>
    </Container>
  );
}

export default App;
