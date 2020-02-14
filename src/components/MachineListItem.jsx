import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  machine: PropTypes.object.isRequired
};

const ListItem = styled.div``;

function MachineListItem(props) {
  return (
    <ListItem>
      <h4>{props.machine.name}</h4>
      <p>{("sys_info" in props.machine) ? 'Online' : 'Offline'}</p>
    </ListItem>
  );
}

MachineListItem.propTypes = propTypes;

export default MachineListItem;
