const hapi = require('hapi');
const joi = require('joi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/login',
  method: 'POST',
  handler: (request, response) => response('login successful'),
  config: {
    validate: {
      payload: joi.object({
        username: joi.string(),
        password: joi.string().alphanum(),
        accessToken: joi.string().alphanum(),
        birthyear: joi.number().integer().min(1900).max(2013),
        email: joi.string().email(),
      })
        .options({ allowUnknown: true })
        .with('username', 'birthyear')
        .without('password', 'accessToken'),
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
