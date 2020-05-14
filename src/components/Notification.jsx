import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string
}

const defaultProps = {
  severity: 'info'
}

const Container = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${props => props.color};
  box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 2px 2px rgba(0,0,0,0.12),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
`;

const Message = styled.h5`
  color: white;
`;

class Notification extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getColor = this.getColor.bind(this);
  }

  getColor(severity) {
    switch(severity) {
      case 'error':
        return this.props.theme.red
      default:
        return this.props.theme.primaryColor
    }
  }

  render() {
    let color = this.getColor(this.props.severity);

    return (
      <Container className={this.props.className} color={color}>
        <Message>{this.props.message}</Message>
      </Container>
    );
  }
}

Notification.propTypes = propTypes

export default withTheme(Notification);
