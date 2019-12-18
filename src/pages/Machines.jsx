import React from 'react';
import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:8080');

export default class Machines extends React.PureComponent {
  componentDidMount() {
    socket.on('machines', machines => console.log(machines));
  }

  render() {
    return <div>Machines</div>; 
  }
}
