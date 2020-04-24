import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';
import Login from './pages/Login';
import Machines from './pages/Machines';

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
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'B612', sans-serif;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledLogout = styled(Logout)`
  float: right;
  margin: 16px;
`;

function App(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme}>
        <BrowserRouter>
          <Content>
            <StyledLogout>Log out</StyledLogout>
            <Switch>
              <ProtectedRoute exact path='/' component={Machines} fallbackComponent={Login} />
            </Switch>
            <GlobalStyle />
          </Content>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default connect(
  ({ auth, theme }) => ({ authenticated: auth.authenticated, theme: theme.theme })
)(App);
