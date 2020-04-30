import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';
import Login from './pages/Login';
import Machines from './pages/Machines';
import { lightTheme } from './theme';

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
    color: ${lightTheme.grey};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'B612', sans-serif;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: [nav] 50px 1fr;
  grid-row-gap: 8px;
`;

const StyledLogout = styled(Logout)`
  margin: 16px;
  grid-row: nav;
  justify-self: end;
`;

function App(props) {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Content>
            { props.authenticated && <StyledLogout>Log out</StyledLogout> }
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
  ({ auth }) => ({ authenticated: auth.authenticated })
)(App);
