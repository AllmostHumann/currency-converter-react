import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import GlobalStyle from "../globalStyle";

function App() {

  return (
    <>
      <GlobalStyle />
      <Header
        title="Czinkciarz.peel" />
      <Form />
      <Footer />
    </>
  );
}

export default App;
