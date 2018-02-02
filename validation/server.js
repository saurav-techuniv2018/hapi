const hapi = require('hapi');
const joi = require('joi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler: (request, response) => response('Validation'),
  config: {
    validate: {
      params: {
        breed: joi.string().alphanum().required(),
      },
    },
  },
});

if (!module.parent) {
  server
    .start(() => {
      console.log(`Server running at: ${server.info.uri}`);
    });
}


module.exports = server;
