import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  machine: PropTypes.object.isRequired
};

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  border: 1px solid #F1F1F1;

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

const Name = styled.h4`
  color: #2F97C1;
`;

const UsageSummary = styled.p`
  margin-left: 16px;
`;

class  MachineListItem extends React.PureComponent {
  getUsageSummary() {
    return <UsageSummary><b>CPU</b> {this.getCPULoadAverage()}%</UsageSummary>;
  }

  getCPULoadAverage() {
    return this.props.machine.sys_info.load_average[0].toFixed(2);
  }

  render() {
    let online = "sys_info" in this.props.machine;
    let color
    let usageSummary

    if (online) {
      color = '#15CD72';
      usageSummary = this.getUsageSummary();
    } else {
      color = '#FF0000';
      usageSummary = null;
    }

    return (
      <ListItem className={this.props.className}>
        <Indicator color={color} />
        <Name>{this.props.machine.name}</Name>
        {usageSummary}
      </ListItem>
    );
  }
}

MachineListItem.propTypes = propTypes;

export default MachineListItem;
