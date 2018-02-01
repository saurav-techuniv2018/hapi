const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 65535),
});

server.route({
  path: '/proxy',
  method: 'GET',
  handler: (request, response) => {
    response('Proxy Route');
  },
});


if (!module.parent) {
  server.start()
    .then(() => { console.log(`Server running at: ${server.info.uri}`); })
    .catch(console.log);
}

module.exports = server;
