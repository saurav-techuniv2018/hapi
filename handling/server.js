const hapi = require('hapi');
const inert = require('inert');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

server.register(inert);

server.path(__dirname);

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: 'public/index.html',
  },
});

module.exports = server;
