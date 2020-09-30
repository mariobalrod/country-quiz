import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/themes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div />
    </ThemeProvider>
  );
};

export default App;
