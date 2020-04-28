import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { logout as logoutAction } from '../actions/auth';

const StyledLink = styled.a`
  color: ${props => props.theme.lightGrey};
`;

class Logout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    axios.post(process.env.LIGHTHOUSE_URL.concat("auth/logout"))
      .then(res => {
        this.props.dispatch(logoutAction())
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <StyledLink onClick={this.logout} className={this.props.className}>
        Log out
      </StyledLink>
    );
  }
}

export default connect()(Logout);
