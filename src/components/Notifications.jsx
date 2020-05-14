import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Notification from './Notification';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

const StyledNotification = styled(Notification)`
  margin 8px;
`;


function Notifications(props) {
  return (
    <Container>
    {props.notifications.keySeq().map((id, index) => (
      <StyledNotification key={id} id={id} timeToLiveInSeconds={5} {...props.notifications.get(id)} />
    ))}
    </Container>
  );
}

export default connect(({ notifications }) => ({ notifications }))(Notifications);
