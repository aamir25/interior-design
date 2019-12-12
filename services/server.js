const http = require('http');
const app = require('./api/app');

const port = 4200;
const server = http.createServer(app);

server.listen(port);