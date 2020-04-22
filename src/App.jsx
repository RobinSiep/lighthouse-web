import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Machines from './pages/Machines';

const theme = {
  primaryColor: "#0065FF",
  translucentGrey: "#F1F1F1",
  grey: "#676767"
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=B612:wght@400;700&family=Roboto:wght@300;400&display=swap');

  html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${theme.grey};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'B612', sans-serif;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Content>
            <Switch>
              <Route exact
                path="/"
                component={Machines} />
            </Switch>
            <GlobalStyle />
          </Content>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
