import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryColor};
  box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 2px 2px rgba(0,0,0,0.12),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
`;

const Message = styled.h5`
  color: white;
`;

export default function Notification(props){
  return (
    <Container>
      <Message>This is a test message.</Message>
    </Container>
  );
}
