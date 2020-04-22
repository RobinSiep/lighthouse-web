import React from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import MachineListItem from '../components/MachineListItem';

const socket = openSocket('http://localhost:7102');

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const StyledMachineListItem = styled(MachineListItem)`
  max-width: 1000px;
`;

export default class Machines extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      machines: []
    }
  }

  componentDidMount() {
    socket.on('machines', machines => this.setState({ machines: machines }));
  }

  render() {
    return (
      <Container>
        {Object.keys(this.state.machines).map((sid, index) => (
          <StyledMachineListItem key={index} machine={this.state.machines[sid]} />
        ))}
      </Container>
    ); 
  }
}
