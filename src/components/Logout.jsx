import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => props.theme.lightGrey};
`;

class Logout extends React.PureComponent {
  render() {
    return <StyledLink className={this.props.className}>Log out</StyledLink>;
  }
}

export default Logout;
