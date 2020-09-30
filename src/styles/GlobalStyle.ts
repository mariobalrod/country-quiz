import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import Background from "images/background/background.png";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-size: 100%; 
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-image: url(${Background});
    background-size: cover;
    color: white;
    margin: 0px;
    padding: 0px;
  }
`;
export default GlobalStyle;
