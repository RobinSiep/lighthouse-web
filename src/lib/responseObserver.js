import { notify } from '../actions/notification';

export default function observe(socket, props) {
  socket.on('response', (status, error) => {
    props.dispatch(notify(error, 'error'));
  });
}
