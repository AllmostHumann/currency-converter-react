import Header from "./Header";
import Amount from "./Amount";
import Buttons from "./Buttons";
import Currency from "./Currency";
import Result from "./Result";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  
  return (
    <div>
      <Header />
      <Form>
        <Amount />
        <Currency />
        <Result />
        <Buttons />
        <Footer />
      </Form>
    </div>
  );
}

export default App;
