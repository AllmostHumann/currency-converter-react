import { createGlobalStyle } from "styled-components"
import background from "../src/App/images/background.png"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
  background-color: hsl(0, 0%, 93%);
  background-image: url("${background}")
}
`;

export default GlobalStyle;