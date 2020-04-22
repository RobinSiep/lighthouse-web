import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  machine: PropTypes.object.isRequired
};

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  border: 1px solid black;

  > * {
    margin: 0px 8px 0px 0px;
  }
`;

const Indicator = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

function MachineListItem(props) {
  let online = "sys_info" in props.machine;
  let color = online ? '#15CD72' : '#FF0000';

  return (
    <ListItem className={props.className}>
      <Indicator color={color} />
      <h4>{props.machine.name}</h4>
    </ListItem>
  );
}

MachineListItem.propTypes = propTypes;

export default MachineListItem;
