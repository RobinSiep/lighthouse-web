import React from 'react';
import openSocket from 'socket.io-client';
import MachineListItem from '../components/MachineListItem';

const  socket = openSocket('http://localhost:8080');

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
      <div>
        {Object.keys(this.state.machines).map((sid, index) => (
          <MachineListItem key={index} machine={this.state.machines[sid]} />
        ))}
      </div>
    ); 
  }
}
