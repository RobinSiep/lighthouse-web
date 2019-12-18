import React from 'react';
import openSocket from 'socket.io-client';

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
    console.log(this.state.machines);
    return <div></div>; 
  }
}
