import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Machines from './pages/Machines';

const theme = {
  primaryColor: "#23242c"
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
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
