import app from '../src/app.js';
import { createServer } from 'http';

// Set the port and normalize it
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = createServer(app); // create server instance

// Config server
server.listen(port);
server.on('error', onError);

console.log('Running on ' + port);

// Function to normalize port value
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// Callback to handle error
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle error cases
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
