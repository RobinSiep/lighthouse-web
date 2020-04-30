import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

const propTypes = {
  machine: PropTypes.object.isRequired
};

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 25px;
  border: 1px solid ${props => props.theme.translucentGrey};
  border-radius: 3px;
  box-shadow: 1px 2px 4px rgba(0,0,0,.03);

  > * {
    margin: 0px 8px 0px 0px;
  }
`;

const Indicator = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${props => props.running ? props.theme.green : props.theme.red};
  border-radius: 50%;
`;

const Name = styled.h4`
  color: ${props => props.running ? props.theme.primaryColor : props.theme.lightGrey};
`;

const UsageSummary = styled.p`
  margin-left: 16px;
`;

const Icon = styled.i`
  margin-left: auto;
  color: ${props => props.running ? props.theme.translucentGrey : props.theme.green};
`;

class MachineListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.wake = this.wake.bind(this);
  }

  getUsageSummary() {
    return <UsageSummary>CPU {this.getCPULoadAverage()}% / RAM {this.getRAMUsagePercentage()}%</UsageSummary>;
  }

  getCPULoadAverage() {
    return this.props.machine.sys_info.load_average[0].toFixed(2);
  }

  getRAMUsagePercentage() {
    return (
      this.props.machine.sys_info.memory_used / this.props.machine.sys_info.memory * 100
    ).toFixed(2);
  }

  wake() {
    axios.post(
      process.env.LIGHTHOUSE_URL + "machines/" + this.props.machine.id + "/wake",
      null,
      { withCredentials: true }
    )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let running = "sys_info" in this.props.machine;
    let usageSummary = running ? this.getUsageSummary() : null;

    return (
      <ListItem className={this.props.className}>
        <Indicator running={running} />
        <Name running={running}>{this.props.machine.name}</Name>
        {usageSummary}
        <Icon running={running} className="fas fa-play" onClick={this.wake} />
      </ListItem>
    );
  }
}

MachineListItem.propTypes = propTypes;

export default MachineListItem;
