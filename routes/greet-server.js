const hapi = require('hapi');

const greetServer = new hapi.Server();

greetServer.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

greetServer.route({
  path: '/{name*}',
  method: 'GET',
  handler: (request, reply) => {
    const { name } = request.params;

    if (name === '') {
      reply('Hello');
      return;
    }

    reply(`Hello ${name}`);
  },
});

module.exports = greetServer;
