const hapi = require('hapi');
const h2o2 = require('h2o2');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

server.register(h2o2, (error) => { if (error) throw error; });

server.route({
  path: '/{path*}',
  method: 'GET',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535,
    },
  },
});

if (!module.parent) {
  server.start()
    .then(() => { console.log(`Server running at: ${server.info.uri}`); })
    .catch(console.log);
}

module.exports = server;
