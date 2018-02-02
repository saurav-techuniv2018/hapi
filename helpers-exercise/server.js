const hapi = require('hapi');
const handlebars = require('handlebars');
const vision = require('vision');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

server.register(vision, (error) => {
  if (error) throw error;
});

server.path(__dirname);

server.views({
  engines: {
    html: handlebars,
  },
  path: 'templates',
  helpersPath: 'helpers',
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, response) => {
    response.view('index', request.query);
  },
});


if (!module.parent) {
  server.start()
    .then(() => {
      console.log(`Server running at ${server.info.uri}`);
    })
    .catch(console.log);
}

module.exports = server;
