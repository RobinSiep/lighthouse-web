import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import MachineListItem from '../components/MachineListItem';
import observe from '../lib/responseObserver';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  flex-direction: column;
`;

const StyledMachineListItem = styled(MachineListItem)`
  max-width: 1000px;
  margin-top: 8px;
`;

class Machines extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      machines: []
    }
  }

  componentDidMount() {
    let socket = openSocket(process.env.LIGHTHOUSE_URL);
    socket.on('machines', machines => this.setState({ machines: machines }));
    observe(socket, this.props);
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

export default connect()(Machines)
