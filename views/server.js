const hapi = require('hapi');
const handlebars = require('handlebars');
const path = require('path');
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
  path: path.join(__dirname, 'templates'),
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});

module.exports = server;
