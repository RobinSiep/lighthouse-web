import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`

`;

function MachineListItem(props) {
  return (
    <ListItem>
      <h4>{props.machine.name}</h4>
    </ListItem>
  );
}

export default MachineListItem;
