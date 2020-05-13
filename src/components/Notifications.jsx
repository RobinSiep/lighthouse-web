import React from 'react';
import styled from 'styled-components';
import Notification from './Notification';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;


export default function Notifications(props) {
  return (
    <Container>
      <Notification />
    </Container>
  );
}
