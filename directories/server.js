const inert = require('inert');
const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

server.register(inert);
server.path(__dirname);

server.route({
  path: '/foo/bar/baz/{path*}',
  method: 'GET',
  handler: {
    directory: {
      path: 'public/',
    },
  },
});

module.exports = server;
