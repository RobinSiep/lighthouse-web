import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Notification from './Notification';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;


function Notifications(props) {
  console.log(props.notifications)
  return (
    <Container>
    {props.notifications.map((notification) => (
      <Notification />
    ))}
    </Container>
  );
}

export default connect(({ notifications }) => ({ notifications }))(Notifications);
