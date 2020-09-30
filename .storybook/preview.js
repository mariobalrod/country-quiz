import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/themes';
import GlobalStyle from '../src/styles/GlobalStyle';

const Wrapper = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
}

export const decorators = [Wrapper];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}