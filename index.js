const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const mongoose = require('mongoose');

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

server.on('close', () => {
  mongoose.connection.close();
});